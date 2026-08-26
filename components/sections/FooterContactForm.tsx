import FooterContact2 from "../FooterContact2";

interface FooterProps {
    container: string;
}

const FooterContactForm = ({ container }: FooterProps) => {
    return (
        <>
            <FooterContact2
                container={container}
                alt="Contact image"
                aosAnchor=".contact-box"
                subheading="Contact Us"
                heading="Get free business consultation today"
                text="Need help with a project, have a question about our work? have a question about our work? We're here to help you."
            />
        </>
    )
}

export default FooterContactForm;