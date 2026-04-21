import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getDictionary } from "@/i18n";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nhà Nàng Nails",
  description: "Trải nghiệm làm móng và gội đầu tại Nhà Nàng Nails. Không gian sang trọng, dịch vụ chuyên nghiệp.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${playfair.variable} ${lato.variable} font-body bg-white text-gray-800 antialiased`}>
        <Navbar dict={dict.navbar} lang={lang} />
        {children}
        <Footer dict={dict.footer} />
      </body>
    </html>
  );
}
