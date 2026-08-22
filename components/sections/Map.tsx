"use client";

import "@/styles/google-map.css";

const MapSection = () => {
    return (
        <div className="google-map">
            <div className="iframe-wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3606.0377164969636!2d55.406539875386436!3d25.336515377621538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDIwJzExLjUiTiA1NcKwMjQnMzIuOCJF!5e0!3m2!1sen!2sin!4v1787393253201!5m2!1sen!2sin" width="1920" height="600" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
        </div>
    )
}

export default MapSection; 