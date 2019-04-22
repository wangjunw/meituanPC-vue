<template>
  <div>
    <title-bar
      title="推荐民宿"
      :tabs="tabs"
      bgcolor="linear-gradient(to right, rgb(243, 182, 74) 2%, rgb(242, 197, 69) 97%) rgb(243, 182, 74)"
      moreLink="https://phoenix.meituan.com/"
      @current="changeTabHandler"
    ></title-bar>
    <ul class="home-content">
      <li v-for="item in data" :key="item.productId">
        <a href="javascript:;">
          <img :src="item.coverImage" width="370px" height="208px" class="coverImage">
          <h2 class="title">{{item.title}}</h2>
          <p class="desc">整套{{item.layoutRoom}}居室·可住{{item.maxGuestNumber}} | {{item.locationArea}}</p>
          <p class="price">￥{{item.price}}</p>
          <img :src="item.hostAvatarUrl || defaultImage" class="avatar" width="48px" height="48px">
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import titleBar from "@/components/home/titleBar.vue";
export default {
  data() {
    return {
      defaultImage: require("@/static/images/default.png"),
      tabs: [
        { type: 120100, text: "天津" },
        { type: 370100, text: "济南" },
        { type: 210200, text: "大连" },
        { type: 140100, text: "太原" },
        { type: 130100, text: "石家庄" },
        { type: 130300, text: "秦皇岛" },
        { type: 150100, text: "呼和浩特" },
        { type: 370700, text: "潍坊" },
        { type: 130200, text: "唐山" },
        { type: 370900, text: "泰安" }
      ],
      data: []
    };
  },
  components: { titleBar },
  created() {
    this.getData(120100);
  },
  methods: {
    getData(cityId) {
      this.$axios.$get("/home/minsu", { params: { cityId } }).then(res => {
        if (res.code !== 0) {
          return;
        }
        this.data = res.list;
      });
    },
    changeTabHandler(cityId) {
      this.getData(cityId);
    }
  }
};
</script>
<style lang="scss" scoped>
.home-content {
  padding: 20px 2px 0 20px;
  overflow: hidden;
  li {
    float: left;
    margin-right: 18px;
    position: relative;
    padding-bottom: 30px;
    .coverImage {
      border-radius: 3px;
    }
    .title {
      font-size: 16px;
      color: #222;
      font-weight: 400;
      width: 297px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 16px 0 5px;
    }
    .desc {
      color: #999;
      font-size: 12px;
    }
    .price {
      color: #f60;
      font-size: 22px;
      font-weight: 500;
      &::first-letter {
        font-size: 14px;
      }
    }
    .avatar {
      position: absolute;
      right: 15px;
      top: 183px;
      border-radius: 50%;
      border: solid 2px #fff;
    }
  }
}
</style>
