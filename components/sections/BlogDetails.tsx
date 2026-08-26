import '@/styles/blog.css';
import '@/styles/blog-details.css';
import { ArticleType } from '@/types/article';
import Article from "../Article";
import Comments from "../Comments";
import CommentForm from "../CommentForm";
import BlogSidebar from "../BlogSidebar";
import Share from '../Share';
import Icons from '../Icons';
import Link from 'next/link';
import { createHandle } from '@/utils/createHandle';
import DrawerOpener from '../DrawerOpener';

interface BlogDetailsType {
    container: string;
    article: ArticleType;
}

const BlogDetails = ({
    container,
    article
}: BlogDetailsType) => {
    const { tags }: { tags: string[] } = article;

    return (
        <div className="page-blog-details mt-100 mb-100">
            <div className={container}>
                <DrawerOpener
                    cls="open-sidebar svg-wrapper text text-20 fw-500 lg:!hidden"
                    data-drawer=".drawer-blog-sidebar"
                    data-aos="fade-up"
                >
                    <Icons.Filter />
                    Filter
                </DrawerOpener>
                <div className="grid grid-cols-12 lg:gap-1">
                    <div className="col-span-12 lg:col-span-7">
                        <Article article={article} />
                    </div>

                    <div className="col-span-12 lg:col-span-5">
                        <BlogSidebar slug={article.slug} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails;