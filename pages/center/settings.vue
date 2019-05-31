<template>
  <div class="setting-container">
    <div>
      <h2 class="title">个人信息</h2>
      <p class="type">账户设置</p>
    </div>
    <ul v-if="userInfo.username">
      <li class="infoItem">
        <p class="labelName">头像</p>
        <div class="content">
          <img :src="userInfo.avatar" class="avatar" alt>
        </div>
        <el-button round>修改</el-button>
      </li>
      <li class="infoItem">
        <p class="labelName">昵称</p>
        <div class="content">{{userInfo.nickname}}</div>
        <el-button round @click="showModalHandler('昵称')">修改</el-button>
      </li>
      <li class="infoItem">
        <p class="labelName">生日</p>
        <div class="content">{{userInfo.birthday}}</div>
        <el-button round @click="showModalHandler('生日')">修改</el-button>
      </li>
      <li class="infoItem">
        <p class="labelName">手机号</p>
        <div class="content">{{telNum}}</div>
        <el-button round>换绑</el-button>
      </li>
      <li class="infoItem">
        <p class="labelName">登录密码</p>
        <div class="content">安全强度：{{userInfo.password.length > 10 ? '强':'弱'}}</div>
        <el-button round @click="showModalHandler('密码')">修改</el-button>
      </li>
    </ul>
    <setting-modal v-show="showModal" :curType="type" @closeModal="closeModalHandler"></setting-modal>
  </div>
</template>
<script>
import { mapState } from "vuex";
import SettingModal from "@/components/settings/modal";
export default {
  data() {
    return {
      type: "",
      showModal: false
    };
  },
  components: {
    SettingModal
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    }),
    telNum() {
      let tel = this.userInfo.username + "";
      if (tel === "undefined") {
        return "";
      }
      let before = tel.substring(0, 3);
      let after = tel.substring(7);
      let result = before + "****" + after;
      return result;
    }
  },
  methods: {
    showModalHandler(type) {
      this.type = type;
      this.showModal = true;
    },
    closeModalHandler() {
      this.showModal = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.setting-container {
  background: #fff;
  border-radius: 4px;
  padding: 20px 20px 0;
  border: solid 1px #e5e5e5;
  .title {
    font-size: 20px;
    line-height: 26px;
    color: #333;
  }
  .type {
    font-size: 14px;
    color: #666;
    line-height: 40px;
    margin-bottom: 20px;
  }
  ul {
    .infoItem {
      border-top: solid 1px #e5e5e5;
      padding: 30px 10px 30px 0;
      display: flex;
      align-items: center;
      .labelName {
        width: 95px;
        padding-right: 30px;
        text-align: right;
        font-size: 18px;
        border-right: solid 1px #e5e5e5;
      }
      .content {
        color: #666;
        padding-left: 30px;
        margin-right: auto;
        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
