import Icons from "./Icons";
import Link from "next/link";

interface SocialProps {
    wrapperCls: string;
    aos?: string;
    aosAnchor?: string;
}

const menuSocial = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/horizonlineuae/",
        icon: <Icons.FaceBook />
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/horizonlineuae/?hl=en",
        icon: <Icons.Instagram />
    }
]

const Social = ({
    wrapperCls,
    aos,
    aosAnchor
}: SocialProps) => {
    const isAos = aos ? { 'data-aos': `${aos}` } : null;
    const isAosAnchor = aosAnchor ? { 'data-aos-anchor': `${aosAnchor}` } : null;
    const conditionalAttributes = {...isAos, ...isAosAnchor}

    return (
        <ul className={`${wrapperCls} list-unstyled`} {...conditionalAttributes}>
            {menuSocial.map((item, index) => (
                <li key={`social-${index}`}>
                    <Link
                        className="social-link text"
                        href={item.href}
                    >
                        {item.icon}
                        <span className="visually-hidden">{item.label}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Social;