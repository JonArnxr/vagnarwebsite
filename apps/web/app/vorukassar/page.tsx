import Link from "next/link";

const features = [
  {
    title: "Kæling og frysting",
    description: "Möguleiki á kæli- og frystikerfum fyrir viðkvæmar vörur",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Hliðaropnun",
    description: "Fjölbreyttir möguleikar á hliðaropnun fyrir auðvelda fermingu",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Vörulyftur",
    description: "Uppsett með Dhollandia vörulyftum fyrir skilvirka affermingu",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
  },
  {
    title: "Sérsmíðað",
    description: "Allar lausnir aðlagaðar að þínum þörfum og þínum bíl",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function VorukassarPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-stone-900 text-white py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#44403c_1px,transparent_1px),linear-gradient(to_bottom,#44403c_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-full mb-6">
              <span className="text-blue-300 text-sm font-medium tracking-wide">Vörukassar</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Sérsmíðaðir vörukassar<br />
              <span className="gradient-text">fyrir flutningabíla</span>
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-2xl">
              Vörukassar frá Vögnum & Þjónustu eru hannaðir með íslenskar aðstæður í huga
              þar sem styrkur, ending og áreiðanleiki skipta öllu máli.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Framleiðum eftir þínum þörfum</h2>
              <div className="text-stone-400 space-y-4 leading-relaxed">
                <p>
                  Við framleiðum sérsmíðaðar lausnir fyrir flutningabíla og sendibíla,
                  með möguleika á kælingu, frystingu, hliðaropnun og vörulyftum eftir þínum þörfum.
                </p>
                <p>
                  Hvort sem um er að ræða daglega dreifingu eða sérhæfða flutninga tryggja
                  vörukassarnir okkar öruggan og skilvirkan flutning - byggðir á áratuga reynslu
                  og stöðugri þróun.
                </p>
              </div>

              <div className="mt-8 bg-blue-600/10 border-l-4 border-blue-500 rounded-r-xl p-6">
                <h3 className="font-bold text-white mb-2">Verðupplýsingar</h3>
                <p className="text-stone-400 text-sm">
                  Vegna þess að hver vörukassi er sérsmíðaður að þörfum viðskiptavinar
                  bjóðum við ekki upp á verðlista. Hafðu samband við okkur fyrir nákvæmt
                  verðmat byggt á þínum óskum.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 stagger-children">
              {features.map((feature) => (
                <div key={feature.title} className="bg-stone-800 rounded-2xl p-6 card-hover border border-stone-700/50">
                  <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-stone-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wingliner Section */}
      <section className="py-16 bg-stone-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-stone-900 aspect-video rounded-2xl flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>
              <div className="text-center p-8 relative">
                <span className="gradient-text text-4xl font-bold">WINGLINER</span>
                <p className="text-stone-400 mt-2">Hámarks aðgengi og skilvirkni</p>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-5 py-2.5 rounded-full mb-6">
                <span className="text-blue-700 text-sm font-medium tracking-wide">Sérlausn</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Wingliner lausn</h2>
              <p className="text-stone-400 mb-6 leading-relaxed">
                Fyrir hámarks aðgengi og skilvirkni bjóðum við upp á Wingliner lausn,
                þar sem hliðar kassans opnast upp í heilu lagi.
              </p>
              <p className="text-stone-400 mb-6 leading-relaxed">
                Þetta flýtir verulega fyrir fermingu og affermingu og er sérstaklega
                hentugt fyrir dreifingu þar sem tími og aðgengi skipta sköpum.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300"
                >
                  Fá tilboð
                </Link>
                <a
                  href="https://wingliner.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-stone-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-stone-700 transition-all duration-300"
                >
                  Sjá wingliner.com
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Þarftu sérsmíðaðan vörukassa?
          </h2>
          <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
            Við höfum áratuga reynslu af því að smíða vörukassa fyrir íslenskan markað.
            Láttu okkur vita af þínum þörfum og við finnum lausnina.
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
