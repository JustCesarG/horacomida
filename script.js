let countdownInterval;
let totalSeconds = 3600; // Valor por defecto: 1 hora

document.getElementById('start-btn').addEventListener('click', function () {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds <= 0) {
        alert('Por favor, ingrese un tiempo válido');
        return;
    }

    document.getElementById('config-section').classList.add('hidden');
    document.getElementById('countdown-section').classList.remove('hidden');

    startCountdown();
});

document.getElementById('reset-btn').addEventListener('click', function () {
    clearInterval(countdownInterval);
    document.getElementById('countdown-section').classList.add('hidden');
    document.getElementById('config-section').classList.remove('hidden');
});

function startCountdown() {
    clearInterval(countdownInterval);

    countdownInterval = setInterval(function () {
        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').textContent = "¡TIEMPO COMPLETADO!";

            document.getElementById('countdown-section').classList.add('hidden');
            document.getElementById('config-section').classList.remove('hidden');

            return;
        }

        totalSeconds--;
        updateDisplay();
    }, 1000);

    updateDisplay();
}

function updateDisplay() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('countdown').textContent =
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}