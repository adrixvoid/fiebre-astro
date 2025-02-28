import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';
import { visit } from 'unist-util-visit';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: "https://fevercosmic.com/",
	integrations: [mdx(), sitemap()],
	devToolbar: {
		enabled: false
	},
	markdown: {
		remarkPlugins: [
			() => (tree) => {
				// Recorre los nodos de markdown y reemplaza las imágenes con tu componente
				visit(tree, "image", (node) => {
					node.type = "html";
					node.value = `<Image src="${node.url}" alt="${node.alt}" width="800" height="600" loading="lazy" />`;
				});
			},
		],
	},
});
