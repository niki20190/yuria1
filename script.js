async function getPronunciation() {
  const word = document.getElementById('wordInput').value.trim();
  if (word === "") {
    alert("Будь ласка, введіть слово.");
    return;
  }

  // URL до API для отримання інформації про слово
  const url = https://api.dictionaryapi.dev/api/v2/entries/en/${word};

  // Запит до API
  const response = await fetch(url);
  const data = await response.json();

  // Перевірка на наявність помилки або відсутність визначень
  if (data.title === "No Definitions Found") {
    alert("Слово не знайдено.");
    return;
  }

  // Отримуємо переклад, транскрипцію та аудіо
  const translation = data[0].meanings[0].definitions[0].definition;
  const phonetic = data[0].phonetic;
  const audioUrl = data[0].phonetics[0]?.audio;

  // Відображення результату
  document.getElementById('translation').textContent = Переклад: ${translation};
  document.getElementById('phonetic').textContent = Транскрипція: ${phonetic};

  if (audioUrl) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = audioUrl;
    audioPlayer.play();
  } else {
    document.getElementById('audioPlayer').style.display = "none";
  }
}
