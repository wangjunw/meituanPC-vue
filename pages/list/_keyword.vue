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
          <product-list :listData="list" :total="total" :pageSize="10"></product-list>
        </div>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            :page-size="10"
            @current-change="this.getListData"
          ></el-pagination>
        </div>
      </el-col>
      <el-col :span="5">
        <div :style="{position:posiType, top: 0, zIndex: 3}" ref="mapRef">
          <a-map id="listMap" width="240px" height="220px" :point="point"></a-map>
        </div>
        <div class="guessLike">
          <h2>猜你喜欢</h2>
          <guess-like-item v-for="item in guessLikeData" :key="item.itemId" :item="item"></guess-like-item>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
import AMap from "@/components/list/map";
import CategorySelect from "@/components/list/category";
import ProductList from "@/components/list/product";
import GuessLikeItem from "@/components/public/items/guessLikeItem";
export default {
  data() {
    return {
      point: [116.397428, 39.90923],
      category: { types: [], areas: [] },
      pageSize: 10,
      pageNo: 0,
      curSort: "smart",
      posiType: "static",
      sorts: [
        { name: "智能排序", value: "smart" },
        { name: "价格排序", value: "price" },
        { name: "人气最高", value: "popularity" },
        { name: "评价最该", value: "evaluate" }
      ],
      guessLikeData: []
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
    ProductList,
    GuessLikeItem
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
    this.$axios.$get("/home/guesslike").then(res => {
      if (res.code !== 0) {
        this.guessLikeData = [];
        return;
      }
      this.guessLikeData = res.data;
    });
  },
  /**
   * 服务端渲染，参数和axios都通过ctx获取，因为这时没有data，ctx就相当于平时的this
   * 这里return的数据和data中是合并的，所以data中不必再写。
   * */
  async asyncData(ctx) {
    // 从路由中获取参数，实际肯定是需要keyword字段的，这里虽传递但是没有作用。
    let keyword = ctx.route.params.keyword;
    let { data, code, total } = await ctx.$axios.$get("/list/listData", {
      params: { keyword, pageSize: 10, pageNo: 0 }
    });
    if (code !== 0) {
      return {
        list: [],
        total: 0,
        keyword
      };
    }
    return { list: data, total, keyword };
  },
  computed: {
    ...mapState({
      city: state => state.position.city
    })
  },
  methods: {
    clickSortHandler(value) {
      this.curSort = value;
    },
    // 通过分页获取数据
    getListData(page) {
      this.pageNo = page - 1;
      this.$axios
        .$get("/list/listData", {
          params: {
            keyword: this.keyword,
            pageSize: this.pageSize,
            pageNo: this.pageNo
          }
        })
        .then(res => {
          this.list = res.data;
        });
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
    padding: 15px 15px 0;
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
  .pagination {
    text-align: center;
  }
  .noData {
    padding-top: 15px;
    text-align: center;
  }
  .guessLike {
    background: #fff;
    margin-top: 20px;
    h2 {
      padding: 10px;
      color: #000;
      font-weight: bolder;
    }
  }
}
</style>
