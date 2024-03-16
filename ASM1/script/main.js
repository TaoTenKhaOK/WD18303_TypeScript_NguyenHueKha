"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const pokemons = 48;
const APP = document.getElementById("app");
const backBtn = document.getElementById("backBtn");
const playAgainBtn = document.getElementById("playAgainBtn");
const countdownElement = document.getElementById("countdown");
let html = "";
let timeLeft = 600;
let countdownTimeout;
function fetchPokemonData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield fetch(url);
        return yield data.json();
    });
}
function renderPokemonCards() {
    html = "";
    for (let index = 0; index < 48; index++) {
        const data = fetchPokemonData(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 48) + 1}/`);
        data.then(function (response) {
            console.log(response.id);
            response.sprites.front_default;
            html += `
                <div class="col-1">
                    <div class="card p-1 mb-3 shadow position-relative">
                        <span class="position-absolute top-0">#$${response.id}</span>
                        <img src="${response.sprites.front_default}" alt="${response.name}">
                    </div>
                </div>
            `;
            APP.innerHTML = html;
        });
    }
}
if (backBtn) {
    backBtn.addEventListener("click", function () {
        window.location.href = "index.html";
    });
}
if (playAgainBtn) {
    playAgainBtn.addEventListener("click", function () {
        timeLeft = 600;
        clearTimeout(countdownTimeout);
        countdown();
        renderPokemonCards();
    });
}
function countdown() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    if (countdownElement) {
        countdownElement.innerHTML = `${minutes}:${seconds}`;
    }
    if (timeLeft > 0) {
        timeLeft--;
        countdownTimeout = setTimeout(countdown, 1000);
    }
}
countdown();
renderPokemonCards();
