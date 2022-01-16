<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      name: 'default'
    }
  },
}
</script>