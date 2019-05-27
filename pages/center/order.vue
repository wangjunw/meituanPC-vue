<template>
  <div>
    <el-tabs v-model="currentStatus" @tab-click="changeTabs">
      <el-tab-pane
        v-for="item in orderStatus"
        :key="item.status"
        :label="item.text"
        :name="item.status"
      >列表</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderStatus: [
        { text: "全部订单", status: "0" },
        { text: "待付款", status: "1" },
        { text: "待使用", status: "2" },
        { text: "待评价", status: "3" },
        { text: "退款/售后", status: "4" }
      ],
      currentStatus: this.$route.query.status
    };
  },
  async asyncData(ctx) {
    let { code } = await ctx.$axios.$get("/order/getOrders");
    if (code !== 0) {
      return {};
    }
    return {};
  },
  methods: {
    changeTabs(e) {
      this.$router.push("/center/order?status=" + e.name);
    }
  },
  watch: {
    $route(to, from) {
      this.currentStatus = this.$route.query.status;
    }
  }
};
</script>