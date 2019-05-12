<template>
  <div class="nearbyItem">
    <a href="javascript:;">
      <img :src="item.headIcon" class="pic" width="100%">
      <h3 class="title">{{item.name}}</h3>
      <div class="comment">
        <span>{{item.score}}分</span>
        <span class="commentNum">{{item.sold}}人消费</span>
      </div>
      <p class="price">
        ￥
        <span>{{item.avgPrice}}</span>起
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
.nearbyItem {
  a {
    color: #999;
  }
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  display: inline-block;
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
