import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

// https://v2.vuepress.vuejs.org/zh/reference/config.html
export default defineUserConfig({
  bundler: viteBundler(),

  base: "/vuepress/",
  locales: {
    '/': {
      lang: 'zh-TW',
      title: "Title測試",
      description: 'vuepress Title測試',
    },
  },

  // https://v2.vuepress.vuejs.org/zh/guide/theme.html
  // https://ecosystem.vuejs.press/zh/themes/default/config.html
  theme: defaultTheme({
    locales: {
      '/': { // zh-CN
        // 该语言在下拉菜单中的标签
        selectLanguageName: '繁體中文',
        // 多语言下拉菜单的标题
        selectLanguageText: '選擇語言',
        selectLanguageAriaselectLanguageName: '選擇語言',
        editLink: true,
        editLinkText: '在 GitHub 上編輯此頁',
        lastUpdatedText: '上次更新',
      },
    },
  
    repo: "netlol/vuepresstest",
    docsRepo: "netlol/vuepresstest",
    docsBranch: "main",
    docsDir: "docs",
    contributors: false,
  
    sidebarDepth: 2,
    sidebar: 'auto',
  }),

})
