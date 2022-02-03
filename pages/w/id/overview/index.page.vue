<template>
  <div class="w-full">
    <div class="navbar md:px-10 mb-2 shadow-lg bg-neutral text-neutral-content">
      <div class="flex-none hidden lg:flex">
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex-1 px-2 mx-2">
        <span class="md:text-lg text-sm font-bold"> Webxcel | Overview </span>
      </div>
      <div class="flex-1 lg:flex-none">
        <div class="form-control">
          <input
            type="text"
            placeholder="Search for projects"
            class="input input-ghost md:w-96"
          />
        </div>
      </div>
    </div>
    <div class="md:px-10 py-5">
      <empty-project />
    </div>
  </div>
</template>
<script lang="ts">
  // import { navigate } from "vite-plugin-ssr/client/router";
  export default defineComponent({
    layout: "workspace",
    components: {
      EmptyProject: defineAsyncComponent(
        () => import("#/components/overview/empty-project.vue")
      ),
    },
  });
</script>
