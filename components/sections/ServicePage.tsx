'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@/styles/service-page.css';
import '@/styles/testimonial.css';

import { NewServiceType } from '@/types/newService';
import { ServiceProps } from '@/types/service';

import Subheading from '@/components/Subheading';
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import Icons from '@/components/Icons';
import Accordion from '@/components/Accordion';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import SecondaryButton from '@/components/buttons/SecondaryButton';
import CardTestimonial from '@/components/CardTestimonial';

import Faq from '@/components/sections/Faq';
import ContactSection from '@/components/sections/Contact';

import { TestimonialSliderData } from '@/data/sections/testimonialSliderData';
import { Contact2Data } from '@/data/sections/contact2Data';
import { FaqData } from '@/data/sections/faqData';

import BackgroundImage from '@/public/img/faq/question.png';
import {
    getServiceTestimonials,
    getServiceTestimonialClosingLine,
} from '@/utils/getServiceTestimonials';

const SERVICE_ICONS = [
    <Icons.Consulting key="c" />,
    <Icons.Plan key="p" />,
    <Icons.Finance key="f" />,
    <Icons.Investment key="i" />,
    <Icons.Risk key="r" />,
    <Icons.Development key="d" />,
];

// ─── Full-width CTA Strip (reference style) ──────────────────────────────────

const CtaStrip = ({
    heading,
    subtext,
    buttonLabel = 'Request a Callback',
    buttonHref = '/contact-us',
}: {
    heading: string;
    subtext?: string;
    buttonLabel?: string;
    buttonHref?: string;
}) => (
    <section className="sp-cta-strip" aria-label="Call to action">
        <div className="container sp-cta-strip-inner">
            <div className="sp-cta-strip-text">
                <h2 className="sp-cta-strip-heading">{heading}</h2>
                {subtext && <p>{subtext}</p>}
            </div>
            <SecondaryButton label={buttonLabel} href={buttonHref} ariaLabel={buttonLabel} />
        </div>
    </section>
);

// ─── Intro Section ───────────────────────────────────────────────────────────

