<template>
    <div class="relative w-full h-48 bg-black">
      <img src="../assets/background.png" class="opacity-50 w-full h-48" />
      <div class="absolute top-0 left-0 w-full h-48 z-10 flex items-center justify-center">
        <input
          class="bg-white w-1/2 h-11 pl-4 outline-none"
          placeholder="Поиск"
          v-model="searchTerm"
          @input="searchImages"
        />
        <div class="absolute top-[90px] right-[29%]">
          <img src="../assets/search.svg" alt="Search Icon" class="w-4 h-4" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'SearchBlock',
    data() {
      return {
        searchTerm: '', // Initialize searchTerm as an empty string
      };
    },
    methods: {
      async searchImages() {
        try {
          const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
              query: this.searchTerm,
              per_page: 20, // Show 20 images per page when searching
              client_id: 'n4gUMGwf3KeoxYMmQCMlbhzCKiBk5kQGSKw9HH3DDKs', // Replace with your API key
            },
          });
          this.$emit('search-images', response.data.results);
        } catch (error) {
          console.error('Error searching for images:', error);
        }
      },
    },
  };
  </script>
  