<template>
  <div>
    <title-bar
      title="推荐民宿"
      :tabs="tabs"
      bgcolor="linear-gradient(to right, rgb(243, 182, 74) 2%, rgb(242, 197, 69) 97%) rgb(243, 182, 74)"
      moreLink="https://phoenix.meituan.com/"
    ></title-bar>
  </div>
</template>
<script>
import titleBar from "@/components/home/titleBar.vue";
export default {
  data() {
    return {
      tabs: [
        { type: "1", text: "天津" },
        { type: "2", text: "济南" },
        { type: "3", text: "太原" },
        { type: "4", text: "大连" }
      ]
    };
  },
  components: { titleBar }
};
</script>