<template>
  <div class="w-full">
    <div
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
    </div>
    <div v-else class="flex w-full items-center justify-center h-100">
      <div class="flex flex-col space-y-20">
        <div class="font-bold text-3xl text-opacity-100 w-full text-center">
          No organisations, yet
        </div>
        <div
          class="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0"
        >
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
            <button
              class="absolute top-0 right-0 rounded-l-none btn btn-primary"
            >
              Join
            </button>
          </div>
        </div>
      </div>

      <div id="new-organisation" class="modal">
        <div class="modal-box">
          <div class="flex flex-col">
            <div class="flex">
              <div class="font-bold pb-3 pt-1 text-xl flex-1">
                Import a github repo
              </div>
              <div>
                <a href="#" class="btn btn-circle btn-sm">
                  <mdi-close />
                </a>
              </div>
            </div>
            <ul class="menu py-4">
              <li class="my-1" v-for="(o, j) in orgs" :key="o.name">
                <a
                  ><div class="flex space-x-7 w-full items-center">
                    <div class="avatar">
                      <div class="rounded-full w-8 h-8">
                        <img :src="o.avatar" />
                      </div>
                    </div>
                    <div>{{ o.name }}</div>
                  </div></a
                >
              </li>
            </ul>
          </div>
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
        // orgs: [],
      };
    },
  });
</script>
