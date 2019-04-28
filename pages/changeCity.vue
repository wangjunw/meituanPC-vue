<template>
  <div class="cityContainer">
    <div class="searchArea">
      <span class="selectType">按省份选择：</span>
      <el-select v-model="currentSelectProvince" placeholder="请选择" @change="changeProvince">
        <el-option v-for="item in provinces" :key="item.id" :label="item.name" :value="item.name"></el-option>
      </el-select>
      <el-select
        class="chooseCity"
        v-model="currentSelectCity"
        placeholder="请选择"
        :disabled="currentSelectProvince === ''"
      >
        <el-option v-for="item in cities" :key="item.id" :value="item.name"></el-option>
      </el-select>
      <span class="selectType">直接搜索：</span>
      <el-autocomplete
        v-model="cityName"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入城市中文或拼音"
        @select="handleSelectCity"
      ></el-autocomplete>
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
      cities: [],
      cityName: "",
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
      this.currentSelectProvince = e;
      this.provinces.map(item => {
        if (item.name === this.currentSelectProvince) {
          this.cities = item.value;
        }
      });
    },
    querySearchAsync() {},
    handleSelectCity(item) {
      console.log(item);
    }
  }
};
</script>
<style lang="scss" scoped>
.cityContainer {
  border: solid 1px #e5e5e5;
  border-radius: 4px;
  background: #fff;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
  .selectType {
    font-size: 16px;
  }
  .chooseCity {
    margin: 0 50px 0 20px;
  }
}
</style>
