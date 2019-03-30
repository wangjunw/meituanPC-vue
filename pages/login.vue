<template>
  <div class="m-login">
    <header>
      <nuxt-link to="/" :style="logoStyle">美团网</nuxt-link>
    </header>
    <main>
      <img :src="leftImg" alt class="leftImg">
      <div class="loginForm">
        <div class="warning" v-if="message !== ''">
          <span class="iconfont iconjinzhi"></span>
          <span class="message">{{message}}</span>
        </div>
        <div class="loginType">
          <p>账号登录</p>
          <p class="changeLoginType">
            <span v-if="loginType === 'passLogin'" @click="changeLoginType">
              手机状态码登录
              <i class="mobilIcon" :style="loginIconStyle"></i>
            </span>
            <span v-else @click="changeLoginType">
              普通方式登录
              <i class="personIcon" :style="loginIconStyle"></i>
            </span>
          </p>
        </div>
        <div class="inputArea">
          <div v-if="loginType === 'passLogin'" class="inputArea">
            <i class="accountIcon" :style="loginIconStyle"></i>
            <input
              type="text"
              placeholder="手机号/用户名/邮箱"
              class="_input accountInput"
              v-model="formParams.account"
            >
            <i class="passIcon" :style="loginIconStyle"></i>
            <input
              type="password"
              class="_input passInput"
              placeholder="密码"
              v-model="formParams.password"
            >
          </div>
          <div v-else>
            <i class="mobilIcon" :style="loginIconStyle"></i>
            <input
              type="text"
              placeholder="手机号"
              class="_input mobilInput"
              v-model="formParams.mobil"
            >
            <i class="passIcon" :style="loginIconStyle"></i>
            <input type="text" class="_input passInput" placeholder="动态码" v-model="formParams.code">
          </div>
        </div>
        <div class="verificationCode" v-if="showVerificationCode">
          <input
            type="text"
            placeholder="验证码"
            class="codeInput"
            v-model="formParams.verificationCode"
          >
          <img :src="codeImg" @click="updateCodeImg" width="72px" height="36px" class="codeImg">
          <span @click="updateCodeImg">看不清楚？换一张</span>
        </div>
        <p class="forgetPass">
          <nuxt-link to="/findPassword">忘记密码？</nuxt-link>
        </p>
        <button class="loginBtn" @click="loginHandler">登 录</button>
        <div class="toRegister" v-if="loginType === 'passLogin'">
          还没有账号？
          <nuxt-link to="/register">免费注册</nuxt-link>
        </div>
        <div v-else class="tips">
          提示： 未注册美团账号的手机号，登录时将自动注册美团账号，且代表您已同意
          <nuxt-link to="/terms">《美团网用户协议》</nuxt-link>
        </div>
        <div class="line">
          <span>用合作网站账号登录</span>
        </div>
        <div class="cooperation">
          <a href class="qq" :style="loginIconStyle"></a>
          <a href class="weibo" :style="loginIconStyle"></a>
        </div>
      </div>
    </main>
    <login-nav position="left"/>
    <login-footer position="left"/>
  </div>
</template>
<script>
let spriteImage = require("@/static/images/sprite.png");
import loginNav from "@/components/login/loginNav.vue";
import loginFooter from "@/components/login/loginFoot.vue";
export default {
  layout: "loginTemplate",
  components: {
    loginNav,
    loginFooter
  },
  data() {
    return {
      formParams: {
        account: "",
        password: "",
        mobil: "",
        code: "",
        verificationCode: ""
      },
      message: "",
      codeImg: "",
      showVerificationCode: true,
      loginType: "passLogin",
      leftImg: require("@/static/images/login_left.jpg"),
      logoStyle: {
        width: "82px",
        height: "54px",
        display: "inline-block",
        background: `url(${spriteImage}) no-repeat`,
        backgroundPosition: "-188px -808px",
        textIndent: "-9999px"
      },
      loginIconStyle: {
        backgroundImage: `url(${spriteImage})`
      }
    };
  },
  methods: {
    changeLoginType() {
      this.loginType =
        this.loginType === "passLogin" ? "codeLogin" : "passLogin";
    },
    loginHandler() {},
    updateCodeImg() {}
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/login/login.scss";
</style>

