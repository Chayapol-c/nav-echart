async function loadSlides() {
    const slides = [
        'slide1_title.html',
        'slide2_challenge.html',
        'slide3_evolution.html',
        'slide_transform.html',
        'slide8_group1_mid_term.html',     // Group 1 First
        'slide4_orchestration.html',      // Then the Orchestration logic it uses
        'slide5_step1_deepdive.html',     // Step 1 Details
        'slide6_step2_deepdive.html',     // Step 2 Details
        'slide7_step3_fallback.html',     // Step 3 Details
        'slide9_group2_short_term.html',
        'slide10_group3_ytd.html',
        'slide11_group4_long_term.html',
        'slide12_group5_all_history.html',
        'slide14_checklist.html',
        'slide15_qa.html'
    ];

    const container = document.querySelector('.slides');

    for (const slide of slides) {
        try {
            const response = await fetch(`slides/${slide}`);
            if (!response.ok) throw new Error(`Failed to load ${slide}`);
            const html = await response.text();
            container.insertAdjacentHTML('beforeend', html);
        } catch (error) {
            console.error(error);
        }
    }

    // Initialize Reveal ONLY after slides are loaded
    Reveal.initialize({
        hash: true,
        width: 1280,
        height: 720,
        margin: 0.1,
        minScale: 0.2,
        maxScale: 2.0,
        slideNumber: 'c/t',
        navigationMode: 'default',
        plugins: [RevealHighlight]
    });
}

loadSlides();
