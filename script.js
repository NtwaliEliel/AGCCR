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

document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "AIzaSyCNxN2Fqp23-VV1ZU9Jwtop3frLsHzlfQc"; // Replace with your API key
    const channelId = "UCOkY2T06vtI8EJywQzuKIaw"; // Replace with your channel ID
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                const latestVideoId = data.items[0].id.videoId;
                const videoEmbed = `
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/${latestVideoId}" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>`;
                document.getElementById("latest-sermon").innerHTML = videoEmbed;
            } else {
                document.getElementById("latest-sermon").innerHTML = "<p>No videos found.</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching latest video:", error);
            document.getElementById("latest-sermon").innerHTML = "<p>Unable to load the latest sermon. Please try again later.</p>";
        });
});

// Select the toggle button and the menu
const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Add event listener for toggle button
toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});