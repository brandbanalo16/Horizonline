import { SectionProps } from "@/types/sectionProps";
import Image1 from '@/public/img/image-text/img1.png';

export const ImageTextData: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",
    subheading: "About Us",
    heading: "Horizon Line is your trusted business setup consultancy in UAE",
    text: "Horizon Line supports entrepreneurs, investors, and growing companies with mainland company formation, free zone company formation, offshore company formation, visa services, VAT registration, and ongoing compliance across Dubai, Sharjah, Abu Dhabi, and the wider UAE.",
    button: {
        label: "Book a Consultation",
        href: "/contact-us",
        type: "primary"
    },
    image: {
        src: Image1.src,
        width: 992,
        height: 863,
        alt: 'Horizon Line business setup consultancy in Dubai',
        loading: 'lazy'
    },
    textList: [
        {
            text: "Mainland, free zone, and offshore company setup"
        },
        {
            text: "Licensing, visas, Emirates ID, and compliance support"
        },
        {
            text: "Dedicated guidance from setup to ongoing operations"
        }
    ]
}
