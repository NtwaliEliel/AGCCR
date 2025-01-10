/**
 * Toggle Belief Description
 * Expands or collapses the full description for a belief.
 */
function toggleDescription(id) {
    const desc = document.getElementById(`desc-${id}`);
    if (desc) {
        desc.classList.toggle('active');
    }
}

/**
 * Smooth Scroll to Sections
 * Applies smooth scrolling for links pointing to section IDs.
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/**
 * Add YouTube Playlist Dynamically (Optional Feature)
 * Loads a YouTube playlist dynamically based on playlist ID.
 */
function loadYouTubePlaylist(playlistId) {
    const iframe = document.createElement('iframe');
    iframe.width = "100%";
    iframe.height = "315";
    iframe.src = `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    const sermonsSection = document.querySelector("#sermons");
    if (sermonsSection) {
        sermonsSection.appendChild(iframe);
    }
}

// Select the toggle button and the menu
const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Add event listener for toggle button
toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});