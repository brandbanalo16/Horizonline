import Hamburger from "./menus/Hamburger";
import DrawerOpener from "./DrawerOpener";
import Icons from "./Icons";
import SlimButton from "./buttons/SlimButton";

const HeaderActions2 = () => {
    return (
        <div className="header-actions flex items-center">
            <Hamburger />
            <DrawerOpener cls="svg-wrapper contact-large" data-drawer=".drawer-additional">
                <Icons.Contact />
            </DrawerOpener>
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
