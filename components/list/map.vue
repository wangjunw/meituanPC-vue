<template>
  <div :id="id" :style="{width,height}"></div>
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
    window.onListLoad = () => {
      // center地图的中心位置坐标
      let map = new AMap.Map(this.id, {
        resizeEnable: true,
        center: this.point
      });
      window.AMap.plugin("AMap.ToolBar", () => {
        // 缩放条
        // let toolbar = new AMap.ToolBar();
        // map.addControl(toolbar);

        // 标记，如果有多个就多新建几个marker对象
        let marker = new window.AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: this.point,
          title: "天安门"
          // content: "1" 可以自定义标记物
        });
        marker.setMap(map);
      });
    };
    let url =
      "https://webapi.amap.com/maps?v=1.4.14&key=0ce3111bd1ffa1f70ecc83577971f6af&callback=onListLoad";
    let jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>