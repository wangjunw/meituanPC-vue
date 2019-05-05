<template>
  <div>
    <div class="menu">
      <h3 class="title">全部分类</h3>
      <ul @mouseleave="mouseleaveHandler">
        <li v-for="item in menuList" :key="item.type" @mouseenter="mouseenterHandler(item.type)">
          <i :class="item.icon" class="iconfont fontIcon"></i>
          <span class="text" @click="toList(item.name)">{{item.name}}</span>
          <span v-if="item.isHot" class="hot">HOT</span>
          <span class="iconfont iconarrow-right-copy-copy-copy arrow"></span>
        </li>
      </ul>
    </div>
    <div
      class="detail"
      v-if="currentType !== ''"
      @mouseenter="detailEnterHandler"
      @mouseleave="detailLeaveHandler"
    >
      <template v-for="(item,index) in currentDetail.child">
        <h4 :key="index" class="detailTitle">
          <span>{{item.title}}</span>
          <a class="more">
            更多
            <i class="iconfont iconarrow-right-copy-copy-copy"></i>
          </a>
        </h4>
        <span v-for="v in item.child" :key="v" class="detailText" @click="toList(v)">{{v}}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentType: "",
      menuList: []
    };
  },
  created() {
    this.$axios.$get("/home/getMenu").then(res => {
      if (res.code === 0) {
        this.menuList = res.data;
      } else {
        this.menuList = [];
      }
    });
  },
  methods: {
    mouseleaveHandler() {
      this.timer = setTimeout(() => {
        this.currentType = "";
      }, 200);
    },
    mouseenterHandler(e) {
      this.currentType = e;
    },
    detailEnterHandler() {
      clearTimeout(this.timer);
    },
    detailLeaveHandler() {
      this.currentType = "";
    },
    toList(keyword) {
      this.$router.push("/list/" + keyword);
    }
  },
  computed: {
    currentDetail() {
      return this.menuList.filter(item => item.type === this.currentType)[0];
    }
  }
};
</script>
<style lang="scss" scope>
@import "@/assets/css/home/menu.scss";
</style>
