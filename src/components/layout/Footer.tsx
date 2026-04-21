import Link from "next/link";

export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <img src="/images/logo.png" alt="Nhà Nàng Nails" className="h-20 w-auto mb-6 opacity-80 mix-blend-multiply filter grayscale contrast-200" />
          <p className="text-gray-500 max-w-sm">
            {dict.desc}
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold text-xl mb-6 text-gray-800">{dict.links}</h4>
          <ul className="space-y-4 text-gray-500">
            <li><Link href="#services" className="hover:text-[var(--color-primary)] transition-colors">{dict.servicesTitle}</Link></li>
            <li><Link href="#gallery" className="hover:text-[var(--color-primary)] transition-colors">{dict.gallery || "Thư Viện Ảnh"}</Link></li>
            <li><Link href="/blog" className="hover:text-[var(--color-primary)] transition-colors">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-xl mb-6 text-gray-800">{dict.contact || "Liên hệ"}</h4>
          <ul className="space-y-4 text-gray-500">
            <li>{dict.address}</li>
            <li>Hotline: 0965 414 424</li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/NhaNangNails" target="_blank" className="p-2.5 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2]/20 transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1877F2] group-hover:scale-110 transition-transform"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/nhanang.nails.beauty/" target="_blank" className="p-2.5 rounded-full bg-[#E4405F]/10 hover:bg-[#E4405F]/20 transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E4405F] group-hover:scale-110 transition-transform"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm border-t border-gray-200 pt-8 max-w-7xl mx-auto px-6">
        © {new Date().getFullYear()} {dict.rights}
      </div>
    </footer>
  );
}
