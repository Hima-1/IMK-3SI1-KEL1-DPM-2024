<template>
  <div class="pagination-wrapper">
    <button class="pagination-button double-arrow" @click="goToFirstPage">
      <img src="@/assets/icon/arrows-left.svg" alt="First Page" class="arrow-icon"/>
    </button>
    <button class="pagination-button single-arrow" @click="goToPreviousPage">
      <img src="@/assets/icon/arrow-left.svg" alt="Previous Page" class="arrow-icon"/>
    </button>
    <span class="pagination-text">
      Page <span class="current-page">{{ currentPage }}</span> of <span class="total-pages">{{ totalPages }}</span>
    </span>
    <button class="pagination-button single-arrow" @click="goToNextPage">
      <img src="@/assets/icon/arrow-right.svg" alt="Next Page" class="arrow-icon"/>
    </button>
    <button class="pagination-button double-arrow" @click="goToLastPage">
      <img src="@/assets/icon/arrows-right.svg" alt="Last Page" class="arrow-icon"/>
    </button>
  </div>
</template>

<script>
export default {
  name: 'TablePagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    goToFirstPage() {
      this.$emit('update:currentPage', 1);
    },
    goToPreviousPage() {
      if (this.currentPage > 1) {
        this.$emit('update:currentPage', this.currentPage - 1);
      }
    },
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('update:currentPage', this.currentPage + 1);
      }
    },
    goToLastPage() {
      this.$emit('update:currentPage', this.totalPages);
    }
  }
}
</script>



<style scoped>
.pagination-wrapper {
  width: 100%;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.625rem;
  border: 0.125rem solid #6A6C7A;
  background: #F6F6F6;
  margin: 0 auto;
  max-width: 28.5625rem;
}

.pagination-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #6A6C7A;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination-text {
  color: #6A6C7A;
  font-family: Poppins, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  width: 53.08%;
  text-align: center;
}

.current-page {
  color: #1A5796;
  font-weight: 800;
}

.total-pages {
  font-weight: 700;
}

.single-arrow {
  width: 3.25rem;
  height: 3.25rem;
  flex-shrink: 0;
  border: 0.125rem solid #6A6C7A;
  background: #F6F6F6;
}

.double-arrow {
  width: 11.94%;
}

@media (max-width: 1280px) {
  .pagination-wrapper {
    width: 20rem;
    height: 2.625rem;
    flex-shrink: 0;
  }

  .pagination-text {
    font-size: 1rem;
  }

  .single-arrow {
    width: 2.7rem;
    height: 2.625rem;
  }
}

@media (max-width: 640px) {
  .pagination-wrapper {
    width: 19.35938rem;
    height: 2.625rem;
    flex-shrink: 0;
  }

  .pagination-text {
    font-size: 0.9375rem;
  }

  .single-arrow {
    width: 2.14644rem;
    height: 2.625rem;
  }
}
</style>
