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
    initOrganicMosaic();

    // RECUPERA L'ULTIMA AREA VISITATA (se non c'è, usa 1 di default)
    const savedArea = localStorage.getItem('activeTripArea');
    const initialArea = savedArea ? parseInt(savedArea) : 1;
    switchArea(initialArea);
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

        // 1. LOGISTICA 
        const basecampHtml = area.basecamp ? `
            <div class="mb-8">
                <span class="block text-[11px] font-black text-amber-800 uppercase tracking-widest mb-4">⛺ Logistica Base</span>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <!-- Box Dove Dormire: Stile Notte Messicana / Blu Cobalto -->
                    <div class="bg-blue-950 text-white rounded-2xl p-4 shadow-md relative overflow-hidden border border-blue-900">
                        <div class="absolute -right-4 -top-4 w-20 h-20 bg-amber-500/20 rounded-full blur-xl"></div>
                        <span class="text-[9px] uppercase tracking-widest text-amber-400 font-bold block mb-1">Dove Dormire</span>
                        <h4 class="text-sm font-bold mb-2 relative z-10">${area.basecamp.zone || ''}</h4>
                        <div class="flex items-center gap-2 mt-3 pt-3 border-t border-white/10 relative z-10">
                            <span class="text-lg">🛖</span>
                            <span class="text-[10px] text-blue-100 font-medium leading-tight">${area.basecamp.hotelIdea || ''}</span>
                        </div>
                    </div>
                    <!-- Box Spostamenti -->
                    <div class="bg-white rounded-2xl p-4 border border-amber-100 shadow-sm">
                        <span class="text-[9px] uppercase tracking-widest text-amber-700 font-bold block mb-3">Spostamenti</span>
                        <div class="space-y-3">
                            ${(area.basecamp.transports || []).slice(0,2).map(t => `
                                <div class="flex items-center gap-2">
                                    <div class="w-6 h-6 rounded-md bg-amber-50 flex items-center justify-center text-xs shrink-0">${t.icon}</div>
                                    <h5 class="text-[11px] font-bold text-gray-700">${t.title}</h5>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <!-- Box Food: Colore Terracotta / Speziato -->
                    <div class="bg-orange-50 rounded-2xl p-4 border border-orange-200 shadow-sm flex flex-col justify-center">
                        <span class="text-[9px] uppercase tracking-widest text-orange-600 font-bold block mb-2">🌮 Food & Sapori</span>
                        <p class="text-[11px] text-orange-950 font-medium leading-snug line-clamp-3">${area.food || ''}</p>
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
    // SALVA LA SCELTA NELLA MEMORIA DEL BROWSER
    localStorage.setItem('activeTripArea', areaId);

    // Palette messicana dinamica per i bottoni e i dettagli
    const mexThemes = [
        { activeBg: 'bg-amber-500 text-white shadow-lg shadow-amber-500/30 border-amber-600', subText: 'text-amber-100' },     // Cempasúchil
        { activeBg: 'bg-pink-600 text-white shadow-lg shadow-pink-600/30 border-pink-700', subText: 'text-pink-100' },         // Rosa Mexicano
        { activeBg: 'bg-teal-700 text-white shadow-lg shadow-teal-700/30 border-teal-800', subText: 'text-teal-100' },         // Caraibi / Cenote
        { activeBg: 'bg-blue-800 text-white shadow-lg shadow-blue-800/30 border-blue-900', subText: 'text-blue-100' },         // Blu Talavera
        { activeBg: 'bg-orange-700 text-white shadow-lg shadow-orange-700/30 border-orange-800', subText: 'text-orange-100' }    // Terracotta
    ];

    // 1. Aggiorna stile bottoni Navigazione
    tripData.areas.forEach((area, index) => {
        const btn = document.getElementById(`nav-btn-${area.id}`);
        if(btn) {
            const subtitle = btn.querySelector('span:nth-child(2)');
            const theme = mexThemes[index % mexThemes.length];
            
            if(area.id === areaId) {
                btn.className = `py-3 px-2 text-xs sm:text-sm font-extrabold rounded-xl transition text-center flex flex-col items-center h-full justify-center border-b-4 ${theme.activeBg}`;
                subtitle.className = `text-[10px] font-medium mt-1 ${theme.subText}`;
            } else {
                btn.className = "py-3 px-2 text-xs sm:text-sm font-bold rounded-xl bg-white/80 text-gray-600 hover:bg-amber-50 hover:text-amber-900 transition text-center border border-amber-200/60 border-b-4 border-transparent flex flex-col items-center h-full justify-center shadow-sm";
                subtitle.className = "text-[10px] font-normal opacity-70 mt-1 text-gray-500";
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
        // Sostituisci l'array dei colori in switchArea con questa palette messicana:
        const colors = [
            { bg: 'bg-amber-100/80', text: 'text-amber-900', dot: 'bg-amber-600' },     // Cempasúchil (Giallo Sole)
            { bg: 'bg-pink-100/80', text: 'text-pink-900', dot: 'bg-pink-600' },         // Rosa Mexicano
            { bg: 'bg-teal-100/80', text: 'text-teal-900', dot: 'bg-teal-600' },         // Cenote / Caraibi
            { bg: 'bg-blue-100/80', text: 'text-blue-900', dot: 'bg-blue-700' },         // Blu Talavera
            { bg: 'bg-orange-100/80', text: 'text-orange-900', dot: 'bg-orange-600' }    // Terracotta Speziata
        ];
        const areaIndex = tripData.areas.findIndex(a => a.id === areaId);
        const color = colors[areaIndex % colors.length];

        if (topText) {
            topText.style.opacity = 0;
            setTimeout(() => {
                topText.innerHTML = `
                    <div class="flex items-center gap-2 mb-2">

                        <span class="w-6 h-px bg-orange-300/70"></span>

                        <span class="
                            text-[9px] sm:text-[10px]
                            font-black
                            uppercase
                            tracking-[0.2em]
                            text-orange-200
                            drop-shadow-md
                        ">
                            ${selectedArea.locationText}
                        </span>

                    </div>

                    <h2 class="
                        text-2xl sm:text-3xl lg:text-4xl
                        font-black
                        text-white
                        tracking-tight
                        leading-[1.05]
                        drop-shadow-lg
                        mb-2
                    ">
                        ${selectedArea.title}
                    </h2>

                    <p class="
                        text-xs sm:text-sm
                        text-white/80
                        leading-relaxed
                        max-w-2xl
                        drop-shadow-md
                    ">
                        ${selectedArea.description}
                    </p>
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

    const TWO_PI = Math.PI * 2;

    const COLORS = ['#f6ad55', '#ed8936', '#dd6b20', '#fbd38d', '#e87925'];
    const CENTER_COLORS = ['#9c5a1a', '#a84f12', '#7c3f12'];
    const LARGE_LAYER_COLORS = ['#ed8936', '#dd6b20', '#f6ad55'];
    const HUGE_LAYER_COLORS = ['#dd6b20', '#ed8936', '#f6ad55'];

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

    const SMALL_MIN = 7, SMALL_MAX = 12;
    const MEDIUM_MIN = 13, MEDIUM_MAX = 21;
    const LARGE_MIN = 23, LARGE_MAX = 38;
    const HUGE_MIN = 42, HUGE_MAX = 65;

    const LARGE_FLOWER_COUNT = 42;
    const HUGE_FLOWER_COUNT = 12;

    // --------------------------------------------------
    // LAYOUT: MARGINI PIENI, CENTRO RAREFATTO,
    // FASCE ALTA E BASSA PIÙ DENSE
    // --------------------------------------------------

    /*
     * Componente orizzontale: la colonna di lettura (max-w-7xl = 1280px)
     * sta al centro. Fuori i fiori sono densi, dentro radi e sfumati.
     */
    const CONTENT_MAX_WIDTH = 1280;  // max-w-7xl
    const CONTENT_PADDING = 32;      // padding orizzontale dei box (px-8)
    const FADE_BAND = 200;           // larghezza della transizione laterale
    const MIN_MARGIN = 96;           // sotto questo margine l'effetto laterale si disattiva

    /*
     * Componente verticale: vicino al bordo alto e basso della viewport
     * la densità risale anche dentro la colonna centrale.
     */
    const VERTICAL_BAND = 220;       // altezza della fascia alta/bassa (px)
    const VERTICAL_STRENGTH = 0.75;  // quanto le fasce si avvicinano alla densità dei margini (0–1)

    const CENTER_DENSITY = 0.22;     // probabilità di tenere un fiore nel centro "puro"
    const CENTER_ALPHA = 0.50;       // opacità nel centro "puro"
    const MARGIN_BOOST = 1.7;        // candidati extra per il riempimento (finiscono nelle zone permesse)

    const PROFILES = {
        small: {
            petalCount: 12, layers: 2, lengthK: 0.95, widthK: 0.42,
            alphaBase: 0.20, alphaGain: 0.46,
            centerK: 0.19, centerAlphaBase: 0.46, centerAlphaGain: 0.34,
            core: false
        },
        medium: {
            petalCount: 15, layers: 3, lengthK: 0.92, widthK: 0.39,
            alphaBase: 0.20, alphaGain: 0.46,
            centerK: 0.19, centerAlphaBase: 0.46, centerAlphaGain: 0.34,
            core: false
        },
        large: {
            petalCount: 18, layers: 4, lengthK: 0.90, widthK: 0.36,
            alphaBase: 0.18, alphaGain: 0.34,
            centerK: 0.21, centerAlphaBase: 0.44, centerAlphaGain: 0.36,
            core: true
        },
        huge: {
            petalCount: 20, layers: 4, lengthK: 0.88, widthK: 0.34,
            alphaBase: 0.17, alphaGain: 0.32,
            centerK: 0.22, centerAlphaBase: 0.40, centerAlphaGain: 0.38,
            core: true
        }
    };

    for (const key in PROFILES) {
        const p = PROFILES[key];
        p.petalStep = TWO_PI / p.petalCount;
        p.layerData = [];
        for (let layer = 0; layer < p.layers; layer++) {
            const lp = layer / Math.max(1, p.layers - 1);
            p.layerData.push({
                lengthMul: 0.54 + lp * 0.46,
                widthMul: 0.68 + lp * 0.32,
                offset: lp * 0.18,
                rotation: layer * 0.13,
                randomColor: layer % 2 === 1
            });
        }
    }

    let width = 0;
    let height = 0;

    let flowers = [];
    let lastBloomEnd = BLOOM_DURATION;

    let animationId = null;
    let startTime = 0;
    let resizeTimeout = null;

    // Stato del layout, ricalcolato ad ogni resize.
    let contentHalf = 0;
    let layoutActive = false;

    // Layer statico dove vengono "cotti" i fiori già completamente sbocciati.
    const bakedCanvas = document.createElement('canvas');
    const bakedCtx = bakedCanvas.getContext('2d', { alpha: true });
    let bakedIndex = 0;

    // --------------------------------------------------
    // UTILITY
    // --------------------------------------------------

    function random(min, max) {
        return min + Math.random() * (max - min);
    }

    function choose(array) {
        return array[(Math.random() * array.length) | 0];
    }

    function smoothstep(t) {
        if (t <= 0) return 0;
        if (t >= 1) return 1;
        return t * t * (3 - 2 * t);
    }

    /*
     * Peso complessivo di un punto: 1 = zona piena (margini laterali),
     * 0 = centro "puro" (colonna di lettura, a metà altezza).
     */
    function weightAt(x, y) {
        if (!layoutActive) return 1;

        // Componente orizzontale: distanza dal bordo della colonna.
        const dx = Math.abs(x - width / 2) - contentHalf; // > 0 fuori dal contenuto
        const wx = smoothstep((dx + FADE_BAND / 2) / FADE_BAND);

        // Componente verticale: vicinanza al bordo alto o basso.
        const dy = Math.min(y, height - y);               // distanza dal bordo più vicino
        const wy = (1 - smoothstep(dy / VERTICAL_BAND)) * VERTICAL_STRENGTH;

        return Math.max(wx, wy);
    }

    // Decide se generare un fiore in (x, y).
    function keepAt(x, y) {
        return Math.random() < CENTER_DENSITY + (1 - CENTER_DENSITY) * weightAt(x, y);
    }

    // Moltiplicatore di opacità in (x, y).
    function fadeAt(x, y) {
        return CENTER_ALPHA + (1 - CENTER_ALPHA) * weightAt(x, y);
    }

    /*
     * Estrae un punto nel rettangolo dato rispettando la distribuzione
     * di densità. Il risultato viene lasciato in sampledX / sampledY.
     */
    let sampledX = 0;
    let sampledY = 0;

    function samplePoint(margin) {
        sampledX = random(-margin, width + margin);
        sampledY = random(-margin, height + margin);
        for (let tries = 0; tries < 24 && !keepAt(sampledX, sampledY); tries++) {
            sampledX = random(-margin, width + margin);
            sampledY = random(-margin, height + margin);
        }
    }

    function makeFlower(x, y, radius, rotation, color, centerColor, sizeLevel, bloomOffset) {
        const profile = PROFILES[sizeLevel];
        const phase = random(0, TWO_PI);
        const petalCount = profile.petalCount;
        const layers = profile.layers;

        const lengthVar = new Float64Array(petalCount * layers);
        const widthVar = new Float64Array(petalCount);

        for (let i = 0; i < petalCount; i++) {
            widthVar[i] = 0.92 + Math.sin(phase + i * 2.37) * 0.07;
            for (let layer = 0; layer < layers; layer++) {
                lengthVar[layer * petalCount + i] =
                    0.94 + Math.sin(phase + i * 1.83 + layer * 2.1) * 0.035;
            }
        }

        return {
            x, y, radius, rotation, color, centerColor, phase,
            sizeLevel, bloomOffset, profile, lengthVar, widthVar,
            fade: fadeAt(x, y)
        };
    }

    // --------------------------------------------------
    // GENERAZIONE
    // --------------------------------------------------

    function createFlowers() {
        flowers = [];

        contentHalf = CONTENT_MAX_WIDTH / 2 + CONTENT_PADDING;
        layoutActive = (width / 2 - contentHalf) >= MIN_MARGIN;

        // --------------------------------------------------
        // SPIRALI
        // --------------------------------------------------

        const cols = Math.ceil(Math.sqrt(CLUSTER_COUNT));
        const rows = Math.ceil(CLUSTER_COUNT / cols);
        const cellW = width / cols;
        const cellH = height / rows;
        const diagonal = Math.hypot(width, height);
        const bloomSpan = BLOOM_DURATION * 0.82;

        for (let cluster = 0; cluster < CLUSTER_COUNT; cluster++) {
            const col = cluster % cols;
            const row = (cluster / cols) | 0;

            const centerX = col * cellW + cellW * random(0.22, 0.78);
            const centerY = row * cellH + cellH * random(0.22, 0.78);

            const maxRadius = diagonal * random(0.29, 0.37);
            const turns = random(2.6, 3.6);
            const startAngle = random(0, TWO_PI);
            const wavePhase = cluster * 1.73;
            const clusterDelay = cluster * 100;

            for (let i = 0; i < FLOWERS_PER_CLUSTER; i++) {
                const t = i / (FLOWERS_PER_CLUSTER - 1);

                const spiralAngle = startAngle + t * TWO_PI * turns;
                const spiralRadius = Math.pow(t, 0.72) * maxRadius;

                const spread = 20 + Math.pow(t, 0.60) * 82;
                const radialOffset = random(-spread, spread);
                const tangentialOffset = random(-spread * 0.70, spread * 0.70);
                const angleOffset = tangentialOffset / Math.max(spiralRadius, 25);

                const finalAngle = spiralAngle + angleOffset;
                const finalRadius = Math.max(0, spiralRadius + radialOffset);

                const r = finalRadius + Math.sin(t * Math.PI * 8 + wavePhase) * 5;

                const x = centerX + Math.cos(finalAngle) * r;
                const y = centerY + Math.sin(finalAngle) * r;

                if (x < -80 || x > width + 80 || y < -80 || y > height + 80) {
                    continue;
                }

                // Rarefazione nella colonna centrale (tranne fasce alta/bassa).
                if (!keepAt(x, y)) continue;

                const sizeRoll = Math.random();
                let size, sizeLevel;

                if (sizeRoll < 0.67) {
                    size = random(SMALL_MIN, SMALL_MAX);
                    sizeLevel = 'small';
                } else if (sizeRoll < 0.91) {
                    size = random(MEDIUM_MIN, MEDIUM_MAX);
                    sizeLevel = 'medium';
                } else if (sizeRoll < 0.985) {
                    size = random(LARGE_MIN, LARGE_MAX);
                    sizeLevel = 'large';
                } else {
                    size = random(HUGE_MIN, HUGE_MAX);
                    sizeLevel = 'huge';
                }

                flowers.push(makeFlower(
                    x, y, size,
                    finalAngle + Math.PI / 2 + random(-0.8, 0.8),
                    choose(COLORS),
                    choose(CENTER_COLORS),
                    sizeLevel,
                    t * bloomSpan + clusterDelay + random(-180, 180)
                ));
            }
        }

        // --------------------------------------------------
        // RIEMPIMENTO DEL PIANO
        // --------------------------------------------------

        const boost = layoutActive ? MARGIN_BOOST : 1;
        const areaFlowers = Math.floor((width * height) / 1500 * boost);

        for (let i = 0; i < areaFlowers; i++) {
            const x = random(-30, width + 30);
            const y = random(-30, height + 30);
            if (!keepAt(x, y)) continue;

            const sizeRoll = Math.random();
            let size, sizeLevel;

            if (sizeRoll < 0.73) {
                size = random(SMALL_MIN, SMALL_MAX);
                sizeLevel = 'small';
            } else if (sizeRoll < 0.96) {
                size = random(MEDIUM_MIN, MEDIUM_MAX);
                sizeLevel = 'medium';
            } else {
                size = random(LARGE_MIN, LARGE_MAX);
                sizeLevel = 'large';
            }

            flowers.push(makeFlower(
                x, y, size,
                random(0, TWO_PI),
                choose(COLORS),
                choose(CENTER_COLORS),
                sizeLevel,
                BLOOM_DURATION * random(0.48, 0.84)
            ));
        }

        // --------------------------------------------------
        // LAYER DI GRANDI FIORI
        // --------------------------------------------------

        for (let i = 0; i < LARGE_FLOWER_COUNT; i++) {
            samplePoint(40);
            flowers.push(makeFlower(
                sampledX, sampledY,
                random(LARGE_MIN, LARGE_MAX),
                random(0, TWO_PI),
                choose(LARGE_LAYER_COLORS),
                choose(CENTER_COLORS),
                'large',
                BLOOM_DURATION * random(0.46, 0.64)
            ));
        }

        // --------------------------------------------------
        // ULTIMO LIVELLO: FIORI ENORMI
        // --------------------------------------------------

        for (let i = 0; i < HUGE_FLOWER_COUNT; i++) {
            samplePoint(60);
            flowers.push(makeFlower(
                sampledX, sampledY,
                random(HUGE_MIN, HUGE_MAX),
                random(0, TWO_PI),
                choose(HUGE_LAYER_COLORS),
                choose(CENTER_COLORS),
                'huge',
                BLOOM_DURATION * random(0.58, 0.76)
            ));
        }

        flowers.sort((a, b) => a.bloomOffset - b.bloomOffset);

        lastBloomEnd = flowers.length
            ? flowers[flowers.length - 1].bloomOffset + FLOWER_OPEN_DURATION
            : BLOOM_DURATION;
    }

    // --------------------------------------------------
    // DISEGNO DEL CEMPASÚCHIL
    // --------------------------------------------------

    function drawFlower(c, flower, progress) {
        const eased = progress >= 1 ? 1 : 1 - Math.pow(1 - progress, 3);
        const size = flower.radius * eased;

        const p = flower.profile;
        const petalCount = p.petalCount;
        const petalStep = p.petalStep;
        const layerData = p.layerData;
        const layers = p.layers;
        const petalLength = size * p.lengthK;
        const petalWidth = size * p.widthK;
        const lengthVar = flower.lengthVar;
        const widthVar = flower.widthVar;
        const color = flower.color;
        const phaseRotation = flower.phase * 0.08;
        const fade = flower.fade;

        c.save();
        c.translate(flower.x, flower.y);
        c.rotate(flower.rotation);

        c.globalAlpha = (p.alphaBase + eased * p.alphaGain) * fade;

        for (let layer = 0; layer < layers; layer++) {
            const ld = layerData[layer];
            const currentLength = petalLength * ld.lengthMul;
            const currentWidth = petalWidth * ld.widthMul;
            const baseY = ld.offset * size;
            const randomColor = ld.randomColor;
            const base = layer * petalCount;

            c.save();
            c.rotate(ld.rotation + phaseRotation);

            if (!randomColor) c.fillStyle = color;

            for (let i = 0; i < petalCount; i++) {
                const L = currentLength * lengthVar[base + i];
                const W = currentWidth * widthVar[i];

                c.beginPath();
                c.moveTo(0, baseY);
                c.bezierCurveTo(
                    -W * 0.72, L * 0.10,
                    -W, L * 0.43,
                    -W * 0.72, L * 0.74
                );
                c.bezierCurveTo(
                    -W * 0.48, L * 0.96,
                    W * 0.48, L * 0.96,
                    W * 0.72, L * 0.74
                );
                c.bezierCurveTo(
                    W, L * 0.43,
                    W * 0.72, L * 0.10,
                    0, baseY
                );
                c.quadraticCurveTo(-W * 0.16, L * 0.24, 0, baseY);

                if (randomColor) {
                    const roll = (Math.random() * 3) | 0;
                    c.fillStyle = roll === 0 ? color : roll === 1 ? '#f6ad55' : '#ed8936';
                }

                c.fill();
                c.rotate(petalStep);
            }

            c.restore();
        }

        const centerSize = size * p.centerK;

        c.globalAlpha = (p.centerAlphaBase + eased * p.centerAlphaGain) * fade;
        c.fillStyle = flower.centerColor;
        c.beginPath();
        c.arc(0, 0, centerSize, 0, TWO_PI);
        c.fill();

        if (p.core) {
            c.globalAlpha = (0.30 + eased * 0.30) * fade;
            c.fillStyle = '#713b10';
            c.beginPath();
            c.arc(0, 0, centerSize * 0.42, 0, TWO_PI);
            c.fill();
        }

        c.restore();
    }

    // --------------------------------------------------
    // RENDER
    // --------------------------------------------------

    function render(timestamp) {
        const elapsed = timestamp - startTime;
        const n = flowers.length;

        while (
            bakedIndex < n &&
            elapsed - flowers[bakedIndex].bloomOffset >= FLOWER_OPEN_DURATION
        ) {
            drawFlower(bakedCtx, flowers[bakedIndex], 1);
            bakedIndex++;
        }

        ctx.clearRect(0, 0, width, height);
        if (bakedCanvas.width > 0 && bakedCanvas.height > 0) {
            ctx.drawImage(bakedCanvas, 0, 0, width, height);
        }

        for (let k = bakedIndex; k < n; k++) {
            const flower = flowers[k];
            const progress = (elapsed - flower.bloomOffset) / FLOWER_OPEN_DURATION;
            if (progress <= 0) break;
            drawFlower(ctx, flower, progress);
        }

        if (elapsed < lastBloomEnd) {
            animationId = requestAnimationFrame(render);
        } else {
            animationId = null;
        }
    }

    // --------------------------------------------------
    // RESIZE
    // --------------------------------------------------

    function resize() {
        if (animationId !== null) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }

        clearTimeout(resizeTimeout);

        resizeTimeout = setTimeout(() => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, width, height);

            bakedCanvas.width = canvas.width;
            bakedCanvas.height = canvas.height;
            bakedCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
            bakedIndex = 0;

            createFlowers();

            startTime = performance.now();
            animationId = requestAnimationFrame(render);
        }, 100);
    }

    window.addEventListener('resize', resize, { passive: true });

    resize();
}
