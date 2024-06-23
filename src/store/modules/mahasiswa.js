const state = {
  mahasiswa: {
    namaLengkap: "Himacad Rijifen",
    kelas: "3SI1",
    nim: "222112999",
    email: "kelompok1@gmail.com",
    noHp: "082143658709",
    foto: "dummy.webp"
  },
};

const getters = {
  mahasiswa: (state) => state.mahasiswa,
};

const mutations = {
  setMahasiswa(state, payload) {
    state.mahasiswa = payload;
  },
};

const actions = {
  updateMahasiswa({ commit }, mahasiswa) {
    commit("setMahasiswa", mahasiswa);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
