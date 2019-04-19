<template>
  <ul>
    <li v-for="item in filmData" :key="item.id">
      <img class="pic" :src="item.img" alt width="100%" height="297px;">
      <img :src="image_3dmax" alt v-if="is3D(item.ver)" class="_3dmax">
      <div class="desc">
        <p v-if="item.pubDate - now < 0">
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
      now: new Date().getTime(),
      image_3dmax: require("@/static/images/imax3d.png")
    };
  },
  props: {
    filmData: {
      type: Array,
      default: []
    }
  },
  methods: {
    is3D(ver) {
      let reg = /3D/g;
      return reg.test(ver);
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
ul {
  padding: 18px 1px 18px 20px;
  box-sizing: border-box;
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
  ._3dmax {
    position: absolute;
    width: 78px;
    height: 20px;
    left: -5px;
    top: 10px;
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
    cursor: pointer;
  }
}
</style>
