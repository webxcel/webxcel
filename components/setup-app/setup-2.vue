<template>
  <div class="w-full">
    <div class="form-control">
      <label class="label">
        <span class="label-text md:text-2xl text-xl text-gray-400 px-3"
          >Choose your workspace Theme</span
        >
      </label>
      <div class="grid md:grid-cols-6 grid-cols-4 gap-3 pl-2 pt-4">
        <div v-for="(t, i) in theme" :key="i" class="col-span-1">
          <div
            tabindex="0"
            :class="{
              'bg-primary text-primary-content': t !== 'Black',
              'bg-base-100 text-base-content': t == 'Black',
            }"
            class="md:h-40 md:w-40 h-20 w-20 btn md:text-lg text-xs"
            :data-theme="t.toLowerCase()"
          >
            {{ t }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  export default defineComponent ({
    data() {
      return {
        theme: ["Wireframe", "Light", "Dark", "Bumblebee", "Black"],
      };
    },
  })
</script>
