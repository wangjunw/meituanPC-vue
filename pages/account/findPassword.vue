<template>
  <div class="m-findPass">
    <reg-topbar/>
    <main>
      <h2 class="title">
        <span>找回登录密码</span>
      </h2>
      <ul class="progressRate">
        <li :class="{currentStep: currentStep === 1}">1.确认账号</li>
        <li :class="{currentStep: currentStep === 2}">2.安全校验</li>
        <li :class="{currentStep: currentStep === 3}">3.设置密码</li>
        <li :class="{currentStep: currentStep === 4}">4.完成</li>
      </ul>
      <div class="container">
        <div v-if="currentStep === 1" class="step1">
          <p>请填写你要找回密码的美团账号</p>
          <input type="text" class="account">
          <el-button type="success" @click="nextHandler(2)">下一步</el-button>
        </div>
        <div v-else-if="currentStep === 2" class="step2">
          <p>为了您的账户安全，请先验证手机</p>
        </div>
        <div v-else-if="currentStep === 3" class="step3">重置密码</div>
        <div v-else class="step4">
          <h2>恭喜您已经成功修改了登录密码</h2>
          <p>您的登录密码已经重新设置，请妥善保管</p>
          <el-button type="success" @click="nextHandler(2)">立即登录</el-button>
        </div>
      </div>
    </main>
    <login-nav/>
    <login-foot/>
  </div>
</template>
<script>
import regTopbar from "@/components/register/regTopbar.vue";
import loginNav from "@/components/login/loginNav.vue";
import loginFoot from "@/components/login/loginFoot.vue";
export default {
  layout: "findPassTemplate",
  data() {
    return {
      currentStep: 1
    };
  },
  components: {
    regTopbar,
    loginNav,
    loginFoot
  },
  methods: {
    nextHandler(next) {
      this.currentStep = next;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/account/findPass.scss";
</style>
