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
          <div class="recommendDish border">
            <ul>
              <li v-for="(item,index) in recommendItems" :key="index">
                <img :src="item.img" alt width="130" height="130">
                <p class="desc">
                  <span class="name">{{item.title}}</span>
                  <span>￥{{item.price}}</span>
                </p>
              </li>
            </ul>
            <div style="margin-right: -20px;">
              <span class="text" v-for="(item,index) in recommendList" :key="index">{{item}}</span>
            </div>
          </div>
        </div>
        <div class="comment">
          <h2 class="commentTitle">
            {{comments.length}}条网友点评
            <p class="sort">
              <span
                :class="{active: sortWay === 'byQuality'}"
                @click="sortHandler('byQuality')"
              >质量排序</span>
              <span
                class="bytime"
                :class="{active: sortWay === 'byTime'}"
                @click="sortHandler('byTime')"
              >时间排序</span>
            </p>
          </h2>
          <div class="border commentContent">
            <ul class="tags">
              <li v-for="(item, index) in commentTags" :key="index">{{item.tag}}({{item.count}})</li>
            </ul>
            <el-checkbox v-model="onlyViewImgComment">只看有图片的评论</el-checkbox>
            <div class="commentList">
              <comment-item v-for="(item, index) in comments" :key="item.did" :item="item"></comment-item>
            </div>
          </div>
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
import CommentItem from "@/components/public/items/commentItem";
export default {
  data() {
    return {
      guessLikeData: [],
      noLoginImg: require("@/static/images/detail_noLogin_img.png"),
      nearbyData: [],
      onlyViewImgComment: false,
      sortWay: "byQuality"
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
    NearbyItem,
    CommentItem
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
    },
    sortHandler(by) {
      this.sortWay = by;
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
.comment {
  .commentTitle {
    font-size: 20px;
    color: #222;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    align-items: center;
    .sort {
      font-size: 12px;
      color: #999;
      span {
        cursor: pointer;
      }
      .bytime {
        margin-left: 15px;
      }
      .active {
        color: #00c9b3;
      }
    }
  }
  .commentContent {
    padding: 15px 20px;
  }
  .tags {
    overflow: hidden;
    margin-bottom: 20px;
    li {
      float: left;
      margin: 0 10px 10px 0;
      padding: 10px;
      border: solid 1px #e5e5e5;
    }
  }
}
.border {
  background: #fff;
  border: solid 1px #e5e5e5;
  border-radius: 3px;
  margin-bottom: 40px;
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
.recommendDish {
  padding: 29px;
  ul {
    overflow: hidden;
    margin-bottom: 30px;
    li {
      float: left;
      position: relative;
      margin-right: 20px;
      &:last-of-type {
        margin-right: 0;
      }
      img {
        display: block;
      }
      .desc {
        background: rgba($color: #000000, $alpha: 0.4);
        color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        padding: 8px 0;
        .name {
          max-width: 60%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  .text {
    font-size: 16px;
    margin: 0 20px 19px 0;
    color: #666;
    display: inline-block;
  }
}
</style>
