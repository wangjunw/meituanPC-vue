<template>
  <div class="m-banner">
    <el-row style="height: 240px;">
      <el-col :span="14">
        <el-carousel style="width: 550px">
          <el-carousel-item v-for="item in swiperData" :key="item.index">
            <a href>
              <img :src="item.url" width="100%" height="240px">
            </a>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="4">
        <a href class="t1"></a>
      </el-col>
      <el-col :span="6">
        <div class="loginAndRegister">
          <img :src="avatar" class="avatar">
          <p class="hi">{{name===''?'Hi，你好':name}}</p>
          <div v-if="name === ''">
            <div class="registerBtn">
              <el-button round>注册</el-button>
            </div>
            <el-button round>立即登录</el-button>
          </div>
          <div v-else class="userCenter">
            <ul>
              <li v-for="item in userCenter" :key="item.text">
                <a href>
                  <i class="iconfont" :class="item.icon"></i>
                  <p class="text">{{item.text}}</p>
                </a>
              </li>
            </ul>
            <nuxt-link to="/setting" class="setting">
              <i class="iconfont iconshezhi"></i>
            </nuxt-link>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row style="marginTop: 10px;">
      <el-col :span="14">
        <div class>
          <a href class="f f1"></a>
          <a href class="f f2"></a>
        </div>
      </el-col>
      <el-col :span="4">
        <a href class="f3"></a>
      </el-col>
      <el-col :span="6">
        <div class="qrcode">
          <img
            src="http://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
            alt
            width="95px"
          >
          <p class="title">美团APP手机版</p>
          <p>
            <span class="oneYuan">1元起</span>吃喝玩乐
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      avatar: require("@/static/images/avatar.jpg"),
      name: "均",
      userCenter: [
        {
          icon: "icondingdan2",
          text: "我的订单"
        },
        {
          icon: "iconxingxing",
          text: "我的收藏"
        },
        {
          icon: "iconqian3",
          text: "抵用券"
        },
        {
          icon: "iconyuebao",
          text: "余额"
        },
        {
          icon: "icongengduo",
          text: "更多"
        }
      ],
      swiperData: [
        {
          index: 1,
          url:
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg"
        },
        {
          index: 2,
          url:
            "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
        },
        {
          index: 3,
          url:
            "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/home/banner.scss";
</style>