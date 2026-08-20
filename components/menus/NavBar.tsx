'use client';
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import LogoImage from "@/public/img/logo.png";
import "@/styles/navigation.css";
import Menus from "../../data/mainMenuList";
import Icons from "../Icons";
import DrawerOpener from "../DrawerOpener";
import DrawerMenu from "../DrawerMenu";
import MegaMenu from "./MegaMenu";
import Link from "next/link";

const NavBar = () => {
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (navRef.current) {
      // Temporarily disable pointer events to clear any CSS :hover states
      navRef.current.style.pointerEvents = 'none';
      const timer = setTimeout(() => {
        if (navRef.current) navRef.current.style.pointerEvents = '';
      }, 100);
      return () => clearTimeout(timer);
    }
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
            alt="Consulo logo"
            ariaLabel="Consulo logo"
            loading="lazy"
          />
          <DrawerOpener
            cls="svg-wrapper menu-close"
            data-drawer=".drawer-menu"
          >
            <Icons.CloseCircle />
          </DrawerOpener>
        </div>

        <ul ref={navRef} className="header-menu list-unstyled">
          {/* Home */}
          <li className="nav-item">
            <Link className="menu-link menu-link-main" href={Menus[0].path}>
              {Menus[0].title}
            </Link>
          </li>

          {/* About */}
          <li className="nav-item">
            <Link className="menu-link menu-link-main" href={Menus[1].path}>
              {Menus[1].title}
            </Link>
          </li>

          {/* Services — MegaMenu renders both the desktop trigger/panel AND
              the mobile accordion trigger/panel as two <li> items */}
          <MegaMenu />

          {/* Contact */}
          <li className="nav-item">
            <Link className="menu-link menu-link-main" href={Menus[2].path}>
              {Menus[2].title}
            </Link>
          </li>
        </ul>
      </nav>
    </DrawerMenu>
  );
};

export default NavBar;