<template>
  <div class="bg-[#EBF3F5] min-h-screen flex items-center justify-center">
    <div class="wrapper flex flex-col items-center justify-center" style="width: 1127px; height: auto;">
      <div>
        <h1 class="visi-misi bg-center bg-no-repeat bg-contain text-[#1A5796] text-center font-poppins text-5xl font-bold p-5 text-[50px]">
          Visi
        </h1>
      </div>
      <p class="text-[#1A5796] text-center font-poppins text-lg font-normal mt-14 text-[23px]" style="width: 1114px; height: 99px;">
        Menjadikan Dewan Perwakilan Mahasiswa Politeknik Statistika STIS sebagai organisasi / majelis permusyawaratan mahasiswa yang kredibel dalam mengemban tanggung jawab secara inspiratif, kontributif, komunikatif dan juga selaras dengan Spiritualitas.
      </p>
      <div>
        <h1 class="visi-misi bg-center bg-no-repeat bg-contain text-[#1A5796] text-center font-poppins text-5xl font-bold mt-16 p-5 text-[50px]">
          Misi
        </h1>
      </div>
      <div class="text-[#1A5796] text-left font-poppins text-lg font-normal mt-14" style="width: 1114px; height: auto;">
        <div class="flex items-start mb-4">
          <div class="circle-number">1</div>
          <p class="ml-4 text-[23px]">Menyelenggarakan tugas legislasi secara efektif dan efisien.</p>
        </div>
        <div class="flex items-start mb-4">
          <div class="circle-number">2</div>
          <p class="ml-4 text-[23px]">Menjalin hubungan yang bersinergi dengan pihak internal maupun eksternal di lingkungan Politeknik Statistika STIS.</p>
        </div>
        <div class="flex items-start mb-4">
          <div class="circle-number">3</div>
          <p class="ml-4 text-[23px]">Memberikan kualitas pelayanan terbaik dalam menampung dan menyalurkan aspirasi mahasiswa Politeknik Statistika STIS kepada pihak yang bersangkutan sesuai kebutuhan.</p>
        </div>
        <div class="flex items-start mb-4">
          <div class="circle-number">4</div>
          <p class="ml-4 text-[23px]">Melaksanakan fungsi pengawasan dan koordinasi serta melakukan kolaborasi yang bersifat berkelanjutan dengan Badan Eksekutif Mahasiswa Politeknik Statistika STIS.</p>
        </div>
        <div class="flex items-start mb-4">
          <div class="circle-number">5</div>
          <p class="ml-4 text-[23px]">Mewujudkan keanggotaan Dewan Perwakilan Mahasiswa yang dinamis dan harmonis dengan berlandaskan asas kekeluargaan.</p>
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
  background-image: url('../../assets/icon/visi_misi.svg');
}

.circle-number {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F8C147;
  border-radius: 50%;
  flex-shrink: 0;
  font-weight: bold;
  color: #1A5796;
}
</style>
