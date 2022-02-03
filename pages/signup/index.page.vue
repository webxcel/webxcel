<template>
  <div class="flex lg:w-9/12 w-full flex-col space-y-5">
    <div>
      <!-- <button
        @click="testLogin"
        class="btn btn-block text-lg flex normal-case space-x-4"
      >
        <mdi-github />
        <div class="">Continue with Github</div>
      </button> -->
      <a
        href="https://github.com/login/oauth/authorize?response_type=code&scope=repo%2Cadmin%3Aorg&client_id=9dd7f6cd4bab283bf9c9"
        class="btn btn-block text-lg flex normal-case space-x-4"
      >
        <mdi-github />
        <div class="">Continue with Github</div>
      </a>
    </div>
    <div>
      <button
        disabled
        class="btn btn-block bg-yellow-600 text-white hover:bg-yellow-700 hover:text-white text-lg flex normal-case space-x-4"
      >
        <mdi-gitlab />
        <div class="">Continue with Gitlab</div>
      </button>
    </div>
    <div>
      <button
        disabled
        class="btn btn-block bg-blue-500 text-white hover:bg-blue-600 hover:text-white text-lg flex normal-case space-x-4"
      >
        <mdi-bitbucket />
        <div class="">Continue with Bitbucket</div>
      </button>
    </div>
    <div class="flex text-center w-full justify-center">
      <a
        :href="`${pageContext.urlPathname}/email`"
        class="link link-hover flex items-center"
        >Continue with email
        <div>
          <mdi-arrow-right class="ml-3" />
        </div>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
  import { usePageContext } from "#/renderer/usePageContext";
  import { useAppStore } from "#/store/app";
  // import { buildUrl } from "build-url-ts";
  import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
  import { navigate } from "vite-plugin-ssr/client/router";
  import { $fetch } from "ohmyfetch";

  export default defineComponent({
    layout: "signup",
    props: ["git"],
    setup() {
      const pageContext: any = usePageContext();
      const store = useAppStore();
      return {
        pageContext,
        store,
      };
    },
    methods: {
      async testLogin() {
        // await $fetch(
        //   "https://github.com/login/oauth/authorize?response_type=code&scope=repo%2Cadmin%3Aorg&client_id=9dd7f6cd4bab283bf9c9"
        // );
        const res = await $fetch("https://localhost:3000/v1/auth/github");
        console.log("result", res);
      },
      githubLogin() {
        //@ts-ignore
        const auth = getAuth(this.$fireapp);
        const provider = new GithubAuthProvider();
        provider.addScope("repo");
        provider.addScope("admin:org");

        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;

            // The signed-in user info.
            const user = result.user;
            console.log("result", result);
            console.log("token", token);
            console.log("credentials", credential);
            this.store.githubL({ token, user, credential });
            navigate("/organisation");
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            // ...
          });
      },
    },
  });
</script>
