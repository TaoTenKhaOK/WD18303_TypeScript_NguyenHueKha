const pokemons: number = 48;
const APP: HTMLElement | null = document.getElementById("app");
const backBtn: HTMLButtonElement | null = document.getElementById("backBtn") as HTMLButtonElement;
const playAgainBtn: HTMLButtonElement | null = document.getElementById("playAgainBtn") as HTMLButtonElement;
const countdownElement: HTMLElement | null = document.getElementById("countdown");

let html: string = "";
let timeLeft: number = 600; 
let countdownTimeout: any;

async function fetchPokemonData(url: string) {
    let data: Response = await fetch(url);
    return await data.json();
}

function renderPokemonCards() {
    html = ""; 
    for (let index = 0; index < 48; index++) {
        const data: any = fetchPokemonData(
            `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 48) + 1}/`
        );

        data.then(function (response: any) {
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
    let seconds: any = timeLeft % 60;
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
