import Link from "next/link";

const services = [
  {
    title: "Viðgerðir",
    description: "Viðgerðir á hestakerrur, vörukassa og vörulyftum. Fljótleg og fagleg þjónusta.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Viðhald",
    description: "Reglulegt viðhald til að tryggja öruggan og áreiðanlegan rekstur.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Varahlutir",
    description: "Breitt úrval af varahlutum á lager eða með stuttum afgreiðslutíma.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Skoðun",
    description: "Ítarleg skoðun á ástandi og mat á viðhaldsþörf.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
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
      <section className="relative bg-stone-900 text-white py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#44403c_1px,transparent_1px),linear-gradient(to_bottom,#44403c_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-4 py-2 mb-6">
              <span className="text-blue-400 text-sm font-medium tracking-wide">Þjónusta</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Fagleg þjónusta<br />
              <span className="text-blue-500">og viðhald</span>
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-2xl">
              Við bjóðum upp á heildstæða þjónustu fyrir hestakerrur, vörukassa og vörulyftur. 
              Áratuga reynsla og faglegt starfsfólk tryggir gæðaþjónustu.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Þjónustuframboð</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Við bjóðum upp á fjölbreytta þjónustu til að halda búnaðinum þínum í góðu ástandi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-8 flex gap-6">
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{service.title}</h3>
                  <p className="text-stone-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Hvernig við vinnum</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Einföld ferli sem tryggir góða þjónustu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <div key={item.step} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-stone-200"></div>
                )}
                <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold relative z-10">
                  {item.step}
                </div>
                <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Opnunartímar verkstæðis</h2>
              <div className="bg-white divide-y divide-stone-200">
                <div className="flex justify-between p-4">
                  <span className="font-medium text-stone-900">Mánudagur - Fimmtudagur</span>
                  <span className="text-stone-600">08:00 - 16:00</span>
                </div>
                <div className="flex justify-between p-4">
                  <span className="font-medium text-stone-900">Föstudagur</span>
                  <span className="text-stone-600">08:00 - 15:00</span>
                </div>
                <div className="flex justify-between p-4">
                  <span className="font-medium text-stone-900">Laugardagur - Sunnudagur</span>
                  <span className="text-stone-600">Lokað</span>
                </div>
              </div>
              <p className="mt-4 text-stone-600 text-sm">
                * Neyðarþjónusta í boði utan opnunartíma - hringdu í 567-3440
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Staðsetning</h2>
              <div className="bg-white p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">Tunguháls 10</h3>
                    <p className="text-stone-600">110 Reykjavík</p>
                  </div>
                </div>
                <a
                  href="https://ja.is/vagnar-og-thjonusta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Sjá á korti
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note about more info */}
      <section className="py-12 bg-blue-50 border-y border-blue-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-800">
            <strong>Athugið:</strong> Frekari upplýsingar og myndir af þjónustu okkar eru væntanlegar. 
            Hafðu endilega samband ef þú hefur spurningar.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Þarftu þjónustu eða viðhald?
          </h2>
          <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
            Hafðu samband við okkur og við aðstoðum þig eins fljótt og auðið er.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 font-semibold hover:bg-blue-700 transition-colors"
            >
              Hafðu samband
            </Link>
            <a
              href="tel:5673440"
              className="inline-flex items-center justify-center bg-stone-800 text-white border border-stone-700 px-8 py-4 font-semibold hover:bg-stone-700 transition-colors"
            >
              Hringdu: 567-3440
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
