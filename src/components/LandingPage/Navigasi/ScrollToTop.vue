<template>
  <div v-if="isVisible" class="scroll-to-top" @click="scrollToTop">
    <img src="../../../assets/icon/scroll_up.svg" alt="Scroll to top">
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handleScroll() {
      this.isVisible = window.scrollY > 300;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
