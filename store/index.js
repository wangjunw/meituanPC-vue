export const state = () => ({
  position: {
    city: ''
  },
  orderStatus: [
    { text: "全部订单", status: "0" },
    { text: "待付款", status: "1" },
    { text: "待使用", status: "2" },
    { text: "待评价", status: "3" },
    { text: "退款/售后", status: "4" }
  ],
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
