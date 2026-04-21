import { MapPin, Clock, Phone, Map } from "lucide-react";

export default function LocationContact({ dict }: { dict: any }) {
  return (
    <section id="location" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-800">
            {dict.title}
          </h2>
          <p className="text-gray-500 text-lg">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <div className="space-y-8 p-10 bg-gray-50 rounded-3xl border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-[var(--color-primary)]/10 p-4 rounded-2xl shrink-0">
                <MapPin className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-gray-800">{dict.addressTitle}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {dict.addressVal}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[var(--color-primary)]/10 p-4 rounded-2xl shrink-0">
                <Clock className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-gray-800">{dict.openTitle}</h4>
                <p className="text-gray-600">{dict.openVal}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[var(--color-primary)]/10 p-4 rounded-2xl shrink-0">
                <Phone className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-gray-800">{dict.phoneTitle}</h4>
                <p className="text-gray-600 font-bold text-lg">{dict.phoneVal}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.facebook.com/NhaNangNails" target="_blank" className="bg-[#1877F2]/10 p-4 rounded-2xl hover:bg-[#1877F2]/20 transition-colors cursor-pointer group">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1877F2] group-hover:scale-110 transition-transform"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/nhanang.nails.beauty/" target="_blank" className="bg-[#E4405F]/10 p-4 rounded-2xl hover:bg-[#E4405F]/20 transition-colors cursor-pointer group">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E4405F] group-hover:scale-110 transition-transform"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <div className="font-bold text-xl mb-2 text-gray-800">
                {dict.socialsTitle}
              </div>
            </div>

            <a
              href="https://m.me/nhanangnails"
              target="_blank"
              className="mt-8 block text-center bg-gray-800 text-white font-bold uppercase tracking-wider py-4 rounded-xl hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300 w-full"
            >
              {dict.bookButton}
            </a>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-lg border-4 border-white relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.271388292547!2d106.70772107681061!3d10.79051428935913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293d6b33ba89%3A0xa9b63b2892abac9b!2zTmjDoCBOw6BuZyBOYWlscyAmIEJlYXV0eSAtIELDrG5oIFRo4bqhbmg!5e0!3m2!1sen!2s!4v1776415927224!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.2)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
