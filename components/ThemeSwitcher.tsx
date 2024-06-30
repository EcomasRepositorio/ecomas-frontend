import React from 'react';
import { Switch } from '@nextui-org/react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from "next-themes"

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Switch
      defaultSelected={theme === 'dark'}
      size="lg"
      color="default"
      className=''
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={`text-blue-500 ${className}`} />
        ) : (
          <SunIcon className={`text-yellow-400 ${className}`} />
        )
      }
      onChange={handleThemeChange}
    />
  );
};

export default ThemeSwitcher;
