<template>
  <div class="list-selectArea">
    <el-row style="margin-bottom: 10px">
      <el-col :span="2">
        <div>分类</div>
      </el-col>
      <el-col :span="2">
        <el-button type="success" round size="mini" class="allBtn">全部</el-button>
      </el-col>
      <el-col :span="20" style="border-bottom: solid 1px #e5e5e5">
        <el-popover
          placement="bottom"
          width="400"
          trigger="hover"
          v-for="item in category.types"
          :key="item.type"
        >
          <dl>
            <dt>{{item.type}}</dt>
            <dd v-for="i in item.module" :key="i">{{i}}</dd>
          </dl>
          <span slot="reference" class="select">
            {{item.type}}
            <i class="el-icon-caret-bottom"></i>
          </span>
        </el-popover>
      </el-col>
    </el-row>
    <el-row align="middle">
      <el-col :span="2">
        <div>区域</div>
      </el-col>
      <el-col :span="2">
        <el-button type="success" round size="mini" class="allBtn">全部</el-button>
      </el-col>
      <el-col :span="20">
        <el-popover
          placement="bottom"
          width="400"
          trigger="hover"
          v-for="item in category.areas"
          :key="item.type"
        >
          <dl>
            <dt>{{item.type}}</dt>
            <dd v-for="i in item.module" :key="i">{{i}}</dd>
          </dl>
          <span slot="reference" class="select">
            {{item.type}}
            <i class="el-icon-caret-bottom"></i>
          </span>
        </el-popover>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      category: { types: [], module: [] }
    };
  },
  computed: {
    ...mapState({
      city: state => state.position.city
    })
  },
  created() {
    this.$axios
      .$get("/list/category", { params: { city: this.city } })
      .then(res => {
        if (res.code !== 0) {
          return;
        }
        this.category = res.data;
      })
      .catch(() => {
        this.category = {};
      });
  }
};
</script>
<style lang="scss" scoped>
.list-selectArea {
  font-size: 14px;
  .select {
    margin-bottom: 15px;
    min-width: 16.5%;
    display: inline-block;
  }
  .allBtn {
    padding: 3px 7px;
  }
}
</style>
