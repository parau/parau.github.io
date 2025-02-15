// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'http://criatividade.digital',
	//base: '/super-apague',
	integrations: [mdx(), sitemap(), react()],
	markdown: {
    // Opções para o processador de Markdown (ex: remark)
    remarkPlugins: [],
    rehypePlugins: [],
    smartypants: true, // Habilita aspas tipográficas e outros ajustes
  },
});
