import { SectionProps } from "@/types/sectionProps";
import { AboutFaqAccordion } from "@/data/aboutFaqAccordion";

export const AboutFaqData: SectionProps = {
    wrapperCls: "mt-100 mb-100 about-page-section",
    container: "container",
    subheading: "Common Questions",
    heading: "Questions About Setting Up Your Business in the UAE?",
    text: "Find quick answers about our coverage across all 7 Emirates, our setup process, and the services we provide — from licensing and visas to office space and banking.",
    button: {
        label: "View All FAQs",
        href: "/faq",
        type: "primary"
    },
    faqList: AboutFaqAccordion,
}
