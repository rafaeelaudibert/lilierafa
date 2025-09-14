// @ts-check
import { defineConfig, envField } from 'astro/config'

import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite';


const URL = "https://lilierafa.com.br"

export default defineConfig({
  // Guarantees that we can properly generate the sitemap
  site: URL,

  // On hover, prefetch that link
  prefetch: {
    prefetchAll: true,
  },

  // Some experimental configuration
  experimental: {
    // Prerender pages on the client when prefetching it
    clientPrerender: true,
    // Improve intelisense for content files
    contentIntellisense: true
  },

  // Image optimization settings
  image: {
    layout: "constrained",
  },

  // Typed environment variables to guarantee they always exist when building the site
  env: {
    schema: {
      POSTHOG_API_KEY: envField.string({ context: "client", access: "public", startsWith: "phc_" }),
      POSTHOG_API_HOST: envField.string({ context: "client", access: "public", startsWith: "https://" }),
    },
  },

  // Vite has some cool plugins that we can use, they can be exposed here
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    // Build a sitemap to help with SEO
    sitemap({
      customPages: [
        `${URL}/llms.txt`, // The plugin doesn't detect non-astro pages by default, so we need to add them manually here
      ],
    }),
  ]
})