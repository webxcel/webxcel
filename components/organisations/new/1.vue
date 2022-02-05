<template>
  <div>
    <Loading1 v-if="loading" class="h-80" />
    <div v-else>
      <div class="flex w-full flex-col">
        <div class="flex">
          <div class="font-bold pb-3 pt-1 text-xl flex-1">Import a {{ store.currentProvider }} repo</div>
          <div>
            <a href="#" class="btn btn-circle btn-sm">
              <mdi-close />
            </a>
          </div>
        </div>
      </div>
      <ul class="menu py-4 overflow-y-auto">
        <li class="my-1" v-for="(o, j) in orgs" :key="o.name">
          <a @click="setO(o.name)">
            <div class="flex space-x-7 w-full items-center">
              <div class="avatar">
                <div class="rounded-full w-8 h-8">
                  <img :src="o.avatar" />
                </div>
              </div>
              <div class="flex w-full">
                <div class="flex-1">{{ o.name }}</div>
                <div class="pr-3">
                  <mdi-github v-if="store.currentProvider == 'github'" />
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { getOrgs } from "#/pages/organisations/org.telefunc";
import { usePageContext } from "#/renderer/usePageContext";
import { useAppStore } from "#/store/app";
import Loading1 from "#/components/base/loading.vue";
import { navigate } from "vite-plugin-ssr/client/router";


export default defineComponent({
  emits: ["first"],
  data() {
    return {
      orgs: [{
        name: "",
        avatar: ""
      }],
      loading: false
    };
  },
  setup(props) {
    const pageContext: any = usePageContext();
    const store = useAppStore();
    return {
      pageContext,
      store,
    };
  },
  methods: {
    setO(e: string) {
      this.$emit("first", e);
    },
    async getOrganisations() {
      if (!this.store.currentProvider) {
        navigate('/signup')
        return
      }
      this.loading = true
      const provider: any = this.store.currentProvider
      //@ts-ignore
      const or = await getOrgs({ token: this.store[provider].token });
      //@ts-ignore
      this.orgs = or.orgs;
      this.loading = false
    },
  },
  mounted() {
    this.getOrganisations();
  },
  components: { Loading1 }
});
</script>
