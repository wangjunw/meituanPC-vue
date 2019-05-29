<template>
  <div class="orderItem-container">
    <el-row type="flex" align="middle">
      <el-col :span="3">
        <img :src="item.pic" alt class="pic">
      </el-col>
      <el-col :span="10">
        <div class="content">
          <h3>{{item.name}}</h3>
          <p>时间：{{dateFormat(item.createTime)}}</p>
        </div>
      </el-col>
      <el-col :span="5">
        <div>总价：￥{{item.total}}</div>
      </el-col>
      <el-col :span="4">
        <div>{{statusText}}</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  methods: {
    dateFormat(date) {
      return moment(new Date(date)).format("YYYY-MM-DD HH:mm");
    }
  },
  computed: {
    statusText() {
      switch (this.item.status) {
        case 0:
          return "未完成";
        case 1:
          return "已完成";
        default:
          return "已完成";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.orderItem-container {
  padding: 20px 0;
  border-bottom: solid 1px #e5e5e5;
  &:last-of-type {
    border-bottom: 0;
  }
  .pic {
    width: 90px;
    height: 90px;
    border-radius: 4px;
    cursor: pointer;
  }
  .content {
    h3 {
      color: #000;
    }
    p {
      color: #666;
    }
  }
}
</style>
