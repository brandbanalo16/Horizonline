import Link from 'next/link';
import Image from 'next/image';
import Icons from '@/components/Icons';
import Accordion from '@/components/Accordion';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import { NewServiceType } from '@/types/newService';
import ServiceDetailImage from '@/public/img/service/sd-1.jpg';

interface ServiceDetailsContentProps {
    service: NewServiceType;
}

const ServiceListBlock = ({
    title,
    description,
    items,
    imageSide = 'left',
}: {
    title: string;
    description?: string;
    items: string[];
    imageSide?: 'left' | 'right';
}) => {
    if (!items.length) return null;

    const imageCol = (
        <div className="md:col-span-1 col-span-2">
            <div className="choose-us-img radius18">
                <Image
                    src={ServiceDetailImage.src}
                    width={1000}
                    height={962}
                    loading="lazy"
                    alt={title}
                />
            </div>
        </div>
    );

    const contentCol = (
        <div className="md:col-span-1 col-span-2">
            <div className="choose-us-desc">
                <h2 className="heading text-36">{title}</h2>
                {description && <p className="text text-18">{description}</p>}
                <ul className="text-lists list-unstyled">
                    {items.map((item, index) => (
                        <li className="text-item" data-aos="fade-up" key={`${title}-${index}`}>
                            <Icons.Check />
                            <div className="text text-18 fw-600">{item}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return (
        <div className="service-choose-us" data-aos="fade-up">
            <div className="grid grid-cols-2 lg:gap-1 service-row">
                {imageSide === 'left' ? (
                    <>
                        {imageCol}
                        {contentCol}
                    </>
                ) : (
                    <>
                        {contentCol}
                        {imageCol}
                    </>
                )}
            </div>
        </div>
    );
};

const ServiceDetailsContent = ({ service }: ServiceDetailsContentProps) => {
    const { content, seo, sub_category, main_service_group, category } = service;

    const faqItems = (content?.faqs || []).map((faq) => ({
        title: faq.question,
        text: faq.answer,
    }));

    return (
        <div className="service-details-content">
            <p className="text text-18 fw-500" data-aos="fade-up">
                {main_service_group} — {category}
            </p>

            {content?.h1_tag && (
                <h2 className="heading text-50" data-aos="fade-up">
                    {content.h1_tag}
                </h2>
            )}

            {content?.intro_line && (
                <p className="text text-18" data-aos="fade-up">
                    {content.intro_line}
                </p>
            )}

            {content?.overview && (
                <p className="text text-18" data-aos="fade-up">
                    {content.overview}
                </p>
            )}

            {(seo.internal_link || seo.external_link) && (
                <div className="buttons" data-aos="fade-up">
                    {seo.internal_link && (
                        <Link href={seo.internal_link.url} className="button button--secondary">
                            {seo.internal_link.anchor_text}
                        </Link>
                    )}
                    {seo.external_link && (
                        <a
                            href={seo.external_link.url}
                            rel={seo.external_link.rel}
                            target="_blank"
                            className="text text-16"
                        >
                            {seo.external_link.anchor_text}
                        </a>
                    )}
                </div>
            )}

            <ServiceListBlock
                title="Our Services"
                description={`Horizon Line provides end-to-end support for ${sub_category.toLowerCase()}.`}
                items={content?.our_services || []}
                imageSide="left"
            />

            <ServiceListBlock
                title="Key Benefits"
                description={content?.intro_line}
                items={content?.benefits || []}
                imageSide="right"
            />

            {(content?.business_structures_we_support || []).length > 0 && (
                <>
                    <h2 className="heading text-36" data-aos="fade-up">
                        Business Structures We Support
                    </h2>
                    <ul className="text-lists list-unstyled">
                        {(content!.business_structures_we_support || []).map((item, index) => (
                            <li className="text-item" data-aos="fade-up" key={`structure-${index}`}>
                                <Icons.Check />
                                <div className="text text-18 fw-600">{item}</div>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {(content?.industries_we_serve || []).length > 0 && (
                <>
                    <h2 className="heading text-36" data-aos="fade-up">
                        Industries We Serve
                    </h2>
                    <ul className="text-lists list-unstyled">
                        {(content!.industries_we_serve || []).map((item, index) => (
                            <li className="text-item" data-aos="fade-up" key={`industry-${index}`}>
                                <Icons.CaretRight />
                                <div className="text text-18 fw-600">{item}</div>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {(content?.process_how_it_works || []).length > 0 && (
                <>
                    <h2 className="heading text-36" data-aos="fade-up">
                        How It Works
                    </h2>
                    <p className="text text-18" data-aos="fade-up">
                        We handle everything from initial consultation to final handover — so you can focus on your business.
                    </p>
                    <ul className="text-lists list-unstyled">
                        {(content!.process_how_it_works || []).map((step, index) => (
                            <li className="text-item" data-aos="fade-up" key={`process-${index}`}>
                                <Icons.Check />
                                <div className="text text-18 fw-600">
                                    Step {index + 1}: {step}
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {(content?.documents_required || []).length > 0 && (
                <>
                    <h2 className="heading text-36" data-aos="fade-up">
                        Documents Required
                    </h2>
                    <p className="text text-18" data-aos="fade-up">
                        Our team will walk you through every step. Here is the standard document checklist:
                    </p>
                    <ul className="text-lists list-unstyled">
                        {(content!.documents_required || []).map((doc, index) => (
                            <li className="text-item" data-aos="fade-up" key={`doc-${index}`}>
                                <Icons.Check />
                                <div className="text text-18 fw-600">{doc}</div>
                            </li>
                        ))}
                    </ul>
                    <div className="buttons" data-aos="fade-up">
                        <PrimaryButton
                            label="Start Your Application"
                            href="/contact-us"
                            ariaLabel="Start Your Application"
                        />
                    </div>
                </>
            )}

            {content?.why_businesses_trust_horizon_line && (
                <>
                    <h2 className="heading text-36" data-aos="fade-up">
                        Why Businesses Trust Horizon Line
                    </h2>
                    <p className="text text-18" data-aos="fade-up">
                        {content.why_businesses_trust_horizon_line}
                    </p>
                </>
            )}

            {(content?.client_testimonials || []).length > 0 && (
                <>
                    <h2 className="heading text-36" data-aos="fade-up">
                        What Our Clients Say
                    </h2>
                    {(content!.client_testimonials || []).map((testimonial, index) => (
                        <div key={`testimonial-${index}`} data-aos="fade-up">
                            <p className="text text-18">&ldquo;{testimonial.quote}&rdquo;</p>
                            <p className="text text-16 fw-600">— {testimonial.name}</p>
                        </div>
                    ))}
                </>
            )}

            {(content?.seo_supporting_lines || []).length > 0 &&
                (content!.seo_supporting_lines || []).map((line, index) => (
                    <p className="text text-16" data-aos="fade-up" key={`seo-line-${index}`}>
                        {line}
                    </p>
                ))}

            {faqItems.length > 0 && (
                <Accordion cls="service-faq" data={faqItems} />
            )}
        </div>
    );
};

export default ServiceDetailsContent;
