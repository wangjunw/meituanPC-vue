<template>
  <div class="m-style">
    <title-bar title="有格调" :tabs="tabs" bgcolor="rgb(190, 164, 116)"></title-bar>
    <ul>
      <li></li>
    </ul>
  </div>
</template>
<script>
import titleBar from "@/components/home/titleBar.vue";
export default {
  data() {
    return {
      currentType: "all",
      tabs: [
        {
          type: "all",
          text: "全部"
        },
        {
          type: "dinner",
          text: "约会聚餐"
        },
        {
          type: "spa",
          text: "丽人SPA"
        },
        {
          type: "movie",
          text: "电影演出"
        },
        {
          type: "tour",
          text: "品质出游"
        }
      ],
      allData: [],
      dinnerData: [],
      spaData: [],
      movieData: [],
      tourData: []
    };
  },
  components: {
    titleBar
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.m-style {
  margin: 40px 0;
}
</style>
