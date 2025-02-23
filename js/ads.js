// ads.js

// Function to get random positions within the body
function getRandomPositions() {
    const bodyChildren = document.body.children;
    const positions = [];

    // Collect all child elements of the body
    for (let i = 0; i < bodyChildren.length; i++) {
        if (bodyChildren[i].tagName !== 'SCRIPT') { // Exclude script tags
            positions.push(i);
        }
    }

    // Shuffle the positions and select up to 3 random ones
    const shuffledPositions = positions.sort(() => Math.random() - 0.5);
    return shuffledPositions.slice(0, 3);
}

// Function to load 320x50 banner ad
function loadBannerAd() {
    const positions = getRandomPositions();

    positions.forEach((position) => {
        // Create a container for the banner ad
        const bannerAdContainer = document.createElement('div');
        bannerAdContainer.style.textAlign = 'center';
        bannerAdContainer.style.margin = '20px 0';

        // Add the banner ad script
        const bannerAdScript = document.createElement('script');
        bannerAdScript.type = 'text/javascript';
        bannerAdScript.innerHTML = `
            atOptions = {
                'key' : '4ac78650522e2a12d6f5ae29674a29b8',
                'format' : 'iframe',
                'height' : 50,
                'width' : 320,
                'params' : {}
            };
        `;
        bannerAdContainer.appendChild(bannerAdScript);

        // Add the invoke script
        const invokeScript = document.createElement('script');
        invokeScript.type = 'text/javascript';
        invokeScript.src = '//www.highperformanceformat.com/4ac78650522e2a12d6f5ae29674a29b8/invoke.js';
        bannerAdContainer.appendChild(invokeScript);

        // Insert the ad container at a random position
        document.body.insertBefore(bannerAdContainer, document.body.children[position]);
    });
}

// Function to load pop-under ad
function loadPopUnderAd() {
    // Add the pop-under ad script
    const popUnderScript = document.createElement('script');
    popUnderScript.type = 'text/javascript';
    popUnderScript.src = '//pl25949423.effectiveratecpm.com/0b/e1/d4/0be1d4aeebbe71ebce21beecdf0f3d05.js';
    document.head.appendChild(popUnderScript);
}

// Function to load direct link ad
function loadDirectLinkAd() {
    const positions = getRandomPositions();

    positions.forEach((position) => {
        // Create a container for the direct link ad
        const directLinkAdContainer = document.createElement('div');
        directLinkAdContainer.style.textAlign = 'center';
        directLinkAdContainer.style.margin = '20px 0';

        // Add the direct link ad
        const directLinkAd = document.createElement('a');
        directLinkAd.href = 'https://www.effectiveratecpm.com/pz6096f92?key=cb63d9dc2bee6347f74e4327dd074af8';
        directLinkAd.target = '_blank';
        directLinkAd.textContent = 'Learn more about effective CPM strategies';
        directLinkAd.style.display = 'inline-block';
        directLinkAd.style.padding = '10px 20px';
        directLinkAd.style.backgroundColor = '#0a97a4';
        directLinkAd.style.color = '#ffffff';
        directLinkAd.style.borderRadius = '5px';
        directLinkAd.style.textDecoration = 'none';
        directLinkAdContainer.appendChild(directLinkAd);

        // Insert the ad container at a random position
        document.body.insertBefore(directLinkAdContainer, document.body.children[position]);
    });
}

// Function to initialize all ads
function initializeAds() {
    loadBannerAd();
    loadPopUnderAd();
    loadDirectLinkAd();
}

// Call the initializeAds function to load ads
initializeAds();