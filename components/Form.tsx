'use client';

import { FormType } from "@/types/form";
import { useState } from "react";

const Form = ({
    cls,
    onSubmitHandler,
    children
}: FormType) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Trigger flip immediately
        setIsFlipped(true);
        setTimeout(() => setIsFlipped(false), 8000);

        // Call the original handler but without awaiting so the UI updates instantly
        onSubmitHandler(event);
    };

    return (
        <div style={{ perspective: '1000px', width: '100%' }}>
            <div style={{
                position: 'relative',
                transition: 'transform 0.6s',
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'none',
                width: '100%',
                display: 'flex' // ensures the front defines the height
            }}>
                <div style={{
                    width: '100%',
                    backfaceVisibility: 'hidden',
                }}>
                    <form 
                        className={cls}
                        onSubmit={handleSubmit} 
                    >
                        {children}
                    </form>
                </div>
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '20px',
                    textAlign: 'center',
                    zIndex: 10
                }}>
                    <div style={{
                        width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#22c55e',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <h3 style={{ color: '#0f172a', fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>Thank You!</h3>
                    <p style={{ color: '#475569', fontSize: '14px', margin: 0 }}>We have received your message.</p>
                </div>
            </div>
        </div>
    )
}

export default Form;