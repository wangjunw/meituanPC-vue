<template>
  <div class="top-bar">
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
.top-bar {
  display: flex;
  justify-content: space-between;
  a {
    color: #999;
    &:hover {
      color: #31bbac;
    }
  }
  .top-left {
    display: flex;
    padding-top: 12px;
    .user {
      margin-left: 15px;
    }
  }
}
</style>
