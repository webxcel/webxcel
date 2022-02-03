<template>
  <div class="content">
    <div>
      <div class="shadow bg-base-200 drawer drawer-mobile h-screen">
        <input id="workspace" type="checkbox" class="drawer-toggle" />
        <div class="flex w-full drawer-content">
          <!-- <label
            for="workspace"
            class="mb-4 btn btn-primary drawer-button lg:hidden"
          >
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
          </label> -->

          <slot />
        </div>
        <div class="drawer-side">
          <label for="workspace" class="drawer-overlay"></label>
          <transition name="slideLeft" mode="out-in">
            <ul class="menu lg:w-80 md:pt-10 p-2 border bg-base-100">
              <li class="menu-title mb-5">
                <span> Oladokun josh workspace </span>
              </li>
              <li tabindex="" class="my-1" v-for="(r, i) in routes" :key="i">
                <a
                  :class="{
                    active: getLink(r.name.toLocaleLowerCase())?.current,
                  }"
                  :href="getLink(r.name.toLocaleLowerCase())?.link"
                  >{{ r.name }}
                </a>
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { BaseTree } from "@he-tree/vue3";
  import "@he-tree/vue3/dist/he-tree-vue3.css";
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from "@headlessui/vue";
  import { storeToRefs } from "pinia";
  import { usePageContext } from "../renderer/usePageContext";
  import { useAppStore } from "../store/app";

  export default defineComponent({
    setup() {
      const page: any = usePageContext();
      const store = useAppStore();
      // const {  } = storeToRefs(store);
      return {
        page,
        // menu,
      };
    },
    data() {
      return {
        mounted: false,
        routes: [
          {
            name: "Overview",
          },
          {
            name: "Members",
          },
          {
            name: "Integrations",
          },

          {
            name: "Notifications",
          },
          {
            name: "Settings",
          },
          {
            name: "Trash",
          },
        ],
      };
    },
    components: {
      BaseTree,
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
    },
    methods: {
      getLink(e: any) {
        if (this.mounted == false) return;
        const link = `/w/${this.page.routeParams.workspaceId}/${e}`;
        const currentL = window.location.pathname;
        const splitP = currentL.split("/");
        const isLinkEqual = splitP[splitP.length - 1] == e;

        return {
          current: isLinkEqual ? true : false,
          link,
        };
      },
    },
    async mounted() {
      this.mounted = true;
    },
  });
</script>
