import "@/styles/header.css";
import Logo from "./Logo";
import LogoImage from "@/public/img/logo.png";
import NavBar from "./menus/NavBar";
import HeaderActions2 from "./HeaderActions2";
import StickyHeader from "./StickyHeader";

interface Header2Props {
  isInnerPage?: boolean;
}

const Header2 = ({ isInnerPage = false }: Header2Props) => {
    const wrapperClasses = `header-2 ${isInnerPage ? 'header-inner' : 'header-floating'}`;

    return (
      <>
        <StickyHeader 
          wrapperCls={wrapperClasses}
          container="container-fluid"
          stickyType='on-scroll-up'
        >
          <div className="header-grid">
            {/* Logo */}
            <Logo 
              src={LogoImage.src}
              width={300}
              height={32}
              url="/"
              cls="header-logo"
              alt="Consulo logo"
              ariaLabel="Consulo logo"
              loading="eager"
            />

            {/* Nav Bar */}
            <NavBar />

            {/* Header Actions */}
            <HeaderActions2 />
          </div>
        </StickyHeader>
      </>
    )
}

export default Header2;