<template>
  <div class="bg-gray-100">
    <navber />
    <div
      class="
        container container
        flex flex-wrap flex-col
        md:flex-row
        items-center
        justify-center
      "
    >
      <div v-for="task in alltasks" v-bind:key="task" class="p-3">
        <div
          class="max-w-sm shadow-lg rounded-lg overflow-hidden my-4 bg-white"
        >
          <img
            class="w-full h-56 object-cover object-center"
            src="../assets/img/Usernull.png"
            alt="avatar"
          />
          <div class="flex items-center px-6 py-3 bg-gray-900">
            <h1 class=" text-white font-semibold text-lg">{{ category }}</h1>
          </div>
          <div class="py-4 px-6">
            <h1
              v-if="task.name == null"
              class="text-2xl font-semibold text-gray-800"
            >
              User name
            </h1>
            <h1 v-else class="text-2xl font-semibold text-gray-800">
              {{ task.name }}
            </h1>
            <p class="py-2 text-lg text-gray-700">{{ task.description }}</p>
            <div class="flex items-center mt-4 text-gray-700">
              <img
                src="https://img.icons8.com/material-outlined/24/000000/star--v3.png"
              />
              <h1 class="px-2 text-sm">{{ task.ratingsAverage }}</h1>
            </div>
            <div class="flex items-center mt-4 text-gray-700">
              <svg class="h-6 w-6 fill-current" viewBox="0 0 512 512">
                <path
                  d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z"
                />
              </svg>
              <h1 class="px-2 text-sm">{{ task.locations }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
import navber from "../components/navber.vue";
import tasks from "../test/alltasker.json";

export default {
  data() {
    return {
      category: 'Cleanings',
      select: '',
      alltasks: tasks.data.users,
    };
  },
  components: {
    navber,
  },
};
</script>



