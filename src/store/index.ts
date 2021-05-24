import { ActionTree, createStore, MutationTree } from "vuex";
import * as vxt from "@/store/VuexTypes";
import { Lab, User } from "@/store/type";
import axios from "@/axios";


export interface State{
  labs?: Lab[];
  users?: User[];
}

const myState: State = {
  labs: [],
  users: []
}

const myMutations: MutationTree<State> = {
  [vxt.LIST_LABS]: (state,data) => state.labs = data,
  [vxt.LIST_USERS]: (state,data) => state.users = data
}

const myActions: ActionTree<State,State> = {
   [vxt.LIST_LABS]: async ({commit}) => {
      const resp = await axios.get("/lab/");
      commit(vxt.LIST_LABS,resp.data);
   },
   [vxt.LIST_USERS]: async ({commit}) => {
    const resp = await axios.get("/user/");
    commit(vxt.LIST_USERS,resp.data);
 }
}
export default createStore({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  modules: {},
});
