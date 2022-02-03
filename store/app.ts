import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      github: {
        token: "",
        user: "",
      },
      gitlab: {},
      bitbucket: {},
    };
  },
  actions: {
    setGithubtoken(token: string) {
      console.log("ttoke", token);
      this.github.token = token;
    },
    setGithubUser(user: any) {
      this.github.user = user;
    },
  },
  //@ts-ignore
  persist: true,
});
