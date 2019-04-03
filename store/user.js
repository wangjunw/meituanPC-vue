export const state = () => ({
  user: {
    username: ''
  }
});
export const mutations = {
  INIT_USER(state, user) {
    console.log(user);
    state.user = {};
  }
};
export const actions = {
  initUser({ commit }, user) {
    commit('INIT_USER', user);
  }
};
