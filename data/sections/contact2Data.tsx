import { SectionProps } from "@/types/sectionProps";
import Icons from "@/components/Icons";

export const Contact2Data: SectionProps = {
    wrapperCls: "section-padding without-box-shadow",
    container: "container",
    subheading: "Get In Touch",
    heading: "Start Your UAE Business Journey Today — Anywhere in the Emirates",
    text: "Whether you're planning to launch in Dubai, explore RAK's growing opportunities, or need visa, office, or banking support — our consultants are ready to help. Book a free consultation and get expert guidance within 24 hours.",
    promotions: [
        {
            icon: <Icons.ThumbsUp />,
            title: "500+ Companies Formed Across the UAE",
            text: "We have successfully set up over 500 businesses across mainland, free zone, and offshore jurisdictions throughout the UAE.",
        },
        {
            icon: <Icons.Support />,
            title: "10+ Years of Experience",
            text: "Our consultants bring over a decade of hands-on experience helping entrepreneurs and investors across all 7 Emirates.",
        },
    ],
    block: {
        heading: "Book a Free Consultation",
        text: "Fill in the form and our UAE business setup expert will contact you within 24 hours.",
        button: {
            label: "Send Your Enquiry",
            href: "/contact-us",
            type: "primary" as const,
        },
    },
}
