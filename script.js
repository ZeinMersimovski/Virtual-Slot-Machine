const symbols = ['🍒', '🍇', '🍊'];

function spin() {
    const display = document.getElementById('display');
    const slotMachine = document.getElementById('slot-machine');

    // Remove previous animation class
    slotMachine.classList.remove('spin');

    // Trigger reflow to restart the animation
    void slotMachine.offsetWidth;

    // Apply the spin animation class
    slotMachine.classList.add('spin');

    // Set symbols after the animation duration
    setTimeout(() => {
        const randomSymbol1 = getRandomSymbol();
        const randomSymbol2 = getRandomSymbol();
        const randomSymbol3 = getRandomSymbol();

        display.textContent = `${randomSymbol1} ${randomSymbol2} ${randomSymbol3}`;
    }, 2000); // Duration of the spin animation
}

function getRandomSymbol() {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}
