<template>
  <div>
    <top-bar></top-bar>
    <search-bar></search-bar>
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