<template>
  <div class="m-geo">
    <i class="el-icon-location"></i>
    <span>{{$store.state.position.city}}</span>
    <nuxt-link to="/changeCity" class="changeCity">切换城市</nuxt-link>[大厂回族自治县 廊坊 固安县]
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.changeCity {
  border: solid 1px #ccc;
  color: #666;
  padding: 0 2px;
  margin-right: 3px;
  &:hover {
    color: #31bbac;
  }
}
</style>
