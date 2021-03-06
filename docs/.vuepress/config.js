const utils = require('./utils')

console.log(">>> start vue pressing... ");
console.log(JSON.stringify(utils.inferSiderbars()));

module.exports = {
  host: '0.0.0.0', // 指定 dev server 的主机名
  port: '8888', // 指定 dev server 的端口
  // dest: '.vuepress/dist', // 指定vuepress build 的目录
  // ga: 'UA-109340118-1', // 提供一个 Google Analytics ID 来使 GA 生效。
  base:'/blog/',
  title: 'blog',
  referrer: 'no-referrer',
  description: 'blog',
  head: [
    // 增加一个自定义的favicon
    ['link', { 'rel': 'icon', 'href': '/image/1.ico' }]
  ],
  themeConfig: {
    nav: [
      {
        text: 'my',
        link: '/'
      },
      {
        text: '语雀',
        link: 'https://www.yuque.com'
      },
      {
        text: '生活',
        link: '/my-blog/FirstBlog.md'
      },
      {
        text: 'Tools',
        items: [
          { text: 'ProcessOn', link: 'https://www.processon.com/view/5ce2125de4b00446dc6b133b' },
          { text: '幕布', link: 'https://mubu.com/doc/bU5zO0Fos6' },
          { text: '滴答清单', link: 'https://dida365.com/#q/all/tasks' },
          { text: '极客时间', link: 'https://account.geekbang.org/dashboard/buy' },
        ]
      }
    ],
    // sidebar: utils.inferSiderbars(),
    sidebar: {
      "/life/": [{ "title": "生活", "children": ["", "fish", "hf", "nj"], "collapsable": true }]
    },
    lastUpdated: 'Last Updated', // string | boolean
    repo: 'zhoucunshuang/blog',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '！',
    sidebarDepth: 1,
    displayAllHeaders: false // 默认值：false 显示所有页面的标题链接 
  },
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(require('markdown-it-include'))
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': './public/images'
      }
    }
  }
};