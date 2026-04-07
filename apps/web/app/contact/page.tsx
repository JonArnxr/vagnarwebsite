
export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-stone-900 text-white py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#44403c_1px,transparent_1px),linear-gradient(to_bottom,#44403c_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-full mb-6">
              <span className="text-blue-300 text-sm font-medium tracking-wide">Samband</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Hafðu samband á<br />
              við okkur
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-2xl">
              Við hlökkum til að heyra frá þér. Sendu okkur línu eða hringdu og við svörum eins fljótt og auðið er.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-stone-800 rounded-2xl p-8 border border-stone-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Sendu okkur skilaboð</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-2">
                      Nafn *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-stone-600 rounded-xl bg-stone-700/50 text-white placeholder-stone-400 focus:outline-none focus:border-blue-500 focus:bg-stone-700 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300"
                      placeholder="Fullt nafn"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-300 mb-2">
                      Sími
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-stone-600 rounded-xl bg-stone-700/50 text-white placeholder-stone-400 focus:outline-none focus:border-blue-500 focus:bg-stone-700 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300"
                      placeholder="000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-2">
                    Netfang *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-stone-600 rounded-xl bg-stone-700/50 text-white placeholder-stone-400 focus:outline-none focus:border-blue-500 focus:bg-stone-700 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300"
                    placeholder="netfang@example.is"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-300 mb-2">
                    Efni
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-stone-600 rounded-xl bg-stone-700/50 text-white placeholder-stone-400 focus:outline-none focus:border-blue-500 focus:bg-stone-700 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300"
                  >
                    <option value="">Veldu efni...</option>
                    <option value="hestakerrur">Kerrur</option>
                    <option value="vorukassar">Vörukassar</option>
                    <option value="voruliftur">Vörulyftur</option>
                    <option value="thjonusta">Þjónusta/Viðgerðir</option>
                    <option value="annad">Annað</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-2">
                    Skilaboð *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-stone-600 rounded-xl bg-stone-700/50 text-white placeholder-stone-400 focus:outline-none focus:border-blue-500 focus:bg-stone-700 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 resize-none"
                    placeholder="Segðu okkur frá þínum þörfum..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300"
                >
                  Senda skilaboð
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 stagger-children">
              <div className="bg-stone-800 rounded-2xl p-8 border border-stone-700/50">
                <h2 className="text-2xl font-bold text-white mb-6">Tengiliðaupplýsingar</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Staðsetning</h3>
                      <p className="text-stone-400">Tunguháls 10</p>
                      <p className="text-stone-400">110 Reykjavík</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-stone-500 text-sm">Sími</div>
                      <a href="tel:5673440" className="text-blue-600 hover:text-blue-500 font-medium transition-colors duration-300">567-3440</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-stone-500 text-sm">Netfang</div>
                      <a href="mailto:vagnar@vagnar.is" className="text-blue-600 hover:text-blue-500 font-medium transition-colors duration-300">vagnar@vagnar.is</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Opnunartími</h3>
                      <p className="text-stone-400">Mánudagur - Föstudagur</p>
                      <p className="text-stone-400">08:00 - 16:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-stone-900 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"></div>
                <h3 className="font-bold text-lg mb-4 relative">Finndu okkur</h3>
                <p className="text-stone-400 mb-4 relative">
                  Við erum staðsett í Tunguhálsi 10 í Reykjavík. Komdu í heimsókn á opnunartíma.
                </p>
                <a
                  href="https://ja.is/vagnar-og-thjonusta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
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
    </div>
  );
}
