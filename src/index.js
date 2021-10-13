import './style.css';

const playerContainer = document.querySelector('.score-list');

const playerList = [
  {
    name: 'Azula',
    score: 300,
  },
  {
    name: 'Zuko',
    score: 200,
  },
  {
    name: 'Aang',
    score: 250,
  },
  {
    name: 'Sokka',
    score: 100,
  },
];

const showPlayers = (list) => `
<li class="scores">
<span>${list.name}</span>
<span class="scores-span">${list.score}</span>
</li>
`;
playerContainer.innerHTML = playerList.map((list) => showPlayers(list)).join('');