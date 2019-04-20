<template>
  <div>
    <title-bar
      title="猜你喜欢"
      :tabs="tabs"
      bgcolor="linear-gradient(to right, rgb(18, 210, 198) 2%, rgb(14, 190, 212) 97%) rgb(18, 210, 198)"
    ></title-bar>
    <div class="home-content">
      <ul>
        <li v-for="item in data" :key="item.itemId">
          <a href="javascript:;">
            <img :src="item.imgUrl" class="pic" width="100%">
            <h3 class="title">{{item.title}}</h3>
            <div class="comment">
              <div class="commentStar">
                <div class="starBg">
                  <i class="el-icon-star-on" v-for="(i, index) in 5" :key="index"></i>
                </div>
                <div class="star" :style="{width: `${item.score/5.0*100}%`}">
                  <i class="el-icon-star-on" v-for="(i, index) in 5" :key="index"></i>
                </div>
              </div>
              <p class="commentNum">{{item.commentNum}}个评价</p>
            </div>
            <p class="areaName">{{item.areaName}}</p>
            <p class="price">
              ￥
              <span>{{item.lowPrice}}</span>起
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import titleBar from "@/components/home/titleBar.vue";
export default {
  data() {
    return {
      tabs: [{ type: "1", text: "为你甄选最合适的" }],
      data: []
    };
  },
  components: { titleBar },
  created() {
    this.$axios.$get("/home/guesslike").then(res => {
      if (res.code !== 0) {
        this.data = [];
        return;
      }
      this.data = res.data;
    });
  }
};
</script>
<style lang="scss" scoped>
ul {
  padding: 10px;
  overflow: hidden;
  li {
    a {
      color: #999;
    }
    float: left;
    padding: 10px;
    width: 20%;
    box-sizing: border-box;
    border-radius: 5px;
    &:hover {
      background: #f8f8f8;
    }
    .pic {
      border-radius: 5px;
    }
    .title {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 8px 0;
      color: #000;
    }
    .comment {
      display: flex;
      .commentStar {
        width: 84px;
        font-size: 12px;
        position: relative;
        margin-right: 8px;
        i {
          padding: 0 2px;
        }
        .starBg {
          position: absolute;
        }
        .star {
          position: absolute;
          color: #f90;
          z-index: 2;
          overflow: hidden;
          white-space: nowrap;
        }
      }
      .commentNum {
        position: relative;
        top: -1px;
      }
    }
    .price {
      color: #f60;
      font-weight: 700;
      font-size: 14px;
      span {
        font-size: 22px;
        font-weight: normal;
        margin-right: 2px;
        margin-left: -2px;
        font-family: numbers !important;
      }
    }
  }
}
</style>
