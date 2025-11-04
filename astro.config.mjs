// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // ⚡ Adaptateur Vercel pour les fonctions API
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // 🔹 Sortie hybride : pages statiques + routes serveur (pour ton /api/send-email)
  output: 'server',

  // 🔹 Adaptateur Vercel
  adapter: vercel({
    edgeMiddleware: false, // garde le build simple et rapide
  }),

  // 🔹 Intégration de Tailwind via Vite
  vite: {
    plugins: [tailwindcss()],
  },

  // 🔹 Options générales recommandées
  site: 'https://www.les-massages-de-laurent.fr', // utile pour SEO, sitemap, canonical
  server: {
    host: true, // permet le preview local sur réseau (optionnel)
  },
});
