"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icons from "./Icons";

interface SocialShareProps {
  title: string;
}

const Share = ({ title }: SocialShareProps) => {
    const pathname = usePathname();
    const [url, setUrl] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") setUrl(window.location.origin + pathname);
    }, [pathname]);

    // encoded values
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    return (
        <ul className="social-icons list-unstyled">
            <li>
                <a
                    className="social-link text" 
                    target="_blank"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                >
                    <Icons.FaceBook />
                    <span className="visually-hidden">Facebook</span>
                </a>
            </li>
        </ul>
    )
}

export default Share;