let categories = {
    animals: [
        { word: "cat", transcription: "кэт", image: "images/cat.png" },
        { word: "dog", transcription: "дог", image: "images/dog.png" }
    ],
    transport: [
        { word: "car", transcription: "кар", image: "images/car.png" },
        { word: "bus", transcription: "бас", image: "images/bus.png" }
    ]
};

let currentCategory = [];
let currentIndex = 0;

function startApp() {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("categories").style.display = "block";
}

function loadCategory(category) {
    if (!categories[category] || categories[category].length === 0) {
        alert("Нет слов в этой категории");
        return;
    }
    currentCategory = categories[category];
    currentIndex = 0;
    document.getElementById("categories").style.display = "none";
    document.getElementById("game-area").style.display = "block";
    document.getElementById("category-title").innerText = category;
    showWord();
}

function showWord() {
    if (currentCategory.length === 0) return;
    let wordData = currentCategory[currentIndex];
    if (!wordData) return;
    document.getElementById("word-text").innerText = wordData.word;
    document.getElementById("word-transcription").innerText = wordData.transcription;
    document.getElementById("word-image").src = wordData.image;
}

function nextWord() {
    if (currentCategory.length === 0) return;
    currentIndex = (currentIndex + 1) % currentCategory.length;
    showWord();
}

function goBack() {
    document.getElementById("game-area").style.display = "none";
    document.getElementById("categories").style.display = "block";
}
