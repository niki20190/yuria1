// Словник: список слів з перекладами
const words = [
  { word: "приклад", translation: "example" },
  { word: "котик", translation: "kitten" },
  { word: "дерево", translation: "tree" },
  { word: "будинок", translation: "house" },
  { word: "книга", translation: "book" },
  { word: "мова", translation: "language" },
  { word: "мир", translation: "peace" },
  { word: "друг", translation: "friend" },
  { word: "сонце", translation: "sun" },
  { word: "небо", translation: "sky" },
  { word: "життя", translation: "life" },
  { word: "світло", translation: "light" },
  { word: "темрява", translation: "darkness" },
  { word: "радість", translation: "joy" },
  { word: "тварина", translation: "animal" },
  { word: "сміх", translation: "laughter" },
  { word: "любов", translation: "love" },
  { word: "щастя", translation: "happiness" },
  { word: "музика", translation: "music" },
  { word: "ціль", translation: "goal" },
  { word: "сон", translation: "dream" },
  { word: "світ", translation: "world" },
  { word: "птиця", translation: "bird" },
  { word: "кіт", translation: "cat" },
  { word: "собака", translation: "dog" },
  { word: "школа", translation: "school" },
  { word: "бібліотека", translation: "library" },
  { word: "мам", translation: "mom" },
  { word: "папа", translation: "dad" },
  { word: "батьки", translation: "parents" },
  { word: "друзі", translation: "friends" },
  { word: "сім'я", translation: "family" }
];

// Функція для відображення слів і перекладів
function displayWords() {
  const tableBody = document.querySelector("#wordsTable tbody");

  words.forEach((wordPair) => {
    const row = document.createElement("tr");

    const wordCell = document.createElement("td");
    wordCell.textContent = wordPair.word;
    row.appendChild(wordCell);

    const translationCell = document.createElement("td");
    translationCell.textContent = wordPair.translation;
    row.appendChild(translationCell);

    tableBody.appendChild(row);
  });
}

// Викликаємо функцію для відображення слів при завантаженні сторінки
window.onload = displayWords;
