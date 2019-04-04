<template>
  <div>
    <el-row style="height: 427px;">
      <el-col :span="5" style="position: relative; height: 100%;">
        <menu-list/>
      </el-col>
      <el-col :span="19">
        <div class="tabLink">
          <ul class="tabLinks">
            <li v-for="item in tabLinks" :key="item">
              <a href>{{item}}</a>
            </li>
          </ul>
        </div>
        <banner/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <mt-style/>
      </el-col>
      <el-col :span="24">
        <maoyan-movie/>
      </el-col>
      <el-col :span="24">
        <recommended-homestay/>
      </el-col>
      <el-col :span="24">
        <guess-link/>
      </el-col>
      <el-col :span="24">
        <mt-navigation/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MenuList from "@/components/home/menu.vue";
import Banner from "@/components/home/banner.vue";
import mtStyle from "@/components/home/style.vue";
import maoyanMovie from "@/components/home/maoyanMovie.vue";
import recommendedHomestay from "@/components/home/recommendedHomestay.vue";
import guessLink from "@/components/home/guessLike.vue";
import mtNavigation from "@/components/home/mtNavigation.vue";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      tabLinks: [
        "美团外卖",
        "猫眼电影",
        "美团酒店",
        "民宿 / 公寓",
        "商家入驻",
        "美团公益"
      ]
    };
  },
  components: {
    MenuList,
    Banner,
    mtStyle,
    maoyanMovie,
    recommendedHomestay,
    guessLink,
    mtNavigation
  },
  created() {
    this.$axios.get("/users/getUser").then(res => {
      if (res.status === 200 && res.data.code === 0) {
        this.initUser(res.data.userInfo);
      } else {
        this.$messsage.error("获取用户信息失败");
      }
    });
  },
  methods: {
    ...mapMutations({
      initUser: "user/INIT_USER"
    })
  }
};
</script>

<style lang="scss">
.tabLink {
  position: absolute;
  top: -35px;
}
.tabLinks li {
  display: inline-block;
  margin: 0 20px;
  font-size: 16px;
  font-weight: 700;
  color: black;
}
</style>
