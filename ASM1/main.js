// function startGame() {
//     var playerName = document.getElementById("player-name").value;
//     if (playerName.trim() === "") {
//         alert("Vui lòng nhập tên của bạn trước khi bắt đầu trò chơi!");
//         return;
//     }

//     document.getElementById("name-input").style.display = "none";
//     document.getElementById("game-container").style.display = "block";

// }

// const pokemonImages = [
//     "https://cdnphoto.dantri.com.vn/WVE8NU2KdpABjG7tHpmAaR4mYE8=/thumb_w/1020/2023/06/06/cuoc-song-hien-tai-cua-huyen-thoai-memedocx-1686022129986.jpeg",
//     "https://storage.googleapis.com/cdn-entrade/bovagau-meme/meme-meo-xin-loi-duoc-chua-600x600_1682503966",
//     "https://genk.mediacdn.vn/2018/10/19/photo-1-15399266837281100315834-15399271585711710441111.png",
//     "https://images.ctfassets.net/h6goo9gw1hh6/4uZMPT7pEQxvowHt980pXI/093596e039b95eb45570ff991a98a044/Tell_Me_More__Meme_Example.jpg?w=1080&h=1080&fl=progressive&q=70&fm=jpg",
//     "https://images.theconversation.com/files/521751/original/file-20230419-18-hg9dc3.jpg?ixlib=rb-1.1.0&rect=398%2C2%2C1206%2C991&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
//     "https://thegioituigiay.com/uploads/10-2023/anh_meme_cho_chi_tay.jpg",
//     "https://mcdn.coolmate.me/image/March2023/tong-hop-25-anh-meme-hamster-cuc-hai-huoc-1410_281.jpg",
//     "https://static.lag.vn/upload/news/23/10/27/meme-meo-huh-la-gi-tu-dau-ra-2_NPPF.jpg?w=800&encoder=wic&subsampling=444",
// ];
// const pokemonPairs = pokemonImages.concat(pokemonImages);

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// const shuffledPokemonPairs = shuffleArray(pokemonPairs);

// const gameContainer = document.getElementById("game-container");

// for (let i = 0; i < shuffledPokemonPairs.length; i++) {
//     const card = document.createElement("div");
//     card.className = "card";
//     const image = document.createElement("img");
//     image.src = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Black_image.jpg";
//     image.dataset.index = i;
//     image.addEventListener("click", flipCard);
//     card.appendChild(image);
//     gameContainer.appendChild(card);
// }

// let firstCard = null;
// let secondCard = null;
// let flippedCards = 0;

// function flipCard(event) {
//     if (firstCard && secondCard) {
//         return;
//     }
//     const clickedImage = event.target;
//     clickedImage.src = shuffledPokemonPairs[parseInt(clickedImage.dataset.index)];
//     clickedImage.classList.add("flip");
//     if (!firstCard) {
//         firstCard = clickedImage;
//     } else {
//         secondCard = clickedImage;
//         checkMatch();
//     }
// }

// function checkMatch() {
//     if (firstCard.src === secondCard.src) {
//         firstCard.removeEventListener("click", flipCard);
//         secondCard.removeEventListener("click", flipCard);
//         firstCard.style.visibility = "hidden";
//         secondCard.style.visibility = "hidden";
//         firstCard = null;
//         secondCard = null;
//         flippedCards += 2;
//         if (flippedCards === shuffledPokemonPairs.length) {
//             alert("Chúc mừng! Bạn đã hoàn thành trò chơi!");
//         }
//     } else {
//         setTimeout(() => {
//             firstCard.src = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Black_image.jpg";
//             secondCard.src = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Black_image.jpg";
//             firstCard.classList.remove("flip");
//             secondCard.classList.remove("flip");
//             firstCard = null;
//             secondCard = null;
//         }, 1000);
//     }
// }


// function startGame() {
//     var playerName = document.getElementById("player-name").value;
//     if (playerName.trim() === "") {
//         alert("Vui lòng nhập tên của bạn trước khi bắt đầu trò chơi!");
//         return;
//     }

//     document.getElementById("name-input").style.display = "none";
//     document.getElementById("game-container").style.display = "block";
// }
