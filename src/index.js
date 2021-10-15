import './style.css';
import { createGame, createUser, fetchUser } from './api.js';

const list = document.querySelector('.score-list');
const addScore = document.querySelector('.add-score');
const refresh = document.getElementById('refresh');
const username = document.querySelector('.name');
const userscore = document.querySelector('.score');

const sortUserDataByScore = (arr) => {
  arr.sort((data1, data2) => data2.score - data1.score);
};

const loadToDom = async () => {
  const userData = await fetchUser();
  sortUserDataByScore(userData.result);
  let display = '';
  userData.result.forEach((data) => {
    display += `
    <li class="list-items">
    <div class="user">${data.user.toUpperCase()}  </div>
    <div class="user_score">${data.score}</div>
    </li>
    `;
    list.innerHTML = display;
  });
};

addScore.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userName = username.value;
  const userScore = userscore.value;

  if (userName !== '' && userScore !== '') {
    await createUser(userName, userScore);
  }

  loadToDom();
  username.value = '';
  userscore.value = '';
});

refresh.addEventListener('click', loadToDom);

document.addEventListener('DOMContentLoaded', () => {
  createGame('Vic Game');
  loadToDom();
});