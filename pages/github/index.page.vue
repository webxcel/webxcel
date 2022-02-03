<template>
  <div class="flex h-screen w-full items-center justify-center">
    <div class="font-bold text-4xl italic">Authorizing</div>
  </div>
</template>
<script lang="ts">
  import { useAppStore } from "#/store/app";
  import { navigate } from "vite-plugin-ssr/client/router";

  export default defineComponent({
    props: ["token"],
    setup() {
      const store = useAppStore();
      return {
        store,
      };
    },
    async mounted() {
      if (this.token) {
        // this.store.setGithubtoken(this.token);
        this.store.github.token = this.token;
        return navigate("/organisations");
      }
    },
  });
</script>
