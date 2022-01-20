<template>
  <div
    class="flex w-full lg:flex-row-reverse h-screen lg:h-full pt-16 items-center"
  >
    <div class="lg:w-1/2 lg:block hidden"></div>
    <div class="lg:w-1/2 w-full">
      <div class="flex justify-center lg:pl-20 px-5 flex-col w-full">
        <div
          class="flex lg:text-6xl text-5xl flex-wrap lg:text-left text-center lg:pr-10 md:pb-16 pb-12 font-bold"
        >
          Start creating Frontend apps faster
        </div>
        <slot />
        <div
          class="flex justify-center flex-wrap pt-10 text-lg lg:w-9/12 w-full"
        >
          By clicking continue, You agree to our
          <span
            class="link link-hover font-bold mx-1 flex items-center text-center"
            >Terms of service <mdi-open-in-new class="ml-1" />
          </span>
          and
          <span
            class="link link-hover font-bold mx-2 flex items-center text-center"
            >Privacy policy
            <mdi-open-in-new class="ml-1" />
          </span>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { usePageContext } from "#/renderer/usePageContext";
  const pageContext: any = usePageContext();
</script>
