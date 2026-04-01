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
      <section className="relative bg-stone-900 text-white py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#44403c_1px,transparent_1px),linear-gradient(to_bottom,#44403c_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-4 py-2 mb-6">
              <span className="text-blue-400 text-sm font-medium tracking-wide">Dhollandia dreifingaraðili</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Vörulyftur frá<br />
              <span className="text-blue-500">Dhollandia</span>
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-2xl">
              Við erum viðurkenndur Dhollandia dreifingaraðili á Íslandi og bjóðum upp á 
              sölu, uppsetningu og þjónustu á öllum tegundum vörulyfta.
            </p>
          </div>
        </div>
      </section>

      {/* About Dhollandia */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Um Dhollandia</h2>
              <div className="text-stone-600 space-y-4 leading-relaxed">
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
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition-colors"
                >
                  Fá tilboð
                </Link>
                <a
                  href="https://www.dhollandia.com/IS/en/8/category/33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-stone-200 text-stone-900 px-6 py-3 font-semibold hover:bg-stone-300 transition-colors"
                >
                  Sjá dhollandia.com
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-stone-900 aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <span className="text-blue-500 text-4xl font-bold tracking-wider">DHOLLANDIA</span>
                <p className="text-stone-400 mt-2 text-sm">Viðurkenndur dreifingaraðili á Íslandi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lift Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Tegundir vörulyfta</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Við bjóðum upp á allar tegundir Dhollandia vörulyfta og aðstoðum þig við að 
              velja réttu lyftuna fyrir þínar þarfir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liftTypes.map((lift) => (
              <div key={lift.name} className="bg-stone-100 p-8">
                <h3 className="text-xl font-bold text-stone-900 mb-3">{lift.name}</h3>
                <p className="text-stone-600 mb-4">{lift.description}</p>
                <ul className="space-y-2">
                  {lift.features.map((feature) => (
                    <li key={feature} className="flex items-center text-stone-700 text-sm">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Þjónusta okkar</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Við bjóðum upp á heildstæða þjónustu fyrir vörulyftur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-stone-900 mb-2">Sala</h3>
              <p className="text-stone-600 text-sm">
                Söluráðgjöf og tilboð á allar tegundir Dhollandia vörulyfta
              </p>
            </div>
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-stone-900 mb-2">Uppsetning</h3>
              <p className="text-stone-600 text-sm">
                Fagleg uppsetning á öllum tegundum vörulyfta á flutningabíla
              </p>
            </div>
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="font-bold text-stone-900 mb-2">Viðhald og viðgerðir</h3>
              <p className="text-stone-600 text-sm">
                Reglulegt viðhald og viðgerðir á öllum tegundum vörulyfta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Þarftu vörulyftu á bílinn þinn?
          </h2>
          <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
            Við hjálpum þér að velja réttu lyftuna og sjáum um uppsetningu og þjónustu.
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
