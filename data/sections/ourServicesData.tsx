import { SectionProps } from "@/types/sectionProps";
import BackgroundImage from '@/public/img/contact/contact-bg.jpg';

export const OurServicesData: SectionProps = {
    wrapperCls: "mt-100 section-padding",
    container: "container",
    backgroundImage: {
        src: BackgroundImage.src,
        width: 1920,
        height: 883,
        alt: "Horizon Line business setup consultancy services across the UAE",
        loading: "lazy"
    },
    subheading: "Our Services",
    heading: "Wide Range of Services to Support Your Business Setup Across the UAE",
    button: {
        label: "Explore All Services",
        href: "/services",
        type: "primary"
    },
}
