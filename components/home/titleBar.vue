<template>
  <div :style="{background: bgColor}" class="m-titleBar">
    <ul>
      <li class="title">{{title}}</li>
      <li v-for="item in tabs" :key="item.type" class="tab">{{item.text}}</li>
      <li class="all" v-if="moreLink">
        <a :href="moreLink">全部</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    title: { type: String, required: true },
    moreLink: { type: String, required: false },
    tabs: { type: Array, required: true },
    bgColor: {
      type: String,
      required: true
    }
  },
  mounted() {
    // console.log(this.props.moreLink);
  }
};
</script>

<style lang="scss" scoped>
.m-titleBar {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: #fff;
  padding: 10px 15px;
  li {
    display: inline-block;
  }
  .title {
    font-size: 16px;
    font-family: MFShangHei-Regular !important;
    margin-right: 20px;
  }
  .tab {
    margin-right: 12px;
  }
}
</style>
