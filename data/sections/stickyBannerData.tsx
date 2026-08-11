import { SectionProps } from "@/types/sectionProps";
import Image1 from "@/public/img/banner/first-slide-1.webp";
import Image2 from "@/public/img/banner/first-slide-2.webp";
import Image3 from "@/public/img/banner/first-slide-3.webp";

export const StickyBannerData: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",
    heading: "A Smoother Path to Launching Your Company Anywhere in the UAE",
    text: "Whether you are entering Dubai, exploring RAK and Fujairah, or setting up in Abu Dhabi, Sharjah, Ajman, or UAQ — Horizon Line helps you choose the best route and stays with you through licensing, office setup, visas, and banking.",
    blockList: [
        {
            subheading: "Mainland Setup",
            heading: "Launch in Dubai, Abu Dhabi — or Beyond",
            text: "We guide you through mainland company formation, licensing, documentation, and government coordination for a faster launch anywhere in the UAE.",
            button: {
                label: "Learn More",
                href: "/services/business-setup",
                type: "primary"
            },
            image: {
                src: Image1.src,
                width: 1000,
                height: 707,
                loading: "lazy",
                alt: "Mainland company setup across the UAE",
            },
        },
        {
            subheading: "New Frontier",
            heading: "Planning to Start Your Business? Think RAK — the Thriving New Emirate of the UAE",
            text: "RAK and Fujairah are home to some of the UAE's most ambitious new developments — from waterfront districts to industrial and tourism megaprojects. Lower costs, faster approvals, and huge growth potential make these emirates the smart pick for startups and small businesses.",
            button: {
                label: "Discover RAK & Fujairah Opportunities",
                href: "/contact-us",
                type: "primary"
            },
            image: {
                src: Image2.src,
                width: 1000,
                height: 707,
                loading: "lazy",
                alt: "Business setup in Ras Al Khaimah and Fujairah",
            },
        },
        {
            subheading: "Free Zone Setup",
            heading: "Choose the Right Free Zone for Your Business",
            text: "From free zone company formation to trade licence support, we help you compare options across every emirate's free zones and complete the process smoothly.",
            button: {
                label: "Learn More",
                href: "/services/free-zone",
                type: "primary"
            },
            image: {
                src: Image3.src,
                width: 1000,
                height: 707,
                loading: "lazy",
                alt: "Free zone company formation in the UAE",
            },
        },
        {
            subheading: "Office & Location",
            heading: "Find the Perfect Spot — and Set It Up Right",
            text: "Finding an eye-catching, budget-right location is one of the biggest challenges for new businesses. We scout commercial spaces matched to your licence and handle interior fit-out so you can move in ready to work.",
            button: {
                label: "Explore Office Solutions",
                href: "/services/office-solutions",
                type: "primary"
            },
            image: {
                src: Image1.src,
                width: 1000,
                height: 707,
                loading: "lazy",
                alt: "Commercial office space and interior fit-out in the UAE",
            },
        },
        {
            subheading: "Visa & Compliance",
            heading: "Stay Legal, Stay Compliant While Your Business Grows",
            text: "We support investor visas, family visas, Emirates ID, police clearance certificates, attestation, VAT registration, and corporate tax guidance — so your legal status and operations stay fully compliant.",
            button: {
                label: "Learn More",
                href: "/services/visa-services",
                type: "primary"
            },
            image: {
                src: Image2.src,
                width: 1000,
                height: 707,
                loading: "lazy",
                alt: "UAE visa services and legal status compliance",
            },
        }
    ]
}
