import { defineConfig } from 'vitepress'

import algolia from './algolia.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/algoliatest/',
  lang: 'zh-CN',
  title: "algolia-test",
  description: "Vitepress + Vue + Algolia",
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  sitemap: {
    hostname: 'https://igitinode.github.io/algoliatest',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },
  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/algoliatest/vitepress-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/algoliatest/vitepress-logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Algolia Test | Vite & Vue Powered Static Site Generator' }],
    ['meta', { property: 'og:site_name', content: 'VitePress' }],
    ['meta', { property: 'og:image', content: 'https://igitinode.github.io/algoliatest/vitepress-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://igitinode.github.io/algoliatest/' }],
    ['meta', { name: 'algolia-site-verification', content: '5C2FB2448E03BBFF' }]
  ],
  themeConfig: {
    logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://igitinode.github.io/algoliatest' }
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} 尤雨溪`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

    search: {
      provider: 'local',
      options: algolia,
    },
  }
})
