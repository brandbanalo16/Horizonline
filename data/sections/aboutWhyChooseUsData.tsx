import { SectionProps } from "@/types/sectionProps";
import backgroundImage from "@/public/img/why-choose-us/1.webp";
import Image from "@/public/img/why-choose-us/1.webp";
import Icons from "@/components/Icons";

export const AboutWhyChooseUsData: SectionProps = {
    wrapperCls: "mt-100 about-page-section",
    backgroundImage: {
        src: backgroundImage.src,
        width: 1000,
        height: 742,
        loading: "lazy",
        alt: "Why businesses trust Horizon Line for UAE setup"
    },
    image: {
        src: Image.src,
        width: 1000,
        height: 742,
        loading: "lazy",
        alt: "Horizon Line UAE business setup and compliance experts"
    },
    subheading: "Why Choose Horizon Line",
    heading: "What Sets Us Apart as Your UAE Setup Partner",
    button: {
        label: "Book a Consultation",
        href: "/contact-us",
        type: "secondary"
    },
    promotions: [
        {
            icon: <Icons.Consulting />,
            title: "Dedicated UAE Specialists",
            text: "Every client works with an experienced consultant who understands mainland, free zone, and offshore rules — and coordinates directly with DED, free zone authorities, and MOHRE across all 7 Emirates.",
        },
        {
            icon: <Icons.Plan />,
            title: "Complete Setup & Aftercare",
            text: "From company formation and office fit-out to investor visas, Emirates ID, VAT registration, and corporate bank account opening — we stay with you well beyond licence approval.",
        },
        {
            icon: <Icons.Finance />,
            title: "Clear, Upfront Pricing",
            text: "We break down government fees, licence costs, and our professional charges before you commit — so there are no surprises mid-process.",
        },
        {
            icon: <Icons.Risk />,
            title: "Coverage Across All 7 Emirates",
            text: "Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, or UAQ — we help you evaluate each option and set up where it genuinely fits your business, including high-growth markets like RAK and Fujairah.",
        }
    ],
}
