export const state = () => ({
  position: {
    city: ''
  }
});

export const mutations = {
  INIT_POSITION(state, position) {
    state.position = position;
  }
};
export const actions = {
  // 服务端渲染，城市信息
  async nuxtServerInit({ commit }, { req, app }) {
    const { status, data } = await app.$axios.get('/geo/getPosition');
    commit('INIT_POSITION', status === 200 ? data : { city: '' });
  }
};
