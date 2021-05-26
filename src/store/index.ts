import { ActionTree, createStore, MutationTree } from "vuex";
import * as vxt from "@/store/VuexTypes";
import { Course, Lab, User } from "@/store/type";
import axios from "@/axios";


export interface State{
  labs?: Lab[];
  users?: User[];
  courses: Course[];
}

const myState: State = {
  labs: [],
  users: [],
  courses: []
}

const myMutations: MutationTree<State> = {
  // 实验室
  [vxt.LIST_LABS]: (state,data) => state.labs = data,
  [vxt.UPDATE_LAB]: (state,data) => state.labs = data,
  // 教师
  [vxt.LIST_USERS]: (state,data) => state.users = data,
  [vxt.UPDATE_USER]: (state,data) => state.users = data,
  // 课程
  [vxt.LIST_COURSES]: (state,data) => state.courses = data,
  [vxt.UPDATE_COURSE]: (state,data) => state.courses = data
}

const myActions: ActionTree<State,State> = {
    /**
     * 实验室
     */
   [vxt.LIST_LABS]: async ({commit}) => {
      const resp = await axios.get("/lab/");
      commit(vxt.LIST_LABS,resp.data);
   },
   [vxt.POST_LAB]: async ({commit},data) => {
      const resp = await axios.post("/lab/",data);
      return resp;
   },
   [vxt.UPDATE_LAB]: async ({commit},data) => {
     const resp = await axios.put("/lab/",data);
     commit(vxt.UPDATE_LAB,resp.data);
     return resp;
   },
   [vxt.DELETE_LAB]: async ({commit},data) => {
     const resp = await axios.delete(`/lab/${data}`);
     return resp;
   },
   /**
     * 教师
     */
   [vxt.LIST_USERS]: async ({commit}) => {
    const resp = await axios.get("/user/");
    commit(vxt.LIST_USERS,resp.data);
    },
    [vxt.POST_USER]: async ({commit},data) => {
      const resp = await axios.post("/user/",data);
      return resp;
    },
    [vxt.UPDATE_USER]: async ({commit},data) => {
      const resp = await axios.put("/user/",data);
      commit(vxt.UPDATE_USER,resp.data);
      return resp;
    },
    [vxt.DELETE_USER]: async ({commit},data) => {
      const resp = await axios.delete(`/user/${data}`);
      return resp;
    },
    /**
     * 课程
     */
   [vxt.LIST_COURSES]: async ({commit},data) => {
     const resp = await axios.get(`/course/${data}`);
     commit(vxt.LIST_COURSES,resp.data.courses);
  },
   [vxt.POST_COURSE]: async ({commit},data) => {
     const resp = await axios.post("/course/",data);
     return resp;
  },
   [vxt.UPDATE_COURSE]: async ({commit},data) => {
    const resp = await axios.put("/course/",data);
    commit(vxt.UPDATE_LAB,resp.data);
    return resp;
  },
   [vxt.DELETE_COURSE]: async ({commit},data) => {
    const resp = await axios.delete(`/course/${data}`);
    return resp;
  },
}
export default createStore({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  modules: {},
});
