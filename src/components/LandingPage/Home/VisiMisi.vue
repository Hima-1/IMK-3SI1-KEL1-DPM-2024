<template>
  <div class="bg-[#EBF3F5] min-h-screen flex items-center justify-center">
    <div class="wrapper flex flex-col items-center justify-center pt-10 pb-10 px-10">
      <div>
        <h1
          class="visi-misi bg-center bg-no-repeat bg-contain text-[#1A5796] text-center font-poppins text-5xl font-bold p-5 text-[30px] lg:text-[33px]">
          Visi
        </h1>
      </div>
      <p class="text-[#1A5796] text-[16px] lg:text-[18px] text-center font-poppins font-normal mt-4 mb-10 lg:mt-8 lg:px-40">
        Menjadikan Dewan Perwakilan Mahasiswa Politeknik Statistika STIS sebagai organisasi / majelis permusyawaratan
        mahasiswa yang kredibel dalam mengemban tanggung jawab secara inspiratif, kontributif, komunikatif dan juga
        selaras dengan Spiritualitas.
      </p>
      <div>
        <h1
          class="visi-misi bg-center bg-no-repeat bg-contain text-[#1A5796] text-center font-poppins text-5xl font-bold p-5 text-[30px] lg:text-[33px]">
          Misi
        </h1>
      </div>
      <div class="text-[#1A5796] text-[16px] lg:text-[18px] font-normal mt-4 lg:mt-8 lg:px-10 mb-10">
        <div class="flex items-start mb-1">
          <div
            class="circle-number bg-no-repeat bg-contain h-[27.3px] w-[48px] lg:h-[40px] lg:w-[40px] flex-shrink-0 text-center">
            1</div>
          <p class="text-[#1A5796] text-[16px] lg:text-[18px] text-left font-poppins font-normal ml-2">
            Menyelenggarakan tugas legislasi secara efektif dan efisien.
          </p>
        </div>
        <div class="flex items-start mb-1 sm:mt-2 lg:mt-0">
          <div
            class="circle-number bg-no-repeat bg-contain h-[27.3px] w-[48px] lg:h-[40px] lg:w-[40px] flex-shrink-0 text-center">
            2</div>
          <p class="text-[#1A5796] text-[16px] lg:text-[18px] text-left font-poppins font-normal ml-2">
            Menjalin hubungan yang bersinergi dengan pihak internal maupun eksternal di
            lingkungan Politeknik Statistika STIS.
          </p>
        </div>
        <div class="flex items-start mb-1 sm:mt-2 lg:mt-1">
          <div
            class="circle-number bg-no-repeat bg-contain h-[27.3px] w-[48px] lg:h-[40px] lg:w-[40px] flex-shrink-0 text-center">
            3</div>
          <p class="text-[#1A5796] text-[16px] lg:text-[18px] text-left font-poppins font-normal ml-2">
            Memberikan kualitas pelayanan terbaik dalam menampung dan menyalurkan aspirasi
            mahasiswa Politeknik Statistika STIS kepada pihak yang bersangkutan sesuai kebutuhan.
          </p>
        </div>
        <div class="flex items-start mb-1 sm:mt-2 lg:mt-3">
          <div
            class="circle-number bg-no-repeat bg-contain h-[27.3px] w-[48px] lg:h-[40px] lg:w-[40px] flex-shrink-0 text-center">
            4</div>
          <p class="text-[#1A5796] text-[16px] lg:text-[18px] text-left font-poppins font-normal ml-2">
            Melaksanakan fungsi pengawasan dan koordinasi serta melakukan kolaborasi yang
            bersifat berkelanjutan dengan Badan Eksekutif Mahasiswa Politeknik Statistika STIS.
          </p>
        </div>
        <div class="flex items-start sm:mt-2 lg:mt-3">
          <div
            class="circle-number bg-no-repeat bg-contain h-[27.3px] w-[48px] lg:h-[40px] lg:w-[40px] flex-shrink-0 text-center">
            5</div>
          <p class="text-[#1A5796] text-[16px] lg:text-[18px] text-left font-poppins font-normal ml-2">
            Mewujudkan keanggotaan Dewan Perwakilan Mahasiswa yang dinamis dan harmonis dengan
            berlandaskan asas kekeluargaan.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VisionMission',
};
</script>

<style scoped>
.visi-misi {
  background-image: url('@assets/icon/visi_misi.svg');
}

.circle-number {
  background-image: url('@assets/icon/numberbg.svg');
}
</style>
