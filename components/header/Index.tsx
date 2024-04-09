"use client";
import Image from 'next/image';
import { ArrowRightIcon, UserCircleIcon } from '@heroicons/react/solid';

import React, { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { Switch } from "@nextui-org/react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import ThemeSwitcher from '../ThemeSwitcher';
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme } = useTheme();
  const imageSrc = theme === 'dark' ? '/image/ECOMAS-HORIZONTAL.png' : '/image/ecomas.png';
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <>
      <Navbar

        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth={'2xl'}
        position='sticky'
        
        
      >

        <Link href="/">

          <Image
            src= {imageSrc}
            alt='Imagen banner'
            width={210}
            height={150}
            className='hidden md:block'
          />

        </Link>


        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="#" >
              Ver Certificados
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" >
              Aula Virtual
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        style={{ backgroundColor: '#0060ff' ,}}

        position='static'
      >
        <NavbarContent className="sm:hidden" justify="center">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
          <NavbarBrand>
            <Image
              src='/image/ECOMAS-HORIZONTAL.png'
              alt='Imagen banner'
              width={150}
              height={150}
              className='block md:hidden'
            />
          </NavbarBrand>
        </NavbarContent>


        <NavbarContent className="hidden sm:flex gap-4 " justify="end" >

          <NavbarItem>
            <Link color="foreground" href="#" style={{ color: '#ffffff',  }}>
              Inicio
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link color="foreground" href="#" style={{ color: '#ffffff',  }}>
              Diplomados
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" style={{ color: '#ffffff',  }}>
              Certificados
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" style={{ color: '#ffffff',  }}>
              Contáctanos
            </Link>
          </NavbarItem>
          <NavbarContent justify="end" >

            <ThemeSwitcher/>

          </NavbarContent>


        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full text-center" // Alineación centrada
                color={
                  index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>


    </>
  );
};

export default Header;

