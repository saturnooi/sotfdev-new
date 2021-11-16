<template>
  <div>
    <navber />
    <div
      class="
        container container
        flex flex-wrap flex-col
        md:flex-row
        items-center
        justify-start
      "
    >
      <div
        v-for="category in Category"
        v-bind:vid-id="category"
        v-bind:key="category"
        class="flex flex-col w-1/2"
      >
        <div v-on:click="select = category.path" class="p-5 bg-blue-100">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold m-2 text-gray-800">
              <p>{{ category.name }}</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navber from "../components/navber.vue";
export default {
  data() {
    return {
      select: "",
      Category: [
        {
          name: "Cleanings",
          path: "cleanings",
        },
        {
          name: "consultants",
          path: "consultants",
        },
        {
          name: "handymen",
          path: "handymen",
        },
        {
          name: "mountings",
          path: "mountings",
        },
        {
          name: "Moving Services",
          path: "movingServices",
        },
        {
          name: "Personal Assistants",
          path: "personalAssistants",
        },
        {
          name: "Visual Audios",
          path: "visualAudios",
        },
      ],
    };
  },
  components: {
    navber,
  },
};
</script>