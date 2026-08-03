import { SectionProps } from "@/types/sectionProps";
import BackgroundImage from '@/public/img/contact/contact-bg.jpg';

export const OurServicesData: SectionProps = {
    wrapperCls: "mt-100 section-padding",
    container: "container",
    backgroundImage: {
        src: BackgroundImage.src,
        width: 1920,
        height: 883,
        alt: "Horizon Line business setup consultancy services",
        loading: "lazy"
    },
    subheading: "Our Services",
    heading: "Wide range of service to support your business setup in UAE",
    button: {
        label: "Explore Services",
        href: "/services",
        type: "primary"
    },
}