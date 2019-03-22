<template>
  <div>
    <top-bar></top-bar>
    <search-bar class="m-search"></search-bar>
  </div>
</template>
<script>
import TopBar from "./topBar";
import SearchBar from "./searchBar";
export default {
  components: {
    TopBar,
    SearchBar
  }
};
</script>
<style scoped>
.m-search {
  width: 100%;
  background-color: #fff;
}
</style>
