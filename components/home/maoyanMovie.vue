<template>
  <div>
    <title-bar
      title="猫眼电影"
      :tabs="tabs"
      bgcolor="rgb(250, 60, 104);"
      moreLink="https://maoyan.com/?utm_source=meituanweb"
      @current="changeType"
    ></title-bar>
    <div class="warp">
      <div v-if="currentTab === 'hot'">
        <el-carousel
          trigger="click"
          height="336px"
          v-if="hotFilms.length !== 0"
          :autoplay="false"
          :loop="false"
        >
          <el-carousel-item>
            <film :filmData="hotFilmsPart1"/>
          </el-carousel-item>
          <el-carousel-item>
            <film :filmData="hotFilmsPart2"/>
          </el-carousel-item>
        </el-carousel>
        <p v-else class="nodata">暂无热映资源</p>
      </div>
      <div v-else>
        <el-carousel
          trigger="click"
          height="336px"
          v-if="comingFilms.length !== 0"
          :autoplay="false"
          :loop="false"
        >
          <el-carousel-item>
            <film :filmData="comingFilmsPart1"/>
          </el-carousel-item>
          <el-carousel-item>
            <film :filmData="comingFilmsPart2"/>
          </el-carousel-item>
        </el-carousel>
        <p v-else class="nodata">暂无即将上映资源</p>
      </div>
    </div>
  </div>
</template>
<script>
import titleBar from "@/components/home/titleBar.vue";
import Film from "@/components/home/film.vue";
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
      currentTab: "hot",
      everyCounts: 5
    };
  },
  components: { titleBar, Film },
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
  },
  computed: {
    hotFilmsPart1() {
      return this.hotFilms.slice(0, 5);
    },
    hotFilmsPart2() {
      return this.hotFilms.slice(5, 10);
    },
    comingFilmsPart1() {
      return this.comingFilms.slice(0, 5);
    },
    comingFilmsPart2() {
      return this.comingFilms.slice(5, 10);
    }
  },
  methods: {
    changeType(e) {
      this.currentTab = e;
    }
  }
};
</script>
<style lang="scss" scoped>
.warp {
  border: 1px solid #e5e5e5;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  .nodata {
    text-align: center;
    height: 336px;
  }
}
</style>
