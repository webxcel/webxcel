<template>
  <div class="p-4">
    <div class="flex justify-between">
      <div class="flex-1 text-6xl font-bold">Notifications</div>
    </div>
    <div class="mt-10">
      <div class="tabs tabs-boxed">
        <div
          @click="changeTab(t.name)"
          :class="{
            'tab-active': selectedTab == t.name
          }"
          v-for="(t,i) in menu.notificationbar"
          :key="i"
          class="tab"
        >
          <div class="flex text-center items-center">
            {{ t.name }}
            <div class="badge ml-2 badge-outline">{{ t.count }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { usePageContext } from '#/renderer/usePageContext';
import { useAppStore } from '#/store/app'
import { storeToRefs } from 'pinia'
export default defineComponent({
  layout: 'workspace',
  props: [],
  data() {
    return {
      tabs: ['All', 'Unread', 'Assigned to me', 'Mentions'],
      selectedTab: 'All'
    }
  },
  setup() {
    const page: any = usePageContext()
    const store = useAppStore()
    const { menu } = storeToRefs(store)
    return {
      page, menu
    }
  },
  methods: {
    changeTab(e: string) {
      this.selectedTab = e
    }
  },
})
</script>