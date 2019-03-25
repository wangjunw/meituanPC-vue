<template>
  <div>
    <el-row style="height: 427px;">
      <el-col :span="5" style="position: relative; height: 100%;">
        <menu-list/>
      </el-col>
      <el-col :span="19">
        <banner/>>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">1</el-col>
      <el-col :span="24">2</el-col>
      <el-col :span="24">3</el-col>
      <el-col :span="24">4</el-col>
      <el-col :span="24">
        <mt-navigation></mt-navigation>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MenuList from "@/components/home/menu.vue";
import Banner from "@/components/home/banner.vue";
import mtNavigation from "@/components/home/mtNavigation.vue";
export default {
  data() {
    return {};
  },
  components: { MenuList, Banner, mtNavigation },
  methods: {},
  computed: {}
};
</script>

<style lang="scss" scope>
</style>
