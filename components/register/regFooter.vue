<template>
  <div class="reg-footer">
    ©
    <nuxt-link to="/">meituan.com</nuxt-link>
    <nuxt-link to="http://www.miibeian.gov.cn/">京ICP证070791号</nuxt-link>
    <span>京公网安备11010502025545号</span>
  </div>
</template>
<style lang="scss" scoped>
.reg-footer {
  text-align: center;
  border-top: solid 1px #eee;
  padding-top: 15px;
  * {
    color: #999;
    font-size: 13px;
  }
  a:hover {
    text-decoration: underline;
  }
}
</style>
