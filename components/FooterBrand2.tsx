import Logo from "./Logo";
import LogoImage from "@/public/img/logo-white.png";
import Social from "./Social";

const FooterBrand2 = () => {
    return (
        <div
            className="footer-widget footer-widget-brand"
            data-aos="fade-right"
            data-aos-anchor=".footer-top"
        >
            <Logo 
                src={LogoImage.src}
                width={189}
                height={32}
                url="/"
                cls="footer-logo"
                alt="Horizon Line logo"
                ariaLabel="Horizon Line logo" 
                loading="lazy"
            />
            <p className="text text-16">
                Your trusted partner for business setup, company formation, visa services, and corporate compliance across Dubai and the UAE.
            </p>
            <Social 
                wrapperCls="social-icons"
                aos="fade-up"
                aosAnchor=".footer-top"
            />
        </div>
    )
}

export default FooterBrand2;