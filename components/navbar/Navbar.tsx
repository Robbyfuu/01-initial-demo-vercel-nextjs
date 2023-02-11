import React from "react";
import { ActiveLinks } from "./ActiveLinks";
import style from "./Navbar.module.css";

export const Navbar = () => {
  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];
  return (
    <nav className={style.menuContainer} >
      {menuItems.map((item, index) => (
        <ActiveLinks text={item.text} href={item.href} key={index} />
      ))}

    </nav>
  );
};
