"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Switch from '@mui/material/Switch';

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
        <Switch onChange={() => setTheme((theme == "dark") ? "light" : "dark")} />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
