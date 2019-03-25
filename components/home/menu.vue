<template>
  <div>
    <div class="menu">
      <h3 class="title">全部分类</h3>
      <ul @mouseleave="mouseleaveHandler">
        <li v-for="item in menuList" :key="item.icon" @mouseenter="mouseenterHandler(item.type)">
          <i :class="item.icon" class="iconfont fontIcon"></i>
          {{item.type}}
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
      <template v-for="(item,index) in currentDetail.detail">
        <h4 :key="index" class="detailTitle">
          <span>{{item.title}}</span>
          <a class="more">
            更多
            <i class="iconfont iconarrow-right-copy-copy-copy"></i>
          </a>
        </h4>
        <span v-for="v in item.child" :key="v" class="detailText">{{v}}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentType: "",
      menuList: [
        {
          icon: "iconfenzu",
          type: "美食",
          isHot: true,
          detail: [
            {
              title: "美食",
              child: ["代金券", "甜点", "火锅", "自助餐"]
            }
          ]
        },
        {
          icon: "iconicon-test",
          type: "外卖",
          isHot: false,
          detail: [
            {
              title: "外卖",
              child: ["美团外卖"]
            }
          ]
        },
        {
          icon: "iconmao",
          type: "猫眼电影",
          isHot: true,
          detail: [
            {
              title: "热映电影",
              child: ["惊奇队长", "比悲伤更悲伤的故事"]
            },
            {
              title: "热门影院",
              child: ["大地影院", "K酷国际影城"]
            }
          ]
        }
      ]
    };
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
