<template>
  <div class="card shadow-md">
    <div class="card-body">
      <div class="flex items-center">
        <div class="flex-1">
          <div class="font-bold text-2xl">No Projects yet</div>
        </div>
        <div class="flex-none">
          <button class="btn btn-primary">
            <mdi-plus />
            <span class="md:block hidden ml-2">New Project</span>
          </button>
        </div>
      </div>
      <div>Create a project from a Template, or import a Git repository.</div>

      <div class="flex w-full py-5 space-x-3 md:space-x-0 justify-between">
        <div v-for="n in 5" class="h-40 w-40 rounded-md btn bg-primary"></div>
      </div>
      <a class="link link-hover">
        <div class="flex justify-start items-center">
          Browse Templates <mdi-arrow-right class="ml-3" />
        </div>
      </a>
    </div>
  </div>
</template>
