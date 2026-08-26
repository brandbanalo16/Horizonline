'use client';
import { useState } from 'react';
import Hamburger from "./menus/Hamburger";
import CostCalculatorPopup from "./popups/CostCalculatorPopup";
import { PhoneCall, Calculator } from 'lucide-react';

const HeaderActions2 = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className="header-actions flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1 mr-1">
                <a href="tel:+971541787863" className="flex items-center justify-center w-1 h-1 rounded-full bg-[#f4f5f7] hover:bg-[#e2e8f0] transition-colors" aria-label="Call us">
                    <PhoneCall className="w-1 h-1 text-[#1e293b]" strokeWidth={2} />
                </a>
                <a href="https://wa.me/971541787863" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-1 h-1 rounded-full bg-[#e5fcf1] hover:bg-[#d1fae5] transition-colors" aria-label="WhatsApp us">
                    <img src="/img/icons/WhatsApp_Logo_green.svg.webp" alt="WhatsApp" className="w-1 h-1" />
                </a>
            </div>

            <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="hidden sm:flex items-center bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-full font-semibold transition-colors shadow-sm text-l"
                style={{ paddingTop: '8px', paddingBottom: '8px', paddingLeft: '16px', paddingRight: '16px' }}
                aria-label="Cost Calculator"
            >
                Cost Calculator
                <span className="flex items-center justify-center bg-white rounded-full w-2 h-2 ml-1">
                    <Calculator className="w-1 h-1 text-[#0f172a]" strokeWidth={2.5} />
                </span>
            </button>

            <Hamburger />

            <CostCalculatorPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
            />
        </div>
    )
}

export default HeaderActions2;
