// app/components/ThemeSwitcher.tsx
"use client";
import React, { useState } from 'react';
import { Switch } from '@nextui-org/react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (

      <Switch
        defaultSelected
        size="lg"
        color="primary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
        onChange={handleThemeChange}
      />

  );
};

export default ThemeSwitcher;
