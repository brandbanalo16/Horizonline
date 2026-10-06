'use client';

import React, { useEffect } from 'react';
import Icons from '../Icons';
import "@/styles/modal.css";

interface CostCalculatorPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const CostCalculatorPopup: React.FC<CostCalculatorPopupProps> = ({ isOpen, onClose }) => {

    const [loading, setLoading] = React.useState(false);
    const [status, setStatus] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            setLoading(true);
            const form = event.currentTarget;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // Add a default city since it's required by the PHP script but not in this popup
            data.city = "Not provided (Popup)";

            // Set flipped state optimistically
            setIsFlipped(true);
            setTimeout(() => {
                setIsFlipped(false);
                setStatus("");
                setMessage("");
                form.reset();
            }, 1000);

            const response = fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            }).then(r => r.json()).catch(() => null);

            // We don't await the response to show immediate success UI
            // but we let it run in the background.
        } catch (error: any) {
            setStatus("error");
            setMessage("Network error. Please try again.");
            setTimeout(() => setMessage(""), 2000);
        } finally {
            setLoading(false);
        }
    };

    // Lock body scroll when popup is open and fix positioning
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            style={{
                position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                backgroundColor: 'rgba(0,0,0,0.65)', zIndex: 9999,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '16px', boxSizing: 'border-box',
            }}
        >
            {/* Popup Container — stop click propagation so clicking inside doesn't close */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="popup-container"
                style={{
                    position: 'relative', width: '100%', maxWidth: '900px',
                    backgroundImage: 'url(/img/contact/popup.png)',
                    backgroundSize: 'cover', backgroundPosition: 'left center',
                    backgroundColor: '#334155',
                    borderRadius: '16px', display: 'flex', flexDirection: 'row',
                    overflow: 'hidden', maxHeight: '90vh', overflowY: 'auto',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.1)',
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute', top: '15px', right: '15px',
                        width: '32px', height: '32px', borderRadius: '50%',
                        backgroundColor: '#fff', border: 'none', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.15)', zIndex: 10
                    }}
                >
                    <Icons.CloseCircle />
                </button>

                {/* Left Side — hidden on mobile */}
                <div className="popup-left-side" style={{
                    flex: '1', padding: '40px', position: 'relative',
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                }}>
                    <div>
                        <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#e9e9e9', lineHeight: '1.2', marginBottom: '24px' }}>
                            Calculate Business Setup Cost
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '60px' }}>
                            {[
                                'Free Consultation',
                                'Lowest price guaranteed',
                                'Visa processing assistance',
                            ].map((item) => (
                                <div key={item} style={{
                                    backgroundColor: 'rgba(239,246,255,0.9)', color: '#2563eb', padding: '10px 20px',
                                    borderRadius: '30px', display: 'inline-flex', alignItems: 'center', fontWeight: '600',
                                    border: '1px solid #bfdbfe', width: 'fit-content'
                                }}>
                                    <span style={{ marginRight: '8px' }}>✓</span> {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: '40px' }}>
                        <p style={{ fontSize: '14px', fontWeight: '600', color: '#e9e9e9', marginBottom: '12px' }}>Contact us on</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {/* Call */}
                            <a href="tel:+971566866849" style={{
                                backgroundColor: 'rgba(255,255,255,0.92)', padding: '10px 20px', borderRadius: '30px',
                                display: 'inline-flex', alignItems: 'center', color: '#111827', fontWeight: '700',
                                textDecoration: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.12)', gap: '8px', width: 'fit-content'
                            }}>
                                {/* Phone Ringing Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.37 11.37 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.37 11.37 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02z" />
                                </svg>
                                <span>+971566866849</span>
                            </a>

                            {/* WhatsApp */}
                            <a href="https://wa.me/971566866849" target="_blank" rel="noopener noreferrer" style={{
                                backgroundColor: 'rgba(255,255,255,0.92)', padding: '10px 20px', borderRadius: '30px',
                                display: 'inline-flex', alignItems: 'center', color: '#111827', fontWeight: '700',
                                textDecoration: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.12)', gap: '8px', width: 'fit-content'
                            }}>
                                <img src="/img/icons/WhatsApp_Logo_green.svg.webp" alt="WhatsApp" style={{ width: '22px', height: '22px', flexShrink: 0 }} />
                                <span style={{ color: '#22c55e' }}>WhatsApp</span>
                                <span>+971566866849</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side — Form */}
                <div style={{
                    width: '400px',
                    perspective: '1000px',
                    flexShrink: 0,
                    display: 'flex',
                }}>
                    <div style={{
                        width: '100%',
                        position: 'relative',
                        transition: 'transform 0.6s',
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'none',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        {/* Front Side (Form) */}
                        <div style={{
                            width: '100%',
                            backfaceVisibility: 'hidden',
                            padding: '40px',
                            backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                            backgroundColor: 'rgba(20, 30, 48, 0.65)',
                            display: 'flex', flexDirection: 'column',
                        }}>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#f3f4f6', marginBottom: '8px' }}>
                                        Full Name <span style={{ color: '#ef4444' }}>*</span>
                                    </label>
                                    <input type="text" name="name" required placeholder="Enter your full name" style={{
                                        width: '100%', padding: '12px', borderRadius: '8px', border: 'none',
                                        fontSize: '14px', outline: 'none', backgroundColor: '#e5e7eb', color: '#111827'
                                    }} />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#f3f4f6', marginBottom: '8px' }}>
                                        Email Address <span style={{ color: '#ef4444' }}>*</span>
                                    </label>
                                    <input type="email" name="email" required placeholder="Enter your email" style={{
                                        width: '100%', padding: '12px', borderRadius: '8px', border: 'none',
                                        fontSize: '14px', outline: 'none', backgroundColor: '#e5e7eb', color: '#111827'
                                    }} />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#f3f4f6', marginBottom: '8px' }}>
                                        Phone Number <span style={{ color: '#ef4444' }}>*</span>
                                    </label>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <select
                                            name="countryCode"
                                            defaultValue="+971"
                                            style={{ padding: '12px', borderRadius: '8px', border: 'none', outline: 'none', backgroundColor: '#e5e7eb', color: '#111827' }}
                                        >
                                            <option value="+971">UAE +971</option>
                                            <option value="+91">IN +91</option>
                                        </select>
                                        <input
                                            type="text"
                                            name="phone"
                                            required
                                            placeholder="Enter number"
                                            style={{
                                                flex: '1', padding: '12px', borderRadius: '8px', border: 'none',
                                                fontSize: '14px', outline: 'none', backgroundColor: '#e5e7eb', color: '#111827'
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#f3f4f6', marginBottom: '8px' }}>
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        placeholder="Share Your Business Idea Here..."
                                        rows={3}
                                        style={{
                                            width: '100%', padding: '12px', borderRadius: '8px', border: 'none',
                                            fontSize: '14px', outline: 'none', backgroundColor: '#e5e7eb', color: '#111827',
                                            resize: 'none'
                                        }}
                                    />
                                </div>

                                <button type="submit" disabled={loading} style={{
                                    width: '100%', padding: '14px', backgroundColor: '#2563eb', color: '#fff',
                                    borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer',
                                    opacity: loading ? 0.7 : 1
                                }}>
                                    {loading ? 'Sending...' : 'Submit →'}
                                </button>
                            </form>
                        </div>
                        {/* Back Side (Thank You) */}
                        <div style={{
                            position: 'absolute',
                            top: 0, left: 0, width: '100%', height: '100%',
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                            padding: '40px',
                            backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                            backgroundColor: 'rgba(20, 30, 48, 0.65)',
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                        }}>
                            <div style={{
                                width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#22c55e',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px'
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <h3 style={{ color: '#ffffff', fontSize: '28px', fontWeight: '800', marginBottom: '16px' }}>Thank You!</h3>
                            <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: '1.5' }}>
                                We have received your request. One of our business setup consultants will get back to you within 24 hours.
                            </p>
                            <button onClick={() => { setIsFlipped(false); onClose(); }} style={{
                                marginTop: '32px', padding: '12px 24px', backgroundColor: 'transparent',
                                border: '1px solid #94a3b8', color: '#ffffff', borderRadius: '30px',
                                fontSize: '14px', fontWeight: '600', cursor: 'pointer'
                            }}>
                                Close Window
                            </button>
                        </div>
                    </div>
                </div>

                {/* Responsive Styles */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .popup-left-side {
                        display: flex;
                    }
                    @media (max-width: 768px) {
                        .popup-container {
                            flex-direction: column !important;
                        }
                        .popup-left-side {
                            display: none !important;
                        }
                        .popup-container > div:last-of-type {
                            width: 100% !important;
                            padding: 30px 20px !important;
                        }
                    }
                `}} />
            </div>
        </div>
    );
};

export default CostCalculatorPopup;
