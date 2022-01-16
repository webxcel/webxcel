<template>
  <div class="content">
    <div>
      <div class="shadow bg-base-200 drawer drawer-mobile h-screen">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="flex drawer-content">
          <label
            for="my-drawer-2"
            class="mb-4 btn btn-primary drawer-button lg:hidden"
            >open menu</label
          >
          <!-- <div class="hidden text-xs text-center lg:block">
            Menu is always open on desktop size.
            <br />Resize the browser to see toggle button on mobile size
          </div>
          <div class="text-xs text-center lg:hidden">
            Menu can be toggled on mobile size.
            <br />Resize the browser to see fixed sidebar on desktop size
          </div>-->
          <slot />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <transition name="slideLeft" mode="out-in">
            <ul
              class="menu p-2 overflow-y-auto border-r-2 border-primary lg:w-80 w-80 bg-base-100 text-base-content"
            >
              <li
                class="mb-1 hover-bordered"
                v-for="(s, i) in menu.sidebar"
                :key="i"
              >
                <a :href="getLink(`${s.path}`)?.link">
                  <div
                    :class="{
                      'text-primary': getLink(`${s.path}`)?.current,
                    }"
                    class="flex space-x-4 items-center w-full"
                  >
                    <mdi-home-outline style="height: 20px; width: 20px" />
                    <div>{{ s.name }}</div>
                  </div>
                </a>
              </li>

              <div
                class="overflow-y-auto px-4 border-y-2 border-primary h-80 max-h-96 my-5"
              >
                <div class="mt-3" v-for="(s, i) in menu.spaces" :key="i">
                  <Disclosure v-slot="{ open }">
                    <DisclosureButton
                      class="flex justify-between w-full px-4 py-2 text-xs hover:bg-primary hover:text-primary-content rounded-box font-medium text-left"
                      :as="'a'"
                      href="#"
                    >
                      <span>{{ s.name }}</span>
                      <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                      <!-- <ChevronRightIcon :class="open?"transform rotate-90" : """ /> -->
                    </DisclosureButton>
                    <DisclosurePanel
                      class="px-4 pt-4 pb-2 text-sm text-gray-500"
                    >
                      <BaseTree :treeData="s.path" ref="tree1">
                        <template v-slot="{ node, index, tree }">
                          <b
                            v-if="node.$children.length &gt; 0"
                            @click="node.$folded = !node.$folded"
                            >{{ node.$folded ? "+" : "-" }}&nbsp;</b
                          >
                          <input
                            type="checkbox"
                            class="checkbox checkbox-xs checkbox-primary"
                            v-model="node.$checked"
                            @change="tree.updateChecked(node)"
                          />
                          &nbsp;
                          <span>{{ node.text }}</span>
                        </template>
                      </BaseTree>
                    </DisclosurePanel>
                  </Disclosure>
                </div>
              </div>

              <div class="w-full px-4 pt-16">
                <div class="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
                  <Disclosure v-slot="{ open }">
                    <DisclosureButton
                      class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                    >
                      <span>What is your refund policy?</span>
                      <!-- <ChevronUpIcon
            :class="open ? 'transform rotate-180' : ''"
            class="w-5 h-5 text-purple-500"
                      />-->
                    </DisclosureButton>
                    <DisclosurePanel
                      class="px-4 pt-4 pb-2 text-sm text-gray-500"
                    >
                      If you're unhappy with your purchase for any reason, email
                      us within 90 days and we'll refund you in full, no
                      questions asked.
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure as="div" class="mt-2" v-slot="{ open }">
                    <DisclosureButton
                      class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                    >
                      <span>Do you offer technical support?</span>
                      <!-- <ChevronUpIcon
            :class="open ? 'transform rotate-180' : ''"
            class="w-5 h-5 text-purple-500"
                      />-->
                    </DisclosureButton>
                    <DisclosurePanel
                      class="px-4 pt-4 pb-2 text-sm text-gray-500"
                      >No.</DisclosurePanel
                    >
                  </Disclosure>
                </div>
              </div>
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
      const { menu } = storeToRefs(store);
      return {
        page,
        menu,
      };
    },
    data() {
      return {
        mounted: false,
        routes: ["Home", "Notifications"],
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
        const link = `/p/${this.page.routeParams.workspaceId}/${e}`;
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
