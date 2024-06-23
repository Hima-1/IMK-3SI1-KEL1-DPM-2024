const state = {
  anggotas: [
    { id: "1", nama: "Saifullah Fatah", nim: "212011313", foto: "ketua.webp", jabatan: "KETUA DPM", divisi: "BPH"},
    { id: "2", nama: "Faqih Indra Lesmana", nim: "222112039", foto: "waketu.webp", jabatan: "WAKIL KETUA DPM", divisi: "BPH"},
    { id: "3", nama: "Adinda Batrisyibazla", nim: "212212444", foto: "bend1.webp", jabatan: "BENDAHARA I", divisi: "BPH"},
    { id: "4", nama: "Aurelia Dini Syafnadiva", nim: "212313007", foto: "bend2.webp", jabatan: "BENDAHARA II", divisi: "BPH"},
    { id: "5", nama: "Masna Novita Rahmaniar", nim: "222011296", foto: "sekre1.webp", jabatan: "SEKRETARIS I", divisi: "BPH"},
    { id: "6", nama: "Yohana Herdianly Br Nainggolan", nim: "112313432", foto: "sekre2.webp", jabatan: "SEKRETARIS II", divisi: "BPH"},
    { id: "7", nama: "Bagas Ashari", nim: "112313432", foto: "dummy.webp", jabatan: "KETUA KOMISI I", divisi: "Komisi I"},
    { id: "8", nama: "R. Faras Roihan", nim: "112313432", foto: "dummy.webp", jabatan: "KETUA KOMISI II", divisi: "Komisi II"},
    { id: "9", nama: "Muhammad 'Anil 'Aziz", nim: "112313432", foto: "dummy.webp", jabatan: "KETUA KOMISI III", divisi: "Komisi III"},
    { id: "10", nama: "Surya Maruli", nim: "112313432", foto: "dummy.webp", jabatan: "KETUA KOMISI IV", divisi: "Komisi IV"},
    { id: "11", nama: "Erika Azizah Khoirunnisa", nim: "112313432", foto: "dummy.webp", jabatan: "KOORDINATOR PUBMEDKRAF", divisi: "Pubmedkraf"},
    { id: "12", nama: "Septian Tegar Y", nim: "112313432", foto: "dummy.webp", jabatan: "KOORDINATOR IT", divisi: "IT"},
  ]
};

const getters = {
  anggotas: (state) => state.anggotas,
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
