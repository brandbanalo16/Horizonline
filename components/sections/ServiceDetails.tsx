import "@/styles/blog.css";
import "@/styles/service-details.css";
import Icons from "../Icons";
import parse from 'html-react-parser';

import ServiceSidebar from "../ServiceSidebar";
import ServiceDetailsContent from "./ServiceDetailsContent";
import DrawerOpener from "../DrawerOpener";
import Accordion from "../Accordion";
import { ServiceAccordionData } from "@/data/serviceAccordionData";
import { ServiceProps } from "@/types/service";
import { NewServiceType } from "@/types/newService";
import Image from "next/image";

const ServiceDetails = ({
    container,
    data,
    newService,
}: {
    container: string;
    data?: ServiceProps;
    newService?: NewServiceType;
}) => {
    if (newService) {
        return (
            <div className="page-service-details mt-100 mb-100">
                <div className={container}>
                    <ServiceDetailsContent service={newService} />
                </div>
            </div>
        );
    }

    const {
        title,
        image,
        content,
        slug,
    } = data || {};

    return (
        <div className="page-service-details mt-100 mb-100">
            <div className={container}>
                <DrawerOpener
                    cls="open-sidebar svg-wrapper text text-20 fw-500 lg:!hidden"
                    data-drawer=".drawer-service-sidebar"
                >
                    <Icons.Filter />
                    Filter
                </DrawerOpener>
                <div className="grid grid-cols-12 lg:gap-1">
                    <div className="col-span-12 lg:col-span-5">
                        <ServiceSidebar slug={slug} />
                    </div>
                    <div className="col-span-12 lg:col-span-7">
                        <div className="service-details-content">
                            {image &&
                                <div className="details-media radius18" data-aos="fade-up">
                                    <Image
                                        src={image}
                                        width={1000}
                                        height={596}
                                        loading="lazy"
                                        alt="image"
                                    />
                                </div>
                            }

                            {title &&
                                <h2 className="heading text-50" data-aos="fade-up">
                                    {title}
                                </h2>
                            }

                            {content && <>{parse(content)}</>}

                            <Accordion
                                cls="service-faq"
                                data={ServiceAccordionData}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
