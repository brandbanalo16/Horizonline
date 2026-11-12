"use client";

import "@/styles/google-map.css";

const MapSection = () => {
    return (
        <div className="google-map">
            <div className="iframe-wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4315.040458829768!2d55.4066502810345!3d25.336427341510095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f590071a34981%3A0xf3ca3dce70026092!2sHorizone%20line!5e1!3m2!1sen!2sin!4v1794469836979!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
        </div>
    )
}

export default MapSection; 