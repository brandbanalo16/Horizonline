'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import '@/styles/service-page-legacy.css';

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

import ImageText from '@/components/sections/ImageText';
import ImageText2 from '@/components/sections/ImageText2';
import WhyChooseUsGrid from '@/components/sections/WhyChooseUsGrid';
import WorkingProcess from '@/components/sections/WorkingProcess';
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

import BackgroundImage from '@/public/img/faq/question.png';

// ΓöÇΓöÇΓöÇ Reusable Section Wrappers ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

const SectionWrapper = ({
    children,
    cls = '',
    bg = '',
}: {
    children: React.ReactNode;
    cls?: string;
    bg?: string;
}) => (
    <section className={`sp-section section-padding ${cls}`} style={bg ? { background: bg } : {}}>
        <div className="container">{children}</div>
    </section>
);

const SectionHeader = ({
    eyebrow,
    heading,
    subtext,
    align = 'left',
    aosDelay = '0',
}: {
    eyebrow?: string;
    heading?: string;
    subtext?: string;
    align?: 'left' | 'center';
    aosDelay?: string;
}) => (
    <div className={`section-headings sp-section-header${align === 'center' ? ' text-center' : ''}`}>
        {eyebrow && <Subheading title={eyebrow} cls="text-20" aos="fade-up" />}
        {heading && <Heading title={heading} cls="text-50" aos="fade-up" aosDelay="50" />}
        {subtext && (
            <Text text={subtext} cls="text-18" aos="fade-up" aosDelay={aosDelay || '80'} />
        )}
    </div>
);

// ΓöÇΓöÇΓöÇ Checklist Component ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

const Checklist = ({ items }: { items: string[] }) => (
    <ul className="sp-checklist">
        {items.map((item, i) => (
            <li key={i} className="sp-checklist-item" data-aos="fade-up" data-aos-delay={`${i * 40}`}>
                <span className="sp-checklist-icon">
                    <Icons.Check />
                </span>
                <span className="sp-checklist-text">{item}</span>
            </li>
        ))}
    </ul>
);

// ΓöÇΓöÇΓöÇ Cards Grid ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

const CardsGrid = ({
    cards,
    icon,
}: {
    cards: { title: string }[];
    icon?: React.ReactNode;
}) => (
    <div className="sp-cards-grid">
        {cards.map((card, i) => (
            <div
                key={i}
                className="sp-card"
                data-aos="fade-up"
                data-aos-delay={`${i * 40}`}
            >
                <span className="sp-card-icon">
                    {icon || <Icons.Check />}
                </span>
                <p className="sp-card-title">{card.title}</p>
            </div>
        ))}
    </div>
);

// ΓöÇΓöÇΓöÇ How It Works Steps ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

const HowItWorksSteps = ({
    steps,
}: {
    steps: { step: string; title: string; description: string }[];
}) => (
    <div className="sp-steps">
        {steps.map((s, i) => (
            <div
                key={i}
                className="sp-step"
                data-aos="fade-up"
                data-aos-delay={`${i * 60}`}
            >
                <div className="sp-step-number">{String(i + 1).padStart(2, '0')}</div>
                <div className="sp-step-content">
                    <p className="sp-step-label">{s.step}</p>
                    <h3 className="sp-step-title">{s.description}</h3>
                </div>
            </div>
        ))}
    </div>
);

// ΓöÇΓöÇΓöÇ Testimonials Override ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

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
        <testi-slider className={TestimonialSliderData.wrapperCls}>
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
                    <p
                        className="sp-closing-line text text-18"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        {closingLine}
                    </p>
                )}
            </div>
        </testi-slider>
    );
};

