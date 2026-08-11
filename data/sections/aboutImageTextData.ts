import { SectionProps } from "@/types/sectionProps";
import Image1 from '@/public/img/image-text/img1.png';

export const AboutImageTextData: SectionProps = {
    wrapperCls: "mt-100 about-page-intro",
    container: "container",
    subheading: "Who We Are",
    heading: "Your Trusted UAE Business Setup Partner — All 7 Emirates",
    text: "Horizon Line Management Consultancy LLC was built to make UAE company formation straightforward for founders, investors, and growing businesses. From Dubai and Abu Dhabi to Ras Al Khaimah, Fujairah, Ajman, Sharjah, and Umm Al Quwain — we guide you through licensing, visas, and compliance with a dedicated consultant on every file.",
    button: {
        label: "Book a Consultation",
        href: "/contact-us",
        type: "primary"
    },
    image: {
        src: Image1.src,
        width: 992,
        height: 863,
        alt: 'Horizon Line UAE business setup consultancy team',
        loading: 'lazy'
    },
    textList: [
        {
            text: "Mainland, free zone, and offshore formation in every emirate"
        },
        {
            text: "Visa, licensing, Emirates ID, and legal status under one roof"
        },
        {
            text: "Personal consultant from first call through renewal"
        }
    ]
}
