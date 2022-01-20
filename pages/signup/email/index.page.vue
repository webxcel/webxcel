<template>
  <div class="flex lg:w-9/12 w-full flex-col space-y-3">
    <div class="form-control">
      <input class="input input-bordered" placeholder="Email address" />
    </div>
    <div>
      <button class="btn normal-case btn-block text-lg flex items-center">
        <div class="flex-none">
          <mdi-email class="mr-3" />
        </div>
        <div class="flex-1">Continue with email</div>
      </button>
    </div>
    <div class="flex text-center w-full justify-center pt-5">
      <a :href="`/signup`" class="link link-hover flex items-center"
        ><div>
          <mdi-arrow-left class="mr-3" />
        </div>
        Other signup options
      </a>
    </div>
  </div>
</template>
<script lang="ts">
  export default {
    layout: "signup",
  };
</script>
