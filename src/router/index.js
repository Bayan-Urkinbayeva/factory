import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/HomePage.vue';
import PhotoPage from '../views/PhotoPage.vue';
import FavoritesPage from '../views/FavoritesPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/photo/:id',  name: 'PhotoPage', component: PhotoPage, props: true },
  { path: '/favorites',  name: 'FavoritesPage', component: FavoritesPage, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
