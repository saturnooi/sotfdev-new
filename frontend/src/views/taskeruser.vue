<template>
  <div class="bg-gray-100">
    <navber />
    <div class="card-container">
      <div class="flex justify-center">
        <img class="round w-1/6" src="../assets/img/Usernull.png" alt="user" />
      </div>

      <div class="text-3xl username">
        {{ user.user.firstname }} {{ user.user.lastname }}
      </div>
      <div class="text-2xl locations">{{ user.locations }}</div>
      <div class="text-xl username">{{ user.description }}</div>
      <div class="buttons">
        <button class="primary mt-3">Message</button>
      </div>
      <div class="skills">
        <div class="text-2xl locations">Skills</div>
        <ul>
          <li
            v-for="sub in user.subCategories"
            v-bind:key="sub"
            class="text-xl locations"
          >
            {{ sub }}
          </li>
        </ul>
      </div>
    </div>

    <div class="text-4xl mt-8 ml-4 font-bold">Reviews</div>
    <div class="
        container container
        m-auto
        flex flex-wrap flex-col
        md:flex-row
        items-center
        justify-start
      ">
      <div v-for="review in user.review" v-bind:key="review" class="w-full lg:w-1/2 p-3">
        <div
          class="
            flex flex-col
            lg:flex-row-reverse
            rounded
            overflow-hidden
            h-auto
            lg:h-32
            border
            shadow shadow-lg
          "
        >
          <div class="block h-auto w-full lg:w-48 flex-none bg-blue-500"></div>
          <div
            class="
              bg-white
              w-full
              rounded-b
              lg:rounded-b-none lg:rounded-r
              p-4
              flex flex-col
              leading-normal
            "
          >
            <div class="text-black font-bold text-2xl mb-2 leading-tight">
              {{review.userReview.firstname}} {{review.userReview.lastname}}
            </div>
            <div class="text-xl text-grey-darker mt-3 text-base">{{review.review}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tasker from "../test/tasdker.json";
import navber from "../components/navber.vue";
export default {
  data() {
    return {
      user: tasker.user,
    };
  },
  components: {
    navber,
  },
};
</script>

<style>
.username {
  margin: 10px 0;
}

.locations {
  margin: 5px 0;
  text-transform: uppercase;
}

p {
  font-size: 14px;
  line-height: 21px;
}

.card-container {
  background-color: #231e39;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: #b3b8cd;
  padding-top: 30px;
  position: relative;
  text-align: center;
}

.card-container .pro {
  color: #231e39;
  background-color: #febb0b;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  padding: 3px 7px;
  position: absolute;
  top: 30px;
  left: 30px;
}

.card-container .round {
  border: 1px solid #03bfcb;
  border-radius: 50%;
  padding: 7px;
}

button.primary {
  background-color: #03bfcb;
  border: 1px solid #03bfcb;
  border-radius: 3px;
  color: #231e39;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  padding: 10px 25px;
}

button.primary.ghost {
  background-color: transparent;
  color: #02899c;
}

.skills {
  background-color: #1f1a36;
  text-align: left;
  padding: 15px;
  margin-top: 30px;
}

.skills ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.skills ul li {
  border: 1px solid #2d2747;
  border-radius: 2px;
  display: inline-block;
  font-size: 12px;
  margin: 0 7px 7px 0;
  padding: 7px;
}

footer {
  background-color: #222;
  color: #fff;
  font-size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
}

footer p {
  margin: 10px 0;
}

footer i {
  color: red;
}

footer a {
  color: #3c97bf;
  text-decoration: none;
}
</style>