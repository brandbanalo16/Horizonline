import '@/styles/service-page.css';
import Link from 'next/link';
import Image from 'next/image';

import { NewServiceType } from '@/types/newService';
import { buildServicePageSections } from '@/utils/buildServicePageSections';

import Subheading from '@/components/Subheading';
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import Icons from '@/components/Icons';
import Accordion from '@/components/Accordion';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import SecondaryButton from '@/components/buttons/SecondaryButton';

import ImageText from '@/components/sections/ImageText';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import WorkingProcess from '@/components/sections/WorkingProcess';
import OurCompany from '@/components/sections/OurCompany';

import BackgroundFaqImage from '@/public/img/faq/question.png';

const ServicePage = ({ service }: { service: NewServiceType }) => {
    const { content, seo, sub_category, main_service_group, category } = service;
    const sections = buildServicePageSections(service);

    const industriesPreview = (content.industries_we_serve || []).slice(0, 3).join(' • ');

    return (
        <>
            {/* Intro */}
            <section className="service-page-intro section-padding">
                <div className="container">
                    <div className="grid lg:grid-cols-2 lg:gap-1 intro-grid">
                        <div className="col-span-1">
                            <div className="intro-content">
                                <div className="intro-badges" data-aos="fade-up">
                                    <span className="intro-badge">{main_service_group}</span>
                                    <span className="intro-badge">{category}</span>
                                </div>

                                <Subheading title={sub_category} cls="text-20" aos="fade-up" />

                                {content.h1_tag && (
                                    <Heading title={content.h1_tag} cls="text-50" aos="fade-up" aosDelay="50" />
                                )}

                                {content.intro_line && (
                                    <Text text={content.intro_line} cls="text-18" aos="fade-up" aosDelay="80" />
                                )}

                                {content.overview && (
                                    <Text text={content.overview} cls="text-18" aos="fade-up" aosDelay="100" />
                                )}

                                <div className="intro-actions" data-aos="fade-up" data-aos-delay="120">
                                    <PrimaryButton
                                        label="Book a Free Consultation"
                                        href="/contact-us"
                                        ariaLabel="Book a Free Consultation"
                                    />
                                    {seo.internal_link && (
                                        <SecondaryButton
                                            label={seo.internal_link.anchor_text}
                                            href={seo.internal_link.url}
                                            ariaLabel={seo.internal_link.anchor_text}
                                        />
                                    )}
                                    {seo.external_link && (
                                        <Link
                                            href={seo.external_link.url}
                                            rel={seo.external_link.rel}
                                            target="_blank"
                                            className="text text-16 text-link"
                                        >
                                            {seo.external_link.anchor_text}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 intro-info">
                            <div className="service-page-info-cards" data-aos="fade-up" data-aos-delay="80">
                                <div className="service-page-info-card">
                                    <span className="info-label">Service Group</span>
                                    <span className="info-value">{main_service_group}</span>
                                </div>
                                <div className="service-page-info-card">
                                    <span className="info-label">Category</span>
                                    <span className="info-value">{category}</span>
                                </div>
                                <div className="service-page-info-card">
                                    <span className="info-label">Industries We Serve</span>
                                    <span className="info-value">
                                        {industriesPreview || 'Multiple sectors across the UAE'}
                                    </span>
                                </div>
                                <div className="service-page-info-card">
                                    <span className="info-label">Support Model</span>
                                    <span className="info-value">
                                        Application handling, documentation, and follow-up support
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ImageText data={sections.servicesData} />

            <WhyChooseUs data={sections.benefitsData} />

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
            {(content.client_testimonials || []).length > 0 && (
                <section className="service-page-testimonials section-padding mt-100">
                    <div className="container">
                        <div className="section-headings text-center" style={{ margin: '0 auto 3rem' }}>
                            <Subheading title="Client Testimonials" cls="text-20" aos="fade-up" />
                            <Heading title="What Our Clients Say" cls="text-50" aos="fade-up" aosDelay="50" />
                        </div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1">
                            {(content.client_testimonials || []).map((testimonial, index) => (
                                <div key={`testimonial-${index}`} data-aos="fade-up" data-aos-delay={`${index * 80}`}>
                                    <div className="testimonial-card">
                                        <span className="quote-icon">
                                            <Icons.Quote2 />
                                        </span>
                                        <p className="quote-text">&ldquo;{testimonial.quote}&rdquo;</p>
                                        <p className="quote-author">— {testimonial.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

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

            {/* FAQ */}
            {sections.faqItems.length > 0 && (
                <div className="faq service-page-faq mt-100 section-padding">
                    <div className="container">
                        <div className="grid grid-cols-2 lg:gap-1 faq-row">
                            <div className="lg:col-span-1 col-span-2">
                                <div className="section-headings">
                                    <Subheading title="FAQs" cls="text-20" aos="fade-up" />
                                    <Heading
                                        title="Frequently Asked Questions"
                                        cls="text-50"
                                        aos="fade-up"
                                        aosDelay="50"
                                    />
                                    <Text
                                        text={`Have more questions about ${sub_category}? Our consultants are ready to help.`}
                                        cls="text-18"
                                        aos="fade-up"
                                        aosDelay="80"
                                    />
                                    <div className="buttons" data-aos="fade-up" data-aos-delay="100">
                                        <PrimaryButton label="Contact Us" href="/contact-us" ariaLabel="Contact Us" />
                                    </div>
                                    <div className="image-absolute" data-aos="zoom-in">
                                        <Image
                                            src={BackgroundFaqImage.src}
                                            width={104}
                                            height={180}
                                            loading="lazy"
                                            alt="FAQ"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-1 col-span-2">
                                <Accordion cls="service-faq" data={sections.faqItems} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ServicePage;
