<template>
  <div class="popmap-container">
    <div class="content-warp">
      <p class="top">
        <i class="el-icon-close" @click="showMapHandler(false)"></i>
      </p>
      <div class="changeLayer">
        <button
          :class="{'active': curLayerType === 'tileLayer'}"
          @click="changeLayer('tileLayer')"
        >地图</button>
        <button
          :class="{'active': curLayerType === 'satellite'}"
          @click="changeLayer('satellite')"
        >卫星</button>
      </div>
      <div id="mapContainer" :style="{width: '790px', height: '500px'}"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      curLayerType: "tileLayer",
      map: "",
      layer: ""
    };
  },
  props: {
    showMapHandler: {
      type: Function
    },
    storeInfo: {
      type: Object
    }
  },
  mounted() {
    window.onLoad = () => {
      this.buildMap();
    };
    let url =
      "https://webapi.amap.com/maps?v=1.4.14&key=0ce3111bd1ffa1f70ecc83577971f6af&callback=onLoad";
    let jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  },
  methods: {
    closeHandler() {},
    buildMap() {
      // center地图的中心位置坐标，没有数据直接写死的，如果有数据直接替换即可
      this.map = new AMap.Map(mapContainer, {
        resizeEnable: true,
        center: [116.397428, 39.90923],
        zoom: 13
      });
      window.AMap.plugin("AMap.ToolBar", () => {
        // 缩放条
        let toolbar = new AMap.ToolBar();
        this.map.addControl(toolbar);
      });
      // 信息窗体
      var info = [
        "<p>" + this.storeInfo.name + "</p>",
        "<p>" + this.storeInfo.address + "</p>",
        "<a href='https://map.qq.com/?type=nav&tocoord=39.950256,116.34784&c=39.950256,116.34784&l=13'>公交/驾车路线查询>></a>"
      ];
      // 创建 浮层信息
      let infoWindow = new AMap.InfoWindow({
        anchor: "bottom-left",
        content: info.join("")
      });
      // 直接显示，所以直接调用
      infoWindow.open(this.map, [116.397428, 39.90923]);
    },
    // 切换图层
    changeLayer(value) {
      this.curLayerType = value;
      if (value === "satellite") {
        this.layer = new AMap.TileLayer.Satellite();
        this.map.add(this.layer);
      } else {
        this.map.remove(this.layer);
      }
    }
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
    position: relative;
    .top {
      display: flex;
      justify-content: flex-end;
      padding: 8px 5px 8px 0;
      .el-icon-close {
        color: #fff;
        font-size: 28px;
        cursor: pointer;
      }
    }
    .changeLayer {
      z-index: 200;
      position: absolute;
      top: 50px;
      right: 5px;
      font-size: 0;
      button {
        font-size: 13px;
        color: rgb(51, 51, 51);
        border: solid 1px rgb(113, 123, 135);
        background: #fff;
        padding: 2px 3px;
        cursor: pointer;
        &.active {
          color: #fff;
          background: rgb(38, 154, 234);
        }
      }
    }
  }
}
</style>
