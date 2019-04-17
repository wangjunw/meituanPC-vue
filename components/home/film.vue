<template>
  <ul>
    <li v-for="item in filmData" :key="item.id">
      <img class="pic" :src="item.img" alt width="100%" height="297px;">
      <div class="desc">
        <p v-if="item.score !== 0">
          观众评
          <span>{{item.score}}</span>
        </p>
        <p v-else>
          <span>{{item.wish}}</span>人想看
        </p>
        <p class="name">{{item.name}}</p>
      </div>
      <span class="btn">{{item.pubDate - now > 0 ? '预售' : '购票'}}</span>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      now: new Date().getTime()
    };
  },
  props: {
    filmData: {
      type: Array,
      default: []
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  padding: 15px 1px 15px 15px;
}
li {
  display: inline-block;
  position: relative;
  margin-right: 19px;
  width: 214px;
  color: #fff;
  .pic {
    border-radius: 4px;
  }
  .desc {
    position: absolute;
    bottom: 10px;
    left: 5px;
    font-weight: 600;
    span {
      color: #fd9827;
      font-size: 16px;
      font-weight: normal;
    }
    .name {
      font-size: 16px;
      font-weight: normal;
      margin-top: -5px;
    }
  }
  .btn {
    position: absolute;
    bottom: 10px;
    right: 12px;
    background: #ff4949;
    border-radius: 100px;
    font-size: 14px;
    padding: 2px 12px 3px;
  }
}
</style>
