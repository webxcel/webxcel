<template>
  <div class="relative">
    <div class="navbar lg:px-10 sticky top-0 z-10 mb-2 shadow-lg bg-neutral text-neutral-content">
      <div class="flex-1">
        <span class="text-xl font-bold">Webxcel | Organisations</span>
      </div>
      <div class="navbar-end">
        <div class="form-control mr-3">
          <div class="relative">
            <input
              type="text"
              placeholder="Search for a workspace"
              class="w-full pr-16 input input-primary text-primary input-bordered"
            />
            <button class="absolute top-0 right-0 rounded-l-none btn btn-primary">go</button>
          </div>
        </div>
        <!-- <mobileThemeChanger /> -->
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <component :orgs="orgs" :is="currentD" />
    </transition>
  </div>
</template>
<script lang="ts">
import ky from "ky";
import { usePageContext } from "../../renderer/usePageContext";
import { useAppStore } from "#/store/app";
import { navigate } from "vite-plugin-ssr/client/router";

export default defineComponent({
  props: ["token"],
  components: {
    "app-details": defineAsyncComponent(
      () => import("#/components/create-app/details.vue")
    ),
    "import-repo": defineAsyncComponent(
      () => import("#/components/create-app/import-repo.vue")
    ),
    LoadingSkeleton: defineAsyncComponent(
      () => import("#/components/organisations/loadingSkeleton.vue")
    ),
    ListOrgs: defineAsyncComponent(
      () => import("#/components/organisations/list-orgs.vue")
    ),
  },
  data() {
    return {
      currentD: "loading-skeleton",
      isLoading: false,
      orgs: [],
    };
  },
  methods: {
    switchComponent({ data }: { data: any }) {
      const { git } = data;
      if (git == "Import") {
        return (this.currentD = "import-repo");
      }
    },
  },
  setup(props) {
    const pageContext: any = usePageContext();
    const store = useAppStore();
    return {
      pageContext,
      store,
    };
  },
  mounted() {
    if (!this.store.currentProvider) {
      navigate('/signup')
      return
    }
    let p = this
    setTimeout(() => {
      p.currentD = "list-orgs";
    }, 3000);
  },
});
</script>
