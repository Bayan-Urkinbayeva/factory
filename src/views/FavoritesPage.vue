<template>
    <div class="w-full bg-white flex flex-col items-center">
      <SecondHeader></SecondHeader>
      <p class="text-4xl mt-14 font-medium">Избранное</p>
      <ImgGalery :images="favoriteImages"></ImgGalery>
    </div>
  </template>
  
  <script>
  import SecondHeader from '../components/SecondHeader.vue';
  import ImgGalery from '@/components/ImgGalery.vue';
  
  export default {
    name: 'FavoritesPage',
    components: {
      SecondHeader,
      ImgGalery,
    },
    data() {
    return {
      favoriteImages: [],
    };
  },
  created() {
    this.loadFavorites();
  },
  methods: {
    loadFavorites() {
      this.favoriteImages = JSON.parse(localStorage.getItem('favorites')) || [];
    },
  },
    
  };
  </script>
  