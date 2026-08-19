'use client';

import { useCallback } from 'react';

/**
 * DrawerOverlay renders the full-screen backdrop shown behind any open drawer.
 * Clicking it closes whatever drawer is currently open.
 */
const DrawerOverlay = () => {
  const handleClick = useCallback(() => {
    const overlayEl = document.getElementById('drawer-overlay');
    if (!overlayEl) return;

    const drawerSelector = overlayEl.getAttribute('data-drawer');
    if (drawerSelector) {
      const drawerEl = document.querySelector<HTMLElement>(drawerSelector);
      drawerEl?.classList.remove('show');
    }

    overlayEl.classList.remove('show');
    overlayEl.removeAttribute('data-drawer');
    document.body.classList.remove('scroll-lock');
  }, []);

  return (
    <div
      id="drawer-overlay"
      onClick={handleClick}
      aria-hidden="true"
    />
  );
};

export default DrawerOverlay;
