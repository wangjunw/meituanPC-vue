<template>
  <div class="cart-container">
    <div v-if="tableData.length" class="content">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{background: '#e5e5e5', padding: '5px 0'}"
      >
        <el-table-column prop="name" label="项目" width="600px"></el-table-column>
        <el-table-column prop="price" label="单价" align="center">
          <template slot-scope="scope">
            <p>￥{{scope.row.price}}</p>
          </template>
        </el-table-column>
        <el-table-column prop="count" label="数量" align="center">
          <template slot-scope="scope">
            <el-input-number size="small" v-model="scope.row.count" :min="1"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column prop="total" label="总价" align="center">
          <template slot-scope="scope">
            <p>￥{{scope.row.count * scope.row.price}}</p>
          </template>
        </el-table-column>
      </el-table>
      <div class="totalPrice">
        应付金额：
        <span>￥{{totalPrice}}</span>
      </div>
      <p class="tips">
        将发送美团券密码至手机号：{{telNum}}
        <nuxt-link to="/">绑定新手机号</nuxt-link>
      </p>
      <div class="submit">
        <el-button type="success" @click="createOrder">提交订单</el-button>
      </div>
    </div>
    <div v-else class="empty">暂无数据</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  async asyncData(ctx) {
    let {
      code,
      data: { price, name, pic }
    } = await ctx.$axios.$get("/cart/getCartInfo", {
      params: {
        cartNo: ctx.query.id
      }
    });
    if (code !== 0) {
      return { tableData: [] };
    }
    return {
      cartNo: ctx.query.id,
      tableData: [
        {
          price,
          name,
          pic,
          count: 1
        }
      ]
    };
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.tableData.forEach(item => {
        total += item.price * item.count;
      });
      return total;
    },
    ...mapState({
      userInfo: state => state.user.userInfo
    }),
    telNum() {
      let tel = this.userInfo.username + "";
      if (tel === "undefined") {
        return "";
      }
      let before = tel.substring(0, 3);
      let after = tel.substring(7);
      let result = before + "****" + after;
      return result;
    }
  },
  methods: {
    createOrder() {
      let cartInfo = this.tableData[0];
      this.$axios
        .$post("/order/createOrder", {
          cartNo: this.cartNo,
          price: cartInfo.price,
          name: cartInfo.name,
          count: cartInfo.count,
          pic: cartInfo.pic,
          total: this.totalPrice
        })
        .then(res => {
          if (res.code !== 0) {
            this.$message({
              message: "订单创建失败！请重新尝试",
              type: "warning"
            });
            return;
          }
          this.$router.replace("/order");
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.cart-container {
  background: #fff;
  margin-top: 20px;
  padding: 20px;
  .totalPrice {
    padding: 20px 10px;
    text-align: right;
    margin-top: 20px;
    border-bottom: solid 1px #e5e5e5;
    border-top: solid 1px #e5e5e5;
    span {
      color: #f60;
      font-size: 24px;
      font-weight: bolder;
      vertical-align: middle;
    }
  }
  .tips {
    padding: 10px;
  }
  .submit {
    text-align: right;
  }
  .empty {
    text-align: center;
    padding: 20px 0;
  }
}
</style>
