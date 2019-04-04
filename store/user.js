export const state = () => ({
  userInfo: null
});
export const mutations = {
  INIT_USER(state, user) {
    state.userInfo = user;
  }
};
