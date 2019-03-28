<template>
  <div class="m-login">
    <header>
      <nuxt-link to="/" :style="logoStyle">美团网</nuxt-link>
    </header>
    <main>
      <img :src="leftImg" alt class="leftImg">
      <div>表单</div>
    </main>
    <nav>
      <ul>
        <li v-for="item in navList" :key="item.name" class="nav">
          <a :href="item.link">{{item.name}}</a>
        </li>
      </ul>
    </nav>
    <footer>
      ©2019
      <nuxt-link to="/">美团网团购</nuxt-link>meituan.com
      <a
        href="http://www.miibeian.gov.cn/state/outPortal/loginPortal.action"
      >京ICP证070791号</a>京公网安备11010502025545号
    </footer>
  </div>
</template>
<script>
export default {
  layout: "loginTemplate",
  data() {
    return {
      leftImg: require("@/static/images/login_left.jpg"),
      logoStyle: {
        width: "82px",
        height: "54px",
        display: "inline-block",
        background: `url(${require("@/static/images/sprite.png")}) no-repeat`,
        backgroundPosition: "-188px -808px",
        textIndent: "-9999px"
      },
      navList: [
        {
          name: "关于美团",
          link: "https://about.meituan.com/about.html"
        },
        {
          name: "加入我们",
          link: "https://zhaopin.meituan.com/"
        },
        {
          name: "商家入驻",
          link: "http://emis.meishi.meituan.com/merchantsSettled"
        },
        {
          name: "帮助中心",
          link: "https://www.meituan.com/help/faq"
        },
        {
          name: "美团手机版",
          link: "http://meituan.com/mobile"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/login/login.scss";
</style>

