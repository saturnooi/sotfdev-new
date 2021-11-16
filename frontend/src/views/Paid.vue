<template>
    <body>
        <div id="wrapper">
            <div class="payment-containner">
                <div class="paymentPic"></div>
                <div class="paymentDetail">
                    <span class="TaskerPayment">Tasker  Payment</span>
                    <span class="methodBanner">Please choose your payment method.</span>
                    <div class="select">
                        <select name="format" id="format">
                            <option selected disabled>Payment method</option>
                            <option value="paid">Paid to tasker</option>
                            <option value="widthdraw">Widthdraw to a system</option>
                        </select>
                    </div>
                    <span class="methodBanner1">Please enter the amount of the money.</span>
                    <input class="price1" type="text" placeholder="Enter amount ..." />
                    <div class=buts>
                        <button class="submit">Proceed</button>
                        <button class="cancel1">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

* {
    box-sizing: border-box;
}

body {
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
}

#wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #ADD8E6;
}

.payment-containner {
    display: flex;
    width: 60%;
    height: 64%;
    background-color: white;
    box-shadow: 0px 0px 30px 15px rgba(0,0,0,0.2);
}

.paymentPic {
    width: 40%;
    height: 100%;
    background-color: black;
    background-image: url("../assets/payment.jpg");
    background-position: center;
}

.paymentDetail {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    background-color: #C2FFF0;
}

.TaskerPayment {
    text-align: center;
    margin: 35px 20px 25px 20px;
    font-size: 50px;
    font-family: Impact, fantasy;
    --x: 50%;
    --y: 50%;
    border: 10px solid transparent;
    background: linear-gradient(#fff, #fff)
    padding-box, radial-gradient(farthest-corner at var(--x) var(--y), #000, #000) border-box;
}

.methodBanner {
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size:20px;
}

.methodBanner1 {
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 20px;
    margin-top: 60px;
}

select {
    position:relative;
    font-size: 20px;
    width: 230px;
    justify-content: center;
    align-items: center;
    left: 242px;
    top: 25px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline:0;
    box-shadow: none;
    border: 0!important;
    background: #7EC8E3;
    text-align: center;
    height: 2em;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 60px;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
}

select::-ms-expand{
    display: none;
}

.price1 {
    position: relative;
    left: 231px;
    top: 20px;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    border: none;
    appearance: none;
    background: #7EC8E3;
    padding: 12px;
    border-radius: 8px;
    width: 250px;
    outline: none;
    margin-top: 5px;
    text-align: center;
    position: relative;
    color: #000;
}

.price1::placeholder {
  color: #222;
  text-align: center;
  transition: color 0.3s ease;
}

input:focus::placeholder {
  color: transparent;
}

.buts {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 35px;
}

.submit {
  margin-right: 40px;
  margin-top: 30px;
  font-size: 18px;
  background: #00d100;
  width: 200px;
  padding: 8.5px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: none;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}

.submit:hover,
.submit:focus,
.submit:active {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.cancel1 {
  margin-top: 30px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  background: #ff0000;
  width: 200px;
  padding: 8.5px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: none;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}

.cancel1:hover,
.cancel1:focus,
.cancel1:active {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

// // <script>
// import navber from "../components/navber.vue";

// export default {
//   components: {
//     navber,
//   },
// };
// </script>