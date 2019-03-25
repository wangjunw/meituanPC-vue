<template>
  <div>
    <ul>
      <li class="title">{{title}}</li>
      <li v-for="item in tabs" :key="item.type" class>{{item.text}}</li>
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
</style>
