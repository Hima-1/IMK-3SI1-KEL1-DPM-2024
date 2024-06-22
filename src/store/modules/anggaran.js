const state = {
    rows: [
        { id: 1, no: 1, namaFolder: 'Laporan Keuangan 2021', waktu: '2021-01-15 10:30 WIB', tipe: 'PDF Document', size: '1.2 MB' },
        { id: 2, no: 2, namaFolder: 'Laporan Keuangan 2020', waktu: '2020-01-15 10:30 WIB', tipe: 'PDF Document', size: '1.1 MB' },
        { id: 3, no: 3, namaFolder: 'Anggaran Proyek A', waktu: '2021-02-20 14:00 WIB', tipe: 'Excel Spreadsheet', size: '500 KB' },
        { id: 4, no: 4, namaFolder: 'Anggaran Proyek B', waktu: '2021-03-18 09:45 WIB', tipe: 'Excel Spreadsheet', size: '450 KB' },
        { id: 5, no: 5, namaFolder: 'Laporan Bulanan Januari', waktu: '2021-01-31 17:20 WIB', tipe: 'Word Document', size: '750 KB' },
        { id: 6, no: 6, namaFolder: 'Laporan Bulanan Februari', waktu: '2021-02-28 17:20 WIB', tipe: 'Word Document', size: '800 KB' },
        { id: 7, no: 7, namaFolder: 'Laporan Bulanan Maret', waktu: '2021-03-31 17:20 WIB', tipe: 'Word Document', size: '820 KB' },
        { id: 8, no: 8, namaFolder: 'Laporan Bulanan April', waktu: '2021-04-30 17:20 WIB', tipe: 'Word Document', size: '830 KB' },
        { id: 9, no: 9, namaFolder: 'Laporan Tahunan 2019', waktu: '2019-12-31 17:00 WIB', tipe: 'PDF Document', size: '1.5 MB' },
        { id: 10, no: 10, namaFolder: 'Laporan Tahunan 2018', waktu: '2018-12-31 17:00 WIB', tipe: 'PDF Document', size: '1.4 MB' },
        { id: 11, no: 11, namaFolder: 'Anggaran Pemasaran Q1', waktu: '2021-01-10 08:00 WIB', tipe: 'Excel Spreadsheet', size: '600 KB' },
        { id: 12, no: 12, namaFolder: 'Anggaran Pemasaran Q2', waktu: '2021-04-10 08:00 WIB', tipe: 'Excel Spreadsheet', size: '610 KB' },
        { id: 13, no: 13, namaFolder: 'Laporan Keuangan Q1 2022', waktu: '2022-04-10 11:00 WIB', tipe: 'PDF Document', size: '1.3 MB' },
        { id: 14, no: 14, namaFolder: 'Laporan Keuangan Q2 2022', waktu: '2022-07-10 11:00 WIB', tipe: 'PDF Document', size: '1.4 MB' },
        { id: 15, no: 15, namaFolder: 'Laporan Keuangan Q3 2022', waktu: '2022-10-10 11:00 WIB', tipe: 'PDF Document', size: '1.5 MB' },
        { id: 16, no: 16, namaFolder: 'Laporan Keuangan Q4 2022', waktu: '2022-01-10 11:00 WIB', tipe: 'PDF Document', size: '1.6 MB' },
        { id: 17, no: 17, namaFolder: 'Program Kerja 2023', waktu: '2022-12-01 13:45 WIB', tipe: 'Word Document', size: '230 KB' },
        { id: 18, no: 18, namaFolder: 'Evaluasi Kinerja 2022', waktu: '2022-12-20 10:30 WIB', tipe: 'PDF Document', size: '1.5 MB' },
        { id: 19, no: 19, namaFolder: 'Rapat Anggaran 2023', waktu: '2022-12-25 09:15 WIB', tipe: 'Excel Spreadsheet', size: '120 KB' },
        { id: 20, no: 20, namaFolder: 'Daftar Hadir Rapat 2022', waktu: '2022-12-30 15:00 WIB', tipe: 'Word Document', size: '80 KB' },
        { id: 21, no: 21, namaFolder: 'Laporan Keuangan Q1 2023', waktu: '2023-04-10 11:00 WIB', tipe: 'PDF Document', size: '1.3 MB' },
        { id: 22, no: 22, namaFolder: 'Laporan Keuangan Q2 2023', waktu: '2023-07-10 11:00 WIB', tipe: 'PDF Document', size: '1.4 MB' },
        { id: 23, no: 23, namaFolder: 'Laporan Keuangan Q3 2023', waktu: '2023-10-10 11:00 WIB', tipe: 'PDF Document', size: '1.5 MB' },
        { id: 24, no: 24, namaFolder: 'Laporan Keuangan Q4 2023', waktu: '2023-01-10 11:00 WIB', tipe: 'PDF Document', size: '1.6 MB' },
        { id: 25, no: 25, namaFolder: 'Program Kerja 2024', waktu: '2023-12-01 13:45 WIB', tipe: 'Word Document', size: '230 KB' },
        { id: 26, no: 26, namaFolder: 'Evaluasi Kinerja 2023', waktu: '2023-12-20 10:30 WIB', tipe: 'PDF Document', size: '1.5 MB' },
        { id: 27, no: 27, namaFolder: 'Rapat Anggaran 2024', waktu: '2023-12-25 09:15 WIB', tipe: 'Excel Spreadsheet', size: '120 KB' },
        { id: 28, no: 28, namaFolder: 'Daftar Hadir Rapat 2023', waktu: '2023-12-30 15:00 WIB', tipe: 'Word Document', size: '80 KB' },
        { id: 29, no: 29, namaFolder: 'Laporan Keuangan Q1 2024', waktu: '2024-04-10 11:00 WIB', tipe: 'PDF Document', size: '1.3 MB' },
        { id: 30, no: 30, namaFolder: 'Laporan Keuangan Q2 2024', waktu: '2024-07-10 11:00 WIB', tipe: 'PDF Document', size: '1.4 MB' },
        { id: 31, no: 31, namaFolder: 'Laporan Keuangan Q3 2024', waktu: '2024-10-10 11:00 WIB', tipe: 'PDF Document', size: '1.5 MB' },
        { id: 32, no: 32, namaFolder: 'Laporan Keuangan Q4 2024', waktu: '2024-01-10 11:00 WIB', tipe: 'PDF Document', size: '1.6 MB' },
        { id: 33, no: 33, namaFolder: 'Program Kerja 2025', waktu: '2024-12-01 13:45 WIB', tipe: 'Word Document', size: '230 KB' },
        { id: 34, no: 34, namaFolder: 'Evaluasi Kinerja 2024', waktu: '2024-12-20 10:30 WIB', tipe: 'PDF Document', size: '1.5 MB' },
        { id: 35, no: 35, namaFolder: 'Rapat Anggaran 2025', waktu: '2024-12-25 09:15 WIB', tipe: 'Excel Spreadsheet', size: '120 KB' },
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
};

const mutations = {
    updateCurrentPage(state, newPage) {
        state.currentPage = newPage;
    },
    searchRows(state, query) {
        state.searchQuery = query;
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
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
