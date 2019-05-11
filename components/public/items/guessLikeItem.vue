<template>
  <div class="guessLikeItem">
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
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
.guessLikeItem {
  a {
    color: #999;
  }
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
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
</style>
