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
            <span
              v-for="item in sorts"
              :key="item.value"
              :class="{activedSort:curSort === item.value}"
              @click="clickSortHandler(item.value)"
            >
              {{item.name}}
              <i class="el-icon-d-caret" v-if="item.value === 'price'"></i>
            </span>
          </div>
          <div v-if="list.length !== 0">
            <product-item v-for="item in list" :key="item.id" :data="item"></product-item>
          </div>
          <div v-else class="noData">抱歉，暂无数据</div>
        </div>
      </el-col>
      <el-col :span="5">
        <div :style="{position:posiType, top: 0}" ref="mapRef">
          <a-map id="listMap" width="230px" height="220px" :point="point"></a-map>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
import AMap from "@/components/list/map";
import CategorySelect from "@/components/list/category";
import ProductItem from "@/components/list/product";
export default {
  data() {
    return {
      keyword: this.$route.params.keyword,
      point: [116.397428, 39.90923],
      category: { types: [], areas: [] },
      curSort: "smart",
      posiType: "static",
      sorts: [
        { name: "智能排序", value: "smart" },
        { name: "价格排序", value: "price" },
        { name: "人气最高", value: "popularity" },
        { name: "评价最该", value: "evaluate" }
      ],
      list: []
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 240) {
        this.posiType = "fixed";
      } else {
        this.posiType = "static";
      }
    });
  },
  components: {
    AMap,
    CategorySelect,
    ProductItem
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
  methods: {
    clickSortHandler(value) {
      this.curSort = value;
    }
  }
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
    color: #666;
    .sort {
      border-bottom: solid 1px #e5e5e5;
      padding-bottom: 15px;
      span {
        display: inline-block;
        min-width: 96px;
        font-size: 14px;
        cursor: pointer;
      }
      .activedSort {
        color: #31bcad;
      }
    }
  }
  .noData {
    padding-top: 15px;
    text-align: center;
  }
}
</style>
