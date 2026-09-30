'use client';

import { useState } from "react";
import Icons from "./Icons";
import SidebarSearch from "./SidebarSearch";
import SidebarCategories from "./SidebarCategories";
import RecentPost from "./RecentPost";
import SidebarTags from "./SidebarTags";
import Posts from "@/data/posts.json";
import DrawerOpener from "./DrawerOpener";
import Link from "next/link";

interface BlogSidebarType {
    slug?: string;
}

const mainServices = [
    { title: 'Business Setup', path: '/services/business-setup' },
    { title: 'Free Zone Company Formation', path: '/services/free-zone-company-formation' },
    { title: 'Offshore Company Formation', path: '/services/offshore-company-formation' },
    { title: 'Corporate Services', path: '/services/corporate-services' },
    { title: 'Visa & Immigration', path: '/services/visa-immigration' },
    { title: 'Accounting & VAT', path: '/services/accounting-vat' },
    { title: 'PRO Services', path: '/services/pro-services' },
    { title: 'Trademark & IP', path: '/services/trademark-ip' }
];

const BlogSidebar = ({ slug }: BlogSidebarType) => {
    const [countryCode, setCountryCode] = useState('+971');
    const posts = Posts;
    const tags: string[] = Array.from(new Set(posts.flatMap(post => post.tags || [])));
    const categories: string[] = Array.from(new Set(posts.map(post => (post as any).category).filter(Boolean)));

    return (
        <div className="sidebar-filter drawer-blog-sidebar" style={{ height: '100%' }}>
            <div className="drawer-headings lg:!hidden" data-aos="fade-up">
                <div className="heading text-24">Filter</div>
                <DrawerOpener
                    cls="svg-wrapper menu-close"
                    data-drawer=".drawer-blog-sidebar"
                >
                    <Icons.CloseCircle />
                </DrawerOpener>
            </div>
            <aside className="blog-sidebar" style={{ position: 'sticky', top: '120px' }}>

                <div className="sidebar-widget radius18" data-aos="fade-up" style={{ backgroundColor: '#f8fafc', padding: '24px' }}>
                    <h2 className="sidebar-heading heading text-24" style={{ marginBottom: '16px' }}>Enquire Now</h2>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <input type="text" placeholder="Full Name" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', width: '100%' }} required />
                        <input type="email" placeholder="Email Address" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', width: '100%' }} required />
                        {/* Phone with country code */}
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: '#fff', color: '#374151', flexShrink: 0 }}
                                aria-label="Country code"
                            >
                                <option value="+971">+971 UAE</option>
                                <option value="+91">+91 IN</option>
                            </select>
                            <input
                                type="tel"
                                placeholder={countryCode === '+971' ? '9-digit UAE number' : '10-digit India number'}
                                inputMode="numeric"
                                minLength={countryCode === '+971' ? 9 : 10}
                                maxLength={countryCode === '+971' ? 9 : 10}
                                pattern={countryCode === '+971' ? '[0-9]{9}' : '[0-9]{10}'}
                                title={countryCode === '+971' ? 'Enter exactly 9 digits for UAE' : 'Enter exactly 10 digits for India'}
                                style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', width: '100%' }}
                                required
                            />
                        </div>
                        <textarea placeholder="Your Message" rows={3} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', width: '100%', resize: 'none' }} required></textarea>
                        <button type="submit" style={{ padding: '12px', borderRadius: '8px', backgroundColor: '#2563eb', color: '#fff', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Submit</button>
                    </form>
                </div>

                <div className="sidebar-widget radius18" data-aos="fade-up">
                    <h2 className="sidebar-heading heading text-24">Services</h2>
                    <ul className="blog-categories list-unstyled">
                        {mainServices.map((item, index) => (
                            <li key={`svc-${index}`}>
                                <Link
                                    className="blog-category subheading subheading-bg text-18 fw-400"
                                    href={item.path}
                                    aria-label={item.title}
                                >
                                    {item.title}
                                    <Icons.ArrowLong2 />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default BlogSidebar;