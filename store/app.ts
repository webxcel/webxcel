import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      github: {},
      gitlab: {},
      bitbucket: {},
    };
  },
  actions: {
    githubL(data: any) {
      this.github = data;
    },
  },
  //@ts-ignore
  persist: true,
});
