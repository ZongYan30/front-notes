# 使用 webpack 搭建多页应用

在公司中，我们可能会遇到双十一来临，而需要做一些页面，每一个页面也比较简单，我们可以使用 webpack 来搭建一个多页的应用。这里正好内置了一个模板,到时候直接使用即可。

> [!WARNING]
> 其实这一节还是蛮重要的，但是无法以文档的形式给描述出来。
> 可以直接从下面这个链接把代码拉取出来，然后具体看一看。

# 模板简介

其实模板用的全是前面已经学过的知识，我们只需要把握着大体结构切入即可。
切入点无非就是 webpack 的配置文件：

- webpack.config.js //公共配置
- webpack.dev.js //开发环境配置
- webpack.prod.js //生产环境配置

然后详细看一下根目录下的 pages.js 这个文件,需要添加新的页面直接在这里配置即可，一般情况下不需要动配置文件的，直接进行业务开发即可。

值得一提的是,src/pages 文件夹是将每一个页面给整合了，目录如下:

```sh
about
    --index.js      chunk的入口文件
    --index.css     样式文件
    --index.html    提供给html-webpack-plugin的模板文件
```

## 模板 github 地址

[多页面工程模板](https://github.com/ZongYan30/Multiple-page-webpack-template)
