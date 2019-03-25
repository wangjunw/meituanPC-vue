<template>
  <div class="m-banner">
    <el-row style="height: 240px;">
      <el-col :span="14">
        <el-carousel style="width: 550px">
          <el-carousel-item v-for="item in swiperData" :key="item">
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
          <p>Hi，你好</p>
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
        <div class="qrcode">二维码</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperData: [
        {
          url:
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg"
        },
        {
          url:
            "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
        },
        {
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