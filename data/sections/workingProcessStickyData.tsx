import { SectionProps } from "@/types/sectionProps";
import Icons from "@/components/Icons";

export const WorkingProcessStickyData: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",
    subheading: "How It Works",
    heading: "Your UAE Business Setup in 5 Simple Steps",
    promotions: [
        {
            icon: <Icons.Discover />,
            title: "Free Consultation",
            text: "We start with a free discovery call to understand your business goals, preferred Emirates, and budget — whether that's Dubai, RAK, Fujairah, or anywhere in between — and recommend the most suitable structure.",
        },
        {
            icon: <Icons.Analyze />,
            title: "Choose Your Licence & Structure",
            text: "Our consultants help you select the right trade licence category, business activity, and legal structure across all 7 Emirates.",
        },
        {
            icon: <Icons.Plan />,
            title: "Document Preparation",
            text: "We prepare and review all required documents, including Memorandum of Association, shareholder agreements, tenancy contracts, and government application forms.",
        },
        {
            icon: <Icons.Launch />,
            title: "Licence Approval & Registration",
            text: "We submit your application, coordinate with relevant authorities (DED, free zone authority, MOHRE), and track progress until your trade licence and company registration are approved.",
        },
        {
            icon: <Icons.Refine />,
            title: "Post-Setup Support",
            text: "After launch, we continue supporting your business with office setup, visa processing, Emirates ID, VAT registration, corporate bank account opening, and annual renewal services.",
        }
    ],
}
