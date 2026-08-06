import { SectionProps } from "@/types/sectionProps";
import Icons from "@/components/Icons";
import WhyChooseUsImage from "@/public/img/promotion/1.jpg";

export const WhyChooseUsDubaiData: SectionProps = {
    wrapperCls: "section-padding",
    container: "container",
    heading: "Why Indian Entrepreneurs Choose Dubai",
    text: "As Indian entrepreneurs, you're no strangers to innovation and growth. But when it comes to expanding your business beyond India's borders, Dubai stands out as an unparalleled opportunity. Strategically located at the crossroads of Europe, Asia, and Africa, this cosmopolitan hub offers a unique blend of business-friendly policies, world-class infrastructure, and access to over 2 billion customers in the Middle East, North Africa, and South Asia. With our expert guidance, you can tap into Dubai's booming economy and take your business to new heights.",
    image: {
        src: WhyChooseUsImage.src,
        width: 1000,
        height: 1469,
        loading: "lazy",
        alt: "Dubai Business"
    },
    promotions: [
        {
            icon: <Icons.Check />,
            title: "No income tax",
            text: "Save on taxes and reinvest in your business",
        },
        {
            icon: <Icons.Check />,
            title: "Easy access from India",
            text: "Regular flights, seamless connectivity, and a short 4-hour flight away",
        },
        {
            icon: <Icons.Check />,
            title: "Large Indian expat community & business network",
            text: "Leverage connections and partnerships with ease",
        },
        {
            icon: <Icons.Check />,
            title: "Ease of remittance to India",
            text: "Send money back home without hassle or high fees",
        },
        {
            icon: <Icons.Check />,
            title: "No minimum capital requirement",
            text: "Start small, grow big, and enjoy flexibility in your investment",
        },
        {
            icon: <Icons.Check />,
            title: "Strategic re-export hub for Indian goods",
            text: "Expand your market reach and increase exports",
        }
    ]
}
