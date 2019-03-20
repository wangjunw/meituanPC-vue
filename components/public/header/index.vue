<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <city/>
    </el-col>
    <el-col :span="6">
      <user/>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple"></div>
    </el-col>
  </el-row>
</template>
<script>
import City from "./city";
import User from "./user";
export default {
  components: {
    City,
    User
  }
};
</script>
<style lang="scss">
</style>
