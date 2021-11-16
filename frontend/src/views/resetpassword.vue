<template>
  <div class="bg-gray-100">
    <navber />
    <div class="w-2/3  m-auto bg-indigo-100 rounded p-5 ">
    
      <!-- <form>
        <div>
          <label class="block mb-3 text-indigo-500" for="password"
            >Password</label>
          
          <input
            class="
              w-full
              p-2
              mb-6
              text-indigo-700
              border-b-2 border-indigo-500
              outline-none
              focus:bg-gray-300
            "
            type="text"
            name="username"
          />
        </div>
        <div>
          <label class="block mb-2 text-indigo-500" for="password"
            >New Password</label
          >
          <input
            class="
              w-full
              p-2
              mb-6
              text-indigo-700
              border-b-2 border-indigo-500
              outline-none
              focus:bg-gray-300
            "
            type="password"
            name="password"
          />
        </div>
        <div>
          <input
            class="
              w-full
              bg-indigo-700
              hover:bg-pink-700
              text-white
              font-bold
              py-2
              px-4
              mb-6
              rounded
            "
            type="submit"
          />
        </div>
      </form> -->
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