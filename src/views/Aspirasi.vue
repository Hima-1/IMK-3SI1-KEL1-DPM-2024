<template>
  <div class="pb-16 flex items-center justify-center bg-[#EBF3F5] py-2">
    <div :class="['h-auto', 'bg-[#EBF3F5]', 'rounded-lg', 'p-8', 'pt-0', 'md:px-0', widthClass]">
      <HeaderComponent />
      <div class="md:px-0">
        <hr class="w-full border-t-2 border-[#C8D6DF] mb-8">
      </div>
      <div class="flex items-center mb-8">
        <img src="@/assets/icon/megaphone.svg" alt="Megaphone Icon" class="megaphone-icon mr-4">
        <p class="aspirasi-text text-[#1A5796] font-poppins text-[1.5rem] font-normal leading-normal">Aspirasi/Sambatan</p>
      </div>
      <div class="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
        <IntroComponent />
        <FormComponent @show-confirmation-popup="showConfirmationPopup"/>
      </div>
    </div>
    <AspirasiConfirmationPopup v-if="isConfirmationPopupVisible" @confirm="handleConfirmation"
                               @cancel="hideConfirmationPopup"/>
    <AspirasiSuccess v-if="isSuccessPopupVisible" @confirm="hideSuccessPopup"/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Dashboard/Aspirasi/Header.vue'
import IntroComponent from '@/components/Dashboard/Aspirasi/Intro.vue'
import FormComponent from '@/components/Dashboard/Aspirasi/Form.vue'
import AspirasiConfirmationPopup from "@/components/Dashboard/Aspirasi/ConfirmationPopup.vue";
import AspirasiSuccess from "@/components/Dashboard/Aspirasi/SuccessPopup.vue";

export default {
  name: 'AspirasiIntro',
  components: {
    AspirasiSuccess,
    HeaderComponent,
    IntroComponent,
    FormComponent,
    AspirasiConfirmationPopup,
  },
  data() {
    return {
      isConfirmationPopupVisible: false,
      isSuccessPopupVisible: false,
      widthClass: window.innerWidth <= 500 ? 'w-[100vw]' : 'w-[90vw] max-w-[1661px]'
    };
  },
  methods: {
    showConfirmationPopup() {
      this.isConfirmationPopupVisible = true;
    },
    hideConfirmationPopup() {
      this.isConfirmationPopupVisible = false;
    },
    handleConfirmation() {
      this.isConfirmationPopupVisible = false;
      this.isSuccessPopupVisible = true;
    },
    hideSuccessPopup() {
      this.isSuccessPopupVisible = false;
    },
    updateWidthClass() {
      this.widthClass = window.innerWidth <= 500 ? 'w-[100vw]' : 'w-[90vw] max-w-[1661px]';
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateWidthClass);
    this.updateWidthClass();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWidthClass);
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.megaphone-icon {
  width: 3rem;
  height: 3rem;
  max-width: 58px;
  max-height: 58px;
}

.aspirasi-text {
  font-size: 40px;
}

@media (max-width: 1280px) {
  .megaphone-icon {
    width: 3rem;
    height: 3rem;
    max-width: 72px;
    max-height: 72px;
  }

  .aspirasi-text {
    font-size: 1.5rem;
  }
}

@media (max-width: 425px) {
  .megaphone-icon {
    width: 2rem;
    height: 2rem;
    max-width: 72px;
    max-height: 72px;
  }

  .aspirasi-text {
    font-size: 1.25rem;
  }
}
</style>
