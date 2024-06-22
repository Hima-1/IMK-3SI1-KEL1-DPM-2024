import { createRouter, createWebHistory } from "vue-router";
import LandingLayout from "@/layouts/LandingLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import Home from "@/views/Home.vue";
import Berita from "@/views/Berita.vue";
import Selengkapnya from "@/views/Selengkapnya.vue";
import Galeri from "@/views/Galeri.vue";
import Struktur from "@/views/Struktur.vue";
import LoginPage from "@/views/Login.vue";
import Aspirasi from "@/views/Aspirasi.vue";
import ArsipDokumen from "@/views/Arsip.vue";
import AnggaranImpolstat from "@/views/Anggaran.vue";
import DetailAnggaran from "@/views/DetailAnggaran.vue";
import MyProfile from "@/views/MyProfile.vue";
import EditProfile from "@/views/EditProfile.vue";

const routes = [
  {
    path: "/",
    component: LandingLayout,
    children: [
      { path: "", name: "Home", component: Home },
      {
        path: "berita",
        children: [
          { path: "", name: "Berita", component: Berita },
          { path: "selengkapnya", name: "Selengkapnya", component: Selengkapnya },
        ],
      },
      { path: "galeri", name: "Galeri", component: Galeri },
      { path: "struktur", name: "Struktur", component: Struktur },
    ],
  },
  { path: "/login", name: "Login", component: LoginPage },
  {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
      { path: "", name: "Aspirasi", component: Aspirasi },
      { path: "arsip-dokumen", name: "ArsipDokumen", component: ArsipDokumen },
      {
        path: "anggaran-impolstat",
        name: "AnggaranImpolstat",
        component: AnggaranImpolstat,
      },
      {
        path: "anggaran-impolstat/:id",
        name: "DetailAnggaran",
        component: DetailAnggaran,
        props: true,
      },
      { path: "my-profile", name: "MyProfile", component: MyProfile },
      { path: "edit-profile", name: "EditProfile", component: EditProfile },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
