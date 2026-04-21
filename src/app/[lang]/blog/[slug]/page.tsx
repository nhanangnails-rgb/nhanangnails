import { blogs } from "@/data/blogs";
import { blogsEn } from "@/data/blogs-en";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/i18n";

interface BlogDetailProps {
  params: Promise<{
    slug: string;
    lang: string;
  }>;
}

export async function generateMetadata({ params }: BlogDetailProps) {
  const { slug, lang } = await params;
  const currentBlogs = lang === "en" ? blogsEn : blogs;
  const post = currentBlogs.find((b) => b.id === slug);
  if (!post) return { title: "Không tìm thấy Bài viết" };
  
  return {
    title: `${post.title} | Blog Nhà Nàng Nails`,
    description: post.excerpt,
  };
}

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { slug, lang } = await params;
  const dict = await getDictionary(lang);
  const currentBlogs = lang === "en" ? blogsEn : blogs;
  const post = currentBlogs.find((b) => b.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-white">
      <article className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          href={`/${lang}/blog`} 
          className="inline-flex items-center text-gray-500 hover:text-[var(--color-primary)] transition-colors mt-8 mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {dict.blog.back}
        </Link>

        {/* Title & Metadata */}
        <header className="mb-10">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {post.createdAt}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Cover Image */}
        <div className="relative w-full aspect-video md:aspect-[21/9] bg-gray-100 rounded-2xl overflow-hidden mb-12 shadow-sm">
          <img 
            src={post.imageSrc} 
            alt={post.title} 
            className="w-full h-full object-cover relative z-10 bg-white"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed
            [&>p]:mb-6
            [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:font-heading
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2
            [&>strong]:text-gray-900
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* <p className="text-gray-500 font-medium">{dict.blog.writtenBy}</p> */}
          <div className="flex gap-4 items-center">
            <span className="text-sm text-gray-400 font-medium">{dict.location.socialsTitle}:</span>
            <a href="https://www.facebook.com/NhaNangNails" target="_blank" className="p-3 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2]/20 transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1877F2] group-hover:scale-110 transition-transform"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/nhanang.nails.beauty/" target="_blank" className="p-3 rounded-full bg-[#E4405F]/10 hover:bg-[#E4405F]/20 transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E4405F] group-hover:scale-110 transition-transform"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
