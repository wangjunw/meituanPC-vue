<template>
  <div class="regForm">
    <el-form :model="params" status-icon :rules="rules" label-width="100px" class inline-message>
      <el-form-item label="手机号" prop="mobil">
        <el-input v-model.number="params.mobil"></el-input>
      </el-form-item>
      <button class="getCode">免费获取短信动态码</button>
      <el-form-item label="短信动态码" prop="verificationCode">
        <el-input v-model.number="params.verificationCode"></el-input>
      </el-form-item>
      <el-form-item label="创建密码" prop="pass">
        <el-input v-model.number="params.pass" type="password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPass">
        <el-input v-model.number="params.confirmPass" type="password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <button class="agreeReg">同意以下协议并注册</button>
      </el-form-item>
    </el-form>
    <nuxt-link to="/terms" class="terms">《美团网用户协议》</nuxt-link>
  </div>
</template>
<script>
export default {
  data() {
    let validateMobil = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入您的手机号"));
      }
      console.log(value);
      if (!Number.isInteger(value) || value.toString().length !== 11) {
        return callback(new Error("请输入正确的11位手机号码"));
      }
      callback();
    };
    let validateCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入短信动态码"));
      }
      if (value.toString().length !== 6) {
        return callback(new Error("输入错误，请重新输入"));
      }
      callback();
    };
    let validatePass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请填写密码"));
      }
      if (value.toString().length < 6) {
        return callback(new Error("密码太短，最少6个字符"));
      }
      callback();
    };
    let validatePass2 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请再次输入密码"));
      }
      if (value !== this.params.pass) {
        return callback(new Error("两次输入的密码不一致，请重新输入"));
      }
      callback();
    };
    return {
      params: {
        mobil: "",
        verificationCode: "",
        pass: "",
        confirmPass: ""
      },
      rules: {
        mobil: [{ validator: validateMobil, trigger: "blur" }],
        verificationCode: [{ validator: validateCode, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        confirmPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.regForm {
  margin: 0 auto 30px;
  width: 980px;
  padding-top: 30px;
  .el-input {
    width: 248px;
  }
  .getCode {
    padding: 0 8px;
    margin-left: 100px;
    position: relative;
    top: -10px;
    color: #333;
  }
  .agreeReg {
    background-color: #2db3a6;
    border: none;
    color: #fff;
    padding: 8px 20px;
    font-weight: 700;
    border-bottom: solid 1px #008177;
    border-radius: 2px;
  }
  .terms {
    margin-left: 100px;
    color: #2bb8aa;
    font-size: 13px;
    position: relative;
    top: -8px;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
