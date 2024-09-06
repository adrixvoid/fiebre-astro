import type { CollectionEntry } from "astro:content";

export function getPostsPerCategory(
  posts: CollectionEntry<"portfolio">[],
  categories: string[]
) {
  return posts?.filter((post) => {
    return post.data.categories?.find((category) =>
      categories.includes(category)
    );
  });
}

export function mergeCategories(categories: string[]) {
  return categories.reduce((acc, curr) => `${acc} ${curr}`);
}
