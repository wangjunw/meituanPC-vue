<template>
  <div class="m-nav">
    <ul class="header-rightNav">
      <li
        @mouseenter="showMyMeituan"
        @mouseleave="showMyMeituan"
        :class="{hoverThis:hoverMyMeituan}"
      >
        <nuxt-link to="/center/myMeitaun">我的美团</nuxt-link>
        <dl v-show="hoverMyMeituan" class="myMeituan">
          <dd>
            <nuxt-link to="/center/order">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/center/collections">我的收藏</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/center/vouchers">抵用券</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/center/settings">账户设置</nuxt-link>
          </dd>
        </dl>
      </li>
      <li>
        <a href="http://i.meituan.com/mobile/down/meituan">手机APP</a>
      </li>
      <li
        @mouseenter="showMerchantCenter"
        @mouseleave="showMerchantCenter"
        :class="{hoverThis: hoverMerchantCenter}"
      >
        <span>商家中心</span>
        <dl v-show="hoverMerchantCenter" class="merchantCenter">
          <dd>
            <a
              href="https://e.meituan.com/meishi/epassport/login?service=com.sankuai.meishi.fe.ecom&continue=https%3A%2F%2Fe.meituan.com%2Fmeishi%2Fepassport%2Ftoken%3Ftarget%3Dhttps%253A%252F%252Fe.meituan.com%252Fmeishi%252F"
            >登录商家中心</a>
          </dd>
          <dd>
            <a href="https://shouyin.meituan.com/?utm_source=inner&utm_medium=mtpcsjzx">美团智能收银</a>
          </dd>
          <dd>
            <a
              href="https://bizvisualmeishi.meituan.com/bizsettle/settle/merchantsSettle?utm_source=mt_C_my"
            >我想合作</a>
          </dd>
          <dd>
            <a href="https://e.meituan.com/mobile/">手机免费开店</a>
          </dd>
          <dd>
            <a href="https://daili.meituan.com/?comeFrom=mtwebMenu">餐饮代理商招募</a>
          </dd>
          <dd>
            <a href="https://pc.meituan.com/?activity_code=mtpcdh">商家申请开票</a>
          </dd>
          <dd>
            <a href="https://paidui.meituan.com/?activity_code=168_00038141">免费合作美团排队</a>
          </dd>
        </dl>
      </li>
      <li
        @mouseenter="showNavigation"
        @mouseleave="showNavigation"
        :class="{hoverThis: hoverNavigation}"
      >
        <span>网站导航</span>
        <div v-show="hoverNavigation" class="navigations">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>
              <a href="https://www.meituan.com/iflight/" target="_blank">国际机票</a>
            </dd>
            <dd>
              <a href="https://www.meituan.com/train/" target="_blank">火车票</a>
            </dd>
            <dd>
              <a href="https://phoenix.meituan.com/" target="_blank">榛果民宿</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20036/" target="_blank">经济型酒店</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20037/" target="_blank">主题酒店</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20038/" target="_blank">商务酒店</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20039/" target="_blank">公寓</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20040/" target="_blank">豪华酒店</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20041/" target="_blank">客栈</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20042/" target="_blank">青年旅社</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20043/" target="_blank">度假酒店</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20044/" target="_blank">别墅</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20045/" target="_blank">农家院</a>
            </dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>
              <a href="https://bj.meituan.com/meishi/c20004/" target="_blank">烤鱼</a>
            </dd>
            <dd>
              <a href="https://bj.meituan.com/meishi/c36/" target="_blank">特色小吃</a>
            </dd>
            <dd>
              <a href="https://bj.meituan.com/meishi/c54/" target="_blank">烧烤</a>
            </dd>
            <dd>
              <a href="https://bj.meituan.com/meishi/c40/" target="_blank">自助餐</a>
            </dd>
            <dd>
              <a href="https://bj.meituan.com/meishi/c17/" target="_blank">火锅</a>
            </dd>
            <dd>
              <a href="https://bj.meituan.com/meishi/c393/" target="_blank">代金券</a>
            </dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>
              <a href="https://maoyan.com/films" target="_blank">热映电影</a>
            </dd>
            <dd>
              <a href="https://maoyan.com/cinemas" target="_blank">热门影院</a>
            </dd>
            <dd>
              <a href="https://maoyan.com/board" target="_blank">热映电影口碑榜</a>
            </dd>
            <dd>
              <a href="https://maoyan.com/board/6" target="_blank">最受期待电影</a>
            </dd>
            <dd>
              <a href="https://maoyan.com/board/1" target="_blank">国内票房榜</a>
            </dd>
            <dd>
              <a href="https://maoyan.com/board/2" target="_blank">北美票房榜</a>
            </dd>
            <dd>
              <a href="https://maoyan.com/board/4" target="_blank">电影排行榜</a>
            </dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <a href="https://i.meituan.com/mobile/down/meituan">
                <img :src="meituanImg" alt>
              </a>
            </dd>
            <dd>
              <a href="https://waimai.meituan.com/mobile/download/default">
                <img :src="waimaiImg" alt>
              </a>
            </dd>
            <dd>
              <a href="https://phoenix.meituan.com/app/">
                <img :src="zhenguoImg" alt>
              </a>
            </dd>
            <dd>
              <a href="https://www.dianping.com/events/m/index.htm">
                <img :src="dianpingImg" alt>
              </a>
            </dd>
            <dd>
              <a href="https://maoyan.com/app">
                <img :src="maoyanImg" alt>
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hoverMyMeituan: false,
      hoverMerchantCenter: false,
      hoverNavigation: false,
      meituanImg: require("@/static/images/meituan.png"),
      waimaiImg: require("@/static/images/waimai.png"),
      zhenguoImg: require("@/static/images/zhenguo.png"),
      dianpingImg: require("@/static/images/dianping.png"),
      maoyanImg: require("@/static/images/maoyan.png")
    };
  },
  methods: {
    showMyMeituan() {
      this.hoverMyMeituan = !this.hoverMyMeituan;
    },
    showMerchantCenter() {
      this.hoverMerchantCenter = !this.hoverMerchantCenter;
    },
    showNavigation() {
      this.hoverNavigation = !this.hoverNavigation;
    }
  }
};
</script>

<style lang="scss" scoped>
.header-rightNav {
  li {
    float: left;
    padding: 12px 14px;
    position: relative;
  }
  .hoverThis {
    background-color: #fff;
    border-color: #e5e5e5;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  }
}
.myMeituan,
.merchantCenter,
.navigations {
  position: absolute;
  background-color: #fff;
  right: 0;
  top: 95%;
  line-height: 3;
  text-align: center;
  border-color: #e5e5e5;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 13;
}
.header-rightNav {
  .myMeituan {
    width: 100%;
  }
  .merchantCenter {
    width: 150%;
  }
  .navigations {
    width: 1190px;
    padding: 30px 50px;
    box-sizing: border-box;
    dl {
      text-align: center;
      float: left;
      margin-right: 47px;
      dt {
        margin-bottom: 20px;
      }
    }
    dd {
      float: left;
    }
    .hotel {
      width: 234px;
      dd {
        width: 33%;
      }
    }
    .food {
      width: 156px;
      dd {
        width: 50%;
      }
    }
    .movie {
      width: 90px;
      dd {
        width: 100%;
      }
    }
    .app {
      img {
        width: 60px;
        height: 60px;
        margin-right: 20px;
      }
    }
  }
}
</style>

