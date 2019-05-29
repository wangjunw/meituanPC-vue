<template>
  <div class="order-container">
    <el-tabs v-model="currentStatus" @tab-click="changeTabs">
      <el-tab-pane
        v-for="item in orderStatus"
        :key="item.status"
        :label="item.text"
        :name="item.status"
      ></el-tab-pane>
    </el-tabs>
    <div v-if="nodata" class="nodata">对不起，没有可以使用的订单</div>
    <div class="list">
      <order-item v-for="(item,index) in listData" :key="index" :item="item"></order-item>
    </div>
  </div>
</template>

<script>
import OrderItem from "@/components/public/items/orderItem";
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentStatus: this.$route.query.status
    };
  },
  components: {
    OrderItem
  },
  computed: {
    ...mapState(["orderStatus"])
  },
  async asyncData(ctx) {
    let { code, data } = await ctx.$axios
      .$get("/order/getOrders")
      .catch(() => {});
    if (code !== 0 || data.length === 0) {
      return {
        allData: [],
        listData: [],
        nodata: true
      };
    }
    let status = ctx.query.status;
    let listData = [];
    if (status == 0) {
      listData = data;
    } else {
      listData = data.filter(item => item.status == status);
    }
    let nodata = false;
    if (listData.length === 0) {
      nodata = true;
    }
    return { allData: data, listData, nodata };
  },
  methods: {
    changeTabs(e) {
      this.$router.push("/center/order?status=" + e.name);
    }
  },
  watch: {
    $route(to, from) {
      let status = this.$route.query.status;
      this.currentStatus = status;
      if (status == 0) {
        this.listData = this.allData;
      } else {
        this.listData = this.allData.filter(
          item => item.status == this.$route.query.status
        );
      }
      if (this.listData.length === 0) {
        this.nodata = true;
      } else {
        this.nodata = false;
      }
    }
  }
};
</script>

<style lang="scss">
.order-container {
  background: #fff;
  padding: 20px;
  border: solid 1px #e5e5e5;
  border-radius: 3px;
  .nodata {
    text-align: center;
    padding: 40px 0 20px;
    font-size: 14px;
    color: #666;
  }
  .el-tabs__header {
    margin-bottom: 0;
  }
  .el-tabs__item {
    font-size: 20px;
    width: 105px;
    text-align: center;
    height: 60px;
    line-height: 60px;
  }
}
</style>
