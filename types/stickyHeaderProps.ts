export interface StickyHeaderProps {
    wrapperCls?: string;
    container?: string;
    stickyType?: "always" | "reduce-logo-size" | "on-scroll-up";
    children: React.ReactNode;
}