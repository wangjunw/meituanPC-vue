<template>
  <el-row :gutter="0">
    <el-col :span="6">
      <city/>
    </el-col>
    <el-col :span="6">
      <user/>
    </el-col>
    <el-col :span="6">
      <my-nav></my-nav>
    </el-col>
  </el-row>
</template>
<script>
import City from "./city";
import User from "./user";
import MyNav from "./nav";
export default {
  components: {
    City,
    User,
    MyNav
  }
};
</script>
<style lang="scss">
</style>
