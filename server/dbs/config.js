export default {
  dbs: 'mongodb://127.0.0.1:27017/meituan',
  redis: {
    get host() {
      return '127.0.0.1';
    },
    get port() {
      return 6379;
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com';
    },
    get port() {
      return 587;
    },
    get user() {
      return '1157593964@qq.com';
    },
    get pass() {
      // 在邮箱配置里开启POP3/SMTP服务和IMAP/SMTP服务获取该密码
      return 'xfszcteejrhhigea';
    },
    //   随机验证码
    get code() {
      return () => {
        return Math.random()
          .toString(16)
          .slice(2, 6)
          .toUpperCase();
      };
    },
    //   过期时间
    get expire() {
      return () => {
        return new Date().getTime() + 60 * 1000 * 3;
      };
    }
  }
};
