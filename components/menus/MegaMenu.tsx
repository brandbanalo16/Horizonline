'use client';

import React, { useState, useEffect, useRef, useCallback, useId } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import megaMenuData, { MegaMenuCategory } from '@/data/megaMenuData';
import '@/styles/mega-menu.css';

// ── Inline SVG icons (no external dependency) ──────────────────────────────
const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M5 2.5l4.5 4.5L5 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GridIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="1" y="1" width="5" height="5" rx="1" fill="currentColor"/>
    <rect x="8" y="1" width="5" height="5" rx="1" fill="currentColor"/>
    <rect x="1" y="8" width="5" height="5" rx="1" fill="currentColor"/>
    <rect x="8" y="8" width="5" height="5" rx="1" fill="currentColor"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── Accordion sub-panel (desktop) ──────────────────────────────────────────
function CategoryCard({
  category,
  isOpen,
  onHover,
  panelId,
  onClose,
}: {
  category: MegaMenuCategory;
  isOpen: boolean;
  onHover: () => void;
  panelId: string;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Animate max-height
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (isOpen) {
      el.style.maxHeight = `${el.scrollHeight}px`;
    } else {
      el.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    // Hover on the whole card (button + panel) keeps it expanded
    <div className="mm-category" onMouseEnter={onHover}>
      <button
        type="button"
        className="mm-cat-btn"
        aria-expanded={isOpen}
        aria-controls={panelId}
        // keyboard users can also activate via Enter/Space
        onClick={onHover}
      >
        <span className="mm-cat-btn-label">
          <span className="mm-cat-icon">
            <GridIcon />
          </span>
          <span className="mm-cat-title">{category.title}</span>
        </span>
        <span className="mm-cat-chevron">
          <ChevronRight />
        </span>
      </button>

      {/* Sub-services panel */}
      <div
        id={panelId}
        ref={panelRef}
        className={`mm-services-panel${isOpen ? ' mm-services-panel--open' : ''}`}
        role="region"
        aria-label={`${category.title} services`}
      >
        <ul className="mm-services-list" role="list">
          {category.services.map((service) => (
            <li key={service.path}>
              <Link
                href={service.path}
                className="mm-service-link"
                onClick={onClose}
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Mobile category accordion ──────────────────────────────────────────────
function MobileCategoryAccordion({
  category,
  isOpen,
  onToggle,
  panelId,
  onClose,
}: {
  category: MegaMenuCategory;
  isOpen: boolean;
  onToggle: () => void;
  panelId: string;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (isOpen) {
      el.style.maxHeight = `${el.scrollHeight}px`;
    } else {
      el.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div>
      <button
        type="button"
        className="mm-mobile-cat-btn"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {category.title}
        <span className="mm-mobile-cat-chevron">
          <ChevronRight />
        </span>
      </button>

      <div
        id={panelId}
        ref={panelRef}
        className="mm-mobile-services-panel"
        role="region"
        aria-label={`${category.title} services`}
      >
        <ul className="mm-mobile-services-list" role="list">
          {category.services.map((service) => (
            <li key={service.path}>
              <Link
                href={service.path}
                className="mm-mobile-service-link"
                onClick={onClose}
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Main MegaMenu component ────────────────────────────────────────────────
export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenCategoryId, setMobileOpenCategoryId] = useState<string | null>(null);
  const [panelTop, setPanelTop] = useState(0);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  const baseId = useId();
  const pathname = usePathname();

  // ── Close on route change ────────────────────────────────────────────────
  useEffect(() => {
    setIsOpen(false);
    setOpenCategoryId(null);
    setMobileOpen(false);
    setMobileOpenCategoryId(null);
  }, [pathname]);

  // ── Position panel below header ──────────────────────────────────────────
  const updatePanelTop = useCallback(() => {
    const header = document.querySelector<HTMLElement>('header');
    if (header) {
      setPanelTop(header.getBoundingClientRect().bottom);
    }
  }, []);

  useEffect(() => {
    updatePanelTop();
    window.addEventListener('resize', updatePanelTop);
    window.addEventListener('scroll', updatePanelTop, { passive: true });
    return () => {
      window.removeEventListener('resize', updatePanelTop);
      window.removeEventListener('scroll', updatePanelTop);
    };
  }, [updatePanelTop]);

  // ── Outside click ────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;
    const handleOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current && !panelRef.current.contains(target) &&
        triggerRef.current && !triggerRef.current.contains(target)
      ) {
        setIsOpen(false);
        setOpenCategoryId(null);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [isOpen]);

  // ── Escape key ───────────────────────────────────────────────────────────
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setOpenCategoryId(null);
        setMobileOpen(false);
        setMobileOpenCategoryId(null);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // ── Body scroll lock on mobile ───────────────────────────────────────────
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // No scroll lock needed — mobile uses the existing drawer nav scroll area
  }, [mobileOpen]);

  // ── Animate mobile panel ─────────────────────────────────────────────────
  useEffect(() => {
    const el = mobilePanelRef.current;
    if (!el) return;
    if (mobileOpen) {
      el.style.maxHeight = `${el.scrollHeight + 2000}px`; // generous for nested content
    } else {
      el.style.maxHeight = '0px';
    }
  }, [mobileOpen, mobileOpenCategoryId]); // re-run when a sub-accordion opens to expand parent

  // ── Handlers ─────────────────────────────────────────────────────────────
  const handleTriggerClick = () => {
    setIsOpen((prev) => {
      if (prev) setOpenCategoryId(null);
      return !prev;
    });
    updatePanelTop();
  };

  const handleCategoryHover = (id: string) => {
    setOpenCategoryId(id);
  };

  const handleGridMouseLeave = () => {
    setOpenCategoryId(null);
  };

  const handleMobileTriggerClick = () => {
    setMobileOpen((prev) => !prev);
    if (mobileOpen) setMobileOpenCategoryId(null);
  };

  const handleMobileCategoryToggle = (id: string) => {
    setMobileOpenCategoryId((prev) => (prev === id ? null : id));
    // Re-trigger parent panel height recalculation after state settles
    setTimeout(() => {
      const el = mobilePanelRef.current;
      if (el) el.style.maxHeight = `${el.scrollHeight + 2000}px`;
    }, 10);
  };

  const closeAll = () => {
    setIsOpen(false);
    setOpenCategoryId(null);
    setMobileOpen(false);
    setMobileOpenCategoryId(null);
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>

      {/* ── DESKTOP trigger (nav item) ──────────────────────────────────── */}
      <li className="mega-menu-root nav-item" style={{ position: 'static' }}>
        <button
          ref={triggerRef}
          type="button"
          className="mm-trigger menu-link menu-link-main"
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-controls={`${baseId}-panel`}
          onClick={handleTriggerClick}
        >
          Services
          <span className="mm-trigger-chevron">
            <ChevronDown />
          </span>
        </button>

        {/* ── Desktop mega panel ──────────────────────────────────────── */}
        <div
          id={`${baseId}-panel`}
          ref={panelRef}
          className={`mm-panel${isOpen ? ' mm-panel--open' : ''}`}
          role="navigation"
          aria-label="Services mega menu"
          style={{ top: `${panelTop}px` }}
        >
          <div className="mm-panel-inner">
            {/* All services link */}
            <Link
              href="/services"
              className="mm-all-services"
              onClick={closeAll}
            >
              <GridIcon />
              View all services
              <ArrowRight />
            </Link>

            {/* Categories grid — hover to expand sub-services */}
            <div
              className="mm-grid"
              role="list"
              onMouseLeave={handleGridMouseLeave}
            >
              {megaMenuData.map((category) => {
                const panelId = `${baseId}-cat-${category.id}`;
                return (
                  <div key={category.id} role="listitem">
                    <CategoryCard
                      category={category}
                      isOpen={openCategoryId === category.id}
                      onHover={() => handleCategoryHover(category.id)}
                      panelId={panelId}
                      onClose={closeAll}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Backdrop ────────────────────────────────────────────────── */}
        <div
          className={`mm-backdrop${isOpen ? ' mm-backdrop--visible' : ''}`}
          aria-hidden="true"
          onClick={() => { setIsOpen(false); setOpenCategoryId(null); }}
        />
      </li>

      {/* ── MOBILE trigger (inside the drawer nav) ─────────────────────── */}
      <li className="mm-mobile-wrapper nav-item" style={{ width: '100%' }}>
        <button
          type="button"
          className="mm-mobile-trigger"
          aria-expanded={mobileOpen}
          aria-haspopup="true"
          aria-controls={`${baseId}-mobile-panel`}
          onClick={handleMobileTriggerClick}
        >
          Services
          <span className="mm-mobile-trigger-chevron">
            <ChevronDown />
          </span>
        </button>

        <div
          id={`${baseId}-mobile-panel`}
          ref={mobilePanelRef}
          className={`mm-mobile-panel${mobileOpen ? ' mm-mobile-panel--open' : ''}`}
          role="navigation"
          aria-label="Services mobile menu"
        >
          {megaMenuData.map((category) => {
            const panelId = `${baseId}-mobile-cat-${category.id}`;
            return (
              <MobileCategoryAccordion
                key={category.id}
                category={category}
                isOpen={mobileOpenCategoryId === category.id}
                onToggle={() => handleMobileCategoryToggle(category.id)}
                panelId={panelId}
                onClose={closeAll}
              />
            );
          })}
        </div>
      </li>
    </>
  );
}
