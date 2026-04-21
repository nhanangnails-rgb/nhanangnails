"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar({ dict, lang }: { dict: any; lang: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when user clicks a link
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Handle lang switch safely
  const switchLangHref = () => {
    const newLang = lang === 'en' ? 'vi' : 'en';
    if (!pathname) return `/${newLang}`;
    const segments = pathname.split('/');
    segments[1] = newLang; // replace lang segment
    return segments.join('/');
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-5 md:px-12 flex justify-between items-center bg-white",
          scrolled ? "py-3 shadow-md" : "shadow-sm"
        )}
      >
        <div className="flex items-center gap-4">
          <Link href={`/${lang}/#home`} className="flex items-center gap-2 relative z-50" onClick={closeMenu}>
            <img 
              src="/images/logo.png" 
              alt="Nhà Nàng Nails" 
              className={cn(
                "w-auto object-contain transition-all duration-300",
                scrolled ? "h-12 md:h-16" : "h-16 md:h-24"
              )} 
            />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-4 lg:hidden">
            <Link
              href={switchLangHref()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-gray-100 text-gray-800 text-xs font-bold hover:bg-gray-200 transition-colors z-50 relative"
            >
              {lang === 'vi' ? (
                <><span className="text-sm leading-none">🇺🇸</span> EN</>
              ) : (
                <><span className="text-sm leading-none">🇻🇳</span> VI</>
              )}
            </Link>
          <button 
            className="text-gray-800 p-2 focus:outline-none relative z-50 transition-transform active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center text-sm font-bold uppercase tracking-wider">
          <li>
            <Link href={`/${lang}/#home`} className="hover:text-[var(--color-primary)] transition-colors">{dict.home}</Link>
          </li>
          <li>
            <Link href={`/${lang}/#services`} className="hover:text-[var(--color-primary)] transition-colors">{dict.services}</Link>
          </li>
          <li>
            <Link href={`/${lang}/#menu-combos`} className="hover:text-[var(--color-primary)] transition-colors">{dict.combos}</Link>
          </li>
          <li>
            <Link href={`/${lang}/#gallery`} className="hover:text-[var(--color-primary)] transition-colors">{dict.gallery}</Link>
          </li>
          <li>
            <Link href={`/${lang}/blog`} className="hover:text-[var(--color-primary)] transition-colors">{dict.blog}</Link>
          </li>
          <li>
            <Link href={`/${lang}/#location`} className="hover:text-[var(--color-primary)] transition-colors">{dict.location}</Link>
          </li>
          <li>
            <Link
              href="https://m.me/nhanangnails"
              target="_blank"
              className="bg-gray-800 text-white hover:bg-[var(--color-primary)] hover:text-white px-6 py-2 rounded-full transition-colors inline-block whitespace-nowrap"
            >
              {dict.bookNow}
            </Link>
          </li>
          <li className="pl-2 border-l border-gray-200">
            <Link
              href={switchLangHref()}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100 text-gray-800 text-xs font-bold hover:bg-gray-200 transition-colors"
            >
              {lang === 'vi' ? (
                <><span className="text-base leading-none">🇺🇸</span> EN</>
              ) : (
                <><span className="text-base leading-none">🇻🇳</span> VI</>
              )}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out lg:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <ul 
          className={cn(
            "flex flex-col gap-8 items-center text-xl font-bold uppercase tracking-wider text-gray-800 transition-transform duration-500",
            isMobileMenuOpen ? "translate-y-0" : "translate-y-8"
          )}
        >
          <li><Link href={`/${lang}/#home`} onClick={closeMenu} className="hover:text-[var(--color-primary)] transition-colors">{dict.home}</Link></li>
          <li><Link href={`/${lang}/#services`} onClick={closeMenu} className="hover:text-[var(--color-primary)] transition-colors">{dict.services}</Link></li>
          <li><Link href={`/${lang}/#menu-combos`} onClick={closeMenu} className="hover:text-[var(--color-primary)] transition-colors">{dict.combos}</Link></li>
          <li><Link href={`/${lang}/#gallery`} onClick={closeMenu} className="hover:text-[var(--color-primary)] transition-colors">{dict.gallery}</Link></li>
          <li><Link href={`/${lang}/blog`} onClick={closeMenu} className="hover:text-[var(--color-primary)] transition-colors">{dict.blog}</Link></li>
          <li><Link href={`/${lang}/#location`} onClick={closeMenu} className="hover:text-[var(--color-primary)] transition-colors">{dict.location}</Link></li>
          <li className="mt-4">
            <Link
              href="https://m.me/nhanangnails"
              target="_blank"
              onClick={closeMenu}
              className="bg-[var(--color-primary)] text-white px-10 py-4 rounded-full transition-colors text-lg shadow-lg active:scale-95"
            >
              {dict.bookNow}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
