import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yan Home",
  description: "Yan Personal Site",
  srcDir: "./src",
  rewrites: {
    "views/(.*)": "(.*)",
  },

  themeConfig: {
    //logo
    logo: "/svg/logo.svg",
    // nav  https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "前端(Note)", link: "/" },
      { text: "个人天地(Garden)", link: "/views/personal/presume" },
      // {
      //   text: "Github",
      //   items: [
      //     { text: "Item A", link: "/item-1" },
      //     { text: "Item B", link: "/item-2" },
      //     { text: "Item C", link: "/item-3" },
      //   ],
      // },
    ],
    // sidebar
    sidebar: {
      "/personal/": [
        { text: "个人简历", link: "/personal/presume" },
        { text: "工作之余", link: "/personal/life" },
      ],
    },
    // socialLinks
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    //搜索框
    search: {
      provider: "local",
      options: {
        locales: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
    },
    //footer
    footer: {
      message: "MIT License",
      copyright: "Copyright © 2024-present Yan",
    },
  },
});
