"use client";

import "@/styles/form.css";
import "@/styles/contact.css";
import { useState } from "react";
import Subheading from "../Subheading";
import Heading from "../Heading";
import Text from "../Text";
import Form from "../Form";
import TextField from "../TextField";
import TextArea from "../TextArea";
import { SectionProps } from "@/types/sectionProps";
import SecondaryButton from "../buttons/SecondaryButton";

const ContactSection = ({ data }: { data: SectionProps }) => {
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const {
        wrapperCls,
        container,
        subheading,
        heading,
        text,
        promotions,
        block,
    } = data || {};

    const clearMessage = (time: number) => {
        setTimeout(() => {
            setMessage("");
        }, time);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const form = event.currentTarget;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            setLoading(true);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const formMessage = await response.json();

            if (response.ok) {
                setLoading(false);
                setStatus("success");
                setMessage(formMessage.message);
                form.reset();
                clearMessage(6000);
            } else {
                setLoading(false);
                setStatus("error");
                setMessage(formMessage.error);
                clearMessage(4000);
            }
        } catch (error: any) {
            setLoading(false);
            setStatus("error");
            setMessage(error.message);
            clearMessage(4000);
        }
    };

    return (
        <div className={`section-contact-form ${wrapperCls}`}>
            <div className={container}>
                <div className="contact-box radius18">
                    <div className="grid max-xxl:grid-cols-2 xxl:flex product-grid justify-between xxl:gap-[30px]">
                        <div className="max-lg:col-span-2 max-xxl:col-span-1 col-contact-content">
                            <div className="section-headings">
                                {subheading &&
                                    <Subheading
                                        title={subheading}
                                        cls="text-20"
                                        aos="fade-up"
                                    />
                                }

                                {heading &&
                                    <Heading
                                        title={heading}
                                        cls="text-50"
                                        aos="fade-up"
                                    />
                                }

                                {text &&
                                    <Text
                                        text={text}
                                        cls="text-18"
                                        aos="fade-up"
                                    />
                                }

                                {/* Contact Info Items */}
                                <div className="contact-info-items">
                                    <div className="contact-info-item" data-aos="fade-up">
                                        <div className="contact-info-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                            </svg>
                                        </div>
                                        <div className="contact-info-content">
                                            <span className="contact-info-label">Email Us</span>
                                            <a href="mailto:enquiry@horizonlineuae.com" className="contact-info-value">enquiry@horizonlineuae.com</a>
                                        </div>
                                    </div>

                                    <div className="contact-info-item" data-aos="fade-up">
                                        <div className="contact-info-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                        </div>
                                        <div className="contact-info-content">
                                            <span className="contact-info-label">Address</span>
                                            <span className="contact-info-value">Office No. 103, Juma Al Majid Building,<br />Industrial Area 4, Sharjah, UAE</span>
                                        </div>
                                    </div>

                                    <div className="contact-info-item" data-aos="fade-up">
                                        <div className="contact-info-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.16 6.16l1-1a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                        </div>
                                        <div className="contact-info-content">
                                            <span className="contact-info-label">Call Us</span>
                                            <a href="tel:+971555013225" className="contact-info-value">+971-555013225</a>
                                            <a href="tel:+97165105959" className="contact-info-value">+971-65105959</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-lg:col-span-2 max-xxl:col-span-1 col-contact-form">
                            <div className="contact-form-wrap radius18">
                                {block &&
                                    <div className="contact-form-headings">
                                        {block.heading &&
                                            <h2 className="heading text-32" data-aos="fade-up">
                                                {block.heading}
                                            </h2>
                                        }

                                        {block.text &&
                                            <p className="text text-16" data-aos="fade-up">
                                                {block.text}
                                            </p>
                                        }
                                    </div>
                                }

                                <Form
                                    cls="form contact-form main-contact-form"
                                    onSubmitHandler={handleSubmit}
                                >
                                    <TextField
                                        cls="text-16"
                                        id="ContactForm-name"
                                        label="Your Name"
                                        type="text"
                                        placeholder="Your Name*"
                                        name="name"
                                        required={true}
                                    />

                                    <TextField
                                        cls="text-16"
                                        id="ContactForm-email"
                                        label="Your Email"
                                        type="email"
                                        placeholder="Email Here*"
                                        name="email"
                                        required={false}
                                    />

                                    <TextField
                                        cls="text-16"
                                        id="ContactForm-service"
                                        label="Service Type"
                                        type="text"
                                        placeholder="Service Type"
                                        name="service"
                                        required={false}
                                    />

                                    <TextArea
                                        cls="text-16"
                                        id="ContactForm-body"
                                        label="Your Comment"
                                        placeholder="Your Comment*"
                                        name="message"
                                        required={true}
                                    />

                                    <div
                                        className="form-button"
                                        data-aos="fade-up"
                                    >
                                        {loading ? (
                                            <SecondaryButton
                                                cls="loading"
                                                label="Sending..."
                                                ariaLabel="Sending message"
                                            />
                                        ) : (
                                            <SecondaryButton
                                                label="Send Message"
                                                ariaLabel="Send Message"
                                            />
                                        )}
                                    </div>
                                </Form>

                                {status === "success" && (
                                    <p className="text-16 fw-500 text-green-600 !mt-1">{message}</p>
                                )}

                                {status === "error" && (
                                    <p className="text-16 fw-500 text-red-600 !mt-1">{message}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;