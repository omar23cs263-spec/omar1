// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Select the button and the hidden div
    const contactBtn = document.getElementById('contactBtn');
    const socialLinks = document.getElementById('socialLinks');

    // Add click event listener for interactivity
    contactBtn.addEventListener('click', () => {
        // Toggle visibility by removing/adding the 'hidden' class
        if (socialLinks.classList.contains('hidden')) {
            socialLinks.classList.remove('hidden');
            contactBtn.textContent = 'Hide Social Media Links';
        } else {
            socialLinks.classList.add('hidden');
            contactBtn.textContent = 'Show Social Media Links';
        }
    });

});
