import Link from "next/link";

const liftTypes = [
  {
    name: "Fold lifts",
    description: "Hentugar fyrir sendibíla og minni flutningabíla. Fellast saman þegar ekki í notkun.",
    features: ["Létt og þægileg", "Auðvelt að nýta", "Hagkvæm lausn"],
  },
  {
    name: "Retractable lifts",
    description: "Innfellanleg lyfta sem hverfur undir kassann þegar ekki í notkun.",
    features: ["Snyrtileg framkoma", "Hámarks lestarpláss", "Fyrir sérhæfðar þarfir"],
  },
  {
    name: "Slider lifts",
    description: "Rennilyftur sem gefa hámarks sveigjanleika við fermingu og affermingu.",
    features: ["Mikil burðargeta", "Fjölhæfar", "Fyrir stóra bíla"],
  },
  {
    name: "Column lifts",
    description: "Súlulyftur fyrir þunga notkun og stóra flutningabíla.",
    features: ["Mjög sterkar", "Mikil burðargeta", "Endingarnar"],
  },
];

export default function VorulifturPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-stone-900 text-white py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#44403c_1px,transparent_1px),linear-gradient(to_bottom,#44403c_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-full mb-6">
              <span className="text-blue-300 text-sm font-medium tracking-wide">Dhollandia dreifingaraðili</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Vörulyftur frá<br />
              Dhollandia
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-2xl">
              Við erum viðurkenndur Dhollandia dreifingaraðili á Íslandi og bjóðum upp á
              sölu, uppsetningu og þjónustu á öllum tegundum vörulyfta.
            </p>
          </div>
        </div>
      </section>

      {/* About Dhollandia */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Um Dhollandia</h2>
              <div className="text-stone-400 space-y-4 leading-relaxed">
                <p>
                  Dhollandia er einn stærsti framleiðandi vörulyfta í Evrópu með áratuga reynslu
                  og framúrskarandi orðspor fyrir gæði og áreiðanleika.
                </p>
                <p>
                  Vörulyftur Dhollandia eru þekktar fyrir sterka byggingu, einfalt viðhald
                  og langan endingartíma - eiginleikar sem skipta sköpum á íslenskum markaði.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300"
                >
                  Fá tilboð
                </Link>
                <a
                  href="https://www.dhollandia.com/IS/en/8/category/33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-stone-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-stone-700 transition-all duration-300"
                >
                  Sjá dhollandia.com
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-stone-900 aspect-video rounded-2xl flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>
              <div className="text-center p-8 relative">
                <span className="gradient-text text-4xl font-bold tracking-wider">DHOLLANDIA</span>
                <p className="text-stone-400 mt-2 text-sm">Viðurkenndur dreifingaraðili á Íslandi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lift Types — Alternating large cards */}
      <section className="py-24 bg-stone-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Tegundir vörulyfta</h2>
            <p className="text-stone-400 mt-4 text-lg max-w-2xl">
              Við bjóðum upp á allar tegundir Dhollandia vörulyfta og aðstoðum þig við að
              velja réttu lyftuna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First card — spans 2 cols */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-600/20 to-blue-900/10 rounded-3xl p-10 border border-white/5 min-h-[200px] flex flex-col justify-between">
              <div>
                <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">{liftTypes[0].name}</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mt-3">{liftTypes[0].description}</h3>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                {liftTypes[0].features.map((f) => (
                  <span key={f} className="bg-white/10 text-white text-sm px-4 py-2 rounded-full">{f}</span>
                ))}
              </div>
            </div>

            {/* Second card */}
            <div className="bg-stone-800/80 rounded-3xl p-8 border border-white/5 min-h-[200px] flex flex-col justify-between">
              <span className="text-stone-500 text-sm font-medium uppercase tracking-widest">{liftTypes[1].name}</span>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{liftTypes[1].description}</h3>
                <div className="flex flex-wrap gap-2">
                  {liftTypes[1].features.map((f) => (
                    <span key={f} className="text-stone-400 text-sm">{f} ·</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Third card */}
            <div className="bg-stone-800/80 rounded-3xl p-8 border border-white/5 min-h-[180px] flex flex-col justify-between">
              <span className="text-stone-500 text-sm font-medium uppercase tracking-widest">{liftTypes[2].name}</span>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{liftTypes[2].description}</h3>
                <div className="flex flex-wrap gap-2">
                  {liftTypes[2].features.map((f) => (
                    <span key={f} className="text-stone-400 text-sm">{f} ·</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Fourth card — spans 2 cols */}
            <div className="md:col-span-2 bg-stone-800/80 rounded-3xl p-10 border border-white/5 min-h-[180px] flex flex-col justify-between">
              <span className="text-stone-500 text-sm font-medium uppercase tracking-widest">{liftTypes[3].name}</span>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{liftTypes[3].description}</h3>
                <div className="flex flex-wrap gap-3">
                  {liftTypes[3].features.map((f) => (
                    <span key={f} className="bg-white/10 text-white text-sm px-4 py-2 rounded-full">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services — Three pillars */}
      <section className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-16">Þjónusta okkar</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-b from-stone-800/80 to-stone-900 rounded-3xl p-10 border border-white/5 min-h-[200px] flex flex-col justify-between group hover:border-blue-500/20 transition-colors">
              <span className="text-6xl font-bold text-white/10 group-hover:text-blue-400/20 transition-colors">01</span>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Sala</h3>
                <p className="text-stone-400 leading-relaxed">
                  Söluráðgjöf og tilboð á allar tegundir Dhollandia vörulyfta
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-stone-800/80 to-stone-900 rounded-3xl p-10 border border-white/5 min-h-[200px] flex flex-col justify-between group hover:border-blue-500/20 transition-colors">
              <span className="text-6xl font-bold text-white/10 group-hover:text-blue-400/20 transition-colors">02</span>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Uppsetning</h3>
                <p className="text-stone-400 leading-relaxed">
                  Fagleg uppsetning á öllum tegundum vörulyfta á flutningabíla
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-stone-800/80 to-stone-900 rounded-3xl p-10 border border-white/5 min-h-[200px] flex flex-col justify-between group hover:border-blue-500/20 transition-colors">
              <span className="text-6xl font-bold text-white/10 group-hover:text-blue-400/20 transition-colors">03</span>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Viðhald og viðgerðir</h3>
                <p className="text-stone-400 leading-relaxed">
                  Reglulegt viðhald og viðgerðir á öllum tegundum vörulyfta
                </p>
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
            Þarftu vörulyftu á bílinn þinn?
          </h2>
          <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
            Við hjálpum þér að velja réttu lyftuna og sjáum um uppsetningu og þjónustu.
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
