// Dark ModeToggle
import { useState } from 'react';
import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';
import { LuMonitor } from 'react-icons/lu';
// import { Monitor, Sun, Moon } from 'lucide-react';

const DarkModeToggle = () => {
  const [mode, setMode] = useState<'system' | 'light' | 'dark'>('dark');
  // const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const buttons = [
    { id: 'system', icon: <LuMonitor size={15} />, label: 'System' },
    { id: 'light', icon: <AiOutlineSun size={15} />, label: 'Light' },
    { id: 'dark', icon: <AiOutlineMoon size={15} />, label: 'Dark' },
  ];

  return (
    <div className='flex items-center justify-center border border-gray-border gap-0.5 rounded-full'>
      {buttons.map((btn) => (
        <button
          key={btn.id}
          onClick={() => setMode(btn.id as 'light' | 'dark')}
          className={`rounded-full p-1 transition-colors ${
            mode === btn.id
              ? 'bg-primary text-white inset-shadow-sm inset-shadow-orange-200'
              : 'text-black'
          }`}
          aria-label={btn.label}
        >
          {btn.icon}
        </button>
      ))}
    </div>
  );
};

export default DarkModeToggle;
