<template>
     <div class="w-full h-[450px] flex justify-center items-center bg-no-repeat bg-cover relative">
        <div class="absolute w-full h-full bg-center bg-cover hidden md:block" :style="{ backgroundImage: `url('${imageDetails && imageDetails.urls ? imageDetails.urls.regular : ''})`, filter: 'grayscale(100%) blur(1px)' }"></div>
        <div class="w-3/4 m-auto relative z-10">
            <div class="w-full h-24 flex items-center justify-between">
                <div class="w-56 h-14 flex items-center justify-evenly">
                    <img :src="imageDetails && imageDetails.user ? imageDetails.user.profile_image.medium : 'Unknown'" class="w-14 h-14 rounded-lg">
                    <div>
                        <p class="text-lg md:text-white font-normal">{{ imageDetails && imageDetails.user ? imageDetails.user.name : 'Unknown'}}</p>
                        <p class="text-base text-gray-400 md:text-white font-normal">@{{ imageDetails && imageDetails.user ? imageDetails.user.username : 'Unknown'}}</p>
                    </div>
                </div>
                <div class="h-14 w-64 flex items-center justify-evenly">
                    <div :class="{'bg-red-500': isFavorited, 'bg-white': !isFavorited}" class="w-10 shadow-lg h-10 flex items-center justify-center rounded-lg" @click="toggleFavorite(imageDetails)">
                        <img src="../assets/favorites2.svg" class="w-6">
                    </div>
                    <div class="flex bg-[#FFF200] w-16 md:w-40 h-10 flex items-center justify-evenly bg-[#FFF200] rounded-lg">
                        <img src="../assets/download.svg" class="w-6">
                        <p class="text-lg hidden md:block">Download</p>
                    </div>
                </div>
            </div>
            <img :src="imageDetails && imageDetails.urls ? imageDetails.urls.regular : 'Unknown'" class="object-cover w-full h-[450px] rounded-lg">

        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'PhotoDetails',
    props: ['id'],
    data() {
    return {
        imageDetails: null,
        isFavorited: false,
    };
  },
  created() {
    this.fetchImageDetails();
    this.checkIfFavorite();
  },

  methods: {
    async fetchImageDetails() {
      try {
        const response = await axios.get(`https://api.unsplash.com/photos/${this.id}`, {
          params: {
            client_id: 'n4gUMGwf3KeoxYMmQCMlbhzCKiBk5kQGSKw9HH3DDKs',
          },
        });
        this.imageDetails = response.data;
        console.log('Fetched image details:', this.imageDetails);
      } catch (error) {
        console.error('Error fetching image details:', error);
      }
    },
//     addToFavorites(image) {
//     let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     favorites.push(image);
//     localStorage.setItem('favorites', JSON.stringify(favorites));
//   },
toggleFavorite(image) {
    if (!image) return; // Guard against null

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.findIndex(fav => fav.id === image.id);

    if (index >= 0) {
      favorites.splice(index, 1);
    } else {
      favorites.push(image);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    this.isFavorited = index < 0;
  },
  
  checkIfFavorite() {
    if (!this.imageDetails) return; // Guard against null

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    this.isFavorited = favorites.some(fav => fav.id === this.imageDetails.id);
  },
},
watch: {
  imageDetails(newVal) {
    // Check if imageDetails is not null and has an id property before calling checkIfFavorite
    if (newVal && newVal.id !== undefined) {
      this.checkIfFavorite();
    }
  }
}
}
</script>