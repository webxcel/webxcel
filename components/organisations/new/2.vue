<template>
  <div class="flex w-full">
    <Loading1 v-if="loading" class="h-80" />
    <div v-else class="flex flex-col w-full">
      <div class="flex w-full">
        <div class="flex-1">
          <div class="flex space-x-7 w-full items-center">
            <div class="avatar">
              <div class="rounded-full w-8 h-8">
                <img :src="details.avatar_url" />
              </div>
            </div>
            <div>{{ details.login }}</div>
          </div>
        </div>
        <div>
          <a href="#" class="btn btn-circle btn-sm">
            <mdi-close />
          </a>
        </div>
      </div>
      <div class="flex w-full pt-10 flex-col">
        <component :name="details.login" :is="tabs[currentI]"></component>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Loading1 from "#/components/base/loading.vue";
// import { getOrg } from "#/pages/organisations/get-org.telefunct";
import { usePageContext } from "#/renderer/usePageContext";
import { useAppStore } from "#/store/app";


export default defineComponent({
  components: {
    Loading1,
    g: defineAsyncComponent(() => import("./2vue/details2.vue")),
    h: defineAsyncComponent(() => import("./2vue/repo2.vue"))
  },
  props: ['name'],
  data() {
    return {
      loading: false,
      details: {
        avatar_url: '',
        login: ''
      },
      currentI: 0,
      tabs: ['g', 'h']
    }
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
    async getO() {
      this.loading = true
      const provider: any = this.store.currentProvider
      //@ts-ignore
      // await getOrg({ token: this.store[provider].token, org: this.name })
      //   .then((e) => {
      //     console.log('g', e)
      //     this.details = { ...e.orgs.data }
      //   })
      this.loading = false
    }
  },
  mounted() {
    console.log('dfdfd')
    this.getO()
  },
})
</script>