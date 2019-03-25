<template>
  <div>
    <el-row style="height: 240px;">
      <el-col :span="15">
        <el-carousel>
          <el-carousel-item v-for="item in swiperData" :key="item">
            <img :src="item.url" width="100%" height="100%">
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="4">
        <img
          src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg"
          alt
          width="100%"
          height="100%"
        >
      </el-col>
      <el-col :span="5">右侧</el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
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