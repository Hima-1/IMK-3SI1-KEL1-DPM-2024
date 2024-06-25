const state = {
    rows: [
        {
            id: 1,
            no: 1,
            namaFolder: 'Laporan Keuangan 2021',
            waktu: '2021-01-15 10:30 WIB',
            tipe: 'PDF Document',
            size: '1.2 MB',
            isiFolder: [
                { namaFile: 'Q1.pdf', size: '300 KB', tipe: 'PDF Document' },
                { namaFile: 'Q2.pdf', size: '300 KB', tipe: 'PDF Document' },
                { namaFile: 'Q3.pdf', size: '300 KB', tipe: 'PDF Document' },
                { namaFile: 'Q4.pdf', size: '300 KB', tipe: 'PDF Document' },
            ]
        },
        {
            id: 2,
            no: 2,
            namaFolder: 'Laporan Keuangan 2020',
            waktu: '2020-01-15 10:30 WIB',
            tipe: 'PDF Document',
            size: '1.1 MB',
            isiFolder: [
                { namaFile: 'Q1.pdf', size: '280 KB', tipe: 'PDF Document' },
                { namaFile: 'Q2.pdf', size: '280 KB', tipe: 'PDF Document' },
                { namaFile: 'Q3.pdf', size: '270 KB', tipe: 'PDF Document' },
                { namaFile: 'Q4.pdf', size: '270 KB', tipe: 'PDF Document' },
            ]
        },
        {
            id: 3,
            no: 3,
            namaFolder: 'Anggaran Proyek A',
            waktu: '2021-02-20 14:00 WIB',
            tipe: 'Excel Spreadsheet',
            size: '500 KB',
            isiFolder: [
                { namaFile: 'Rencana.xlsx', size: '200 KB', tipe: 'Excel Spreadsheet' },
                { namaFile: 'Realisasi.xlsx', size: '300 KB', tipe: 'Excel Spreadsheet' },
            ]
        },
        {
            id: 4,
            no: 4,
            namaFolder: 'Anggaran Proyek B',
            waktu: '2021-03-18 09:45 WIB',
            tipe: 'Excel Spreadsheet',
            size: '450 KB',
            isiFolder: [
                { namaFile: 'Rencana.xlsx', size: '200 KB', tipe: 'Excel Spreadsheet' },
                { namaFile: 'Realisasi.xlsx', size: '250 KB', tipe: 'Excel Spreadsheet' },
            ]
        },
        {
            id: 5,
            no: 5,
            namaFolder: 'Laporan Keuangan 2019',
            waktu: '2019-01-15 10:30 WIB',
            tipe: 'PDF Document',
            size: '1.0 MB',
            isiFolder: [
                { namaFile: 'Q1.pdf', size: '250 KB', tipe: 'PDF Document' },
                { namaFile: 'Q2.pdf', size: '250 KB', tipe: 'PDF Document' },
                { namaFile: 'Q3.pdf', size: '250 KB', tipe: 'PDF Document' },
                { namaFile: 'Q4.pdf', size: '250 KB', tipe: 'PDF Document' },
            ]
        },
    ],
    currentPage: 1,
    itemsPerPage: 5,
    searchQuery: '',
};


const getters = {
    filteredRows: (state) => {
        if (state.searchQuery) {
            return state.rows.filter(row => row.namaFolder.toLowerCase().includes(state.searchQuery.toLowerCase()));
        }
        return state.rows;
    },
    paginatedRows: (state, getters) => {
        const start = (state.currentPage - 1) * state.itemsPerPage;
        const end = state.currentPage * state.itemsPerPage;
        return getters.filteredRows.slice(start, end);
    },
    totalPages: (state, getters) => {
        return Math.ceil(getters.filteredRows.length / state.itemsPerPage);
    },
    folderContents: (state) => (folderId) => {
        const folder = state.rows.find(row => row.id === folderId);
        return folder ? folder.isiFolder : [];
    },
};


const mutations = {
    updateCurrentPage(state, newPage) {
        state.currentPage = newPage;
    },
    searchRows(state, query) {
        state.searchQuery = query;
        state.currentPage = 1;
    },
    updateItemsPerPage(state, newNumber) {
        state.itemsPerPage = newNumber;
        state.currentPage = 1;
    },
};


const actions = {
    updateCurrentPage({ commit }, newPage) {
        commit('updateCurrentPage', newPage);
    },
    searchRows({ commit }, query) {
        commit('searchRows', query);
    },
    getFolderContents({ getters }, folderId) {
        return getters.folderContents(folderId);
    },
    updateItemsPerPage({ commit }, newNumber) {
        commit('updateItemsPerPage', newNumber);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
