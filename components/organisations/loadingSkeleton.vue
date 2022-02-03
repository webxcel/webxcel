<template>
  <div
    class="grid grid-cols-1 w-full lg:grid-cols-4 md:grid-cols-4 lg:p-10 gap-8 p-2"
  >
    <div class="col-span-1" :key="t" v-for="t in 4">
      <div class="card w-full shadow-md animate-pulse">
        <div class="card-body px-3">
          <div class="flex space-x-7 w-full items-center">
            <div class="avatar">
              <div class="rounded-full bg-gray-700 w-14 h-14"></div>
            </div>
            <div class="h-3 w-full bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
