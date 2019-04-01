<template>
  <div class="regForm">
    <el-form
      :model="params"
      status-icon
      :rules="rules"
      ref="registerForm"
      label-width="100px"
      class
      inline-message
    >
      <el-form-item label="手机号" prop="mobil">
        <el-input v-model.number="params.mobil"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="params.email" ref="emailForm"></el-input>
      </el-form-item>
      <el-button class="getCode" @click="getCode">{{getCode_btnText}}</el-button>
      <el-form-item label="动态码" prop="verificationCode">
        <el-input v-model.number="params.verificationCode"></el-input>
      </el-form-item>
      <el-form-item label="创建密码" prop="pass">
        <el-input v-model="params.pass" type="password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPass">
        <el-input v-model="params.confirmPass" type="password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="registerHandler" class="agreeReg">同意以下协议并注册</el-button>
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
      if (!Number.isInteger(value) || value.toString().length !== 11) {
        return callback(new Error("请输入正确的11位手机号码"));
      }
      callback();
    };
    let validateEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入您的邮箱"));
      }
      let reg = /^[a-zA-Z\d][\w\-]+@[a-zA-Z\d]+(\.[a-zA-Z]{2,5})+$/;
      if (!value.match(reg)) {
        callback(new Error("请输入正确的邮箱地址"));
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
        email: "",
        verificationCode: "",
        pass: "",
        confirmPass: ""
      },
      rules: {
        mobil: [{ validator: validateMobil, trigger: "blur" }],
        email: [{ validator: validateEmail, trigger: "blur" }],
        verificationCode: [{ validator: validateCode, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        confirmPass: [{ validator: validatePass2, trigger: "blur" }]
      },
      getCode_btnText: "免费获取邮箱验证码",
      canClick: true
    };
  },
  methods: {
    registerHandler() {
      this.$refs["registerForm"].validate(valid => {
        if (valid) {
          console.log("注册");
        } else {
          return false;
        }
      });
    },
    getCode() {
      this.$refs["registerForm"].validateField("email", valid => {
        // 如果校验不通过则vaild有值，也就是上面匹配的对应的Error信息
        if (valid || !this.canClick) {
          return false;
        } else {
          // 验证通过
          this.$axios
            .post("/users/verify", { email: this.params.email })
            .then(res => {
              let data = res.data;
              if (res.status === 200 && data.code === 0) {
                this.$message({
                  message: "获取验证码成功，请前往邮箱查看",
                  type: "success"
                });
                this.canClick = false;
                let expire = data.expire;
                let timer = setInterval(() => {
                  expire -= 1;
                  this.getCode_btnText = `${expire}s后再次获取`;
                  if (expire === 0) {
                    clearInterval(timer);
                    this.getCode_btnText = "免费获取邮箱验证码";
                    this.canClick = true;
                  }
                }, 1000);
              } else {
                this.$message.error("获取验证码失败");
              }
            });
        }
      });
    }
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
    padding: 3px 8px;
    margin-left: 100px;
    position: relative;
    top: -10px;
    color: #333;
    background: #dedede;
    border: solid 1px #e3e3e3;
    font-size: 12px;
    border-radius: 2px;
  }
  .agreeReg {
    background-color: #2db3a6;
    border: none;
    color: #fff;
    padding: 10px 20px;
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
