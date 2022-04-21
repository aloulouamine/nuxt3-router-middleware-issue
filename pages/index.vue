<template>
  <div>Hi World2</div>
</template>

<script lang="ts">
definePageMeta({
  middleware: 'claim',
});

export default {
  setup() {
    console.log('setup');
  },
};
</script>
