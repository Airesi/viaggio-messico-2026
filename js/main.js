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
    
    // Attiva la prima settimana di default
    switchWeek(1);   
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
    tripData.weeks.forEach(week => {
        const btn = document.createElement('button');
        btn.id = `nav-btn-${week.id}`;
        btn.onclick = () => switchWeek(week.id);
        
        btn.className = "py-3 px-4 text-xs sm:text-sm font-bold rounded-xl bg-white text-gray-700 hover:bg-gray-100 transition text-center border border-gray-200 flex flex-col items-center";
        
        btn.innerHTML = `
            <span>${week.navTitle}</span>
            <span class="text-[10px] font-normal opacity-70">${week.navSubtitle}</span>
        `;
        navContainer.appendChild(btn);
    });
}

function generateContent() {
    const contentContainer = document.getElementById('content-container');
    
    const colors = [
        { bg: 'bg-emerald-100', text: 'text-emerald-800' },
        { bg: 'bg-emerald-100', text: 'text-emerald-800' }, 
        { bg: 'bg-amber-100', text: 'text-amber-800' },
        { bg: 'bg-cyan-100', text: 'text-cyan-800' }
    ];

    tripData.weeks.forEach((week, index) => {
        const color = colors[index % colors.length];
        const contentDiv = document.createElement('div');
        contentDiv.id = `content-week-${week.id}`;
        contentDiv.className = "tab-content p-6 space-y-4";
        
        const linksHtml = (week.links || []).map(link => 
            `<a href="${link.url}" target="_blank" class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md font-medium transition">${link.text}</a>`
        ).join('');

        const imagesHtml = (week.images || []).map(imgSrc => 
            `<img src="${imgSrc}" alt="Gallery image" class="rounded-lg gallery-img w-full">`
        ).join('');

        let daysHtml = '';
        if (week.days) {
            daysHtml = '<div class="mt-6 border-l-2 border-emerald-200 ml-3 space-y-5">';
            week.days.forEach(day => {
                daysHtml += `
                    <div class="relative pl-6 group">
                        <div class="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-emerald-500 border-4 border-white shadow"></div>
                        <a href="dettaglio.html?day=${day.id}" class="block bg-gray-50 hover:bg-emerald-50 p-4 rounded-xl border border-gray-100 transition cursor-pointer">
                            <div class="flex justify-between items-center mb-1">
                                <span class="text-sm font-extrabold text-emerald-700 uppercase tracking-wider">${day.dayName}</span>
                                <span class="text-[10px] text-gray-500 font-medium bg-white px-2 py-1 rounded border border-gray-200">📍 ${day.location}</span>
                            </div>
                            <h3 class="text-md font-bold text-gray-800">${day.title}</h3>
                            <p class="text-xs text-gray-500 mt-1">${day.shortDesc}</p>
                            <span class="text-[11px] text-emerald-600 font-bold mt-3 inline-block group-hover:underline">Esplora il giorno →</span>
                        </a>
                    </div>
                `;
            });
            daysHtml += '</div>';
        }

        // COSTRUZIONE BASECAMP IN MODO SICURO
        const basecampHtml = week.basecamp ? `
            <div class="mt-8 pt-6 border-t border-gray-100">
                <h3 class="text-sm font-extrabold text-gray-900 uppercase tracking-wider mb-4">🏕️ Basecamp & Logistica</h3>
                <div class="grid grid-cols-1 lg:grid-cols-5 gap-4">
                    <div class="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 relative overflow-hidden shadow-lg group">
                        <div class="relative z-10">
                            <span class="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1 block">Dove Dormire</span>
                            <h4 class="text-xl font-black text-white mb-2">${week.basecamp.zone || ''}</h4>
                            <div class="flex flex-wrap gap-2 mb-4">
                                ${(week.basecamp.tags || []).map(tag => `<span class="px-2 py-1 bg-white/10 text-white text-[10px] font-bold rounded">${tag}</span>`).join('')}
                            </div>
                            <p class="text-xs text-slate-300 mb-4 leading-relaxed">${week.basecamp.why || ''}</p>
                            <div class="bg-black/20 border border-white/10 rounded-xl p-3 flex items-center gap-3">
                                <span class="text-xl">🏨</span>
                                <div>
                                    <span class="block text-[9px] uppercase tracking-wider text-slate-400 font-bold">Consiglio Struttura</span>
                                    <span class="block text-xs font-medium text-white">${week.basecamp.hotelIdea || ''}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-3 flex flex-col gap-4">
                        <div class="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex-1">
                            <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Come Muoversi</span>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                ${(week.basecamp.transports || []).map(t => `
                                    <div class="flex items-start gap-3">
                                        <div class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-lg shrink-0">${t.icon}</div>
                                        <div>
                                            <h5 class="text-sm font-bold text-slate-800">${t.title}</h5>
                                            <p class="text-[11px] text-slate-500 mt-0.5">${t.desc}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        ${week.food ? `
                        <div class="bg-amber-50 rounded-xl p-4 border border-amber-100 flex items-center gap-3">
                            <span class="text-2xl">🌮</span>
                            <div>
                                <span class="block text-[10px] font-black text-amber-700 uppercase tracking-widest mb-0.5">Food Highlights</span>
                                <p class="text-xs text-amber-900 font-medium">${week.food}</p>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            </div>
        ` : '';

        // ASSEMBLAGGIO FINALE DEL TEMPLATE
        contentDiv.innerHTML = `
            <div class="flex justify-between items-center border-b pb-3">
                <span class="${color.bg} ${color.text} text-xs font-bold px-3 py-1 rounded-full uppercase">${week.badge}</span>
                <span class="text-xs text-gray-400">${week.locationText}</span>
            </div>
            <h2 class="text-2xl font-extrabold text-gray-900 mt-3">${week.title}</h2>
            <p class="text-gray-600 text-sm leading-relaxed mb-2">${week.description}</p>
            
            ${daysHtml}
            ${basecampHtml}
        `;
        
        contentContainer.appendChild(contentDiv);
    });
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
            switchWeek(loc.week);
            map.setView(loc.coords, 9, {animate: true});
        });
    });
}

function switchWeek(weekNum) {
    tripData.weeks.forEach(week => {
        const btn = document.getElementById(`nav-btn-${week.id}`);
        if(btn) {
            const subtitle = btn.querySelector('span:nth-child(2)');
            
            if(week.id === weekNum) {
                btn.className = "py-3 px-4 text-xs sm:text-sm font-bold rounded-xl bg-emerald-700 text-white shadow-md transition text-center flex flex-col items-center";
                subtitle.className = "text-[10px] font-normal opacity-90";
            } else {
                btn.className = "py-3 px-4 text-xs sm:text-sm font-bold rounded-xl bg-white text-gray-700 hover:bg-gray-100 transition text-center border border-gray-200 flex flex-col items-center";
                subtitle.className = "text-[10px] font-normal opacity-70";
            }
        }
    });

    tripData.weeks.forEach(week => {
        const content = document.getElementById(`content-week-${week.id}`);
        if(content) {
            if(week.id === weekNum) {
                content.classList.add('active');
                content.style.display = 'block'; // Assicuriamoci che venga mostrato
            } else {
                content.classList.remove('active');
                content.style.display = 'none'; // Assicuriamoci che venga nascosto
            }
        }
    });

    const selectedWeek = tripData.weeks.find(w => w.id === weekNum);
    if(selectedWeek && selectedWeek.mapFocus && map) {
        map.setView(selectedWeek.mapFocus.coords, selectedWeek.mapFocus.zoom, {animate: true});
    }
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