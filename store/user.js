export const state = () => ({
  userInfo: {}
});
export const mutations = {
  INIT_USER(state, user) {
    state.userInfo = user;
  }
};
