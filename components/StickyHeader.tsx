'use client';

import { useEffect, useRef, useCallback } from "react";
import { StickyHeaderProps } from "@/types/stickyHeaderProps";

const StickyHeader = ({
  wrapperCls,
  container,
  stickyType = "on-scroll-up",
  children,
}: StickyHeaderProps) => {
  const headerRef = useRef<HTMLElement | null>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const headerIsAlwaysSticky =
    stickyType === "always" || stickyType === "reduce-logo-size";

  // Set --header-height CSS variable
  const setHeaderHeight = useCallback(() => {
    const header = headerRef.current;
    if (header) {
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.offsetHeight}px`
      );
    }
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // Set initial height and watch for resizes
    setHeaderHeight();
    const resizeObserver = new ResizeObserver(setHeaderHeight);
    resizeObserver.observe(header);

    const mq = window.matchMedia("(max-width: 990px)");
    mq.addEventListener("change", setHeaderHeight);

    if (headerIsAlwaysSticky) {
      header.classList.add("header-sticky");
      return () => {
        resizeObserver.disconnect();
        mq.removeEventListener("change", setHeaderHeight);
      };
    }

    // --- on-scroll-up behaviour ---
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const headerHeight = header.offsetHeight;

        if (scrollY <= 0) {
          // At the very top — reset everything
          header.classList.remove("header-hidden", "header-sticky", "header-animate");
        } else if (scrollY > lastScrollY.current && scrollY > headerHeight) {
          // Scrolling DOWN past the header — hide it
          header.classList.add("header-sticky", "header-hidden");
          header.classList.remove("header-animate");
        } else if (scrollY < lastScrollY.current) {
          // Scrolling UP — show it
          header.classList.add("header-sticky", "header-animate");
          header.classList.remove("header-hidden");
        }

        lastScrollY.current = scrollY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      resizeObserver.disconnect();
      mq.removeEventListener("change", setHeaderHeight);
      window.removeEventListener("scroll", onScroll);
    };
  }, [setHeaderHeight, headerIsAlwaysSticky]);

  return (
    <sticky-header data-sticky-type={stickyType}>
      <header className={wrapperCls} ref={headerRef}>
        <div className={container}>{children}</div>
      </header>
    </sticky-header>
  );
};

export default StickyHeader;
