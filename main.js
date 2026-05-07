// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for reveal animations
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Real-time Data Simulation for Hero Section
function updateHeroData() {
    const dataOverlay = document.querySelector('.data-overlay');
    if (!dataOverlay) return;

    const latencies = ['0.42ms', '0.45ms', '0.48ms', '0.41ms', '0.50ms'];
    const statuses = ['ACTIVE', 'PROCESSING', 'SYNCING', 'IDLE'];
    
    setInterval(() => {
        const randomLatency = latencies[Math.floor(Math.random() * latencies.length)];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        const temp = (Math.random() * 5 + 35).toFixed(1);
        
        dataOverlay.innerHTML = `
            NX-9000 SERIES<br>
            CORE: DUAL 32-BIT<br>
            WIRELESS: WIFI/BLE 5.2<br>
            STATUS: ${randomStatus}<br>
            TEMP: ${temp}°C
        `;
        
        const latencyCard = document.querySelector('.floating-card span:last-child');
        if (latencyCard) latencyCard.textContent = randomLatency;
    }, 2000);
}

// Modal System Logic
const modalData = {
    // Services
    'IOT_SECURE': 'Our secure bootstrapping process ensures that every device in your network is authenticated and encrypted from the moment it powers on. We use hardware-based root-of-trust to prevent unauthorized access.',
    'IOT_OTA': 'Remote firmware management is critical. Our OTA solution provides differential updates, rollback safety, and multi-region deployment to keep your global fleet up to date without physical intervention.',
    'IOT_EDGE': 'Minimize bandwidth costs and latency by processing data locally. We implement edge logic that filters noise and triggers immediate actions before data even reaches the cloud.',
    'EMB_RTOS': 'We optimize Real-Time Operating Systems like FreeRTOS and Zephyr for minimum footprint and maximum performance, ensuring deterministic behavior for mission-critical tasks.',
    'EMB_DRIVERS': 'Custom driver development for specialized peripherals. We write efficient HAL and LL drivers for everything from high-speed ADCs to complex motor controllers.',
    'EMB_POWER': 'Battery life is paramount. We implement deep-sleep states, dynamic frequency scaling, and power-gating strategies to maximize device longevity in the field.',
    'PCB_RF': 'Our RF engineering team handles complex antenna matching, EMI shielding, and signal path optimization for WiFi, BLE, and cellular connectivity.',
    'PCB_THERMAL': 'Advanced thermal simulation prevents hot spots. We use via stitching, heat sinks, and optimized component placement to manage high-power electronics.',
    'PCB_DFM': 'Design for Manufacturability (DFM) ensures that your product is ready for mass production without costly re-spins. We work closely with fab houses from day one.',
    
    // Industries
    'IND_MANU': 'In Industrial 4.0, we deploy gateways that monitor vibration and temperature on assembly lines, feeding data into AI models for predictive maintenance and zero-downtime manufacturing.',
    'IND_ENERGY': 'Smart grids require micro-latency monitoring. Our solutions for energy providers include remote meter reading and load-balancing algorithms for distributed solar and wind farms.',
    'IND_HEALTH': 'For medical compliance, we design BLE-enabled wearbales that track patient vitals with clinical accuracy, ensuring all data is end-to-end encrypted for HIPAA compliance.'
};

function initModals() {
    const modal = document.getElementById('detailModal');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');

    if (!modal) return;

    document.querySelectorAll('.clickable-point').forEach(point => {
        point.addEventListener('click', () => {
            const id = point.getAttribute('data-detail');
            const title = point.getAttribute('data-title');
            modalTitle.innerText = title;
            modalDesc.innerText = modalData[id] || 'Content under development.';
            modal.classList.add('active');
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateHeroData();
    initModals();
    console.log('NexGen IoT - Technical UI Initialized');
});
