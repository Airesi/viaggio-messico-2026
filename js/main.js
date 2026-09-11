// Logica Principale - js/main.js
let map; 

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    populateHeaderFooter();
    generateNavigation();
    generateContent();
    generateFlights();
    initMap();
    initOrganicMosaic();;
    
    // Attiva la prima area di default
    switchArea(1);   
}

function populateHeaderFooter() {
    document.getElementById('trip-dates').textContent = tripData.general.dates;
    document.getElementById('trip-title').textContent = tripData.general.title;
    document.getElementById('trip-subtitle').textContent = tripData.general.subtitle;
    document.getElementById('footer-trip-name').textContent = tripData.general.footerName;
    document.getElementById('footer-trip-season').textContent = tripData.general.footerSeason;
}

function generateNavigation() {
    const navContainer = document.getElementById('nav-container');
    tripData.areas.forEach(area => {
        const btn = document.createElement('button');
        btn.id = `nav-btn-${area.id}`;
        btn.onclick = () => switchArea(area.id);
        
        // Stile base del bottone inattivo
        btn.className = "py-3 px-2 text-xs sm:text-sm font-bold rounded-xl bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition text-center border border-gray-200 border-b-4 border-transparent flex flex-col items-center h-full justify-center";
        
        btn.innerHTML = `
            <span>${area.navTitle}</span>
            <span class="text-[10px] font-normal opacity-70 mt-1">${area.navSubtitle}</span>
        `;
        navContainer.appendChild(btn);
    });
}

