// Dark ModeToggle

'use client';
import { useState, useEffect } from 'react';
import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';
import { LuMonitor } from 'react-icons/lu';
import { useTheme } from 'next-themes';
// import { Monitor, Sun, Moon } from 'lucide-react';

const DarkModeToggle = () => {
  // const { mode, setMode } = useState(false);
  const [mode, setMode] = useState<'system' | 'light' | 'dark'>('system');
  const { theme, setTheme, resolvedTheme } = useTheme();
  // const { theme: mode } = useTheme();
  // const [mode, setMode] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    setMode(resolvedTheme as 'system' | 'light' | 'dark');
  }, [resolvedTheme]);

  const buttons = [
    { id: 'system', icon: <LuMonitor size={15} />, label: 'System' },
    { id: 'light', icon: <AiOutlineSun size={15} />, label: 'Light' },
    { id: 'dark', icon: <AiOutlineMoon size={15} />, label: 'Dark' },
  ];

  if (!mode) {
    return null;
  }

  // const { resolvedTheme } = useTheme();

  return (
    <div className='flex items-center justify-center border border-gray-border dark:border-input gap-1 p-1 rounded-full'>
      {buttons.map((btn) => (
        <button
          key={btn.id}
          onClick={() => setTheme(btn.id as 'system' | 'light' | 'dark')}
          className={`rounded-full p-1 transition-colors text-black dark:text-white cursor-pointer hover:bg-base-500 dark:hover:bg-base-100 hover:text-white dark:hover:text-black ${
            theme === btn.id
              ? 'bg-primary text-white inset-shadow-sm inset-shadow-orange-200'
              : resolvedTheme === 'dark'
              ? 'text-white'
              : 'text-black'
          }`}
          aria-label='System'
        >
          {/* <span
            className={`
              transition-colors
              ${
                theme === btn.id
                  ? 'text-white' // Ikon aktif selalu putih
                  : resolvedTheme === 'dark'
                  ? 'text-white' // Ikon tidak aktif di tema dark
                  : 'text-black' // Ikon tidak aktif di tema light
              }
            `}
          >
            {btn.icon}
          </span> */}
          {btn.icon}
        </button>
      ))}
    </div>
  );
};

export default DarkModeToggle;
