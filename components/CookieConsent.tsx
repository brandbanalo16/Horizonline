'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'hl_cookie_consent';

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
  acceptedAll: boolean;
  timestamp: number;
};

const getStoredConsent = (): CookiePreferences | null => {
  if (typeof window === 'undefined') return null;

  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    if (!value) return null;
    const parsed = JSON.parse(value) as Partial<CookiePreferences>;

    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      functional: Boolean(parsed.functional),
      marketing: Boolean(parsed.marketing),
      acceptedAll: Boolean(parsed.acceptedAll),
      timestamp: Number(parsed.timestamp || Date.now()),
    };
  } catch {
    return null;
  }
};

const saveConsent = (preferences: CookiePreferences) => {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      ...preferences,
      necessary: true,
      timestamp: Date.now(),
    })
  );
};

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateMobileState = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateMobileState();
    window.addEventListener('resize', updateMobileState);

    const timer = window.setTimeout(() => {
      const savedConsent = getStoredConsent();
      if (!savedConsent) {
        setVisible(true);
      }
    }, 400);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', updateMobileState);
    };
  }, []);

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
      acceptedAll: true,
      timestamp: Date.now(),
    };

    saveConsent(allAccepted);
    setVisible(false);
  };

  const rejectAll = () => {
    const rejected: CookiePreferences = {
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
      acceptedAll: false,
      timestamp: Date.now(),
    };

    saveConsent(rejected);
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 120,
        background: '#f3f3f3',
        borderTop: '1px solid #dfe2e6',
        boxSizing: 'border-box',
      }}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent dialog"
    >
      <div
        style={{
          maxWidth: 1700,
          margin: '0 auto',
          padding: isMobile ? '16px 16px 14px' : '18px 14px 16px 18px',
          display: 'flex',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 12 : 10,
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            fontSize: isMobile ? 24 : 31,
            lineHeight: 1.15,
            fontWeight: 700,
            letterSpacing: '-0.05em',
            color: '#111827',
            whiteSpace: isMobile ? 'normal' : 'nowrap',
            flexShrink: 0,
          }}
        >
          We value your privacy
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: isMobile ? 'stretch' : 'center',
            justifyContent: 'space-between',
            flex: 1,
            width: isMobile ? '100%' : 'auto',
            gap: 18,
            minWidth: 0,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <div
            style={{
              fontSize: isMobile ? 13 : 14,
              lineHeight: 1.5,
              color: '#1f2937',
              fontWeight: 400,
              flex: 1,
              minWidth: 0,
              paddingRight: isMobile ? 0 : 8,
            }}
          >
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking “Accept All,” you agree to our use of cookies.
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              flexShrink: 0,
              width: isMobile ? '100%' : 'auto',
              flexDirection: isMobile ? 'column' : 'row',
            }}
          >
            <button
              type="button"
              onClick={rejectAll}
              style={{
                background: 'var(--color-primary-button-hover-background, #ffffff)',
                color: 'var(--color-primary-button-hover-text, #2c3650)',
                border: 'var(--style-border-width-buttons-primary, 1px) solid var(--color-primary-button-hover-border, #2c3650)',
                borderRadius: 'var(--style-border-radius-buttons-primary, 0px)',
                height: isMobile ? 46 : 50,
                minWidth: isMobile ? '100%' : 138,
                width: isMobile ? '100%' : 'auto',
                padding: '0 20px',
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer',
                boxSizing: 'border-box',
              }}
            >
              Reject All
            </button>

            <button
              type="button"
              onClick={acceptAll}
              style={{
                background: 'var(--color-primary-button-background, #266464)',
                color: 'var(--color-primary-button-text, #ffffff)',
                border: 'var(--style-border-width-buttons-primary, 1px) solid var(--color-primary-button-border, #266464)',
                borderRadius: 'var(--style-border-radius-buttons-primary, 0px)',
                height: isMobile ? 46 : 50,
                minWidth: isMobile ? '100%' : 138,
                width: isMobile ? '100%' : 'auto',
                padding: '0 20px',
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer',
                boxSizing: 'border-box',
              }}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
