import { set_sidebar } from "../utils/createSideBar"; // 改成自己的路径

export default {
  // 个人模块的侧边栏
  "/personal/": [
    { text: "个人简历", link: "/personal/presume" },
    { text: "工作之余", link: "/personal/life" },
  ],
  //前端
  "/note/01-HtmlCss基础/": set_sidebar("/src/views/note/01-HtmlCss基础"),
  "/note/02-HtmlCss收官/": set_sidebar("/src/views/note/02-HtmlCss收官"),
  "/note/03-JS详细版/": set_sidebar("/src/views/note/03-JS详细版"),
  "/note/04-JS收官/": set_sidebar("/src/views/note/04-JS收官"),
  "/note/05-JS实战/": set_sidebar("/src/views/note/05-JS实战"),
  "/note/08-网络/": set_sidebar("/src/views/note/08-网络"),
  "/note/09-工程化过渡版/": set_sidebar("/src/views/note/09-工程化过渡版"),
  "/note/10-模块化详细版/": set_sidebar("/src/views/note/10-模块化详细版"),
  "/note/11-packageManger/": set_sidebar("/src/views/note/11-packageManger"),
  "/note/12-webpack/": set_sidebar("/src/views/note/12-webpack"),
  "/note/13-vue/": set_sidebar("/src/views/note/13-vue"),
  "/note/14.Node/": set_sidebar("/src/views/note/14.Node"),
  // AI应用
  "/AI应用/01.AI效能工具/": set_sidebar("/src/views/AI应用/01.AI效能工具"),
  "/AI应用/02.python/": set_sidebar("/src/views/AI应用/02.python"),
  "/AI应用/03.数据库/": set_sidebar("/src/views/AI应用/03.数据库"),
  //项目模块
  "/program/01.PC通用工程化/": set_sidebar("/src/views/program/01.PC通用工程化"),
  "/program/02.小兔鲜/": set_sidebar("/src/views/program/02.小兔鲜"),
  // 面试模块
  "/interview/": set_sidebar("/src/views/interview/01-大师必备"),
};
