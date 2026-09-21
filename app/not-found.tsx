import '@/styles/error.css';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import Icons from '@/components/Icons';

const PAGE_TITLE: string = 'Page Not Found';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Horizon Line',
  description: 'The page you are looking for does not exist. Return to the Horizon Line homepage for UAE business setup, company formation, and corporate services.',
  robots: {
    index: false,
    follow: false,
  },
}
 
export default function NotFound() {
    return (
        <>
            <BreadcrumbBanner 
                title={PAGE_TITLE}
                image={{
                    src: BreadcrumbBannerImage.src,
                    srcMobile: BreadcrumbBannerImageTablet.src,
                    srcTablet: BreadcrumbBannerImageMobile.src,
                    width: 1920,
                    height: 520,
                    cls: "media media-bg",
                    alt: "Banner Image",
                    loading: "eager"
                }}
            />

            <div className="section-error section-padding">
              <div className="container">
                <div className="section-headings text-center">
                  <h1 style={{ fontSize: '120px', fontWeight: 'bold', color: 'var(--sp-primary)', marginBottom: '20px' }}>404</h1>
                  <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Page Not Found</h2>
                  <p className="text text-18" data-aos="fade-up" style={{ marginBottom: '40px' }}>
                    Sorry, the page you're looking for doesn't exist. If you think something is broken, please report the problem. 
                  </p>

                  <div className="buttons" data-aos="fade-up">
                    <Link

                      href="/"
                      className="button button--primary"
                      aria-label="Back to Home"
                    >
                      Back to Home
                      <span className="svg-wrapper">
                        <Icons.ArrowCircle />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
          </div>
        </>
    )
}