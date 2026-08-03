import Hamburger from "./menus/Hamburger";
import SlimButton from "./buttons/SlimButton";

const HeaderActions2 = () => {
    return (
        <div className="header-actions flex items-center">
            <Hamburger />
            <SlimButton 
                label="Get in Touch"
                href="/contact-us"
                ariaLabel="contact us"
                cls="button--primary"
            />
        </div>
    )
}

export default HeaderActions2;
