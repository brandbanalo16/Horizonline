import { SectionProps } from "@/types/sectionProps";
import Icons from "@/components/Icons";

export const AboutWorkingProcessData: SectionProps = {
    wrapperCls: "mt-100 about-page-section",
    container: "container",
    subheading: "Our Approach",
    heading: "How We Guide Your Business Setup Journey",
    promotions: [
        {
            icon: <Icons.Discover />,
            title: "Understand Your Goals",
            text: "We begin with a free consultation to learn about your business activity, target emirate, budget, and timeline — then recommend the mainland, free zone, or offshore structure that fits best.",
        },
        {
            icon: <Icons.Analyze />,
            title: "Plan Your Licence & Location",
            text: "Our team helps you select the right trade licence, business activity, and emirate — comparing Dubai, RAK, Fujairah, and other options based on your real needs.",
        },
        {
            icon: <Icons.Plan />,
            title: "Prepare & Submit Documents",
            text: "We handle MOA drafting, shareholder agreements, tenancy contracts, and all government forms — reviewing everything before submission to avoid delays.",
        },
        {
            icon: <Icons.Launch />,
            title: "Obtain Approvals & Registration",
            text: "We liaise with DED, free zone authorities, and MOHRE, tracking your application until your trade licence and company registration are fully approved.",
        },
        {
            icon: <Icons.Refine />,
            title: "Support You After Launch",
            text: "Post-setup, we assist with office fit-out, visa and Emirates ID processing, VAT registration, bank account opening, and annual licence renewals.",
        }
    ],
}
