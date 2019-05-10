<template>
  <div class="mt-list">
    <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px;">
      <el-breadcrumb-item :to="{ path: '/' }">{{city}}美团</el-breadcrumb-item>
      <el-breadcrumb-item>{{city+keyword}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :span="19">
        <div
          class="selectArea"
          v-if="category.types && category.types.length !== 0 && category.areas && category.areas.length !== 0"
        >
          <category-select
            v-if="category.types && category.types.length !== 0"
            :category="category.types"
            label="分类"
          ></category-select>
          <category-select
            v-if="category.areas && category.areas.length !== 0"
            :category="category.areas"
            label="区域"
            :isLast="true"
          ></category-select>
        </div>
        <div class="listArea">
          <div class="sort">
            <span v-for="item in sorts" :key="item.value">
              {{item.name}}
              <i class="el-icon-d-caret" v-if="item.value === 'price'"></i>
            </span>
          </div>
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
      point: [116.397428, 39.90923],
      category: { types: [], areas: [] },
      curSort: "smart",
      sorts: [
        { name: "智能排序", value: "smart" },
        { name: "价格排序", value: "price" },
        { name: "人气最高", value: "popularity" },
        { name: "评价最该", value: "evaluate" }
      ]
    };
  },
  components: {
    AMap,
    CategorySelect,
    ProductList
  },
  created() {
    this.$axios
      .$get("/list/category", { params: { city: this.city } })
      .then(res => {
        if (res.code !== 0) {
          return;
        }
        this.category = res.data;
      })
      .catch(() => {
        this.category = {};
      });
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
    .sort {
      span {
        display: inline-block;
        min-width: 96px;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
}
</style>