// ΓöÇΓöÇΓöÇ FAQ Override ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

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
        <div className={`faq ${FaqData.wrapperCls || ''}`}>
            <div className={FaqData.container}>
                <div className="grid grid-cols-2 lg:gap-1 faq-row">
                    <div className="lg:col-span-1 col-span-2">
                        <div className="section-headings">
                            {eyebrow && (
                                <Subheading title={eyebrow} cls="text-20" aos="fade-up" />
                            )}
                            {heading && (
                                <Heading title={heading} cls="text-50" aos="fade-up" aosDelay="50" />
                            )}
                            {subtext && (
                                <Text text={subtext} cls="text-18" aos="fade-up" aosDelay="80" />
                            )}
                            {ctaButton && (
                                <div className="buttons" data-aos="fade-up" data-aos-delay="100">
                                    <PrimaryButton
                                        label={ctaButton}
                                        href="/contact-us"
                                        ariaLabel={ctaButton}
                                    />
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

// ΓöÇΓöÇΓöÇ Why Trust Us Block ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

const WhyTrustUsBlock = ({
    eyebrow,
    heading,
    badge,
    content,
    checklist,
    ctaButton,
}: {
    eyebrow: string;
    heading: string;
    badge?: string;
    content: string;
    checklist: string[];
    ctaButton?: string;
}) => (
    <SectionWrapper cls="sp-why-trust" bg="rgba(44, 54, 80,0.03)">
        <div className="sp-why-trust-inner">
            <SectionHeader eyebrow={eyebrow} heading={heading} />
            {badge && (
                <div className="sp-trust-badge" data-aos="fade-up" data-aos-delay="60">
                    <span className="sp-badge-icon">
                        <Icons.Awards />
                    </span>
                    <span>{badge}</span>
                </div>
            )}
            <p className="sp-trust-content text text-18" data-aos="fade-up" data-aos-delay="80">
                {content}
            </p>
            {checklist.length > 0 && <Checklist items={checklist} />}
            {ctaButton && (
                <div className="buttons sp-trust-cta" data-aos="fade-up" data-aos-delay="120">
                    <PrimaryButton label={ctaButton} href="/contact-us" ariaLabel={ctaButton} />
                </div>
            )}
        </div>
    </SectionWrapper>
);

// ΓöÇΓöÇΓöÇ Our Company Section ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

const OurCompanyBlock = ({
    eyebrow,
    heading,
    subtext,
    iconBlocks,
    ctaButton,
    image,
}: {
    eyebrow: string;
    heading: string;
    subtext: string;
    iconBlocks: { title: string; text: string }[];
    ctaButton?: string;
    image?: any;
}) => {
    let formattedImage = image;
    if (typeof image === 'string') {
        formattedImage = {
            src: image,
            width: 992,
            height: 863,
            alt: heading || 'Our Company Image',
            loading: 'lazy'
        };
    }

    const data = {
        ...ImageText2Data,
        wrapperCls: 'section-padding mt-100',
        subheading: eyebrow,
        heading,
        text: subtext,
        textList: iconBlocks.map((block, idx) => ({
            icon: idx === 0 ? <Icons.Ambition /> : <Icons.Purpose />,
            title: block.title,
            text: block.text,
        })),
        button: ctaButton
            ? { ...ImageText2Data.button, label: ctaButton }
            : ImageText2Data.button,
        imageList: formattedImage
            ? [formattedImage]
            : (ImageText2Data.imageList ? [ImageText2Data.imageList[0]] : undefined),
    };
    return <ImageText2 data={data} />;
};

// ΓöÇΓöÇΓöÇ What We Offer Section ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

const WhatWeOfferBlock = ({
    eyebrow,
    heading,
    subtext,
    checklist,
    ctaButton,
    servicesData,
}: {
    eyebrow: string;
    heading: string;
    subtext: string;
    checklist: string[];
    ctaButton?: string;
    servicesData: any;
}) => {
    const data = {
        ...servicesData,
        subheading: eyebrow,
        heading,
        text: subtext,
        textList: checklist.map((item) => ({ text: item })),
        button: ctaButton
            ? { ...(servicesData.button || {}), label: ctaButton, href: '/contact-us', type: 'primary' as const }
            : servicesData.button,
    };
    return <ImageText data={data} />;
};

// ΓöÇΓöÇΓöÇ Why Choose Us Section ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

const WhyChooseUsBlock = ({
    eyebrow,
    heading,
    subtext,
    badge,
    missionVisionAwards,
    ctaButton,
}: {
    eyebrow: string;
    heading: string;
    subtext: string;
    badge?: string;
    missionVisionAwards: { title: string; text: string }[];
    ctaButton?: string;
}) => {
    const data = {
        ...WhyChooseUsGridData,
        subheading: eyebrow,
        heading,
        text: subtext,
        rotatingLogo: badge
            ? { ...WhyChooseUsGridData.rotatingLogo, text: badge.split(' ')[0] }
            : WhyChooseUsGridData.rotatingLogo,
        promotions: missionVisionAwards.map((mva, idx) => ({
            icon: idx === 0 ? <Icons.Mission /> : idx === 1 ? <Icons.Vision /> : <Icons.Awards />,
            title: mva.title,
            text: mva.text,
        })),
        button: ctaButton
            ? { ...(WhyChooseUsGridData.button || {}), label: ctaButton }
            : WhyChooseUsGridData.button,
    };
    return <WhyChooseUsGrid data={data} />;
};

// ΓöÇΓöÇΓöÇ Main ServicePage Component ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ

const ServicePageLegacy = ({
    service,
    relatedServices,
}: {
    service: NewServiceType;
    relatedServices: ServiceProps[];
}) => {
    const { sub_category } = service;

    // Determine if this is a main-category page or sub-service page
    const isMainCategory = !!service.our_services_slider;

    // ΓöÇΓöÇ Our Company ΓöÇΓöÇ
    const ourCompany = service.our_company_section;

    // ΓöÇΓöÇ Services Slider (main category) ΓöÇΓöÇ
    const slider = service.our_services_slider;
    const sliderCards = slider?.cards?.map((card, idx) => ({
        id: idx + 1,
        slug: card.slug,
        title: card.title,
        description: card.description,
        image: card.image || `/img/service/s${(idx % 7) + 1}.jpg`,
    })) || [];

    // ΓöÇΓöÇ What We Offer ΓöÇΓöÇ
    const whatWeOffer = service.what_we_offer_section;

    // ΓöÇΓöÇ Why Choose Us ΓöÇΓöÇ
    const whyChooseUs = service.why_choose_us_section;

    // ΓöÇΓöÇ Business Structures ΓöÇΓöÇ
    const bizStructures = service.business_structures_section;

    // ΓöÇΓöÇ Industries ΓöÇΓöÇ
    const industries = service.industries_section;

    // ΓöÇΓöÇ How It Works ΓöÇΓöÇ
    const howItWorks = service.how_it_works_section;

    // ΓöÇΓöÇ Documents Required ΓöÇΓöÇ
    const documents = service.documents_required_section;

    // ΓöÇΓöÇ Why Trust Us ΓöÇΓöÇ
    const whyTrust = service.why_trust_us_section;

    // ΓöÇΓöÇ Testimonials ΓöÇΓöÇ
    const testimonials = service.testimonials_section;

    // ΓöÇΓöÇ FAQ ΓöÇΓöÇ
    const faq = service.faq_section;

    // ΓöÇΓöÇ Contact ΓöÇΓöÇ
    const contact = service.contact_section;

    // ΓöÇΓöÇ Legacy content fallback ΓöÇΓöÇ
    const legacyContent = service.content;

    // Build ImageText data for What We Offer
    const servicesData = {
        wrapperCls: 'section-padding mt-100',
        container: 'container',
        subheading: 'What We Offer',
        heading: sub_category,
        text: legacyContent?.overview || '',
        textList: (legacyContent?.benefits || []).map((b: string) => ({ text: b })),
        image: { src: '/img/service/sd-1.jpg', width: 800, height: 770, alt: sub_category },
        button: { label: 'Get Started', href: '/contact-us', type: 'primary' as const },
    };

    return (
        <>
            {/* ΓöÇΓöÇ Our Company ΓöÇΓöÇ */}
            {ourCompany && (
                <OurCompanyBlock
                    eyebrow={ourCompany.eyebrow}
                    heading={ourCompany.heading}
                    subtext={ourCompany.subtext}
                    iconBlocks={ourCompany.icon_blocks || []}
                    ctaButton={ourCompany.cta_button}
                    image={ourCompany.image || (service as any).image}
                />
            )}

            {/* ΓöÇΓöÇ Our Services Slider (main category pages) ΓöÇΓöÇ */}
            {isMainCategory && sliderCards.length > 0 && (
                <ServicesSlider
                    data={{
                        ...ServicesSliderHeadingsData,
                        subheading: slider?.eyebrow || ServicesSliderHeadingsData.subheading,
                        heading: slider?.heading || ServicesSliderHeadingsData.heading,
                        button: slider?.top_cta_button
                            ? { label: slider.top_cta_button, href: '/services', type: 'secondary' as const }
                            : ServicesSliderHeadingsData.button,
                    }}
                    pagination={true}
                    services={sliderCards}
                    maxItems={sliderCards.length}
                />
            )}

            {/* ΓöÇΓöÇ What We Offer ΓöÇΓöÇ */}
            {whatWeOffer ? (
                <WhatWeOfferBlock
                    eyebrow={whatWeOffer.eyebrow}
                    heading={whatWeOffer.heading}
                    subtext={whatWeOffer.subtext}
                    checklist={whatWeOffer.checklist || []}
                    ctaButton={whatWeOffer.cta_button}
                    servicesData={servicesData}
                />
            ) : legacyContent?.benefits?.length ? (
                <WhatWeOfferBlock
                    eyebrow="+ What We Offer +"
                    heading="Our Services"
                    subtext={legacyContent.overview || ''}
                    checklist={legacyContent.benefits}
                    servicesData={servicesData}
                />
            ) : null}

            {/* ΓöÇΓöÇ Why Choose Us ΓöÇΓöÇ */}
            {whyChooseUs && (
                <WhyChooseUsBlock
                    eyebrow={whyChooseUs.eyebrow}
                    heading={whyChooseUs.heading}
                    subtext={whyChooseUs.subtext}
                    badge={whyChooseUs.badge}
                    missionVisionAwards={whyChooseUs.mission_vision_awards || []}
                    ctaButton={whyChooseUs.cta_button}
                />
            )}

            {/* ΓöÇΓöÇ Business Structures ΓöÇΓöÇ */}
            {bizStructures && (bizStructures.cards || []).length > 0 && (
                <SectionWrapper cls="sp-structures" bg="rgba(242,242,242,0.35)">
                    <SectionHeader
                        eyebrow={bizStructures.eyebrow}
                        heading={bizStructures.heading}
                        align="center"
                    />
                    <CardsGrid cards={bizStructures.cards} />
                </SectionWrapper>
            )}

            {/* ΓöÇΓöÇ Industries We Serve ΓöÇΓöÇ */}
            {industries && (industries.cards || []).length > 0 && (
                <SectionWrapper cls="sp-industries">
                    <SectionHeader
                        eyebrow={industries.eyebrow}
                        heading={industries.heading}
                        align="center"
                    />
                    <CardsGrid cards={industries.cards} icon={<Icons.CaretRight />} />
                </SectionWrapper>
            )}

            {/* ΓöÇΓöÇ How It Works ΓöÇΓöÇ */}
            {howItWorks && (howItWorks.steps || []).length > 0 && (
                <SectionWrapper cls="sp-how-it-works" bg="rgba(44, 54, 80,0.03)">
                    <SectionHeader
                        eyebrow={howItWorks.eyebrow}
                        heading={howItWorks.heading}
                        subtext={howItWorks.subtext}
                        align="center"
                    />
                    <HowItWorksSteps steps={howItWorks.steps} />
                </SectionWrapper>
            )}

            {/* ΓöÇΓöÇ Documents Required ΓöÇΓöÇ */}
            {documents && (documents.checklist || []).length > 0 && (
                <SectionWrapper cls="sp-documents">
                    <div className="sp-documents-inner">
                        <SectionHeader
                            eyebrow={documents.eyebrow}
                            heading={documents.heading}
                            subtext={documents.subtext}
                        />
                        <Checklist items={documents.checklist} />
                        {documents.cta_button && (
                            <div className="buttons sp-docs-cta" data-aos="fade-up">
                                <PrimaryButton
                                    label={documents.cta_button}
                                    href="/contact-us"
                                    ariaLabel={documents.cta_button}
                                />
                            </div>
                        )}
                    </div>
                </SectionWrapper>
            )}

            {/* ΓöÇΓöÇ Why Trust Us ΓöÇΓöÇ */}
            {whyTrust && (
                <WhyTrustUsBlock
                    eyebrow={whyTrust.eyebrow}
                    heading={whyTrust.heading}
                    badge={whyTrust.badge}
                    content={whyTrust.content}
                    checklist={whyTrust.checklist || []}
                    ctaButton={whyTrust.cta_button}
                />
            )}

            {/* ΓöÇΓöÇ Testimonials ΓöÇΓöÇ */}
            {testimonials && testimonials.items?.length > 0 ? (
                <TestimonialsBlock
                    eyebrow={testimonials.eyebrow}
                    heading={testimonials.heading}
                    items={testimonials.items}
                    closingLine={testimonials.closing_line}
                />
            ) : (
                <TestimonialSlider data={TestimonialSliderData} pagination={true} />
            )}

            {/* ΓöÇΓöÇ Legacy SEO Supporting Lines ΓöÇΓöÇ */}
            {(legacyContent?.seo_supporting_lines || []).length > 0 && (
                <section className="service-page-supporting-lines">
                    <div className="container">
                        {(legacyContent!.seo_supporting_lines || []).map((line, i) => (
                            <p
                                key={i}
                                className="supporting-line text text-18"
                                data-aos="fade-up"
                            >
                                {line}
                            </p>
                        ))}
                    </div>
                </section>
            )}

            {/* ΓöÇΓöÇ FAQ ΓöÇΓöÇ */}
            {faq && faq.items?.length > 0 ? (
                <FaqBlock
                    eyebrow={faq.eyebrow}
                    heading={faq.heading}
                    subtext={faq.subtext}
                    ctaButton={faq.cta_button}
                    items={faq.items}
                />
            ) : (
                <Faq data={FaqData} />
            )}

            {/* ΓöÇΓöÇ Contact ΓöÇΓöÇ */}
            {contact ? (
                <ContactSection
                    data={{
                        ...Contact2Data,
                        subheading: contact.eyebrow,
                        heading: contact.heading,
                        text: contact.subtext,
                        promotions: contact.stats?.map((stat, idx) => ({
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
        </>
    );
};

export default ServicePageLegacy;
