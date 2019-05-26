<template>
  <div>订单页</div>
</template>

<script>
export default {
  async asyncData(ctx) {
    let { code } = await ctx.$axios.$get("/order/getOrders");
    if (code !== 0) {
      return {};
    }
    return {};
  }
};
</script>