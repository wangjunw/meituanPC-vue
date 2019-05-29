<template>
  <div class="center-container">
    <el-row :gutter="8">
      <el-col :span="5">
        <div class="asideMenu">
          <dl>
            <dt>
              <nuxt-link to="/myMeituan">我的美团</nuxt-link>
            </dt>
          </dl>
          <dl>
            <dt>
              <nuxt-link to="/center/order?status=0">我的订单</nuxt-link>
            </dt>
            <dd v-for="item in orderStatus" :key="item.status">
              <nuxt-link :to="'/center/order?status='+item.status">{{item.text}}</nuxt-link>
              <i class="el-icon-arrow-right"></i>
            </dd>
          </dl>
          <dl>
            <dt>
              <nuxt-link to="/center/collections">我的收藏</nuxt-link>
            </dt>
            <dd v-for="item in collections" :key="item.type">
              <nuxt-link :to="'/center/collections?type='+item.type">{{item.text}}</nuxt-link>
              <i class="el-icon-arrow-right"></i>
            </dd>
          </dl>
          <dl>
            <dt>
              <nuxt-link to="/center/vouchers">抵用券</nuxt-link>
            </dt>
            <dd v-for="item in vouchers" :key="item.type">
              <nuxt-link :to="'/center/vouchers?type='+item.type">{{item.text}}</nuxt-link>
              <i class="el-icon-arrow-right"></i>
            </dd>
          </dl>
          <dl>
            <dt>
              <nuxt-link to="/center/settings">个人信息</nuxt-link>
            </dt>
            <dd v-for="item in personal" :key="item.type">
              <nuxt-link :to="'/center/settings?type='+item.type">{{item.text}}</nuxt-link>
              <i class="el-icon-arrow-right"></i>
            </dd>
          </dl>
        </div>
        <qr-code></qr-code>
      </el-col>
      <el-col :span="19">
        <nuxt-child/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import QrCode from "@/components/home/qrcode";
export default {
  data() {
    return {
      orderStatus: [
        { text: "全部订单", status: "0" },
        { text: "待付款", status: "1" },
        { text: "待使用", status: "2" },
        { text: "待评价", status: "3" },
        { text: "退款/售后", status: "4" }
      ],
      collections: [
        {
          text: "收藏的商家",
          type: "store"
        },
        {
          text: "收藏的团购",
          type: "groupBuy"
        }
      ],
      vouchers: [
        { text: "可用券", type: "available" },
        { text: "失效券", type: "invalid" }
      ],
      personal: [{ text: "账户设置", type: "accountSetting" }]
    };
  },
  components: {
    QrCode
  }
};
</script>
<style lang="scss" scoped>
.center-container {
  padding-top: 20px;
  .asideMenu {
    padding: 18px 20px 20px 30px;
    box-sizing: border-box;
    background-color: #fff;
    margin-bottom: 10px;
    border: solid 1px #e5e5e5;
    border-radius: 3px;
    dt {
      margin: 12px 0;
      a {
        font-size: 16px;
        color: #222;
      }
    }
    dd {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 15px 0;
      a {
        color: #666;
        font-size: 14px;
      }
    }
  }
}
</style>
