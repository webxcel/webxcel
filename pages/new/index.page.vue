<template>
  <div class="flex flex-col w-full">
    <div
      class="flex items-center md:px-20 h-40 bg-base-300 text-base-content text-3xl font-bold"
    >
      Lets create a project
    </div>
    <div class="tabs w-full tabs-boxed md:pl-16">
      <div
        v-for="(t, i) in tabs"
        :key="i"
        :class="{
          'tab-active': i == currentI,
        }"
        class="tab flex-1"
        @click="changeT(i)"
      >
        {{ t.name }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  export default {
    layout: "new-project",
    data() {
      return {
        tabs: [
          {
            name: "UI/UX screens",
            component: "",
          },
          {
            name: "Front end",
            component: "",
          },
          // {
          //   name: "Back end",
          //   component: "",
          // },
        ],
        currentI: 0,
      };
    },
    methods: {
      changeT(i) {
        this.currentI = i;
      },
    },
  };
</script>
