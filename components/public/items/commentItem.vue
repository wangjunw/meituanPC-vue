<template>
  <div class="commentItem">
    <el-row :gutter="20">
      <el-col :span="2">
        <img :src="item.userUrl || avatarDefault" width="60" height="60" alt class="avatar">
      </el-col>
      <el-col :span="22">
        <div class="content">
          <h3 class="title">{{item.userName}}</h3>
          <div class="scorContainer">
            <el-rate :value="item.star/10" disabled></el-rate>
            <span class="date">{{dateFormat(item.commentTime)}}</span>
          </div>
          <p class="comment">{{item.comment}}</p>
          <p class="merchantComment">{{item.merchantComment}}</p>
          <div class="imgs">
            <img
              v-for="(i, index) in item.picUrls"
              :key="index"
              :src="i.url"
              alt
              width="140"
              height="140"
            >
          </div>
          <p class="zan">
            <i class="el-icon-star-on"></i>赞
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      avatarDefault: require("@/static/images/avatar.jpg")
    };
  },
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    dateFormat(v) {
      // 这里的传入的时间戳一定要转成number格式
      let date = new Date(Number(v));
      return moment(date).format("YYYY年MM月DD日");
    }
  }
};
</script>
<style lang="scss" scoped>
.commentItem {
  font-size: 14px;
  margin-top: 30px;
  .avatar {
    border-radius: 50%;
  }
  .content {
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 80px;
    position: relative;
    .title {
      margin-bottom: 5px;
      color: #222;
    }
    .scorContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      .date {
        font-size: 12px;
        color: #999;
      }
    }
    .comment {
      margin-bottom: 12px;
    }
    .merchantComment {
      color: #31bbac;
      margin-bottom: 12px;
    }
    .imgs {
      img {
        margin-right: 18px;
      }
    }
    .zan {
      position: absolute;
      bottom: 15px;
      right: 0;
      color: #666;
      cursor: pointer;
      .el-icon-star-on {
        margin-right: 3px;
      }
    }
  }
}
</style>
