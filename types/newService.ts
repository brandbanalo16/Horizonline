export interface NewServiceSeo {
    meta_title: string;
    meta_description: string;
    url_slug?: string;
    canonical_url: string;
    h1_tag?: string;
    focus_keyword?: string;
    keywords?: string[];
    focus_keyword_visible_mentions_on_page?: number;
    image_alt_tag?: string;
    internal_link?: { anchor_text: string; url: string };
    external_link?: { anchor_text: string; url: string; rel?: string };
    open_graph?: Record<string, string>;
    twitter_card?: Record<string, string>;
    schema_markup?: Record<string, unknown>;
    breadcrumb_schema?: Record<string, unknown>;
}

export interface IconBlock {
    title: string;
    text: string;
}

export interface MissionVisionAward {
    title: string;
    text: string;
}

export interface TestimonialItem {
    name: string;
    role: string;
    rating: number;
    quote: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface ContactStat {
    number: string;
    label: string;
    text: string;
}

export interface SliderCard {
    title: string;
    slug: string;
    description: string;
}

export interface ProcessStep {
    step: string;
    title: string;
    description: string;
}

export interface StructureCard {
    title: string;
}

// ─── Section Interfaces ─────────────────────────────────────────────────────

export interface OurCompanySection {
    eyebrow: string;
    heading: string;
    subtext: string;
    icon_blocks: IconBlock[];
    cta_button: string;
}

export interface OurServicesSlider {
    eyebrow: string;
    heading: string;
    top_cta_button: string;
    cards: SliderCard[];
}

export interface WhatWeOfferSection {
    eyebrow: string;
    heading: string;
    subtext: string;
    checklist: string[];
    cta_button: string;
}

export interface WhyChooseUsSection {
    eyebrow: string;
    heading: string;
    subtext: string;
    cta_button: string;
    badge: string;
    mission_vision_awards: MissionVisionAward[];
}

export interface BusinessStructuresSection {
    eyebrow: string;
    heading: string;
    cards: StructureCard[];
}

export interface IndustriesSection {
    eyebrow: string;
    heading: string;
    cards: StructureCard[];
}

export interface HowItWorksSection {
    eyebrow: string;
    heading: string;
    subtext: string;
    steps: ProcessStep[];
}

export interface DocumentsRequiredSection {
    eyebrow: string;
    heading: string;
    subtext: string;
    checklist: string[];
    cta_button: string;
}

export interface WhyTrustUsSection {
    eyebrow: string;
    heading: string;
    badge: string;
    content: string;
    checklist: string[];
    cta_button: string;
}

export interface TestimonialsSection {
    eyebrow: string;
    heading: string;
    items: TestimonialItem[];
    closing_line?: string;
}

export interface FaqSection {
    eyebrow: string;
    heading: string;
    subtext: string;
    cta_button: string;
    items: FaqItem[];
}

export interface ContactSection {
    eyebrow: string;
    heading: string;
    subtext: string;
    stats: ContactStat[];
    form: {
        heading: string;
        subtext: string;
        fields: string[];
        cta_button: string;
    };
}

export interface FinalCtaBanner {
    eyebrow: string;
    heading: string;
    subtext: string;
    cta_button: string;
}

export interface HeroSection {
    page_title: string;
    breadcrumb: string;
}

// ─── Main Service Type (category-level pages) ────────────────────────────────

export interface NewServiceType {
    id: number;
    slug: string;
    main_service_group?: string;
    category: string;
    sub_category: string;
    seo: NewServiceSeo;
    hero?: HeroSection;
    content?: {
        h1_tag?: string;
        intro_line?: string;
        overview?: string;
        our_services?: string[];
        business_structures_we_support?: string[];
        industries_we_serve?: string[];
        benefits?: string[];
        process_how_it_works?: string[];
        documents_required?: string[];
        why_businesses_trust_horizon_line?: string;
        client_testimonials?: { name: string; quote: string }[];
        faqs?: FaqItem[];
        seo_supporting_lines?: string[];
        html_content?: string;
        final_cta?: string;
    };
    // Category-page sections
    our_company_section?: OurCompanySection;
    our_services_slider?: OurServicesSlider;
    what_we_offer_section?: WhatWeOfferSection;
    why_choose_us_section?: WhyChooseUsSection;
    testimonials_section?: TestimonialsSection;
    faq_section?: FaqSection;
    contact_section?: ContactSection;
    final_cta_banner?: FinalCtaBanner;
    // Sub-service sections
    business_structures_section?: BusinessStructuresSection;
    industries_section?: IndustriesSection;
    how_it_works_section?: HowItWorksSection;
    documents_required_section?: DocumentsRequiredSection;
    why_trust_us_section?: WhyTrustUsSection;
}

// ─── Legacy Type ─────────────────────────────────────────────────────────────

export interface ServiceSeoLink {
    anchor_text: string;
    url: string;
    rel?: string;
}

export interface ServiceContent {
    h1_tag: string;
    intro_line: string;
    overview: string;
    our_services?: string[];
    business_structures_we_support?: string[];
    industries_we_serve?: string[];
    benefits?: string[];
    process_how_it_works?: string[];
    documents_required?: string[];
    why_businesses_trust_horizon_line?: string;
    client_testimonials?: { name: string; quote: string }[];
    faqs?: FaqItem[];
    seo_supporting_lines?: string[];
    html_content?: string;
    final_cta?: string;
}
