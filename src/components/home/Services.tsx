import { Sparkles, Palette, Flower2, HeartHandshake } from "lucide-react";

export default function Services({ dict }: { dict: any }) {
  const icons = [
    <Sparkles className="w-12 h-12 text-[var(--color-primary)]" />,
    <Palette className="w-12 h-12 text-[var(--color-primary)]" />,
    <Flower2 className="w-12 h-12 text-[var(--color-primary)]" />,
    <HeartHandshake className="w-12 h-12 text-[var(--color-primary)]" />,
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-800">
        {dict.title}
      </h2>
      <p className="text-gray-500 mb-16 max-w-2xl mx-auto text-lg">{dict.subtitle}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {dict.items.map((svc: any, index: number) => (
          <div
            key={index}
            className="bg-white p-10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 border-b-4 border-transparent hover:border-[var(--color-primary)] flex flex-col items-center group"
          >
            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
              {icons[index % icons.length]}
            </div>
            <h3 className="text-xl font-bold mb-4 font-heading">{svc.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
