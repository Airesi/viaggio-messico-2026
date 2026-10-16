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
    generateHotelCosts();
    initMap();
    // initOrganicMosaic(); // Animazione disattivata per performance.

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
        
        // --- COLONNA DESTRA: itinerario e contenuti esperienziali ---
        const contentDiv = document.createElement('div');
        contentDiv.id = `content-area-${area.id}`;
        contentDiv.className = "tab-content p-6 sm:p-8"; // Tolto lo space-y per gestire meglio i margini
        
        const linksHtml = (area.links || []).map(link => 
            `<a href="${link.url}" target="_blank" class="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-3.5 py-2 rounded-xl font-bold transition text-[11px] shadow-sm hover:shadow">
                🔗 ${link.text.replace('🔗 ', '')}
            </a>`
        ).join('');


        // Schede della logistica concentrate nel pannello della colonna sinistra:
        // panoramica compatta, collegamenti e dettagli disponibili soltanto su richiesta.
        const areaBookings = (tripData.general.hotelBookings?.items || []).filter(stay => stay.areaId === area.id);
        const dateShort = iso => iso.slice(8, 10) + '/' + iso.slice(5, 7);
        // Risorsa dedicata al trekking pagato 26–28 dicembre nella Sierra Norte.
        // Compare solo nella scheda Oaxaca e Sierra: la pagina è separata dalle giornate.
        const sierraGuideHtml = area.id === 2 ? `
            <a href="sierra-norte.html"
               class="mb-8 flex items-start gap-4 rounded-[1.5rem] border border-emerald-200 bg-gradient-to-r from-emerald-50 to-amber-50 p-5 shadow-sm hover:shadow-md hover:border-emerald-400 transition group">
                <div class="shrink-0 w-12 h-12 rounded-2xl bg-emerald-900 text-white flex items-center justify-center text-2xl">🎒</div>
                <div class="min-w-0 flex-1">
                    <span class="block text-[10px] uppercase tracking-widest text-emerald-700 font-black">Preparazione · 26–28 dicembre</span>
                    <h3 class="text-base font-extrabold text-emerald-950 mt-1">Guida al trekking della Sierra Norte ↗</h3>
                    <p class="text-xs text-emerald-900/80 leading-relaxed mt-2">
                        Checklist interattiva, consigli ufficiali, abbigliamento, regole delle comunità,
                        cancellazioni e biosecurity da Expediciones Sierra Norte.
                    </p>
                </div>
            </a>
        ` : '';


        const hasLogistics = !!(area.basecamp || area.transferPlan || areaBookings.length ||
            (area.researchNotes || []).length || (area.hotelSearches || []).length || area.food);
        const sidebarLogisticsHtml = hasLogistics ? `
            <section class="rounded-[1.5rem] border border-amber-200/70 bg-white shadow-sm overflow-hidden">
                <button type="button" onclick="toggleCollapse('logistics-collapse-${area.id}', this)"
                    aria-controls="logistics-collapse-${area.id}" aria-expanded="false"
                    class="w-full p-4 text-left flex items-center gap-3 group hover:bg-amber-50/60 transition-colors">
                    <span class="w-10 h-10 shrink-0 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-xl">🧭</span>
                    <span class="min-w-0 flex-1">
                        <strong class="block text-sm font-extrabold text-slate-900">Logistica e spostamenti</strong>
                        <span class="block text-[11px] text-gray-600 mt-1 leading-snug line-clamp-2">
                            ${area.transferPlan ? area.transferPlan.title : (area.basecamp?.zone || 'Alloggi, trasporti e note utili')}
                        </span>
                        <span class="block text-[10px] font-bold mt-1.5 ${area.transferPlan ? 'text-amber-700' : 'text-emerald-700'}">
                            ${area.transferPlan ? '⚠️ Collegamenti da verificare' : '📍 Promemoria della tappa'}
                            ${areaBookings.length ? ' · 🏨 ' + areaBookings.length + (areaBookings.length === 1 ? ' soggiorno' : ' soggiorni') : ''}
                        </span>
                    </span>
                    <span class="toggle-icon shrink-0 text-slate-500 flex items-center justify-center w-7 h-7 rounded-full bg-gray-50 border border-gray-200">
                        <svg class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m6 9 6 6 6-6"></path></svg>
                    </span>
                </button>
                <div id="logistics-collapse-${area.id}" class="hidden border-t border-amber-100 bg-amber-50/20 p-3 sm:p-4 space-y-3">
                    ${areaBookings.length ? `
                        <div class="rounded-xl bg-white border border-gray-200 p-3">
                            <span class="block text-[10px] font-black text-blue-900 uppercase tracking-wide mb-2">🏨 Alloggio confermato</span>
                            ${areaBookings.map(stay => `
                                <p class="text-xs leading-snug text-slate-900 font-semibold mb-1">${stay.name}</p>
                                <p class="text-[10px] text-gray-500 mb-2">${dateShort(stay.checkin)}–${dateShort(stay.checkout)} · pagamento da verificare</p>
                            `).join('')}
                            <button type="button" onclick="toggleHotelCostsModal()" class="text-[11px] text-emerald-800 font-black underline hover:text-emerald-950">Hotel & costi ↗</button>
                        </div>
                    ` : ''}
                    ${area.basecamp ? `
                        <div class="rounded-xl bg-white border border-gray-200 p-3 space-y-1">
                            <p class="text-[11px] font-black text-slate-800">📍 ${area.basecamp.zone || 'Base della tappa'}</p>
                            <p class="text-[11px] leading-relaxed text-slate-600">${area.basecamp.hotelIdea || area.basecamp.why || ''}</p>
                            ${area.basecamp.why ? `<details class="pt-1"><summary class="text-[10px] text-emerald-800 font-semibold cursor-pointer">Indicazioni pratiche</summary><p class="text-[11px] leading-relaxed text-slate-600 mt-2">${area.basecamp.why}</p></details>` : ''}
                        </div>
                    ` : ''}
                    ${area.transferPlan ? `
                        <details class="rounded-xl bg-white border border-amber-200 overflow-hidden">
                            <summary class="cursor-pointer p-3 hover:bg-amber-50/70">
                                <span class="block text-xs font-extrabold text-slate-900">🚌 ${area.transferPlan.title}</span>
                                <span class="block text-[10px] text-amber-800 mt-1">${area.transferPlan.eyebrow} · ${area.transferPlan.legs.length} tratte</span>
                                <span class="block text-[11px] text-gray-600 leading-snug mt-1">${area.transferPlan.subtitle}</span>
                            </summary>
                            <div class="border-t border-amber-100 p-3 space-y-3">
                                <div class="text-[11px] leading-relaxed bg-amber-50 rounded-lg px-3 py-2">
                                    <strong class="text-amber-950">💶 ${area.transferPlan.cost}</strong>
                                    <span class="block text-gray-600 mt-1">🕒 ${area.transferPlan.duration}</span>
                                </div>
                                <ol class="space-y-2">
                                    ${area.transferPlan.legs.map((leg, i) => `
                                        <li>
                                            <details class="rounded-lg border border-gray-200 bg-white overflow-hidden">
                                                <summary class="cursor-pointer p-3 hover:bg-gray-50">
                                                    <span class="flex flex-wrap items-baseline justify-between gap-1">
                                                        <strong class="text-[11px] text-emerald-900">${i+1}. ${leg.day}</strong>
                                                        <span class="text-[10px] text-gray-500">${leg.time}</span>
                                                    </span>
                                                    <span class="block mt-1 text-xs font-semibold leading-snug text-gray-800">${leg.from} → ${leg.to}</span>
                                                    <span class="block text-[10px] leading-snug text-gray-500 mt-1">${leg.operator} · ${leg.duration}</span>
                                                </summary>
                                                <div class="px-3 pb-3 border-t border-gray-100 pt-2">
                                                    <p class="text-[11px] font-bold text-amber-900">${leg.price}</p>
                                                    <p class="text-[11px] mt-2 leading-relaxed text-gray-600">${leg.note}</p>
                                                </div>
                                            </details>
                                        </li>
                                    `).join('')}
                                </ol>
                                <div class="bg-amber-50 border border-amber-100 rounded-lg p-3 text-[11px] leading-relaxed text-amber-950">
                                    <strong>⚠️ Prima di prenotare:</strong> ${area.transferPlan.warning}
                                </div>
                                <div class="flex flex-wrap gap-x-3 gap-y-2">
                                    ${(area.transferPlan.sources || []).map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="text-[11px] font-bold text-emerald-900 underline">↗ ${link.text}</a>`).join('')}
                                </div>
                            </div>
                        </details>
                    ` : ''}
                    ${(area.basecamp?.transports || []).length ? `
                        <details class="rounded-xl bg-white border border-gray-200 p-3">
                            <summary class="cursor-pointer text-xs font-bold text-slate-900">🚕 Spostamenti locali e suggerimenti</summary>
                            <div class="mt-3 space-y-3">
                                ${area.basecamp.transports.map(t => `
                                    <div class="text-[11px] leading-relaxed border-l-2 border-amber-300 pl-3">
                                        <strong class="block text-slate-800">${t.icon} ${t.title}</strong>
                                        <p class="text-gray-600 mt-1">${t.desc || ''}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </details>
                    ` : ''}
                    ${(area.researchNotes || []).length ? `
                        <details class="rounded-xl bg-white border border-gray-200 p-3">
                            <summary class="cursor-pointer text-xs font-bold text-slate-900">📌 Promemoria e possibilità da valutare (${area.researchNotes.length})</summary>
                            <div class="mt-3 space-y-3">
                                ${area.researchNotes.map(n => `
                                    <div class="text-[11px] leading-relaxed border-l-2 border-amber-300 pl-3">
                                        <strong class="block text-gray-900">${n.title}</strong>
                                        <p class="mt-1 text-gray-600">${n.body}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </details>
                    ` : ''}
                    ${(area.hotelSearches || []).length ? `
                        <details class="rounded-xl bg-white border border-gray-200 p-3">
                            <summary class="cursor-pointer text-xs font-bold text-slate-900">🔎 Ricerche alloggi non prenotati</summary>
                            <div class="mt-3 space-y-2">
                                ${area.hotelSearches.map(s => `
                                    <a href="https://www.booking.com/searchresults.it.html?${new URLSearchParams({ss:s.ss,checkin:s.checkin,checkout:s.checkout,group_adults:'2',no_rooms:'1',group_children:'0'}).toString()}" target="_blank" rel="noopener noreferrer" class="block rounded-lg bg-amber-50 p-3 text-[11px] text-emerald-900">
                                        <strong class="block">${s.label} ↗</strong><span class="block mt-1 text-gray-600">${s.note}</span>
                                    </a>
                                `).join('')}
                            </div>
                        </details>
                    ` : ''}
                    ${area.food ? `
                        <details class="rounded-xl bg-white border border-gray-200 p-3">
                            <summary class="cursor-pointer text-xs font-bold text-slate-900">🌮 Pasti e consigli sul posto</summary>
                            <p class="mt-2 text-[11px] leading-relaxed text-gray-600">${area.food}</p>
                        </details>
                    ` : ''}
                </div>
            </section>
        ` : '';

        // Contatti verificati per le escursioni da Akumal: proposte, NON prenotazioni.
        // Il prezzo pubblicato è indicativo e il pickup al singolo hotel va sempre confermato.
        const tourContactsHtml = (area.tourContacts || []).length ? `
            <details id="tour-contacts-area-${area.id}" class="mb-8 rounded-[1.5rem] overflow-hidden border border-emerald-200 bg-white shadow-sm">
                <summary class="cursor-pointer px-5 py-4 bg-gradient-to-r from-emerald-950 to-teal-900 text-white">
                    <span class="block text-[10px] uppercase tracking-widest text-emerald-200 font-black">🧭 Esperienze da organizzare · 2 adulti</span>
                    <h3 class="text-lg font-extrabold mt-1">Tour da contattare: Chichén Itzá e Muyil</h3>
                    <p class="text-xs text-emerald-100 mt-2 leading-relaxed">Non prenotati · operatori, prezzi indicativi e domande per il pickup da Akumal. <strong>Apri per confrontare le proposte ↓</strong></p>
                </summary>
                <div class="p-4 sm:p-5 space-y-5">
                    ${(area.tourContacts || []).map(tour => `
                        <article class="rounded-2xl border border-emerald-100 bg-emerald-50/30 overflow-hidden">
                            <div class="p-4 sm:p-5 border-b border-emerald-100">
                                <div class="flex justify-between gap-3 flex-wrap items-center">
                                    <h4 class="text-base font-extrabold text-emerald-950">${tour.destination}</h4>
                                    <span class="text-[10px] font-black text-amber-800 bg-amber-100 rounded-full px-3 py-1.5">${tour.date}</span>
                                </div>
                                <p class="text-[11px] text-emerald-800 font-bold mt-1">${tour.kind}</p>
                                <p class="text-xs text-gray-600 mt-2 leading-relaxed">${tour.intro}</p>
                            </div>
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 p-3 sm:p-4">
                                ${(tour.providers || []).map(p => `
                                    <div class="rounded-xl border border-gray-200 bg-white p-4 flex flex-col gap-2">
                                        <h5 class="text-sm font-black text-gray-900">${p.name}</h5>
                                        <p class="text-[11px] text-emerald-900 font-bold leading-relaxed">💰 ${p.price}</p>
                                        <p class="text-[11px] text-gray-600 leading-relaxed"><strong class="text-gray-800">🚐 Pickup:</strong> ${p.pickup}</p>
                                        <p class="text-[11px] text-gray-600 leading-relaxed"><strong class="text-gray-800">Incluso:</strong> ${p.includes}</p>
                                        <p class="text-[11px] text-amber-900 bg-amber-50 rounded-lg p-3 leading-relaxed">⚠️ ${p.caution}</p>
                                        <div class="mt-auto pt-2 flex gap-2 flex-wrap">
                                            ${(p.contacts || []).map(c => `<a href="${c.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-lg bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-900 text-[11px] font-extrabold px-3 py-2">↗ ${c.label}</a>`).join('')}
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="mx-3 mb-3 sm:mx-4 sm:mb-4 rounded-xl bg-white border border-gray-200 p-4">
                                <span class="block text-[10px] uppercase tracking-widest font-black text-orange-800 mb-2">✉️ Cosa chiedere prima di prenotare</span>
                                <p class="text-xs text-gray-700 leading-relaxed">${tour.questions}</p>
                            </div>
                        </article>
                    `).join('')}
                    <p class="text-[11px] text-gray-500">I prezzi sono quelli pubblicizzati dagli operatori nel 2026 e non garantiscono disponibilità né tariffa per gennaio 2027. Nessuna escursione è prenotata finché non lo confermiamo.</p>
                </div>
            </details>
        ` : '';


        // Sintesi editoriale della macro-tappa: pochi punti forti e suggerimenti,
        // senza ripetere il contenuto dettagliato delle schede giornaliere.
        const overviewHtml = area.overview ? `
            <section class="mb-6 rounded-[1.5rem] border border-emerald-100 bg-white shadow-sm overflow-hidden">
                <div class="px-5 pt-5 pb-3 sm:px-6">
                    <span class="text-[10px] uppercase tracking-[.16em] text-amber-800 font-black">✨ Da non perdere</span>
                    <h3 class="text-lg font-extrabold text-emerald-950 mt-1">Il meglio di questa tappa</h3>
                    <p class="text-xs leading-relaxed text-gray-600 mt-1">${area.overview.intro}</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 px-4 sm:px-5 pb-4">
                    ${area.overview.highlights.map(item => `
                        <a href="dettaglio.html?day=${encodeURIComponent(item.dayId)}"
                            class="group block rounded-xl border border-gray-200 bg-gray-50/65 hover:border-emerald-300 hover:bg-emerald-50/60 transition p-3.5">
                            <div class="flex items-start gap-2.5">
                                <span class="shrink-0 text-xl leading-none mt-0.5">${item.icon}</span>
                                <div class="min-w-0">
                                    <h4 class="text-xs font-extrabold text-slate-900 group-hover:text-emerald-900 leading-snug">${item.title} <span aria-hidden="true" class="text-emerald-700">↗</span></h4>
                                    <p class="text-[11px] text-gray-600 mt-1 leading-snug">${item.detail}</p>
                                    <p class="text-[10px] font-bold text-emerald-800 mt-2">${item.state}</p>
                                </div>
                            </div>
                        </a>
                    `).join('')}
                </div>
                <div class="bg-amber-50/55 border-t border-amber-100 px-5 sm:px-6 py-3.5">
                    <p class="text-[10px] uppercase tracking-wider font-black text-amber-800 mb-2">💡 Due dritte utili</p>
                    <ul class="space-y-1.5">
                        ${area.overview.tips.map(tip => `<li class="text-[11px] text-amber-950 leading-relaxed flex gap-2"><span aria-hidden="true" class="text-amber-600 shrink-0">•</span><span>${tip}</span></li>`).join('')}
                    </ul>
                </div>
            </section>
        ` : '';

        // 2. ITINERARIO (Ora sta sotto, con il suo nuovo titoletto)
        let daysHtml = '';
        if (area.days && area.days.length > 0) {
            daysHtml = `
            <div class="mb-6">
                <span class="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">🗺️ Programma</span>
                <div class="border border-gray-200/70 rounded-[1.5rem] overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
                    <button type="button" onclick="toggleCollapse('days-area-${area.id}', this)" aria-expanded="true" aria-controls="days-area-${area.id}" class="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50/50 transition-colors group outline-none">
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">📅</div>
                            <div class="text-left">
                                <h3 class="text-sm font-extrabold text-gray-900">Itinerario Giornaliero</h3>
                                <p class="text-[11px] text-gray-500 font-medium">Consulta le ${area.days.length} schede giorno per giorno</p>
                            </div>
                        </div>
                        <div class="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 toggle-icon transition-transform">
                            <svg class="w-4 h-4 transform rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </button>
                    <div id="days-area-${area.id}" class="border-t border-gray-100 bg-gray-50/30 p-5">
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
            ${overviewHtml}
            ${daysHtml}
            ${sierraGuideHtml}
            ${tourContactsHtml}
            ${linksHtml ? `<div class="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
                <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2 flex items-center">Altre risorse:</span>
                ${linksHtml}
            </div>` : ''}
        `;
        contentContainer.appendChild(contentDiv);

        // --- COLONNA SINISTRA: logistica compatta e wallet sotto la mappa ---
        const walletDiv = document.createElement('div');
        walletDiv.id = `wallet-area-${area.id}`;
        walletDiv.className = "wallet-content hidden space-y-3"; // Nascosto di base per il routing
        walletDiv.innerHTML = sidebarLogisticsHtml; // Logistica discreta, prima del wallet

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

            walletDiv.innerHTML += `
            <div class="border border-gray-200/70 rounded-[1.5rem] overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
                <button onclick="toggleCollapse('wallet-collapse-${area.id}', this)" class="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50/50 transition-colors group outline-none">
                    <div class="flex items-center gap-4">
                        <div class="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 border border-gray-200">💼</div>
                        <div class="text-left">
                            <h3 class="text-sm font-extrabold text-gray-900">Attività & spese</h3>
                            <p class="text-[11px] text-gray-500 font-medium">Costi extra e cose da organizzare</p>
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
                                    <span class="text-[9px] uppercase tracking-widest text-gray-400 font-bold block">Costi di attività e trasporti</span>
                                    <span class="text-xl font-black text-gray-900">${area.budget ? area.budget.total : '€ 0'}</span>
                                </div>
                                <div class="text-right">
                                    <span class="text-[9px] uppercase tracking-widest text-rose-400 font-bold block">Stato</span>
                                    <span class="text-sm font-bold text-rose-600">${area.budget ? area.budget.spent : '€ 0'}</span>
                                </div>
                            </div>
                            <div class="pt-3 border-t border-gray-200">
                                ${budgetList}
                            </div>
                        </div>

                        <div class="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col">
                            <span class="text-[9px] uppercase tracking-widest text-gray-400 font-bold block mb-2">Conferme e azioni aperte</span>
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
    if (!container) return;
    const opening = container.classList.contains('hidden');
    container.classList.toggle('hidden', !opening);
    btn?.setAttribute('aria-expanded', String(opening));
    btn?.querySelector('.toggle-icon svg')?.classList.toggle('rotate-180', opening);
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



// Sintesi costi hotel: stessi comportamenti della modale voli, importi dinamici.
function generateHotelCosts(){
    const container=document.getElementById("hotel-costs-modal-container");
    if(!container)return;
    const stays=[...tripData.general.hotelBookings.items].sort((a,b)=>a.checkin.localeCompare(b.checkin));
    const budget=tripData.general.budget;
    const euro=n=>"€ "+new Intl.NumberFormat("it-IT",{maximumFractionDigits:0,useGrouping:true}).format(n);
    const money2=n=>"€ "+new Intl.NumberFormat("it-IT",{minimumFractionDigits:2,maximumFractionDigits:2}).format(n);
    const safe=x=>String(x||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
    const short=x=>x.slice(8,10)+"/"+x.slice(5,7);
    const nights=x=>Math.round((Date.parse(x.checkout+"T00:00:00Z")-Date.parse(x.checkin+"T00:00:00Z"))/86400000);
    const nTotal=stays.reduce((s,x)=>s+nights(x),0);
    const eurosTotal=stays.reduce((s,x)=>s+Number(x.totalEuro),0);
    const high=Math.max(1,...stays.map(x=>x.totalEuro));
    const cards=stays.map((x,i)=>[
        "<article class='rounded-2xl border border-slate-200 bg-white p-4 shadow-sm'>",
          "<div class='flex items-start gap-3'>",
          "<span class='w-9 h-9 shrink-0 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center text-xs font-black'>"+(i+1)+"</span>",
          "<div class='flex-1 min-w-0'>",
            "<div class='flex justify-between items-start gap-3'>",
              "<div><h4 class='text-sm font-black text-gray-900 leading-snug'>"+safe(x.name)+"</h4>",
              "<p class='text-[11px] text-gray-500 mt-1'>"+safe(x.city)+" · "+short(x.checkin)+"–"+short(x.checkout)+" · "+nights(x)+" notti</p></div>",
              "<strong class='shrink-0 text-lg font-black text-gray-900 tabular-nums'>"+euro(x.totalEuro)+"</strong>",
            "</div>",
            "<div class='h-1.5 mt-3 rounded-full bg-amber-50 overflow-hidden'><div class='h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full' style='width:"+Math.round(x.totalEuro/high*100)+"%'></div></div>",
            "<div class='flex flex-wrap gap-1.5 mt-3'>",
              "<span class='rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold text-emerald-800'>✓ "+safe(x.status)+"</span>",
              "<span class='rounded-full bg-slate-100 px-2.5 py-1 text-[10px] text-gray-600 font-semibold'>"+safe(x.cancellation)+"</span>",
              "<span class='rounded-full bg-amber-50 px-2.5 py-1 text-[10px] text-amber-900 font-semibold'>"+safe(x.paymentStatus||"Pagamento non verificato")+"</span>",
            "</div>",
          "</div></div>",
        "</article>"
    ].join("")).join("");
    const box=(label,value,note,accent)=>[
        "<div class='rounded-2xl p-4 border "+(accent?"bg-blue-950 text-white border-blue-950":"bg-white border-gray-200 text-gray-900")+"'>",
          "<span class='block text-[10px] uppercase tracking-widest font-black "+(accent?"text-blue-200":"text-gray-500")+"'>"+label+"</span>",
          "<strong class='block text-2xl sm:text-3xl font-black mt-2 tabular-nums'>"+value+"</strong>",
          note?"<span class='block text-[10px] mt-1 "+(accent?"text-blue-200":"text-gray-500")+"'>"+note+"</span>":"",
        "</div>"
    ].join("");
    container.innerHTML=[
        "<div id='hotel-costs-modal' role='dialog' aria-modal='true' aria-labelledby='hotel-costs-heading' class='fixed inset-0 z-50 hidden items-center justify-center p-3 sm:p-5 bg-slate-900/50 backdrop-blur-md'>",
          "<div class='bg-gray-50 w-full max-w-5xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[94vh] border border-white/40'>",
            "<div class='bg-white border-b border-gray-100 px-5 sm:px-8 py-5 flex items-center justify-between gap-4'>",
              "<div class='flex items-center gap-3'><span class='text-2xl'>🏨</span><div>",
              "<h2 id='hotel-costs-heading' class='text-lg font-black uppercase text-slate-800 tracking-wide'>Hotel & costi</h2>",
              "<p class='text-xs text-slate-500'>Panoramica prenotazioni Booking · 2 adulti</p></div></div>",
              "<button type='button' onclick='toggleHotelCostsModal()' aria-label='Chiudi il riepilogo hotel' class='h-10 w-10 shrink-0 rounded-full bg-slate-100 hover:bg-rose-100 font-bold text-slate-600'>✕</button>",
            "</div>",
            "<div class='p-4 sm:p-7 overflow-y-auto'>",
              "<div class='grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5'>",
                box("Totale hotel confermati",euro(eurosTotal),"Escluse altre spese",true),
                box("Prenotazioni",String(stays.length),"Confermate",false),
                box("Notti in hotel",String(nTotal),"Escluso trekking",false),
                box("Media per notte",money2(nTotal?eurosTotal/nTotal:0),"2 persone",false),
              "</div>",
              "<p class='mb-4 p-4 rounded-xl border border-amber-200 bg-amber-50 text-xs text-amber-950 leading-relaxed'><strong>Confermato non significa pagato.</strong> Booking conferma gli hotel, ma non tutti gli addebiti. Il totale sopra comprende solo gli otto soggiorni in hotel; il trekking è pagato a parte.</p>",

              "<div class='mb-5 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 sm:p-5'>",
                "<div class='flex flex-wrap justify-between items-center gap-3'><div><span class='block text-[10px] uppercase tracking-widest font-black text-emerald-800'>Budget complessivo · 2 persone</span><strong class='text-xl font-black text-emerald-950'>"+euro(budget.capEuro)+"</strong></div><p class='text-[11px] text-emerald-950'>Voli confermati per due (assicurazione inclusa) "+euro(budget.confirmedFlightsEuro)+" · Hotel prenotati "+euro(eurosTotal)+" · Trekking pagato ~"+euro(budget.trekkingApproxEuro)+"</p></div>",
                "<div class='grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4'>",
                  box("Economico realistico",euro(budget.forecastLowEuro),"Totale stimato, non prenotato",false),
                  box("Scenario centrale",euro(budget.forecastEuro),"Residuo "+euro(budget.forecastRemainingEuro),true),
                  box("Scenario prudente",euro(budget.forecastHighEuro),"Rispetto al tetto: "+euro(budget.capEuro-budget.forecastHighEuro),false),
                "</div>",
                "<p class='text-[11px] text-emerald-900 mt-3 leading-relaxed'>I totali includono voli per due (assicurazione di viaggio già inclusa, senza doppio conteggio), hotel, trekking, escursioni, trasporti, pasti, acquisti prima della partenza, souvenir, valigia extra e imprevisti. Il prezzo dei voli è confermato per due persone ma il <strong>pagamento non è verificato</strong>; le altre voci non prenotate sono stime. Coral Princess è confermato ma non pagato; gli altri pagamenti hotel vanno verificati.</p>",
                "<details class='mt-4 border-t border-emerald-200 pt-3' open>",
                  "<summary class='cursor-pointer text-[11px] font-black text-emerald-950'>Riepilogo completo delle spese · tre scenari</summary>",
                  "<p class='mt-2 text-[11px] leading-relaxed text-emerald-950'>Budget totale per <strong>due persone</strong>: comprende le spese già pagate, quelle prenotate e quelle stimate. Il trekking pagato resta incluso nel totale, ma <strong>non viene sommato due volte</strong>.</p>",
                  "<div class='mt-3 overflow-x-auto rounded-xl border border-emerald-200 bg-white'>",
                    "<table class='w-full min-w-[590px] border-collapse text-[11px] text-gray-800'>",
                      "<thead class='bg-emerald-50 text-emerald-950'><tr>",
                        "<th scope='col' class='py-3 px-3 text-left font-extrabold'>Categoria e stato</th>",
                        "<th scope='col' class='py-3 px-3 text-right font-extrabold whitespace-nowrap'>Economico</th>",
                        "<th scope='col' class='py-3 px-3 text-right font-extrabold whitespace-nowrap'>Centrale</th>",
                        "<th scope='col' class='py-3 px-3 text-right font-extrabold whitespace-nowrap'>Prudente</th>",
                      "</tr></thead>",
                      "<tbody class='divide-y divide-gray-100'>",
                        "<tr class='bg-slate-50/80'><th colspan='4' class='py-2 px-3 text-left text-[10px] uppercase tracking-wide font-black text-slate-600'>Costi definiti (compresi nel totale)</th></tr>",
                        "<tr><th scope='row' class='py-3 px-3 text-left font-semibold leading-snug'>Voli internazionali per due <span class='block text-[10px] font-normal text-gray-500 mt-1'>Importo confermato · assicurazione inclusa · pagamento da verificare</span></th>"+
                        "<td class='py-3 px-3 text-right tabular-nums whitespace-nowrap'>"+money2(budget.confirmedFlightsEuro)+"</td>"+
                        "<td class='py-3 px-3 text-right font-black tabular-nums whitespace-nowrap'>"+money2(budget.confirmedFlightsEuro)+"</td>"+
                        "<td class='py-3 px-3 text-right tabular-nums whitespace-nowrap'>"+money2(budget.confirmedFlightsEuro)+"</td></tr>",
                        "<tr><th scope='row' class='py-3 px-3 text-left font-semibold leading-snug'>Hotel · 23 notti <span class='block text-[10px] font-normal text-gray-500 mt-1'>8 prenotazioni confermate · pagamenti da verificare</span></th>"+
                        "<td class='py-3 px-3 text-right tabular-nums whitespace-nowrap'>"+money2(eurosTotal)+"</td>"+
                        "<td class='py-3 px-3 text-right font-black tabular-nums whitespace-nowrap'>"+money2(eurosTotal)+"</td>"+
                        "<td class='py-3 px-3 text-right tabular-nums whitespace-nowrap'>"+money2(eurosTotal)+"</td></tr>",
                        "<tr><th scope='row' class='py-3 px-3 text-left font-semibold leading-snug'>Trekking Caminos Reales · Sierra Norte <span class='block text-[10px] font-black text-emerald-700 mt-1'>GIÀ PAGATO · "+new Intl.NumberFormat("it-IT",{minimumFractionDigits:2,maximumFractionDigits:2}).format(budget.trekkingPaidMxn)+" MXN · 2 notti e servizi inclusi</span></th>"+
                        "<td class='py-3 px-3 text-right tabular-nums whitespace-nowrap'>"+money2(budget.trekkingApproxEuro)+"</td>"+
                        "<td class='py-3 px-3 text-right font-black tabular-nums whitespace-nowrap'>"+money2(budget.trekkingApproxEuro)+"</td>"+
                        "<td class='py-3 px-3 text-right tabular-nums whitespace-nowrap'>"+money2(budget.trekkingApproxEuro)+"</td></tr>",
                        "<tr class='bg-slate-50/80'><th colspan='4' class='py-2 px-3 text-left text-[10px] uppercase tracking-wide font-black text-slate-600'>Altre spese ancora da stimare (tre scenari)</th></tr>",
                        budget.pendingEstimates.map(item=>
                          "<tr><th scope='row' class='py-3 px-3 text-left font-medium leading-snug'>"+safe(item.label)+"</th>"+
                          "<td class='py-3 px-3 text-right tabular-nums whitespace-nowrap'>"+euro(item.minEuro)+"</td>"+
                          "<td class='py-3 px-3 text-right font-black tabular-nums whitespace-nowrap'>"+euro(item.estimateEuro)+"</td>"+
                          "<td class='py-3 px-3 text-right tabular-nums whitespace-nowrap'>"+euro(item.maxEuro)+"</td></tr>"
                        ).join(""),
                      "</tbody>",
                      "<tfoot class='border-t-2 border-emerald-200 bg-emerald-50'>",
                        "<tr><th scope='row' class='py-3 px-3 text-left font-black text-emerald-950'>TOTALE VIAGGIO · 2 persone</th>"+
                        "<td class='py-3 px-3 text-right font-black tabular-nums whitespace-nowrap'>"+money2(budget.forecastLowEuro)+"</td>"+
                        "<td class='py-3 px-3 text-right font-black tabular-nums whitespace-nowrap'>"+money2(budget.forecastEuro)+"</td>"+
                        "<td class='py-3 px-3 text-right font-black tabular-nums whitespace-nowrap'>"+money2(budget.forecastHighEuro)+"</td></tr>",
                        "<tr><th scope='row' class='py-2 px-3 text-left font-extrabold text-emerald-950'>Rispetto al tetto di "+euro(budget.capEuro)+"</th>"+
                        "<td class='py-2 px-3 text-right font-bold tabular-nums whitespace-nowrap'>"+money2(budget.capEuro-budget.forecastLowEuro)+" sotto</td>"+
                        "<td class='py-2 px-3 text-right font-bold tabular-nums whitespace-nowrap'>"+money2(budget.capEuro-budget.forecastEuro)+" sotto</td>"+
                        "<td class='py-2 px-3 text-right font-bold tabular-nums whitespace-nowrap'>"+money2(budget.forecastHighEuro-budget.capEuro)+" oltre</td></tr>",
                      "</tfoot>",
                    "</table>",
                  "</div>",
                  "<p class='mt-3 text-[10px] leading-relaxed text-emerald-900'>Il trekking include guida, trasferimenti del pacchetto, pasti previsti e due notti in cabañas: <strong>non sono conteggiati negli hotel o nelle altre escursioni</strong>. Il controvalore di "+money2(budget.trekkingApproxEuro)+" usa il cambio BCE del 15/10/2026 (1 € = 20,7596 MXN); l'addebito bancario effettivo potrebbe differire.</p>",
                "</details>",
              "</div>",
              "<h3 class='mb-3 text-[11px] uppercase tracking-widest font-black text-slate-500'>Soggiorni in ordine cronologico</h3>",
              "<div class='grid grid-cols-1 lg:grid-cols-2 gap-3'>"+cards+"</div>",
              "<div class='mt-5 p-4 rounded-xl bg-white border border-gray-200 flex items-center justify-between gap-3'><strong class='text-sm text-slate-800'>Totale "+stays.length+" soggiorni</strong><strong class='text-2xl font-black text-blue-950 tabular-nums'>"+euro(eurosTotal)+"</strong></div>",
              "<p class='text-[11px] text-gray-500 mt-3'>Le condizioni di pagamento e cancellazione vanno verificate sulle singole conferme.</p>",
            "</div>",
          "</div>",
        "</div>"
    ].join("");
    const modal=document.getElementById("hotel-costs-modal");
    if(modal)modal.addEventListener("click",e=>{if(e.target===modal)toggleHotelCostsModal();});
}
function toggleHotelCostsModal(){
    const modal=document.getElementById("hotel-costs-modal");
    if(!modal)return;
    const opening=modal.classList.contains("hidden");
    modal.classList.toggle("hidden",!opening);
    modal.classList.toggle("flex",opening);
    document.body.classList.toggle("overflow-hidden",opening);
}
document.addEventListener("keydown",e=>{
    const modal=document.getElementById("hotel-costs-modal");
    if(e.key==="Escape"&&modal&&!modal.classList.contains("hidden"))toggleHotelCostsModal();
});

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

// Animazione fiori conservata ma commentata per performance.
// Per riattivarla decommentare anche chiamata initApp e canvas in index.html.
// function initOrganicMosaic() {
//     const canvas = document.getElementById('cempasuchil-canvas');
//     if (!canvas) return;
// 
//     const ctx = canvas.getContext('2d', { alpha: true });
//     if (!ctx) return;
// 
//     const TWO_PI = Math.PI * 2;
// 
//     const COLORS = ['#f6ad55', '#ed8936', '#dd6b20', '#fbd38d', '#e87925'];
//     const CENTER_COLORS = ['#9c5a1a', '#a84f12', '#7c3f12'];
//     const LARGE_LAYER_COLORS = ['#ed8936', '#dd6b20', '#f6ad55'];
//     const HUGE_LAYER_COLORS = ['#dd6b20', '#ed8936', '#f6ad55'];
// 
//     // --------------------------------------------------
//     // ANIMAZIONE
//     // --------------------------------------------------
// 
//     const BLOOM_DURATION = 12000;
//     const FLOWER_OPEN_DURATION = 1100;
// 
//     // --------------------------------------------------
//     // STRUTTURA DEL PATTERN
//     // --------------------------------------------------
// 
//     const CLUSTER_COUNT = 7;
//     const FLOWERS_PER_CLUSTER = 300;
// 
//     // --------------------------------------------------
//     // 4 LIVELLI DI GRANDEZZA
//     // --------------------------------------------------
// 
//     const SMALL_MIN = 7, SMALL_MAX = 12;
//     const MEDIUM_MIN = 13, MEDIUM_MAX = 21;
//     const LARGE_MIN = 23, LARGE_MAX = 38;
//     const HUGE_MIN = 42, HUGE_MAX = 65;
// 
//     const LARGE_FLOWER_COUNT = 42;
//     const HUGE_FLOWER_COUNT = 12;
// 
//     // --------------------------------------------------
//     // LAYOUT: MARGINI PIENI, CENTRO RAREFATTO,
//     // FASCE ALTA E BASSA PIÙ DENSE
//     // --------------------------------------------------
// 
//     /*
//      * Componente orizzontale: la colonna di lettura (max-w-7xl = 1280px)
//      * sta al centro. Fuori i fiori sono densi, dentro radi e sfumati.
//      */
//     const CONTENT_MAX_WIDTH = 1280;  // max-w-7xl
//     const CONTENT_PADDING = 32;      // padding orizzontale dei box (px-8)
//     const FADE_BAND = 200;           // larghezza della transizione laterale
//     const MIN_MARGIN = 96;           // sotto questo margine l'effetto laterale si disattiva
// 
//     /*
//      * Componente verticale: vicino al bordo alto e basso della viewport
//      * la densità risale anche dentro la colonna centrale.
//      */
//     const VERTICAL_BAND = 220;       // altezza della fascia alta/bassa (px)
//     const VERTICAL_STRENGTH = 0.75;  // quanto le fasce si avvicinano alla densità dei margini (0–1)
// 
//     const CENTER_DENSITY = 0.22;     // probabilità di tenere un fiore nel centro "puro"
//     const CENTER_ALPHA = 0.50;       // opacità nel centro "puro"
//     const MARGIN_BOOST = 1.7;        // candidati extra per il riempimento (finiscono nelle zone permesse)
// 
//     const PROFILES = {
//         small: {
//             petalCount: 12, layers: 2, lengthK: 0.95, widthK: 0.42,
//             alphaBase: 0.20, alphaGain: 0.46,
//             centerK: 0.19, centerAlphaBase: 0.46, centerAlphaGain: 0.34,
//             core: false
//         },
//         medium: {
//             petalCount: 15, layers: 3, lengthK: 0.92, widthK: 0.39,
//             alphaBase: 0.20, alphaGain: 0.46,
//             centerK: 0.19, centerAlphaBase: 0.46, centerAlphaGain: 0.34,
//             core: false
//         },
//         large: {
//             petalCount: 18, layers: 4, lengthK: 0.90, widthK: 0.36,
//             alphaBase: 0.18, alphaGain: 0.34,
//             centerK: 0.21, centerAlphaBase: 0.44, centerAlphaGain: 0.36,
//             core: true
//         },
//         huge: {
//             petalCount: 20, layers: 4, lengthK: 0.88, widthK: 0.34,
//             alphaBase: 0.17, alphaGain: 0.32,
//             centerK: 0.22, centerAlphaBase: 0.40, centerAlphaGain: 0.38,
//             core: true
//         }
//     };
// 
//     for (const key in PROFILES) {
//         const p = PROFILES[key];
//         p.petalStep = TWO_PI / p.petalCount;
//         p.layerData = [];
//         for (let layer = 0; layer < p.layers; layer++) {
//             const lp = layer / Math.max(1, p.layers - 1);
//             p.layerData.push({
//                 lengthMul: 0.54 + lp * 0.46,
//                 widthMul: 0.68 + lp * 0.32,
//                 offset: lp * 0.18,
//                 rotation: layer * 0.13,
//                 randomColor: layer % 2 === 1
//             });
//         }
//     }
// 
//     let width = 0;
//     let height = 0;
// 
//     let flowers = [];
//     let lastBloomEnd = BLOOM_DURATION;
// 
//     let animationId = null;
//     let startTime = 0;
//     let resizeTimeout = null;
// 
//     // Stato del layout, ricalcolato ad ogni resize.
//     let contentHalf = 0;
//     let layoutActive = false;
// 
//     // Layer statico dove vengono "cotti" i fiori già completamente sbocciati.
//     const bakedCanvas = document.createElement('canvas');
//     const bakedCtx = bakedCanvas.getContext('2d', { alpha: true });
//     let bakedIndex = 0;
// 
//     // --------------------------------------------------
//     // UTILITY
//     // --------------------------------------------------
// 
//     function random(min, max) {
//         return min + Math.random() * (max - min);
//     }
// 
//     function choose(array) {
//         return array[(Math.random() * array.length) | 0];
//     }
// 
//     function smoothstep(t) {
//         if (t <= 0) return 0;
//         if (t >= 1) return 1;
//         return t * t * (3 - 2 * t);
//     }
// 
//     /*
//      * Peso complessivo di un punto: 1 = zona piena (margini laterali),
//      * 0 = centro "puro" (colonna di lettura, a metà altezza).
//      */
//     function weightAt(x, y) {
//         if (!layoutActive) return 1;
// 
//         // Componente orizzontale: distanza dal bordo della colonna.
//         const dx = Math.abs(x - width / 2) - contentHalf; // > 0 fuori dal contenuto
//         const wx = smoothstep((dx + FADE_BAND / 2) / FADE_BAND);
// 
//         // Componente verticale: vicinanza al bordo alto o basso.
//         const dy = Math.min(y, height - y);               // distanza dal bordo più vicino
//         const wy = (1 - smoothstep(dy / VERTICAL_BAND)) * VERTICAL_STRENGTH;
// 
//         return Math.max(wx, wy);
//     }
// 
//     // Decide se generare un fiore in (x, y).
//     function keepAt(x, y) {
//         return Math.random() < CENTER_DENSITY + (1 - CENTER_DENSITY) * weightAt(x, y);
//     }
// 
//     // Moltiplicatore di opacità in (x, y).
//     function fadeAt(x, y) {
//         return CENTER_ALPHA + (1 - CENTER_ALPHA) * weightAt(x, y);
//     }
// 
//     /*
//      * Estrae un punto nel rettangolo dato rispettando la distribuzione
//      * di densità. Il risultato viene lasciato in sampledX / sampledY.
//      */
//     let sampledX = 0;
//     let sampledY = 0;
// 
//     function samplePoint(margin) {
//         sampledX = random(-margin, width + margin);
//         sampledY = random(-margin, height + margin);
//         for (let tries = 0; tries < 24 && !keepAt(sampledX, sampledY); tries++) {
//             sampledX = random(-margin, width + margin);
//             sampledY = random(-margin, height + margin);
//         }
//     }
// 
//     function makeFlower(x, y, radius, rotation, color, centerColor, sizeLevel, bloomOffset) {
//         const profile = PROFILES[sizeLevel];
//         const phase = random(0, TWO_PI);
//         const petalCount = profile.petalCount;
//         const layers = profile.layers;
// 
//         const lengthVar = new Float64Array(petalCount * layers);
//         const widthVar = new Float64Array(petalCount);
// 
//         for (let i = 0; i < petalCount; i++) {
//             widthVar[i] = 0.92 + Math.sin(phase + i * 2.37) * 0.07;
//             for (let layer = 0; layer < layers; layer++) {
//                 lengthVar[layer * petalCount + i] =
//                     0.94 + Math.sin(phase + i * 1.83 + layer * 2.1) * 0.035;
//             }
//         }
// 
//         return {
//             x, y, radius, rotation, color, centerColor, phase,
//             sizeLevel, bloomOffset, profile, lengthVar, widthVar,
//             fade: fadeAt(x, y)
//         };
//     }
// 
//     // --------------------------------------------------
//     // GENERAZIONE
//     // --------------------------------------------------
// 
//     function createFlowers() {
//         flowers = [];
// 
//         contentHalf = CONTENT_MAX_WIDTH / 2 + CONTENT_PADDING;
//         layoutActive = (width / 2 - contentHalf) >= MIN_MARGIN;
// 
//         // --------------------------------------------------
//         // SPIRALI
//         // --------------------------------------------------
// 
//         const cols = Math.ceil(Math.sqrt(CLUSTER_COUNT));
//         const rows = Math.ceil(CLUSTER_COUNT / cols);
//         const cellW = width / cols;
//         const cellH = height / rows;
//         const diagonal = Math.hypot(width, height);
//         const bloomSpan = BLOOM_DURATION * 0.82;
// 
//         for (let cluster = 0; cluster < CLUSTER_COUNT; cluster++) {
//             const col = cluster % cols;
//             const row = (cluster / cols) | 0;
// 
//             const centerX = col * cellW + cellW * random(0.22, 0.78);
//             const centerY = row * cellH + cellH * random(0.22, 0.78);
// 
//             const maxRadius = diagonal * random(0.29, 0.37);
//             const turns = random(2.6, 3.6);
//             const startAngle = random(0, TWO_PI);
//             const wavePhase = cluster * 1.73;
//             const clusterDelay = cluster * 100;
// 
//             for (let i = 0; i < FLOWERS_PER_CLUSTER; i++) {
//                 const t = i / (FLOWERS_PER_CLUSTER - 1);
// 
//                 const spiralAngle = startAngle + t * TWO_PI * turns;
//                 const spiralRadius = Math.pow(t, 0.72) * maxRadius;
// 
//                 const spread = 20 + Math.pow(t, 0.60) * 82;
//                 const radialOffset = random(-spread, spread);
//                 const tangentialOffset = random(-spread * 0.70, spread * 0.70);
//                 const angleOffset = tangentialOffset / Math.max(spiralRadius, 25);
// 
//                 const finalAngle = spiralAngle + angleOffset;
//                 const finalRadius = Math.max(0, spiralRadius + radialOffset);
// 
//                 const r = finalRadius + Math.sin(t * Math.PI * 8 + wavePhase) * 5;
// 
//                 const x = centerX + Math.cos(finalAngle) * r;
//                 const y = centerY + Math.sin(finalAngle) * r;
// 
//                 if (x < -80 || x > width + 80 || y < -80 || y > height + 80) {
//                     continue;
//                 }
// 
//                 // Rarefazione nella colonna centrale (tranne fasce alta/bassa).
//                 if (!keepAt(x, y)) continue;
// 
//                 const sizeRoll = Math.random();
//                 let size, sizeLevel;
// 
//                 if (sizeRoll < 0.67) {
//                     size = random(SMALL_MIN, SMALL_MAX);
//                     sizeLevel = 'small';
//                 } else if (sizeRoll < 0.91) {
//                     size = random(MEDIUM_MIN, MEDIUM_MAX);
//                     sizeLevel = 'medium';
//                 } else if (sizeRoll < 0.985) {
//                     size = random(LARGE_MIN, LARGE_MAX);
//                     sizeLevel = 'large';
//                 } else {
//                     size = random(HUGE_MIN, HUGE_MAX);
//                     sizeLevel = 'huge';
//                 }
// 
//                 flowers.push(makeFlower(
//                     x, y, size,
//                     finalAngle + Math.PI / 2 + random(-0.8, 0.8),
//                     choose(COLORS),
//                     choose(CENTER_COLORS),
//                     sizeLevel,
//                     t * bloomSpan + clusterDelay + random(-180, 180)
//                 ));
//             }
//         }
// 
//         // --------------------------------------------------
//         // RIEMPIMENTO DEL PIANO
//         // --------------------------------------------------
// 
//         const boost = layoutActive ? MARGIN_BOOST : 1;
//         const areaFlowers = Math.floor((width * height) / 1500 * boost);
// 
//         for (let i = 0; i < areaFlowers; i++) {
//             const x = random(-30, width + 30);
//             const y = random(-30, height + 30);
//             if (!keepAt(x, y)) continue;
// 
//             const sizeRoll = Math.random();
//             let size, sizeLevel;
// 
//             if (sizeRoll < 0.73) {
//                 size = random(SMALL_MIN, SMALL_MAX);
//                 sizeLevel = 'small';
//             } else if (sizeRoll < 0.96) {
//                 size = random(MEDIUM_MIN, MEDIUM_MAX);
//                 sizeLevel = 'medium';
//             } else {
//                 size = random(LARGE_MIN, LARGE_MAX);
//                 sizeLevel = 'large';
//             }
// 
//             flowers.push(makeFlower(
//                 x, y, size,
//                 random(0, TWO_PI),
//                 choose(COLORS),
//                 choose(CENTER_COLORS),
//                 sizeLevel,
//                 BLOOM_DURATION * random(0.48, 0.84)
//             ));
//         }
// 
//         // --------------------------------------------------
//         // LAYER DI GRANDI FIORI
//         // --------------------------------------------------
// 
//         for (let i = 0; i < LARGE_FLOWER_COUNT; i++) {
//             samplePoint(40);
//             flowers.push(makeFlower(
//                 sampledX, sampledY,
//                 random(LARGE_MIN, LARGE_MAX),
//                 random(0, TWO_PI),
//                 choose(LARGE_LAYER_COLORS),
//                 choose(CENTER_COLORS),
//                 'large',
//                 BLOOM_DURATION * random(0.46, 0.64)
//             ));
//         }
// 
//         // --------------------------------------------------
//         // ULTIMO LIVELLO: FIORI ENORMI
//         // --------------------------------------------------
// 
//         for (let i = 0; i < HUGE_FLOWER_COUNT; i++) {
//             samplePoint(60);
//             flowers.push(makeFlower(
//                 sampledX, sampledY,
//                 random(HUGE_MIN, HUGE_MAX),
//                 random(0, TWO_PI),
//                 choose(HUGE_LAYER_COLORS),
//                 choose(CENTER_COLORS),
//                 'huge',
//                 BLOOM_DURATION * random(0.58, 0.76)
//             ));
//         }
// 
//         flowers.sort((a, b) => a.bloomOffset - b.bloomOffset);
// 
//         lastBloomEnd = flowers.length
//             ? flowers[flowers.length - 1].bloomOffset + FLOWER_OPEN_DURATION
//             : BLOOM_DURATION;
//     }
// 
//     // --------------------------------------------------
//     // DISEGNO DEL CEMPASÚCHIL
//     // --------------------------------------------------
// 
//     function drawFlower(c, flower, progress) {
//         const eased = progress >= 1 ? 1 : 1 - Math.pow(1 - progress, 3);
//         const size = flower.radius * eased;
// 
//         const p = flower.profile;
//         const petalCount = p.petalCount;
//         const petalStep = p.petalStep;
//         const layerData = p.layerData;
//         const layers = p.layers;
//         const petalLength = size * p.lengthK;
//         const petalWidth = size * p.widthK;
//         const lengthVar = flower.lengthVar;
//         const widthVar = flower.widthVar;
//         const color = flower.color;
//         const phaseRotation = flower.phase * 0.08;
//         const fade = flower.fade;
// 
//         c.save();
//         c.translate(flower.x, flower.y);
//         c.rotate(flower.rotation);
// 
//         c.globalAlpha = (p.alphaBase + eased * p.alphaGain) * fade;
// 
//         for (let layer = 0; layer < layers; layer++) {
//             const ld = layerData[layer];
//             const currentLength = petalLength * ld.lengthMul;
//             const currentWidth = petalWidth * ld.widthMul;
//             const baseY = ld.offset * size;
//             const randomColor = ld.randomColor;
//             const base = layer * petalCount;
// 
//             c.save();
//             c.rotate(ld.rotation + phaseRotation);
// 
//             if (!randomColor) c.fillStyle = color;
// 
//             for (let i = 0; i < petalCount; i++) {
//                 const L = currentLength * lengthVar[base + i];
//                 const W = currentWidth * widthVar[i];
// 
//                 c.beginPath();
//                 c.moveTo(0, baseY);
//                 c.bezierCurveTo(
//                     -W * 0.72, L * 0.10,
//                     -W, L * 0.43,
//                     -W * 0.72, L * 0.74
//                 );
//                 c.bezierCurveTo(
//                     -W * 0.48, L * 0.96,
//                     W * 0.48, L * 0.96,
//                     W * 0.72, L * 0.74
//                 );
//                 c.bezierCurveTo(
//                     W, L * 0.43,
//                     W * 0.72, L * 0.10,
//                     0, baseY
//                 );
//                 c.quadraticCurveTo(-W * 0.16, L * 0.24, 0, baseY);
// 
//                 if (randomColor) {
//                     const roll = (Math.random() * 3) | 0;
//                     c.fillStyle = roll === 0 ? color : roll === 1 ? '#f6ad55' : '#ed8936';
//                 }
// 
//                 c.fill();
//                 c.rotate(petalStep);
//             }
// 
//             c.restore();
//         }
// 
//         const centerSize = size * p.centerK;
// 
//         c.globalAlpha = (p.centerAlphaBase + eased * p.centerAlphaGain) * fade;
//         c.fillStyle = flower.centerColor;
//         c.beginPath();
//         c.arc(0, 0, centerSize, 0, TWO_PI);
//         c.fill();
// 
//         if (p.core) {
//             c.globalAlpha = (0.30 + eased * 0.30) * fade;
//             c.fillStyle = '#713b10';
//             c.beginPath();
//             c.arc(0, 0, centerSize * 0.42, 0, TWO_PI);
//             c.fill();
//         }
// 
//         c.restore();
//     }
// 
//     // --------------------------------------------------
//     // RENDER
//     // --------------------------------------------------
// 
//     function render(timestamp) {
//         const elapsed = timestamp - startTime;
//         const n = flowers.length;
// 
//         while (
//             bakedIndex < n &&
//             elapsed - flowers[bakedIndex].bloomOffset >= FLOWER_OPEN_DURATION
//         ) {
//             drawFlower(bakedCtx, flowers[bakedIndex], 1);
//             bakedIndex++;
//         }
// 
//         ctx.clearRect(0, 0, width, height);
//         if (bakedCanvas.width > 0 && bakedCanvas.height > 0) {
//             ctx.drawImage(bakedCanvas, 0, 0, width, height);
//         }
// 
//         for (let k = bakedIndex; k < n; k++) {
//             const flower = flowers[k];
//             const progress = (elapsed - flower.bloomOffset) / FLOWER_OPEN_DURATION;
//             if (progress <= 0) break;
//             drawFlower(ctx, flower, progress);
//         }
// 
//         if (elapsed < lastBloomEnd) {
//             animationId = requestAnimationFrame(render);
//         } else {
//             animationId = null;
//         }
//     }
// 
//     // --------------------------------------------------
//     // RESIZE
//     // --------------------------------------------------
// 
//     function resize() {
//         if (animationId !== null) {
//             cancelAnimationFrame(animationId);
//             animationId = null;
//         }
// 
//         clearTimeout(resizeTimeout);
// 
//         resizeTimeout = setTimeout(() => {
//             const dpr = Math.min(window.devicePixelRatio || 1, 2);
// 
//             width = window.innerWidth;
//             height = window.innerHeight;
// 
//             canvas.width = Math.round(width * dpr);
//             canvas.height = Math.round(height * dpr);
//             canvas.style.width = `${width}px`;
//             canvas.style.height = `${height}px`;
//             ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//             ctx.clearRect(0, 0, width, height);
// 
//             bakedCanvas.width = canvas.width;
//             bakedCanvas.height = canvas.height;
//             bakedCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
//             bakedIndex = 0;
// 
//             createFlowers();
// 
//             startTime = performance.now();
//             animationId = requestAnimationFrame(render);
//         }, 100);
//     }
// 
//     window.addEventListener('resize', resize, { passive: true });
// 
//     resize();
// }
// 