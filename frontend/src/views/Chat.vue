<template>
  <div>
    <navber />
    <div class="chat-container">
      <header class="chat-header">
        <h1><i class="fas fa-smile"></i> Chat</h1>
        <a class="btn1" id="leave-btn">Leave Room</a>
      </header>
      <main class="chat-main">
        <div class="chat-sidebar">
          <button class="users">
            <div class="userElements">
              <img class="pic" src="../assets/zen.jpg" />
              <div class="nameElement">
                <span class="name">Name : Zen Kod-Hod</span>
                <span class="Lmsg">last message...</span>
              </div>
            </div>
          </button>
        </div>
        <div class="chat-messages">
          <div class="message"></div>
        </div>
        <div class="agreement">
          <span class="text-agree">Agreement</span>
          <div class="agree-buts">
            <span class="plsInsert">Please insert a price.</span>
            <input class="price" type="text" placeholder="Enter Price..." />
            <button class="deal">Deal</button>
            <button class="offer">Offer a new price</button>
            <button class="complete">Task Complete</button>
            <button class="cancel">Cancel a task</button>
            <div class="howto"></div>
          </div>
        </div>
      </main>
      <div class="chat-form-container">
        <form id="chat-form">
          <input
            class="textbar"
            id="msg"
            type="text"
            placeholder="Enter Message..."
            required=""
            autocomplete="off"
          />
          <button class="btn"><i class="fas fa-paper-plane"></i> Send</button>
        </form>
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

:root {
  --dark-color-a: #667aff;
  --dark-color-b: #7386ff;
  --light-color: #e6e9ff;
  --success-color: #5cb85c;
  --error-color: #d9534f;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  background: var(--light-color);
  margin: 20px;
}

.chat-sidebar::-webkit-scrollbar {
  width: 1em;
}

.chat-sidebar::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.chat-sidebar::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #667aff;
  outline: 1px solid slategrey;
}

.chat-messages::-webkit-scrollbar {
  width: 1em;
}

.chat-messages::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.chat-messages::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #667aff;
  outline: 1px solid slategrey;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

.btn {
  cursor: pointer;
  padding: 5px 15px;
  background: var(--light-color);
  color: var(--dark-color-a);
  border: none;
  font-size: 17px;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}

.btn:hover,
.btn:focus,
.btn:active {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.btn1 {
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  padding: 5px 15px;
  background: var(--light-color);
  color: var(--dark-color-a);
  border: none;
  font-size: 17px;
  border-radius: 2.5px;
  width: 250px;
  text-align: center;
  position: relative;
  right: 15px;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}

.btn1:hover,
.btn1:focus,
.btn1:active {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/* Chat Page */

.chat-container {
  max-width: 1500px;
  height: 900px;
  background: #fff;
  margin: 30px auto;
  overflow: hidden;
}

.chat-header {
  background: var(--dark-color-a);
  color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.chat-main {
  display: flex;
  flex-direction: row;
  grid-template-columns: 1fr 3fr;
  height: 755px;
}

.chat-sidebar {
  background: var(--dark-color-b);
  color: #fff;
  padding: 20px 20px 60px;
  overflow-y: scroll;
  width: 390px;
}

.users {
  width: 320px;
  height: 100px;
  background: var(--light-color);
  color: #000;
  border-radius: 25px;
  border: 3px solid #555555;
  margin: 5px 5px 5px 5px;
}

.userElements {
  display: flex;
  flex-direction: row;
  position: relative;
  left: 20px;
}

.pic {
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 2px solid #000;
  position: relative;
  right: 7px;
  top: 1px;
  margin-right: 6px;
}

.nameElement {
  display: flex;
  flex-direction: column;
}

.name {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  position: relative;
  bottom: 27px;
  top: 12.5px;
}

.Lmsg {
  font-family: "Poppins", sans-serif;
  position: relative;
  top: 14px;
  right: 20px;
}

.agreement {
  background: var(--dark-color-b);
  color: #fff;
  padding: 20px 20px 60px;
  width: 310px;
  text-align: center;
}

.agree-buts {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-agree {
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  position: relative;
  top: 10px;
}

.plsInsert {
  font-family: "Poppins", sans-serif;
  margin-top: 100px;
}

.price {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  border: none;
  appearance: none;
  background: #f2f2f2;
  padding: 12px;
  border-radius: 3px;
  width: 250px;
  outline: none;
  margin-top: 5px;
  text-align: center;
  position: relative;
}

.textbar {
  font-family: "Poppins", sans-serif;
  border: none;
  border-radius: 2.5px;
  margin-right: 10px;
}

.deal {
  margin-top: 200px;
  background: #1e90ff;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
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

.deal:hover,
.deal:focus,
.deal:active {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.offer {
  margin-top: 30px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  background: #1e90ff;
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

.offer:hover,
.offer:focus,
.offer:active {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.complete {
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

.complete:hover,
.complete:focus,
.complete:active {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.cancel {
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

.cancel:hover,
.cancel:focus,
.cancel:active {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

input:focus::placeholder {
  color: transparent;
}

.price::placeholder {
  color: #222;
  text-align: center;
  transition: color 0.3s ease;
}

.chat-sidebar h2 {
  font-size: 20px;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
}

.chat-sidebar h3 {
  margin-bottom: 15px;
}

.chat-sidebar ul li {
  padding: 10px 0;
}

.chat-messages {
  padding: 30px;
  max-height: 755px;
  width: 800px;
  overflow-y: scroll;
}

.chat-messages .message {
  padding: 10px;
  margin-bottom: 15px;
  background-color: var(--light-color);
  border-radius: 5px;
  overflow-wrap: break-word;
}

.chat-messages .message .meta {
  font-size: 15px;
  font-weight: bold;
  color: var(--dark-color-b);
  opacity: 0.7;
  margin-bottom: 7px;
}

.chat-messages .message .meta span {
  color: #777;
}

.chat-form-container {
  padding: 20px 30px;
  background-color: var(--dark-color-a);
}

.chat-form-container form {
  display: flex;
  width: 820px;
  position: relative;
  left: 350px;
}

.chat-form-container input[type="text"] {
  font-size: 16px;
  padding: 5px;
  height: 40px;
  flex: 1;
  outline: none;
}

/* Join Page */
.join-container {
  max-width: 500px;
  margin: 80px auto;
  color: #fff;
}

.join-header {
  text-align: center;
  padding: 20px;
  background: var(--dark-color-a);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.join-main {
  padding: 30px 40px;
  background: var(--dark-color-b);
}

.join-main p {
  margin-bottom: 20px;
}

.join-main .form-control {
  margin-bottom: 20px;
}

.join-main label {
  display: block;
  margin-bottom: 5px;
}

.join-main input[type="text"] {
  font-size: 16px;
  padding: 5px;
  height: 40px;
  width: 100%;
}

.join-main select {
  font-size: 16px;
  padding: 5px;
  height: 40px;
  width: 100%;
}

.join-main .btn {
  margin-top: 20px;
  width: 100%;
}

@media (max-width: 700px) {
  .chat-main {
    display: block;
  }

  .chat-sidebar {
    display: none;
  }
}
</style>