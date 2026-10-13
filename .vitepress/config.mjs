import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import navConfig from "../src/config/navConfig";
import sideBarConfig from "../src/config/sideBarConfig";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
  base: "/front-notes/",
  head: [["link", { rel: "icon", href: "/front-notes/favicon.ico" }]],
  title: "Yan Home",
  description: "Yan Personal Site",
  ignoreDeadLinks: true,
  markdown: {
    math: true,
  },
  vite: {
    optimizeDeps: {
      include: [
        "mermaid",
        "fastdom",
        "dagre-d3-es",
        "@upsetjs/venn.js",
        "d3-sankey",
        "roughjs",
        "khroma",
        "ts-dedent",
        "stylis",
      ],
    },
  },
  srcDir: "src",
  rewrites: {
    "views/(.*)": "(.*)",
  },
  themeConfig: {
    //logo
    logo: "/svg/logo.svg",
    // nav  https://vitepress.dev/reference/default-theme-config
    nav: navConfig,
    // sidebar
    sidebar: sideBarConfig,
    // socialLinks
    socialLinks: [],
    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
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
    //
    outline: [2, 3],
  },
  })
);
