<template>
  <div class="bg-gray-100">
    <navber />
<div class="m-10 mx-auto p-16 sm:p-24 lg:p-48 justify-items-center ">
      <div
        class="
         flex
          relative
          rounded-lg
          items-center
          border-gray-200 border-2
          shadow-xl
        "
        style="min-height: 19rem"
      >
        <div
          class="
            relative
            w-full
            h-full
            overflow-hidden
            rounded-t-lg
            md:rounded-t-none md:rounded-l-lg
          "

        >
          <form>
            <div>
              <label class="block mb-3" for="password">Password</label>

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
              <label class="block mb-2" for="password">New Password</label>
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
          </form>
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