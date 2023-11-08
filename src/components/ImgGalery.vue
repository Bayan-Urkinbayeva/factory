<template>
    <div class="bg-white mt-20 mb-20 w-3/4 h-auto flex gap-x-6 gap-y-6 flex-wrap items-center justify-center">
      <router-link
        v-for="(image, index) in images"
        :key="index"
        :to="{ name: 'PhotoPage', params: { id: image.id } }"
      >
        <div class="w-80 h-80">
          <img :src="image.urls.regular" alt="Image" class="w-full h-full object-cover" />
        </div>
      </router-link>
    </div>
  </template>
  
<script>
export default {
    name: 'ImgGalery',
    props: {
    images: Array,
  },
}
</script>