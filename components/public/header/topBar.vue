<template>
  <div class="top">
    <div class="top-left">
      <city/>
      <user class="user"/>
    </div>
    <div class="top-right">
      <my-nav/>
    </div>
  </div>
</template>
<script>
import City from "./city";
import User from "./user";
import MyNav from "./nav";
export default {
  components: {
    City,
    User,
    MyNav
  }
};
</script>
<style lang="scss">
.top {
  display: flex;
  justify-content: space-between;
}
.top a {
  color: #999;
}
.top a:hover {
  color: #31bbac;
}
.top-left {
  display: flex;
  padding-top: 12px;
}
.top-left .user {
  margin-left: 15px;
}
</style>
