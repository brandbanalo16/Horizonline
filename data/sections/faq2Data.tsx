import { SectionProps } from "@/types/sectionProps";
import { PricingFaqAccordion } from "@/data/pricingFaqAccordion";

export const Faq2Data: SectionProps = {
    wrapperCls: "mt-100 mb-100",
    container: "container",
    subheading: "Questions",
    heading: "Business Setup Pricing — Common Questions Answered",
    text: "Get clear answers about our UAE business setup packages, costs, timelines, and what is included in every service.",
    button: {
        label: "Get a Free Quote",
        href: "/contact-us",
        type: "primary"
    },
    faqList: PricingFaqAccordion,
}

