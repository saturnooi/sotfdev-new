<template>
<body>
  <div class="container">
    <div class="nav">
      <span>มาใส่ navbar </span>
    </div> 
    <div class="AboutUs">
      <div class ="who-we-are">
        <h3>Tasker</h3>
        <span> Tasker is a kod hod App. Please Downlaod</span>
      </div>
      <div class="cards">
        <div class="card">
          <div class="card-img card-img1"></div>
            <card class="card-body">
              <h3>Name Surname</h3>
              <span>Backend Developer</span>
              <p>Description </p>
            </card>
        </div>
        <div class="card">
          <div class="card-img card-img2"></div>
            <card class="card-body">
              <h3>Name Surname</h3>
              <span>Backend Developer</span>
              <p>Description</p>
            </card>
        </div>
        <div class="card">
          <div class="card-img card-img3"></div>
            <card class="card-body">
              <h3>Name Surname</h3>
              <span>Frontend Developer</span>
              <p>Description</p>
            </card>
        </div>
        <div class="card">
          <div class="card-img card-img4"></div>
            <card class="card-body">
              <h3>Name Surname</h3>
              <span>Frontend Developer</span>
              <p>Description</p>
            </card>
        </div>
        <div class="card">
          <div class="card-img card-img1"></div>
            <card class="card-body">
              <h3>Name Surname</h3>
              <span>Backend Developer</span>
              <p>Description</p>
            </card>
        </div>
        <div class="card">
          <div class="card-img card-img1"></div>
            <card class="card-body">
              <h3>Noppawat Khamyod</h3>
              <span>Backend Developer</span>
              <p>Description</p>
            </card>
        </div>        

        <div class="social-media">
          <i class="fa fa-github" style="font-size:24px"></i>
          <i class="fa fa-linkedin" style="font-size:24px"></i>
          <i class="fa fa-twitter" style="font-size:24px"></i>
          <i class="fa fa-facebook" style="font-size:24px"></i>
        </div>
      </div>
    </div>
  </div>
</body>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

body {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-image: url('../assets/meme.png');
  background-size: cover;
  background-position: center center; */
  padding: 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 10px;
}

.nav span {
  margin-left: 20px;
}

.AboutUs {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
}

.who-we-are {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.who-we-are span {
  width: 60%;
  align-items: center;
  text-align: center;
}

.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}

.card-img {
  border-radius: 5px;
}

.cards .card{
  width: 16rem;
  margin: 20px;
}

.card p{
  font-size: 14px;
}

.social-media{
  width: 90%;
  display: flex;
  justify-content: flex-end;
}

social-media.i {
  margin:10px;
}

.active {
  border-bottom: 1px solid #fff;
}

.card-img1{
  width: 100%;
  height: 12rem;
  /* background-image: url();
  background-size: cover;
  background-position: center center; */
}

.card-img2{
  width: 100%;
  height: 12rem;
  /* background-image: url();
  background-size: cover;
  background-position: center center; */
}

.card-img3{
  width: 100%;
  height: 12rem;
  /* background-image: url();
  background-size: cover;
  background-position: center center; */
}

.card-img4{
  width: 100%;
  height: 12rem;
  /* background-image: url();
  background-size: cover;
  background-position: center center; */
}

</style>