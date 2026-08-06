import { SectionProps } from "@/types/sectionProps";
import Icons from "@/components/Icons";

export const Contact2Data: SectionProps = {
    wrapperCls: "section-padding without-box-shadow",
    container: "container",
    subheading: "Get In Touch",
    heading: "Start Your UAE Business Journey Today",
    text: "Whether you're planning to launch a mainland company, set up in a free zone, or need visa and compliance support — our consultants are ready to help. Book a free consultation and get expert guidance within 24 hours.",
    promotions: [
        {
            icon: <Icons.ThumbsUp />,
            title: "500+ Companies Formed",
            text: "We have successfully set up over 500 businesses across mainland Dubai, UAE free zones, and offshore jurisdictions.",
        },
        {
            icon: <Icons.Support />,
            title: "10+ Years of Experience",
            text: "Our consultants bring over a decade of hands-on experience helping entrepreneurs and investors across the UAE.",
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