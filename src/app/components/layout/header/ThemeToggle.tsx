'use client'
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group flex h-7 w-7 md:h-8 md:w-8 items-center justify-center duration-300"
    >
      <span className="group-hover:rotate-180 transition-transform duration-700 ease-in-out">
        <Icon icon="ri:sun-fill" width="20" height="20" className="md:w-6 md:h-6 hidden dark:block" />
        <Icon icon="ri:moon-fill" width="20" height="20" className="md:w-6 md:h-6 dark:hidden" style={{ color: '#000' }} />
      </span>
    </button>
  );
};

export default ThemeToggler;
