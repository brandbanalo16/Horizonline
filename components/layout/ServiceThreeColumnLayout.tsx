import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const ServiceThreeColumnLayout = ({ children }: LayoutProps) => {
    return (
        <div style={{ width: '100%', backgroundColor: '#f8f9fb', padding: '50px 0 70px' }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .svc-grid-wrapper {
                    width: 100%;
                    max-width: 100%;
                    margin: 0 auto;
                    padding: 0 32px;
                    box-sizing: border-box;
                }
                .svc-three-col {
                    display: grid;
                    grid-template-columns: 100%;
                    gap: 28px;
                    align-items: start;
                }
                @media (min-width: 992px) {
                    .svc-three-col {
                        grid-template-columns: 240px minmax(0, 1fr) 280px;
                        gap: 32px;
                    }
                }
                @media (min-width: 1280px) {
                    .svc-three-col {
                        grid-template-columns: 310px minmax(0, 1fr) 335px;
                        gap: 40px;
                    }
                }
                @media (max-width: 991px) {
                    .svc-grid-wrapper { padding: 0 20px; }
                    .svc-right-col { order: 3; }
                    .svc-left-col { order: 2; }
                    .svc-center-col { order: 1; }
                }
            `}} />
            <div className="svc-grid-wrapper">
                <div className="svc-three-col">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ServiceThreeColumnLayout;
