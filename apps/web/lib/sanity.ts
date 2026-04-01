import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true, // Use CDN for better performance and reliability
  perspective: 'published', // Only fetch published documents
});

// Type for our Post schema
export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  caption: string;
  images: Array<{
    asset: {
      _ref: string;
      _type: 'reference';
    };
    _key: string;
  }>;
  publishedAt: string;
}

// Fetch all posts
export async function getPosts(): Promise<Post[]> {
  try {
    const posts = await client.fetch<Post[]>(
      `*[_type == "post"] | order(publishedAt desc) {
        _id,
        _createdAt,
        title,
        caption,
        images,
        publishedAt
      }`,
      {},
      {
        // Add timeout and cache settings
        next: { revalidate: 60 },
      }
    );
    return posts;
  } catch (error) {
    console.error('Failed to fetch posts from Sanity:', error);
    // Return empty array instead of crashing
    return [];
  }
}

// Fetch a single post by ID
export async function getPostById(id: string): Promise<Post | null> {
  try {
    const post = await client.fetch<Post | null>(
      `*[_type == "post" && _id == $id][0] {
        _id,
        _createdAt,
        title,
        caption,
        images,
        publishedAt
      }`,
      { id }
    );
    return post;
  } catch (error) {
    console.error('Failed to fetch post from Sanity:', error);
    return null;
  }
}
