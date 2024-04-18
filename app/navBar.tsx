"use client";
import Image from 'next/image';
import React from 'react';
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, Link, NavbarItem, Button, menuItem } from "@nextui-org/react";
import ThemeSwitcher from '../components/ThemeSwitcher';
import { useTheme } from 'next-themes';
import NavLinks from './nav-links';
import { UserIcon } from '@heroicons/react/solid';
import Link2 from 'next/link';

const Header = () => {
  const { theme } = useTheme();
  const imageSrc = theme === 'dark' ? '/image/ECOMAS-HORIZONTAL.png' : '/image/ecomas.png';
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuItemClick = () => {
    // Cierra el menú al hacer clic en un elemento
    setIsMenuOpen(false);
  };
  const menuItems = [

    {
      name: 'Inicio',
      href: '/',

    },
    {
      name: 'Diplomados',
      href: '/diplomados',

    },
    {
      name: 'Certificados',
      href: '/certs',

    },
    {
      name: 'Contáctanos',
      href: '/#contacto',

    },


  ];

  return (
    <>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth={'2xl'}
        position='sticky'
        className='hidden md:block  bg-white dark:bg-blackblue '
      >
        <Link2 href="/">
          <Image
            src={imageSrc}
            alt='Imagen banner'
            width={210}
            height={150}
            className='hidden md:block'
          />
        </Link2>
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
            <Link2 href="/">
              <Image
                src='/image/ECOMAS-HORIZONTAL.png'
                alt='Imagen banner'
                width={120}
                height={150}
                className='block md:hidden mr-6'
              />
            </Link2>
            <Link2 href="/certs">
              <Button color='primary' className=' mr-2 '>
                Certificados
              </Button>
            </Link2>
            <a href="https://google.com" >
              <Button href="https://google.com" color='primary' className=' '>
                Aula <br /> Virtual
              </Button>
            </a>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4 " justify="end" >
          <NavLinks />
          <NavbarContent justify="end" >
            <Link2 href="/login">
              <UserIcon className="w-5 h-5 mr-2 text-white " />
            </Link2>
            <ThemeSwitcher />
          </NavbarContent>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((link, index) => (
            <NavbarMenuItem key={index} >
              <Link2
                color='primary'
                href={link.href}
                className="text-3xl"
                onClick={handleMenuItemClick} // Agrega un manejador de clic para cerrar el menú
              >
                <Button color='primary' className='w-full text-xl'>
                  {link.name}
                </Button>

              </Link2>
            </NavbarMenuItem>
          ))}
          <ThemeSwitcher />
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Header;

