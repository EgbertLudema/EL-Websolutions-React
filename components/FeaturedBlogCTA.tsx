import { getAllBlogs } from '@/lib/server/getBlogs';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

interface Props {
    tagParam?: string[];
}

export default async function FeaturedBlog({ tagParam }: Props) {
    const blogs = await getAllBlogs();

    let selectedBlog;

    if (tagParam && tagParam.length > 0) {
        // Score each blog based on number of matching tags
        const tagScores = blogs.map((blog) => {
            const overlapCount = blog.tags?.filter((tag) => tagParam.includes(tag)).length || 0;
            return { blog, score: overlapCount };
        });

        const maxScore = Math.max(...tagScores.map((b) => b.score));

        const topMatches = tagScores
            .filter((b) => b.score === maxScore && maxScore > 0)
            .map((b) => b.blog);

        if (topMatches.length > 0) {
            selectedBlog = topMatches[Math.floor(Math.random() * topMatches.length)];
        }
    }

    if (!selectedBlog) {
        selectedBlog = blogs[Math.floor(Math.random() * blogs.length)];
    }

    if (!selectedBlog) return null;

    return (
        <div className="container py-20">
            <h2 className="text-3xl text-slate-700 dark:text-slate-300 font-bold">Ook interessant</h2>
            <section className="flex flex-col md:flex-row items-start gap-12 pt-12">
                <article className="md:flex-[2] w-full max-w-lg md:max-w-full mx-auto md:mx-0 flex flex-col gap-4">
                    <Image
                        src={selectedBlog.thumbnail}
                        alt={selectedBlog.title}
                        width={800}
                        height={450}
                        className="rounded-xl shadow-md w-full object-cover"
                    />
                    <h3 className="text-2xl text-slate-700 dark:text-slate-300 font-bold">{selectedBlog.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{selectedBlog.description}</p>
                    <Link href={`/blog/${selectedBlog.slug}`} className="text-primary font-medium hover:underline hover:opacity-80 transition-opacity">
                        Lees verder
                    </Link>
                </article>

                <aside className="md:flex-[3] w-full gradient-bg dark:light-gradient-bg p-8 rounded-xl flex flex-col h-fit items-start shadow-md">
                    <h3 className="text-xl text-white dark:text-slate-200 font-semibold mb-4">Project in gedachten?</h3>
                    <p className="text-slate-50 dark:text-slate-300 mb-6">
                        Neem gerust contact op voor meer informatie of een vrijblijvend gesprek.
                    </p>
                    <Link
                        href="/contact"
                        className="group white-btn dark:gradient-btn shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-none flex flex-row items-center gap-2"
                    >
                        Neem contact op
                        <FaArrowRight className="group-hover:translate-x-1 transition" />
                    </Link>
                </aside>
            </section>
        </div>
    );
}