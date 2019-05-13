<template>
  <div class="commentItem">{{item.comment}}</div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
};
</script>