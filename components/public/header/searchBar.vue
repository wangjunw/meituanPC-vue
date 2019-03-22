<template>
  <div>
    <el-row class="search">
      <el-col :span="6">
        <img src="../../../static/images/logo.png" alt="美团" width="120">
      </el-col>
      <el-col :span="18">
        <div class="center">
          <div style="fontSize: 0; paddingLeft: 20px;">
            <el-input v-model="input" placeholder="搜索商家或地点"></el-input>
            <el-button type="success" icon="el-icon-search"></el-button>
            <div class="smartRecommendLayer">
              <div v-if="showFocusContent">
                <p>热门搜索</p>
                <ul class="hot">
                  <li v-for="item in recommendList" :key="item">{{item}}</li>
                </ul>
              </div>
              <ul v-else class="match">
                <li>列表</li>
              </ul>
            </div>
          </div>
          <ul class="recommend">
            <li v-for="item in recommendList" :key="item">{{item}}</li>
          </ul>
          <div class="tabLink">
            <ul class="tabLinks">
              <li v-for="item in tabLinks" :key="item">{{item}}</li>
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
      input: "",
      recommendList: ["北京欢乐谷", "故宫博物院", "北京动物园"],
      tabLinks: [
        "美团外卖",
        "猫眼电影",
        "美团酒店",
        "民宿 / 公寓",
        "商家入驻",
        "美团公益"
      ]
    };
  }
};
</script>

<style scoped>
.search {
  width: 1190px;
  margin: 0 auto;
  padding-top: 30px;
}
.search .el-input {
  width: 400px;
}
.recommend {
  padding-top: 8px;
  padding-left: 30px;
  margin-bottom: 30px;
}
.recommend li {
  margin-right: 10px;
  display: inline-block;
}
.tabLinks li {
  display: inline-block;
  margin: 0 20px;
  font-size: 16px;
  font-weight: 700;
  color: black;
}
.smartRecommendLayer .hot {
  padding: 10px 5px;
}
.smartRecommendLayer .hot li {
  display: inline-block;
  margin-right: 15px;
}
.smartRecommendLayer .match li {
  line-height: 2;
  padding-left: 5px;
}
</style>