function generateContent() {
    const contentContainer = document.getElementById('content-container');
    const walletContainer = document.getElementById('wallet-container');
    
    tripData.areas.forEach(area => {
        
        // --- COLONNA DESTRA (Logistica + Itinerario) ---
        const contentDiv = document.createElement('div');
        contentDiv.id = `content-area-${area.id}`;
        contentDiv.className = "tab-content p-6 sm:p-8"; // Tolto lo space-y per gestire meglio i margini
        
        const linksHtml = (area.links || []).map(link => 
            `<a href="${link.url}" target="_blank" class="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-3.5 py-2 rounded-xl font-bold transition text-[11px] shadow-sm hover:shadow">
                🔗 ${link.text.replace('🔗 ', '')}
            </a>`
        ).join('');

        // 1. LOGISTICA (Ora sta in alto, ho rimosso il bordo superiore)
        const basecampHtml = area.basecamp ? `
            <div class="mb-8">
                <span class="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">⛺ Logistica Base</span>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-slate-800 text-white rounded-2xl p-4 shadow-sm relative overflow-hidden">
                        <div class="absolute -right-4 -top-4 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl"></div>
                        <span class="text-[9px] uppercase tracking-widest text-emerald-400 font-bold block mb-1">Dove Dormire</span>
                        <h4 class="text-sm font-bold mb-2 relative z-10">${area.basecamp.zone || ''}</h4>
                        <div class="flex items-center gap-2 mt-3 pt-3 border-t border-white/10 relative z-10">
                            <span class="text-lg">🛖</span>
                            <span class="text-[10px] text-slate-300 font-medium leading-tight">${area.basecamp.hotelIdea || ''}</span>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                        <span class="text-[9px] uppercase tracking-widest text-gray-400 font-bold block mb-3">Spostamenti</span>
                        <div class="space-y-3">
                            ${(area.basecamp.transports || []).slice(0,2).map(t => `
                                <div class="flex items-center gap-2">
                                    <div class="w-6 h-6 rounded-md bg-gray-50 flex items-center justify-center text-xs shrink-0">${t.icon}</div>
                                    <h5 class="text-[11px] font-bold text-gray-700">${t.title}</h5>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="bg-amber-50 rounded-2xl p-4 border border-amber-100/50 shadow-sm flex flex-col justify-center">
                        <span class="text-[9px] uppercase tracking-widest text-amber-500 font-bold block mb-2">Food</span>
                        <p class="text-[11px] text-amber-900 font-medium leading-snug line-clamp-3">${area.food || ''}</p>
                    </div>
                </div>
            </div>
        ` : '';

        // 2. ITINERARIO (Ora sta sotto, con il suo nuovo titoletto)
        let daysHtml = '';
        if (area.days && area.days.length > 0) {
            daysHtml = `
            <div class="mb-6">
                <span class="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">🗺️ Programma</span>
                <div class="border border-gray-200/70 rounded-[1.5rem] overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
                    <button onclick="toggleCollapse('days-area-${area.id}', this)" class="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50/50 transition-colors group outline-none">
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">📅</div>
                            <div class="text-left">
                                <h3 class="text-sm font-extrabold text-gray-900">Itinerario Giornaliero</h3>
                                <p class="text-[11px] text-gray-500 font-medium">Esplora i ${area.days.length} giorni nel dettaglio</p>
                            </div>
                        </div>
                        <div class="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 toggle-icon transition-transform">
                            <svg class="w-4 h-4 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </button>
                    <div id="days-area-${area.id}" class="hidden border-t border-gray-100 bg-gray-50/30 p-5">
                        <div class="space-y-3">
            `;
            area.days.forEach(day => {
                daysHtml += `
                            <a href="dettaglio.html?day=${day.id}" class="block bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-emerald-200 transition-all group relative overflow-hidden">
                                <div class="absolute top-0 left-0 w-1 h-full bg-gray-100 group-hover:bg-emerald-400 transition-colors"></div>
                                <div class="flex justify-between items-start mb-1 pl-2">
                                    <span class="text-xs font-black text-emerald-700 uppercase tracking-widest">${day.dayName}</span>
                                    <span class="text-[10px] text-gray-400 font-bold bg-gray-50 px-2 py-0.5 rounded-lg">📍 ${day.location}</span>
                                </div>
                                <h3 class="text-sm font-bold text-gray-900 pl-2">${day.title}</h3>
                            </a>
                `;
            });
            daysHtml += `</div></div></div></div>`;
        }

        contentDiv.innerHTML = `
            ${basecampHtml}
            ${daysHtml}
            <div class="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
                <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2 flex items-center">Risorse Utili:</span>
                ${linksHtml}
            </div>
        `;
        contentContainer.appendChild(contentDiv);

        // --- COLONNA SINISTRA (Wallet Collapsable sotto la mappa) ---
        const walletDiv = document.createElement('div');
        walletDiv.id = `wallet-area-${area.id}`;
        walletDiv.className = "wallet-content hidden"; // Nascosto di base per il routing

        if (area.budget || (area.reservations && area.reservations.length > 0)) {
            let resList = '';
            if (area.reservations) {
                resList = area.reservations.map(res => {
                    const badgeColor = res.type === 'success' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 'bg-orange-100 text-orange-700 border-orange-200';
                    return `
                    <div class="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
                        <span class="text-xs font-bold text-gray-700 truncate pr-2">${res.name}</span>
                        <span class="text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${badgeColor}">${res.status}</span>
                    </div>`;
                }).join('');
            }

            let budgetList = '';
            if (area.budget && area.budget.items) {
                budgetList = area.budget.items.map(item => `
                    <div class="flex items-center justify-between py-1.5">
                        <span class="text-[11px] text-gray-500">${item.name}</span>
                        <span class="text-[11px] font-bold text-gray-800">${item.cost}</span>
                    </div>
                `).join('');
            }

            walletDiv.innerHTML = `
            <div class="border border-gray-200/70 rounded-[1.5rem] overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
                <button onclick="toggleCollapse('wallet-collapse-${area.id}', this)" class="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50/50 transition-colors group outline-none">
                    <div class="flex items-center gap-4">
                        <div class="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 border border-gray-200">💼</div>
                        <div class="text-left">
                            <h3 class="text-sm font-extrabold text-gray-900">Wallet & Bookings</h3>
                            <p class="text-[11px] text-gray-500 font-medium">Budget e stato prenotazioni</p>
                        </div>
                    </div>
                    <div class="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 toggle-icon transition-transform">
                        <svg class="w-4 h-4 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </button>
                
                <div id="wallet-collapse-${area.id}" class="hidden border-t border-gray-100 bg-gray-50/30 p-5">
                    <div class="flex flex-col gap-5">
                        <div class="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                            <div class="flex justify-between items-end mb-4">
                                <div>
                                    <span class="text-[9px] uppercase tracking-widest text-gray-400 font-bold block">Budget Previsto</span>
                                    <span class="text-xl font-black text-gray-900">${area.budget ? area.budget.total : '€ 0'}</span>
                                </div>
                                <div class="text-right">
                                    <span class="text-[9px] uppercase tracking-widest text-rose-400 font-bold block">Speso</span>
                                    <span class="text-sm font-bold text-rose-600">${area.budget ? area.budget.spent : '€ 0'}</span>
                                </div>
                            </div>
                            <div class="pt-3 border-t border-gray-200">
                                ${budgetList}
                            </div>
                        </div>

                        <div class="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col">
                            <span class="text-[9px] uppercase tracking-widest text-gray-400 font-bold block mb-2">Stato Prenotazioni</span>
                            <div class="flex-grow flex flex-col justify-center">
                                ${resList || '<p class="text-xs text-gray-400 italic">Nessuna prenotazione inserita.</p>'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        }
        walletContainer.appendChild(walletDiv);
    });
}

