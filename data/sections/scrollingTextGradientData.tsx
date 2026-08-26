import { SectionProps } from "@/types/sectionProps";
import Image1 from "@/public/img/logo.png";

export const ScrollingTextGradientData: SectionProps = {
    wrapperCls: "running-content-bg my-1",
    container: "container-fluid",     
    imageList: [        
        {
            src: Image1.src,
            alt: "Scrolling image",
            width: 108,
            height: 36,
            loading: "lazy",
            href: "/about-us"
        },
        {
            src: Image1.src,
            alt: "Scrolling image",
            width: 108,
            height: 36,
            loading: "lazy",
            href: "/about-us"
        },
        {
            src: Image1.src,
            alt: "Scrolling image",
            width: 108,
            height: 36,
            loading: "lazy",
            href: "/about-us"
        },
        {
            src: Image1.src,
            alt: "Scrolling image",
            width: 108,
            height: 36,
            loading: "lazy",
            href: "/about-us"
        },
        {
            src: Image1.src,
            alt: "Scrolling image",
            width: 108,
            height: 36,
            loading: "lazy",
            href: "/about-us"
        }
    ],
}
