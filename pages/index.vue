<template>
  <div>
    <el-row style="height: 427px;">
      <el-col :span="5" style="position: relative; height: 100%;">
        <menu-list/>
      </el-col>
      <el-col :span="19">
        <banner/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <mt-style/>
      </el-col>
      <el-col :span="24">
        <maoyan-movie/>
      </el-col>
      <el-col :span="24">
        <recommended-homestay/>
      </el-col>
      <el-col :span="24">
        <guess-link/>
      </el-col>
      <el-col :span="24">
        <mt-navigation/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MenuList from "@/components/home/menu.vue";
import Banner from "@/components/home/banner.vue";
import mtStyle from "@/components/home/style.vue";
import maoyanMovie from "@/components/home/maoyanMovie.vue";
import recommendedHomestay from "@/components/home/recommendedHomestay.vue";
import guessLink from "@/components/home/guessLike.vue";
import mtNavigation from "@/components/home/mtNavigation.vue";
export default {
  data() {
    return {};
  },
  components: {
    MenuList,
    Banner,
    mtStyle,
    maoyanMovie,
    recommendedHomestay,
    guessLink,
    mtNavigation
  },
  methods: {},
  computed: {}
};
</script>

<style lang="scss">
</style>
