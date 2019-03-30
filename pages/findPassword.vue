<template>
  <div>
    <reg-topbar/>
    <main>找回密码</main>
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
  components: {
    regTopbar,
    loginNav,
    loginFoot
  }
};
</script>