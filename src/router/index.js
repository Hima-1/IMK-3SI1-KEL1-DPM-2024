import { createRouter, createWebHistory } from 'vue-router';
import LandingLayout from '../layouts/LandingLayout.vue';
import DashboardLayout from '../layouts/DashboardLayout.vue';
import Home from '../views/Home.vue';
import Berita from '../views/Berita.vue';
import Galeri from '../views/Galeri.vue';
import Struktur from '../views/Struktur.vue';
import LoginPage from '../views/Login.vue';
import Aspirasi from '../views/Aspirasi.vue';
import ArsipDokumen from '../views/ArsipDokumen.vue';
import AnggaranImpolstat from '../views/AnggaranImpolstat.vue';
import MyProfile from '../views/MyProfile.vue';
import EditProfile from '../views/EditProfile.vue';

const routes = [
    {
        path: '/',
        component: LandingLayout,
        children: [
            { path: '', name: 'Home', component: Home },
            { path: 'berita', name: 'Berita', component: Berita },
            { path: 'galeri', name: 'Galeri', component: Galeri },
            { path: 'struktur', name: 'Struktur', component: Struktur },
        ],
    },
    { path: '/login', name: 'Login', component: LoginPage },
    {
        path: '/dashboard',
        component: DashboardLayout,
        children: [
            { path: '', name: 'Aspirasi', component: Aspirasi },
            { path: 'arsip-dokumen', name: 'ArsipDokumen', component: ArsipDokumen },
            { path: 'anggaran-impolstat', name: 'AnggaranImpolstat', component: AnggaranImpolstat },
            { path: 'my-profile', name: 'MyProfile', component: MyProfile },
            { path: 'edit-profile', name: 'EditProfile', component: EditProfile },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;