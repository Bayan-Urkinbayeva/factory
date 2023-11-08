<template>
    <div class="w-full bg-white flex flex-col items-center">
      <AppHeader></AppHeader>
      <SearchBlock @search-images="updateSearchedImages"></SearchBlock>
      <ImgGalery :images="displayImages"></ImgGalery>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import SearchBlock from '../components/SearchBlock.vue';
  import AppHeader from '../components/AppHeader.vue';
  import ImgGalery from '@/components/ImgGalery.vue';
  
  export default {
    name: 'HomePage',
    components: {
      AppHeader,
      SearchBlock,
      ImgGalery,
    },
    data() {
      return {
        images: [],          // Random images for the home page
        searchedImages: [],  // Images from a search
      };
    },
    created() {
      this.fetchRandomImages();
    },
    methods: {
      async fetchRandomImages() {
        try {
          const response = await axios.get('https://api.unsplash.com/photos/random', {
            params: {
              count: 8, // Get 8 random images for the home page
              client_id: 'n4gUMGwf3KeoxYMmQCMlbhzCKiBk5kQGSKw9HH3DDKs', // Replace with your API key
            },
          });
          this.images = response.data;
        } catch (error) {
          console.error('Error fetching random images:', error);
        }
      },
      updateSearchedImages(searchResults) {
        this.searchedImages = searchResults; // Update with search results
      },
    },
    computed: {
      displayImages() {
        // Determine which set of images to display based on search
        return this.searchedImages.length ? this.searchedImages : this.images;
      },
    },
  };
  </script>
  