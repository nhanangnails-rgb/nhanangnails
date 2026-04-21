import Link from "next/link";
import { blogs } from "@/data/blogs";
import { blogsEn } from "@/data/blogs-en";
import { Calendar, ArrowRight, Home } from "lucide-react";
import { getDictionary } from "@/i18n";

export const metadata = {
  title: "Blog & Góc Làm Đẹp | Nhà Nàng Nails",
  description: "Trang blog chia sẻ những thông tin hữu ích về chăm sóc sắc đẹp, tóc rụng, móng tay và những mẫu nail đẹp nhất.",
};

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);
  
  const currentBlogs = lang === "en" ? blogsEn : blogs;

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-[#fdfafa]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mt-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-800">
            {dict.blog.title}
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {dict.blog.subtitle}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
              <Link href={`/${lang}/blog/${post.id}`} className="block relative aspect-video overflow-hidden bg-gray-100 group">
                {/* Missing Image Fallback */}
                <span className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center border-2 border-dashed border-gray-300 z-0 pointer-events-none">
                   <strong className="text-gray-500 mb-1">{dict.blog.missingCover}</strong>
                   Lưu file <b>{post.imageSrc.split('/').pop()}</b>
                </span>
                
                <img 
                  src={post.imageSrc} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-10 bg-white"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm text-[var(--color-primary)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {post.category}
                </div>
              </Link>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time>{post.createdAt}</time>
                </div>
                
                <Link href={`/${lang}/blog/${post.id}`} className="block group">
                  <h2 className="text-xl font-bold font-heading text-gray-800 mb-3 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-gray-500 line-clamp-3 mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <Link href={`/${lang}/blog/${post.id}`} className="inline-flex items-center text-[var(--color-primary)] font-semibold hover:underline">
                  {dict.blog.readMore} <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
