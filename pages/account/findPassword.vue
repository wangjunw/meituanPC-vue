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
          <p class="desc">请填写你要找回密码的美团账号</p>
          <input type="text" class="account" v-model="step1Params.account">
          <el-button
            type="success"
            :disabled="step1Params.account == ''"
            @click="confirmAccount"
          >下一步</el-button>
        </div>
        <div v-else-if="currentStep === 2" class="step2">
          <p class="desc">为了您的账户安全，请先验证邮箱</p>
          <div class="tips" v-if="showtips">
            <i class="el-icon-success successIcon" v-if="tipsType === success"></i>
            <i class="el-icon-warning warningIcon" v-else></i>
            {{tipsText}}
          </div>
          <el-form label-width="60px" :model="formParams">
            <el-form-item label="邮箱">
              <el-input v-model="step2Params.email"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
              <el-input v-model="step2Params.code"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button round @click="checkEmail">下一步</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div v-else-if="currentStep === 3" class="step3">
          <p class="desc">请为你的账号{{''}}设置一个新密码</p>
          <input class="account" type="password" placeholder="请设置8-32位(数字+字母)">
          <el-button type="success" @click="saveNewPass">保存新密码</el-button>
        </div>
        <div v-else class="step4">
          <h2>恭喜您已经成功修改了登录密码</h2>
          <p>您的登录密码已经重新设置，请妥善保管</p>
          <el-button type="success" @click="toLogin">立即登录</el-button>
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
      step1Params: {
        account: ""
      },
      step2Params: {
        email: "",
        code: ""
      },
      currentStep: 1,
      tipsType: "success",
      tipsText: "验证码以发送，请稍后",
      showTips: true
    };
  },
  components: {
    regTopbar,
    loginNav,
    loginFoot
  },
  methods: {
    confirmAccount() {
      this.currentStep = 2;
    },
    checkEmail() {},
    saveNewPass() {},
    toLogin() {}
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/account/findPass.scss";
</style>
