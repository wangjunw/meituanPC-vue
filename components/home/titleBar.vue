<template>
  <div :style="{background: bgcolor}" class="m-titleBar">
    <ul>
      <li class="title">{{title}}</li>
      <li
        v-for="(item, index) in tabs"
        :key="item.type"
        class="tab"
        :class="{active: currentTab === index}"
        @mouseenter="mouseEnterHandler(index, item.type)"
      >{{item.text}}</li>
      <li class="all" v-if="moreLink !== ''">
        <a :href="moreLink">
          全部
          <i class="iconfont iconarrow-right-copy-copy-copy"></i>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentTab: 0
    };
  },
  props: {
    title: { type: String, required: true },
    moreLink: { type: String, default: "" },
    tabs: { type: Array, default: () => [] },
    bgcolor: {
      type: String,
      required: true
    }
  },
  methods: {
    mouseEnterHandler(index, type) {
      this.currentTab = index;
      this.$emit("current", type);
    }
  }
};
</script>

<style lang="scss" scoped>
.m-titleBar {
  margin-top: 40px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: #fff;
  padding: 12px 16px;
  position: relative;
  ul {
    display: flex;
    align-items: center;
    li {
      cursor: pointer;
    }
    .title {
      font-size: 18px;
      font-family: titleBarFont !important;
      margin-right: 20px;
    }
    .tab {
      margin-right: 12px;
      font-size: 14px;
      position: relative;
    }
    .active:after {
      content: " ";
      display: block;
      position: absolute;
      border-bottom: solid 7px #fff;
      border-right: 5px solid transparent;
      border-left: solid 5px transparent;
      top: 25px;
      width: 2px;
      left: 0;
      right: 0;
      margin: auto;
    }
    .all {
      position: absolute;
      right: 12px;
      * {
        color: #fff;
        font-size: 14px;
      }
    }
  }
}
</style>
