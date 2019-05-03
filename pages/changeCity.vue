<template>
  <div class="cityContainer">
    <div class="searchArea">
      <span class="selectType">按省份选择：</span>
      <el-select v-model="currentSelectProvince" placeholder="省份" @change="changeProvince">
        <el-option v-for="item in provinces" :key="item.id" :label="item.name" :value="item.name"></el-option>
      </el-select>
      <el-select
        class="chooseCity"
        v-model="currentSelectCity"
        placeholder="城市"
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
    <div class="hotCities">
      <span class="selectType">热门城市：</span>
      <ul class="hotList">
        <li v-for="item in hotCity" :key="item.id" @click="changeCity(item.name)">{{item.name}}</li>
      </ul>
    </div>
    <div class="recentCities">
      <span class="selectType">最近访问：</span>
      <ul class="recentList">
        <li v-for="item in recentCity" :key="item" @click="changeCity(item)">{{item}}</li>
      </ul>
    </div>
    <div class="baseFirstLetter">
      <span class="selectType">按拼音首字母选择：</span>
      <ul class="letterList">
        <li v-for="item in letters" :key="item">{{item}}</li>
      </ul>
    </div>
    <div style="text-align: center">暂无数据</div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
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
      matchCitys: [],
      letters: "ABCDEFGHJKLMNPQRSTWXYZ"
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
      city: state => state.position.city
    })
  },
  created() {
    this.getProvinces();
    this.getHotCities();
    this.getRecentCities();
  },
  methods: {
    ...mapMutations({
      initPosition: "INIT_POSITION"
    }),
    getProvinces() {
      this.$axios.$get("/city/citys").then(res => {
        if (res.code !== 0) {
          this.provinces = [];
          return;
        }
        this.provinces = res.data;
      });
    },
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
    },
    getHotCities() {
      // 没有实现，随便取了前几个
      this.$axios.$get("/city/hotCity").then(res => {
        if (res.code !== 0) {
          this.hotCity = [];
          return;
        }
        this.hotCity = res.data;
      });
    },
    getRecentCities() {
      this.$axios
        .$get("/city/recent", {
          params: { username: this.username, city: this.city }
        })
        .then(res => {
          if (res.code !== 0) {
            this.recentCity = [];
            return;
          }
          this.recentCity = res.data;
        });
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
  .searchArea,
  .hotCities,
  .recentCities {
    border-bottom: solid 1px #e5e5e5;
  }
  .searchArea {
    padding-bottom: 30px;
  }
  .hotCities,
  .recentCities,
  .baseFirstLetter {
    display: flex;
    align-items: center;
    padding: 30px 0;
    .hotList,
    .recentList,
    .letterList {
      padding-left: 20px;
      li {
        float: left;
        margin-right: 30px;
        font-size: 14px;
        &:hover {
          color: #13d1be;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
