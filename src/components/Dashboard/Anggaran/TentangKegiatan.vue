<template>
  <div class="tentang-kegiatan-container w-full max-w-[70rem] h-auto flex-shrink-0 rounded-md bg-white shadow-md p-0">
    <div class="header w-full h-[5.5625rem] flex-shrink-0 rounded-t-md bg-[rgba(38,125,194,0.18)] flex items-center px-4">
      <h2 class="text-[#1A5796] font-poppins text-3xl font-semibold leading-[2.81025rem]">Tentang Kegiatan</h2>
    </div>
    <div class="content p-4">
      <div class="bg-white p-4 mb-6 flex">
        <img src="@/assets/icon/deskripsi-kegiatan.svg" alt="Deskripsi Kegiatan Icon" class="icon w-14 h-14 shrink-0 mr-10">
        <div>
          <h3 class="text-[#5A5C6B] font-poppins text-[1.5625rem] font-semibold leading-[2.34188rem]">Deskripsi Kegiatan</h3>
          <p class="text-[#6A6C7A] font-poppins text-[1.4375rem] font-normal leading-[2.1545rem]">
            Unit Kesenian (Ukes) akan menggelar Welcome Party Ukes 2021 dengan tema
            <i>"Finding Yourself In The Exploration of A New World"</i>.
            Melalui jalan cerita yang diperankan oleh Teater Antik, penampilan musik dari Xbar dan Excelsior, serta gerakan tari gemulai dari Paradise, tema yang dibawakan berhasil dihidupkan.
            Acara Welcome Party Ukes 2024 diharapkan dapat menjadi wadah bagi mahasiswa untuk menikmati kebebasan berekspresi di bidang seni serta sebagai ajang hiburan bagi seluruh mahasiswa dalam menjalani kegiatan perkuliahan di Politeknik Statistika STIS.
          </p>
        </div>
      </div>

      <div class="bg-white p-4 mb-6 flex">
        <img src="@/assets/icon/tujuan-kegiatan.svg" alt="Tujuan Kegiatan Icon" class="icon w-14 h-14 shrink-0 mr-10">
        <div>
          <h3 class="text-[#5A5C6B] font-poppins text-[1.5625rem] font-semibold leading-[2.34188rem]">Tujuan Kegiatan</h3>
          <ul class="list-disc list-inside text-[#6A6C7A] font-poppins text-[1.4375rem] font-normal leading-[2.1545rem]">
            <li>Pengenalan kegiatan dan pelantikan anggota baru UKM Kesenian</li>
            <li>Peningkatan rasa kekeluargaan antaranggota UKM Kesenian</li>
            <li>Pengembangan minat dan bakat yang dimiliki mahasiswa STIS dalam bidang kesenian</li>
          </ul>
        </div>
      </div>

      <div class="bg-white p-4 flex">
        <img src="@/assets/icon/keterangan.svg" alt="Keterangan Icon" class="icon w-14 h-14 shrink-0 mr-10">
        <div>
          <h3 class="text-[#5A5C6B] font-poppins text-[1.5625rem] font-semibold leading-[2.34188rem]">Keterangan</h3>
          <ul class="list-disc list-inside text-[#6A6C7A] font-poppins text-[1.4375rem] font-normal leading-[2.1545rem]">
            <li><strong>Urgensi:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo augue ac est accumsan laoreet.</li>
            <li><strong>Kondisi:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo augue ac est accumsan laoreet.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TentangKegiatan'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

.header {
  background: rgba(38, 125, 194, 0.18);
}

.tentang-kegiatan-container {
  width: 100%;
  max-width: 70rem;
  height: auto;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0;
  overflow: hidden;
}

.text-title {
  color: #1A5796;
  font-family: Poppins, sans-serif;
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 2.81025rem;
}

.icon {
  width: 3.5rem;
  height: 3.5rem;
}

@media (max-width: 1024px) {
  .tentang-kegiatan-container {
    width: 100%;
    height: auto;
  }

  .header {
    height: 3.5rem;
  }

  h2 {
    font-size: 1.125rem;
  }

  .icon {
    width: 1.75rem;
    height: 2rem;
  }

  h3 {
    font-size: 1.125rem;
  }

  p, ul {
    font-size: 0.9375rem;
  }
}
</style>
