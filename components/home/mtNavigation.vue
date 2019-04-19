<template>
  <div>
    <title-bar title="美团导航" bgcolor="#0ECAC7"></title-bar>
    <div class="mt-nav-content">
      <div v-for="(item, index) in data" :key="index" class="type">
        <p class="title">{{item.title}}</p>
        <ul>
          <li v-for="i in item.list" :key="i.name">
            <a href="javascript:;" :title="i.name">
              {{i.name}}
              <span v-if="i.isHot" class="hot">HOT</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import titleBar from "@/components/home/titleBar.vue";
export default {
  data() {
    return {
      data: []
    };
  },
  components: {
    titleBar
  },
  created() {
    this.$axios.$get("/home/mtnav").then(res => {
      if (res.code !== 0) {
        this.data = [];
        return;
      }
      this.data = res.data;
    });
  }
};
</script>
<style lang="scss" scoped>
.mt-nav-content {
  background: #fff;
  border: solid 1px #e5e5e5;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  .type {
    display: flex;
    .title {
      width: 100px;
      font-size: 14px;
      text-align: center;
      padding-top: 10px;
    }
    ul {
      padding-top: 12px;
      flex: 1;
      border-bottom: solid 1px #e5e5e5;
      li {
        float: left;
        width: 100px;
        margin-bottom: 13px;
        a {
          color: #666;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          width: 80px;
          display: inline-block;
        }
        .hot {
          background: #ff4848;
          padding: 0 6px;
          margin-left: 5;
          color: #fff;
          border-radius: 10px;
        }
      }
    }
    &:last-of-type {
      ul {
        border: none;
      }
    }
  }
}
</style>
