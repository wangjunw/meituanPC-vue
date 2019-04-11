<template>
  <div>
    <title-bar
      title="猫眼电影"
      :tabs="tabs"
      bgcolor="linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%) rgb(250, 60, 104);"
      moreLink="https://maoyan.com/?utm_source=meituanweb"
    ></title-bar>
    <div>
      <el-carousel trigger="click" height="150px" v-if="currentType === 'hot'">
        <el-carousel-item>
          <div v-for="item in hotFilms" :key="item.id"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div v-for="item in hotFilms" :key="item.id"></div>
        </el-carousel-item>
      </el-carousel>
      <el-carousel trigger="click" height="150px" v-else>
        <el-carousel-item>
          <div v-for="item in comingFilms" :key="item.id"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div v-for="item in comingFilms" :key="item.id"></div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import titleBar from "@/components/home/titleBar.vue";
export default {
  data() {
    return {
      tabs: [
        {
          type: "hot",
          text: "正在热映"
        },
        {
          type: "coming",
          text: "即将上映"
        }
      ],
      hotFilms: [],
      comingFilms: [],
      currentTab: "hot"
    };
  },
  components: { titleBar },
  created() {
    this.$axios.$get("/catMovie/getHotFilms").then(res => {
      if (res.code === 0) {
        this.hotFilms = res.data;
      } else {
        this.hotFilms = [];
      }
    });
    this.$axios.$get("/catMovie/getComingFilms").then(res => {
      if (res.code === 0) {
        this.comingFilms = res.data;
      } else {
        this.comingFilms = [];
      }
    });
  }
};
</script>