<template>
  <div>
    <title-bar
      title="猜你喜欢"
      :tabs="tabs"
      bgcolor="linear-gradient(to right, rgb(18, 210, 198) 2%, rgb(14, 190, 212) 97%) rgb(18, 210, 198)"
    ></title-bar>
  </div>
</template>
<script>
import titleBar from "@/components/home/titleBar.vue";
export default {
  data() {
    return {
      tabs: [{ type: "1", text: "为你甄选最合适的" }]
    };
  },
  components: { titleBar },
  created() {
    this.$axios.$get("/home/guesslike").then(res => {
      console.log(res);
    });
  }
};
</script>