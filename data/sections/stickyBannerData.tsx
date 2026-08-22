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
            heading: "Mainland Company Formation",
            text: "Licensed by the DED, with full freedom to trade anywhere in the UAE — including government contracts. 100% foreign ownership on most activities, with visa quota tied to your office size. Best for businesses serving the local UAE market directly.",
            button: {
                label: "Explore Mainland Setup in UAE",
                href: "/services/mainland-company-formation-uae",
                type: "primary"
            },
            image: {
                src: Image1.src,
                width: 1000,
                height: 707,
                loading: "lazy",
                alt: "Mainland company formation across all 7 Emirates of the UAE",
            },
        },
        {
            subheading: "Free Zone Setup",
            heading: "Free Zone Company Formation in UAE",
            text: "Fast, affordable setup with 100% ownership and full profit repatriation. Comes bundled with office space and a visa quota — but you can't trade directly in the mainland market without a distributor. Best for international trade, consulting, and e-commerce.",
            button: {
                label: "Explore Free Zone Setup",
                href: "/services/free-zone-company-formation-uae",
                type: "primary"
            },
            image: {
                src: Image3.src,
                width: 1000,
                height: 707,
                loading: "lazy",
                alt: "Free zone company formation across UAE — DMCC, IFZA, RAKEZ, JAFZA",
            },
        },
        {
            subheading: "Offshore Company Formation",
            heading: "Offshore Company Formation in UAE",
            text: "No physical office, no UAE visa, no local trading — built purely for holding assets, shares, or property, and running international business. Fast, low-cost, and highly confidential. Best if you're structuring globally, not operating in the UAE day-to-day.",
            button: {
                label: "Explore Offshore Setup",
                href: "/services/offshore-company-formation-uae",
                type: "primary"
            },
            image: {
                src: Image2.src,
                width: 1000,
                height: 707,
                loading: "lazy",
                alt: "Offshore company formation in the UAE — RAK ICC and JAFZA",
            },
        }
    ]
}
