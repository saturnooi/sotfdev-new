<template>
  <div class="bg-gray-100">
    <navber />
    <div class="m-10 mx-auto p-16 sm:p-24 lg:p-48 ">
    
    <!-- Carousel Body -->
    <div class="relative rounded-lg block md:flex items-center border-gray-200 border-2  shadow-xl" style="min-height: 19rem;">
      <div class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg" style="min-height: 19rem;">
        <img class="absolute inset-0 w-full h-full object-cover object-center" src="../assets/zen.jpg" alt="">
        <div class="absolute inset-0 w-full h-full bg-blue-600 opacity-75"></div>
        <div class="absolute text-5xl inset-0 w-full h-full flex items-center justify-center fill-current text-white">
          Nattapat
        </div>
      </div>
      <div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
        <div class="p-12 md:pr-24 md:pl-16 md:py-12">
          <p class="text-4xl m-4">Nattapat Arunkitjaroen </p>
          <p class="text-2xl m-4">Email : zentoa@hotmail.co.th </p>
          <p class="text-2xl m-4">Phone : 0898106117</p>
          <a class="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900" href="">
            <span class="text-xl mt-4">Edit</span>
          </a>
        </div>
        <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
    
    </div>
    
    
    
  </div>
  </div>
</template>

<script>
import navber from "../components/navber.vue";
export default {
  components: {
    navber,
  },
};
</script>