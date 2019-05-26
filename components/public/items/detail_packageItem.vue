<template>
  <div class="packageItem-container">
    <div class="packageItem" @click="dialogVisible = true">
      <img :src="packageInfo.pic" alt class="packagePic">
      <div class="info">
        <p class="name">{{packageInfo.name}}</p>
        <p class="sold">已售{{packageInfo.sold}}</p>
        <div>
          <span class="price">
            <span>￥</span>
            <span class="num">{{packageInfo.price}}</span>
          </span>
          <span class="storePrice">门店价￥{{packageInfo.storePrice}}</span>
        </div>
      </div>
      <el-button type="warning" round @click.stop="buyPackage">立即抢购</el-button>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="830px" :close-on-click-modal="false">
      <div class="dialogContent">
        <div class="top">
          <img :src="packageInfo.pic" alt class="dialogPic">
          <div>
            <p class="dialogName">{{packageInfo.name}}</p>
            <div class="dialogPrice">
              <span class="price">
                ￥
                <span>{{packageInfo.price}}</span>
              </span>
              <span class="storePrice">门店价￥{{packageInfo.storePrice}}</span>
            </div>
            <div class="dialogBtns">
              <el-button type="warning" round @click="buyPackage">立即抢购</el-button>
              <el-button round>查看详情</el-button>
            </div>
          </div>
        </div>
        <div class="orderDetail">抱歉，暂无其它数据0_0</div>
      </div>
      <div slot="footer" class="dialog-footer"></div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  props: {
    packageInfo: {
      type: Object
    }
  },
  methods: {
    buyPackage() {
      this.$axios
        .$post("/cart/create", {
          id:
            new Date().getTime() +
            Math.random()
              .toString()
              .slice(3, 9),
          detail: {
            price: this.packageInfo.price,
            pic: this.packageInfo.pic,
            name: this.packageInfo.name
          }
        })
        .then(res => {
          if (res.code !== 0) {
            this.$message({
              message: "当前套餐太火爆了！请重新尝试",
              type: "warning"
            });
            return;
          }
          window.location.href = `/cart?id=${res.cartNo}`;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.packageItem-container {
  &:last-of-type .packageItem {
    border: none;
  }
  .packageItem {
    display: flex;
    align-items: center;
    margin-top: 17px;
    padding-bottom: 20px;
    border-bottom: solid 1px #e5e5e5;
    cursor: pointer;

    .packagePic {
      margin-right: 20px;
      width: 100px;
      height: 100px;
      border-radius: 3px;
    }
    .info {
      margin-right: auto;
      .name {
        font-size: 16px;
        line-height: 22px;
      }
      .sold {
        margin: 1px 0 22px;
        color: #666;
      }
      .price {
        color: #f60;
        font-size: 14px;
        margin-right: 5px;
        .num {
          font-size: 30px;
        }
      }
      .storePrice {
        color: #999;
      }
    }
  }
  .dialogContent {
    margin: 0 60px;
    .top {
      display: flex;
      .dialogPic {
        widows: 150px;
        height: 150px;
        border-radius: 4px;
        margin-right: 40px;
      }
      .dialogName {
        font-size: 26px;
        line-height: 37px;
        color: #222;
        margin-bottom: 6px;
      }
      .dialogPrice {
        font-size: 12px;
        .price {
          color: #31bbac;
          margin-right: 5px;
          span {
            font-size: 24px;
          }
        }
      }
      .dialogBtns {
        margin-top: 33px;
      }
    }
    .orderDetail {
      margin-top: 30px;
    }
  }
}
</style>
