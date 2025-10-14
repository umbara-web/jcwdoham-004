import { Sun, Moon } from 'lucide-react';
import useTheme from '@/contexts/theme';

const DarkModeBtn = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className='flex items-center gap-3'>
      <div className='flex w-full justify-end-safe items-center font-semibold text-sm lg:hidden'>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </div>
      <button
        onClick={toggleDarkMode}
        className={`relative flex items-center p-1 rounded-full border border-gray-600 shadow-xl hover:cursor-pointer transition-all duration-300  hover:bg-gray-300  dark:hover:bg-gray-600 ${
          darkMode ? 'bg-transparent' : ''
        }`}
      >
        <div
          className={`absolute top-1/2 -translate-y-1/2 bg-base-500 p-0.5 rounded-full flex items-center justify-center transition-all duration-500 ${
            darkMode ? 'translate-x-5.5' : 'translate-x-0'
          }`}
        >
          {darkMode ? (
            <Moon size={18} className='text-white' />
          ) : (
            <Sun size={18} className='text-white' />
          )}
        </div>

        <div className='flex w-full justify-between items-center gap-3 text-white '>
          <Sun size={16} />
          <Moon size={16} className='text-black dark:text-white' />
        </div>
      </button>
    </div>
  );
};

export default DarkModeBtn;
