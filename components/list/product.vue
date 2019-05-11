<template>
  <div>
    <div v-if="listData.length !==0">
      <list-item
        v-for="(item,index) in listData"
        :key="item.poild"
        :item="item"
        :index="index"
        :noBorder="index === (listData.length - 1)"
      ></list-item>
    </div>
    <div v-else class="noData">抱歉，暂无数据</div>
  </div>
</template>
<script>
import ListItem from "@/components/public/items/listItem";
export default {
  props: {
    listData: {
      type: Array
    }
  },
  components: {
    ListItem
  }
};
</script>