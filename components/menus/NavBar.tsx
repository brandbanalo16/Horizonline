'use client';
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import LogoImage from "@/public/img/logo.png";
import "@/styles/navigation.css";
import Icons from "../Icons";
import DrawerOpener from "../DrawerOpener";
import DrawerMenu from "../DrawerMenu";
import MegaMenu from "./MegaMenu";
import Link from "next/link";

const NavBar = () => {
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ul = navRef.current;
    if (!ul) return;
    ul.style.pointerEvents = 'none';
    const t = setTimeout(() => { if (ul) ul.style.pointerEvents = ''; }, 120);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <DrawerMenu>
      <nav className="header-nav drawer-menu" aria-label="Main navigation">
        <div className="lg:hidden header-nav-headings">
          <Logo
            src={LogoImage.src}
            width={189}
            height={32}
            url="/"
            cls="header-logo"
            alt="Horizon Line logo"
            ariaLabel="Horizon Line logo"
            loading="lazy"
          />
          <DrawerOpener cls="svg-wrapper menu-close" data-drawer=".drawer-menu">
            <Icons.CloseCircle />
          </DrawerOpener>
        </div>

        <ul ref={navRef} className="header-menu list-unstyled">
          <li className="nav-item">
            <Link className="menu-link menu-link-main" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="menu-link menu-link-main" href="/about-us">About</Link>
          </li>
          <MegaMenu />
          <li className="nav-item">
            <Link className="menu-link menu-link-main" href="/blogs">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="menu-link menu-link-main" href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </DrawerMenu>
  );
};

export default NavBar;
