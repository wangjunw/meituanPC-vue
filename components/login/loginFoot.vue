<template>
  <footer :style="{textAlign: position}">
    ©2019
    <nuxt-link to="/">美团网团购</nuxt-link>meituan.com
    <a href="http://www.miibeian.gov.cn/state/outPortal/loginPortal.action">京ICP证070791号</a>京公网安备11010502025545号
  </footer>
</template>
<script>
export default {
  props: {
    position: {
      type: String,
      default: "center"
    }
  }
};
</script>
<style lang="scss" scoped>
//   底部
footer {
  border-top: solid 1px #eee;
  padding-top: 20px;
  color: #999;
  a {
    color: #999;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
