<template>
  <div class="mt-list">
    <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px;">
      <el-breadcrumb-item :to="{ path: '/' }">{{city}}美团</el-breadcrumb-item>
      <el-breadcrumb-item>{{city+keyword}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row gutter="10">
      <el-col :span="19">
        <div class="selectArea">
          <category-select></category-select>
        </div>
        <div class="listArea">
          <product-list></product-list>
        </div>
      </el-col>
      <el-col :span="5">
        <a-map id="listMap" width="230px" height="220px" :point="point"></a-map>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
import AMap from "@/components/list/map";
import CategorySelect from "@/components/list/category";
import ProductList from "@/components/list/product";
export default {
  data() {
    return {
      keyword: this.$route.params.keyword,
      point: [116.397428, 39.90923]
    };
  },
  components: {
    AMap,
    CategorySelect,
    ProductList
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
  .selectArea,
  .listArea {
    background: #fff;
    border: solid 1px #e5e5e5;
    border-radius: 4px;
    margin-bottom: 10px;
    padding: 15px;
  }
}
</style>
