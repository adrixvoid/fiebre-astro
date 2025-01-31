import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

// export async function GET(context) {
// 	const posts = await getCollection('blog');
// 	return rss({
// 		title: SITE_TITLE,
// 		description: SITE_DESCRIPTION,
// 		site: context.site,
// 		items: posts.map((post) => ({
// 			...post.data,
// 			link: `/blog/${post.slug}/`
// 		})),
// 	});
// }

export async function GET(context) {
	const portfolio = await getCollection('portfolio');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: portfolio.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`
		})),
	});
}


// export async function GET(context) {
// 	const posts = await getCollection('blog');
// 	const portfolio = await getCollection('portfolio');

// 	const portfolioItems = portfolio.map((item) => ({
// 		...item.data,
// 		link: `/blog/${item.slug}/`,
// 		categories: item.categories ? item.categories.reduce((acc, curr) => `${acc}, ${curr}`) : []
// 	}));

// 	const blogItems = posts.map((post) => ({
// 		...post.data,
// 		link: `/blog/${post.slug}/`
// 	}));

// 	return rss({
// 		title: SITE_TITLE,
// 		description: SITE_DESCRIPTION,
// 		site: context.site,
// 		items: [...portfolioItems, ...blogItems]
// 	});
// }