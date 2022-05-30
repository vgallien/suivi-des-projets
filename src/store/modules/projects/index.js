import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      projects: [
        {
          id: "p1",
          name: "Projet n°1",
        },
        {
          id: "p2",
          name: "Projet n°2",
        },
      ],
    };
  },
  getters,
  actions,
  mutations,
};
