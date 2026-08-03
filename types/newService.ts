export interface ServiceFaq {
    question: string;
    answer: string;
}

export interface ServiceTestimonial {
    name: string;
    quote: string;
}

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
    client_testimonials?: ServiceTestimonial[];
    faqs?: ServiceFaq[];
    seo_supporting_lines?: string[];
    final_cta?: string;
}

export interface NewServiceType {
    id: number;
    main_service_group: string;
    category: string;
    sub_category: string;
    slug: string;
    seo: {
        meta_title: string;
        meta_description: string;
        canonical_url: string;
        image_alt_tag?: string;
        internal_link?: ServiceSeoLink;
        external_link?: ServiceSeoLink;
        schema_markup?: Record<string, unknown>;
        keywords?: string[];
        open_graph?: Record<string, string>;
        twitter_card?: Record<string, string>;
    };
    content: ServiceContent;
}