function switchArea(areaId) {
    // 1. Aggiorna stile bottoni Navigazione
    tripData.areas.forEach(area => {
        const btn = document.getElementById(`nav-btn-${area.id}`);
        if(btn) {
            const subtitle = btn.querySelector('span:nth-child(2)');
            if(area.id === areaId) {
                btn.className = "py-3 px-2 text-xs sm:text-sm font-bold rounded-xl bg-emerald-50 text-emerald-900 shadow-sm border border-emerald-100 border-b-4 border-b-emerald-600 transition text-center flex flex-col items-center h-full justify-center";
                subtitle.className = "text-[10px] font-medium opacity-90 mt-1 text-emerald-700";
            } else {
                btn.className = "py-3 px-2 text-xs sm:text-sm font-bold rounded-xl bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition text-center border border-gray-200 border-b-4 border-transparent flex flex-col items-center h-full justify-center";
                subtitle.className = "text-[10px] font-normal opacity-70 mt-1";
            }
        }
    });

    // 2. Mostra/Nascondi blocchi colonna dx e sx
    tripData.areas.forEach(area => {
        const rightContent = document.getElementById(`content-area-${area.id}`);
        const leftWallet = document.getElementById(`wallet-area-${area.id}`);
        
        if(rightContent) rightContent.style.display = (area.id === areaId) ? 'block' : 'none';
        if(leftWallet) leftWallet.style.display = (area.id === areaId) ? 'block' : 'none';
    });

    // 3. Muovi la mappa e aggiorna la foto + testi overlay
    const selectedArea = tripData.areas.find(a => a.id === areaId);
    if(selectedArea) {
        if(selectedArea.mapFocus && map) {
            map.setView(selectedArea.mapFocus.coords, selectedArea.mapFocus.zoom, {animate: true});
        }
        
        const topImage = document.getElementById('dynamic-area-image');
        const topText = document.getElementById('dynamic-area-text');
        
        // Logica Colori dinamici per i badge sull'immagine
        const colors = [
            { bg: 'bg-emerald-500/80', text: 'text-white', dot: 'bg-white' },
            { bg: 'bg-amber-500/80', text: 'text-white', dot: 'bg-white' },
            { bg: 'bg-cyan-500/80', text: 'text-white', dot: 'bg-white' },
            { bg: 'bg-indigo-500/80', text: 'text-white', dot: 'bg-white' },
            { bg: 'bg-rose-500/80', text: 'text-white', dot: 'bg-white' }
        ];
        const areaIndex = tripData.areas.findIndex(a => a.id === areaId);
        const color = colors[areaIndex % colors.length];

        if (topText) {
            topText.style.opacity = 0;
            setTimeout(() => {
                topText.innerHTML = `
                    <div class="flex flex-wrap items-center gap-3 mb-3">
                        <span class="${color.bg} ${color.text} backdrop-blur-md border border-white/20 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                            <span class="w-1.5 h-1.5 rounded-full ${color.dot}"></span>
                            ${selectedArea.badge}
                        </span>
                        <span class="text-[11px] font-bold text-white/90 uppercase tracking-widest drop-shadow-md">${selectedArea.locationText}</span>
                    </div>
                    <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-lg mb-2">${selectedArea.title}</h2>
                    <p class="text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl drop-shadow-md">${selectedArea.description}</p>
                `;
                topText.style.opacity = 1;
            }, 150);
        }

        if (topImage && selectedArea.images && selectedArea.images.length > 0) {
            topImage.style.opacity = 0.5;
            setTimeout(() => {
                topImage.src = selectedArea.images[0];
                topImage.style.opacity = 1;
            }, 150);
        }
    }
}

function toggleCollapse(containerId, btn) {
    const container = document.getElementById(containerId);
    const icon = btn.querySelector('.toggle-icon svg');
    
    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        icon.classList.add('rotate-180');
    } else {
        container.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
}

