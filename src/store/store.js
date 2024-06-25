import { createStore } from 'vuex';
import arsip from './modules/arsip';
import anggaran from './modules/anggaran';
import mahasiswa from './modules/mahasiswa';
import anggotas from './modules/anggotas';
import fotos from './modules/fotos';

const store = createStore({
    modules: {
        arsip,
        anggaran,
        mahasiswa,
        anggotas,
        fotos
    },
});

export default store;