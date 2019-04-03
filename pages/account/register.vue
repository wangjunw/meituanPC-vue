<template>
  <div class="m-reg">
    <reg-topbar/>
    <reg-form/>
    <reg-footer/>
  </div>
</template>
<script>
import regTopbar from "@/components/register/regTopbar.vue";
import regForm from "@/components/register/regForm.vue";
import regFooter from "@/components/register/regFooter.vue";
export default {
  layout: "registerTemplate",
  components: {
    regTopbar,
    regForm,
    regFooter
  }
};
</script>
<style lang="scss">
.m-reg {
  color: #666;
}
</style>
