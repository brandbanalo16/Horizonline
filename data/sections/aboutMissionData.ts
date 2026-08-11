import { SectionProps } from "@/types/sectionProps";
import MissionImage from '@/public/img/image-text/img2.png';

export const AboutMissionData: SectionProps = {
    wrapperCls: "mt-100 about-mission-section about-page-section",
    container: "container",
    subheading: "Our Mission",
    heading: "Choose the Right Emirate — Not Just the Popular One",
    text: "We believe every business deserves honest guidance on where and how to set up in the UAE. Some clients need Dubai's global visibility; others benefit from RAK's lower setup costs or Fujairah's expanding trade zones. Our mission is to match your goals, budget, and timeline to the right emirate and licence type.",
    button: {
        label: "Get Started",
        href: "/contact-us",
        type: "primary"
    },
    image: {
        src: MissionImage.src,
        width: 992,
        height: 863,
        alt: 'Horizon Line consultants supporting UAE business setup',
        loading: 'lazy'
    },
    textList: [
        {
            text: "Honest emirate and jurisdiction recommendations"
        },
        {
            text: "Office location, fit-out, and bank account support"
        },
        {
            text: "Long-term compliance and PRO services after launch"
        }
    ]
}
