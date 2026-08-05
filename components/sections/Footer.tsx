'use client';

import "@/styles/footer.css";
import FooterTop from "../FooterTop";
import FooterBottom from "../FooterBottom";

const Footer = () => {
    const container: string = 'container';

    return (
        <footer>
            <div className="footer-main">
                <FooterTop container={container} />
                <FooterBottom container={container} />
            </div>
        </footer>
    );
}

export default Footer;
