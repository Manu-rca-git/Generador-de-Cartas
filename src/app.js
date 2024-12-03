import "./style.css";
import "bootstrap";
window.onload = function() {
  const card = document.getElementById("card");

  // Definición de valores y palos
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suits = [
    { name: "spade", symbol: "♠" },
    { name: "club", symbol: "♣" },
    { name: "heart", symbol: "♥" },
    { name: "diamond", symbol: "♦" }
  ];

  // Selección aleatoria
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  // Configurar contenido y estilo
  card.class = `card ${randomSuit}`;
  card.innerHTML = `
    <div class="top-left">${randomSuit.symbol}</div>
    <div class="center">${randomValue}</div>
    <div class="bottom-right">${randomSuit.symbol}</div>
  `;
};
