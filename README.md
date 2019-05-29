# meituanPC-vue

## 技术栈

- Nuxt.js 框架做 ssr
- 集成了 axios、router、ElementUI
- 服务端用的 node，框架用的 koa 以及 koa 系列库
- 数据库 mongodb，mongoose 库操作 mongodb
- 登录功能使用 passport
- 邮件服务 nodemailer

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

> 需要注意在启动项目之前，请先启动 mongodb 和 redis，最后会把 mongodb 数据放进来，但是数据基本都是自己手动 copy 的用来测试的数据，仅仅作用学习使用！
