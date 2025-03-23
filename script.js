let categories = {
    animals: [
        { word: "cat", transcription: "[кэт]", meaning: "Кошка 🐱 - мягкий пушистик, любит молоко!" },
        { word: "dog", transcription: "[дог]", meaning: "Собака 🐶 - лучший друг человека!" },
        { word: "elephant", transcription: "[элефэнт]", meaning: "Слон 🐘 - самый большой наземный зверь!" },
        { word: "tiger", transcription: "[тайгер]", meaning: "Тигр 🐯 - полосатый хищник!" },
        { word: "rabbit", transcription: "[рэббит]", meaning: "Кролик 🐰 - любит морковку!" }
    ],
    transport: [
        { word: "car", transcription: "[кар]", meaning: "Машина 🚗 - едет быстро!" },
        { word: "bus", transcription: "[бас]", meaning: "Автобус 🚌 - возит много людей." },
        { word: "train", transcription: "[трэйн]", meaning: "Поезд 🚆 - длинный и громкий!" }
    ],
    food: [
        { word: "apple", transcription: "[эпл]", meaning: "Яблоко 🍏 - полезный фрукт!" },
        { word: "banana", transcription: "[бэнана]", meaning: "Банан 🍌 - обезьянки любят!" }
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
    document.getElementById("word-text").innerText = `Слово: ${wordData.word}`;
    document.getElementById("word-transcription").innerText = `Транскрипция: ${wordData.transcription}`;
    document.getElementById("word-meaning").innerText = `Описание: ${wordData.meaning}`;
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
