const state = {
    rows: [
        { id: 1, no: 1, namaFolder: 'Workshop Data Science', waktu: '2023-01-15 10:30 WIB', tipe: 'Universitas ABC', size: 'Rp. 2,000,000' },
        { id: 2, no: 2, namaFolder: 'Seminar AI', waktu: '2023-02-20 14:00 WIB', tipe: 'Teknologi XYZ', size: 'Rp. 1,500,000' },
        { id: 3, no: 3, namaFolder: 'Pelatihan Cloud Computing', waktu: '2023-03-18 09:45 WIB', tipe: 'Komunitas IT', size: 'Rp. 3,000,000' },
        { id: 4, no: 4, namaFolder: 'Webinar Keamanan Siber', waktu: '2023-04-30 17:20 WIB', tipe: 'Universitas DEF', size: 'Rp. 1,200,000' },
        { id: 5, no: 5, namaFolder: 'Hackathon', waktu: '2023-05-10 08:00 WIB', tipe: 'Startup GHI', size: 'Rp. 5,000,000' },
        { id: 6, no: 6, namaFolder: 'Lokakarya Pengembangan Web', waktu: '2023-06-25 13:45 WIB', tipe: 'Organisasi JKL', size: 'Rp. 2,500,000' },
        { id: 7, no: 7, namaFolder: 'Pelatihan Machine Learning', waktu: '2023-07-10 11:00 WIB', tipe: 'Universitas MNO', size: 'Rp. 3,500,000' },
        { id: 8, no: 8, namaFolder: 'Seminar Bisnis Digital', waktu: '2023-08-15 09:15 WIB', tipe: 'Komunitas PQR', size: 'Rp. 1,800,000' },
        { id: 9, no: 9, namaFolder: 'Workshop Big Data', waktu: '2023-09-20 15:00 WIB', tipe: 'Universitas STU', size: 'Rp. 2,200,000' },
        { id: 10, no: 10, namaFolder: 'Pelatihan Analisis Data', waktu: '2023-10-10 11:00 WIB', tipe: 'Organisasi VWX', size: 'Rp. 2,800,000' },
        { id: 11, no: 11, namaFolder: 'Webinar Teknologi IoT', waktu: '2023-11-01 13:00 WIB', tipe: 'Startup YZ', size: 'Rp. 1,600,000' },
        { id: 12, no: 12, namaFolder: 'Seminar Pengembangan Aplikasi', waktu: '2023-12-05 14:30 WIB', tipe: 'Universitas ABC', size: 'Rp. 1,700,000' },
        { id: 13, no: 13, namaFolder: 'Lokakarya UI/UX', waktu: '2024-01-15 10:30 WIB', tipe: 'Komunitas DEF', size: 'Rp. 2,400,000' },
        { id: 14, no: 14, namaFolder: 'Pelatihan Deep Learning', waktu: '2024-02-20 14:00 WIB', tipe: 'Universitas GHI', size: 'Rp. 3,200,000' },
        { id: 15, no: 15, namaFolder: 'Webinar E-Commerce', waktu: '2024-03-18 09:45 WIB', tipe: 'Organisasi JKL', size: 'Rp. 1,900,000' },
        { id: 16, no: 16, namaFolder: 'Seminar Inovasi Teknologi', waktu: '2024-04-30 17:20 WIB', tipe: 'Startup MNO', size: 'Rp. 2,700,000' },
        { id: 17, no: 17, namaFolder: 'Workshop Pengembangan Game', waktu: '2024-05-10 08:00 WIB', tipe: 'Komunitas PQR', size: 'Rp. 3,000,000' },
        { id: 18, no: 18, namaFolder: 'Pelatihan Manajemen Proyek', waktu: '2024-06-25 13:45 WIB', tipe: 'Universitas STU', size: 'Rp. 2,100,000' },
        { id: 19, no: 19, namaFolder: 'Seminar Desain Grafis', waktu: '2024-07-10 11:00 WIB', tipe: 'Organisasi VWX', size: 'Rp. 1,500,000' },
        { id: 20, no: 20, namaFolder: 'Webinar Teknologi Blockchain', waktu: '2024-08-15 09:15 WIB', tipe: 'Startup YZ', size: 'Rp. 2,600,000' },
        { id: 21, no: 21, namaFolder: 'Lokakarya Pemrograman Python', waktu: '2024-09-20 15:00 WIB', tipe: 'Komunitas ABC', size: 'Rp. 3,300,000' },
        { id: 22, no: 22, namaFolder: 'Pelatihan Data Analytics', waktu: '2024-10-10 11:00 WIB', tipe: 'Universitas DEF', size: 'Rp. 3,100,000' },
        { id: 23, no: 23, namaFolder: 'Seminar Teknologi 5G', waktu: '2024-11-01 13:00 WIB', tipe: 'Organisasi GHI', size: 'Rp. 1,800,000' },
        { id: 24, no: 24, namaFolder: 'Workshop Pengembangan Produk', waktu: '2024-12-05 14:30 WIB', tipe: 'Startup JKL', size: 'Rp. 2,900,000' },
        { id: 25, no: 25, namaFolder: 'Pelatihan Agile Methodology', waktu: '2025-01-15 10:30 WIB', tipe: 'Universitas MNO', size: 'Rp. 2,500,000' },
        { id: 26, no: 26, namaFolder: 'Webinar Cybersecurity', waktu: '2025-02-20 14:00 WIB', tipe: 'Komunitas PQR', size: 'Rp. 2,700,000' },
        { id: 27, no: 27, namaFolder: 'Lokakarya Mobile App Development', waktu: '2025-03-18 09:45 WIB', tipe: 'Universitas STU', size: 'Rp. 3,400,000' },
        { id: 28, no: 28, namaFolder: 'Seminar AI and ML', waktu: '2025-04-30 17:20 WIB', tipe: 'Organisasi VWX', size: 'Rp. 2,800,000' },
        { id: 29, no: 29, namaFolder: 'Workshop DevOps', waktu: '2025-05-10 08:00 WIB', tipe: 'Startup YZ', size: 'Rp. 3,600,000' },
        { id: 30, no: 30, namaFolder: 'Pelatihan Digital Marketing', waktu: '2025-06-25 13:45 WIB', tipe: 'Komunitas ABC', size: 'Rp. 2,100,000' },
        { id: 31, no: 31, namaFolder: 'Seminar Pengembangan Software', waktu: '2025-07-10 11:00 WIB', tipe: 'Universitas DEF', size: 'Rp. 1,600,000' },
        { id: 32, no: 32, namaFolder: 'Webinar Teknologi AR/VR', waktu: '2025-08-15 09:15 WIB', tipe: 'Organisasi GHI', size: 'Rp. 2,200,000' },
        { id: 33, no: 33, namaFolder: 'Lokakarya Pembelajaran Mesin', waktu: '2025-09-20 15:00 WIB', tipe: 'Startup JKL', size: 'Rp. 3,000,000' },
        { id: 34, no: 34, namaFolder: 'Pelatihan Data Visualization', waktu: '2025-10-10 11:00 WIB', tipe: 'Universitas MNO', size: 'Rp. 2,900,000' },
        { id: 35, no: 35, namaFolder: 'Seminar IoT', waktu: '2025-11-01 13:00 WIB', tipe: 'Komunitas PQR', size: 'Rp. 2,400,000' }
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
