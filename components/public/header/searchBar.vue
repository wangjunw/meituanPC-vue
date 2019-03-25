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
              v-model="keyword"
              placeholder="搜索商家或地点"
              @focus="focusHandler"
              @blur="blurHandler"
              @input="inputHandler"
              class="el-input"
            >
            <el-button type="success" icon="el-icon-search"></el-button>
            <div class="smartRecommendLayer" v-if="isHot">
              <dl class="hot">
                <dt>热门搜索</dt>
                <dd v-for="item in recommendList" :key="item">{{item}}</dd>
              </dl>
            </div>
            <div class="smartRecommendLayer" v-if="isMatch">
              <ul class="match">
                <li>列表</li>
                <li>列表</li>
                <li>列表</li>
              </ul>
            </div>
          </div>
          <ul class="recommend">
            <li v-for="item in recommendList" :key="item">{{item}}</li>
          </ul>
          <div class="tabLink">
            <ul class="tabLinks">
              <li v-for="item in tabLinks" :key="item">
                <a href>{{item}}</a>
              </li>
            </ul>
          </div>
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
      recommendList: ["北京欢乐谷", "故宫博物院", "北京动物园"],
      tabLinks: [
        "美团外卖",
        "猫眼电影",
        "美团酒店",
        "民宿 / 公寓",
        "商家入驻",
        "美团公益"
      ],
      isFocus: false
    };
  },
  methods: {
    focusHandler() {
      this.isFocus = true;
    },
    blurHandler() {
      this.isFocus = false;
    },
    inputHandler(e) {
      console.log(e.target.value);
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
}
.recommend {
  padding-top: 8px;
  padding-left: 30px;
  margin-bottom: 30px;
  li {
    margin-right: 10px;
    display: inline-block;
  }
}
.tabLinks li {
  display: inline-block;
  margin: 0 20px;
  font-size: 16px;
  font-weight: 700;
  color: black;
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
    }
  }
  .match li {
    padding: 5px 10px;
    color: #333;
    &:hover {
      color: #31bbac;
      background-color: #f8f8f8;
    }
  }
}
</style>
