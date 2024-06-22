import { createStore } from 'vuex';
import arsip from './modules/arsip';
import anggaran from './modules/anggaran';

const store = createStore({
    modules: {
        arsip,
        anggaran,
    },
});

export default store;