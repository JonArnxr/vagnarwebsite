import Link from "next/link";

const features = [
  {
    title: "Kæling og frysting",
    description: "Möguleiki á kæli- og frystikerfum fyrir viðkvæmar vörur",
  },
  {
    title: "Hliðaropnun",
    description: "Fjölbreyttir möguleikar á hliðaropnun fyrir auðvelda fermingu",
  },
  {
    title: "Vörulyftur",
    description: "Uppsett með Dhollandia vörulyftum fyrir skilvirka affermingu",
  },
  {
    title: "Sérsmíðað",
    description: "Allar lausnir aðlagaðar að þínum þörfum og þínum bíl",
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
              fyrir flutningabíla
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-2xl">
              Vörukassar frá Vögnum & Þjónustu eru hannaðir með íslenskar aðstæður í huga
              þar sem styrkur, ending og áreiðanleiki skipta öllu máli.
            </p>
          </div>
        </div>
      </section>

      {/* Features — Full width horizontal scroll feel */}
      <section className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Framleiðum eftir þínum þörfum</h2>
            <p className="text-stone-400 mt-4 text-lg">
              Sérsmíðaðar lausnir fyrir flutningabíla og sendibíla, byggðar á áratuga reynslu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={feature.title} className={`rounded-3xl p-8 border border-white/5 flex flex-col justify-between min-h-[180px] ${index === 0 ? 'bg-gradient-to-br from-blue-600/20 to-blue-900/10' : 'bg-stone-800/80'}`}>
                <span className="text-stone-500 text-sm font-mono">0{index + 1}</span>
                <div className="mt-auto">
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-stone-800/60 rounded-3xl p-8 md:p-12 border border-white/5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Verðupplýsingar</h3>
                <p className="text-stone-400 max-w-lg">
                  Hver vörukassi er sérsmíðaður að þörfum viðskiptavinar.
                  Hafðu samband við okkur fyrir nákvæmt verðmat.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300 flex-shrink-0"
              >
                Fá tilboð
              </Link>
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
              <span className="inline-block text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Sérlausn</span>
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
