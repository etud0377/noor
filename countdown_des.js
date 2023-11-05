document.addEventListener("DOMContentLoaded", function() {
    // Countdown Timer
    const countdownElement = document.getElementById("timer");

    // Set the countdown end date and time (in UTC)
    const countdownEnd = new Date("2023-12-04T00:00:00Z").getTime();

    // Update the countdown every second
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownEnd - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown is over, display a message
        if (distance < 0) {
            countdownElement.textContent = "Countdown Expired!";
            clearInterval(countdownInterval);
        }
    }, 1000); // Update every second

    // Romantic Visual Effect for Homepage
    const homeLink = document.querySelector('nav a[href="home_page-1.html"]');

    homeLink.addEventListener("click", function(event) {
        event.preventDefault();
        document.body.classList.add("clicked");
        setTimeout(() => {
            document.body.classList.remove("clicked");
            window.location.href = "home_page-1.html";
        }, 2000); // Redirect to the homepage after 2 seconds
    });
});

// Create and animate hearts on click

document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 10; i++) {
        // Create a new div element for each heart
        const heart = document.createElement("div");
        // Apply the "heart" class to the div element (defined in CSS)
        heart.className = "heart";
        // Randomly position each heart horizontally within the window
        heart.style.left = Math.random() * window.innerWidth + "px";
        // Randomize the animation duration for a natural effect
        heart.style.animationDuration = Math.random() * 2 + 1 + "s";
        // Append the heart to the body element
        document.body.appendChild(heart);

        // Remove hearts from the DOM after their animation ends
        heart.addEventListener("animationiteration", function() {
            heart.remove();
        });
    }
    // Wait for the DOM content to be fully loaded before executing the script

    // Select the homepage link from the navigation bar
    const homeLink = document.querySelector('nav a[href="home_page-1.html"]');

    // Add a click event listener to the homepage link
    homeLink.addEventListener("click", function(event) {
        
        // Prevent the default behavior of the link (preventing page reload)
        event.preventDefault();

        // Add a CSS class to the body element to trigger the romantic effect animation
        document.body.classList.add("clicked");

        // Generate 10 hearts dynamically and animate them
      

        // After 2 seconds, remove the CSS class triggering the romantic effect animation
        // and redirect to the homepage
        setTimeout(() => {
            document.body.classList.remove("clicked");
            window.location.href = "home_page-1.html";
        }, 2000); // Redirect to the homepage after 2 seconds
    });
});