const IntroSection = ({
    eyebrow,
    heading,
    lead,
    detail,
    highlights,
    ctaButton,
    image,
    serviceName,
}: {
    eyebrow: string;
    heading: string;
    lead: string;
    detail?: string;
    highlights?: string[];
    ctaButton?: string;
    image?: { src: string; width?: number; height?: number; alt?: string };
    serviceName: string;
}) => (
    <section className="sp-intro section-padding" aria-labelledby="sp-intro-heading">
        <div className="container">
            <div className="sp-intro-grid">
                <div className="sp-intro-content">
                    <Subheading title={eyebrow} cls="text-20" aos="fade-up" />
                    <h2 id="sp-intro-heading" className="heading text-50" data-aos="fade-up" data-aos-delay="50">
                        {heading}
                    </h2>
                    <p className="sp-intro-lead text text-18" data-aos="fade-up" data-aos-delay="70">
                        {lead}
                    </p>
                    {detail && (
                        <p className="sp-intro-detail text text-18" data-aos="fade-up" data-aos-delay="85">
                            {detail}
                        </p>
                    )}

                    {highlights && highlights.length > 0 && (
                        <ul className="sp-intro-highlights" data-aos="fade-up" data-aos-delay="95">
                            {highlights.map((item, i) => (
                                <li key={i}>
                                    <Icons.Check />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {ctaButton && (
                        <div className="buttons sp-intro-cta" data-aos="fade-up" data-aos-delay="120">
                            <PrimaryButton label={ctaButton} href="/contact-us" ariaLabel={ctaButton} />
                        </div>
                    )}
                </div>

                {image && (
                    <div className="sp-intro-media" data-aos="fade-left">
                        <div className="sp-intro-media-frame">
                            <Image
                                src={image.src}
                                width={image.width || 968}
                                height={image.height || 862}
                                alt={image.alt || `${serviceName} services in UAE`}
                                loading="lazy"
                                className="sp-intro-img"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
);

// ─── Services Carousel ───────────────────────────────────────────────────────

const ServicesCarousel = ({
    eyebrow,
    heading,
    cards,
    ctaButton,
}: {
    eyebrow: string;
    heading: string;
    cards: { id: number; slug: string; title: string; description: string; image?: string }[];
    ctaButton?: string;
}) => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="sp-services-carousel section-padding" aria-labelledby="sp-services-heading">
            <div className="container">
                <div className="sp-section-top">
                    <div>
                        <Subheading title={eyebrow} cls="text-20" aos="fade-up" />
                        <h2 id="sp-services-heading" className="heading text-50" data-aos="fade-up" data-aos-delay="50">
                            {heading}
                        </h2>
                    </div>
                    <div className="sp-carousel-nav">
                        <button
                            type="button"
                            className="sp-carousel-btn sp-carousel-prev"
                            aria-label="Previous services"
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <Icons.ChevronLeft />
                        </button>
                        <button
                            type="button"
                            className="sp-carousel-btn sp-carousel-next"
                            aria-label="Next services"
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <Icons.ChevronRight />
                        </button>
                    </div>
                </div>

                <div className="sp-carousel-wrap" data-aos="fade-up">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 16 },
                            576: { slidesPerView: 1, spaceBetween: 16 },
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            992: { slidesPerView: 2, spaceBetween: 20 },
                            1200: { slidesPerView: 3, spaceBetween: 24 },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="sp-service-swiper"
                    >
                        {cards.map((card, idx) => (
                            <SwiperSlide key={card.id}>
                                <article className="sp-service-card">
                                    <span className="sp-service-card-icon">
                                        {SERVICE_ICONS[idx % SERVICE_ICONS.length]}
                                    </span>
                                    <h3 className="sp-service-card-title">{card.title}</h3>
                                    <p className="sp-service-card-desc">{card.description}</p>
                                    <Link href={`/services/${card.slug}`} className="sp-learn-more">
                                        Learn more <Icons.ArrowLong />
                                    </Link>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {ctaButton && (
                    <div className="sp-section-footer-cta" data-aos="fade-up">
                        <PrimaryButton label={ctaButton} href="/services" ariaLabel={ctaButton} />
                    </div>
                )}
            </div>
        </section>
    );
};

// ─── What We Offer — 3×2 card grid ───────────────────────────────────────────

const OfferCardsSection = ({
    eyebrow,
    heading,
    subtext,
    checklist,
    ctaButton,
    serviceName,
}: {
    eyebrow: string;
    heading: string;
    subtext: string;
    checklist: string[];
    ctaButton?: string;
    serviceName: string;
}) => {
    const topRow = checklist.slice(0, 3);
    const bottomRow = checklist.slice(3, 6);

    const renderCard = (item: string, i: number) => (
        <article key={i} className="sp-offer-card" data-aos="fade-up" data-aos-delay={`${i * 40}`}>
            <span className="sp-offer-card-icon">{SERVICE_ICONS[i % SERVICE_ICONS.length]}</span>
            <p className="sp-offer-card-text">{item}</p>
        </article>
    );

    return (
        <section className="sp-offer section-padding" aria-labelledby="sp-offer-heading">
            <div className="container">
                <div className="sp-offer-head">
                    <Subheading title={eyebrow} cls="text-20" aos="fade-up" />
                    <h2 id="sp-offer-heading" className="heading text-50" data-aos="fade-up" data-aos-delay="50">
                        {heading}
                    </h2>
                    <Text text={subtext} cls="text-18 sp-offer-intro" aos="fade-up" aosDelay="80" />
                </div>

                <div className="sp-offer-cards">
                    <div className="sp-offer-cards-row sp-offer-cards-row--top">
                        {topRow.map((item, i) => renderCard(item, i))}
                    </div>
                    {bottomRow.length > 0 && (
                        <div
                            className={`sp-offer-cards-row sp-offer-cards-row--bottom sp-offer-cards-row--count-${bottomRow.length}`}
                        >
                            {bottomRow.map((item, i) => renderCard(item, i + 3))}
                        </div>
                    )}
                </div>

                {ctaButton && (
                    <div className="buttons sp-offer-cta" data-aos="fade-up">
                        <PrimaryButton
                            label={ctaButton}
                            href="/contact-us"
                            ariaLabel={`${ctaButton} for ${serviceName}`}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

// ─── Two-column Category List ────────────────────────────────────────────────

const CategoryListSection = ({
    eyebrow,
    heading,
    items,
    variant,
}: {
    eyebrow: string;
    heading: string;
    items: { title: string }[];
    variant: 'structures' | 'industries';
}) => (
    <div className={`sp-category-block sp-category-block--${variant}`}>
        <Subheading title={eyebrow} cls="text-20" aos="fade-up" />
        <h2 className="heading text-36 sp-category-heading" data-aos="fade-up" data-aos-delay="50">
            {heading}
        </h2>
        <ul className="sp-category-list">
            {items.map((item, i) => (
                <li key={i} data-aos="fade-up" data-aos-delay={`${i * 20}`}>
                    <Icons.CaretRight />
                    <span>{item.title}</span>
                </li>
            ))}
        </ul>
    </div>
);

// ─── Process Steps (reference 01/02/03 cards) ────────────────────────────────

const ProcessStepsSection = ({
    eyebrow,
    heading,
    subtext,
    steps,
    compactTop = false,
    sectionId = 'sp-process-heading',
}: {
    eyebrow: string;
    heading: string;
    subtext?: string;
    steps: { step: string; title: string; description: string }[];
    compactTop?: boolean;
    sectionId?: string;
}) => (
    <section
        className={`sp-process section-padding${compactTop ? ' sp-process--compact-top' : ''}${steps.length > 3 ? ' sp-process--multi' : ''}`}
        aria-labelledby={sectionId}
    >
        <div className="container">
            <div className="sp-process-head">
                <Subheading title={eyebrow} cls="text-20" aos="fade-up" />
                <h2 id={sectionId} className="heading text-50" data-aos="fade-up" data-aos-delay="50">
                    {heading}
                </h2>
                {subtext && <Text text={subtext} cls="text-18 sp-process-intro" aos="fade-up" aosDelay="80" />}
            </div>

            <ol className="sp-process-grid">
                {steps.map((s, i) => (
                    <li key={i} className="sp-process-card" data-aos="fade-up" data-aos-delay={`${i * 60}`}>
                        <span className="sp-process-num" aria-hidden="true">
                            {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="sp-process-label">{s.step}</p>
                        <h3 className="sp-process-title">{s.description}</h3>
                    </li>
                ))}
            </ol>
        </div>
    </section>
);

// ─── Documents Section ───────────────────────────────────────────────────────

const DocumentsSection = ({
    eyebrow,
    heading,
    subtext,
    checklist,
    ctaButton,
}: {
    eyebrow: string;
    heading: string;
    subtext?: string;
    checklist: string[];
    ctaButton?: string;
}) => (
    <section className="sp-documents section-padding" aria-labelledby="sp-docs-heading">
        <div className="container">
            <div className="sp-documents-wrap">
                <div className="sp-documents-head">
                    <Subheading title={eyebrow} cls="text-20" aos="fade-up" />
                    <h2 id="sp-docs-heading" className="heading text-50" data-aos="fade-up" data-aos-delay="50">
                        {heading}
                    </h2>
                    {subtext && <Text text={subtext} cls="text-18" aos="fade-up" aosDelay="80" />}
                </div>
                <ul className="sp-documents-grid">
                    {checklist.map((item, i) => (
                        <li key={i} data-aos="fade-up" data-aos-delay={`${i * 30}`}>
                            <Icons.Check />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                {ctaButton && (
                    <div className="buttons sp-documents-cta" data-aos="fade-up">
                        <PrimaryButton label={ctaButton} href="/contact-us" ariaLabel={ctaButton} />
                    </div>
                )}
            </div>
        </div>
    </section>
);

// ─── Why Trust Us ────────────────────────────────────────────────────────────

const TrustSection = ({
    eyebrow,
    heading,
    badge,
    content,
    checklist,
    ctaButton,
    serviceName,
}: {
    eyebrow: string;
    heading: string;
    badge?: string;
    content: string;
    checklist: string[];
    ctaButton?: string;
    serviceName: string;
}) => (
    <section className="sp-trust section-padding" aria-labelledby="sp-trust-heading">
        <div className="container">
            <div className="sp-trust-panel">
                <div className="sp-trust-sidebar">
                    <Subheading title={eyebrow} cls="text-20" aos="fade-up" />
                    <h2 id="sp-trust-heading" className="heading text-30" data-aos="fade-up" data-aos-delay="50">
                        {heading}
                    </h2>
                    {badge && (
                        <div className="sp-trust-badge" data-aos="fade-up" data-aos-delay="70">
                            <Icons.Awards />
                            <span>{badge}</span>
                        </div>
                    )}
                    <div className="sp-trust-stats" data-aos="fade-up" data-aos-delay="85">
                        <div className="sp-trust-stat">
                            <strong>500+</strong>
                            <span>Clients served</span>
                        </div>
                        <div className="sp-trust-stat">
                            <strong>98%</strong>
                            <span>Satisfaction rate</span>
                        </div>
                    </div>
                </div>

                <div className="sp-trust-main" data-aos="fade-up" data-aos-delay="90">
                    <p className="sp-trust-lead">{content}</p>
                    {checklist.length > 0 && (
                        <div className="sp-trust-checks">
                            <h3 className="sp-trust-checks-title">
                                Why choose Horizon Line for {serviceName}
                            </h3>
                            <ul className="sp-trust-list">
                                {checklist.map((item, i) => (
                                    <li key={i}>
                                        <span className="sp-trust-check-icon"><Icons.Check /></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {ctaButton && (
                        <div className="buttons sp-trust-cta">
                            <PrimaryButton label={ctaButton} href="/contact-us" ariaLabel={ctaButton} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>
);

// ─── Testimonials (unchanged) ────────────────────────────────────────────────

const TestimonialsBlock = ({
    eyebrow,
    heading,
    items,
    closingLine,
}: {
    eyebrow: string;
    heading: string;
    items: { name: string; role: string; rating: number; quote: string }[];
    closingLine?: string;
}) => {
    const swiperRef = React.useRef<any>(null);
    const cards = items.map((item, idx) => ({
        id: idx + 1,
        name: item.name,
        role: item.role,
        review: item.quote,
        rating: item.rating,
        image: `/img/testimonial/google-user.png`,
    }));

    return (
        <testi-slider className="sp-testi-section section-padding">
            <div className={TestimonialSliderData.container}>
                <div className="section-headings headings-width text-center">
                    {eyebrow && <Subheading title={eyebrow} cls="text-20" aos="fade-up" />}
                    {heading && <Heading title={heading} cls="text-50" aos="fade-up" aosDelay="50" />}
                </div>
                <div className="section-content" data-aos="fade-up">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        spaceBetween={20}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 20 },
                            840: { slidesPerView: 2, spaceBetween: 20 },
                            1280: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="swiper"
                    >
                        {cards.map((item, i) => (
                            <SwiperSlide key={i}>
                                <CardTestimonial data={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {closingLine && (
                    <p className="sp-closing-line text text-18" data-aos="fade-up" data-aos-delay="100">
                        {closingLine}
                    </p>
                )}
            </div>
        </testi-slider>
    );
};

// ─── FAQ (unchanged) ─────────────────────────────────────────────────────────

const FaqBlock = ({
    eyebrow,
    heading,
    subtext,
    ctaButton,
    items,
}: {
    eyebrow: string;
    heading: string;
    subtext?: string;
    ctaButton?: string;
    items: { question: string; answer: string }[];
}) => {
    const accordionData = items.map((item) => ({
        title: item.question,
        text: item.answer,
    }));

    return (
        <div className="faq sp-faq-section section-padding">
            <div className={FaqData.container}>
                <div className="grid grid-cols-2 lg:gap-1 faq-row">
                    <div className="lg:col-span-1 col-span-2">
                        <div className="section-headings">
                            {eyebrow && <Subheading title={eyebrow} cls="text-20" aos="fade-up" />}
                            {heading && <Heading title={heading} cls="text-50" aos="fade-up" aosDelay="50" />}
                            {subtext && <Text text={subtext} cls="text-18" aos="fade-up" aosDelay="80" />}
                            {ctaButton && (
                                <div className="buttons" data-aos="fade-up" data-aos-delay="100">
                                    <PrimaryButton label={ctaButton} href="/contact-us" ariaLabel={ctaButton} />
                                </div>
                            )}
                            <div className="image-absolute" data-aos="zoom-in">
                                <Image
                                    src={BackgroundImage.src}
                                    width={104}
                                    height={180}
                                    loading="lazy"
                                    alt="FAQ illustration"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-1 col-span-2">
                        <Accordion data={accordionData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

// ─── Main Component ──────────────────────────────────────────────────────────

const ServicePage = ({
    service,
}: {
    service: NewServiceType;
    relatedServices?: ServiceProps[];
}) => {
    const { sub_category, category } = service;
    const serviceLabel = sub_category || category || 'Services';
    const serviceLabelLower = serviceLabel.toLowerCase();
    const isMainCategory = !!service.our_services_slider;

    const ourCompany = service.our_company_section;
    const slider = service.our_services_slider;
    const whatWeOffer = service.what_we_offer_section;
    const bizStructures = service.business_structures_section;
    const industries = service.industries_section;
    const howItWorks = service.how_it_works_section;
    const documents = service.documents_required_section;
    const whyTrust = service.why_trust_us_section;
    const testimonials = service.testimonials_section;
    const faq = service.faq_section;
    const contact = service.contact_section;
    const legacyContent = service.content;

    const sliderCards =
        slider?.cards?.map((card, idx) => ({
            id: idx + 1,
            slug: card.slug,
            title: card.title,
            description: card.description,
            image: card.image || `/img/service/s${(idx % 7) + 1}.jpg`,
        })) || [];

    const introImage = ourCompany?.image || (service as { image?: { src: string } }).image;
    const formattedImage =
        typeof introImage === 'string'
            ? { src: introImage, alt: `${serviceLabel} services in UAE` }
            : introImage
              ? { ...introImage, alt: introImage.alt || `${serviceLabel} services in UAE` }
              : undefined;

    const ctaHeading =
        whatWeOffer?.cta_button ||
        documents?.cta_button ||
        `Get expert ${serviceLabel} support in the UAE`;

    const testimonialItems = getServiceTestimonials(service);
    const testimonialClosingLine = getServiceTestimonialClosingLine(service);

    const introHeading =
        legacyContent?.h1_tag ||
        ourCompany?.heading ||
        `Professional ${serviceLabel} Services in the UAE`;
    const introLead =
        legacyContent?.intro_line ||
        ourCompany?.subtext ||
        `Expert ${serviceLabel} support tailored for entrepreneurs, investors, and businesses across the UAE.`;
    const introDetail =
        legacyContent?.overview ||
        `Horizon Line Management Consultancy LLC provides end-to-end ${serviceLabelLower} with transparent pricing, hands-on government liaison, and dedicated consultant support from consultation through approval and ongoing compliance.`;
    const introHighlights = [
        `Specialist ${serviceLabelLower} consultants in Dubai, Abu Dhabi & Sharjah`,
        'Full documentation and government processing support',
        'Dedicated relationship manager for every engagement',
    ];
    const offerHeading = `${serviceLabel} Services We Offer`;
    const offerSubtext =
        whatWeOffer?.subtext ||
        legacyContent?.overview ||
        `Horizon Line provides end-to-end support for ${serviceLabelLower}, from initial consultation through approval and ongoing compliance.`;

    return (
        <div className="service-page-content">
            {/* ── Intro ── */}
            {ourCompany && (
                <IntroSection
                    eyebrow={ourCompany.eyebrow || category}
                    heading={introHeading}
                    lead={introLead}
                    detail={introDetail}
                    highlights={introHighlights}
                    ctaButton={ourCompany.cta_button}
                    image={formattedImage}
                    serviceName={serviceLabel}
                />
            )}

            {/* ── Getting Started preview (first 3 steps when more exist) ── */}
            {howItWorks && (howItWorks.steps?.length ?? 0) > 3 && (
                <ProcessStepsSection
                    eyebrow="Getting Started"
                    heading={`How to begin your ${serviceLabel} journey`}
                    subtext={howItWorks.subtext}
                    steps={howItWorks.steps!.slice(0, 3)}
                    sectionId="sp-getting-started-heading"
                />
            )}

            {/* ── CTA Strip ── */}
            <CtaStrip
                heading={`Need help with ${serviceLabel} in the UAE?`}
                subtext="Speak to a Horizon Line consultant — free initial consultation, transparent pricing, and full documentation support."
                buttonLabel={whatWeOffer?.cta_button || 'Request a Callback'}
            />

            {/* ── Services Carousel (main category) ── */}
            {isMainCategory && sliderCards.length > 0 && (
                <ServicesCarousel
                    eyebrow={slider?.eyebrow || 'Our Services'}
                    heading={slider?.heading || `Explore ${category} Services`}
                    cards={sliderCards}
                    ctaButton={slider?.top_cta_button}
                />
            )}

            {/* ── What We Offer ── */}
            {whatWeOffer ? (
                <OfferCardsSection
                    eyebrow={whatWeOffer.eyebrow}
                    heading={offerHeading}
                    subtext={offerSubtext}
                    checklist={whatWeOffer.checklist || []}
                    ctaButton={whatWeOffer.cta_button}
                    serviceName={serviceLabel}
                />
            ) : legacyContent?.benefits?.length ? (
                <OfferCardsSection
                    eyebrow="What We Offer"
                    heading={offerHeading}
                    subtext={offerSubtext}
                    checklist={legacyContent.benefits}
                    serviceName={serviceLabel}
                />
            ) : null}

            {/* ── Business Structures & Industries (two-column lists) ── */}
            {((bizStructures?.cards?.length ?? 0) > 0 || (industries?.cards?.length ?? 0) > 0) && (
                <section className="sp-categories section-padding" aria-label="Business structures and industries">
                    <div className="container">
                        <div className="sp-categories-grid">
                            {bizStructures && (bizStructures.cards?.length ?? 0) > 0 && (
                                <CategoryListSection
                                    eyebrow={bizStructures.eyebrow}
                                    heading={bizStructures.heading}
                                    items={bizStructures.cards}
                                    variant="structures"
                                />
                            )}
                            {industries && (industries.cards?.length ?? 0) > 0 && (
                                <CategoryListSection
                                    eyebrow={industries.eyebrow}
                                    heading={industries.heading}
                                    items={industries.cards}
                                    variant="industries"
                                />
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* ── CTA Strip ── */}
            {(bizStructures || industries) && (
                <CtaStrip
                    heading={ctaHeading}
                    subtext={`Horizon Line handles ${serviceLabelLower} across mainland Dubai, free zones, and offshore jurisdictions.`}
                    buttonLabel="Book a Free Consultation"
                />
            )}

            {/* ── Full Process ── */}
            {howItWorks && (howItWorks.steps?.length ?? 0) > 0 && (
                <ProcessStepsSection
                    eyebrow={howItWorks.eyebrow}
                    heading={howItWorks.heading}
                    subtext={(howItWorks.steps?.length ?? 0) > 3 ? undefined : howItWorks.subtext}
                    steps={howItWorks.steps!}
                    compactTop={(howItWorks.steps?.length ?? 0) > 3}
                    sectionId="sp-full-process-heading"
                />
            )}

            {/* ── Documents ── */}
            {documents && (documents.checklist?.length ?? 0) > 0 && (
                <DocumentsSection
                    eyebrow={documents.eyebrow}
                    heading={documents.heading}
                    subtext={documents.subtext}
                    checklist={documents.checklist}
                    ctaButton={documents.cta_button}
                />
            )}

            {/* ── Why Trust Us ── */}
            {whyTrust && (
                <TrustSection
                    eyebrow={whyTrust.eyebrow}
                    heading={whyTrust.heading}
                    badge={whyTrust.badge}
                    content={whyTrust.content}
                    checklist={whyTrust.checklist || []}
                    ctaButton={whyTrust.cta_button}
                    serviceName={serviceLabel}
                />
            )}

            {/* ── Testimonials (5–6 on every service page) ── */}
            <TestimonialsBlock
                eyebrow={testimonials?.eyebrow || '+ Testimonials +'}
                heading={testimonials?.heading || 'See What Our Customers Have to Say About Us'}
                items={testimonialItems}
                closingLine={testimonialClosingLine}
            />

            {/* ── SEO Supporting Lines ── */}
            {(legacyContent?.seo_supporting_lines?.length ?? 0) > 0 && (
                <section className="service-page-supporting-lines">
                    <div className="container">
                        {legacyContent!.seo_supporting_lines!.map((line, i) => (
                            <p key={i} className="supporting-line text text-18" data-aos="fade-up">
                                {line}
                            </p>
                        ))}
                    </div>
                </section>
            )}

            {/* ── FAQ (original) ── */}
            {faq && (faq.items?.length ?? 0) > 0 ? (
                <FaqBlock
                    eyebrow={faq.eyebrow}
                    heading={faq.heading}
                    subtext={faq.subtext}
                    ctaButton={faq.cta_button}
                    items={faq.items}
                />
            ) : (
                <Faq
                    data={{
                        ...FaqData,
                        wrapperCls: 'sp-faq-section section-padding',
                    }}
                />
            )}

            {/* ── Contact Form (original) ── */}
            {contact ? (
                <ContactSection
                    data={{
                        ...Contact2Data,
                        subheading: contact.eyebrow,
                        heading: contact.heading,
                        text: contact.subtext,
                        promotions:
                            contact.stats?.map((stat, idx) => ({
                                icon: idx === 0 ? <Icons.ThumbsUp /> : <Icons.Support />,
                                title: `${stat.number} ${stat.label}`,
                                text: stat.text,
                            })) || Contact2Data.promotions,
                        block: contact.form
                            ? {
                                  heading: contact.form.heading,
                                  text: contact.form.subtext,
                                  button: {
                                      label: contact.form.cta_button,
                                      href: '/contact-us',
                                      type: 'primary' as const,
                                  },
                              }
                            : Contact2Data.block,
                    }}
                />
            ) : (
                <ContactSection data={Contact2Data} />
            )}
        </div>
    );
};

export default ServicePage;
