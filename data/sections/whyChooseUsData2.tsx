import { SectionProps } from "@/types/sectionProps";
import backgroundImage from "@/public/img/why-choose-us/1.webp";
import Image from "@/public/img/why-choose-us/1.webp";
import Icons from "@/components/Icons";

export const WhyChooseUsData2: SectionProps = {
    wrapperCls: "mt-100",
    backgroundImage: {
        src: backgroundImage.src,
        width: 1000,
        height: 742,
        loading: "lazy",
        alt: "Why choose Horizon Line for UAE business setup"
    },
    image: {
        src: Image.src,
        width: 1000,
        height: 742,
        loading: "lazy",
        alt: "Horizon Line business setup experts across all 7 Emirates"
    },
    subheading: "Why Choose Us",
    heading: "Your Most Trusted Partner for Business Setup Across the UAE",
    button: {
        label: "Learn More About Us",
        href: "/about-us",
        type: "secondary"
    },
    promotions: [
        {
            icon: <Icons.Consulting />,
            title: "Expert Consultants",
            text: "Our experienced team guides you through every step, from choosing the right licence to obtaining approvals across DED, free zone authorities, and MOHRE — in any of the 7 Emirates.",
        },
        {
            icon: <Icons.Plan />,
            title: "End-to-End Support",
            text: "Mainland, free zone, and offshore setups, plus location selection, office fit-out, visas, Emirates ID, and corporate bank account opening.",
        },
        {
            icon: <Icons.Finance />,
            title: "Transparent Pricing",
            text: "No hidden fees. Clear, upfront cost estimates for government fees, licences, and our professional services.",
        },
        {
            icon: <Icons.Risk />,
            title: "All 7 Emirates Covered",
            text: "In All 7 Emirates we have fast-growing opportunities, we help you choose — and set up — where it makes the most sense for your business across the UAE.",
        }
    ],
}
