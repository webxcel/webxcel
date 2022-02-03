<template>
  <div class="flex h-screen items-center lg:px-24 pl-1 pr-2 w-full">
    <div class="flex flex-col w-full space-y-7">
      <div
        :class="{
          flex: currentI > 0,
          hidden: currentI == 0,
        }"
        class="justify-start items-center"
        @click="previous"
      >
        <button class="btn btn-circle btn-ghost">
          <mdi-arrow-left />
        </button>
      </div>
      <div class="flex w-full pl-2">
        <div class="flex-none self-start text-2xl font-bold pt-2 md:pr-5 pr-2">
          {{ currentI + 1 }}
        </div>
        <div class="flex-1">
          <component :is="getComponent(currentI)" />
        </div>
      </div>
      <div class="flex justify-start pt-20 pl-12">
        <button @click="next" class="btn btn-wide">Next</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  export default defineComponent({
    layout: "new-project",
    components: {
      uiux: defineAsyncComponent(
        () => import("#/components/new-project/app-details.vue")
      ),
      ImportRepo: defineAsyncComponent(
        () => import("#/components/create-app/import-repo.vue")
      ),
      setup1: defineAsyncComponent(
        () => import("#/components/setup-app/setup-1.vue")
      ),
      setup2: defineAsyncComponent(
        () => import("#/components/setup-app/setup-2.vue")
      ),
    },
    data() {
      return {
        currentComponent: "setup1",
        currentI: 0,
        tabs: ["setup1", "setup2"],
      };
    },
    methods: {
      next() {
        const isLast = this.tabs.length - 1 == this.currentI;
        if (isLast) {
          return;
        }
        this.currentI += 1;
      },
      previous() {
        const isFirst = this.currentI == 0;
        if (isFirst) {
          return;
        }
        this.currentI -= 1;
      },
      getComponent(i: any) {
        return this.tabs[i];
      },
    },
  });
</script>
