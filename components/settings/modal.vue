<template>
  <div class="settingModal-container">
    <div class="content">
      <div class="title">
        <p>修改{{curType}}</p>
        <i class="el-icon-error" @click="clickClose"></i>
      </div>
      <div class="main">
        <div v-if="curType === '昵称'">
          <div v-if="userInfo.nickname !== ''">
            <label for>当前昵称</label>
            <span>{{userInfo.nickname}}</span>
          </div>
          <p v-else>还未设置过昵称，请设置</p>
          <div style="margin-top: 10px;">
            <label for>新昵称</label>
            <el-input v-model="nickname" maxlength="16" minlength="4"></el-input>
          </div>
        </div>
        <div v-if="curType === '生日'">
          <label for>生日</label>
          <el-date-picker v-model="birth" type="date" placeholder="选择日期"></el-date-picker>
        </div>
        <div v-if="curType === '密码'"></div>
      </div>
      <div class="footer">
        <el-button type="success" round>确认</el-button>
        <el-button round>取消</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  props: {
    curType: {
      type: String
    }
  },
  data() {
    return {
      birth: "",
      nickname: ""
    };
  },
  methods: {
    clickClose() {
      this.$emit("closeModal");
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
      label {
        display: inline-block;
        margin-right: 20px;
        // width: 30%;
        // text-align: right;
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
