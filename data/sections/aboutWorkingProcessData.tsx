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
            text: "We begin with a free consultation to learn about your business activity, target Emirates, budget, and timeline — then recommend the mainland, free zone, or offshore structure that fits best.",
        },
        {
            icon: <Icons.Analyze />,
            title: "Plan Your Licence & Location",
            text: "Our team helps you select the right trade licence, business activity, and Emirate — providing the suitable options based on your real needs.",
        },
        {
            icon: <Icons.Plan />,
            title: "Prepare & Submit Documents",
            text: "We prepare and submit all required documents — including MOA drafting, shareholder agreements, tenancy contracts, and government forms — ensuring everything is error-free before submission to prevent any delays.",
        },
        {
            icon: <Icons.Launch />,
            title: "Obtain Approvals & Registration",
            text: "We liaise with DED, free zone authorities, and MOHRE, tracking your application until your trade licence and company registration are fully approved.",
        },
        {
            icon: <Icons.Refine />,
            title: "Support Post License Registration",
            text: "We assist with office fit-out, electricity connection, visa and Emirates ID processing, VAT registration, bank account opening.",
        },
        {
            icon: <Icons.Support />,
            title: "Support You After Launch",
            text: "We manage your annual renewals — Trade Licence, Ejari, Emirates ID, and Medical Insurance — so nothing lapses and nothing's on you to track.",
        }
    ],
}
