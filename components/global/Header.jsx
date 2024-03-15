import Link from "next/link";
import Image from "next/image";

import Menu from "./Menu";

import logoImg from "@/public/images/logo.png";

import "./Header.scss";

const Header = () => {
  return (
    <header className="main_header section_narrow">
      <Link href="/" className="logo">
        <Image src={logoImg} fill sizes="150px" alt="logo" />
      </Link>

      <div className="container">
        <Link href="/contact" className="btn_black">
          Contact
        </Link>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
