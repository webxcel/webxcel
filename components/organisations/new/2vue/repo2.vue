<template>
  <div>
    <Loading1 v-if="loading" class="h-80" />
    <div class="flex flex-col space-y-5">
      <div class="w-full">
        <div class="tabs w-full tabs-boxed">
          <div
            :class="{
              active: i == currentI
            }"
            v-for="(t, i) in tabs"
            :key="i"
            class="tab flex-1"
          >{{ t }}</div>
        </div>
      </div>
      <div>
        <component :is="views[currentI]"></component>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { usePageContext } from "#/renderer/usePageContext";
import { useAppStore } from "#/store/app";
export default defineComponent({
  components: {
    // i: defineAsyncComponent(() => import('./2repo/import-repo.vues'))
  },
  props: ['name'],
  data() {
    return {
      loading: false,
      tabs: ['Import Git repository', 'Use Templates'],
      currentI: 0,
      views: ['i', 'j']
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
    next() {
      if (this.views.length - 1 == this.currentI) {
        return;
      }
      this.currentI += 1;
    },
    back() {
      if (this.currentI == 0) return;
      this.currentI -= 1;
    },
  },
  mounted() {

  },
})
</script>