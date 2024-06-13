<template>
  <div class="flex items-center justify-between p-0 bg-[#ebf3f5]">
    <!-- Search Text and Search Box -->
    <div class="flex items-center space-x-4">
      <p class="text-[#6A6C7A] font-poppins text-2xl leading-[2.25rem]">
        Search
      </p>
      <input
          type="text"
          placeholder="Search"
          class="w-[28.6875rem] h-[2.8125rem] rounded-[1.40625rem] border-2 border-[#6A6C7A] bg-[#F6F6F6] px-4 py-2 text-[#6A6C7A] font-poppins text-2xl"
      />
    </div>

    <!-- Show Text, Border Angka Box, and Documents per Page Text -->
    <div class="flex items-center space-x-4">
      <p class="text-[#6A6C7A] font-poppins text-2xl leading-[2.25rem] text-right">
        Show
      </p>
      <div class="w-[5.8125rem] h-[2.8125rem] rounded-[1.40625rem] border-2 border-[#6A6C7A] bg-[#F6F6F6] flex items-center justify-center space-x-2">
        <p class="text-[#6A6C7A] font-poppins text-lg">10</p>
        <img src="@/assets/icon/arrow-down-search.svg" alt="Sort Icon" class="w-[0.8125rem] h-[0.40625rem] flex-shrink-0"/>
      </div>
      <p class="text-[#6A6C7A] font-poppins text-2xl leading-[2.25rem]">
        documents per page
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableSearch'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

img {
  width: 0.8125rem;
  height: 0.40625rem;
  flex-shrink: 0;
}
</style>
