"use client";

import Link from "next/link";
import { blogs } from "@/data/blogs";
import { blogsEn } from "@/data/blogs-en";
import { Calendar, ArrowRight } from "lucide-react";

export default function LatestBlogs({ dict, lang }: { dict: any; lang: string }) {
  const currentBlogs = lang === "en" ? blogsEn : blogs;
  // Grab the latest 3 blogs
  const latestBlogs = currentBlogs.slice(0, 3);

  return (
    <section id="latest-blogs" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-800">
            {dict.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
              <Link href={`/${lang}/blog/${post.id}`} className="block relative aspect-video overflow-hidden bg-gray-100">
                <img 
                  src={post.imageSrc} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-10 bg-white"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
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
                
                <Link href={`/${lang}/blog/${post.id}`} className="block">
                  <h3 className="text-xl font-bold font-heading text-gray-800 mb-3 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-gray-500 line-clamp-3 mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <Link href={`/${lang}/blog/${post.id}`} className="inline-flex items-center text-gray-800 font-semibold hover:text-[var(--color-primary)] transition-colors mt-auto">
                  {dict.readMore} <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button (Centered at bottom) */}
        <div className="mt-16 text-center">
          <Link
            href={`/${lang}/blog`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-lg font-bold hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 w-fit whitespace-nowrap"
          >
            {dict.viewAll} <ArrowRight className="w-5 h-5 mx-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
