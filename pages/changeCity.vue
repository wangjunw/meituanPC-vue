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
          :key="item.id"
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
        <li v-for="(item,index) in recentCity" :key="index" @click="changeCity(item)">{{item}}</li>
      </ul>
    </div>
    <div class="baseFirstLetter">
      <span class="selectType">按拼音首字母选择：</span>
      <ul class="letterList">
        <li v-for="(item,index) in letters" :key="index">
          <a :href="'#city-'+item">{{item}}</a>
        </li>
      </ul>
    </div>
    <div class="groups">
      <dl v-for="group in citiesByLetter" :key="group.title">
        <dt :id="'city-'+group.title">{{group.title}}</dt>
        <dd>
          <span v-for="(item,index) in group.list" :key="index" @click="changeCity(item)">{{item}}</span>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import pinyin from "js-pinyin";
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
      letters: "ABCDEFGHJKLMNPQRSTWXYZ",
      citiesByLetter: []
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
    this.getAllCities();
  },
  methods: {
    ...mapMutations({
      initPosition: "INIT_POSITION"
    }),
    getProvinces() {
      this.$axios.$get("/city/provincesandcity").then(res => {
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
    },
    getAllCities() {
      this.$axios.$get("/city/cities").then(res => {
        if (res.code !== 0) {
          return;
        }
        const cities = res.data;
        let firstLetter = "";
        let code = "";
        let group = {};
        cities.forEach(item => {
          // 通过js-pinyin的方法获取小写首字母
          firstLetter = pinyin
            .getFullChars(item.name)
            .toUpperCase()
            .slice(0, 1);
          // 获取对应的ASCII码
          code = firstLetter.charCodeAt();
          // 拼数据结构
          if (code > 64 && code < 91) {
            if (!group[firstLetter]) {
              group[firstLetter] = [];
            }
            group[firstLetter].push(item.name);
          }
        });
        // 把数据放在数组中
        let result = [];
        for (let [key, value] of Object.entries(group)) {
          result.push({ title: key, list: value });
        }

        // 根据首字母排序
        result.sort((a, b) => {
          return a.title.charCodeAt() - b.title.charCodeAt();
        });
        this.citiesByLetter = result;
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
    .recentList {
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
  .letterList {
    li {
      float: left;
      a {
        color: #666;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        font-size: 14px;
        line-height: 25px;
        text-align: center;
        display: inline-block;
        margin: 0 10px;
        &:hover {
          background: #f8f8f8;
        }
      }
    }
  }
  .groups {
    dl {
      display: flex;
      padding: 13px 30px 13px 10px;
      box-sizing: border-box;
      border-radius: 5px;
      &:hover {
        background: #f8f8f8;
      }
      dt {
        width: 40px;
        height: 40px;
        background: #13d1be;
        color: #fff;
        border-radius: 50%;
        box-shadow: 0 4px 5px 0 rgba(39, 178, 164, 0.22);
        text-align: center;
        line-height: 40px;
        font-size: 16px;
      }
      dd {
        flex: 1;
        span {
          float: left;
          margin: 10px 20px;
          font-size: 14px;
          cursor: pointer;
          &:hover {
            color: #13d1be;
          }
        }
      }
    }
  }
}
</style>
