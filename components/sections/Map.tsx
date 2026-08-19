"use client";

import "@/styles/google-map.css";

const MapSection = () => {
    return (
        <div className="google-map">
            <div className="iframe-wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28852.751506995948!2d55.33676147431638!3d25.31784339999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b0038c676e7%3A0x45e1ebe828ddb2ed!2sHorizon%20line!5e0!3m2!1sen!2sin!4v1787133401468!5m2!1sen!2sin"
                    title="Google map"
                    width="1920"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
            </div>
      </div>
    )
}

export default MapSection;