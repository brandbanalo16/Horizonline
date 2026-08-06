import Link from "next/link";
import Icons from "./Icons";
import SidebarPhoneImage from "@/public/img/service/secvice-contact.jpg";

import SidebarPhone from "./SidebarPhone";
import SidebarPdfDownload from "./SidebarPdfDownload";
import DrawerOpener from "./DrawerOpener";
import NewServicesData from "@/data/newServicesData.json";
import Services from "@/data/services.json";
import { NewServiceType } from "@/types/newService";

const ServiceSidebar = ({
    slug,
    category,
}: {
    slug?: string;
    category?: string;
}) => {
    const rawData = NewServicesData as any;
    const newServices: NewServiceType[] = Array.isArray(rawData)
        ? (rawData as NewServiceType[])
        : [
              ...((rawData.main_services || []) as NewServiceType[]),
              ...((rawData.sub_services || []) as NewServiceType[]),
          ];
    const relatedServices = category
        ? newServices.filter((item) => item.slug !== slug && item.category === category)
        : newServices.filter((item) => item.slug !== slug);

    const legacyServices = Services.filter((item) => item.slug !== slug);
    const legacySidebarServices = legacyServices.slice(0, 12);

    const sidebarServices = relatedServices.length > 0
        ? relatedServices.slice(0, 12)
        : [];

    return (
        <div className="sidebar-filter drawer-service-sidebar">
            <div className="drawer-headings lg:!hidden" data-aos="fade-up">
                <div className="heading text-24">Filter</div>
                <DrawerOpener
                    cls="svg-wrapper menu-close"
                    data-drawer=".drawer-service-sidebar"
                >
                    <Icons.CloseCircle />
                </DrawerOpener>
            </div>

            <aside className="service-sidebar">
                {sidebarServices.length > 0 ? (
                    <div className="sidebar-widget radius18" data-aos="fade-up">
                        <h2 className="sidebar-heading heading text-24">Related Services</h2>
                        <ul className="blog-categories list-unstyled">
                            {sidebarServices.map((item) => (
                                <li key={item.slug}>
                                    <Link
                                        className={`blog-category subheading subheading-bg text-18 fw-400${item.slug === slug ? ' active' : ''}`}
                                        href={`/services/${item.slug}`}
                                        aria-label={item.sub_category}
                                    >
                                        {item.sub_category}
                                        <Icons.ArrowLong2 />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : legacySidebarServices.length > 0 ? (
                    <div className="sidebar-widget radius18" data-aos="fade-up">
                        <h2 className="sidebar-heading heading text-24">Services List</h2>
                        <ul className="blog-categories list-unstyled">
                            {legacySidebarServices.map((item) => (
                                <li key={`legacy-${item.slug}`}>
                                    <Link
                                        className="blog-category subheading subheading-bg text-18 fw-400"
                                        href={`/services/${item.slug}`}
                                        aria-label={item.title}
                                    >
                                        {item.title}
                                        <Icons.ArrowLong2 />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null}

                <SidebarPhone
                    heading="Contact with us <br/> for any advice"
                    text="Need help? Talk to an expert"
                    phone="+12345.6789.333"
                    image={{
                        src: SidebarPhoneImage.src,
                        width: 1000,
                        height: 929,
                        loading: "lazy",
                        alt: "Contact support",
                    }}
                />

                <SidebarPdfDownload
                    heading="Download Our Brochures"
                    text="Business is a marketing discipline focused on growing visibility organ (non-paid) technic required."
                />
            </aside>
        </div>
    );
};

export default ServiceSidebar;