function initMap() {
    map = L.map('map').setView([19.5, -93.0], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    tripData.locations.forEach(loc => {
        const marker = L.marker(loc.coords).addTo(map);
        marker.bindPopup(`<b>${loc.name}</b><br>${loc.days}`);
        
        marker.on('click', () => {
            switchArea(loc.areaId);
            map.setView(loc.coords, 9, {animate: true});
        });
    });
}


function generateFlights() {
    const container = document.getElementById('flight-modal-container');
    
    const createBoardingPass = (data) => `
        <div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-2 bg-${data.theme}-500"></div>
            <div class="flex justify-between items-center mb-6">
                <span class="bg-${data.theme}-100 text-${data.theme}-800 text-[10px] font-black uppercase px-3 py-1 rounded-full">${data.title}</span>
                <span class="text-xs font-bold text-slate-500">${data.date}</span>
            </div>
            <div class="flex justify-between items-center mb-3">
                <div class="text-left w-1/4">
                    <p class="text-3xl font-black text-slate-800">${data.leg1.from}</p>
                    <p class="text-[11px] text-slate-400">${data.leg1.fromTime} • ${data.leg1.fromTerm}</p>
                </div>
                <div class="flex-1 px-2 flex flex-col items-center justify-center relative">
                    <p class="text-[10px] text-slate-400 font-bold mb-1">${data.leg1.duration}</p>
                    <div class="w-full h-px border-t-2 border-dashed border-slate-200 relative">
                        <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300 text-lg">✈</span>
                    </div>
                    <p class="text-[10px] text-${data.theme}-600 font-bold mt-1">${data.leg1.flight}</p>
                </div>
                <div class="text-right w-1/4">
                    <p class="text-3xl font-black text-slate-800">${data.leg1.to}</p>
                    <p class="text-[11px] text-slate-400">${data.leg1.toTime} • ${data.leg1.toTerm}</p>
                </div>
            </div>
            <div class="flex items-center gap-2 my-4">
                <div class="h-px bg-slate-100 flex-1"></div>
                <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-md border border-slate-200">${data.layover}</span>
                <div class="h-px bg-slate-100 flex-1"></div>
            </div>
            <div class="flex justify-between items-center mt-3">
                <div class="text-left w-1/4">
                    <p class="text-3xl font-black text-slate-800">${data.leg2.from}</p>
                    <p class="text-[11px] text-slate-400">${data.leg2.fromTime} • ${data.leg2.fromTerm}</p>
                </div>
                <div class="flex-1 px-2 flex flex-col items-center justify-center relative">
                    <p class="text-[10px] text-slate-400 font-bold mb-1">${data.leg2.duration}</p>
                    <div class="w-full h-px border-t-2 border-dashed border-slate-200 relative">
                        <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300 text-lg">✈</span>
                    </div>
                    <p class="text-[10px] text-${data.theme}-600 font-bold mt-1">${data.leg2.flight}</p>
                </div>
                <div class="text-right w-1/4">
                    <p class="text-3xl font-black text-slate-800">${data.leg2.to}</p>
                    <p class="text-[11px] text-slate-400">${data.leg2.toTime} • ${data.leg2.toTerm}</p>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = `
        <div id="flight-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md transition-opacity">
            <div class="bg-gray-50 w-full max-w-5xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[95vh] border border-white/40 relative">
                <div class="px-8 py-5 flex justify-between items-center bg-white border-b border-gray-100">
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">✈️</span>
                        <div>
                            <h2 class="text-lg font-black text-slate-800 uppercase tracking-wide">Biglietti Aerei</h2>
                            <p class="text-xs text-slate-400 font-medium">Operato da ${flightData.operator} • Classe ${flightData.travelClass}</p>
                        </div>
                    </div>
                    <button onclick="toggleFlightModal()" class="h-10 w-10 bg-slate-100 text-slate-500 rounded-full hover:bg-red-100 hover:text-red-600 font-bold transition flex items-center justify-center">✕</button>
                </div>
                <div class="p-6 sm:p-8 overflow-y-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                    ${createBoardingPass(flightData.outbound)}
                    ${createBoardingPass(flightData.inbound)}
                </div>
            </div>
        </div>
    `;

    document.getElementById('flight-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            toggleFlightModal();
        }
    });
}

function toggleFlightModal() {
    const modal = document.getElementById('flight-modal');
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// ==========================================
// EFFETTO SFONDO: FIORITURA A SPIRALE AUREA (PHYLLOTAXIS)
// ==========================================

function initOrganicMosaic() {
    const canvas = document.getElementById('cempasuchil-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const COLORS = [
        '#f6ad55',
        '#ed8936',
        '#dd6b20',
        '#fbd38d',
        '#e87925'
    ];

    const CENTER_COLORS = [
        '#9c5a1a',
        '#a84f12',
        '#7c3f12'
    ];

    // --------------------------------------------------
    // ANIMAZIONE
    // --------------------------------------------------

    const BLOOM_DURATION = 12000;
    const FLOWER_OPEN_DURATION = 1100;

    // --------------------------------------------------
    // STRUTTURA DEL PATTERN
    // --------------------------------------------------

    const CLUSTER_COUNT = 7;
    const FLOWERS_PER_CLUSTER = 300;

    // --------------------------------------------------
    // 4 LIVELLI DI GRANDEZZA
    // --------------------------------------------------

    const SMALL_MIN = 7;
    const SMALL_MAX = 12;

    const MEDIUM_MIN = 13;
    const MEDIUM_MAX = 21;

    const LARGE_MIN = 23;
    const LARGE_MAX = 38;

    const HUGE_MIN = 42;
    const HUGE_MAX = 65;

    // Numero di grandi fiori distribuiti sopra il pattern.
    const LARGE_FLOWER_COUNT = 42;
    const HUGE_FLOWER_COUNT = 12;

    let width = 0;
    let height = 0;

    let flowers = [];

    let animationId = null;
    let startTime = 0;
    let resizeTimeout = null;

    // --------------------------------------------------
    // UTILITY
    // --------------------------------------------------

    function random(min, max) {
        return min + Math.random() * (max - min);
    }

    function choose(array) {
        return array[
            Math.floor(Math.random() * array.length)
        ];
    }

    function clamp(value, min, max) {
        return Math.max(
            min,
            Math.min(max, value)
        );
    }

    // --------------------------------------------------
    // GENERAZIONE
    // --------------------------------------------------

    function createFlowers() {
        flowers = [];

        /*
         * I nuclei vengono disposti su tutto il canvas.
         * Le loro spirali sono abbastanza grandi da fondersi
         * tra loro e creare una superficie continua.
         */

        const cols = Math.ceil(
            Math.sqrt(CLUSTER_COUNT)
        );

        const rows = Math.ceil(
            CLUSTER_COUNT / cols
        );

        const cellW =
            width / cols;

        const cellH =
            height / rows;

        for (
            let cluster = 0;
            cluster < CLUSTER_COUNT;
            cluster++
        ) {
            const col =
                cluster % cols;

            const row =
                Math.floor(
                    cluster / cols
                );

            const centerX =
                col * cellW +
                cellW * random(
                    0.22,
                    0.78
                );

            const centerY =
                row * cellH +
                cellH * random(
                    0.22,
                    0.78
                );

            /*
             * Manteniamo la dimensione delle spirali
             * che funzionava bene nella versione precedente.
             */

            const maxRadius =
                Math.hypot(
                    width,
                    height
                ) *
                random(
                    0.29,
                    0.37
                );

            const turns =
                random(
                    2.6,
                    3.6
                );

            const startAngle =
                random(
                    0,
                    Math.PI * 2
                );

            for (
                let i = 0;
                i < FLOWERS_PER_CLUSTER;
                i++
            ) {
                const t =
                    i /
                    (FLOWERS_PER_CLUSTER - 1);

                /*
                 * Spirale principale.
                 */

                const spiralAngle =
                    startAngle +
                    t *
                        Math.PI *
                        2 *
                        turns;

                const spiralRadius =
                    Math.pow(
                        t,
                        0.72
                    ) *
                    maxRadius;

                /*
                 * Banda larga attorno alla spirale:
                 * non una linea, ma una massa floreale.
                 */

                const spread =
                    20 +
                    Math.pow(
                        t,
                        0.60
                    ) *
                        82;

                const radialOffset =
                    random(
                        -spread,
                        spread
                    );

                const tangentialOffset =
                    random(
                        -spread * 0.70,
                        spread * 0.70
                    );

                const angleOffset =
                    tangentialOffset /
                    Math.max(
                        spiralRadius,
                        25
                    );

                const finalAngle =
                    spiralAngle +
                    angleOffset;

                const finalRadius =
                    Math.max(
                        0,
                        spiralRadius +
                            radialOffset
                    );

                /*
                 * Piccolo movimento organico.
                 */

                const organicWave =
                    Math.sin(
                        t *
                            Math.PI *
                            8 +
                            cluster *
                                1.73
                    ) *
                    5;

                const x =
                    centerX +
                    Math.cos(
                        finalAngle
                    ) *
                        (
                            finalRadius +
                            organicWave
                        );

                const y =
                    centerY +
                    Math.sin(
                        finalAngle
                    ) *
                        (
                            finalRadius +
                            organicWave
                        );

                if (
                    x < -80 ||
                    x > width + 80 ||
                    y < -80 ||
                    y > height + 80
                ) {
                    continue;
                }

                /*
                 * Distribuzione dei diversi livelli.
                 *
                 * La grandezza non cambia in funzione della
                 * spirale: abbiamo una vera stratificazione
                 * botanica, con tanti fiori di varie dimensioni.
                 */

                const sizeRoll = Math.random();

                let size;
                let sizeLevel;

                if (sizeRoll < 0.67) {
                    size =
                        random(
                            SMALL_MIN,
                            SMALL_MAX
                        );

                    sizeLevel = 'small';
                } else if (sizeRoll < 0.91) {
                    size =
                        random(
                            MEDIUM_MIN,
                            MEDIUM_MAX
                        );

                    sizeLevel = 'medium';
                } else if (sizeRoll < 0.985) {
                    size =
                        random(
                            LARGE_MIN,
                            LARGE_MAX
                        );

                    sizeLevel = 'large';
                } else {
                    size =
                        random(
                            HUGE_MIN,
                            HUGE_MAX
                        );

                    sizeLevel = 'huge';
                }

                flowers.push({
                    x,
                    y,

                    radius: size,

                    rotation:
                        finalAngle +
                        Math.PI / 2 +
                        random(
                            -0.8,
                            0.8
                        ),

                    color:
                        choose(COLORS),

                    centerColor:
                        choose(
                            CENTER_COLORS
                        ),

                    phase:
                        random(
                            0,
                            Math.PI * 2
                        ),

                    sizeLevel,

                    /*
                     * Fioritura dal centro verso l'esterno.
                     */

                    bloomOffset:
                        t *
                            (
                                BLOOM_DURATION *
                                0.82
                            ) +
                        cluster *
                            100 +
                        random(
                            -180,
                            180
                        ),

                    large:
                        sizeLevel === 'large' ||
                        sizeLevel === 'huge'
                });
            }
        }

        // --------------------------------------------------
        // RIEMPIMENTO DEL PIANO
        // --------------------------------------------------

        /*
         * Questo layer non segue la spirale:
         * serve esclusivamente a togliere eventuali buchi
         * tra una spirale e l'altra.
         */

        const areaFlowers =
            Math.floor(
                (
                    width *
                    height
                ) /
                1500
            );

        for (
            let i = 0;
            i < areaFlowers;
            i++
        ) {
            const sizeRoll =
                Math.random();

            let size;
            let sizeLevel;

            if (sizeRoll < 0.73) {
                size =
                    random(
                        SMALL_MIN,
                        SMALL_MAX
                    );

                sizeLevel = 'small';
            } else if (sizeRoll < 0.96) {
                size =
                    random(
                        MEDIUM_MIN,
                        MEDIUM_MAX
                    );

                sizeLevel = 'medium';
            } else {
                size =
                    random(
                        LARGE_MIN,
                        LARGE_MAX
                    );

                sizeLevel = 'large';
            }

            flowers.push({
                x:
                    random(
                        -30,
                        width + 30
                    ),

                y:
                    random(
                        -30,
                        height + 30
                    ),

                radius:
                    size,

                rotation:
                    random(
                        0,
                        Math.PI * 2
                    ),

                color:
                    choose(COLORS),

                centerColor:
                    choose(
                        CENTER_COLORS
                    ),

                phase:
                    random(
                        0,
                        Math.PI * 2
                    ),

                sizeLevel,

                /*
                 * Il riempimento arriva leggermente dopo
                 * la crescita principale.
                 */

                bloomOffset:
                    BLOOM_DURATION *
                        random(
                            0.48,
                            0.84
                        ),

                large:
                    sizeLevel === 'large'
            });
        }

        // --------------------------------------------------
        // LAYER DI GRANDI FIORI
        // --------------------------------------------------

        /*
         * Questi sono veri protagonisti:
         * grandi corolle arancioni che emergono sopra
         * la massa di piccoli fiori.
         */

        for (
            let i = 0;
            i < LARGE_FLOWER_COUNT;
            i++
        ) {
            flowers.push({
                x:
                    random(
                        -40,
                        width + 40
                    ),

                y:
                    random(
                        -40,
                        height + 40
                    ),

                radius:
                    random(
                        LARGE_MIN,
                        LARGE_MAX
                    ),

                rotation:
                    random(
                        0,
                        Math.PI * 2
                    ),

                color:
                    choose(
                        [
                            '#ed8936',
                            '#dd6b20',
                            '#f6ad55'
                        ]
                    ),

                centerColor:
                    choose(
                        CENTER_COLORS
                    ),

                phase:
                    random(
                        0,
                        Math.PI * 2
                    ),

                sizeLevel:
                    'large',

                /*
                 * Questo livello entra da metà animazione.
                 */

                bloomOffset:
                    BLOOM_DURATION *
                        random(
                            0.46,
                            0.64
                        ),

                large: true
            });
        }

        // --------------------------------------------------
        // ULTIMO LIVELLO: FIORI ENORMI
        // --------------------------------------------------

        for (
            let i = 0;
            i < HUGE_FLOWER_COUNT;
            i++
        ) {
            flowers.push({
                x:
                    random(
                        -60,
                        width + 60
                    ),

                y:
                    random(
                        -60,
                        height + 60
                    ),

                radius:
                    random(
                        HUGE_MIN,
                        HUGE_MAX
                    ),

                rotation:
                    random(
                        0,
                        Math.PI * 2
                    ),

                color:
                    choose(
                        [
                            '#dd6b20',
                            '#ed8936',
                            '#f6ad55'
                        ]
                    ),

                centerColor:
                    choose(
                        CENTER_COLORS
                    ),

                phase:
                    random(
                        0,
                        Math.PI * 2
                    ),

                sizeLevel:
                    'huge',

                /*
                 * I fiori enormi arrivano più tardi,
                 * creando un vero secondo/terzo piano visivo.
                 */

                bloomOffset:
                    BLOOM_DURATION *
                        random(
                            0.58,
                            0.76
                        ),

                large: true
            });
        }

        /*
         * I fiori enormi devono essere gli ultimi
         * a completare la fioritura.
         */

        flowers.sort(
            (a, b) =>
                a.bloomOffset -
                b.bloomOffset
        );
    }

    // --------------------------------------------------
    // DISEGNO DEL CEMPASÚCHIL
    // --------------------------------------------------

    function drawFlower(
        flower,
        progress
    ) {
        if (progress <= 0) return;

        const bloom =
            Math.min(
                1,
                progress
            );

        /*
         * Ease-out molto morbido.
         */

        const eased =
            1 -
            Math.pow(
                1 - bloom,
                3
            );

        const size =
            flower.radius *
            eased;

        /*
         * Un cempasúchil più realistico non ha
         * 5 petali lisci: ha molti piccoli petali
         * sovrapposti e arrotondati.
         */

        let petalCount;
        let layers;
        let petalLength;
        let petalWidth;

        if (
            flower.sizeLevel === 'huge'
        ) {
            petalCount = 20;
            layers = 4;
            petalLength = size * 0.88;
            petalWidth = size * 0.34;
        } else if (
            flower.sizeLevel === 'large'
        ) {
            petalCount = 18;
            layers = 4;
            petalLength = size * 0.90;
            petalWidth = size * 0.36;
        } else if (
            flower.sizeLevel === 'medium'
        ) {
            petalCount = 15;
            layers = 3;
            petalLength = size * 0.92;
            petalWidth = size * 0.39;
        } else {
            petalCount = 12;
            layers = 2;
            petalLength = size * 0.95;
            petalWidth = size * 0.42;
        }

        /*
         * I fiori grandi sono leggermente più trasparenti.
         */

        const alpha =
            flower.sizeLevel === 'huge'
                ? 0.17 + eased * 0.32
                : flower.sizeLevel === 'large'
                    ? 0.18 + eased * 0.34
                    : 0.20 + eased * 0.46;

        ctx.save();

        ctx.translate(
            flower.x,
            flower.y
        );

        ctx.rotate(
            flower.rotation
        );

        ctx.globalAlpha =
            alpha;

        /*
         * ------------------------------------------------
         * COROLLA MULTISTRATO
         * ------------------------------------------------
         */

        for (
            let layer = 0;
            layer < layers;
            layer++
        ) {
            /*
             * I petali interni sono più corti e verticali.
             * Quelli esterni diventano progressivamente più larghi.
             */

            const layerProgress =
                layer /
                Math.max(
                    1,
                    layers - 1
                );

            const currentLength =
                petalLength *
                (
                    0.54 +
                    layerProgress *
                        0.46
                );

            const currentWidth =
                petalWidth *
                (
                    0.68 +
                    layerProgress *
                        0.32
                );

            const layerOffset =
                layerProgress *
                0.18;

            const layerRotation =
                layer *
                    0.13 +
                flower.phase *
                    0.08;

            for (
                let i = 0;
                i < petalCount;
                i++
            ) {
                const angle =
                    (
                        Math.PI * 2 * i
                    ) /
                    petalCount +
                    layerRotation;

                ctx.save();

                ctx.rotate(
                    angle
                );

                /*
                 * Leggera variazione individuale
                 * dei petali per evitare il look sintetico.
                 */

                const localWave =
                    Math.sin(
                        flower.phase +
                        i * 1.83 +
                        layer * 2.1
                    );

                const lengthVariation =
                    0.94 +
                    localWave *
                        0.035;

                const widthVariation =
                    0.92 +
                    Math.sin(
                        flower.phase +
                        i * 2.37
                    ) *
                        0.07;

                const L =
                    currentLength *
                    lengthVariation;

                const W =
                    currentWidth *
                    widthVariation;

                /*
                 * Petalo a forma di linguetta tondeggiante,
                 * molto più vicino alla corolla compatta
                 * del cempasúchil.
                 */

                ctx.beginPath();

                ctx.moveTo(
                    0,
                    layerOffset * size
                );

                /*
                 * Base sinistra.
                 */

                ctx.bezierCurveTo(
                    -W * 0.72,
                    L * 0.10,

                    -W,
                    L * 0.43,

                    -W * 0.72,
                    L * 0.74
                );

                /*
                 * Punta larga e arrotondata.
                 */

                ctx.bezierCurveTo(
                    -W * 0.48,
                    L * 0.96,

                    W * 0.48,
                    L * 0.96,

                    W * 0.72,
                    L * 0.74
                );

                /*
                 * Ritorno sul lato destro.
                 */

                ctx.bezierCurveTo(
                    W,
                    L * 0.43,

                    W * 0.72,
                    L * 0.10,

                    0,
                    layerOffset * size
                );

                /*
                 * Piccola asimmetria sulla base
                 * per evitare petali perfettamente matematici.
                 */

                ctx.quadraticCurveTo(
                    -W * 0.16,
                    L * 0.24,
                    0,
                    layerOffset * size
                );

                ctx.fillStyle =
                    layer === 0
                        ? flower.color
                        : (
                            layer % 2 === 0
                                ? flower.color
                                : choose(
                                    [
                                        flower.color,
                                        '#f6ad55',
                                        '#ed8936'
                                    ]
                                )
                        );

                ctx.fill();

                ctx.restore();
            }
        }

        /*
         * ------------------------------------------------
         * CENTRO PROFONDO
         * ------------------------------------------------
         *
         * Nei fiori grandi il centro è più evidente,
         * con più livelli di piccoli petali centrali.
         */

        const centerSize =
            size *
            (
                flower.sizeLevel === 'huge'
                    ? 0.22
                    : flower.sizeLevel === 'large'
                        ? 0.21
                        : 0.19
            );

        ctx.globalAlpha =
            flower.sizeLevel === 'huge'
                ? 0.40 + eased * 0.38
                : flower.sizeLevel === 'large'
                    ? 0.44 + eased * 0.36
                    : 0.46 + eased * 0.34;

        ctx.fillStyle =
            flower.centerColor;

        ctx.beginPath();

        ctx.arc(
            0,
            0,
            centerSize,
            0,
            Math.PI * 2
        );

        ctx.fill();

        /*
         * Piccolo nucleo centrale più scuro.
         */

        if (
            flower.sizeLevel === 'large' ||
            flower.sizeLevel === 'huge'
        ) {
            ctx.globalAlpha =
                0.30 +
                eased *
                    0.30;

            ctx.fillStyle =
                '#713b10';

            ctx.beginPath();

            ctx.arc(
                0,
                0,
                centerSize * 0.42,
                0,
                Math.PI * 2
            );

            ctx.fill();
        }

        ctx.restore();
    }

    // --------------------------------------------------
    // RENDER
    // --------------------------------------------------

    function render(timestamp) {
        const elapsed =
            timestamp -
            startTime;

        ctx.clearRect(
            0,
            0,
            width,
            height
        );

        for (
            const flower of flowers
        ) {
            const progress =
                (
                    elapsed -
                    flower.bloomOffset
                ) /
                FLOWER_OPEN_DURATION;

            drawFlower(
                flower,
                progress
            );
        }

        /*
         * Troviamo realmente il momento in cui l'ultimo
         * fiore ha finito di aprirsi, invece di basarci
         * semplicemente su BLOOM_DURATION.
         */

        const lastBloomEnd =
            flowers.length
                ? Math.max(
                    ...flowers.map(
                        flower =>
                            flower.bloomOffset
                    )
                ) +
                    FLOWER_OPEN_DURATION
                : BLOOM_DURATION;

        if (
            elapsed <
            lastBloomEnd
        ) {
            animationId =
                requestAnimationFrame(
                    render
                );
        } else {
            animationId = null;
        }
    }

    // --------------------------------------------------
    // RESIZE
    // --------------------------------------------------

    function resize() {
        if (
            animationId !== null
        ) {
            cancelAnimationFrame(
                animationId
            );

            animationId = null;
        }

        clearTimeout(
            resizeTimeout
        );

        resizeTimeout =
            setTimeout(
                () => {
                    const dpr =
                        Math.min(
                            window.devicePixelRatio ||
                                1,
                            2
                        );

                    width =
                        window.innerWidth;

                    height =
                        window.innerHeight;

                    canvas.width =
                        Math.round(
                            width *
                                dpr
                        );

                    canvas.height =
                        Math.round(
                            height *
                                dpr
                        );

                    canvas.style.width =
                        `${width}px`;

                    canvas.style.height =
                        `${height}px`;

                    ctx.setTransform(
                        dpr,
                        0,
                        0,
                        dpr,
                        0,
                        0
                    );

                    ctx.clearRect(
                        0,
                        0,
                        width,
                        height
                    );

                    createFlowers();

                    startTime =
                        performance.now();

                    animationId =
                        requestAnimationFrame(
                            render
                        );
                },
                100
            );
    }

    window.addEventListener(
        'resize',
        resize,
        {
            passive: true
        }
    );

    resize();
}
