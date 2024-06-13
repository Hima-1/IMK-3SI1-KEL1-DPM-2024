<template>
  <div class="min-h-screen flex items-center justify-center bg-[#EBF3F5] pt-0">
    <div class="w-[90vw] max-w-[1661px] h-[989px] bg-[#EBF3F5] rounded-lg p-8 pt-0">
      <HeaderComponent />
      <div class="px-4">
        <hr class="w-full border-t-2 border-[#C8D6DF] mb-8">
      </div>
      <div class="flex items-center mb-8">
        <img src="@/assets/icon/megaphone.svg" alt="Megaphone Icon" class="w-[4vw] h-[4vw] max-w-[58px] max-h-[58px] mr-4">
        <p class="text-[#1A5796] font-poppins text-[2.5vw] max-text-[40px] font-normal leading-normal">Aspirasi/Sambatan</p>
      </div>
      <div class="flex space-x-8">
        <IntroComponent />
        <FormComponent @show-confirmation-popup="showConfirmationPopup" />
      </div>
    </div>
    <AspirasiConfirmationPopup v-if="isConfirmationPopupVisible" @confirm="handleConfirmation" @cancel="hideConfirmationPopup" />
    <AspirasiSuccess v-if="isSuccessPopupVisible" @confirm="hideSuccessPopup" />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Dashboard/Aspirasi/AspirasiHeader.vue'
import IntroComponent from '@/components/Dashboard/Aspirasi/AspirasiIntro.vue'
import FormComponent from '@/components/Dashboard/Aspirasi/AspirasiForm.vue'
import AspirasiConfirmationPopup from "@/components/Dashboard/Aspirasi/AspirasiConfirmationPopup.vue";
import AspirasiSuccess from "@/components/Dashboard/Aspirasi/AspirasiSuccess.vue";

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
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
