<template>
  <div class="album-container">
    <div class="album" @click="showPopHandler">
      <img :src="firstImage" width="100%" height="214" class="bigImg" alt>
      <ul class="foot">
        <li v-for="(item,index) in images" :key="index">
          <img :src="item" width="100%" height="100%" alt>
        </li>
      </ul>
    </div>
    <div class="pop" v-show="showPop">
      <div class="warp">
        <p class="top">
          <i class="el-icon-close" @click="closePopHandler"></i>
        </p>
        <el-carousel arrow="always" indicator-position="none" :autoplay="false" height="500px">
          <el-carousel-item v-for="(item,index) in images" :key="index">
            <div style="position: relative;">
              <img :src="item" alt class="itemImg">
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPop: false
    };
  },
  props: {
    images: {
      type: Array
    }
  },
  methods: {
    showPopHandler() {
      this.showPop = true;
    },
    closePopHandler() {
      this.showPop = false;
    }
  },
  computed: {
    firstImage() {
      return this.images && this.images[0] ? this.images[0] : "";
    }
  }
};
</script>
<style lang="scss" scoped>
.album-container {
  .album {
    .bigImg {
      cursor: pointer;
    }
    .foot {
      overflow: hidden;
      white-space: nowrap;
      height: 50px;
      margin-top: 10px;
      li {
        float: left;
        width: 24%;
        height: 50px;
        margin-right: 1%;
        img {
          border-radius: 3px;
          cursor: pointer;
        }
      }
    }
  }
  .pop {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: 0.5);
    z-index: 100;
    left: 0;
    top: 0;
    right: 0;
    top: 0;
    .warp {
      width: 1190px;
      margin: 0 auto;
      padding-top: 30px;
      .top {
        display: flex;
        justify-content: flex-end;
        height: 30px;
        margin: 0 30px 40px 0;
        .el-icon-close {
          color: #fff;
          font-size: 50px;
          cursor: pointer;
        }
      }
      .itemImg {
        display: block;
        margin: auto;
        width: 60%;
        max-height: 637px;
      }
    }
  }
}
</style>
