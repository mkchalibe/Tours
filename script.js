document.addEventListener('DOMContentLoaded', function() {
    const scenicTab = document.getElementById('scenic-tab');
    const charterTab = document.getElementById('charter-tab');
    const landingPage = document.getElementById('landing-page');
    const scenicPage = document.getElementById('scenic-page');
    const charterPage = document.getElementById('charter-page');
    const scenicOptions = document.querySelectorAll('.scenic-option');
    const scenicContent = document.getElementById('scenic-content');

    scenicTab.addEventListener('click', function() {
        landingPage.style.display = 'none';
        scenicPage.style.display = 'block';
        charterPage.style.display = 'none';
    });

    charterTab.addEventListener('click', function() {
        landingPage.style.display = 'none';
        scenicPage.style.display = 'none';
        charterPage.style.display = 'block';
    });

    scenicOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const duration = e.target.getAttribute('data-duration');
            displayScenicInfo(duration);
        });
    });

    function displayScenicInfo(duration) {
        let content = '';
        switch(duration) {
            case '15':
                content = '<h3>15 Minute Scenic Flight</h3><p>Enjoy a quick and breathtaking 15-minute flight over the stunning landscape.</p>';
                break;
            case '22':
                content = '<h3>22 Minute Scenic Flight</h3><p>Experience more sights with our 22-minute scenic flight, offering more time to enjoy the view.</p>';
                break;
            case '24':
                content = '<h3>24 Minute Scenic Flight</h3><p>Our 24-minute scenic flight offers an extensive tour, perfect for capturing unforgettable moments.</p>';
                break;
            default:
                content = '<p>Please select a valid scenic flight option.</p>';
        }
        scenicContent.innerHTML = content;
    }
});
