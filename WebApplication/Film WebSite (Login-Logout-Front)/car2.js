const car = document.getElementById('car');
let carPosition = 50;

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
    const speed = 5;

    if (event.key === 'ArrowUp') {
        carPosition -= speed;
    } else if (event.key === 'ArrowDown') {
        carPosition += speed;
    } else if (event.key === 'ArrowLeft' && carPosition > 0) {
        car.style.left = `${carPosition -= speed}px`;
    } else if (event.key === 'ArrowRight' && carPosition < window.innerWidth - 30) {
        car.style.left = `${carPosition += speed}px`;
    }

    // Update car position
    car.style.bottom = `${carPosition}px`;
}
