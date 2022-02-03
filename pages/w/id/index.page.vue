<template>
  <div>
    <div>index</div>
  </div>
</template>
<script lang="ts">
  import { navigate } from "vite-plugin-ssr/client/router";
  export default defineComponent({
    layout: "workspace",
    created() {
      navigate(window.location.pathname + "/overview");
    },
  });
</script>
