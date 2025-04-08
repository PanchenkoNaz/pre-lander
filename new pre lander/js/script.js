
document.addEventListener('DOMContentLoaded', function () {
    startCountdown(5 * 60); // 5 хвилин

    // Показати перший екран та відгуки
    document.querySelector('.welcome').classList.add('active');
    document.querySelector('.reviews').classList.add('active');
});

function nextStep(nextId) {
    const reviews = document.querySelector('.reviews');
    if (reviews) reviews.classList.remove('active');
    const current = document.querySelector('section.active');
    if (current && current.id !== 'win') current.classList.remove('active');

    const next = document.getElementById(nextId);
    if (next) next.classList.add('active');
}

function showPrize() {
    nextStep('win');
}

function startCountdown(duration) {
    let timer = duration, minutes, seconds;
    const display = document.getElementById('timer');

    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (display) {
            display.textContent = minutes + ":" + seconds;
        }

        if (--timer < 0) {
            clearInterval(interval);
            if (display) {
                display.textContent = "Expired";
            }
        }
    }, 1000);
}
