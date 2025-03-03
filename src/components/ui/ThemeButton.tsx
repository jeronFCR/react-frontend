import { Moon, Sun } from "lucide-react";
import React from "react";

import { useTheme } from "@contexts/ThemeContext";

export const ThemeButton: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "customLight") setTheme("customDark");
    if (theme === "customDark") setTheme("customLight");
  };

  return (
    <div className="flex justify-end items-center p-5 pb-0 w-full">
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          className="theme-controller"
          data-testid="swap-theme-checkbox"
          onChange={toggleTheme}
        />

        <Sun className="swap-off" />
        <Moon className="swap-on" />
      </label>
    </div>
  );
};
