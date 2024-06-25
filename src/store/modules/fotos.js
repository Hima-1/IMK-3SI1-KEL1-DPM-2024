const state = {
    fotos: [
      { id: "1", desk: "LDKM", tgl: "10 Mei 2024", gambar: "ldkm.webp", divisi: "LDKM"},
      { id: "2", desk: "Sidang I", tgl: "11 Mei 2024", gambar: "su1.webp", divisi: "Sidang Umum I"},
      { id: "3", desk: "Sidang II", tgl: "12 Mei 2024", gambar: "su2.webp", divisi: "Sidang Umum II"},
      { id: "4", desk: "Sidang III", tgl: "13 Mei 2024", gambar: "su3.webp", divisi: "Sidang Umum III"},
      { id: "5", desk: "Sidang IV", tgl: "14 Mei 2024", gambar: "su4.webp", divisi: "Sidang Umum IV"},
      { id: "6", desk: "Kuliah Umum", tgl: "15 Mei 2024", gambar: "lain1.webp", divisi: "Lainnya"},
    ]
  };
  
  const getters = {
    fotos: (state) => state.fotos,
  };
  
  const mutations = {
  };
  
  const actions = {
  };
  
  export default {
    namespaced: true,
    state,
    getters,
  };  