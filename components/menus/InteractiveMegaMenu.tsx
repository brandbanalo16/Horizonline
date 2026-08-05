"use client";

import React, { useState } from 'react';
import { LinkHeading, LinkWithDesc } from "./MenuLinks";

interface Service {
    title: string;
    path: string;
}

interface Category {
    title: string;
    path: string;
    services?: Service[];
}

interface MegaMenuData {
    title: string;
    path: string;
    dropdown: Category[];
}

export default function InteractiveMegaMenu({ data }: { data: MegaMenuData }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const categories = data.dropdown || [];
    const activeCategory = categories[activeIndex];
    

    return (
        <ul className="list-unstyled">
            {/* Column 1: Categories */}
            <li className="nav-item">
                <LinkHeading title={data.title} path={data.path} />
                <ul className="reset-submenu list-unstyled submenu-color">
                    {categories.map((cat, idx) => (
                        <li 
                            className="nav-item" 
                            key={`cat-${idx}`} 
                            onMouseEnter={() => setActiveIndex(idx)}
                        >
                            <div style={{ background: activeIndex === idx ? 'var(--color-primary-background-hover)' : 'transparent', borderRadius: 'var(--submenu-radius)' }}>
                                <LinkWithDesc title={cat.title} path={cat.path} />
                            </div>
                        </li>
                    ))}
                </ul>
            </li>

            {/* Column 2: Services */}
            <li className="nav-item">
                <LinkHeading title="SERVICES" path={activeCategory?.path || "#"} />
                {
                    (() => {
                        const services = activeCategory?.services || [];

                        if (services.length > 6) {
                            const splitIndex = Math.ceil(services.length / 2);
                            const left = services.slice(0, splitIndex);
                            const right = services.slice(splitIndex);

                            return (
                                <div className="service-columns">
                                    <ul className="reset-submenu list-unstyled submenu-color">
                                        {left.map((service, i) => (
                                            <li className="nav-item" key={`srv-left-${i}`}>
                                                <LinkWithDesc title={service.title} path={service.path} />
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="reset-submenu list-unstyled submenu-color">
                                        {right.map((service, i) => (
                                            <li className="nav-item" key={`srv-right-${i}`}>
                                                <LinkWithDesc title={service.title} path={service.path} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        }

                        // Default: single list
                        return (
                            <ul className={`reset-submenu list-unstyled submenu-color`}>
                                {services.map((service, sIdx) => (
                                    <li className="nav-item" key={`srv-${sIdx}`}>
                                        <LinkWithDesc title={service.title} path={service.path} />
                                    </li>
                                ))}
                            </ul>
                        );
                    })()
                }
            </li>
        </ul>
    );
}
