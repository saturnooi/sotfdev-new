<template>
  <div class="bg-gray-100">
    <navber />
    <div class="header">
      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">Tasker</span>
          <span class="heading-primary--sub">is a kod hod App</span>
        </h1>

        <a href="#section-tours" class="btn btn--white btn--animated"
          >find job applicants</a
        >
      </div>
    </div>

    <div>Category</div>
    <div class="container container  m-auto flex flex-wrap flex-col md:flex-row items-center justify-start">
  
  <div class="w-full lg:w-1/2 p-3">
    <div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
      <img class="block h-auto w-full lg:w-48 flex-none bg-cover h-24" src="https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg">
      <div class=" w-full bg-white  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="text-black font-bold text-xl mb-2 leading-tight">Can life make you a bitter developer?</div>
        <p class="text-grey-darker text-base">Read more</p>
      </div>
    </div>
  </div>
  
  
  <div class="w-full lg:w-1/2 p-3">
    <div class="flex flex-col lg:flex-row-reverse rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
      <img class="block h-auto w-full lg:w-48 flex-none bg-cover" src="https://images.pexels.com/photos/1302883/pexels-photo-1302883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260">
      <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="text-black font-bold text-xl mb-2 leading-tight">Can coffee make you a bitter developer?</div>
        <p class="text-grey-darker text-base">Read more</p>
      </div>
    </div>
  </div>
  
  
    <div class="w-full lg:w-1/2 p-3">
    <div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
      <img class="block h-auto w-full lg:w-48 flex-none bg-cover h-24" src="https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg">
      <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="text-black font-bold text-xl mb-2 leading-tight">Can coffee make you a bitter developer?</div>
        <p class="text-grey-darker text-base">Read more</p>
      </div>
    </div>
  </div>
  
  
    <div class="w-full lg:w-1/2 p-3">
    <div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
      <img class="block h-auto w-full lg:w-48 flex-none bg-cover h-24" src="https://images.pexels.com/photos/1302883/pexels-photo-1302883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260">
      <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="text-black font-bold text-xl mb-2 leading-tight">Can coffee make you a bitter developer?</div>
        <p class="text-grey-darker text-base">Read more</p>
      </div>
    </div>
  </div>
  
      <div class="w-full  p-3">
    <div class="flex flex-col lg:flex-row-reverse rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
      <img class="block h-auto w-full lg:w-48 flex-none bg-cover h-24" src="https://images.pexels.com/photos/1302883/pexels-photo-1302883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260">
      <div class="bg-white w-full rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="text-black font-bold text-xl mb-2 leading-tight">Can green tea make you a bitter developer?</div>
        <p class="text-grey-darker text-base">Read more</p>
      </div>
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

<style >
@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }
  80% {
    transform: translateX(1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }
  80% {
    transform: translateX(-1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

.header {
  position: relative;
  height: 85vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(30, 77, 154, 0.8),
      rgba(4, 190, 254, 0.8)
    ),
    url(../assets/img/home.jpg);
  background-size: cover;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
}
.header__text-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}

.heading-primary {
  color: #fff;
  text-transform: uppercase;
  backface-visibility: hidden;
  margin-bottom: 3rem;
}
.heading-primary--main {
  display: block;
  margin-bottom: 1rem;
  font-size: 5rem;
  font-weight: 400;
  letter-spacing: 2.5rem;
  animation-name: moveInLeft;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  /*
        animation-delay: 3s;
        animation-iteration-count: 3;
        */
}
.heading-primary--sub {
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 1rem;
  animation: moveInRight 1s ease-out;
}

.btn,
.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.2rem 3.5rem;
  display: inline-block;
  border-radius: 10rem;
  transition: all 0.2s;
  position: relative;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
}
.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

.btn:active,
.btn:focus {
  outline: none;
  transform: translateY(-1px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
}

.btn--white {
  background-color: #fff;
  color: #777;
}
.btn--white::after {
  background-color: #fff;
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 10rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}

.btn--animated {
  animation: moveInBottom 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;
}

.btn-text:link,
.btn-text:visited {
  font-size: 1.6rem;
  color: #55c57a;
  display: inline-block;
  text-decoration: none;
  border-bottom: 1px solid #55c57a;
  padding: 3px;
  transition: all 0.2s;
}

.btn-text:hover {
  background-color: #55c57a;
  color: #fff;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.btn-text:active {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  transform: translateY(0);
}
</style>