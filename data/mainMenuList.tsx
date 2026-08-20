/**
 * Main navigation items.
 *
 * "Services" is intentionally left without dropdown/megamenu data here —
 * it is handled by the dedicated <MegaMenu> component in NavBar.tsx.
 *
 * To add/edit service categories and sub-services, edit:
 *   data/megaMenuData.ts
 */
const Menus: { title: string; path: string }[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about-us",
  },
  // "Services" is rendered as a <MegaMenu> component — see NavBar.tsx
  {
    title: "Contact",
    path: "/contact-us",
  },
];

export default Menus;
