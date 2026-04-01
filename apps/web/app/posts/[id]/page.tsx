import { getPostById, getPosts } from '@/lib/sanity';
import { urlFor } from '@/lib/sanityImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ImageCarousel from './ImageCarousel';
import ShareButtons from './ShareButtons';

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    id: post._id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPostById(id);
  
  if (!post) {
    return {
      title: 'Færsla fannst ekki',
    };
  }

  return {
    title: `${post.title} - Vagnar & Þjónusta`,
    description: post.caption,
    openGraph: {
      title: post.title,
      description: post.caption,
      images: post.images?.[0] ? [urlFor(post.images[0]).width(1200).height(630).url()] : [],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Back Button */}
      <div className="bg-stone-800 border-b border-stone-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link href="/feed" className="inline-flex items-center text-stone-400 hover:text-white transition-colors text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Til baka í fréttir
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="bg-stone-900 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <time className="text-sm text-stone-500 font-medium">
              {new Date(post.publishedAt).toLocaleDateString('is-IS', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Images */}
          {post.images && post.images.length > 0 && (
            <ImageCarousel images={post.images} title={post.title} />
          )}

          {/* Description */}
          <div className="max-w-3xl mb-10">
            <p className="text-lg text-stone-700 leading-relaxed">
              {post.caption}
            </p>
          </div>

          {/* Share */}
          <ShareButtons />

          {/* Contact CTA */}
          <div className="mt-16 bg-stone-900 text-white p-10">
            <h3 className="text-2xl font-bold mb-4">Áhugi á vörum okkar?</h3>
            <p className="text-stone-400 mb-6">
              Hafðu samband við okkur fyrir frekari upplýsingar og verðtilboð.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 font-semibold hover:bg-blue-700 transition-colors"
            >
              Hafa Samband
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
