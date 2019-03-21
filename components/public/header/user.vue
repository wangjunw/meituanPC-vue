<template>
  <div class="m-user">
    <template v-if="user">
      <nuxt-link to="/my" class="user-link">{{user}}</nuxt-link>
      <nuxt-link to="/exit" class="user-link">[退出]</nuxt-link>
    </template>
    <template v-else>
      <nuxt-link to="/login" class="user-link login">立即登录</nuxt-link>
      <nuxt-link to="/register" class="user-link register">注册</nuxt-link>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: "军伟"
    };
  }
};
</script>
<style scoped>
.m-user .user-link {
  margin-left: 10px;
}
</style>

