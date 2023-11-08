<template>
    <div class="w-full bg-black h-24 flex justify-center items-center">
        <div class="flex justify-between w-10/12">
            <router-link to="/">
                <img src="../assets/artlogo.svg" class="w-[150px] h-[72px]" alt="Art Gallery Logo">
            </router-link>
            <div class="w-72 flex items-center justify-between">
                <router-link to="/">
                    <div class="w-32 h-10 flex">
                        <div class="w-8 h-10 flex items-center justify-center">
                            <img src="../assets/searchWhite.svg" class="w-4">
                        </div>
                        <input placeholder="Поиск" class="bg-black w-24 text-white outline-none placeholder-white">
                    </div>
                </router-link>
                <router-link to="/favorites" class="flex items-center">
                <img src="../assets/favorites.svg" class="w-5 mr-1" alt="Favorites">
                <p class="text-lg text-white font-normal">Избранное</p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SecondHeader',
    props:{
        
    }
}
</script>