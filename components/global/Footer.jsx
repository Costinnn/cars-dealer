import Image from "next/image";
import Link from "next/link";

import webitsImg from "@/public/images/webits.png";
import anpc1 from "@/public/images/anpc1.webp";
import anpc2 from "@/public/images/anpc2.webp";
import logoImg from "@/public/images/logo.png";
import FacebookSvg from "../svg/FacebookSvg";
import InstaSvg from "../svg/InstaSvg";
import TikTokSvg from "../svg/TikTokSvg";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer section_narrow">
      <div className="container1">
        <div className="box1">
          <div className="img_box">
            <Image src={logoImg} alt="" fill sizes="200px" />
          </div>
        </div>

        <ul className="box2">
          <li>
            <h3>Social media</h3>
          </li>
          <li>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstaSvg size="20" color="#8f8f8f" /> <span>Instagram</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookSvg size="20" color="#8f8f8f" /> <span>Facebook</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TikTokSvg size="20" color="#8f8f8f" /> <span>TikTok</span>
            </Link>
          </li>
        </ul>

        <ul className="box2">
          <li>
            <h3>Fast links</h3>
          </li>
          <li>
            <Link href="/filteredPosts?type=auto">Autos</Link>
          </li>
          <li>
            <Link href="/filteredPosts?type=utility">Utility</Link>
          </li>
          <li>
            <Link href="/filteredPosts?type=moto">Bikes</Link>
          </li>
        </ul>

        <ul className="box2">
          <li>
            <h3>Useful links</h3>
          </li>
          <li>
            <Link href="/">Privacy policy</Link>
          </li>
          <li>
            <Link href="/">Cookies</Link>
          </li>
          <li>
            <Link href="/">Terms & Conditions</Link>
          </li>
        </ul>
      </div>

      <div className="container2">
        <Link
          href="https://anpc.ro/ce-este-sal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={anpc1} width={100} height={25} alt="anpc" />
        </Link>{" "}
        <Link
          href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={anpc2} width={100} height={25} alt="anpc" />
        </Link>
      </div>
      <p>Copyright &#169; 2024 AUTOS WORLD. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
