// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '~/plugins/bootstrap.client.ts'
  ],
  meta: {
    title: '島根データセンター友の会',
    description: '島根県を中心としたデータセンター関連技術に興味・関心を持つ人々の集まりです。',
    lang: 'ja',
  },
  link: [
      { rel: "icon", type: "image/png", href: "/sdcc-icon.png" },
  ],
})
