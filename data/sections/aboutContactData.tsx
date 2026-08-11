import { SectionProps } from "@/types/sectionProps";
import Icons from "@/components/Icons";

export const AboutContactData: SectionProps = {
    wrapperCls: "section-padding without-box-shadow about-page-section",
    container: "container",
    subheading: "Work With Us",
    heading: "Ready to Start Your Business Anywhere in the UAE?",
    text: "Speak with a Horizon Line consultant about mainland, free zone, or offshore setup in Dubai, RAK, Fujairah, or any other emirate. We respond within 24 hours with expert guidance tailored to your goals.",
    promotions: [
        {
            icon: <Icons.ThumbsUp />,
            title: "500+ Companies Formed Across the UAE",
            text: "Hundreds of businesses trust Horizon Line for company formation, licensing, and ongoing compliance support.",
        },
        {
            icon: <Icons.Support />,
            title: "10+ Years of UAE Experience",
            text: "Our team brings deep, hands-on knowledge of government processes across all 7 Emirates.",
        },
    ],
    block: {
        heading: "Book a Free Consultation",
        text: "Tell us about your business plans and preferred emirate — we will outline the best setup path for you.",
        button: {
            label: "Send Your Enquiry",
            href: "/contact-us",
            type: "primary" as const,
        },
    },
}
