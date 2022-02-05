<template>
  <div class="w-full">
    <!-- <div
      v-if="orgs.length == 0"
      class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-7 lg:p-10 p-2"
    >
      <div v-for="(r, i) in orgs" class="col-span-1">
        <div class="card w-full shadow-md">
          <div class="card-body px-3">
            <div class="flex space-x-7 w-full items-center">
              <div class="avatar">
                <div class="rounded-full w-14 h-14">
                  <img :src="r.avatar" />
                </div>
              </div>
              <div>{{ r.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <div class="flex w-full items-center justify-center h-100">
      <div class="flex flex-col space-y-20">
        <div class="font-bold text-3xl text-opacity-100 w-full text-center">No organisations, yet</div>
        <div class="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0">
          <div>
            <a href="#new-organisation" class="btn flex">
              <mdi-account-group-outline class="mr-3" />
              <div>New organisation</div>
            </a>
          </div>
          <div class="relative">
            <input
              type="text"
              placeholder="Input an invitation code"
              class="w-full pr-16 input input-primary input-bordered"
            />
            <button class="absolute top-0 right-0 rounded-l-none btn btn-primary">Join</button>
          </div>
        </div>
      </div>

      <div id="new-organisation" class="modal">
        <div class="modal-box max-w-2xl">
          <component :name="newOrg.name" @first="first" :is="steps[currentI]"></component>
        </div>
      </div>
    </div>

    <div class="fixed right-5 bottom-5">
      <button tabindex="0" class="btn btn-lg btn-circle shadow-md">
        <mdi-plus />
      </button>
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  props: ["orgs"],
  data() {
    return {
      currentI: 0,
      steps: ["f", "se"],
      newOrg: {
        name: '',
      }
    };
  },
  components: {
    f: defineAsyncComponent(() => import("./new/1.vue")),
    se: defineAsyncComponent(() => import("./new/2.vue")),
  },
  methods: {
    next() {
      if (this.steps.length - 1 == this.currentI) {
        return;
      }
      this.currentI += 1;
    },
    back() {
      if (this.currentI == 0) return;
      this.currentI -= 1;
    },
    first(e: string) {
      this.newOrg.name = e
      this.next()
    }
  },
  mounted() {
    console.log("mounted");
  },
});
</script>
