import { SectionProps } from "@/types/sectionProps";
import Icons from "@/components/Icons";

export const ContactData: SectionProps = {
    wrapperCls: "section-padding",
    container: "container",
    subheading: "Contact Us",
    heading: "Start Your Business Journey in the UAE",
    text: "Whether you're looking to set up a mainland company, free zone, or offshore entity — our expert consultants are here to guide you every step of the way. Reach out and we'll respond within 24 hours.",
    promotions: [
        {
            icon: <Icons.ThumbsUp />,
            title: "500+ Companies Formed",
            text: "Businesses across all Emirates trust Horizon Line for seamless company formation and licensing.",
        },
        {
            icon: <Icons.Support />,
            title: "10+ Years of UAE Experience",
            text: "Deep expertise in mainland, free zone, and offshore setups across all 7 Emirates.",
        },
    ],
    block: {
        heading: "Make an Appointment",
        text: "Feel free to contact with us, we don't spam your email",
    },
}
