import Link from "next/link";

const services = [
  {
    title: "Viðgerðir",
    description: "Viðgerðir á hestakerrur, vörukassa og vörulyftum. Fljótleg og fagleg þjónusta.",
  },
  {
    title: "Viðhald",
    description: "Reglulegt viðhald til að tryggja öruggan og áreiðanlegan rekstur.",
  },
  {
    title: "Varahlutir",
    description: "Breitt úrval af varahlutum á lager eða með stuttum afgreiðslutíma.",
  },
  {
    title: "Skoðun",
    description: "Ítarleg skoðun á ástandi og mat á viðhaldsþörf.",
  },
];

const processSteps = [
  { step: "01", title: "Hafðu samband", description: "Hringdu eða sendu okkur línu" },
  { step: "02", title: "Mat á þörf", description: "Við metum stöðuna og leggjum til lausn" },
  { step: "03", title: "Tilboð", description: "Þú færð skriflegt tilboð" },
  { step: "04", title: "Framkvæmd", description: "Við ljúkum verkinu faglega" },
];

export default function ThjonustaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-stone-900 text-white py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#44403c_1px,transparent_1px),linear-gradient(to_bottom,#44403c_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-full mb-6">
              <span className="text-blue-300 text-sm font-medium tracking-wide">Þjónusta</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Fagleg þjónusta<br />
              og viðhald
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-2xl">
              Við bjóðum upp á heildstæða þjónustu fyrir hestakerrur, vörukassa og vörulyftur.
              Áratuga reynsla og faglegt starfsfólk tryggir gæðaþjónustu.
            </p>
          </div>
        </div>
      </section>

      {/* Services — Bento style */}
      <section className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-16">Þjónustuframboð</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large featured service */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-600/20 to-blue-900/10 rounded-3xl p-10 border border-white/5 min-h-[160px] flex flex-col justify-between">
              <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">Viðgerðir</span>
              <div>
                <h3 className="text-3xl font-bold text-white mt-4 mb-3">Fljótleg og fagleg þjónusta</h3>
                <p className="text-stone-300 text-lg max-w-lg">
                  Viðgerðir á hestakerrur, vörukassa og vörulyftum. Áratuga reynsla og faglegt starfsfólk.
                </p>
              </div>
            </div>

            <div className="bg-stone-800/80 rounded-3xl p-8 border border-white/5 min-h-[160px] flex flex-col justify-between">
              <span className="text-stone-500 text-sm font-medium uppercase tracking-widest">Viðhald</span>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Reglulegt viðhald</h3>
                <p className="text-stone-400">Tryggir öruggan og áreiðanlegan rekstur til lengri tíma.</p>
              </div>
            </div>

            <div className="bg-stone-800/80 rounded-3xl p-8 border border-white/5 min-h-[180px] flex flex-col justify-between">
              <span className="text-stone-500 text-sm font-medium uppercase tracking-widest">Varahlutir</span>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Á lager</h3>
                <p className="text-stone-400">Breitt úrval af varahlutum með stuttum afgreiðslutíma.</p>
              </div>
            </div>

            <div className="md:col-span-2 bg-stone-800/80 rounded-3xl p-10 border border-white/5 min-h-[180px] flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-stone-500 text-sm font-medium uppercase tracking-widest">Skoðun</span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-2">Ítarleg ástandsskoðun</h3>
                <p className="text-stone-400 max-w-md">Mat á viðhaldsþörf og ráðgjöf um bestu lausn.</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300 flex-shrink-0"
              >
                Bóka skoðun
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process — Horizontal steps */}
      <section className="py-24 bg-stone-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Hvernig við vinnum</h2>
            <p className="text-stone-400 mt-4 text-lg">Einföld ferli sem tryggir góða þjónustu</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {processSteps.map((item, index) => (
              <div key={item.step} className={`rounded-3xl p-8 border border-white/5 min-h-[160px] flex flex-col justify-between ${index === 0 ? 'bg-gradient-to-br from-blue-600/20 to-blue-900/10' : 'bg-stone-800/80'}`}>
                <span className={`text-4xl font-bold ${index === 0 ? 'text-blue-400' : 'text-white/20'}`}>{item.step}</span>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                  <p className="text-stone-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-stone-800/80 rounded-3xl p-10 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-8">Opnunartímar verkstæðis</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="font-medium text-white">Mánudagur — Föstudagur</span>
                  <span className="text-stone-400">08:00 – 16:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-white">Laugardagur — Sunnudagur</span>
                  <span className="text-stone-400">Lokað</span>
                </div>
              </div>
              <p className="mt-6 text-stone-500 text-sm">
                Neyðarþjónusta í boði utan opnunartíma — hringdu í 567-3440
              </p>
            </div>

            <div className="bg-stone-800/80 rounded-3xl overflow-hidden border border-white/5">
              <div className="p-10">
                <h2 className="text-2xl font-bold text-white mb-2">Staðsetning</h2>
                <p className="text-stone-400 text-lg">Tunguháls 10, 110 Reykjavík</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1740.5!2d-21.8567!3d64.1143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674cb64b1c2e5%3A0x8a455e69e4242a9a!2sTunguh%C3%A1ls%2010%2C%20110%20Reykjav%C3%ADk!5e0!3m2!1sis!2sis!4v1700000000000"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-blue-600/10 border-y border-blue-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300">
            <strong>Athugið:</strong> Frekari upplýsingar og myndir af þjónustu okkar eru væntanlegar.
            Hafðu endilega samband ef þú hefur spurningar.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Þarftu þjónustu eða viðhald?
          </h2>
          <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
            Hafðu samband við okkur og við aðstoðum þig eins fljótt og auðið er.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300"
            >
              Hafðu samband
            </Link>
            <a
              href="tel:5673440"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Hringdu: 567-3440
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
