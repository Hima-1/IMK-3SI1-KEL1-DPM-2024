<template>
  <div class="flex items-center justify-center h-[80vh]">
    <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
};
</script>

<style scoped>
.loader {
  border-top-color: #3490dc;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

