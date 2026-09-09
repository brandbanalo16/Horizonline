import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import Projects from '@/data/projects.json';
import { ProjectType } from '@/types/project';
import { notFound } from 'next/navigation';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import ProjectDetails from '@/components/sections/ProjectDetails';

const PAGE_TITLE: string = 'Project Details';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = Projects.find((item: ProjectType) => item.slug === slug);

  if (!project) {
    return {
      title: PAGE_TITLE,
      description: 'Explore Horizon Line project work and business consulting case studies across the UAE.',
    };
  }

  return {
    title: `${project.title} | Horizon Line`,
    description: project.shortDesc || 'Explore Horizon Line project work and business solutions across the UAE.',
    alternates: {
      canonical: `https://www.horizonlineuae.com/projects/${project.slug}`,
    },
  };
}

const Page = async ({ params }: {params: Promise<{slug: string}>}) => {
    const { slug } = await params;
    const projects = Projects;
    const project: ProjectType | undefined = projects.find(
        (project: ProjectType) => project.slug === slug
    );

    return (
        <>
            <BreadcrumbBanner 
                title={PAGE_TITLE}
                image={{
                    src: BreadcrumbBannerImage.src,
                    srcMobile: BreadcrumbBannerImageTablet.src,
                    srcTablet: BreadcrumbBannerImageMobile.src,
                    width: 1920,
                    height: 520,
                    cls: "media media-bg",
                    alt: "Banner Image",
                    loading: "eager"
                }}
            />

            {project ? (
              <ProjectDetails container="container" data={project} />
            ) : (
              notFound()
            )}
        </>
    )
}

export default Page;