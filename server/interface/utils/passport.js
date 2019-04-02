/**
 * 用户验证
 */
import crypto from 'crypto';
import passport from 'koa-passport'; //专门针对于koa的passport
import LocalStrategy from 'passport-local'; //passport本地的一个策略
import UserModel from '../../dbs/models/users';
passport.use(
  new LocalStrategy(async (username, password, done) => {
    let where = {
      username
    };
    let md5 = crypto.createHash('md5');
    let result = await UserModel.findOne(where);
    if (result !== null) {
      if (md5.update(password).digest('hex') === result.password) {
        return done(null, result);
      } else {
        return done(null, false, '密码错误');
      }
    } else {
      return done(null, false, '用户不存在');
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  return done(null, user);
});
export default passport;
