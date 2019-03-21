<template>
  <div class="m-nav">
    <ul class="header-rightNav">
      <li>
        <nuxt-link to="/my">我的美团</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/myOrder">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="myCollect">我的收藏</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/coupon">抵用券</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/accountSettings">账户设置</nuxt-link>
          </dd>
        </dl>
      </li>
      <li>
        <a href="http://i.meituan.com/mobile/down/meituan">手机APP</a>
      </li>
      <li>
        <span>商家中心</span>
        <dl>
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
      <li>
        <span>网站导航</span>
        <div v->
          <dl>
            <dt></dt>
            <dd></dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.header-rightNav li {
  float: left;
}
</style>

