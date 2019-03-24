<template>
  <div>
    <el-row style="height: 427px;">
      <el-col :span="5" style="position: relative; height: 100%;">
        <menu-list/>
      </el-col>
      <el-col :span="19">图片</el-col>
    </el-row>
    <el-row>
      <el-col :span="24">内容</el-col>
    </el-row>
  </div>
</template>

<script>
import MenuList from "@/components/home/menu.vue";
export default {
  data() {
    return {};
  },
  components: { MenuList },
  methods: {},
  computed: {}
};
</script>

<style lang="scss" scope>
</style>
