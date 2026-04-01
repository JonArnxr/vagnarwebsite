import { getPosts } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60;

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-stone-900 text-white overflow-hidden">
        <video
          src="/videos/winglinervideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-40">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-full mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-blue-300 text-sm font-medium tracking-wide">Áratuga reynsla og áreiðanleiki</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
              Sérsmíðaðar lausnir<br/>
              <span className="gradient-text">fyrir íslenskar aðstæður</span>
            </h1>
            <p className="text-xl text-stone-300 mb-10 leading-relaxed max-w-2xl">
              Kerrur, vörukassar og vörulyftur hannaðar með gæði og endingu í fyrirrúmi.
              Sölu- og þjónustuaðili fyrir Dhollandia vörulyftur á Íslandi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Hafðu samband
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Skoða vörur
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 lg:py-32 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-900 to-slate-900/20"></div>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Hvað bjóðum við</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Vöruframboð</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-stone-400 max-w-2xl mx-auto">
                Vandaðar lausnir fyrir hestaflutninga og atvinnuflutningabíla
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
              {/* Kerrur */}
              <Link href="/hestakerrur" className="group relative bg-stone-800/50 backdrop-blur-sm aspect-[4/3] overflow-hidden rounded-2xl glow-hover border border-stone-700/30 hover:border-blue-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500 z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                  <div className="mb-3">
                    <span className="text-blue-400 text-sm font-semibold tracking-wider">01</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">Kerrur</h3>
                  <p className="text-stone-400 mb-4 text-sm leading-relaxed">
                    Hannaðar með velferð hestsins og öryggi í forgrunni
                  </p>
                  <div className="flex items-center text-blue-400 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Skoða nánar
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Vörukassar */}
              <Link href="/vorukassar" className="group relative bg-stone-800/50 backdrop-blur-sm aspect-[4/3] overflow-hidden rounded-2xl glow-hover border border-stone-700/30 hover:border-blue-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-800/60 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500 z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                  <div className="mb-3">
                    <span className="text-blue-400 text-sm font-semibold tracking-wider">02</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">Vörukassar</h3>
                  <p className="text-stone-400 mb-4 text-sm leading-relaxed">
                    Sérsmíðaðar lausnir fyrir flutningabíla og sendibíla
                  </p>
                  <div className="flex items-center text-blue-400 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Skoða nánar
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Vörulyftur */}
              <Link href="/voruliftur" className="group relative bg-stone-800/50 backdrop-blur-sm aspect-[4/3] overflow-hidden rounded-2xl glow-hover border border-stone-700/30 hover:border-blue-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-700/60 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500 z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                  <div className="mb-3">
                    <span className="text-blue-400 text-sm font-semibold tracking-wider">03</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">Vörulyftur</h3>
                  <p className="text-stone-400 mb-4 text-sm leading-relaxed">
                    Dhollandia vörulyftur - viðurkenndur dreifingaraðili
                  </p>
                  <div className="flex items-center text-blue-400 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Skoða nánar
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Þjónusta */}
              <Link href="/thjonusta" className="group relative bg-stone-800/50 backdrop-blur-sm aspect-[4/3] overflow-hidden rounded-2xl glow-hover border border-stone-700/30 hover:border-blue-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-600/60 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500 z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                  <div className="mb-3">
                    <span className="text-blue-400 text-sm font-semibold tracking-wider">04</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">Þjónusta</h3>
                  <p className="text-stone-400 mb-4 text-sm leading-relaxed">
                    Faglegt ráðgjöf og þjónusta allan ársins hring
                  </p>
                  <div className="flex items-center text-blue-400 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Skoða nánar
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      {/* News Section */}
      {posts.length > 0 && (
        <section className="py-24 bg-stone-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-stone-900 to-stone-900"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
                <div>
                  <span className="inline-block text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Nýjast</span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Fréttir & Verkefni</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>
                <Link href="/feed" className="text-blue-400 font-medium hover:text-blue-300 inline-flex items-center group">
                  Sjá allar fréttir
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
                {posts.slice(0, 3).map((post) => {
                  const firstImage = post.images?.[0];

                  return (
                    <Link
                      key={post._id}
                      href={`/posts/${post._id}`}
                      className="group bg-stone-800/50 backdrop-blur-sm overflow-hidden rounded-2xl hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-500 border border-stone-700/30 hover:border-stone-600/50"
                    >
                      {firstImage && (
                        <div className="relative w-full aspect-[16/10] bg-stone-800 overflow-hidden">
                          <Image
                            src={urlFor(firstImage).width(600).height(400).url()}
                            alt={post.title}
                            fill
                            className="object-cover img-zoom"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <time className="text-sm text-stone-500 font-medium">
                          {new Date(post.publishedAt).toLocaleDateString('is-IS', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        <h3 className="text-lg font-bold mb-2 text-white mt-2 group-hover:text-blue-400 transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-stone-400 text-sm leading-relaxed line-clamp-2">
                          {post.caption}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Þarftu ráðgjöf eða tilboð?
              </h2>
              <p className="text-lg text-stone-400 mb-10 leading-relaxed">
                Við erum tilbúin að aðstoða þig við að finna réttu lausnina fyrir þínar þarfir.
                Hafðu samband og við svörum eins fljótt og auðið er.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors duration-300">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-stone-500">Sími</div>
                    <a href="tel:5673440" className="text-lg text-white font-medium hover:text-blue-400 transition-colors duration-300">567-3440</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors duration-300">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-stone-500">Netfang</div>
                    <a href="mailto:vagnar@vagnar.is" className="text-lg text-white font-medium hover:text-blue-400 transition-colors duration-300">vagnar@vagnar.is</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors duration-300">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-stone-500">Opnunartími</div>
                    <div className="text-lg text-white font-medium">Mán-Fös 08:00-16:00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10">
              <h3 className="text-xl font-bold text-white mb-6">Sendu fyrirspurn</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nafn"
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Netfang"
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
                />
                <input
                  type="tel"
                  placeholder="Sími"
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
                />
                <textarea
                  placeholder="Skilaboð"
                  rows={4}
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300"
                >
                  Senda fyrirspurn
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
