"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import CarSvg from "../svg/CarSvg";
import VanSvg from "../svg/VanSvg";
import MotoSvg from "../svg/MotoSvg";
import HomeSvg from "../svg/HomeSvg";
import menuImg from "@/public/images/icons/menu.png";
import closeImg from "@/public/images/icons/close.png";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="menu_img"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <Image src={menuImg} width={17} height={17} alt="menu" />
      </button>

      <nav className={`menu ${isMenuOpen ? "" : "menu_closed"}`}>
        <button
          type="button"
          className="close_img"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image src={closeImg} width={17} height={17} alt="menu" />
        </button>

        <ul>
          <li>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <HomeSvg /> Home
            </Link>
          </li>
          <li>
            <Link
              href="/filteredPosts?type=auto"
              onClick={() => setIsMenuOpen(false)}
            >
              <CarSvg /> Autos
            </Link>
          </li>
          <li>
            <Link
              href="/filteredPosts?type=utility"
              onClick={() => setIsMenuOpen(false)}
            >
              <VanSvg /> Utility
            </Link>
          </li>
          <li>
            <Link
              href="/filteredPosts?type=moto"
              onClick={() => setIsMenuOpen(false)}
            >
              <MotoSvg /> Bikes
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
