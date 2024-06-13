<template>
  <div class="w-[70rem] h-[60rem] flex-shrink-0 rounded-md bg-white shadow-md p-0">
    <div class="w-full h-[5.5625rem] flex-shrink-0 rounded-t-md bg-[rgba(38,125,194,0.18)] flex items-center px-4">
      <h2 class="text-[#1A5796] font-poppins text-3xl font-semibold leading-[2.81025rem]">Tentang Kegiatan</h2>
    </div>
    <div class="p-4">
      <div class="bg-white p-4 mb-6 flex">
        <img src="@/assets/icon/deskripsi-kegiatan.svg" alt="Deskripsi Kegiatan Icon" class="w-14 h-14 shrink-0 mr-10">
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
        <img src="@/assets/icon/tujuan-kegiatan.svg" alt="Tujuan Kegiatan Icon" class="w-14 h-14 shrink-0 mr-10">
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
        <img src="@/assets/icon/keterangan.svg" alt="Keterangan Icon" class="w-14 h-14 shrink-0 mr-10">
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
