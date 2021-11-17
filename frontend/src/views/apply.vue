<template>
  <div class="bg-gray-100">
    <navber />

    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
		<div class="max-w-md w-full space-y-8">
			<div>
				<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Apply to join as Tasker
				</h2>
			</div>
			<form class="mt-8 space-y-6" action="#">
				<input type="hidden" name="remember" value="true">
				<div class="rounded-md shadow-sm -space-y-px">
					<div>
						<label for="Description" class="sr-only">Description</label>
						<input id="text" name="Description" type="text" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Description">
					</div>
					<div>
						<label for="password" class="sr-only">Locations</label>
						<input id="password" name="password" type="text" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Locations">
					</div>
                    <div>
						<label for="password" class="sr-only">Price</label>
						<input id="password" name="password" type="number" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Price">
					</div>
				</div>
                
                <div v-for="sub in subCategories" v-bind:key="sub">
                    <input type="checkbox" id="jack" value="Jack" v-model="SubCategories">
                    <label class = "ml-2" for="jack"> {{sub}} </label>
                </div>
                

				<div>
					<button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						join as Tasker
					</button>
				</div>
			</form>
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
      subCategories: tasks.data.subCategories,
    };
  },
  components: {
    navber,
  },
};
</script>



