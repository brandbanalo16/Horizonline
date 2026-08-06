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
            text: "We start with a free discovery call to understand your business goals, preferred location, and budget. We then recommend the most suitable structure — mainland, free zone, or offshore.",
        },
        {
            icon: <Icons.Analyze />,
            title: "Choose Your License & Structure",
            text: "Our consultants help you select the right trade license category, business activity, and legal structure across Dubai, Sharjah, Abu Dhabi, or other UAE emirates.",
        },
        {
            icon: <Icons.Plan />,
            title: "Document Preparation",
            text: "We prepare and review all required documents, including Memorandum of Association, shareholder agreements, tenancy contracts, and government application forms.",
        },
        {
            icon: <Icons.Launch />,
            title: "License Approval & Registration",
            text: "We submit your application, coordinate with relevant authorities (DED, free zone authority, MOHRE), and track progress until your trade license and company registration are approved.",
        },
        {
            icon: <Icons.Refine />,
            title: "Post-Setup Support",
            text: "After launch, we continue to support your business with visa processing, Emirates ID, VAT registration, bank account opening, and annual renewal services.",
        }
    ],
}