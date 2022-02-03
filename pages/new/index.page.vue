<template>
  <div
    class="flex w-full items-center justify-center px-3 md:px-20 h-screen bg-base-300 text-base-content"
  >
    <div class="flex-1">
      <div class="flex flex-col">
        <div class="md:text-4xl font-bold">Create a project</div>
        <div class="text-sm text-gray-4 mt-4 md:pr-64">
          To deploy a new Project, import an existing Git Repository or get
          started with one of our Templates.
        </div>
        <div class="flex items-center space-x-4 pt-10">
          <button class="btn btn-primary shadow-md normal-case">
            Import from Git repo
          </button>
          <div>or</div>
          <div>
            <a href="templates" class="link link-hover"> Browse Templates</a>
          </div>
        </div>
      </div>
    </div>

    <div class="w-120 slideRight">
      <div class="card h-96 flex-shrink-0 shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="flex justify-between space-x-5">
            <div class="dropdown">
              <div
                tabindex="0"
                class="mb-1 btn w-64 truncate normal-case items-center justify-start text-left text-sm"
              >
                <div class="flex-none mr-2 self-center">
                  <mdi-github />
                </div>

                <div class="flex-1">Sukiejosh</div>
                <mdi-chevron-down />
              </div>
              <ul
                tabindex="0"
                class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-64"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <input
              type="text"
              placeholder="Search"
              class="input input-bordered"
            />
          </div>
          <div class="form-control mt-6">
            <input type="button" value="Login" class="btn btn-primary" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="flex w-full items-center justify-start md:px-20 px-3 py-5">
      <button class="btn btn-primary btn-wide">Continue</button>
    </div> -->
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
    },
    data() {
      return {
        tabs: [
          {
            name: "App details",
            component: "uiux",
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
      changeT(i: any) {
        this.currentI = i;
      },
      getComponent(i: any) {
        return this.tabs[i].component;
      },
    },
  });
</script>
