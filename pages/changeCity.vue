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
        @change="changeCity"
      >
        <el-option v-for="item in cities" :key="item.id" :value="item.name"></el-option>
      </el-select>
      <span class="selectType">直接搜索：</span>
      <el-select
        v-model="cityName"
        filterable
        remote
        placeholder="请输入城市中文或拼音"
        :remote-method="querySearchAsync"
        :loading="queryAsyncLoading"
        @change="changeCity"
      >
        <el-option
          v-for="item in queryAsyncData"
          :key="item.iid"
          :label="item.name"
          :value="item.name"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      provinces: [],
      currentSelectProvince: "",
      currentSelectCity: "",
      cities: [],
      queryAsyncData: [],
      cityName: "",
      queryAsyncLoading: false,
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
    ...mapMutations({
      initPosition: "INIT_POSITION"
    }),
    changeProvince(e) {
      this.currentSelectProvince = e;
      this.provinces.map(item => {
        if (item.name === this.currentSelectProvince) {
          this.cities = item.value;
        }
      });
    },
    changeCity(e) {
      this.initPosition({ city: e });
      this.$router.push("/");
    },
    querySearchAsync(v) {
      this.queryAsyncLoading = true;
      this.$axios
        .$get("/city/searchByKeyword", { params: { keyword: v } })
        .then(res => {
          this.queryAsyncLoading = false;
          if (res.code !== 0) {
            this.queryAsyncData = [];
            return;
          }
          this.queryAsyncData = res.data;
        });
    },
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
