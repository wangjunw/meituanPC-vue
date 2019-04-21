<template>
  <div>
    <title-bar
      title="推荐民宿"
      :tabs="tabs"
      bgcolor="linear-gradient(to right, rgb(243, 182, 74) 2%, rgb(242, 197, 69) 97%) rgb(243, 182, 74)"
      moreLink="https://phoenix.meituan.com/"
      @current="changeTabHandler"
    ></title-bar>
    <ul>
      <li v-for="item in data" :key="item.productId"></li>
    </ul>
  </div>
</template>
<script>
import titleBar from "@/components/home/titleBar.vue";
export default {
  data() {
    return {
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