import Hamburger from "./menus/Hamburger";
import DrawerOpener from "./DrawerOpener";
import Icons from "./Icons";

const HeaderActions = () => {
    return (
        <div className="header-actions flex items-center">
            <DrawerOpener cls="svg-wrapper contact-large" data-drawer=".drawer-additional">
                <Icons.Contact />
            </DrawerOpener>
            <Hamburger />
        </div>
    )
}

export default HeaderActions;