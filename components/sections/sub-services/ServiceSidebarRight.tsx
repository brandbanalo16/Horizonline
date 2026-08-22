'use client';

import React, { useState } from 'react';

export const ServiceSidebarRight = ({ serviceName = 'this service' }: { serviceName?: string }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="svc-right-col" style={{ width: '100%', minWidth: 0 }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .right-sticky {
                    position: sticky;
                    top: 90px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                /* ---- Form Card ---- */
                .right-form-card {
                    background: #ffffff;
                    border-radius: 10px;
                    border: 1px solid #e4e8ee;
                    box-shadow: 0 2px 16px rgba(44,54,80,0.09);
                    overflow: hidden;
                }
                .right-form-head {
                    background: #2c3650;
                    padding: 22px 24px;
                    color: #fff;
                }
                .right-form-head h3 {
                    font-size: 16px;
                    font-weight: 700;
                    margin: 0 0 5px;
                    color: #fff;
                    line-height: 1.3;
                }
                .right-form-head p {
                    font-size: 12.5px;
                    color: rgba(255,255,255,0.65);
                    margin: 0;
                    line-height: 1.5;
                }
                .right-form-body {
                    padding: 22px 22px;
                }
                .right-field {
                    margin-bottom: 13px;
                }
                .right-label {
                    display: block;
                    font-size: 10.5px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.07em;
                    color: #5d666f;
                    margin-bottom: 5px;
                }
                .right-input {
                    width: 100%;
                    padding: 9px 13px;
                    border: 1px solid #dde2ea;
                    border-radius: 6px;
                    font-size: 13.5px;
                    color: #2c3650;
                    background: #f8f9fb;
                    box-sizing: border-box;
                    outline: none;
                    transition: border-color 0.18s, background 0.18s;
                    font-family: inherit;
                }
                .right-input:focus {
                    border-color: #266464;
                    background: #ffffff;
                }
                .right-textarea {
                    width: 100%;
                    padding: 9px 13px;
                    border: 1px solid #dde2ea;
                    border-radius: 6px;
                    font-size: 13.5px;
                    color: #2c3650;
                    background: #f8f9fb;
                    box-sizing: border-box;
                    resize: vertical;
                    min-height: 75px;
                    outline: none;
                    transition: border-color 0.18s, background 0.18s;
                    font-family: inherit;
                    display: block;
                }
                .right-textarea:focus {
                    border-color: #266464;
                    background: #ffffff;
                }
                .right-submit-btn {
                    width: 100%;
                    padding: 12px 18px;
                    background: #266464;
                    color: #ffffff;
                    font-size: 13.5px;
                    font-weight: 700;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    letter-spacing: 0.04em;
                    transition: background 0.2s;
                    margin-top: 4px;
                    font-family: inherit;
                }
                .right-submit-btn:hover { background: #2c3650; }

                /* ---- Contact Card ---- */
                .right-contact-card {
                    background: #ffffff;
                    border-radius: 10px;
                    border: 1px solid #e4e8ee;
                    box-shadow: 0 1px 8px rgba(44,54,80,0.07);
                    overflow: hidden;
                }
                .right-contact-head {
                    padding: 14px 20px;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 0.07em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.75);
                    background: #266464;
                }
                .right-contact-row {
                    padding: 13px 20px;
                    border-bottom: 1px solid #f2f4f7;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }
                .right-contact-row:last-child { border-bottom: none; }
                .right-contact-label {
                    font-size: 10px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.07em;
                    color: #5d666f;
                }
                .right-contact-value {
                    font-size: 13px;
                    font-weight: 600;
                    color: #2c3650;
                    text-decoration: none;
                    word-break: break-all;
                }
                a.right-contact-value:hover { color: #266464; }

                /* ---- Success state ---- */
                .right-success {
                    padding: 28px 20px;
                    text-align: center;
                    color: #266464;
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 1.6;
                }
            `}} />

            <div className="right-sticky">

                {/* Consultation Form */}
                <div className="right-form-card">
                    <div className="right-form-head">
                        <h3>Free Consultation</h3>
                        <p>Speak to an expert about {serviceName}</p>
                    </div>
                    <div className="right-form-body">
                        {submitted ? (
                            <div className="right-success">
                                Thank you!<br />Our team will reach out to you shortly.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="right-field">
                                    <label className="right-label">Full Name</label>
                                    <input type="text" className="right-input" placeholder="Your full name"
                                        value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                                </div>
                                <div className="right-field">
                                    <label className="right-label">Email Address</label>
                                    <input type="email" className="right-input" placeholder="your@email.com"
                                        value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                                </div>
                                <div className="right-field">
                                    <label className="right-label">Phone Number</label>
                                    <input type="tel" className="right-input" placeholder="+971 5X XXX XXXX"
                                        value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} required />
                                </div>
                                <div className="right-field">
                                    <label className="right-label">Message (Optional)</label>
                                    <textarea className="right-textarea" placeholder="Tell us about your requirement..."
                                        value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                                </div>
                                <button type="submit" className="right-submit-btn">Request Free Callback</button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Contact Details */}
                <div className="right-contact-card">
                    <div className="right-contact-head">Need Immediate Help?</div>
                    <div className="right-contact-row">
                        <span className="right-contact-label">Phone</span>
                        <a href="tel:+97142201500" className="right-contact-value">+971 4 220 1500</a>
                    </div>
                    <div className="right-contact-row">
                        <span className="right-contact-label">Email</span>
                        <a href="mailto:info@horizonlineconsultancy.ae" className="right-contact-value">info@horizonlineconsultancy.ae</a>
                    </div>
                    <div className="right-contact-row">
                        <span className="right-contact-label">Office</span>
                        <span className="right-contact-value">Dubai, United Arab Emirates</span>
                    </div>
                </div>

            </div>
        </div>
    );
};
