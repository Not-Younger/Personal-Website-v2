"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setTheme("light");
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex space-x-1">
      <div>
        <button onClick={() => setTheme((theme == "dark") ? "light" : "dark")}>
          {theme == 'dark' ? <LightModeIcon fontSize="large"/> : <DarkModeIcon fontSize="large"/>}
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
