<template>
  <div>
    <el-row class="search">
      <el-col :span="5">
        <img src="../../../static/images/logo.png" alt="美团" width="120">
      </el-col>
      <el-col :span="19">
        <div class="center">
          <div style="fontSize: 0; paddingLeft: 20px;position: relative;">
            <input
              placeholder="搜索商家或地点"
              @focus="focusHandler"
              @blur="blurHandler"
              @input="inputHandler"
              @keyup.enter="searchHandler"
              class="el-input"
            >
            <el-button type="success" icon="el-icon-search" @click="searchHandler"></el-button>
            <div class="smartRecommendLayer" v-if="isHot">
              <dl class="hot">
                <dt>热门搜索</dt>
                <dd v-for="item in recommendList.slice(0,7)" :key="item.id">
                  <nuxt-link to="/">{{item.name}}</nuxt-link>
                </dd>
              </dl>
            </div>
            <div class="smartRecommendLayer" v-if="isMatch">
              <ul class="match">
                <li v-for="item in searchResult" :key="item.id">
                  <nuxt-link to="/">{{item.name}}</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <ul class="recommend">
            <li v-for="item in recommendList.slice(0,8)" :key="item.id">
              <nuxt-link to="/">{{item.name}}</nuxt-link>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: "",
      recommendList: [],
      isFocus: false,
      searchResult: []
    };
  },
  created() {
    this.$axios
      .get("/home/recommendPlace", {
        params: {
          city: this.$store.state.position.city
        }
      })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          this.recommendList = res.data.data;
        } else {
          console.log("获取推荐景点失败");
        }
      });
  },
  methods: {
    focusHandler() {
      this.isFocus = true;
    },
    blurHandler() {
      this.isFocus = false;
    },
    inputHandler(e) {
      this.keyword = e.target.value;
      this.$axios
        .get("/home/search", {
          params: {
            city: this.$store.state.position.city,
            keyword: this.keyword
          }
        })
        .then(res => {
          if (res.status === 200 && res.data.code === 0) {
            this.searchResult = res.data.data;
          } else {
            this.searchResult = [];
          }
        });
    },
    searchHandler(e) {
      if (this.keyword === "") {
        return;
      }
      console.log("提交");
    }
  },
  computed: {
    isHot() {
      return this.isFocus && !this.keyword;
    },
    isMatch() {
      return this.isFocus && this.keyword;
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  width: 1190px;
  margin: 0 auto;
  padding: 30px 0 15px;
}
.el-input {
  width: 450px;
  border: solid 1px #13d1be;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  line-height: 38px;
  outline: 0;
  padding: 0 10px;
  box-sizing: border-box;
}
.el-input .el-input__inner {
  border-radius: 0;
}
.el-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: #13d1be;
  border-color: #13d1be;
  width: 67px;
  &:active {
    opacity: 0.6;
  }
}
.recommend {
  padding-top: 8px;
  padding-left: 30px;
  margin-bottom: 30px;
  li {
    margin-right: 10px;
    display: inline-block;
    a {
      color: #999;
    }
  }
}

.smartRecommendLayer {
  z-index: 12;
  width: 450px;
  background-color: #fff;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 4px;
  border-top-right-radius: 4px;
  position: absolute;
  font-size: 12px;
  top: 100%;
  left: 20px;
  .hot {
    padding: 10px 10px 20px;
    dt {
      margin-bottom: 10px;
      color: #999;
      font-weight: bold;
    }
    dd {
      color: #666;
      display: inline-block;
      margin-right: 15px;
      a {
        color: #666;
      }
    }
  }
  .match li {
    padding: 5px 10px;
    a {
      color: #333;
    }
    &:hover {
      color: #31bbac;
      background-color: #f8f8f8;
    }
  }
}
</style>
