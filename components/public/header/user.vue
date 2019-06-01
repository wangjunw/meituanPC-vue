<template>
  <div class="m-user">
    <template v-if="userInfo.username">
      <nuxt-link to="/center/myMeituan" class="user-link">{{userInfo.nickname || userInfo.username}}</nuxt-link>
      <a href="javascript:;" @click="exitHandler" class="user-link">[退出]</a>
    </template>
    <template v-else>
      <nuxt-link to="/account/login" class="user-link login">立即登录</nuxt-link>
      <nuxt-link to="/account/register" class="user-link register">注册</nuxt-link>
    </template>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  created() {
    this.$axios.$get("/users/getUser").then(res => {
      if (res.code === 0) {
        this.initUser(res.userInfo);
      }
    });
  },
  methods: {
    ...mapMutations({
      initUser: "user/INIT_USER"
    }),
    exitHandler() {
      this.$axios.get("/users/exit").then(res => {
        if (res.status === 200 && res.data.code === 0) {
          this.$router.push("/account/login");
          this.initUser({});
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

