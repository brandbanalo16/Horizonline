import type { Metadata } from "next";
import { fonts } from "@/libs/fonts";
import "@/styles/global.css";
import "@/styles/footer.css";
import "@/styles/modal.css";
import AosInitializer from "@/libs/aos";

import Header from "@/components/sections/Header";
import AdditionalDrawer from "@/components/AdditionalDrawer";
import Footer from "@/components/sections/Footer";
import ScrollTop from "@/components/ScrollToTop";
import DrawerOverlay from "@/components/DrawerOverlay";

export const metadata: Metadata = {
  title: {
    template: '%s | Horizon Line',
    default: 'Business Setup in Dubai, UAE | Horizon Line',
  },
  description: 'Horizon Line provides expert business setup in All 7 Emirates, UAE, Sharjah, and Abu Dhabi with mainland and free zone company formation, visas, VAT, and compliance support.',
  alternates: {
    canonical: 'https://www.horizonlineconsultancy.ae/'
  },
  openGraph: {
    title: 'Business Setup in Dubai, UAE | Horizon Line',
    description: 'Trusted support for company formation, licensing, visas, VAT, and compliance across Dubai, Sharjah, Abu Dhabi, and the wider UAE.',
    url: 'https://www.horizonlineconsultancy.ae/',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts}>
        <Header />
        <main>{children}</main>
        <Footer />
        
        {/* Modal and Drawer Overlay */}
        <DrawerOverlay />

        {/* Additional right-side drawer (global) */}
        <AdditionalDrawer />

        {/* AOS Init */}
        <AosInitializer />
        
        {/* Scroll to Top Button */}
        <ScrollTop />
      </body>
    </html>
  );
}
