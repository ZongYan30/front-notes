import { set_sidebar } from "../utils/createSideBar"; // 改成自己的路径

export default {
  // 个人模块的侧边栏
  "/personal/": [
    { text: "个人简历", link: "/personal/presume" },
    { text: "工作之余", link: "/personal/life" },
  ],
  //   笔记模块的侧边栏
  "/note/01-工程化过渡版/": set_sidebar("/src/views/note/01-工程化过渡版"),
  "/note/10-模块化详细版/": set_sidebar("/src/views/note/10-模块化详细版"),
  "/note/11-packageManger/": set_sidebar("/src/views/note/11-packageManger"),
  "/note/12-webpack/": set_sidebar("/src/views/note/12-webpack"),
};
