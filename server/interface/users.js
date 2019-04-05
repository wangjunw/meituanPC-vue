import crypto from 'crypto';
import Router from 'koa-router';
import Redis from 'koa-redis';
import nodemMiler from 'nodemailer';
import User from '../dbs/models/users';
import Passport from './utils/passport';
import axios from '@nuxtjs/axios';
import Email from '../dbs/config';

// 创建一个路由对象，添加默认统一前缀
let router = new Router({
  prefix: '/users'
});

//验证码和用户的对应关系存到redis中
let Store = new Redis().client;

/**
 * 注册接口
 * username：这里对应前端的手机号字段
 * password：密码，需要md加密一下再存到数据库
 * code：验证码
 * email：邮箱
 */
router.post('/signup', async ctx => {
  const { username, password, code, email } = ctx.request.body;
  //  验证验证码
  if (code) {
    // 通过邮箱去redis中找保存的code和有效期
    const saveCode = await Store.hget(`nodemail:${email}`, 'code');
    const saveExpire = await Store.hget(`nodemail:${email}`, 'expire');
    if (code === saveCode) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期，请重新获取'
        };
        return;
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '验证码错误，请重新填写'
      };
      return;
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    };
    return;
  }
  //   查询数据库验证用户名（这里就是手机号）是否注册过
  let user = await User.find({ username });
  if (user.length) {
    ctx.body = {
      code: -1,
      msg: '用户名已被注册'
    };
    return;
  }
  // 没有被注册过就存入到库中
  let md5 = crypto.createHash('md5');
  let newUser = User.create({
    username,
    password: md5.update(password).digest('hex'),
    email
  });
  // 通过调用登录接口，检验是否创建用户成功
  if (newUser) {
    // 以下是自动登录验证是否注册成功
    //let res = await axios.post('/users/signin', { username, password });
    //if (res.data && res.data.code === 0) {
    ctx.body = {
      code: 0,
      msg: '注册成功'
      // user: res.data.user
    };
    //   } else {
    //     ctx.body = {
    //       code: -1,
    //       msg: '自动登录失败'
    //     };
    //   }
    // } else {
    //   ctx.body = {
    //     code: -1,
    //     msg: '注册失败'
    //   };
  }
});

/**
 * 登录接口
 * 暂时不支持手机动态码登录
 */
router.post('/signin', async (ctx, next) => {
  return Passport.authenticate('local', (err, user, info, status) => {
    if (err) {
      ctx.body = {
        code: -1,
        msg: err
      };
    } else {
      if (user) {
        ctx.body = {
          code: 0,
          msg: '登录成功',
          user
        };
        return ctx.login(user);
      } else {
        ctx.body = {
          code: 1,
          msg: info
        };
      }
    }
  })(ctx, next); //需要调用一下
});

/**
 * 获取验证码接口
 * email：邮箱地址
 */
router.post('/verify', async (ctx, next) => {
  let email = ctx.request.body.email;
  // 根据邮箱判断之前的验证码是否过期
  const saveExpire = await Store.hget(`nodemail:${email}`, 'expire');
  if (saveExpire && new Date().getTime() - saveExpire < 0) {
    ctx.body = {
      code: -1,
      msg: '请求过于频繁'
    };
    return false;
  }
  // 创建一个发送邮件的对象
  let transporter = nodemMiler.createTransport({
    host: Email.smtp.host,
    port: Email.smtp.port,
    secure: false, //如果端口为465则写true，其他则为false
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  });
  // 邮件内容
  let code = Email.smtp.code();
  let expire = Email.smtp.expire();
  let mailOptions = {
    from: `认证邮件<${Email.smtp.user}>`,
    to: email,
    subject: '仿美团网注册码', //主题
    html: `您的仿美团网注册码为：${code}，有效期为90秒`
  };
  // 发送
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('error:发送邮件失败');
    } else {
      // 把邮箱、验证码、过期时间存起来，以便下次判断
      Store.hmset(
        `nodemail:${email}`,
        'code',
        code,
        'expire',
        expire,
        'email',
        email
      );
    }
  });
  ctx.body = {
    code: 0,
    msg: 'ok',
    expire: 90
  };
});

/**
 * 退出接口
 */
router.get('/exit', async (ctx, next) => {
  await ctx.logout(); //执行退出动作
  //验证是否退出
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0,
      msg: '退出成功'
    };
  } else {
    ctx.body = {
      code: -1,
      msg: '退出失败'
    };
  }
});

/**
 * 获取用户信息接口
 */
router.get('/getUser', async ctx => {
  if (ctx.isAuthenticated()) {
    const { username, email } = ctx.session.passport.user;
    ctx.body = {
      code: 0,
      msg: 'ok',
      userInfo: {
        username,
        email
      }
    };
  } else {
    ctx.body = {
      code: -1,
      msg: '获取个人信息失败'
    };
  }
});

/**
 * 重置密码时，校验邮箱和验证码的接口
 * 手机账号、邮箱、验证码
 */
router.post('/checkUser', async ctx => {
  const { username, email, code } = ctx.request.body;
  let user = await User.find({ username });
  if (user.length === 0 || user[0].email !== email) {
    ctx.body = {
      code: -1,
      msg: '邮箱与账号不匹配'
    };
    return;
  }
  const saveCode = await Store.hget(`nodemail:${email}`, 'code');
  if (saveCode !== code) {
    ctx.body = {
      code: -1,
      msg: '验证码输入错误'
    };
    return;
  }
  const saveExpire = await Store.hget(`nodemail:${email}`, 'expire');
  if (saveExpire - new Date().getTime() < 0) {
    ctx.body = {
      code: -1,
      msg: '验证码已失效'
    };
    return;
  }
  ctx.body = {
    code: 0,
    msg: '验证通过'
  };
});

/**
 * 修改密码接口
 */
router.post('/updatePassword', async (ctx, next) => {
  ctx.body = {
    code: 0,
    msg: '密码修改成功'
  };
});
export default router;
