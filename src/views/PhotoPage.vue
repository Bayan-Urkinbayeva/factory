<template>
    <div class="w-full bg-white flex flex-col items-center">
      <SecondHeader></SecondHeader>
      <PhotoDetails :id="photoId"></PhotoDetails>
    </div>
  </template>
  
  <script>
  import SecondHeader from '../components/SecondHeader.vue';
  import PhotoDetails from '@/components/PhotoDetails.vue';
  export default {
    name: 'PhotoPage',
    components: {
      SecondHeader,
      PhotoDetails
    },
    computed: {
    photoId() {
      return this.$route.params.id;
    }
  }
  };
  </script>
  