async function getPronunciation() {
  const word = document.getElementById('wordInput').value.trim();
  if (word === "") {
    alert("Будь ласка, введіть слово.");
    return;
  }

  // Запит до API для отримання інформації про слово
  const response = await fetch(https://api.dictionaryapi.dev/api/v2/entries/en/${word});
  const data = await response.json();
  
  if (data.title === "No Definitions Found") {
    alert("Слово не знайдено.");
    return;
  }

  const translation = data[0].meanings[0].definitions[0].definition;
  const phonetic = data[0].phonetic;
  const audioUrl = data[0].phonetics[0].audio;

  // Відображення результату
  document.getElementById('translation').textContent = Переклад: ${translation};
  document.getElementById('phonetic').textContent = Транскрипція: ${phonetic};

  const audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.src = audioUrl;
  audioPlayer.play();
}
