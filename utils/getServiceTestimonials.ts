import TestimonialList from '@/data/testimonials.json';
import { NewServiceType, TestimonialItem } from '@/types/newService';

const TARGET_COUNT = 6;

export function getServiceTestimonials(service: NewServiceType): TestimonialItem[] {
    const serviceItems = service.testimonials_section?.items || [];
    const merged: TestimonialItem[] = [...serviceItems];

    for (const item of TestimonialList) {
        if (merged.length >= TARGET_COUNT) break;
        const exists = merged.some((m) => m.name === item.name);
        if (!exists) {
            merged.push({
                name: item.name,
                role: item.role,
                rating: item.rating,
                quote: item.review,
            });
        }
    }

    return merged.slice(0, TARGET_COUNT);
}

export function getServiceTestimonialClosingLine(service: NewServiceType): string {
    const label = (service.sub_category || service.category || 'services').toLowerCase();
    return (
        service.testimonials_section?.closing_line ||
        `Horizon Line has helped hundreds of clients complete ${label} quickly and correctly across the UAE. Choose Horizon Line and get a dedicated consultant from day one.`
    );
}
