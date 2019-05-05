<template>
  <div :id="id" :style="{width,height}">地图</div>
</template>
<script>
export default {
  props: {
    id: {
      type: String
    },
    width: { type: String },
    height: { type: String },
    point: {
      type: Array
    }
  },
  data() {
    return {};
  },
  mounted() {
    window.onLoad = () => {
      let map = new AMap.Map(this.id, {
        resizeEnable: true,
        center: this.point
      });
      window.AMap.plugin("AMap.ToolBar", () => {
        let toolbar = new AMap.ToolBar();
        map.addControl(toolbar);
        let marker = new window.AMap.Marker({
          icon: "//vdata.amap.com/icons/b18/1/2.png",
          position: this.point
        });
        marker.setMap(map);
      });
    };
    let url =
      "https://webapi.amap.com/maps?v=1.4.14&key=0ce3111bd1ffa1f70ecc83577971f6af&callback=onLoad";
    let jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>