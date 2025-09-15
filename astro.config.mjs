// @ts-check
import { defineConfig, envField } from 'astro/config'

import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration"

const DEFAULT_LOCALE = "pt";
const LOCALES = { en: "en-US", pt: "pt-BR" };

const URL = "https://lilierafa.com.br"

export default defineConfig({
  // Guarantees that we can properly generate the sitemap
  site: URL,

  // Configuration for build
  trailingSlash: "never",
  build: {
    format: "file",
  },

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
    // Guarantee we're supporting pt-BR and en-US
    i18n({
      locales: LOCALES,
      defaultLocale: DEFAULT_LOCALE,
    }),
    // Build a sitemap to help with SEO
    sitemap({
      i18n: {
        locales: LOCALES,
        defaultLocale: DEFAULT_LOCALE,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale: DEFAULT_LOCALE }),
    }),
  ]
})