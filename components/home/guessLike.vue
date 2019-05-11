<template>
  <div>
    <title-bar
      title="猜你喜欢"
      :tabs="tabs"
      bgcolor="linear-gradient(to right, rgb(18, 210, 198) 2%, rgb(14, 190, 212) 97%) rgb(18, 210, 198)"
    ></title-bar>
    <div class="home-content">
      <div class="list">
        <guess-like-item v-for="item in data" :key="item.itemId" :item="item" class="item"></guess-like-item>
      </div>
    </div>
  </div>
</template>
<script>
import titleBar from "@/components/home/titleBar.vue";
import guessLikeItem from "@/components/public/items/guessLikeItem.vue";
export default {
  data() {
    return {
      tabs: [{ type: "1", text: "为你甄选最合适的" }],
      data: []
    };
  },
  components: { titleBar, guessLikeItem },
  created() {
    this.$axios.$get("/home/guesslike").then(res => {
      if (res.code !== 0) {
        this.data = [];
        return;
      }
      this.data = res.data;
    });
  }
};
</script>
<style lang="scss" scoped>
.list {
  padding: 10px;
  overflow: hidden;
  .item {
    width: 20%;
    float: left;
    &:hover {
      background: #f8f8f8;
    }
  }
}
</style>
