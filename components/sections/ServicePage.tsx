'use client';

import '@/styles/service-page.css';
import Link from 'next/link';
import Image from 'next/image';

import { NewServiceType } from '@/types/newService';
import { ServiceProps } from '@/types/service';
import { buildServicePageSections } from '@/utils/buildServicePageSections';

import Subheading from '@/components/Subheading';
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import Icons from '@/components/Icons';
import Accordion from '@/components/Accordion';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import SecondaryButton from '@/components/buttons/SecondaryButton';

import ImageText from '@/components/sections/ImageText';
import ImageText2 from '@/components/sections/ImageText2';
import WhyChooseUsGrid from '@/components/sections/WhyChooseUsGrid';
import WorkingProcess from '@/components/sections/WorkingProcess';
import OurCompany from '@/components/sections/OurCompany';
import ServicesSlider from '@/components/sections/ServicesSlider';
import TestimonialSlider from '@/components/sections/TestimonialSlider';
import Faq from '@/components/sections/Faq';
import ContactSection from '@/components/sections/Contact';

import { ImageText2Data } from '@/data/sections/imageText2Data';
import { ServicesSliderHeadingsData } from '@/data/sections/servicesSliderHeadings';
import { WhyChooseUsGridData } from '@/data/sections/whyChooseUsGridData';
import { TestimonialSliderData } from '@/data/sections/testimonialSliderData';
import { Contact2Data } from '@/data/sections/contact2Data';
import { FaqData } from '@/data/sections/faqData';

const ServicePage = ({ service, relatedServices }: { service: NewServiceType; relatedServices: ServiceProps[] }) => {
    const { content, seo, sub_category, main_service_group, category } = service;
    const sections = buildServicePageSections(service);

    const ourServices = content.our_services || [];
    const businessStructures = content.business_structures_we_support || [];
    const industriesServed = content.industries_we_serve || [];
    const industriesPreview = industriesServed.slice(0, 3).join(' • ');

    const serviceContactData = {
        wrapperCls: 'section-padding mt-100',
        container: 'container',
        subheading: 'Contact Us',
        heading: `Start your ${sub_category} journey`,
        text: content.final_cta || `Ready to get started with ${sub_category}? Fill the form below and our team will contact you.`,
        promotions: [
            {
                icon: <Icons.ThumbsUp />,
                title: 'Trusted Experts',
                text: 'A dedicated consultant will manage your service end-to-end.',
            },
            {
                icon: <Icons.Support />,
                title: 'Fast Response',
                text: 'Our team replies quickly to every inquiry.',
            },
        ],
        block: {
            heading: 'Get In Touch',
            text: 'Complete the form and a Horizon Line consultant will reach out promptly.',
        },
    };

    return (
        <>
            <ImageText2 data={ImageText2Data} />

            <ServicesSlider data={ServicesSliderHeadingsData} pagination={true} />

            <ImageText data={sections.servicesData} />

            <WhyChooseUsGrid data={WhyChooseUsGridData} />

            {/* Business Structures & Industries */}
            {((content.business_structures_we_support || []).length > 0 ||
                (content.industries_we_serve || []).length > 0) && (
                <section className="service-page-features section-padding mt-100">
                    <div className="container">
                        {(content.business_structures_we_support || []).length > 0 && (
                            <>
                                <div className="section-headings text-center" style={{ marginBottom: '2.5rem' }}>
                                    <Subheading title="Business Structures" cls="text-20" aos="fade-up" />
                                    <Heading
                                        title="Business Structures We Support"
                                        cls="text-50"
                                        aos="fade-up"
                                        aosDelay="50"
                                    />
                                </div>
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1" style={{ marginBottom: '4rem' }}>
                                    {(content.business_structures_we_support || []).map((item, index) => (
                                        <div key={`structure-${index}`} data-aos="fade-up" data-aos-delay={`${index * 50}`}>
                                            <div className="feature-card">
                                                <span className="feature-icon">
                                                    <Icons.Check />
                                                </span>
                                                <p className="feature-title">{item}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {(content.industries_we_serve || []).length > 0 && (
                            <>
                                <div className="section-headings text-center" style={{ marginBottom: '2.5rem' }}>
                                    <Subheading title="Who We Serve" cls="text-20" aos="fade-up" />
                                    <Heading title="Industries We Serve" cls="text-50" aos="fade-up" aosDelay="50" />
                                </div>
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1">
                                    {(content.industries_we_serve || []).map((item, index) => (
                                        <div key={`industry-${index}`} data-aos="fade-up" data-aos-delay={`${index * 50}`}>
                                            <div className="feature-card">
                                                <span className="feature-icon">
                                                    <Icons.CaretRight />
                                                </span>
                                                <p className="feature-title">{item}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </section>
            )}

            {(content.process_how_it_works || []).length > 0 && (
                <WorkingProcess data={sections.processData} />
            )}

            {(content.documents_required || []).length > 0 && (
                <ImageText data={sections.documentsData} />
            )}

            {content.why_businesses_trust_horizon_line && (
                <OurCompany data={sections.trustData} />
            )}

            {/* Testimonials */}
            <TestimonialSlider data={TestimonialSliderData} pagination={true} />

            {(content.seo_supporting_lines || []).length > 0 && (
                <section className="service-page-supporting-lines">
                    <div className="container">
                        {(content.seo_supporting_lines || []).map((line, index) => (
                            <p className="supporting-line text text-18" data-aos="fade-up" key={`seo-${index}`}>
                                {line}
                            </p>
                        ))}
                    </div>
                </section>
            )}

            <Faq data={FaqData} />

            <ContactSection data={Contact2Data} />
        </>
    );
};

export default ServicePage;
