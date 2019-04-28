<template>
  <div class="cityContainer">
    <div class="searchArea">
      <el-select v-model="currentSelectProvince" placeholder="请选择" @change="changeProvince">
        <el-option v-for="item in provinces" :key="item.id" :label="item.name" :value="item.name"></el-option>
      </el-select>
      <!-- <el-select v-model="currentSelectCity" placeholder="请选择">
        <el-option v-for="item in currentProvinceValues" :key="item.id" :value="item.name"></el-option>
      </el-select>-->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      provinces: [],
      currentSelectProvince: "",
      currentSelectCity: "",
      hotCity: [],
      recentCity: [],
      matchCitys: []
    };
  },
  created() {
    this.$axios.$get("/city/citys").then(res => {
      if (res.code !== 0) {
        this.provinces = [];
      }
      this.provinces = res.data;
    });
  },
  methods: {
    changeProvince(e) {
      //   this.currentSelectProvince = e;
    }
  },
  computed: {
    currentProvinceValues() {
      this.provinces.map(item => {
        if ((item.name = this.currentSelectProvince)) {
          return item.value;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.cityContainer {
  border: solid 1px #e5e5e5;
  border-radius: 4px;
}
</style>
