<template>
  <nav :style="{textAlign: position}">
    <ul>
      <li v-for="item in navList" :key="item.name" class="nav">
        <a :href="item.link">{{item.name}}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    position: {
      type: String,
      default: "center"
    }
  },
  data() {
    return {
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
//   底部导航
nav {
  border-top: solid 1px #eee;
  .nav {
    display: inline-block;
    padding: 20px 0;
    a {
      padding: 0 10px;
      border-right: solid 1px #999;
      color: #999;
      &:hover {
        text-decoration: underline;
      }
    }
    &:last-of-type {
      a {
        border-right: none;
      }
    }
    &:first-of-type {
      a {
        padding-left: 0;
      }
    }
  }
}
</style>
