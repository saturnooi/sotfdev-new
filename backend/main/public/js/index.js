/* eslint-disable */
import '@babel/polyfill';
import { login, logout } from './login';
import { updateSettings } from './updateSettings';
// import { sendMessage } from '../../utils/chat';

// DOM ELEMENTS
const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');

const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');



// DELEGATION
if (loginForm)
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

if (logOutBtn) logOutBtn.addEventListener('click', logout);

if (userDataForm)
  userDataForm.addEventListener('submit', e => {
    e.preventDefault();
    const form = new FormData();
    form.append('firstname', document.getElementById('firstname').value);
    form.append('lastname', document.getElementById('lastname').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);
    console.log(form);

    updateSettings(form, 'data');
  });

if (userPasswordForm)
  userPasswordForm.addEventListener('submit', async e => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password'
    );

    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });

// if (chatForm) {
//   const socket = io();

//   // Join chatroom
//   socket.emit('joinRoom', { username, room });

//   // Get room and users
//   socket.on('roomUsers', ({ room, users }) => {
//     outputRoomName(room);
//     outputUsers(users);
//   });

//   // Message from server
//   socket.on('message', (message) => {
//     console.log(message);
//     outputMessage(message);

//     // Scroll down
//     chatMessages.scrollTop = chatMessages.scrollHeight;
//   });

//   // Message submit
//   chatForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // Get message text
//     let msg = e.target.elements.msg.value;

//     msg = msg.trim();

//     if (!msg) {
//       return false;
//     }

//     // Emit message to server
//     socket.emit('chatMessage', msg);

//     // Clear input
//     e.target.elements.msg.value = '';
//     e.target.elements.msg.focus();
//   });

//   // Output message to DOM
//   function outputMessage(message) {
//     const div = document.createElement('div');
//     div.classList.add('message');
//     const p = document.createElement('p');
//     p.classList.add('meta');
//     p.innerText = message.username;
//     p.innerHTML += `<span> ${message.time}</span>`;
//     div.appendChild(p);
//     const para = document.createElement('p');
//     para.classList.add('text');
//     para.innerText = message.text;
//     div.appendChild(para);
//     document.querySelector('.chat-messages').appendChild(div);
//   }

//   // Add room name to DOM
//   function outputRoomName(room) {
//     roomName.innerText = room;
//   }

//   // Add users to DOM
//   function outputUsers(users) {
//     userList.innerHTML = '';
//     users.forEach((user) => {
//       const li = document.createElement('li');
//       li.innerText = user.username;
//       userList.appendChild(li);
//     });
//   }

//   //Prompt the user before leave chat room
//   document.getElementById('leave-btn').addEventListener('click', () => {
//     const leaveRoom = confirm('Are you sure you want to leave the chatroom?');
//     if (leaveRoom) {
//       window.location = '../index.html';
//     } else {
//     }
//   });
// };
