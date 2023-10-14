"use client";

import useScroll from "@/libs/hooks/useScroll";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollDirection } = useScroll();

  return (
    <header
      className={`bg-transparent fixed transition-all ease-in-out delay-100 duration-700
       ${
         scrollDirection === "UP" || isOpen ? "top-0" : "top-[-72px]"
       } z-50 p-4 h-[72px] flex items-center justify-between w-screen`}
    >
      <div className="text-white font-bold">
        <span className="hidden md:inline-block -ml-6 mt-4">
          <Button type="link" href="#fadhil-muhammad">
            <Image
              className="rocket"
              src="/images/rocket.png"
              alt="Logo"
              width={60}
              height={60}
            />
          </Button>
        </span>
        <span
          id="menu"
          aria-label="hamburger-menu"
          role="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`${
            isOpen ? "open" : "md:hidden"
          } hamburger inline-block relative z-50  `}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <nav
        className={`${
          isOpen
            ? "flex items-center justify-center h-screen w-screen bg-primary opacity-[0.85] absolute left-0 top-0 p-4"
            : "hidden"
        } md:block`}
      >
        <ul className="flex flex-col md:flex-row items-center justify-end gap-4">
          <li className="inline-block md:hidden">
            <Button type="link" theme={Button.Theme.Primary}>
              Home
            </Button>
          </li>
          <li>
            <Button type="link" theme={Button.Theme.Primary}>
              About
            </Button>
          </li>
          <li>
            <Button type="link" theme={Button.Theme.Primary}>
              Experience
            </Button>
          </li>
          <li>
            <Button type="link" theme={Button.Theme.Primary}>
              Project
            </Button>
          </li>
          <li>
            <Button type="link" theme={Button.Theme.Primary}>
              Education
            </Button>
          </li>
          <li>
            <Button type="link" mode={Button.Mode.Outlined}>
              Contact Me
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
