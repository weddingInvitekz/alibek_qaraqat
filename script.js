document.addEventListener('DOMContentLoaded', () => {
    const musicBtn = document.getElementById('music-btn');
    const audio = document.getElementById('bg-music');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
  
    musicBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
      } else {
        audio.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
      }
    });
  });





  // Указываем дату торжества: 21 ноября 2026, 19:00
  const eventDate = new Date("November 21, 2026 18:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      document.querySelector('.timer-container').innerHTML = "<h3>Той басталды!</h3>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();



document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bg-music');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');

  // Функция для обновления иконки кнопки
  function updateMusicUI(isPlaying) {
    if (playIcon && pauseIcon) {
      if (isPlaying) {
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
      } else {
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
      }
    }
  }

  // Попытка запустить аудио сразу при загрузке
  const startAudio = () => {
    audio.play().then(() => {
      updateMusicUI(true);
      removeInteractionListeners();
    }).catch(() => {
      // Браузер заблокировал autoplay — ждем взаимодействия пользователя
      updateMusicUI(false);
    });
  };

  // Слушатели первого взаимодействия
  const onUserInteraction = () => {
    audio.play().then(() => {
      updateMusicUI(true);
      removeInteractionListeners();
    }).catch(err => console.log('Autoplay issue:', err));
  };

  function removeInteractionListeners() {
    window.removeEventListener('click', onUserInteraction);
    window.removeEventListener('touchstart', onUserInteraction);
    window.removeEventListener('scroll', onUserInteraction);
  }

  // Навешиваем слушатели на любое касание/клик/скролл
  window.addEventListener('click', onUserInteraction, { once: true });
  window.addEventListener('touchstart', onUserInteraction, { once: true });
  window.addEventListener('scroll', onUserInteraction, { once: true });

  // Пробуем запустить прямо сейчас
  startAudio();
});
