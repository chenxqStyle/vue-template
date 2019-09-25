const caseInfo = {
  state: {
    a: 1
  },
  actions: {
  	storeAdd(ctx,n){
  		ctx.commit('muAdd',n)
  	},
  	storeReduce(ctx,n){
  		ctx.commit('muReduce',n)
  	}
  },
  mutations: {
  	muAdd(state,n){
  		state.a = state.a + n
  	},
  	muReduce(state,n){
  		state.a = state.a - n
  	}
  }
};
export default caseInfo;
