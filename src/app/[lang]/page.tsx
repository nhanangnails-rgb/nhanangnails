import HeroSlider from "@/components/home/HeroSlider";
import Services from "@/components/home/Services";
import MenuCombos from "@/components/home/MenuCombos";
import Gallery from "@/components/home/Gallery";
import LatestBlogs from "@/components/home/LatestBlogs";
import LocationContact from "@/components/home/LocationContact";
import { getDictionary } from "@/i18n";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <main className="min-h-screen">
      <HeroSlider dict={dict.hero} />
      <Services dict={dict.services} />
      <MenuCombos dict={dict.combos} />
      <Gallery dict={dict.gallery} />
      <LatestBlogs dict={dict.homeBlog} lang={resolvedParams.lang} />
      <LocationContact dict={dict.location} />
    </main>
  );
}
