import { createImageUrlBuilder } from '@sanity/image-url';
import { client } from './sanity';

const builder = createImageUrlBuilder(client);

// Helper function to generate image URLs
export function urlFor(source: any) {
  return builder.image(source);
}
