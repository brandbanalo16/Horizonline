import { SectionProps } from "@/types/sectionProps";
import backgroundImage from "@/public/img/why-choose-us/1.webp";
import Image from "@/public/img/why-choose-us/1.webp";
import Icons from "@/components/Icons";

export const WhyChooseUsData2: SectionProps = {
    wrapperCls: "mt-100",
    backgroundImage: {
        src: backgroundImage.src,
        width: 1000,
        height: 742,
        loading: "lazy",
        alt: "Why choose Horizon Line"
    },
    image: {
        src: Image.src,
        width: 1000,
        height: 742,
        loading: "lazy",
        alt: "Horizon Line business setup experts in Dubai"
    },
    subheading: "Why Choose Us",
    heading: "Your most trusted partner for UAE business setup",
    button: {
        label: "Learn More About Us",
        href: "/about-us",
        type: "secondary"
    },
    promotions: [
        {
            icon: <Icons.Consulting />,
            title: "Expert Consultants",
            text: "Our experienced team guides you through every step — from choosing the right license to obtaining approvals across UAE authorities.",
        },
        {
            icon: <Icons.Plan />,
            title: "End-to-End Support",
            text: "We handle mainland, free zone, and offshore setups along with visas, VAT, Emirates ID, and ongoing compliance support.",
        },
        {
            icon: <Icons.Finance />,
            title: "Transparent Pricing",
            text: "No hidden fees. We provide clear, upfront cost estimates for government fees, licenses, and our professional services.",
        },
        {
            icon: <Icons.Risk />,
            title: "Fast & Reliable",
            text: "Our streamlined process and government relationships help you launch faster — reducing delays and bureaucratic hurdles.",
        }
    ],
}
