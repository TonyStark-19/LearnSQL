// Use state and use effect
import { useEffect, useState } from 'react';

// Mainpage
export default function MainPage() {
  return (
    <div className="w-full h-screen flex flex-row">
      <Left />
      <Right />
    </div>
  )
}

// left column for pages list
function Left() {

  const [isDark, setIsDark] = useState(() => {
    // initialize from localStorage
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="w-96 h-full fixed py-3 px-5
      border-r-white border-3 bg-white dark:bg-slate-900/95">
      <div className='flex justify-between flex-row'>
        <div className="text-2xl font-semibold
      text-white">LearnSQL</div>

        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-md
                text-stone-800 dark:text-white border border-stone-600 dark:border-gray-800
                hover:bg-stone-600 hover:text-white dark:hover:bg-gray-800 transition"
        >
          {isDark ? '🌞 Light' : '🌙 Dark'}
        </button>
      </div>
    </div>
  )
}

// right column for pages
function Right() {
  return (
    <div className="w-full
    bg-white dark:bg-slate-900/95"></div>
  )
}