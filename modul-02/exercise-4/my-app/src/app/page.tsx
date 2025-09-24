'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState, useRef } from 'react';

interface ITask {
  id: number;
  name: string;
  isComplete: boolean;
  createdAt: Date;
}

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]); //tambah tugas
  const [editingTask, setEditingTask] = useState<ITask | null>(null); // Set edit tugas
  const [searchTerm, setSearchTerm] = useState(''); //Set search
  const inputRef = useRef<HTMLInputElement | null>(null); // Input/tambah tugas
  const editInputRef = useRef<HTMLInputElement | null>(null); // Tambahkan ref untuk input edit.
  const { theme, setTheme } = useTheme(); //Set tema
  const [filter, setFilter] = useState('All'); // Set filter awal ke 'All'
  const [sortBy, setSortBy] = useState('ASC'); // Set sort awal ke 'newest'

  // Fungsi untuk menambahkan tugas baru
  const addNewTask = () => {
    if (inputRef.current?.value) {
      const lastId = tasks[tasks.length - 1]?.id || 0;

      setTasks([
        ...tasks,
        {
          id: lastId + 1,
          name: inputRef.current.value,
          isComplete: false,
          createdAt: new Date(),
        },
      ]);
    }
  };

  // Fungsi untuk menyelesaikan tugas
  const onComplete = (task: ITask) => {
    const newTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, isComplete: !t.isComplete } : t
    );

    setTasks(newTasks);
  };

  // Fungsi untuk menghapus tugas
  const onDelete = (task: ITask) => {
    const newTasks = tasks.filter((t) => t.id !== task.id);

    setTasks(newTasks);
  };

  // Fungsi untuk memulai mode edit
  const startEdit = (task: ITask) => {
    setEditingTask(task);
  };

  // Fungsi untuk menyimpan perubahan setelah edit
  const saveEdit = (editedTask: ITask) => {
    if (editInputRef.current?.value) {
      setTasks(
        tasks.map((task) =>
          task.id === editedTask.id
            ? { ...task, name: editInputRef.current!.value }
            : task
        )
      );
      setEditingTask(null); // Keluar dari mode edit
    }
  };

  // Fungsi untuk membatalkan mode edit
  const cancelEdit = () => {
    setEditingTask(null);
  };

  // Logika filter, search, dan sort
  const filteredAndSortedTasks = tasks
    .filter((task) => {
      // Logika filter berdasarkan status (semua, aktif, selesai)
      if (filter === 'Active') {
        return !task.isComplete;
      }
      if (filter === 'Complete') {
        return task.isComplete;
      }
      return true; // Tampilkan semua jika filternya 'All'
    })
    .filter((task) =>
      // Logika search berdasarkan input pengguna
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      // Logika sort
      if (sortBy === 'ASC') {
        return b.createdAt.getTime() - a.createdAt.getTime();
      }
      if (sortBy === 'DESC') {
        return a.createdAt.getTime() - b.createdAt.getTime();
      }
      return 0;
    });

  return (
    <div className='flex flex-col items-center justify-center mx-auto mt-12 lg:mt-[80px] font-jose'>
      <Image
        alt='jumbotron'
        width={300}
        height={200}
        className='absolute -z-10 top-0 w-full h-[200px] lg:h-[300px]'
        src={theme === 'light' ? '/light-jumbotron.png' : '/dark-jumbotron.png'}
      />
      <div className='flex flex-col z-10 w-[325px] lg:w-[541px]'>
        <div className='flex items-center justify-between mb-5'>
          <span className='font-bold text-3xl lg:text-[40px] tracking-[15px] text-white'>
            TODO
          </span>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? (
              <Image
                src='/moon-icon.png'
                alt='toggle-icon'
                width={26}
                height={26}
                className='w-5 h-5 lg:h-[26px] lg:w-[26px]'
              />
            ) : (
              <Image
                src='/sun-icon.png'
                alt='toggle-icon'
                width={26}
                height={26}
                className='w-5 h-5 lg:h-[26px] lg:w-[26px]'
              />
            )}
          </button>
        </div>
        {/* Input tambahkan tugas baru */}
        <div className='flex gap-3 px-6 w-[327px] lg:w-[540px] h-12 items-center mb-4 lg:mb-[24px] lg:h-[64px] rounded-[5px] lg:py-[20px] lg:px-[24px]  bg-white dark:bg-[#25273D] text-[#494C6B] dark:text-[#C8CBE7] shadow-xl'>
          {/* <div className='border border-[#E3E4F1] dark:border-[#393A4B] rounded-full lg:w-[24px] lg:h-[24px]'></div> */}
          <Image
            src={theme === 'light' ? '/checkbox-kosong.svg' : '/dark-oval.svg'}
            alt='checkbox'
            width={20}
            height={20}
          />
          <input
            className='border-none focus:outline-none font-normal text-xs lg:text-[18px] lg:tracking-[-0.25px]'
            type='text'
            ref={inputRef}
            placeholder='Create a new todo...'
          />
          <button
            onClick={addNewTask}
            className=' relative -right-14 font-bold bg-fuchsia-700 rounded-md px-4 py-2 text-xs text-white lg:-right-40 lg:px-8 lg:py-3 lg:text-sm cursor-pointer'
          >
            ADD
          </button>
        </div>
        {/* Bagian input pencarian dan Sort */}
        <div className='flex gap-3 px-6 w-[327px] lg:w-[540px] h-12 items-center mb-4 lg:h-[64px] rounded-[5px] bg-white dark:bg-[#25273D] shadow-xl'>
          <input
            className='border-none focus:outline-none font-normal text-xs lg:text-[18px] lg:tracking-[-0.25px] w-full bg-transparent text-[#494C6B] dark:text-[#C8CBE7]'
            type='text'
            placeholder='Search tasks...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Tambahkan tombol sort */}
          <span
            onClick={() => setSortBy(sortBy === 'ASC' ? 'DESC' : 'ASC')}
            className='hover:cursor-pointer ml-3 cursor-pointer hover:text-black text-[#9495A5] text-xs lg:text-[14px]'
          >
            Sort ({sortBy})
          </span>
        </div>

        {/* Daftar tugas */}
        <div className='flex flex-col w-[327px] h-[368px] lg:w-[540px] lg:h-[439px] bg-white dark:bg-[#25273D] rounded-[5px] text-[#393A4B] dark:text-[#C8CBE7] shadow-xl'>
          {filteredAndSortedTasks.map((task: ITask) => (
            <div
              key={task.id}
              className='flex py-4 px-6 gap-3 border-b border-[#E3E4F1] dark:border-[#393A4B]'
            >
              <input
                type='checkbox'
                onChange={() => onComplete(task)}
                checked={task.isComplete}
              />

              {editingTask?.id === task.id ? (
                <>
                  <input
                    type='text'
                    defaultValue={task.name}
                    ref={editInputRef}
                    className='border border-gray-300 rounded-sm p-1 w-full'
                  />
                  <button
                    onClick={() => saveEdit(task)}
                    className='text-green-500 hover:text-green-700'
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className='text-gray-500 hover:text-gray-700'
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span
                    onDoubleClick={() => startEdit(task)}
                    className={`w-full ${
                      task.isComplete
                        ? 'line-through text-[#D1D2DA] dark:text-[#4D5067]'
                        : ''
                    }`}
                  >
                    {task.name}
                  </span>
                  <button
                    onClick={() => startEdit(task)}
                    className='text-blue-500 hover:text-blue-700'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(task)}
                    className='text-red-500 hover:text-red-700 cursor-pointer font-bold'
                  >
                    X
                  </button>
                </>
              )}
            </div>
          ))}

          {/* Footer dengan filter, clear completed */}
          <div className=' flex justify-between lg:py-[20px] px-6 mt-10 lg:mt-10 text-xs lg:text-[14px] lg:tracking-[-0.19px] text-[#9495A5] dark:text-[#5B5E7E]'>
            <span>{tasks.filter((t) => !t.isComplete).length} items left</span>
            <div className=' hidden lg:flex lg:gap-3'>
              <span
                onClick={() => setFilter('All')}
                className={`hover:cursor-pointer hover:text-black ${
                  filter === 'All' ? 'text-[#3A7CFD]' : ''
                }`}
              >
                All
              </span>
              <span
                onClick={() => setFilter('Active')}
                className={`hover:cursor-pointer hover:text-black ${
                  filter === 'Active' ? 'text-[#3A7CFD]' : ''
                }`}
              >
                Active
              </span>
              <span
                onClick={() => setFilter('Complete')}
                className={`hover:cursor-pointer hover:text-black ${
                  filter === 'Complete' ? 'text-[#3A7CFD]' : ''
                }`}
              >
                Complete
              </span>
            </div>
            <span
              onClick={() => setTasks(tasks.filter((t) => !t.isComplete))}
              className=' cursor-pointer hover:text-black'
            >
              Clear Completed
            </span>
          </div>
        </div>

        <div className='flex gap-3 px-6 w-[327px] lg:w-[540px] h-12 items-center justify-center mb-4 lg:mb-[24px] lg:h-[64px] rounded-[5px] lg:py-[20px] lg:px-[24px] shadow-xl mt-4 bg-white dark:bg-[#25273D] text-[#9495A5] dark:text-[#5B5E7E] lg:hidden'>
          <span
            onClick={() => setFilter('All')}
            className={`hover:cursor-pointer hover:text-black ${
              filter === 'All' ? 'text-[#3A7CFD]' : ''
            }`}
          >
            All
          </span>
          <span
            onClick={() => setFilter('Active')}
            className={`hover:cursor-pointer hover:text-black ${
              filter === 'Active' ? 'text-[#3A7CFD]' : ''
            }`}
          >
            Active
          </span>
          <span
            onClick={() => setFilter('Complete')}
            className={`hover:cursor-pointer hover:text-black ${
              filter === 'Complete' ? 'text-[#3A7CFD]' : ''
            }`}
          >
            Complete
          </span>
        </div>
      </div>
      <div className='cursor-pointer font-jose font-normal text-sm mt-4 lg:mt-8 text-[#9495A5] dark:text-[#5B5E7E]'>
        <p>Drag and drop to reorder list</p>
      </div>
    </div>
  );
}
