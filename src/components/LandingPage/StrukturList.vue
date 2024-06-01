<template>
  <div class="bg-[#cddbe5] flex flex-col items-center justify-start min-h-screen pt-10 pb-20">
    <!-- Judul Berita -->
    <div class="w-full text-center mb-12">
      <h1 class="text-[#1A5796] text-center font-poppins text-[50px] font-bold leading-normal">Struktur</h1>
    </div>

    <!-- Struktur Button Group -->
    <div class="flex bg-white text-[#1A5796] mx-4 mb-12 p-4 font-medium rounded-[44px] first:rounded-tl-[44px] first:rounded-bl-[44px] last:rounded-tr-[44px] last:rounded-br-[44px] shadow-lg">
      <button class="mx-2 px-4 active:font-bold focus:text-[#F7941D] focus:font-bold hover:text-[#F7941D] hover:font-bold">Semua</button>
      <button class="mx-2 px-4 active:font-bold focus:text-[#F7941D] focus:font-bold hover:text-[#F7941D] hover:font-bold">BPH</button>
      <button class="mx-2 px-4 active:font-bold focus:text-[#F7941D] focus:font-bold hover:text-[#F7941D] hover:font-bold">Komisi I</button>
      <button class="mx-2 px-4 active:font-bold focus:text-[#F7941D] focus:font-bold hover:text-[#F7941D] hover:font-bold">Komisi II</button>
      <button class="mx-2 px-4 active:font-bold focus:text-[#F7941D] focus:font-bold hover:text-[#F7941D] hover:font-bold">Komisi III</button>
      <button class="mx-2 px-4 active:font-bold focus:text-[#F7941D] focus:font-bold hover:text-[#F7941D] hover:font-bold">Komisi IV</button>
      <button class="mx-2 px-4 active:font-bold focus:text-[#F7941D] focus:font-bold hover:text-[#F7941D] hover:font-bold">Pubmedkraf</button>
      <button class="mx-2 px-4 active:font-bold focus:text-[#F7941D] focus:font-bold hover:text-[#F7941D] hover:font-bold">IT</button>
    </div>

    <!-- Wrapper Struktur -->
    <div class="flex flex-wrap justify-center gap-8">
      <StrukturItem />
      <StrukturItem />
      <StrukturItem />
      <StrukturItem />
      <StrukturItem />
      <StrukturItem />
    </div>
  </div>
</template>

<script>
import StrukturItem from "./StrukturItem.vue";

export default {
  name: "StrukturList",
  components: {
    StrukturItem,
  },
};
</script>

<style scoped>
.button-group {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-bottom: 25px;
}

.gallery-button {
  background-color: #15649d;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding: 15px 30px;
  font-size: 23px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: font-weight 0.3s ease;
}

.gallery-button:first-child {
  border-top-left-radius: 44px;
  border-bottom-left-radius: 44px;
}

.gallery-button:last-child {
  border-top-right-radius: 44px;
  border-bottom-right-radius: 44px;
}

.gallery-button:hover {
  color: #c7d6dd;
}

.gallery-button.active {
  font-weight: bold;
  color: #c7d6dd;
}
</style>
