<template>
  <div class="list-selectArea">
    <el-row style="margin-bottom: 10px">
      <el-col :span="2">
        <div>{{label}}</div>
      </el-col>
      <el-col :span="2">
        <el-button type="success" round size="mini" class="allBtn">全部</el-button>
      </el-col>
      <el-col
        :span="20"
        :style="isLast?'border-bottom: none;': 'border-bottom: solid 1px #e5e5e5;'"
      >
        <el-popover
          placement="bottom"
          width="400"
          trigger="hover"
          v-for="item in category"
          :key="item.type"
        >
          <dl style="padding: 0 10px; box-sizing:border-box;">
            <dt style="font-size: 16px;color: #ccc;margin-bottom: 10px;">{{item.type}}</dt>
            <dd
              v-for="i in item.module"
              :key="i"
              style="display: inline-block; width: 25%;margin-bottom: 5px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap"
            >
              <nuxt-link to="/detail" style="color: #666;">{{i}}</nuxt-link>
            </dd>
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
export default {
  data() {
    return {};
  },
  props: {
    category: {
      type: Array
    },
    label: {
      type: String
    },
    isLast: {
      type: Boolean
    }
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
