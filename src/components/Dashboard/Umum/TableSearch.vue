<template>
  <div class="container flex items-center justify-between p-0 bg-[#ebf3f5] flex-wrap lg:flex-nowrap">
    <!-- Search Text and Search Box -->
    <div class="search-container flex items-center space-x-4 mb-4 lg:mb-0">
      <p class="search-text text-[#6A6C7A] font-poppins text-2xl leading-[2.25rem]">
        Search
      </p>
      <input
          type="text"
          placeholder="Search"
          class="search-box lg:w-[20rem] lg:h-[2.8125rem] rounded-[1.40625rem] border-2 border-[#6A6C7A] bg-[#F6F6F6] px-4 py-2 text-[#6A6C7A] font-poppins text-2xl"
          @input="onSearch"
      />
    </div>

    <!-- Show Text, Border Angka Box, and Documents per Page Text -->
    <div class="show-container flex items-center space-x-4">
      <p class="show-text text-[#6A6C7A] font-poppins text-2xl leading-[2.25rem] text-left">
        Show
      </p>
      <div class="number-box lg:w-[5.8125rem] lg:h-[2.8125rem] rounded-[1.40625rem] border-2 border-[#6A6C7A] bg-[#F6F6F6] flex items-center justify-center space-x-2">
        <p class="number-text text-[#6A6C7A] font-poppins text-lg">10</p>
        <img src="@/assets/icon/arrow-down-search.svg" alt="Sort Icon" class="w-[0.8125rem] h-[0.40625rem] flex-shrink-0"/>
      </div>
      <p class="documents-text text-[#6A6C7A] font-poppins text-2xl leading-[2.25rem]">
        documents per page
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableSearch',
  methods: {
    onSearch(event) {
      this.$emit('search', event.target.value);
    }
  }
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

@media (max-width: 1280px){
  .search-text,
  .show-text,
  .documents-text,
  .number-text {
    font-size: 1rem;
  }
  .container {
    padding: 0 ;
    box-sizing: border-box;
    width: 100%;
  }

  .search-box {
    width: 20rem;
    height: 2rem;
    flex-shrink: 0;
    font-size: 0.9375rem;
  }

  .number-box {
    width: 4rem;
    height: 2rem;
    flex-shrink: 0;
    font-size: 0.9375rem;
  }
}

@media (max-width: 1028px) {
  .flex-wrap {
    flex-direction: column;
    align-items: flex-start;
  }

  .lg\\:mb-0 {
    margin-bottom: 0;
  }

  .search-container,
  .show-container {
    width: 100%;
  }

  .search-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
  }

  .show-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .number-box {
    width: 5.3125rem;
    height: 2.1875rem;
    flex-shrink: 0;
    font-size: 0.9375rem;
  }
}

@media (max-width: 965px) {
  .search-text,
  .show-text,
  .documents-text,
  .number-text {
    font-size: 0.9375rem;
  }

  .container {
    padding: 0 1rem; /* Ensure padding inside the container */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
    width: 100%;
  }

  .search-box {
    width: 15rem; /* Shortened width for smaller screens */
    height: 2.1875rem;
    flex-shrink: 0;
    font-size: 0.9375rem;
  }

  .number-box {
    width: 5.3125rem;
    height: 2.1875rem;
    flex-shrink: 0;
    font-size: 0.9375rem;
  }
}
</style>
