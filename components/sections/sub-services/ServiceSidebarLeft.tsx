'use client';

import React, { useState, useEffect } from 'react';

const tocItems = [
    { id: 'overview',   label: 'Overview' },
    { id: 'benefits',   label: 'Key Benefits' },
    { id: 'documents',  label: 'Documents Required' },
    { id: 'process',    label: 'Registration Process' },
    { id: 'why-us',     label: 'Why Choose Us' },
    { id: 'faqs',       label: 'FAQs' },
];

export const ServiceSidebarLeft = () => {
    const [activeId, setActiveId] = useState('overview');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { rootMargin: '-20% 0px -70% 0px' }
        );
        tocItems.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveId(id);
    };

    return (
        <div className="svc-left-col" style={{ width: '100%', minWidth: 0 }}>
            <style dangerouslySetInnerHTML={{ __html: `
                .toc-card {
                    position: sticky;
                    top: 90px;
                    background: #ffffff;
                    border-radius: 10px;
                    border: 1px solid #e4e8ee;
                    overflow: hidden;
                    box-shadow: 0 1px 8px rgba(44,54,80,0.07);
                }
                .toc-header-bar {
                    background: #2c3650;
                    padding: 14px 20px;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.7);
                    white-space: nowrap;
                }
                .toc-menu {
                    padding: 8px 0;
                }
                .toc-btn {
                    display: block;
                    width: 100%;
                    text-align: left;
                    padding: 10px 20px;
                    font-size: 13.5px;
                    font-weight: 500;
                    color: #5d666f;
                    background: none;
                    border: none;
                    border-left: 3px solid transparent;
                    cursor: pointer;
                    transition: all 0.18s;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: 1.4;
                }
                .toc-btn:hover {
                    color: #266464;
                    background: #f0f7f7;
                    border-left-color: #266464;
                }
                .toc-btn.active {
                    color: #2c3650;
                    background: #eef1f7;
                    border-left-color: #2c3650;
                    font-weight: 700;
                }
                .toc-meta-card {
                    margin-top: 20px;
                    background: #ffffff;
                    border: 1px solid #e4e8ee;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 1px 8px rgba(44,54,80,0.07);
                }
                .toc-meta-row {
                    padding: 14px 20px;
                    border-bottom: 1px solid #f2f4f7;
                }
                .toc-meta-row:last-child { border-bottom: none; }
                .toc-meta-label {
                    font-size: 10px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: #5d666f;
                    margin-bottom: 4px;
                }
                .toc-meta-value {
                    font-size: 13px;
                    font-weight: 600;
                    color: #2c3650;
                }
            `}} />

            <div className="toc-card">
                <div className="toc-header-bar">Table of Contents</div>
                <nav className="toc-menu">
                    {tocItems.map((item) => (
                        <button
                            key={item.id}
                            className={`toc-btn${activeId === item.id ? ' active' : ''}`}
                            onClick={() => scrollTo(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="toc-meta-card">
                <div className="toc-meta-row">
                    <div className="toc-meta-label">Timeline</div>
                    <div className="toc-meta-value">Efficient Processing</div>
                </div>
                <div className="toc-meta-row">
                    <div className="toc-meta-label">Regulated By</div>
                    <div className="toc-meta-value">UAE Government Entities</div>
                </div>
                <div className="toc-meta-row">
                    <div className="toc-meta-label">Mode</div>
                    <div className="toc-meta-value">In-Person / Online</div>
                </div>
            </div>
        </div>
    );
};
