import { createStore } from 'vuex';
import arsip from './modules/arsip';
import anggaran from './modules/anggaran';
import mahasiswa from './modules/mahasiswa';

const store = createStore({
    modules: {
        arsip,
        anggaran,
        mahasiswa
    },
});

export default store;