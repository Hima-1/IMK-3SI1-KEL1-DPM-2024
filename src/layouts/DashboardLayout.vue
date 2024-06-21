<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <LoadingSpinner v-if="loading.value" />
    <router-view v-else />
    <Footer />
    <ScrollToTop />
  </div>
</template>

<script>
import Navbar from "@/components/Dashboard/Navigasi/Navbar.vue";
import ScrollToTop from "@/components/LandingPage/ScrollToTop.vue";
import Footer from "@/components/Dashboard/Navigasi/Footer.vue";
import LoadingSpinner from "@/components/Dashboard/Umum/Loading.vue";
import {inject, onMounted, onBeforeUnmount} from 'vue';
import {useRouter} from 'vue-router';

export default {
  name: 'DashboardLayout',
  components: {
    Navbar,
    Footer,
    ScrollToTop,
    LoadingSpinner
  },
  setup() {
    const loading = inject('loading');
    const router = useRouter();

    const startLoading = () => {
      loading.value = true;
    };

    const stopLoading = () => {
      loading.value = false;
    };

    onMounted(() => {
      router.beforeEach((to, from, next) => {
        startLoading();
        next();
      });

      router.afterEach(() => {
        stopLoading();
      });
    });

    return {
      loading,
    };
  },
};
</script>

<style scoped>
</style>
