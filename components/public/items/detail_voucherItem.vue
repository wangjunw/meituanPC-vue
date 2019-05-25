<template>
  <div class="voucherItem">
    <div class="voucher" :style="{backgroundImage: `url(${voucherBg})`}">
      <p class="price">￥{{voucherInfo.price}}</p>
      <p class="value">代{{voucherInfo.value}}元代金券</p>
    </div>
    <div class="info">
      <p class="name">{{voucherInfo.price}}元 代{{voucherInfo.value}}元代金券</p>
      <p class="sold">已售{{voucherInfo.sold}}</p>
    </div>
    <el-button type="warning" round @click="buyVoucher">立即抢购</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      voucherBg: require("@/static/images/voucherBg.png")
    };
  },
  props: {
    voucherInfo: {
      type: Object
    }
  },
  methods: {
    buyVoucher() {}
  }
};
</script>
<style lang="scss" scoped>
.voucherItem {
  display: flex;
  align-items: center;
  margin-top: 17px;
  padding-bottom: 20px;
  border-bottom: solid 1px #e5e5e5;
  &:last-of-type {
    border: none;
  }
  .voucher {
    width: 140px;
    height: 89px;
    margin-right: 20px;
    padding: 11px 10px 0;
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 14px;
    text-align: center;
    position: relative;
    .voucherBg {
      width: 100%;
      height: 100%;
      position: absolute;
    }
    .price {
      color: #f60;
      font-size: 30px;
      &::first-letter {
        font-size: 14px;
      }
    }
    .value {
      border-top: dashed 1px #ccc;
      padding-top: 5px;
      box-sizing: border-box;
    }
  }
  .info {
    margin-right: auto;
    height: 100px;
    .name {
      font-size: 16px;
      line-height: 22px;
    }
    .sold {
      margin: 1px 0 22px;
      color: #666;
    }
  }
}
</style>
