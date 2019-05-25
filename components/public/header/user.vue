<template>
  <div class="m-user">
    <template v-if="userInfo">
      <nuxt-link to="/my" class="user-link">{{userInfo.username}}</nuxt-link>
      <a href="javascript:;" @click="exitHandler" class="user-link">[退出]</a>
    </template>
    <template v-else>
      <nuxt-link to="/account/login" class="user-link login">立即登录</nuxt-link>
      <nuxt-link to="/account/register" class="user-link register">注册</nuxt-link>
    </template>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      userInfo: {}
    };
  },
  created() {
    this.$axios.$get("/users/getUser").then(res => {
      if (res.code === 0) {
        this.userInfo = res.userInfo;
        this.initUser(res.userInfo);
      } else {
        this.$message.error("获取用户信息失败");
        // this.$router.push("/account/login");
      }
    });
  },
  methods: {
    ...mapMutations({
      resetUserInfo: "user/INIT_USER",
      initUser: "user/INIT_USER"
    }),
    exitHandler() {
      this.$axios.get("/users/exit").then(res => {
        if (res.status === 200 && res.data.code === 0) {
          this.$router.push("/account/login");
          this.resetUserInfo(null);
        } else {
          this.$message.error("退出失败");
        }
      });
    }
  }
};
</script>
<style scoped>
.m-user .user-link {
  margin-left: 10px;
}
</style>

