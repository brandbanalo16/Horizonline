import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Accordion from '@/components/Accordion';
import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import { CheckCircle, ArrowUpRight, Clock, Briefcase, Globe } from 'lucide-react';
import '@/styles/service-page-premium.css';
import { Block } from '@/components/service/Block';
import { IntroSection } from '@/components/service/IntroSection';
import { CardsSection } from '@/components/service/CardsSection';
import { ProcessSection } from '@/components/service/ProcessSection';
import { DocsSection } from '@/components/service/DocsSection';
import { IndustriesSection } from '@/components/service/IndustriesSection';
import ContactSection from '@/components/sections/Contact';
import { Contact2Data } from '@/data/sections/contact2Data';
import fs from 'fs';
import path from 'path';

/* ─────────────────────────────────────────────────────────────────────────
 * Types & Data
 * ─────────────────────────────────────────────────────────────────────────*/
const getRawServices = () => {
  try {
    const dir = path.join(process.cwd(), 'data', 'service-data');
    if (!fs.existsSync(dir)) return [];
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
    const all: any[] = [];
    for (const file of files) {
      const content = fs.readFileSync(path.join(dir, file), 'utf8');
      const data = JSON.parse(content);
      if (Array.isArray(data)) all.push(...data);
      else if (data && data.services) all.push(...data.services);
    }
    return all;
  } catch (e) {
    console.error('Error reading service data', e);
    return [];
  }
};
const rawServices = getRawServices();

