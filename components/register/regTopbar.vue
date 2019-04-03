<template>
  <div class="register_top">
    <div>
      <a href="/" class="logo" :style="logoStyle"></a>
      <div>
        <span>已有美团账号？</span>
        <nuxt-link to="/account/login">
          <el-button size="mini" type="success">登录</el-button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logoStyle: {
        width: "54px",
        height: "36px",
        display: "inline-block",
        backgroundImage: `url(${require("@/static/images/sprite.png")})`,
        backgroundPosition: "-669px -748px"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.register_top {
  border-bottom: solid 2px #2bb8aa;
  padding: 10px 0;
  > div {
    width: 980px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }
  .el-button--mini {
    background-color: #2db3a6;
    margin-left: 10px;
  }
}
</style>
