import { SectionProps } from "@/types/sectionProps";
import Image1 from "@/public/img/project/1.jpg";
import Image2 from "@/public/img/project/2.jpg";
import Image3 from "@/public/img/project/3.jpg";

export const StickyBannerData: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",
    heading: "A smoother path to launching your UAE company",
    text: "Whether you are entering Dubai, Sharjah, Abu Dhabi, or another UAE emirate, Horizon Line helps you choose the best setup route and stays with you through licensing, visas, and compliance.",
    blockList: [
        {
            subheading: "Mainland Setup",
            heading: "Launch in Dubai or Abu Dhabi with confidence",
            text: "We guide you through mainland company formation, licensing, documentation, and government coordination for a faster launch.",
            button: {
                label: "Learn More",
                href: "/services",
                type: "primary"
            },
            image: {
                src: Image1.src,
                width: 1000,
                height: 707,
                loading: "lazy",
                alt: "Mainland company setup in Dubai",
            },
        },
        {
            subheading: "Free Zone Setup",
            heading: "Choose the right free zone for your business",
            text: "From free zone company formation to trade license support, we help you compare options and complete the process smoothly.",
            button: {
                label: "Learn More",
                href: "/services",
                type: "primary"
            },
            image: {
                src: Image2.src,
                width: 1000,
                height: 707,
                loading: "lazy",
                alt: "Free zone business setup support",
            },
        },
        {
            subheading: "Visa & Compliance",
            heading: "Stay compliant while your business grows",
            text: "We support investor visas, family visas, Emirates ID, VAT registration, and corporate tax guidance so operations remain compliant.",
            button: {
                label: "Learn More",
                href: "/services",
                type: "primary"
            },
            image: {
                src: Image3.src,
                width: 1000,
                height: 707,
                loading: "lazy",
                alt: "Visa and compliance support in the UAE",
            },
        }
    ]
}
