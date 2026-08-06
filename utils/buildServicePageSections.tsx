import Icons from '@/components/Icons';
import { ourCompanydata } from '@/data/sections/ourCompanyData';
import { ImageTextData } from '@/data/sections/imageTextData';
import { NewServiceType } from '@/types/newService';
import { SectionProps } from '@/types/sectionProps';
import WhyChooseUsImage from '@/public/img/why-choose-us/1.jpg';
import ServiceDetailImage from '@/public/img/service/sd-1.jpg';

const processStepIcons = [
    <Icons.Discover key="discover" />,
    <Icons.Analyze key="analyze" />,
    <Icons.Strategy key="strategy" />,
    <Icons.Design key="design" />,
    <Icons.Refine key="refine" />,
    <Icons.Launch key="launch" />,
];

export function buildServicePageSections(service: NewServiceType) {
    const { content, seo, sub_category } = service;

    const servicesData: SectionProps = {
        ...ImageTextData,
        wrapperCls: 'mt-100',
        container: 'container',
        subheading: 'What We Offer',
        heading: 'Our Services',
        text: `Horizon Line provides end-to-end support for ${sub_category.toLowerCase()}, from initial consultation through approval and ongoing compliance.`,
        textList: (content?.our_services || []).map((item) => ({ text: item })),
        button: {
            label: 'Book a Free Consultation',
            href: '/contact-us',
            type: 'primary',
        },
        image: {
            src: ServiceDetailImage.src,
            width: 1000,
            height: 962,
            alt: seo.image_alt_tag || sub_category,
            loading: 'lazy',
        },
    };

    const benefitsData: SectionProps = {
        wrapperCls: 'mt-100 section-padding',
        container: 'container',
        subheading: 'Key Benefits',
        heading: `Why Choose ${sub_category}`,
        text: content?.intro_line,
        promotions: (content?.benefits || []).slice(0, 4).map((benefit, index) => ({
            icon: index % 2 === 0 ? <Icons.Winning /> : <Icons.Support />,
            title: benefit,
            text: '',
        })),
        counterData: [],
        image: {
            src: WhyChooseUsImage.src,
            width: 1000,
            height: 1469,
            loading: 'lazy',
            alt: seo.image_alt_tag || sub_category,
        },
        button: {
            label: 'Get Expert Advice',
            href: '/contact-us',
            type: 'primary',
        },
    };

    const processData: SectionProps = {
        wrapperCls: 'mt-100',
        container: 'container',
        subheading: 'How It Works',
        heading: 'Our Simple Step-by-Step Process',
        text: 'We handle everything from initial consultation to final handover — so you can focus on growing your business.',
        promotions: (content?.process_how_it_works || []).map((step, index) => ({
            icon: processStepIcons[index % processStepIcons.length],
            title: `Step ${index + 1}`,
            text: step,
        })),
    };

    const documentsData: SectionProps = {
        ...ImageTextData,
        wrapperCls: 'mt-100 service-page-image-text-reverse',
        container: 'container',
        subheading: 'Documents Required',
        heading: 'What You Need to Provide',
        text: 'Our team will walk you through every step. Here is the standard document checklist for your application:',
        textList: (content?.documents_required || []).map((doc) => ({ text: doc })),
        button: {
            label: 'Start Your Application',
            href: '/contact-us',
            type: 'primary',
        },
        image: {
            src: WhyChooseUsImage.src,
            width: 992,
            height: 717,
            alt: 'Documents checklist',
            loading: 'lazy',
        },
    };

    const trustData: SectionProps = {
        ...ourCompanydata,
        wrapperCls: 'mt-100',
        container: 'container',
        subheading: 'Why Trust Us',
        heading: 'Why Businesses Trust Horizon Line',
        text: content?.why_businesses_trust_horizon_line,
        textList: (content?.our_services || []).slice(0, 4).map((item) => ({ text: item })),
        button: {
            label: 'Contact Our Team',
            href: '/contact-us',
            type: 'primary',
        },
    };

    const faqItems = (content?.faqs || []).map((faq) => ({
        title: faq.question,
        text: faq.answer,
    }));

    return {
        servicesData,
        benefitsData,
        processData,
        documentsData,
        trustData,
        faqItems,
    };
}
