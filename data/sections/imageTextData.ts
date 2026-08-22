import { SectionProps } from "@/types/sectionProps";
import Image1 from '@/public/img/image-text/img1.png';

export const ImageTextData: SectionProps = {
    wrapperCls: "mt-100 about-section-compact",
    container: "container",
    subheading: "About Horizon Line",
    heading: "Your Trusted Business Setup Partner — All 7 Emirates",
    text: "Horizon Line supports entrepreneurs and investors with mainland, free zone, and offshore company formation, Visa Assistance, and compliance across Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and Umm Al Quwain.",
    button: {
        label: "Book a Consultation",
        href: "/contact-us",
        type: "primary"
    },
    image: {
        src: Image1.src,
        width: 992,
        height: 863,
        alt: 'Business handshake in Dubai — Horizon Line UAE business setup consultancy',
        loading: 'lazy'
    },
    textList: [
        {
            text: "Mainland, free zone, and offshore setup in all 7 Emirates"
        },
        {
            text: "Licensing, visas, Emirates ID, and compliance support"
        },
        {
            text: "Dedicated guidance from setup to ongoing operations"
        }
    ]
}
