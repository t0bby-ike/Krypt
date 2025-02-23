// ads.js

// Function to get random positions within the body
function getRandomPositions(maxPositions) {
    const bodyChildren = document.body.children;
    const positions = [];

    // Collect all child elements of the body
    for (let i = 0; i < bodyChildren.length; i++) {
        if (bodyChildren[i].tagName !== 'SCRIPT') { // Exclude script tags
            positions.push(i);
        }
    }

    // Shuffle the positions and select up to `maxPositions` random ones
    const shuffledPositions = positions.sort(() => Math.random() - 0.5);
    return shuffledPositions.slice(0, maxPositions);
}

// Function to load 320x50 banner ad in the header
function loadHeaderBannerAd() {
    // Create a container for the header banner ad
    const headerBannerAdContainer = document.createElement('div');
    headerBannerAdContainer.style.textAlign = 'center';
    headerBannerAdContainer.style.margin = '20px 0';

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
    headerBannerAdContainer.appendChild(bannerAdScript);

    // Add the invoke script
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = '/.netlify/functions/load-banner-ad'; // Netlify Function
    headerBannerAdContainer.appendChild(invokeScript);

    // Insert the ad container in the header
    const header = document.querySelector('header');
    if (header) {
        header.appendChild(headerBannerAdContainer);
    } else {
        console.error('Header not found. Inserting ad at the top of the body.');
        document.body.insertBefore(headerBannerAdContainer, document.body.firstChild);
    }
}

// Function to load 320x50 banner ad in the body
function loadBodyBannerAds() {
    const positions = getRandomPositions(4); // 4 random positions in the body

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
        invokeScript.src = '/.netlify/functions/load-banner-ad'; // Netlify Function
        bannerAdContainer.appendChild(invokeScript);

        // Insert the ad container at a random position in the body
        document.body.insertBefore(bannerAdContainer, document.body.children[position]);
    });
}

// Function to load pop-under ad
function loadPopUnderAd() {
    // Add the pop-under ad script
    const popUnderScript = document.createElement('script');
    popUnderScript.type = 'text/javascript';
    popUnderScript.src = '/.netlify/functions/load-pop-under-ad'; // Netlify Function
    document.head.appendChild(popUnderScript);
}

// Function to load direct link ad
function loadDirectLinkAd() {
    const positions = getRandomPositions(1); // Only 1 random position

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

// Function to load social bar ad
function loadSocialBarAd() {
    const positions = getRandomPositions(1); // Only 1 random position

    positions.forEach((position) => {
        // Create a container for the social bar ad
        const socialBarAdContainer = document.createElement('div');
        socialBarAdContainer.style.textAlign = 'center';
        socialBarAdContainer.style.margin = '20px 0';

        // Add the social bar ad script
        const socialBarAdScript = document.createElement('script');
        socialBarAdScript.type = 'text/javascript';
        socialBarAdScript.src = '/.netlify/functions/load-social-bar-ad'; // Netlify Function
        socialBarAdContainer.appendChild(socialBarAdScript);

        // Insert the ad container at a random position
        document.body.insertBefore(socialBarAdContainer, document.body.children[position]);
    });
}

// Function to load native banner ad (4:1)
function loadNativeBannerAd() {
    // Create a container for the native banner ad
    const nativeBannerAdContainer = document.createElement('div');
    nativeBannerAdContainer.style.textAlign = 'center';
    nativeBannerAdContainer.style.margin = '20px 0';

    // Add the native banner ad script
    const nativeBannerAdScript = document.createElement('script');
    nativeBannerAdScript.type = 'text/javascript';
    nativeBannerAdScript.async = true;
    nativeBannerAdScript.src = '/.netlify/functions/load-native-banner-ad'; // Netlify Function
    nativeBannerAdContainer.appendChild(nativeBannerAdScript);

    // Add the container for the native banner ad
    const nativeBannerAdDiv = document.createElement('div');
    nativeBannerAdDiv.id = 'container-5e312d546ef05f84b4a69bfa056c0d8c';
    nativeBannerAdContainer.appendChild(nativeBannerAdDiv);

    // Insert the ad container at the end of the body
    document.body.appendChild(nativeBannerAdContainer);
}

// Function to initialize all ads
function initializeAds() {
    loadHeaderBannerAd(); // Load banner ad in the header
    loadBodyBannerAds(); // Load 4 banner ads in the body
    loadPopUnderAd();
    loadDirectLinkAd();
    loadSocialBarAd();
    loadNativeBannerAd();
}

// Call the initializeAds function to load ads
initializeAds();