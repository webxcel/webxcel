import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      github: {
        token: "",
        user: "",
      },
      gitlab: { token: "", user: "" },
      bitbucket: { token: "", user: "" },
      currentProvider: "",
      newRepo: {
        name: "",
        importMembers: false,
        importProjects: false,
        importTeams: false,
      },
    };
  },
  actions: {
    setGithubtoken(token: string) {
      this.github.token = token;
    },
    setGithubUser(user: any) {
      this.github.user = user;
    },
  },
  //@ts-ignore
  persist: true,
});
