<template>
  <div>
    <el-row style="height: 427px;">
      <el-col :span="5" style="position: relative; height: 100%;">
        <menu-list/>
      </el-col>
      <el-col :span="19">
        <div class="tabLink">
          <ul class="tabLinks">
            <li v-for="item in tabLinks" :key="item.name">
              <a :href="item.link">{{item.name}}</a>
            </li>
          </ul>
        </div>
        <banner/>
      </el-col>
    </el-row>
    <el-row>
      <!-- <el-col :span="24">
        <mt-style/>
      </el-col>-->
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
        {
          name: "美团外卖",
          link: "http://waimai.meituan.com"
        },
        {
          name: "猫眼电影",
          link: "https://maoyan.com"
        },
        {
          name: "美团酒店",
          link: "https://hotel.meituan.com"
        },
        {
          name: "民宿 / 公寓",
          link:
            "https://phoenix.meituan.com/?phx_wake_up_type=mtpc_category&phx_wake_up_source=nav_bar"
        },
        {
          name: "商家入驻",
          link:
            "https://ecom.meituan.com/bizsettle/settle/merchantsSettle?utm_source=mtxz"
        },
        {
          name: "美团公益",
          link: "https://gongyi.meituan.com/"
        }
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
    this.$axios.$get("/users/getUser").then(res => {
      if (res.code === 0) {
        this.initUser(res.userInfo);
      } else {
        this.$message.error("获取用户信息失败");
        // this.$router.push("/account/login");
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
  a {
    color: #333;
  }
  &:last-of-type,
  &:nth-of-type(2),
  &:nth-of-type(3) {
    a {
      &:hover {
        color: #f04d4e;
      }
    }
  }
  &:first-of-type,
  &:nth-of-type(4) {
    a {
      &:hover {
        color: #fbc700;
      }
    }
  }
  &:nth-of-type(5) {
    a {
      &:hover {
        color: #31bbac;
      }
    }
  }
}
.home-content {
  background: #fff;
  border: solid 1px #e5e5e5;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
