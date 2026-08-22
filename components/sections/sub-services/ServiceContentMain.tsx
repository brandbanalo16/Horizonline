import React from 'react';
import { NewServiceType } from '@/types/newService';

export const ServiceContentMain = ({ service }: { service: NewServiceType }) => {

    const h1 = service.seo?.h1_tag || service.content?.h1_tag || service.sub_category || 'Service';
    const overview = service.content?.overview || service.seo?.meta_description || '';
    const introLine = service.content?.intro_line || '';
    const benefits = service.content?.our_services || service.what_we_offer_section?.checklist || [];
    const docs = service.documents_required_section?.checklist || [];
    const steps = service.how_it_works_section?.steps || [];
    const faqs = service.faq_section?.items || [];
    const category = service.category || service.main_service_group || 'UAE Business Services';
    const group = service.main_service_group || 'UAE Authorities';

    // SEO fields from subservice.json
    const EmiratesCoverage = (service as any).Emirates_coverage;
    const seoSummary = (service as any).seo_summary;
    const closing = (service as any).closing;

    return (
        <div className="svc-center-col" style={{ width: '100%', minWidth: 0 }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                /* ---- Main Content Card ---- */
                .svc-card {
                    background: #ffffff;
                    border-radius: 10px;
                    border: 1px solid #e4e8ee;
                    box-shadow: 0 1px 10px rgba(44,54,80,0.06);
                    padding: 48px 52px;
                    width: 100%;
                    box-sizing: border-box;
                }
                @media (max-width: 991px) { .svc-card { padding: 30px 24px; } }
                @media (max-width: 575px) { .svc-card { padding: 22px 16px; } }

                /* ---- Category Tag ---- */
                .svc-tag {
                    display: inline-block;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: #266464;
                    background: rgba(38,100,100,0.08);
                    border: 1px solid rgba(38,100,100,0.2);
                    border-radius: 4px;
                    padding: 4px 12px;
                    margin-bottom: 20px;
                }

                /* ---- Heading ---- */
                .svc-h1 {
                    font-size: clamp(32px, 4vw, 48px);
                    font-weight: 800;
                    color: #2c3650;
                    line-height: 1.15;
                    margin: 0 0 12px 0;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                    hyphens: none;
                    letter-spacing: -0.02em;
                }
                .svc-governed {
                    font-size: 14px;
                    color: #5d666f;
                    margin: 0 0 36px 0;
                    padding-left: 12px;
                    border-left: 3px solid #266464;
                }
                .svc-governed strong { color: #2c3650; font-weight: 700; }

                /* ---- Info Badges Row ---- */
                .svc-info-row {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 16px;
                    margin-bottom: 36px;
                    padding-bottom: 36px;
                    border-bottom: 1px solid #edf0f5;
                }
                @media (max-width: 575px) { .svc-info-row { grid-template-columns: 1fr; gap: 10px; } }
                .svc-info-badge {
                    padding: 16px 18px;
                    border-radius: 8px;
                    background: #f8f9fb;
                    border: 1px solid #e4e8ee;
                }
                .svc-info-badge-label {
                    font-size: 10px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: #5d666f;
                    margin-bottom: 5px;
                }
                .svc-info-badge-value {
                    font-size: 13.5px;
                    font-weight: 700;
                    color: #2c3650;
                }

                /* ---- Body text ---- */
                .svc-body-text {
                    font-size: 15px;
                    color: #5d666f;
                    line-height: 1.85;
                    margin: 0 0 16px 0;
                }

                /* ---- Section Headers ---- */
                .svc-section-divider {
                    height: 1px;
                    background: linear-gradient(90deg, rgba(228,232,238,0) 0%, #e4e8ee 50%, rgba(228,232,238,0) 100%);
                    margin: 50px 0;
                }
                .svc-section-head {
                    margin-bottom: 30px;
                    position: relative;
                    padding-left: 18px;
                }
                .svc-section-accent {
                    position: absolute;
                    left: 0;
                    top: 4px;
                    bottom: 4px;
                    width: 4px;
                    background: #266464;
                    border-radius: 4px;
                }
                .svc-section-h2 {
                    font-size: 28px;
                    font-weight: 800;
                    color: #2c3650;
                    margin: 0 0 6px 0;
                    letter-spacing: -0.01em;
                }
                .svc-section-sub {
                    font-size: 15px;
                    color: #5d666f;
                    margin: 0;
                }

                /* ---- Benefits Grid ---- */
                .svc-benefits-grid { 
                    display: grid; 
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
                    gap: 16px; 
                }
                .svc-benefit-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 16px;
                    background: #ffffff;
                    border: 1px solid #e4e8ee;
                    padding: 24px;
                    border-radius: 12px;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 16px rgba(44,54,80,0.04);
                }
                .svc-benefit-item:hover { 
                    border-color: #266464; 
                    box-shadow: 0 8px 24px rgba(38,100,100,0.1);
                    transform: translateY(-4px);
                }
                .svc-benefit-bullet {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    background: rgba(38,100,100,0.06);
                    color: #266464;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .svc-benefit-text {
                    font-size: 15px;
                    color: #5d666f;
                    font-weight: 400;
                    line-height: 1.6;
                }
                .svc-benefit-text strong {
                    color: #2c3650;
                    font-weight: 700;
                    font-size: 16px;
                }

                /* ---- Documents List ---- */
                .svc-doc-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 16px;
                }
                .svc-doc-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 16px;
                    font-size: 15px;
                    color: #5d666f;
                    line-height: 1.6;
                    padding: 24px;
                    background: #ffffff;
                    border: 1px solid #e4e8ee;
                    border-radius: 12px;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(44,54,80,0.03);
                }
                .svc-doc-item::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    background: #e4e8ee;
                    transition: background 0.3s ease;
                }
                .svc-doc-item:hover {
                    border-color: #266464;
                    box-shadow: 0 8px 24px rgba(44,54,80,0.08);
                    transform: translateY(-2px);
                }
                .svc-doc-item:hover::before {
                    background: #266464;
                }
                .svc-doc-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 8px;
                    background: #fcfdff;
                    border: 1px solid #e4e8ee;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #2c3650;
                    flex-shrink: 0;
                    transition: all 0.3s ease;
                }
                .svc-doc-item:hover .svc-doc-icon {
                    background: rgba(38,100,100,0.06);
                    border-color: rgba(38,100,100,0.2);
                    color: #266464;
                }
                .svc-doc-item strong {
                    color: #2c3650;
                    font-weight: 700;
                    font-size: 16px;
                    display: block;
                    margin-bottom: 6px;
                }

                /* ---- Process Steps ---- */
                .svc-steps { 
                    display: grid; 
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); 
                    gap: 20px; 
                }
                .svc-step {
                    display: flex;
                    flex-direction: column;
                    background: #fcfdff;
                    border: 1px solid #e4e8ee;
                    border-radius: 12px;
                    padding: 24px;
                    position: relative;
                    transition: all 0.3s ease;
                }
                .svc-step:hover {
                    background: #ffffff;
                    border-color: #266464;
                    box-shadow: 0 6px 20px rgba(44,54,80,0.06);
                    transform: translateY(-4px);
                }
                .svc-step-left {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-bottom: 16px;
                }
                .svc-step-num {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    background: rgba(38,100,100,0.1);
                    color: #266464;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    font-weight: 800;
                    flex-shrink: 0;
                }
                .svc-step-line {
                    display: none;
                }
                .svc-step-content {
                    flex: 1;
                }
                .svc-step-title {
                    font-size: 17px;
                    font-weight: 800;
                    color: #2c3650;
                    margin: 0 0 10px;
                }
                .svc-step-desc {
                    font-size: 14px;
                    color: #5d666f;
                    line-height: 1.6;
                    margin: 0;
                }

                /* ---- FAQs ---- */
                .svc-faq-list { display: flex; flex-direction: column; gap: 12px; }
                .svc-faq-item {
                    border: 1px solid #e4e8ee;
                    border-radius: 10px;
                    overflow: hidden;
                    background: #ffffff;
                }
                .svc-faq-q {
                    padding: 18px 24px;
                    font-size: 15px;
                    font-weight: 700;
                    color: #2c3650;
                    background: #f8f9fb;
                    border-bottom: 1px solid #e4e8ee;
                    line-height: 1.5;
                }
                .svc-faq-a {
                    padding: 20px 24px;
                    font-size: 15px;
                    color: #5d666f;
                    line-height: 1.8;
                }

                /* ---- SEO Block ---- */
                .svc-seo-block {
                    background: #2c3650;
                    padding: 36px 40px;
                    border-radius: 12px;
                    margin-top: 40px;
                    position: relative;
                    overflow: hidden;
                }
                .svc-seo-block::before {
                    content: '';
                    position: absolute;
                    top: 0; right: 0;
                    width: 150px; height: 150px;
                    background: rgba(38,100,100,0.15);
                    border-radius: 50%;
                    transform: translate(30%, -30%);
                }
                .svc-seo-text {
                    font-size: 15px;
                    line-height: 1.8;
                    color: #e4e8ee;
                    position: relative;
                    z-index: 1;
                }
                .svc-seo-text strong {
                    color: #ffffff;
                }
            `}} />

            <div className="svc-card">

                {/* Category Tag */}
                <div className="svc-tag">{category}</div>

                {/* Main H1 */}
                <h1 className="svc-h1" id="overview">{h1}</h1>

                {/* Governed Under */}
                <p className="svc-governed">
                    Part of <strong>{group}</strong>
                </p>

                {/* Info Row */}
                <div className="svc-info-row">
                    <div className="svc-info-badge">
                        <div className="svc-info-badge-label">Timeline</div>
                        <div className="svc-info-badge-value">Efficient Processing</div>
                    </div>
                    <div className="svc-info-badge">
                        <div className="svc-info-badge-label">Regulated By</div>
                        <div className="svc-info-badge-value">UAE Govt. Bodies</div>
                    </div>
                    <div className="svc-info-badge">
                        <div className="svc-info-badge-label">Mode</div>
                        <div className="svc-info-badge-value">In-Person / Online</div>
                    </div>
                </div>

                {/* Full Width Image */}
                <div className="svc-main-image" style={{ marginBottom: '36px', borderRadius: '12px', overflow: 'hidden' }}>
                    <img
                        src={`/img/service/Picflow%20Images%20Aug%208/${(
                            ((service as any).name || service.sub_category || '')
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, '-')
                        )}.webp`}
                        alt={h1}
                        style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                    />
                </div>

                {/* Overview Text */}
                {overview && <p className="svc-body-text">{overview}</p>}
                {introLine && introLine !== overview && <p className="svc-body-text">{introLine}</p>}

                {/* Key Benefits */}
                {benefits.length > 0 && (
                    <>
                        <div className="svc-section-divider" />
                        <div id="benefits">
                            <div className="svc-section-head">
                                <div className="svc-section-accent" />
                                <h2 className="svc-section-h2">Key Benefits</h2>
                                <p className="svc-section-sub">What you gain from this service</p>
                            </div>
                            <div className="svc-benefits-grid">
                                {benefits.map((b: string, i: number) => {
                                    const parts = b.split(':::');
                                    const point = parts[0];
                                    const explanation = parts[1];
                                    return (
                                        <div key={i} className="svc-benefit-item">
                                            <span className="svc-benefit-bullet">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                            </span>
                                            <span className="svc-benefit-text">
                                                {explanation ? (
                                                    <>
                                                        <strong>{point}</strong>: {explanation}
                                                    </>
                                                ) : (
                                                    point
                                                )}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                )}

                {/* Documents Required */}
                {docs.length > 0 && (
                    <>
                        <div className="svc-section-divider" />
                        <div id="documents">
                            <div className="svc-section-head">
                                <div className="svc-section-accent" />
                                <h2 className="svc-section-h2">Documents Required</h2>
                                <p className="svc-section-sub">Prepare the following before proceeding</p>
                            </div>
                            <ul className="svc-doc-list">
                                {docs.map((doc: string, i: number) => {
                                    const parts = doc.split(':::');
                                    const point = parts[0];
                                    const explanation = parts[1];
                                    return (
                                        <li key={i} className="svc-doc-item">
                                            <div className="svc-doc-icon">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                    <polyline points="14 2 14 8 20 8"></polyline>
                                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                                    <polyline points="10 9 9 9 8 9"></polyline>
                                                </svg>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                {explanation ? (
                                                    <>
                                                        <strong>{point}</strong>
                                                        <span style={{ fontWeight: 400 }}>{explanation}</span>
                                                    </>
                                                ) : (
                                                    point
                                                )}
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </>
                )}

                {/* Registration Process */}
                {steps.length > 0 && (
                    <>
                        <div className="svc-section-divider" />
                        <div id="process">
                            <div className="svc-section-head">
                                <div className="svc-section-accent" />
                                <h2 className="svc-section-h2">Registration Process</h2>
                                <p className="svc-section-sub">Step-by-step breakdown of how we work</p>
                            </div>
                            <div className="svc-steps">
                                {steps.map((step: { step: string; description: string }, i: number) => (
                                    <div key={i} className="svc-step">
                                        <div className="svc-step-left">
                                            <div className="svc-step-num">{i + 1}</div>
                                        </div>
                                        <div className="svc-step-content">
                                            <div className="svc-step-title">{step.step}</div>
                                            <p className="svc-step-desc">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {/* Why Choose Us placeholder */}
                <div className="svc-section-divider" />
                <div id="why-us">
                    <div className="svc-section-head">
                        <div className="svc-section-accent" />
                        <h2 className="svc-section-h2">Why Choose Horizon Line</h2>
                        <p className="svc-section-sub">Trusted by hundreds of businesses across the UAE</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '36px' }}>
                        {[
                            ['10+ Years Experience', 'Deep expertise across all UAE business jurisdictions'],
                            ['End-to-End Support', 'From documentation to final approval, we handle everything'],
                            ['Transparent Pricing', 'No hidden costs. Clear, fixed-fee service packages'],
                            ['Fast Turnaround', 'Efficient processing with regular status updates'],
                        ].map(([title, desc], i) => (
                            <div key={i} style={{ padding: '16px', background: '#f8f9fb', borderRadius: '8px', border: '1px solid #e4e8ee' }}>
                                <div style={{ fontSize: '14px', fontWeight: 700, color: '#2c3650', marginBottom: '5px' }}>{title}</div>
                                <div style={{ fontSize: '13px', color: '#5d666f', lineHeight: 1.5 }}>{desc}</div>
                            </div>
                        ))}
                    </div>

                    {/* SEO Summary & Coverage */}
                    {(EmiratesCoverage || seoSummary || closing) && (
                        <div className="svc-seo-block">
                            {EmiratesCoverage && <p className="svc-seo-text">{EmiratesCoverage}</p>}
                            {seoSummary && <p className="svc-seo-text">{seoSummary}</p>}
                            {closing && <p className="svc-seo-text" style={{ marginBottom: 0 }}><strong>{closing}</strong></p>}
                        </div>
                    )}
                </div>

                {/* FAQs */}
                {faqs.length > 0 && (
                    <>
                        <div className="svc-section-divider" />
                        <div id="faqs">
                            <div className="svc-section-head">
                                <div className="svc-section-accent" />
                                <h2 className="svc-section-h2">Frequently Asked Questions</h2>
                            </div>
                            <div className="svc-faq-list">
                                {faqs.map((faq: { question: string; answer: string }, i: number) => (
                                    <div key={i} className="svc-faq-item">
                                        <div className="svc-faq-q">{faq.question}</div>
                                        <div className="svc-faq-a">{faq.answer}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
};