const extractSlug = (item: any): string => {
  let parsed = item.metadata?.['URL Slug'];
  if (parsed) {
    parsed = parsed.replace(/[`/]/g, '').trim();
    if (parsed) return parsed;
  }
  const kw = item.metadata?.['Primary SEO Keyword'];
  if (kw) return kw.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/-uae$/, '');
  return item.title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/-uae$/, '');
};

const allServices = rawServices.filter((item, index, self) =>
  index === self.findIndex((t) => extractSlug(t) === extractSlug(item))
);

const HIDDEN = ['SEO Metadata', 'Internal Linking', 'Image SEO', 'What Clients Say', 'Summary & Next Steps', 'Conclusion'];
const isHidden = (h: string) => HIDDEN.some(k => h?.toLowerCase().includes(k.toLowerCase()));

const findService = (slugPath: string) => {
  const target = slugPath.split('/').pop() || slugPath;
  let found = allServices.find(item => {
    const r = extractSlug(item);
    const baseSlug = r.replace(/-uae$/, '');
    const baseTarget = target.replace(/-uae$/, '');
    return r === target || baseSlug === baseTarget || r === `${target}-uae`;
  });
  if (!found) {
    found = allServices.find(item => {
      const r = extractSlug(item);
      const baseSlug = r.replace(/-uae$/, '');
      const baseTarget = target.replace(/-uae$/, '');
      return baseSlug.includes(baseTarget) || baseTarget.includes(baseSlug);
    });
  }
  return found;
};

/* ─────────────────────────────────────────────────────────────────────────
 * Service-type detection
 * ─────────────────────────────────────────────────────────────────────────*/
type SvcType = 'business' | 'visa' | 'tax' | 'legal' | 'trademark' | 'public' | 'general';
const detectType = (s: any): SvcType => {
  const c = (s.metadata?.['Main Category'] || '').toLowerCase();
  const t = (s.title || '').toLowerCase();
  if (c.includes('visa') || t.includes('visa') || t.includes('immigration') || t.includes('citizenship') || t.includes('residency')) return 'visa';
  if (c.includes('tax') || c.includes('account') || t.includes('vat') || t.includes('tax') || t.includes('audit') || t.includes('bookkeeping')) return 'tax';
  if (c.includes('trademark') || t.includes('trademark') || t.includes('copyright') || t.includes('intellectual property')) return 'trademark';
  if (c.includes('legal') || t.includes('legal') || t.includes('notary') || t.includes('power of attorney') || t.includes('moa')) return 'legal';
  if (c.includes('public') || c.includes('government') || c.includes('civil') || c.includes('health') || c.includes('municipal') || t.includes('police')) return 'public';
  if (c.includes('business') || c.includes('corporate') || t.includes('formation') || t.includes('licen') || t.includes('company')) return 'business';
  return 'general';
};

/* ─────────────────────────────────────────────────────────────────────────
 * Adaptive config per service type
 * ─────────────────────────────────────────────────────────────────────────*/
const getConfig = (s: any, type: SvcType) => {
  const name = s.metadata?.['Service Name'] || s.title || 'this service';
  const CONFIGS: Record<SvcType, { formTitle: string; formSub: string; ctaNote: string }> = {
    business: { formTitle: `Set Up Your ${name}`, formSub: `Get professional guidance on ${name.toLowerCase()} requirements.`, ctaNote: 'Ready to establish your business in the UAE?' },
    visa:     { formTitle: `Get Guidance on Your ${name}`, formSub: `Our team can help assess your eligibility and guide you.`, ctaNote: 'Need help with your UAE visa or immigration requirement?' },
    tax:      { formTitle: `Get Help With ${name}`, formSub: `Speak with our tax team about your obligations.`, ctaNote: 'Need assistance with UAE tax compliance?' },
    trademark:{ formTitle: `Protect Your Brand — ${name}`, formSub: 'Get expert assistance with trademark registration.', ctaNote: 'Ready to protect your brand and intellectual property?' },
    legal:    { formTitle: `Get Assistance — ${name}`, formSub: 'Speak with our legal coordination team.', ctaNote: 'Need help with a UAE legal document or service?' },
    public:   { formTitle: `Get Help With Your ${name}`, formSub: 'Our team can guide you through the process.', ctaNote: 'Need assistance with this UAE government or public service?' },
    general:  { formTitle: `Get Expert Assistance`, formSub: `Speak with our team about your requirements.`, ctaNote: 'Ready to get started?' },
  };
  return CONFIGS[type];
};

/* ─────────────────────────────────────────────────────────────────────────
 * Section variant detection
 * ─────────────────────────────────────────────────────────────────────────*/
type Variant = 'intro' | 'options' | 'benefits' | 'process' | 'docs' | 'faq' | 'support' | 'eligibility' | 'industries' | 'prose';
const getVariant = (h: string): Variant => {
  const t = h.toLowerCase();
  if (t.includes('frequently asked') || t.includes(' faq')) return 'faq';
  if (t.includes('why choose') || t.includes('how horizon') || t.includes('horizon line support') || t.includes('support')) return 'support';
  if (t.includes('popular') || t.includes('jurisdictions') || t.includes('types') || t.includes('options') || t.includes('free zone') || t.includes('our visa services') || t.includes('services')) return 'options';
  if (t.includes('key benefit') || t.includes('advantage') || t.includes('why register') || t.includes('benefit of') || t.includes('benefits') || t.includes('why')) return 'benefits';
  if (t.includes('process') || t.includes('step') || t.includes('how')) return 'process';
  if (t.includes('document') || t.includes('required') || t.includes('requirements') || t.includes('you may need')) return 'docs';
  if (t.includes('eligib') || t.includes('who can') || t.includes('who is this') || t.includes('who needs') || t.includes('who must')) return 'eligibility';
  if (t.includes('industr') || t.includes('who benefit') || t.includes('business that') || t.includes('businesses that') || t.includes('serve') || t.includes('coverage') || t.includes('who may need')) return 'industries';
  if (t.includes('what is') || t.includes('overview') || t.includes('introduction') || t.includes('about our service') || t.includes('journey')) return 'intro';
  return 'prose';
};

/* ─────────────────────────────────────────────────────────────────────────
 * Service Image Mapping
 * ─────────────────────────────────────────────────────────────────────────*/
const BASE = '/img/service/main-services/';
const getServiceImage = (service: any): string => {
  const t = ((service.metadata?.['Service Name'] || service.title) as string).toLowerCase();
  const c = (service.metadata?.['Main Category'] || '').toLowerCase();
  if (t.includes('mainland company') || t.includes('mainland formation')) return `${BASE}mainland-company-formation.webp`;
  if (t.includes('free zone company') || t.includes('free zone formation')) return `${BASE}free-zone-company-formation.webp`;
  if (t.includes('offshore company') || t.includes('offshore formation')) return `${BASE}offshore-company-formation.webp`;
  if (t.includes('branch office')) return `${BASE}branch-office-setup.webp`;
  if (t.includes('dmcc')) return `${BASE}dmcc.webp`;
  if (t.includes('ifza')) return `${BASE}ifza.webp`;
  if (t.includes('jafza')) return `${BASE}jafza.webp`;
  if (t.includes('rakez')) return `${BASE}rakez.webp`;
  if (t.includes('shams')) return `${BASE}shams.webp`;
  if (t.includes('meydan')) return `${BASE}meydan-free-zone.webp`;
  if (t.includes('spc free zone') || t.includes('spc')) return `${BASE}spc-free-zone.webp`;
  if (t.includes('dubai south')) return `${BASE}dubai-south.webp`;
  if (t.includes('srtip') || t.includes('sharjah research')) return `${BASE}srtip.webp`;
  if (t.includes('fujairah creative')) return `${BASE}fujairah-creative-city.webp`;
  if (t.includes('golden visa')) return `${BASE}golden-visa.webp`;
  if (t.includes('investor visa')) return `${BASE}investor-visa.webp`;
  if (t.includes('employment visa') || t.includes('work visa')) return `${BASE}employment-visa.webp`;
  if (t.includes('family visa')) return `${BASE}family-visa.webp`;
  if (t.includes('emirates id')) return `${BASE}emirates-id.webp`;
  if (t.includes('medical test')) return `${BASE}medical-test.webp`;
  if (t.includes('vat return') || t.includes('vat filing')) return `${BASE}vat-return-filing.webp`;
  if (t.includes('vat registration')) return `${BASE}vat-registration.webp`;
  if (t.includes('corporate tax registration')) return `${BASE}corporate-tax-registration.webp`;
  if (t.includes('corporate tax') || t.includes('tax filing')) return `${BASE}corporate-tax-filing.webp`;
  if (t.includes('accounting') || t.includes('bookkeeping')) return `${BASE}accounting-and-bookkeeping.webp`;
  if (t.includes('audit')) return `${BASE}audit-support.webp`;
  if (t.includes('payroll')) return `${BASE}payroll-management.webp`;
  if (t.includes('trademark registration')) return `${BASE}trademark-registration.webp`;
  if (t.includes('trademark') || t.includes('intellectual property')) return `${BASE}trademark-and-ip.webp`;
  if (t.includes('copyright')) return `${BASE}copyright-registration.webp`;
  if (t.includes('notary') || t.includes('legal documentation') || t.includes('legal document')) return `${BASE}legal-documentation.webp`;
  if (t.includes('moa') || t.includes('memorandum')) return `${BASE}moa-amendment.webp`;
  if (t.includes('power of attorney')) return `${BASE}legal-documentation.webp`;
  if (t.includes('trade license renewal')) return `${BASE}trade-license-renewal.webp`;
  if (t.includes('commercial license')) return `${BASE}commercial-license.webp`;
  if (t.includes('professional license')) return `${BASE}professional-license.webp`;
  if (t.includes('industrial license')) return `${BASE}industrial-license.webp`;
  if (t.includes('company liquidation')) return `${BASE}company-liquidation.webp`;
  if (t.includes('corporate restructuring')) return `${BASE}corporate-restructuring.webp`;
  if (t.includes('business license amendment')) return `${BASE}business-license-amendment.webp`;
  if (t.includes('license cancellation')) return `${BASE}business-license-cancellation.webp`;
  if (t.includes('document clearing') || t.includes('document clearance')) return `${BASE}document-clearing.webp`;
  if (t.includes('pro service')) return `${BASE}pro-services.webp`;
  if (t.includes('virtual office')) return `${BASE}virtual-office.webp`;
  if (t.includes('flexi desk') || t.includes('flexi-desk')) return `${BASE}flexi-desk.webp`;
  if (t.includes('private office')) return `${BASE}private-office.webp`;
  if (t.includes('corporate bank') || t.includes('bank account')) return `${BASE}corporate-bank-account.webp`;
  if (t.includes('police clearance')) return `${BASE}police-clearance-certificate.webp`;
  if (t.includes('good conduct')) return `${BASE}good-conduct-certificate.webp`;
  if (t.includes('clearance certificate')) return `${BASE}clearance-certificate.webp`;
  if (t.includes('dewa')) return `${BASE}dewa.webp`;
  if (t.includes('sewa')) return `${BASE}sewa.webp`;
  if (t.includes('fewa') || t.includes('etihad water')) return `${BASE}etihad-water-and-electricity.webp`;
  if (t.includes('traffic fine')) return `${BASE}traffic-fine-payment.webp`;
  if (t.includes('vehicle registration')) return `${BASE}vehicle-registration.webp`;
  if (t.includes('vehicle renewal')) return `${BASE}vehicle-renewal.webp`;
  if (t.includes('vehicle transfer')) return `${BASE}vehicle-transfer.webp`;
  if (t.includes('driving licence renewal')) return `${BASE}driving-licence-renewal.webp`;
  if (t.includes('salik')) return `${BASE}salik-account.webp`;
  if (t.includes('rta')) return `${BASE}rta.webp`;
  if (t.includes('digital marketing')) return `${BASE}digital-marketing.webp`;
  if (t.includes('website') || t.includes('web development')) return `${BASE}website-development.webp`;
  if (t.includes('hr service') || t.includes('human resource')) return `${BASE}hr-services.webp`;
  if (t.includes('recruitment')) return `${BASE}recruitment-support.webp`;
  // Category-level fallbacks
  if (c.includes('visa') || t.includes('visa') || t.includes('residency')) return `${BASE}visa-services.webp`;
  if (c.includes('tax') || c.includes('account') || t.includes('tax') || t.includes('vat')) return `${BASE}tax-and-compliance.webp`;
  if (c.includes('trademark') || t.includes('trademark')) return `${BASE}trademark-and-ip.webp`;
  if (c.includes('legal') || t.includes('legal')) return `${BASE}legal-services.webp`;
  if (c.includes('business') || c.includes('corporate') || t.includes('business')) return `${BASE}business-setup.webp`;
  if (c.includes('public') || c.includes('government')) return `${BASE}digital-services.webp`;
  return `${BASE}corporate-services.webp`;
};

/* ─────────────────────────────────────────────────────────────────────────
 * Static Params & Metadata
 * ─────────────────────────────────────────────────────────────────────────*/
export async function generateStaticParams() {
  return allServices
    .map(item => ({ slug: (extractSlug(item) || '').split('/') }))
    .filter(p => p.slug.length > 0 && p.slug[0]);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug.join('/'));
  if (!service) return { title: 'Service | Horizon Line' };
  const titleStr = service.metadata?.['SEO Title'] || service.title;
  const desc = service.metadata?.['Meta Description'] || '';
  return { title: titleStr, description: desc, robots: { index: true, follow: true } };
}

/* ─────────────────────────────────────────────────────────────────────────
 * Page
 * ─────────────────────────────────────────────────────────────────────────*/
const Page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  const service = findService(slug.join('/'));
  if (!service) notFound();

  const type = detectType(service);
  const cfg = getConfig(service, type);
  const serviceName = service.metadata?.['Service Name'] || service.title;
  const serviceImg = getServiceImage(service);

  const visibleSections = (service.sections || []).filter((s: any) => !isHidden(s.heading));
  const heroDesc =
    visibleSections[0]?.content?.find((b: any) => b.type === 'paragraph')?.text ||
    visibleSections[0]?.paragraphs?.[0] ||
    service.hero_description || '';

  const faqSection = visibleSections.find((s: any) => getVariant(s.heading) === 'faq');
  const otherSections = visibleSections.filter((s: any) => getVariant(s.heading) !== 'faq');

  let bgCounter = 0;
  const renderSection = (s: any, i: number) => {
    if (!s.heading) return null;
    const v = getVariant(s.heading);
    const isGray = bgCounter % 2 !== 0;
    const isCoverage = s.heading.toLowerCase().includes('coverage');
    bgCounter++;

    if (isCoverage) return <IndustriesSection key={i} s={s} isGray={false} isDark={true} />;
    if (v === 'support')     return <CardsSection key={i} s={s} isGray={isGray} label="Why Choose Us" />;
    if (v === 'options')     return <CardsSection key={i} s={s} isGray={isGray} label="Our Services" showNumber={true} />;
    if (v === 'benefits')    return <CardsSection key={i} s={s} isGray={isGray} label="Key Benefits" />;
    if (v === 'process')     return <ProcessSection key={i} s={s} isGray={isGray} />;
    if (v === 'docs')        return <DocsSection key={i} s={s} isGray={isGray} />;
    if (v === 'eligibility') return <DocsSection key={i} s={s} isGray={isGray} />;
    if (v === 'industries')  return <IndustriesSection key={i} s={s} isGray={isGray} />;
    if (v === 'intro')       return <IntroSection key={i} s={s} isGray={isGray} imgSrc={serviceImg} />;

    // Generic prose/fallback section
    const contentBlocks = s.content || (s.paragraphs ? s.paragraphs.map((p: string) => ({ type: 'paragraph', text: p })) : []);
    const items: any[] = s.items || s.subsections || [];
    if (contentBlocks.length === 0 && items.length === 0) { bgCounter--; return null; }

    return (
      <section key={i} className={`sp-section-wrap ${isGray ? 'bg-gray' : 'bg-white'}`}>
        <div className="sp-container">
          <h2 className="sp-section-h2">{s.heading}</h2>
          {contentBlocks.map((b: any, j: number) => <Block key={j} b={b} />)}
          {items.length > 0 && (
            <div className="sp-docs-grid" style={{ marginTop: 24 }}>
              {items.map((item: any, j: number) => {
                const title = typeof item === 'string' ? item : (item.title || item.heading);
                const text = typeof item === 'string' ? '' : (item.text || item.description || item.content?.[0]?.text);
                return (
                  <div key={j} className="sp-doc-item" style={{ alignItems: 'flex-start' }}>
                    <CheckCircle style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      {title && <strong style={{ display: 'block', marginBottom: 4 }}>{title}</strong>}
                      {text && <span style={{ color: 'var(--sp-muted)', fontSize: 14 }}>{text}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    );
  };

  return (
    <div className="sp-page">
      {/* BREADCRUMB BANNER — same component as About Us, Contact, etc. */}
      <BreadcrumbBanner
        title={serviceName}
        image={{
          src: BreadcrumbBannerImage.src,
          srcTablet: BreadcrumbBannerImageTablet.src,
          srcMobile: BreadcrumbBannerImageMobile.src,
          width: 1920,
          height: 520,
          cls: 'media media-bg',
          alt: `${serviceName} — Horizon Line UAE`,
          loading: 'eager',
        }}
      />

      {/* HERO BLOCK */}
      <section className="sp-section-wrap bg-white" style={{ paddingTop: 60 }}>
        <div className="sp-container">
          <div className="sp-hero">
            <div>
              <div className="sp-hero-eyebrow">Professional, Reliable, UAE-Wide Support</div>
              <h1 className="sp-hero-h1">{service.title}</h1>
              <p className="sp-hero-desc">{heroDesc.length > 260 ? heroDesc.slice(0, 260).trimEnd() + '…' : heroDesc}</p>
              <div className="sp-hero-actions">
                <Link href="/contact" className="sp-btn-primary">Get Started <ArrowUpRight size={18} style={{ marginLeft: 6 }} /></Link>
                <Link href="#content" className="sp-btn-outline">Contact Us <ArrowUpRight size={18} style={{ marginLeft: 6 }} /></Link>
              </div>
              <div className="sp-hero-trust">
                <div className="sp-hero-trust-item"><Briefcase /> Expert Guidance</div>
                <div className="sp-hero-trust-item"><Clock /> Hassle-Free Process</div>
                <div className="sp-hero-trust-item"><Globe /> UAE-Wide Coverage</div>
              </div>
            </div>
            <div className="sp-hero-image">
              <img src={serviceImg} alt={service.title} />
            </div>
          </div>
        </div>
      </section>

      <div id="content">
        {otherSections.map((s: any, i: number) => renderSection(s, i))}
      </div>

      {/* FAQ SECTION */}
      {faqSection && (() => {
        const faqData = (faqSection.subsections || faqSection.items || []).map((sub: any) => ({
          title: sub.heading || sub.question || sub.title,
          text: sub.content?.map((b: any) => b.text || b.items?.join('. ') || '').join(' ') || sub.answer || sub.text || '',
        }));
        const mid = Math.ceil(faqData.length / 2);
        const faqLeft = faqData.slice(0, mid);
        const faqRight = faqData.slice(mid);
        
        return (
          <section className="sp-section-wrap bg-gray" style={{ padding: '100px 0' }}>
            <div className="sp-container">
              <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <span className="sp-section-label">FAQ</span>
                <h2 className="sp-section-h2">{faqSection.heading}</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                <Accordion cls="faq-accordion-1" data={faqLeft} />
                <Accordion cls="faq-accordion-1" data={faqRight} />
              </div>
            </div>
          </section>
        );
      })()}

      {/* BOTTOM CONTACT FORM */}
      <ContactSection data={Contact2Data} />
    </div>
  );
};

export default Page;
