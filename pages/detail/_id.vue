<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="padding: 20px 0;">
      <el-breadcrumb-item :to="{ path: '/' }">{{city}}美团</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path: '/list/美食'}">美食列表</el-breadcrumb-item>
      <el-breadcrumb-item>详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div>详情</div>
    <el-row :gutter="10">
      <el-col :span="19">
        <div class="groupBuy">
          <h2 class="title">商家团购及优惠</h2>
          <div class="groupBuyContent border">
            <div v-if="userInfo.username"></div>
            <div v-else class="noLogin">
              <img :src="noLoginImg" alt width="160" height="120">
              <h2 class="tips">请登录后查看详细团购优惠</h2>
              <el-button type="success" round @click="toLogin">立即登录</el-button>
            </div>
          </div>
        </div>
        <div class="recommend">
          <h2 class="title">推荐菜</h2>
          <div class></div>
        </div>
        <div class="comment">
          <h2>{{}}条网友点评</h2>
          <div></div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="guessLike border">
          <h2>猜你喜欢</h2>
          <guess-like-item v-for="(item, index) in guessLikeData" :key="index" :item="item"></guess-like-item>
        </div>
      </el-col>
    </el-row>

    <div class="nearby">
      <h2 class="title">附近商家</h2>
      <div class="list border">
        <nearby-item v-for="item in nearbyData" :key="item.id" :item="item" style="width: 20%;"></nearby-item>
      </div>
    </div>
  </div>
</template>
<script>
import GuessLikeItem from "@/components/public/items/guessLikeItem";
import NearbyItem from "@/components/public/items/nearbyItem";
export default {
  data() {
    return {
      guessLikeData: [],
      noLoginImg: require("@/static/images/detail_noLogin_img.png"),
      nearbyData: []
    };
  },
  created() {
    this.$axios.$get("/home/guesslike").then(res => {
      if (res.code !== 0) {
        this.guessLikeData = [];
        return;
      }
      this.guessLikeData = res.data;
    });
    this.$axios
      .$get("/detail/nearby")
      .then(res => {
        if (res.code !== 0) {
          return;
        }
        this.nearbyData = res.data;
      })
      .catch(() => {
        this.$message.error("获取附近商家失败");
      });
  },
  components: {
    GuessLikeItem,
    NearbyItem
  },
  async asyncData({ route, store, $axios }) {
    let {
      data: { tags, comments }
    } = await $axios.$get("/detail/comment");
    let {
      data: { items, list }
    } = await $axios.$get("/detail/recommend");
    return {
      city: store.state.position.city,
      userInfo: store.state.user.userInfo,
      commentTags: tags || [],
      comments: comments || [],
      recommendList: list || [],
      recommendItems: items || []
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/account/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.groupBuy {
  .groupBuyContent {
    .noLogin {
      text-align: center;
      padding: 30px 0;
      .tips {
        margin: 15px 0;
        font-size: 16px;
      }
    }
  }
}

.border {
  background: #fff;
  border: solid 1px #e5e5e5;
  border-radius: 3px;
}
.title {
  margin-bottom: 10px;
  color: #000;
  font-weight: bold;
  font-size: 20px;
}
.guessLike {
  h2 {
    padding: 15px 0 5px 10px;
    color: #000;
    font-weight: bold;
  }
}
.nearby {
  .list {
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>
