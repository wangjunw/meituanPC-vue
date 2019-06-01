<template>
  <div class="myMeituan-container">
    <div class="head">
      <div class="info">
        <img :src="userInfo.avatar" alt class="avatar">
        <div class="content">
          <h3 v-if="userInfo && userInfo.username">{{userInfo.nickname || userInfo.username}}</h3>
          <p>
            我的余额：￥{{'0'}}
            <a href="javascript:;">充值卡充值</a>
          </p>
        </div>
        <nuxt-link to="/center/settings">个人信息设置 ></nuxt-link>
      </div>
      <ul class="orderList">
        <li v-for="(item,index) in orderStatus" :key="index">
          <nuxt-link :to="'/center/order?status=' +item.status">{{item.text}}</nuxt-link>
        </li>
      </ul>
    </div>
    <guess-like style="margin-top:-20px;"></guess-like>
  </div>
</template>
<script>
import GuessLike from "@/components/home/guessLike.vue";
import { mapState } from "vuex";
export default {
  components: {
    GuessLike
  },
  computed: {
    ...mapState({
      orderStatus: state => state.orderStatus,
      userInfo: state => state.user.userInfo
    })
  }
};
</script>
<style lang="scss" scoped>
.myMeituan-container {
  .head {
    background: #fff;
    border-radius: 5px;
    .info {
      height: 209px;
      padding: 0 30px;
      display: flex;
      align-items: center;
      background: #15b9b9;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      * {
        color: #fff;
      }
      .avatar {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        margin-right: 20px;
      }
      .content {
        margin-right: auto;
        h3 {
          font-size: 26px;
        }
        p {
          font-size: 14px;
        }
      }
    }
    .orderList {
      padding: 35px;
      display: flex;
      justify-content: space-around;
      font-size: 14px;
      a {
        color: #222;
      }
    }
  }
}
</style>
