<template>
  <div>
    <title-bar
      title="猫眼电影"
      :tabs="tabs"
      bgcolor="linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%) rgb(250, 60, 104);"
      moreLink="https://maoyan.com/?utm_source=meituanweb"
    ></title-bar>
  </div>
</template>
<script>
import titleBar from "@/components/home/titleBar.vue";
export default {
  data() {
    return {
      tabs: [
        {
          type: "ing",
          text: "正在热映"
        },
        {
          type: "will",
          text: "即将上映"
        }
      ]
    };
  },
  components: { titleBar }
};
</script>