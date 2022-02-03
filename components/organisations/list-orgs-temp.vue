<template>
  <div class="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:p-10 p-2">
    <div class="lg:col-span-5 col-span-1">
      <div class="lg:pl-3 text-gray-400 font-light mb-3 pl-4">Recent</div>
      <div
        class="card lg:card-side shadow-lg border-t-4 border-b-2 border-secondary"
      >
        <div class="card-body">
          <div></div>
          <h2 class="card-title lg:text-4xl text-3xl">Josh's workspace</h2>
          <p class="text-sm text-gray-400">Workspace for enineering forms</p>

          <div class="flex space-x-2 py-3 mt-2">
            <button class="btn btn-circle btn-sm shadow-md">
              <mdi-pencil />
            </button>
            <button class="btn btn-circle btn-sm shadow-md">
              <mdi-link />
            </button>
            <button class="btn btn-circle btn-sm shadow-md">
              <mdi-bell-outline />
            </button>
            <button class="btn btn-circle btn-sm shadow-md">
              <mdi-email-outline />
            </button>
          </div>
          <div class="text-sm text-gray-400 flex space-x-2 p-2">
            <div>
              <div class="avatar">
                <div
                  class="rounded-full w-4 h-4 ring ring-primary ring-offset-base-100 ring-offset-2"
                >
                  <img
                    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                  />
                </div>
              </div>
            </div>
            <div class="self-center">Created by - Joshua</div>
          </div>
          <div class="text-sm text-gray-400 px-1">
            Last updated: Monday 7th october, 2021
          </div>
          <div class="card-actions">
            <a
              :href="`${pageContext?.urlPathname}/jjhbdhbnbd`"
              class="btn btn-primary flex lg:btn-wide btn-block shadow-md"
            >
              <div class="flex-1">Continue</div>
              <div class="flex-none">
                <mdi-arrow-right />
              </div>
            </a>
            <!-- <button class="btn btn-ghost">More info</button> -->
          </div>
        </div>
      </div>
    </div>
    <div class="lg:col-span-5 col-span-1 lg:pl-0">
      <div class="flex items-center hidden">
        <div class="flex-1">
          <div class="lg:pl-3 text-gray-400 font-light mb-3">
            Other workspaces
          </div>
        </div>
        <!-- <div class="flex-none">
            <a href="#create-app" class="btn btn-primary">Create new web app</a>
          </div> -->
      </div>
    </div>
    <div v-for="(n, i) in orgs" :key="n" class="col-span-1">
      <div
        tabindex="0"
        class="card shadow-lg max-w-sm border-t-4 border-b-2 border-secondary"
      >
        <figure>
          <img
            src="https://picsum.photos/id/1005/400/250"
            class="!rounded-none"
          />
        </figure>
        <div class="card-body p-6">
          <div class="flex justify-between items-center">
            <div class="font-bold text-xl mb-1 pl-1 flex-1">French</div>
            <div class="badge badge-success">Active</div>
          </div>
          <div
            class="text-sm text-gray-400 px-1"
            title="Monday 7th october, 2021"
          >
            Last updated: 23 days ago
          </div>
          <a
            :href="'/test'"
            class="btn btn-primary flex btn-block shadow-md mt-3 hidden"
          >
            <div class="flex-1">Continue</div>
            <div class="flex-none">
              <mdi-arrow-right />
            </div>
          </a>

          <!-- <div class="font-medium text-opacity-10 lg:text-xs">Created by | Oladokun joshua</div> -->
          <div class="flex space-x-2 py-3 hidden">
            <button class="btn btn-circle btn-outline btn-sm shadow-md">
              <mdi-pencil />
            </button>
            <button class="btn btn-circle btn-sm shadow-md">
              <mdi-link />
            </button>
            <button class="btn btn-circle btn-sm shadow-md">
              <mdi-bell-outline />
            </button>
            <button class="btn btn-circle btn-sm shadow-md">
              <mdi-email-outline />
            </button>
          </div>
          <!-- <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { usePageContext } from "#/renderer/usePageContext";

  export default defineComponent({
    props: ["orgs"],
    setup(props) {
      const pageContext: any = usePageContext();
      return {
        pageContext,
      };
    },
  });
</script>
