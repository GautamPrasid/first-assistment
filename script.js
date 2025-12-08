const button = document.getElementById('mischievous-button');
const container = document.querySelector('.container');
const buttonWrapper = document.querySelector('.button-wrapper');

// Function to show the alert
function showAlert() {
    alert("We aren't ready yet! 🚧");
}

// Function to move the button to a random position
function moveButton() {
    // Get the container dimensions
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Get the button dimensions
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Define the safe area within the container for the button to move
    // We use the button-wrapper area for constrained movement
    const wrapperWidth = buttonWrapper.clientWidth;
    const wrapperHeight = buttonWrapper.clientHeight;

    // Calculate random coordinates relative to the button-wrapper
    // Max movement is constrained to the size of the wrapper to keep it local
    const maxLeft = wrapperWidth - buttonWidth;
    const maxTop = wrapperHeight - buttonHeight;

    // Generate random numbers for x and y offset
    // We use a safe range, e.g., ± 200px from the center for the button wrapper's context
    const randomX = Math.random() * 200 - 100; // between -100 and +100
    const randomY = Math.random() * 50 - 25; // between -25 and +25

    // Apply the transformation. The 'left: 50%; transform: translateX(-50%)' in CSS
    // keeps it centered when static. We add the random transform on hover.
    button.style.transform = `translate(calc(-50% + ${randomX}px), ${randomY}px)`;

    // Revert transition momentarily for faster movement on repeat hovers
    button.style.transition = 'transform 0.05s ease-out';
}

// Reset the button position (back to centered)
function resetButton() {
    button.style.transform = 'translate(-50%, 0)';
    button.style.transition = 'all 0.3s ease'; // Restore smooth transition
}

// Add event listeners for desktop (hover)
button.addEventListener('mouseover', moveButton);
button.addEventListener('mouseout', resetButton);

// Add event listeners for touch devices (touch start/end)
button.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent accidental scrolling/other defaults
    moveButton();
});
button.addEventListener('touchend', resetButton);

// Prevent click events from triggering immediately on touch
button.addEventListener('click', showAlert);