<template>
  <div class="footer">
    <div class="footer-copyright-left">
      <p>
        ©美团网团购 meituan.com
        <a
          href="http://www.beianbeian.com/beianxinxi/283f39a9-4c00-427a-97ef-3c7a9e1e0af1.html"
          style="margin-left: 20px;"
        >京ICP证070791号</a>
        <a href="http://www.miitbeian.gov.cn/">京ICP备10211739号</a>
      </p>
      <p>
        <a
          href="https://portal-portm.meituan.com/webpc/protocolmanage/comment/license/tv"
          target="_blank"
        >广播电视节目制作经营许可证（京）字第03889号</a>
      </p>
      <p>
        <a
          href="https://portal-portm.meituan.com/webpc/protocolmanage/foodlicense"
          target="_blank"
        >食品经营许可证</a>
        <a
          href="https://portal-portm.meituan.com/webpc/protocolmanage/medicalcertificate"
          target="_blank"
        >互联网药品信息服务资格证</a>
      </p>
      <p>
        <a
          href="http://portal-portm.meituan.com/webpc/protocolmanage/medicalapparatus"
          target="_blank"
        >医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</a>
      </p>
    </div>
    <div class="footer-copyright-right">
      <a
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502025545"
        target="_blank"
      >京公网安备11010502025545号</a>
      <div class="ft-imgs">
        <a
          class="ft-img ft-record"
          href="https://portal-portm.meituan.com/webpc/protocolmanage/comment/license/sankuai"
          title="备案信息"
          target="_blank"
        ></a>
        <a
          class="ft-img ft-knet"
          href="http://t.knet.cn/index_new.jsp"
          title="可信网站认证"
          target="_blank"
        ></a>
        <a
          class="ft-img ft-12315"
          href="http://www.bj315.org/xfwq/lstd/201209/t20120910_3344.shtml?dnrpluojqxbceiqq"
          title="12315消费争议"
          target="_blank"
        ></a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  color: #999;
  border-top: solid 1px #e5e5e5;
  padding: 15px 0 30px 20px;
  box-sizing: border-box;
}
.footer a {
  color: #999;
}
.footer .footer-copyright-left a {
  margin-right: 20px;
}
.footer .footer-copyright-right {
  text-align: right;
}
.footer .footer-copyright-right a:hover {
  color: #31bbac;
}
.footer .ft-imgs {
  padding-top: 10px;
}
.footer .ft-img {
  height: 38px;
  margin-right: 2px;
  background-image: url("../../../static/images/footer.png");
  background-repeat: no-repeat;
  width: 107px;
  display: inline-block;
}
.footer .ft-record {
  width: 109px;
  background-position: 0 -167px;
}
.footer .ft-knet {
  background-position: 0 -127px;
}
.footer .ft-12315 {
  background-position: 0 -40px;
}
</style>
