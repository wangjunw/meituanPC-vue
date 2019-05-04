<template>
  <div class="mt-list">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">{{city}}美团</el-breadcrumb-item>
      <el-breadcrumb-item>{{city+keyword}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="20">
        <div class="grid-content bg-purple">把参数改成动态路由</div>
      </el-col>
      <el-col :span="4">
        <a-map></a-map>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
import AMap from "@/components/list/map";
export default {
  data() {
    return {
      keyword: this.$route.params.keyword
    };
  },
  components: {
    AMap
  },
  computed: {
    ...mapState({
      city: state => state.position.city
    })
  },
  asyncData({}) {}
};
</script>
<style lang="scss" scoped>
.mt-list {
  padding-top: 30px;
}
</style>
