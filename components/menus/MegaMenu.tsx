'use client';

import React, { useState, useEffect, useRef, useCallback, useId } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import megaMenuData, { MegaMenuCategory } from '@/data/megaMenuData';
import '@/styles/mega-menu.css';

// ── Icons ───────────────────────────────────────────────────────────────────
const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M5 2.5l4.5 4.5L5 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GridIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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

// ── Mobile category accordion ─────────────────────────────────────────────
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
    el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : '0px';
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
        <span className="mm-mobile-cat-chevron"><ChevronRight /></span>
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
              <Link href={service.path} className="mm-mobile-service-link" onClick={onClose}>
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Main MegaMenu component ───────────────────────────────────────────────
export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCategoryId, setHoveredCategoryId] = useState<string>(megaMenuData[0]?.id ?? '');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenCategoryId, setMobileOpenCategoryId] = useState<string | null>(null);
  const [panelTop, setPanelTop] = useState(0);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  const baseId = useId();
  const pathname = usePathname();

  const activeCategory = megaMenuData.find(c => c.id === hoveredCategoryId) ?? megaMenuData[0];

  // ── Close on route change ────────────────────────────────────────────────
  useEffect(() => {
    setIsOpen(false);
    setMobileOpen(false);
    setMobileOpenCategoryId(null);
  }, [pathname]);

  // ── Position panel below header ──────────────────────────────────────────
  const updatePanelTop = useCallback(() => {
    const header = document.querySelector<HTMLElement>('header');
    if (header) setPanelTop(header.getBoundingClientRect().bottom);
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
      const t = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(t) &&
          triggerRef.current && !triggerRef.current.contains(t)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [isOpen]);

  // ── Escape key ────────────────────────────────────────────────────────────
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setMobileOpen(false);
        setMobileOpenCategoryId(null);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // ── Mobile panel animation ────────────────────────────────────────────────
  useEffect(() => {
    const el = mobilePanelRef.current;
    if (!el) return;
    el.style.maxHeight = mobileOpen ? `${el.scrollHeight + 2000}px` : '0px';
  }, [mobileOpen, mobileOpenCategoryId]);

  const closeAll = () => {
    setIsOpen(false);
    setMobileOpen(false);
    setMobileOpenCategoryId(null);
  };

  const handleMobileCategoryToggle = (id: string) => {
    setMobileOpenCategoryId(prev => (prev === id ? null : id));
    setTimeout(() => {
      const el = mobilePanelRef.current;
      if (el) el.style.maxHeight = `${el.scrollHeight + 2000}px`;
    }, 10);
  };

  return (
    <>
      {/* ── DESKTOP: Services trigger ──────────────────────────────────────── */}
      <li className="mega-menu-root nav-item" style={{ position: 'static' }}>
        <button
          ref={triggerRef}
          type="button"
          className="mm-trigger menu-link menu-link-main"
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-controls={`${baseId}-panel`}
          onClick={() => { setIsOpen(prev => !prev); updatePanelTop(); }}
        >
          Services
          <span className="mm-trigger-chevron"><ChevronDown /></span>
        </button>

        {/* ── Desktop mega panel ─────────────────────────────────────────── */}
        <div
          id={`${baseId}-panel`}
          ref={panelRef}
          className={`mm-panel${isOpen ? ' mm-panel--open' : ''}`}
          role="navigation"
          aria-label="Services mega menu"
          style={{ top: `${panelTop}px` }}
        >
          <div className="mm-panel-inner">
            {/* View all link */}
            <Link href="/services" className="mm-all-services" onClick={closeAll}>
              <GridIcon />
              VIEW ALL SERVICES
              <ArrowRight />
            </Link>

            {/* ── Split layout: categories left | services right ─────────── */}
            <div className="mm-split">
              {/* Left: category list */}
              <div className="mm-split-cats">
                {megaMenuData.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    className={`mm-cat-row${hoveredCategoryId === category.id ? ' mm-cat-row--active' : ''}`}
                    onMouseEnter={() => setHoveredCategoryId(category.id)}
                    onClick={() => { closeAll(); window.location.href = category.path; }}
                    aria-current={hoveredCategoryId === category.id ? 'true' : undefined}
                  >
                    <span className="mm-cat-row-label">
                      <span className="mm-cat-icon"><GridIcon /></span>
                      <span className="mm-cat-title">{category.title}</span>
                    </span>
                    <span className="mm-cat-chevron"><ChevronRight /></span>
                  </button>
                ))}
              </div>

              {/* Right: services for hovered category */}
              <div className="mm-split-services">
                <div className="mm-split-services-heading">
                  <span className="mm-cat-icon"><GridIcon /></span>
                  <span>{activeCategory?.title}</span>
                </div>
                <ul className="mm-split-services-list">
                  {activeCategory?.services.map((service) => (
                    <li key={service.path}>
                      <Link
                        href={service.path}
                        className="mm-split-service-link"
                        onClick={closeAll}
                      >
                        <span className="mm-split-service-dot" />
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── Backdrop ──────────────────────────────────────────────────── */}
        <div
          className={`mm-backdrop${isOpen ? ' mm-backdrop--visible' : ''}`}
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      </li>

      {/* ── MOBILE trigger (inside drawer nav) ──────────────────────────── */}
      <li className="mm-mobile-wrapper nav-item" style={{ width: '100%' }}>
        <button
          type="button"
          className="mm-mobile-trigger"
          aria-expanded={mobileOpen}
          aria-haspopup="true"
          aria-controls={`${baseId}-mobile-panel`}
          onClick={() => setMobileOpen(prev => !prev)}
        >
          Services
          <span className="mm-mobile-trigger-chevron"><ChevronDown /></span>
        </button>

        <div
          id={`${baseId}-mobile-panel`}
          ref={mobilePanelRef}
          className={`mm-mobile-panel${mobileOpen ? ' mm-mobile-panel--open' : ''}`}
          role="navigation"
          aria-label="Services mobile menu"
        >
          {megaMenuData.map((category) => (
            <MobileCategoryAccordion
              key={category.id}
              category={category}
              isOpen={mobileOpenCategoryId === category.id}
              onToggle={() => handleMobileCategoryToggle(category.id)}
              panelId={`${baseId}-mobile-cat-${category.id}`}
              onClose={closeAll}
            />
          ))}
        </div>
      </li>
    </>
  );
}
