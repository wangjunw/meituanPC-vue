<template>
  <div class="settingModal-container">
    <div class="content">
      <div class="title">
        <p>修改{{curType}}</p>
        <i class="el-icon-error" @click="clickClose"></i>
      </div>
      <div class="main">
        <div v-if="curType === '头像'">
          <img :src="avatar" alt width="100" height="100">
        </div>
        <div v-if="curType === '昵称'">
          <div v-if="userInfo.nickname !== ''" class="formItem">
            <label for>当前昵称</label>
            <span>{{userInfo.nickname}}</span>
          </div>
          <p v-else style="padding-left: 90px;">还未设置过昵称，请设置</p>
          <div class="formItem">
            <label for>新昵称</label>
            <el-input v-model="nickname" maxlength="16" minlength="4"></el-input>
          </div>
        </div>
        <div v-if="curType === '生日'">
          <p v-if="userInfo.birthday === ''" style="padding-left: 90px;">还未设置过生日，请设置</p>
          <div :class="{'formItem':userInfo.birthday === ''}">
            <label for>生日</label>
            <el-date-picker
              v-model="birth"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </div>
        </div>
        <div v-if="curType === '密码'">
          <div>
            <label for>当前密码</label>
            <el-input minlength="6" type="password" v-model="oldPass"></el-input>
          </div>
          <div class="formItem">
            <label for>新密码</label>
            <el-input minlength="6" type="password" v-model="newPass"></el-input>
          </div>
          <div class="formItem">
            <label for>确认密码</label>
            <el-input minlength="6" type="password" v-model="confirmPass"></el-input>
          </div>
        </div>
      </div>
      <div class="footer">
        <el-button type="success" round @click="confirmHandler">确认</el-button>
        <el-button round>取消</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  props: {
    curType: {
      type: String
    },
    avatar: {
      type: String
    }
  },
  data() {
    return {
      birth: this.$store.state.user.userInfo.birthday,
      nickname: "",
      newPass: "",
      oldPass: "",
      confirmPass: ""
    };
  },
  methods: {
    ...mapMutations({
      initUser: "user/INIT_USER"
    }),
    clickClose() {
      this.$emit("closeModal");
    },
    updateAvatarHandler() {
      this.$axios
        .$post("/users/updateAvatar", {
          username: this.userInfo.username,
          avatar: this.avatar
        })
        .then(res => {
          if (res.code !== 0) {
            this.$message.error("头像修改失败！");
            return;
          }
          this.initUser(res.userInfo);
          this.clickClose();
        });
    },
    updatePasswordHandler() {
      if (this.oldPass.length < 6 || this.newPass.length < 6) {
        this.$message.error("密码输入有误");
        return;
      }
      if (this.newPass !== this.confirmPass) {
        this.$message.error("两次密码输入不一致");
        return;
      }
      this.$axios
        .$post("/users/updatePasswordByPassword", {
          username: this.userInfo.username,
          oldPass: this.oldPass,
          newPass: this.newPass
        })
        .then(res => {
          if (res.code !== 0) {
            this.$message.error("密码修改失败！");
            return;
          }
          this.initUser(res.userInfo);
          this.newPass = "";
          this.oldPass = "";
          this.confirmPass = "";
          this.$message({
            message: "密码修改成功",
            type: "success"
          });
          this.clickClose();
        });
    },
    updateNicknameHandler() {
      if (this.nickname === "") {
        this.$message({
          message: "昵称不能为空！",
          type: "warning"
        });
        return;
      }
      this.$axios
        .$post("/users/updateNickname", {
          nickname: this.nickname,
          username: this.userInfo.username
        })
        .then(res => {
          if (res.code !== 0) {
            this.$message.error("昵称修改失败！");
            return;
          }
          this.initUser(res.userInfo);
          this.nickname = "";
          this.clickClose();
        });
    },
    updateBirthdayHandler() {
      if (this.birth === "") {
        this.$message({
          message: "生日不能为空！",
          type: "warning"
        });
        return;
      }
      this.$axios
        .$post("/users/updateBirthday", {
          username: this.userInfo.username,
          birthday: this.birth
        })
        .then(res => {
          if (res.code !== 0) {
            this.$message.error("生日修改失败！");
            return;
          }
          this.initUser(res.userInfo);
          this.clickClose();
        });
    },
    confirmHandler() {
      if (this.curType === "密码") {
        this.updatePasswordHandler();
      } else if (this.curType === "昵称") {
        this.updateNicknameHandler();
      } else if (this.curType === "生日") {
        this.updateBirthdayHandler();
      } else if (this.curType === "头像") {
        this.updateAvatarHandler();
      }
    }
  }
};
</script>
<style lang="scss">
.settingModal-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  .content {
    width: 480px;
    position: absolute;
    top: 18%;
    left: 50%;
    background-color: #fff;
    margin-left: -240px;
    border-radius: 10px;
    font-size: 14px;
    .title {
      padding: 10px 20px;
      display: flex;
      align-items: center;
      background-color: #f7f7f7;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      justify-content: space-between;
      .el-icon-error {
        font-size: 28px;
        cursor: pointer;
        color: #666;
      }
    }
    .main {
      padding: 20px 0;
      display: flex;
      justify-content: center;
      .formItem {
        margin-top: 10px;
      }
      .el-input {
        width: auto;
      }
      label {
        display: inline-block;
        margin-right: 15px;
        width: 70px;
        text-align: right;
      }
    }
    .footer {
      display: flex;
      justify-content: center;
      padding-bottom: 25px;
    }
  }
}
</style>
