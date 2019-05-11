<template>
  <div class="list-item" @click="this.toDetail(item.poild)">
    <el-row>
      <el-col :span="6">
        <img :src="item.frontImg" alt width="220" height="125">
      </el-col>
      <el-col :span="18">
        <h2>{{item.title}}</h2>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    toDetail() {
      this.$router.push("/detail");
    }
  }
};
</script>
<style lang="scss" scoped>
.list-item {
  border-bottom: solid 1px #e5e5e5;
}
</style>
