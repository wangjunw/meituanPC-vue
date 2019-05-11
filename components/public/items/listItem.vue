<template>
  <div class="list-item" :class="{lastOne: noBorder}" @click="toDetail(item.poiId)">
    <el-row>
      <el-col :span="6">
        <img :src="item.frontImg" alt width="220" height="125">
        <span class="index">{{index+1}}</span>
      </el-col>
      <el-col :span="18">
        <h2 class="title">{{item.title}}</h2>
        <div class="score">
          <el-rate
            v-model="item.avgScore"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}分"
          ></el-rate>
          <span class="comment">{{item.allCommentNum}}条评论</span>
        </div>
        <p class="address">{{item.address}}</p>
        <p>人均￥{{item.avgPrice}}</p>
        <span v-if="item.hasAds" class="ads">广告</span>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object
    },
    index: {
      type: Number
    },
    noBorder: {
      type: Boolean
    }
  },
  methods: {
    toDetail(id) {
      // 如果name改成path，那么params不生效
      this.$router.push("/detail/" + id);
    }
  }
};
</script>
<style lang="scss" scoped>
.list-item {
  border-bottom: solid 1px #e5e5e5;
  padding: 15px 0;
  cursor: pointer;
  position: relative;
  .index {
    background: #fb6433;
    position: absolute;
    left: 0;
    color: #fff;
    width: 20px;
    display: inline-block;
    text-align: center;
    border-radius: 2px;
  }
  .title {
    font-size: 16px;
    font-weight: bolder;
    margin-bottom: 5px;
  }
  .score {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    .comment {
      color: #f60;
      margin-left: 10px;
    }
  }
  .address {
    margin-bottom: 5px;
  }
  .ads {
    position: absolute;
    right: 0;
    top: 0;
    color: #e5e5e5;
    border: solid 1px;
    padding: 0 2px;
  }
}
.lastOne {
  border: none;
}
</style>
