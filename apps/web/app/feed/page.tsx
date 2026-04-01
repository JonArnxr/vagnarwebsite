import { getPosts } from '@/lib/sanity';
import { urlFor } from '@/lib/sanityImage';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 60;

export default async function FeedPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-stone-900 text-white py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#44403c_1px,transparent_1px),linear-gradient(to_bottom,#44403c_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-full mb-6">
              <span className="text-blue-300 text-sm font-medium tracking-wide">Fréttir</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Fréttir og<br />
              <span className="gradient-text">verkefni</span>
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed max-w-2xl">
              Fylgstu með nýjustu fréttum og verkefnum frá Vögnum & Þjónustu.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {posts.map((post) => {
                const firstImage = post.images?.[0];

                return (
                  <Link
                    key={post._id}
                    href={`/posts/${post._id}`}
                    className="group bg-stone-800 overflow-hidden rounded-2xl card-hover border border-stone-700/50"
                  >
                    {firstImage ? (
                      <div className="relative w-full aspect-[16/10] bg-stone-200 overflow-hidden">
                        <Image
                          src={urlFor(firstImage).width(600).height(400).url()}
                          alt={post.title}
                          fill
                          className="object-cover img-zoom"
                        />
                      </div>
                    ) : (
                      <div className="w-full aspect-[16/10] bg-stone-100 flex items-center justify-center">
                        <span className="text-stone-400">Engin mynd</span>
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
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-stone-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Engar fréttir enn</h2>
              <p className="text-stone-400">Fréttir og verkefni birtast hér þegar þau eru tilbúin.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
