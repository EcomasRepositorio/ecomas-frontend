"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import ThemeSwitcher from '../components/ThemeSwitcher';
import { useTheme } from 'next-themes';
import NavLinks from './nav-links';


const Header = () => {
  const { theme } = useTheme();
  const imageSrc = theme === 'dark' ? '/image/ECOMAS-HORIZONTAL.png' : '/image/ecomas.png';
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Inicio",
    "Inicio",
    "Inicio",
    "Diplomados",
    "Certificados",
    "Contáctanos",
    <ThemeSwitcher />,
    "Cerrar",

  ];

  return (
    <>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth={'2xl'}
        position='sticky'
        className='bg-white dark:bg-blackblue'

      >
        <Link href="/">
          <Image
            src={imageSrc}
            alt='Imagen banner'
            width={210}
            height={150}
            className='hidden md:block'
          />
        </Link>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} className='bg-gradient-to-r from-[#02227b] to-[#0060ff] text-white' href="#" >
              Ver Certificados
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} className='bg-gradient-to-r from-[#02227b] to-[#0060ff] text-white' href="#" >
              Aula Virtual
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu >
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
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
        className='bg-gradient-to-r from-[#02227b] to-[#0060ff]'
        position='sticky'
      >
        <NavbarContent className="sm:hidden" justify="center">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
          <NavbarBrand>
            <Link href="/">
              <Image

                src='/image/ECOMAS-HORIZONTAL.png'
                alt='Imagen banner'
                width={150}
                height={150}
                className='block md:hidden'
              />
            </Link>

          </NavbarBrand>
        </NavbarContent>


        <NavbarContent className="hidden sm:flex gap-4 " justify="end" >

          <NavLinks />
          <NavbarContent justify="end" >

            <ThemeSwitcher />

          </NavbarContent>


        </NavbarContent>

      </Navbar>


    </>
  );
};

export default Header;

