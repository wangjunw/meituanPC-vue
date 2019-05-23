<template>
  <div class="popmap-container">
    <div class="content-warp">
      <p class="top">
        <i class="el-icon-close" @click="showMapHandler(false)"></i>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    showMapHandler: {
      type: Function
    }
  },
  methods: {
    closeHandler() {}
  }
};
</script>
<style lang="scss" scoped>
.popmap-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.3);
  z-index: 100;
  left: 0;
  top: 0;
  right: 0;
  top: 0;
  .content-warp {
    margin: 100px auto 0;
    width: 790px;
    padding: 3px;
    background: #000;
    border-radius: 4px;
    .top {
      display: flex;
      justify-content: flex-end;
      padding-right: 5px;
      .el-icon-close {
        color: #fff;
        font-size: 28px;
        cursor: pointer;
      }
    }
  }
}
</style>
