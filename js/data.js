// Dati viaggio - js/data.js
// Riepiloghi non duplicano i dettagli: hotel in hotelBookings, esperienze nei giorni e operatori in tourContacts.
// Il tetto €10.000 include ogni costo della vacanza; le stime non equivalgono a prenotazioni/pagamenti.

const tripData = {
    "general": {
        "dates": "20 Dicembre 2026 – 17 Gennaio 2027 • 29 Giorni",
        "title": "Messico",
        "footerName": "Spedizione Sud Messico (29 Giorni)",
        "footerSeason": "Dicembre - Gennaio",
        "hotelBookings": {
            "source": "Booking, 16 ottobre 2026 · 8 soggiorni confermati per 2 adulti.",
            "totalEuro": 1845,
            "paidStatus": "Prenotazione ≠ pagamento. Coral Princess: non pagato; per gli altri hotel pagamento da verificare.",
            "validTotalEuro": 1845,
            "warning": "1.845 € per 23 notti in hotel; le 2 notti Sierra Norte sono incluse nel trekking già pagato. Restano fuori le notti di viaggio e le altre spese.",
            "items": [
                {
                    "name": "The PM at Condesa Arts & Boutique Experience",
                    "city": "Città del Messico",
                    "checkin": "2026-12-20",
                    "checkout": "2026-12-23",
                    "checkinNote": "Check-in 20 dicembre 22:00–23:00 approvato dalla struttura tramite Booking.",
                    "totalEuro": 223,
                    "cancellation": "Non rimborsabile",
                    "status": "Confermato",
                    "areaId": 1
                },
                {
                    "name": "Hotel Cazomalli Oaxaca",
                    "city": "Oaxaca",
                    "checkin": "2026-12-24",
                    "checkout": "2026-12-26",
                    "totalEuro": 199,
                    "cancellation": "Cancellazione gratuita",
                    "status": "Confermato",
                    "areaId": 2
                },
                {
                    "name": "Hotel Cazomalli Oaxaca",
                    "city": "Oaxaca",
                    "checkin": "2026-12-28",
                    "checkout": "2026-12-30",
                    "totalEuro": 232,
                    "cancellation": "Cancellazione gratuita",
                    "status": "Confermato",
                    "areaId": 2
                },
                {
                    "name": "Posada Paloma",
                    "city": "San Agustinillo",
                    "checkin": "2026-12-30",
                    "checkout": "2027-01-03",
                    "totalEuro": 266,
                    "cancellation": "Cancellazione gratuita",
                    "status": "Confermato",
                    "areaId": 6
                },
                {
                    "name": "Los Susurros Casa Monkey Rescue and Rehabilitation Sanctuary",
                    "city": "Palenque",
                    "checkin": "2027-01-04",
                    "checkout": "2027-01-07",
                    "totalEuro": 166,
                    "cancellation": "Cancellazione gratuita",
                    "status": "Confermato",
                    "areaId": 3
                },
                {
                    "name": "Hotel Aires Bacalar",
                    "city": "Bacalar",
                    "checkin": "2027-01-07",
                    "checkout": "2027-01-10",
                    "totalEuro": 290,
                    "cancellation": "Cancellazione gratuita (secondo Booking; scadenza visualizzata: prima del 5 gen 2027)",
                    "status": "Confermato",
                    "paymentStatus": "Pagamento non verificato",
                    "roomType": "Camera Queen con Terrazza (tariffa scelta, verificare conferma)",
                    "breakfast": "Inclusa",
                    "areaId": 4
                },
                {
                    "name": "Coral Princess Hotel & Dive Resort",
                    "city": "Cozumel · Zona Hotelera Norte",
                    "checkin": "2027-01-10",
                    "checkout": "2027-01-12",
                    "totalEuro": 300,
                    "cancellation": "Cancellazione gratuita (secondo Booking; verificare la scadenza nella prenotazione)",
                    "status": "Confermato",
                    "paymentStatus": "Non pagato",
                    "roomType": "Camera King Deluxe Fronte Oceano",
                    "breakfast": "Non inclusa",
                    "areaId": 5
                },
                {
                    "name": "El Ultimo Maya",
                    "city": "Akumal Pueblo",
                    "checkin": "2027-01-12",
                    "checkout": "2027-01-16",
                    "totalEuro": 169,
                    "cancellation": "Cancellazione gratuita (offerta visualizzata: prima dell'11 gen 2027; verificare nella conferma)",
                    "status": "Confermato",
                    "paymentStatus": "Pagamento non verificato",
                    "roomType": "Camera Deluxe · 2 letti singoli (tariffa selezionata; verificare nella conferma)",
                    "breakfast": "Non indicata come inclusa",
                    "areaId": 5
                }
            ]
        },
        "budget": {
            "capEuro": 10000,
            "people": 2,
            "includes": [
                "voli internazionali",
                "hotel e trekking",
                "spostamenti interni",
                "tour e ingressi",
                "pasti",
                "attrezzatura",
                "souvenir",
                "valigia e bagagli extra",
                "imprevisti",
                "assicurazione di viaggio (già compresa nei voli)"
            ],
            "confirmedFlightsEuro": 2147.36,
            "note": "Budget complessivo per 2 persone, tetto €10.000 inclusi tutti i costi. Voli €2.147,36 TOTALI per due (importo confermato, assicurazione di viaggio inclusa; pagamento non verificato); hotel prenotati €1.845 (pagamenti da verificare); trekking Sierra Norte già pagato 12.917,70 MXN. Bus acquistati: Taxqueña → Oaxaca del 23–24 dicembre (103 € totali), Oaxaca → Pochutla del 30 dicembre 09:15–13:00 (52 € totali), Pochutla → Oaxaca del 3 gennaio 14:10 (1.030 MXN pagati per 2) e Oaxaca → Villahermosa del 3 gennaio 21:30 (3.002 MXN pagati per 2). Ultimi due pagati il 13/11/2026 via PayPal, totale 4.032 MXN. I precedenti 155 € sono contabilizzati separatamente; evitare doppi conteggi nel budget. Taxi Pochutla → San Agustinillo: Posada Paloma conferma che si trova un taxi de sitio fuori dalla terminal; nessuna prenotazione necessaria, tariffa da concordare. Spese rimanenti stimate: escursioni, altri trasporti, pasti, attrezzatura, souvenir, valigia extra, imprevisti. L'assicurazione inclusa nei voli non va conteggiata una seconda volta; verificare le coperture per le attività programmate.",
            "flightTicketPriceEuro": 1073.68,
            "flightPassengersAssumed": 2,
            "estimatedRoundtripFlightsEuro": 2147.36,
            "flightPriceStatus": "Totale confermato dall'utente: €2.147,36 per entrambi i viaggiatori, assicurazione di viaggio inclusa. Nessun secondo addebito per l'assicurazione nel budget. Pagamento dei voli non verificato.",
            "trekkingPaidMxn": 12917.7,
            "trekkingApproxEuro": 622.25,
            "trekkingStatus": "PAGATO · Cammini Reali Sierra Norte, 26–28 dicembre, 2 persone, con 2 notti in cabañas e pasti inclusi",
            "fxEuroMxn": 20.7596,
            "fxDate": "2026-10-15",
            "fxSource": "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/eurofxref-graph-mxn.en.html",
            "hotelBookingsEuro": 1845,
            "knownExpensesApproxEuro": 4769.61,
            "pendingEstimates": [
                {
                    "key": "esperienze",
                    "label": "Escursioni, guide e ingressi (escluso trekking)",
                    "estimateEuro": 1000,
                    "minEuro": 750,
                    "maxEuro": 1350
                },
                {
                    "key": "intercity",
                    "label": "Altri bus, Tren Maya, traghetti e mezzi interurbani (esclusi i due bus già acquistati)",
                    "estimateEuro": 365,
                    "minEuro": 195,
                    "maxEuro": 545
                },
                {
                    "key": "taxi",
                    "label": "Taxi, transfer e trasporti locali",
                    "estimateEuro": 430,
                    "minEuro": 300,
                    "maxEuro": 600
                },
                {
                    "key": "pasti",
                    "label": "Pasti e bevande per due",
                    "estimateEuro": 1350,
                    "minEuro": 1050,
                    "maxEuro": 1750
                },
                {
                    "key": "attrezzatura",
                    "label": "Attrezzatura da acquistare prima della partenza",
                    "estimateEuro": 300,
                    "minEuro": 150,
                    "maxEuro": 500
                },
                {
                    "key": "souvenir",
                    "label": "Souvenir, shopping e regali",
                    "estimateEuro": 350,
                    "minEuro": 150,
                    "maxEuro": 550
                },
                {
                    "key": "valigia",
                    "label": "Valigia aggiuntiva e bagaglio extra",
                    "estimateEuro": 130,
                    "minEuro": 70,
                    "maxEuro": 220
                },
                {
                    "key": "imprevisti",
                    "label": "Fondo imprevisti",
                    "estimateEuro": 600,
                    "minEuro": 500,
                    "maxEuro": 900
                }
            ],
            "forecastEuro": 9294.61,
            "forecastRemainingEuro": 705.39,
            "documentedReservationsEuro": 1845,
            "documentedPaidEuroApprox": 622.25,
            "forecastLowEuro": 7934.61,
            "forecastHighEuro": 11184.61,
            "experiencesAllowanceCentralEuro": 1705.39,
            "confirmedIntercityEuro": 155,
            "intercityEstimatedRemainingEuro": 365
        },
        "subtitle": "29 giorni tra cultura, foreste, montagne e due oceani",
        "transportBookings": [
            {
                "id": "bus-taxquena-oaxaca-2026-12-23",
                "name": "Bus notturno México Taxqueña → Oaxaca",
                "status": "Acquistato",
                "date": "2026-12-23",
                "departureTime": "22:30",
                "arrivalDate": "2026-12-24",
                "arrivalTime": "05:30",
                "origin": "México Taxqueña (Central del Sur)",
                "destination": "Oaxaca (terminal esatto da verificare sul biglietto)",
                "passengers": 2,
                "totalEuro": 103,
                "pricePerPersonEuro": 51.5,
                "operator": "Da verificare sul biglietto",
                "paymentStatus": "Da verificare"
            },
            {
                "id": "bus-oaxaca-pochutla-2026-12-30",
                "name": "Bus Oaxaca → Pochutla",
                "status": "Acquistato",
                "date": "2026-12-30",
                "departureTime": "09:15",
                "arrivalDate": "2026-12-30",
                "arrivalTime": "13:00",
                "origin": "Oaxaca (terminale da verificare sul biglietto)",
                "destination": "Calle Constitución, Centro, San Pedro Pochutla, Oaxaca, C.P. 70900 (indirizzo sul biglietto; punto di discesa da confermare)",
                "totalEuro": 52,
                "operator": "Da verificare",
                "paymentStatus": "Da verificare",
                "notes": "Posada Paloma ha risposto: taxi de sitio disponibili fuori dalla terminal di Pochutla all'arrivo il 30 dicembre alle 13:00. Taxi da San Agustinillo non autorizzati a prendere passeggeri a Pochutla; concordare tariffa prima della corsa."
            }
        ]
    },
    "areas": [
        {
            "id": 1,
            "navTitle": "Città del Messico",
            "navSubtitle": "CDMX e Teotihuacán",
            "badge": "Giorni 1 - 4 • Capitale",
            "locationText": "Città del Messico",
            "title": "Il Cuore della Capitale",
            "description": "21 Teotihuacán e La Gruta · 22 Centro e Museo di Antropologia, sera Lucha Libre · 23 Coyoacán e Xochimilco.",
            "images": [
                "assets/img/Citta_Del_Messico.png"
            ],
            "links": [],
            "days": [
                {
                    "id": "1-1",
                    "dayName": "Giorno 1 (21 Dic)",
                    "title": "La Città degli Dei: Teotihuacán",
                    "location": "Teotihuacán (Nord CDMX)",
                    "shortDesc": "Visita archeologica privata prenotata dalle 09:30 alle 12:30 e pranzo a La Gruta alle 13:00.",
                    "fullDesc": "<p><strong>09:30–12:30 · Teotihuacán.</strong> Visita privata A fondo in spagnolo prenotata con Ruta Mágica, senza negozi né degustazioni. Percorso tra Piramide del Sole, Piramide della Luna, Calzada de los Muertos e Tempio del Serpente Piumato, compatibilmente con i tempi. <strong>Tour prenotato.</strong> Biglietti archeologici esclusi; importi e saldo nella sezione budget.</p><p><strong>13:00 · La Gruta.</strong> Pranzo già prenotato. La visita deve concludersi vicino alla Puerta 5 alle 12:30 per raggiungere il ristorante puntuali.</p>",
                    "images": [
                        "assets/img/Teotihuacan_Piramide_Sole.png"
                    ],
                    "links": [
                        {
                            "text": "🏛️ INAH · guida ufficiale alla visita",
                            "url": "https://visitateotihuacan.inah.gob.mx/en/visit/"
                        },
                        {
                            "text": "🗺️ INAH · percorsi e suggerimenti",
                            "url": "https://visitateotihuacan.inah.gob.mx/en/explore/"
                        },
                        {
                            "text": "🍽️ La Gruta · prenotazione pranzo alle 13:00",
                            "url": "https://www.lagruta.mx/"
                        }
                    ],
                    "route": [
                        {
                            "name": "Calzada de los Muertos",
                            "coords": [
                                19.69,
                                -98.8445
                            ],
                            "image": "https://images.unsplash.com/photo-1605315510619-756188cc5c3b?auto=format&fit=crop&w=400&q=80"
                        },
                        {
                            "name": "Piramide del Sole",
                            "coords": [
                                19.6925,
                                -98.8439
                            ],
                            "image": "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=400&q=80"
                        },
                        {
                            "name": "Restaurante La Gruta",
                            "coords": [
                                19.6917,
                                -98.8384
                            ],
                            "image": "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&w=400&q=80"
                        }
                    ],
                    "operationalNotes": []
                },
                {
                    "id": "1-2",
                    "dayName": "Giorno 2 (22 Dic)",
                    "title": "Centro storico, Antropologia e Lucha Libre",
                    "location": "Centro Histórico · Chapultepec · Arena México",
                    "shortDesc": "Centro storico e Museo di Antropologia; alle 19:30 Lucha Libre all'Arena México (biglietti acquistati).",
                    "fullDesc": "<p><strong>Mattina · Centro Histórico.</strong> Zócalo e Templo Mayor sono le priorità. Palazzo Nazionale, Museo Vivo del Muralismo, Casa de los Azulejos e Torre Latinoamericana rimangono opzioni: meglio scegliere poche visite e approfondirle.</p><p><strong>Pomeriggio · Museo Nacional de Antropología.</strong> Dedicate almeno un paio d'ore alla collezione; il parco di Chapultepec è un'eventuale passeggiata, senza aggiungere troppe tappe.</p><p><strong>19:30 · Lucha Libre all'Arena México.</strong> Due biglietti già acquistati: settore <strong>RING R, fila 8, posti 107–108</strong>.</p>",
                    "images": [
                        "assets/img/Centro_Historico.png"
                    ],
                    "links": [
                        {
                            "text": "🔗 Info Palacio Nacional",
                            "url": "https://www.gob.mx/palacionacional"
                        },
                        {
                            "text": "🔗 Info Templo Mayor",
                            "url": "https://historia.nationalgeographic.com.es/a/templo-mayor-tenochtitlan-centro-espiritual-mundo-azteca_18891"
                        },
                        {
                            "text": "🔗 Mitologia di Tlaloc",
                            "url": "https://mitologiedelmondo.it/tlaloc/"
                        },
                        {
                            "text": "🔗 Museo Nacional de Antropología",
                            "url": "https://www.mna.inah.gob.mx/"
                        },
                        {
                            "text": "🤼 Lucha Libre · Arena México su Ticketmaster",
                            "url": "https://www.ticketmaster.com.mx/arena-mexico-tickets-mexico/venue/164115"
                        }
                    ],
                    "route": [
                        {
                            "name": "Palacio Nacional",
                            "coords": [
                                19.4323,
                                -99.1312
                            ],
                            "image": "assets/img/Palacio_Nacional.png"
                        },
                        {
                            "name": "Templo Mayor",
                            "coords": [
                                19.4349,
                                -99.1314
                            ],
                            "image": "assets/img/Templo_Mayor.png"
                        },
                        {
                            "name": "Museo Vivo del Muralismo",
                            "coords": [
                                19.4326,
                                -99.136
                            ],
                            "image": "assets/img/Museo_Vivo_Muralismo.png"
                        },
                        {
                            "name": "Casa de los Azulejos",
                            "coords": [
                                19.4335,
                                -99.1396
                            ],
                            "image": "assets/img/Casa_Azulejos.png"
                        },
                        {
                            "name": "Torre Latinoamericana",
                            "coords": [
                                19.4339,
                                -99.1406
                            ],
                            "image": "assets/img/Torre_Latinoamericana.png"
                        },
                        {
                            "name": "Bosque de Chapultepec (Museo)",
                            "coords": [
                                19.426,
                                -99.1863
                            ],
                            "image": "assets/img/Bosque_Chapultepec.png"
                        }
                    ],
                    "operationalNotes": []
                },
                {
                    "id": "1-3",
                    "dayName": "Giorno 3 (23 Dic)",
                    "title": "Coyoacán e canali di Xochimilco",
                    "location": "Coyoacán · Xochimilco",
                    "shortDesc": "Passeggiata a Coyoacán e giro in trajinera a Xochimilco, da organizzare.",
                    "fullDesc": "<p><strong>Coyoacán.</strong> Passeggiata fra le vie del quartiere, Plaza Hidalgo, mercatini e caffè. Nessun museo obbligatorio.</p><p><strong>Xochimilco.</strong> Giro in trajinera sui canali; valutare un percorso più tranquillo nella zona di Cuemanco anziché le proposte festaioli. Durata e imbarcadero ancora da scegliere.</p>",
                    "images": [
                        "assets/img/Xochimilco_trajineras.jpg"
                    ],
                    "links": [],
                    "route": [
                        {
                            "name": "Plaza Hidalgo, Coyoacán",
                            "coords": [
                                19.3496,
                                -99.1626
                            ],
                            "image": "https://images.unsplash.com/photo-1587822557480-1a76a5df489c?auto=format&fit=crop&w=400&q=80"
                        },
                        {
                            "name": "Imbarcadero Xochimilco",
                            "coords": [
                                19.2543,
                                -99.1035
                            ],
                            "image": "assets/img/Xochimilco_trajineras.jpg"
                        }
                    ],
                    "operationalNotes": []
                }
            ],
            "basecamp": {
                "zone": "CDMX · Trasporti e orari",
                "hotelIdea": "",
                "why": "",
                "tags": [
                    "🌳 Condesa e Roma",
                    "🏛️ Musei e civiltà preispaniche",
                    "🌮 Cucina messicana"
                ],
                "transports": [
                    {
                        "icon": "✈️",
                        "title": "20 dic · MEX → The PM Condesa",
                        "desc": "Volo previsto a MEX T1 alle 20:55. Taxi autorizzato/app per The PM at Condesa Arts & Boutique Experience. Check-in 22:00–23:00 approvato; avvisare l'hotel se si arriva dopo le 23:00."
                    },
                    {
                        "icon": "🚐",
                        "title": "21 dic · Pickup per Teotihuacán",
                        "desc": "Ruta Mágica: pickup direttamente a The PM tra le 08:00 e le 08:30 (ora precisa il 20 dic). Visita 09:30–12:30, fine vicino alla Puerta 5 per La Gruta alle 13:00; autista in attesa e rientro in hotel dopo pranzo. Prenotazione confermata. L'operatore comunica l'orario preciso di pickup il 20 dicembre. Condizioni del saldo nella sezione budget."
                    },
                    {
                        "icon": "🚕",
                        "title": "22 dic · Arena México",
                        "desc": "Organizzare andata e ritorno serali dall'Arena México a Condesa con trasporto affidabile; lo spettacolo inizia alle 19:30."
                    },
                    {
                        "icon": "🛶",
                        "title": "23 dic · Coyoacán → Xochimilco",
                        "desc": "Raggiungere l'imbarcadero scelto e programmare il rientro in hotel per recuperare gli zaini. Spostamenti locali non prenotati."
                    },
                    {
                        "icon": "🚌",
                        "title": "23 dic · CDMX Taxqueña → Oaxaca",
                        "desc": "Bus notturno acquistato per due: partenza da Terminal del Sur Taxqueña alle 22:30, arrivo a Oaxaca il 24 alle 05:30. Presentarsi indicativamente entro 21:30–21:45; costo 103 € registrato soltanto nel budget trasporti interurbani."
                    }
                ]
            },
            "food": "La Gruta è già prenotata per il pranzo del 21. Per altre esperienze gastronomiche: Maizajo ed Expendio de Maíz; per la sera del 21, Jazzatlán Capital è una proposta jazz aperta di lunedì, programma da confermare.",
            "budget": {
                "total": "≈ 950 € stimati per 2 · CDMX 20–23 dicembre · bus per Oaxaca escluso",
                "spent": "Hotel prenotato; Lucha Libre acquistata; La Gruta prenotata; Ruta Mágica prenotato con acconto pagato e saldo ancora dovuto.",
                "items": [
                    {
                        "name": "Ruta Mágica · Teotihuacán 21 dic · 2 persone",
                        "cost": "3.680 MXN per 2 · prenotato. Acconto 1.840 MXN ricevuto il 16/11; saldo 1.840 MXN obbligatorio entro 20/12/2026, in contanti o tramite bonifico secondo la ricevuta. Chiesto all'operatore se possibile pagare online con carta o in contanti all'autista il 21/12: risposta ancora da ricevere. Ingressi al sito esclusi."
                    },
                    {
                        "name": "Teotihuacán · ingressi per 2",
                        "cost": "Circa 400–420 MXN, da pagare sul posto (esclusi da Ruta Mágica)"
                    },
                    {
                        "name": "Pranzo La Gruta · 21 dic",
                        "cost": "Prenotato; budget pranzo completo per 2: 1.200–1.700 MXN (circa 58–82 €), ancora da pagare"
                    },
                    {
                        "name": "Museo Nacional de Antropología · 22 dic · 2 persone",
                        "cost": "Circa 420 MXN (20 €) · visita in programma, ingressi da comprare"
                    },
                    {
                        "name": "Lucha Libre · 22 dic (2 biglietti acquistati)",
                        "cost": "1.130 MXN totali per 2, acquistati · RING R fila 8, posti 107–108"
                    },
                    {
                        "name": "Xochimilco · trajinera 23 dicembre",
                        "cost": "Stima 600–1.500 MXN (29–72 €) per 2 · da organizzare"
                    },
                    {
                        "name": "Altri pranzi 22 e 23 dicembre",
                        "cost": "Stima complessiva 36–60 € per 2"
                    },
                    {
                        "name": "Cene zona Condesa (20–22 dicembre)",
                        "cost": "Stima 94–145 € per 2; sera del 20 probabilmente soltanto uno spuntino"
                    },
                    {
                        "name": "Colazioni, Uber/metro, bevande e margine",
                        "cost": "Accantonamento per arrivare a circa 950 € totali della tappa; non comprende il bus per Oaxaca"
                    }
                ]
            },
            "reservations": [],
            "mapFocus": {
                "coords": [
                    19.35,
                    -99.13
                ],
                "zoom": 10
            },
            "startDate": "2026-12-20",
            "endDate": "2026-12-23",
            "venues": [
                {
                    "name": "Maizajo",
                    "kind": "Tacos e mais nativo",
                    "where": "Condesa · vicino all'hotel",
                    "description": "Taquería e cucina del mais criollo, con buone alternative vegetali e tortillas artigianali.",
                    "tip": "La taquería non prende prenotazioni: evitare le ore di punta.",
                    "url": "https://www.google.com/maps/search/?api=1&query=Maizajo%20Condesa%20CDMX"
                },
                {
                    "name": "Jazzatlán Capital",
                    "kind": "Jazz dal vivo e cena · opzione lunedì 21",
                    "where": "Guanajuato 239 · Roma Norte",
                    "description": "Jazz club con musica dal vivo, cucina e cocktail. Aperto anche il lunedì dalle 18:00: perfetto per una serata dopo Teotihuacán, se il programma del 21 dicembre lo conferma.",
                    "tip": "Verificare la cartellera del 21/12 e prenotare solo dopo aver scelto il concerto; nessun ingresso acquistato.",
                    "url": "https://www.jazzatlan.club/capital"
                },
                {
                    "name": "Expendio de Maíz Sin Nombre",
                    "kind": "Esperienza gastronomica informale",
                    "where": "Roma Norte",
                    "description": "Degustazione a sorpresa a base di mais e ingredienti del mercato, con cucina a vista e tavoli condivisi.",
                    "tip": "Niente prenotazioni, attesa anche lunga; segnalare esigenze alimentari e portare contanti.",
                    "url": "https://www.google.com/maps/search/?api=1&query=Expendio%20de%20Maiz%20Sin%20Nombre%20Roma%20Norte%20CDMX"
                }
            ],
            "curiosities": [
                {
                    "icon": "🏙️",
                    "title": "Una capitale a 2.240 metri",
                    "text": "CDMX sorge in quota: le giornate possono essere miti, ma la sera di dicembre rinfresca.",
                    "source": "https://mexicocity.cdmx.gob.mx/e/about/about-mexico-city/"
                },
                {
                    "icon": "🌊",
                    "title": "Sotto il centro c’era un lago",
                    "text": "Il centro storico sorge sopra Tenochtitlán, antica capitale mexica costruita sul lago di Texcoco: al Templo Mayor i due mondi si sovrappongono.",
                    "source": "https://whc.unesco.org/en/list/412/"
                },
                {
                    "icon": "🌱",
                    "title": "Xochimilco è un paesaggio vivo",
                    "text": "I canali e le chinampas sono ciò che rimane dell'antico sistema lacustre: non sono solo uno sfondo per le trajineras.",
                    "source": "https://whc.unesco.org/en/list/412/"
                },
                {
                    "icon": "🚇",
                    "title": "Le fermate della metro hanno un simbolo",
                    "text": "La rete usa pittogrammi distintivi, parte dell'identità grafica della città: provate a riconoscerli.",
                    "source": "https://mexicocity.cdmx.gob.mx/e/getting-around/using-the-metro/"
                }
            ]
        },
        {
            "id": 2,
            "navTitle": "Oaxaca e Sierra",
            "navSubtitle": "Città e trekking",
            "badge": "24–29 Dic • Oaxaca, Pueblos Mancomunados e Caminos Reales",
            "locationText": "Oaxaca · Monte Albán · Sierra Norte · Oaxaca",
            "title": "Tradizioni zapoteche e trekking nella Sierra Norte",
            "description": "Oaxaca, Monte Albán e trekking comunitario già pagato (26–28 dicembre). Hierve el Agua da verificare; il 29 resta giorno jolly. Bus Oaxaca → Pochutla 30 dicembre 09:15–13:00 già acquistato (52 € totali).",
            "images": [
                "assets/img/Oaxaca_Ciudad.png",
                "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85"
            ],
            "links": [],
            "basecamp": {
                "zone": "Jalatlaco / Oaxaca · Sierra Norte 26–28 dicembre",
                "hotelIdea": "La stessa base a Jalatlaco prima e dopo il trekking: chiedere deposito bagagli per le due notti in cabaña già incluse nel pacchetto Sierra Norte.",
                "why": "Bus già acquistato con arrivo a Oaxaca il 24 alle 05:30. Chiedere il deposito bagagli al Cazomalli prima del check-in. Trekking dal 26 alle 08:00 al 28 pomeriggio; il 29 resta flessibile.",
                "tags": [
                    "🏛️ Oaxaca 24–25 e 29",
                    "🥾 Sierra 26–28",
                    "✅ Trekking pagato"
                ],
                "transports": [
                    {
                        "icon": "🚌",
                        "title": "Bus acquistato · Taxqueña → Oaxaca",
                        "desc": "Partenza 23 dicembre alle 22:30 da México Taxqueña; arrivo 24 dicembre alle 05:30 a Oaxaca · 103 € totali per due. Verificare terminal d'arrivo e deposito bagagli al Cazomalli."
                    },
                    {
                        "icon": "🚐",
                        "title": "Sierra Norte 26–28",
                        "desc": "Partenza da Oaxaca il 26 alle 08:00; ritorno da Benito Juárez nel pomeriggio del 28, incluso nel pacchetto."
                    },
                    {
                        "icon": "👟",
                        "title": "29 dicembre · jolly",
                        "desc": "Oaxaca a piedi oppure Hierve el Agua / Mitla se il tour natalizio del 25 non si potesse fare."
                    },
                    {
                        "icon": "🚌",
                        "title": "30 dic · Bus Oaxaca → Pochutla acquistato",
                        "desc": "Partenza 09:15, arrivo 13:00; 52 € totali. Posada Paloma consiglia un taxi de sitio fuori dalla terminal di Pochutla; chiedere la tariffa prima di salire."
                    }
                ]
            },
            "food": "Mercati e cucina oaxaqueña il 24–25 e il 29; pasti comunitari inclusi nel pacchetto Sierra Norte, con trota, pulque e tepache.",
            "budget": {
                "total": "12.917,70 MXN · trekking già pagato",
                "spent": "Transfer, guide, pasti e 2 cabañas inclusi",
                "items": [
                    {
                        "name": "Monte Albán · 24 dic, 2 ingressi stranieri",
                        "cost": "420 MXN tariffa INAH 2026, trasporto escluso"
                    },
                    {
                        "name": "Hierve el Agua · 25 oppure 29 dic",
                        "cost": "Tour/apertura ancora da verificare"
                    },
                    {
                        "name": "Bus Oaxaca → Pochutla · 30 dic",
                        "cost": "52 € totali · acquistato · compreso nel budget interurbani"
                    }
                ]
            },
            "reservations": [
                {
                    "name": "Caminos Reales · 26–28 dicembre",
                    "status": "Pagato",
                    "type": "success"
                },
                {
                    "name": "Bus Taxqueña → Oaxaca · 23 dic 22:30 → 24 dic 05:30",
                    "status": "Acquistato · 103 € totali",
                    "type": "success"
                },
                {
                    "name": "Monte Albán · 24 dic",
                    "status": "Orari da confermare",
                    "type": "warning"
                },
                {
                    "name": "Hierve el Agua · 25/29 dic",
                    "status": "Da verificare",
                    "type": "warning"
                },
                {
                    "name": "Bus Oaxaca → Pochutla · 30 dic 09:15–13:00",
                    "status": "Acquistato · 52 € totali",
                    "type": "success"
                }
            ],
            "days": [
                {
                    "id": "2-1",
                    "dayName": "Giorno 4 (24 Dic)",
                    "title": "Monte Albán nella Vigilia, poi Oaxaca centro",
                    "location": "Monte Albán → Santo Domingo · mercati · centro",
                    "shortDesc": "Visita alla città zapoteca di Monte Albán dopo l'arrivo previsto del bus alle 05:30; mercati e centro storico nel pomeriggio, Vigilia in città.",
                    "fullDesc": "<p><strong>Vigilia a Oaxaca.</strong> Arrivo previsto a <strong>Oaxaca alle 05:30</strong> con il <strong>bus notturno già acquistato</strong> da <strong>México Taxqueña (23 dicembre, ore 22:30)</strong>. All'arrivo chiedere deposito bagagli al mattino presso l'hotel già confermato a Jalatlaco, perché l'early check-in non è garantito. Dopo aver lasciato i bagagli, trasferimento a <strong>Monte Albán</strong> per esplorare la città zapoteca: Gran Plaza, terrazze monumentali, panorami sulla valle e, in base ai percorsi aperti, le strutture archeologiche.</p><p><strong>Orario ordinario INAH:</strong> 08:00–17:00, ultimo accesso 16:00; la disponibilità e l'eventuale riduzione di orario per <strong>giovedì 24 dicembre 2026</strong> vanno confermate poco prima della visita. L'ideale è arrivare al mattino e prevedere <strong>circa 3 ore</strong> per il sito; con l'arrivo previsto alle 05:30 c'è margine per colazione e deposito bagagli, ma gli orari festivi del sito vanno verificati.</p><p><strong>Pomeriggio e sera:</strong> Templo de Santo Domingo, mercato 20 de Noviembre, vie del centro e atmosfera della <em>Nochebuena</em>, verificando quali attività siano effettivamente aperte. Cena della Vigilia con prenotazione consigliata. I festeggiamenti religiosi e le calendas possono variare: nessun evento dato per confermato.</p><p><strong>Il 25 dicembre</strong> vorremmo andare a Hierve el Agua soltanto se un operatore conferma l'accesso e il servizio festivo; il trekking Sierra Norte già pagato inizia il <strong>26 dicembre alle 08:00</strong> da Oaxaca.</p>",
                    "images": [
                        "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=400&q=80"
                    ],
                    "links": [
                        {
                            "text": "🏛️ Monte Albán · INAH",
                            "url": "https://lugares.inah.gob.mx/es/node/4351"
                        },
                        {
                            "text": "🏛️ Museo sito Monte Albán · INAH",
                            "url": "https://lugares.inah.gob.mx/es/node/4308"
                        },
                        {
                            "text": "🚌 ADO · arrivo da CDMX",
                            "url": "https://www.ado.com.mx/"
                        }
                    ],
                    "route": [
                        {
                            "name": "Arrivo bus Oaxaca · 05:30 (terminal da verificare)",
                            "coords": [
                                17.0694,
                                -96.7188
                            ]
                        },
                        {
                            "name": "Monte Albán",
                            "coords": [
                                17.0436,
                                -96.7665
                            ]
                        },
                        {
                            "name": "Templo de Santo Domingo",
                            "coords": [
                                17.0658,
                                -96.7232
                            ]
                        },
                        {
                            "name": "Mercado 20 de Noviembre",
                            "coords": [
                                17.0583,
                                -96.7251
                            ]
                        },
                        {
                            "name": "Zócalo di Oaxaca",
                            "coords": [
                                17.0605,
                                -96.7253
                            ]
                        }
                    ],
                    "operationalNotes": [
                        "Confermare l'orario del 24 dicembre di Monte Albán e dei servizi turistici prima di organizzare il transfer.",
                        "Bus già acquistato, arrivo a Oaxaca previsto alle 05:30 del 24 dicembre: organizzare colazione e deposito bagagli. Verificare la terminal di arrivo sul biglietto."
                    ]
                },
                {
                    "id": "2-2",
                    "dayName": "Giorno 5 (25 Dic)",
                    "title": "Natale a Hierve el Agua, se aperto",
                    "location": "Hierve el Agua · Mitla e Tlacolula, se disponibili",
                    "shortDesc": "Prima scelta: le cascate pietrificate a Natale, con trasporto e accesso confermati. Piano B: Oaxaca tranquilla; recupero dell'escursione il 29.",
                    "fullDesc": "<p><strong>Obiettivo di Natale: Hierve el Agua.</strong> Le cascate pietrificate e le piscine minerali sono una delle esperienze naturalistiche a cui teniamo di più. Gli orari generalmente pubblicati sono giornalieri, ma <strong>NON è confermata l'apertura del 25 dicembre 2026</strong>: l'accesso dipende anche dalle comunità locali e i trasporti organizzati possono non operare a Natale.</p><p><strong>Se confermato:</strong> partenza da Oaxaca al mattino con <strong>tour autorizzato o autista privato</strong> che garantisca esplicitamente il 25 dicembre, visita alle formazioni e ai belvedere, rientro nel pomeriggio. L'intera uscita può richiedere <strong>7–10 ore</strong> in base alle soste. <strong>Mitla, Árbol del Tule e mezcal</strong> sono aggiunte facoltative, soltanto se aperti e senza togliere troppo tempo a Hierve el Agua; per Mitla l'orario INAH ordinario è 08:00–17:00, da riconfermare per Natale.</p><p><strong>Piano B se accesso o trasporto non sono confermati:</strong> Natale tranquillo a Oaxaca, tra passeggiate, cibo locale e riposo prima del trekking. <strong>Il 29 dicembre</strong> resta libero e potrà essere usato per recuperare Hierve el Agua o Mitla, se avremo voglia dopo i 40 km di Sierra Norte.</p><p><strong>Da fare:</strong> chiedere conferma scritta dell'operatività natalizia a un operatore, prima di pagare l'escursione. Non presentare Hierve el Agua del 25 come prenotato.</p>",
                    "images": [
                        "https://images.unsplash.com/photo-1577903792019-90b501d7fa74?auto=format&fit=crop&w=400&q=80"
                    ],
                    "links": [
                        {
                            "text": "💧 Hierve el Agua · orari di riferimento, non validi per Natale",
                            "url": "https://www.hierveelaguashuttle.com/hierve.html"
                        },
                        {
                            "text": "🏛️ Zona archeologica di Mitla · INAH",
                            "url": "https://lugares.inah.gob.mx/es/node/4350"
                        }
                    ],
                    "route": [
                        {
                            "name": "Oaxaca de Juárez",
                            "coords": [
                                17.0605,
                                -96.7251
                            ]
                        },
                        {
                            "name": "Árbol del Tule · opzionale",
                            "coords": [
                                17.0468,
                                -96.6364
                            ]
                        },
                        {
                            "name": "Zona archeologica di Mitla · opzionale",
                            "coords": [
                                16.925,
                                -96.358
                            ]
                        },
                        {
                            "name": "Hierve el Agua · se aperto",
                            "coords": [
                                16.8663,
                                -96.2758
                            ]
                        }
                    ],
                    "operationalNotes": [
                        "Hierve el Agua il 25 dicembre NON è confermata: chiedere disponibilità scritta sia per l'accesso sia per il trasporto.",
                        "Piano B: giornata tranquilla a Oaxaca, eventuale recupero il 29 dicembre; nessun acquisto senza conferma."
                    ]
                },
                {
                    "id": "6-dec26",
                    "dayName": "Giorno 6 (26 Dic)",
                    "title": "Caminos Reales I: Las Minas e Amatlán",
                    "location": "Oaxaca → San Miguel Amatlán · Las Minas",
                    "shortDesc": "08:00 partenza da Oaxaca; 10:00 Las Minas, 12 km in 4 ore, pranzo con trota, sala dei codici e prima notte in cabaña.",
                    "fullDesc": "<p><strong>26 dicembre · Las Minas e San Miguel Amatlán (12 km, circa 4 ore).</strong> Alle <strong>08:00</strong> transfer incluso da Oaxaca; alle <strong>10:00</strong> inizio del sentiero Las Minas. <strong>14:00</strong> pranzo con trota, <strong>17:00</strong> visita alla sala dei codici e antichità, <strong>19:00</strong> cena e <strong>20:00</strong> prima notte nella cabaña ad Amatlán.</p><p>La guida e la cabaña sono comprese nel pacchetto già pagato. <strong>Da confermare:</strong> punto di ritrovo del transfer sul voucher e possibili variazioni degli orari. Per cosa portare e condizioni dell'operatore consulta la <a href='sierra-norte.html'>guida Sierra Norte</a>.</p>",
                    "images": [
                        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85"
                    ],
                    "links": [
                        {
                            "text": "🎒 Guida e checklist Sierra Norte",
                            "url": "sierra-norte.html"
                        }
                    ],
                    "route": [
                        {
                            "name": "Oaxaca de Juárez · punto d'incontro da confermare",
                            "coords": [
                                17.0605,
                                -96.7251
                            ]
                        },
                        {
                            "name": "San Miguel Amatlán · Pueblos Mancomunados",
                            "coords": [
                                17.27556,
                                -96.47167
                            ]
                        }
                    ]
                },
                {
                    "id": "6-dec27",
                    "dayName": "Giorno 7 (27 Dic)",
                    "title": "Caminos Reales II: Lachatao → Latuvi",
                    "location": "Camino Real da Lachatao a Santa Marta Latuvi",
                    "shortDesc": "08:00 colazione; 09:00 partenza trekking 16 km / 5–6 ore; pomeriggio con laboratorio di pulque e tepache e notte a Latuvi.",
                    "fullDesc": "<p><strong>27 dicembre · Lachatao → Santa Marta Latuvi (16 km, circa 5–6 ore).</strong> <strong>08:00</strong> colazione, <strong>09:00</strong> partenza per il Camino Real guidato, <strong>15:00</strong> pranzo e <strong>16:00</strong> laboratorio di pulque e tepache. <strong>19:00</strong> cena e <strong>20:00</strong> seconda notte nella cabaña a Latuvi.</p><p>È la tappa più lunga dei tre giorni. Orari e attività seguono il programma dell'operatore e possono variare per meteo e indicazioni della guida locale; pernottamento e pasti previsti sono già inclusi.</p>",
                    "images": [
                        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85"
                    ],
                    "links": [],
                    "route": [
                        {
                            "name": "San Miguel Amatlán · Pueblos Mancomunados",
                            "coords": [
                                17.27556,
                                -96.47167
                            ]
                        },
                        {
                            "name": "Santa Marta Latuvi",
                            "coords": [
                                17.2625,
                                -96.49306
                            ]
                        }
                    ]
                },
                {
                    "id": "6-dec28",
                    "dayName": "Giorno 8 (28 Dic)",
                    "title": "Caminos Reales III: Benito Juárez e ritorno a Oaxaca",
                    "location": "Santa Marta Latuvi → Benito Juárez → Oaxaca",
                    "shortDesc": "Tappa finale di 12 km / circa 4 ore e mezza via mirador e ponte sospeso; pranzo alle 14:30 e rientro a Oaxaca dalle 16:00.",
                    "fullDesc": "<p><strong>28 dicembre · Santa Marta Latuvi → Benito Juárez → Oaxaca (12 km, circa 4 ore e mezza).</strong> <strong>08:00</strong> colazione, <strong>09:00</strong> partenza via mirador e ponte sospeso, <strong>14:30</strong> pranzo; <strong>dalle 16:00</strong> transfer incluso di rientro a Oaxaca. <strong>Orario esatto dell'arrivo in città da confermare.</strong></p><p>Si conclude così il trekking di 40 km in tre giorni. La notte del 28 è già prenotata all'Hotel Cazomalli, mentre il 29 rimane libero per recupero e riposo.</p>",
                    "images": [
                        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85"
                    ],
                    "links": [],
                    "route": [
                        {
                            "name": "Santa Marta Latuvi",
                            "coords": [
                                17.2625,
                                -96.49306
                            ]
                        },
                        {
                            "name": "Benito Juárez · Pueblos Mancomunados",
                            "coords": [
                                17.18667,
                                -96.51389
                            ]
                        },
                        {
                            "name": "Oaxaca de Juárez · punto d'incontro da confermare",
                            "coords": [
                                17.0605,
                                -96.7251
                            ]
                        }
                    ]
                },
                {
                    "id": "6-dec29",
                    "dayName": "Giorno 9 (29 Dic)",
                    "title": "Oaxaca jolly: recupero Hierve el Agua oppure riposo",
                    "location": "Oaxaca · Hierve el Agua / Mitla (opzionali)",
                    "shortDesc": "Giornata flessibile dopo 40 km di trekking: recupero dell'escursione di Natale, oppure mercati, cucina e riposo prima della costa.",
                    "fullDesc": "<p>Il <strong>29 dicembre</strong> è libero dopo il trekking in Sierra Norte. Se <strong>Hierve el Agua</strong> non sarà visitabile a Natale, possiamo recuperarla oggi, eventualmente con <strong>Mitla</strong> o un palenque di mezcal se avremo energie e gli orari lo permetteranno.</p><p>Altrimenti giornata tranquilla a <strong>Oaxaca</strong> fra Jalatlaco, Santo Domingo, mercati e cucina locale. <strong>Non c'è alcun cambio di hotel da sistemare:</strong> il Cazomalli copre già la notte del 29 dicembre e Posada Paloma inizia correttamente il <strong>30 dicembre</strong>. Le prenotazioni non si sovrappongono.</p>",
                    "images": [
                        "assets/img/Oaxaca_Ciudad.png"
                    ],
                    "links": [],
                    "route": [
                        {
                            "name": "Oaxaca centro",
                            "coords": [
                                17.0605,
                                -96.7251
                            ]
                        },
                        {
                            "name": "Mitla · opzionale",
                            "coords": [
                                16.925,
                                -96.358
                            ]
                        },
                        {
                            "name": "Hierve el Agua · opzionale",
                            "coords": [
                                16.8663,
                                -96.2758
                            ]
                        }
                    ]
                }
            ],
            "mapFocus": {
                "coords": [
                    17.17,
                    -96.61
                ],
                "zoom": 10
            },
            "overview": {
                "intro": "Archeologia zapoteca, tradizioni oaxaqueñe e tre giorni di trekking comunitario.",
                "highlights": [
                    {
                        "icon": "🏺",
                        "title": "Monte Albán e Oaxaca",
                        "detail": "24 dic · rovine zapoteche, centro e mercati.",
                        "state": "Da organizzare",
                        "dayId": "2-1"
                    },
                    {
                        "icon": "💧",
                        "title": "Hierve el Agua",
                        "detail": "25 dic se aperto, altrimenti recupero il 29.",
                        "state": "Apertura da verificare",
                        "dayId": "2-2"
                    },
                    {
                        "icon": "🥾",
                        "title": "Caminos Reales · Sierra Norte",
                        "detail": "26–28 dic · 40 km guidati, 2 notti in cabañas.",
                        "state": "Già pagato",
                        "dayId": "6-dec26"
                    },
                    {
                        "icon": "🌮",
                        "title": "Oaxaca con calma",
                        "detail": "29 dic · mercati, cucina locale o giornata jolly.",
                        "state": "Flessibile",
                        "dayId": "6-dec29"
                    }
                ],
                "tips": [
                    "Confermare l'apertura di Hierve el Agua il 25 dicembre prima di prenotare.",
                    "Chiedere al Cazomalli il deposito bagagli durante il trekking; il 29 resta flessibile."
                ]
            },
            "startDate": "2026-12-24",
            "endDate": "2026-12-29",
            "venues": [
                {
                    "name": "Zapoteca Oaxaca",
                    "kind": "Cucina istmeña e mezcal",
                    "where": "Jalatlaco · vicino alla base",
                    "description": "Specialità regionali dell'Istmo, patio e cocktail: una cena di quartiere senza formalità.",
                    "tip": "Verificare apertura 24–25 dicembre; il 29 è un'alternativa più flessibile.",
                    "url": "https://www.google.com/maps/search/?api=1&query=Zapoteca%20Oaxaca%205%20de%20Mayo%20307%20Jalatlaco"
                },
                {
                    "name": "Totopo Güero Cocina Istmeña",
                    "kind": "Specialità del Tehuantepec",
                    "where": "Centro · Ignacio Allende 211",
                    "description": "Piccolo locale con piatti dell'Istmo poco comuni nei menu turistici; bella scelta per chi ama esplorare sapori.",
                    "tip": "Da considerare il 29 dicembre; verificare orario e piatti del giorno.",
                    "url": "https://eatingtheworld.net/2026/04/02/totopo-guero-cocina-istmena-our-favorite-restaurant-in-oaxaca/"
                },
                {
                    "name": "Itanoní",
                    "kind": "Memelas, tetelas e mais tradizionale",
                    "where": "Reforma · breve taxi",
                    "description": "Tortillas e specialità fatte con mais nativo: una sosta semplice con la lavorazione del comal a vista.",
                    "tip": "Meglio colazione/pranzo; normalmente pagamento in contanti.",
                    "url": "https://guide.michelin.com/us/en/oaxaca/oaxaca-de-juarez_2056768/restaurant/itanoni"
                }
            ]
        },
        {
            "id": 6,
            "navTitle": "Pacifico",
            "navSubtitle": "San Agustinillo",
            "badge": "30 Dic – 3 Gen • San Agustinillo e Capodanno sul Pacifico",
            "locationText": "Costa di Oaxaca · San Agustinillo, Mazunte e Punta Cometa",
            "title": "Il Pacifico: quattro notti senza fretta",
            "description": "Quattro notti a San Agustinillo, con Mazunte e Punta Cometa liberi e La Ventanilla facoltativa. Il 3 gennaio inizia il trasferimento al Chiapas.",
            "images": [
                "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Playa_San_Agustinillo.jpg/640px-Playa_San_Agustinillo.jpg"
            ],
            "links": [],
            "basecamp": {
                "zone": "San Agustinillo · costa del Pacifico",
                "hotelIdea": "Quattro notti nella stessa struttura, senza cambi durante Capodanno. Dettagli dell'alloggio nella sezione prenotazioni.",
                "why": "Il 30 dicembre arrivo a Pochutla alle 13:00 con bus acquistato da Oaxaca; Posada Paloma conferma taxi de sitio fuori dalla terminal di Pochutla, senza prenotazione. Domenica 3 gennaio rientro a Pochutla per il bus delle 14:10 verso Oaxaca, tratta acquistata del collegamento via Oaxaca e Villahermosa verso Palenque.",
                "tags": [
                    "🌊 Pacifico",
                    "🌅 Capodanno sul mare",
                    "🌿 La Ventanilla facoltativa"
                ],
                "transports": [
                    {
                        "icon": "🚌",
                        "title": "30 dic · Bus Oaxaca → Pochutla acquistato",
                        "desc": "Bus già acquistato: Oaxaca ore 09:15 → Pochutla ore 13:00, 52 € totali. Arrivo indicato: Calle Constitución, Centro, San Pedro Pochutla, Oaxaca, C.P. 70900. Posada Paloma conferma taxi de sitio fuori dalla terminal; non serve prenotare."
                    },
                    {
                        "icon": "🚕",
                        "title": "30 dic · Taxi locale Pochutla → Posada Paloma",
                        "desc": "L'hotel conferma che all'uscita della terminal di Pochutla si trovano taxi de sitio; non è possibile mandare taxi da San Agustinillo per regole locali. Nessuna prenotazione necessaria; tariffa da concordare."
                    },
                    {
                        "icon": "🚶",
                        "title": "31 dic–2 gen · dintorni",
                        "desc": "Mazunte, Punta Cometa e La Ventanilla facoltativi, senza spostare l'alloggio."
                    },
                    {
                        "icon": "🚕",
                        "title": "3 gen · Pochutla → Oaxaca · acquistato",
                        "desc": "Bus ADO acquistato per due: partenza 14:10 da Pochutla, arrivo previsto 17:55 a Oaxaca, 5 de Mayo 900. Pagati 1.030 MXN. Taxi/colectivo da San Agustinillo a Pochutla ancora da organizzare; verificare fermata sul biglietto."
                    }
                ]
            },
            "food": "Pesce fresco, frutta e specialità locali sul Pacifico. Dopo il trekking priorità a mare, riposo e Capodanno tranquillo a San Agustinillo.",
            "budget": {
                "total": "Bus Oaxaca → Pochutla 52 € acquistato · taxi e attività costiere da quotare",
                "spent": "Bus Oaxaca → Pochutla acquistato, 52 € totali; nessuna escursione costiera confermata",
                "items": [
                    {
                        "name": "La Ventanilla · tour comunitario",
                        "cost": "Facoltativo, costo da chiedere"
                    },
                    {
                        "name": "Bus Oaxaca → Pochutla · 30 dic",
                        "cost": "52 € totali · acquistato, già incluso nel budget interurbani"
                    }
                ]
            },
            "reservations": [
                {
                    "name": "Bus Oaxaca → Pochutla · 30 dic 09:15–13:00",
                    "status": "Acquistato · 52 € totali",
                    "type": "success"
                },
                {
                    "name": "Taxi Pochutla → Posada Paloma · 30 dic",
                    "status": "Taxi de sitio alla terminal · indicazioni confermate dall’hotel",
                    "type": "warning"
                },
                {
                    "name": "Bus Pochutla → Oaxaca · 3 gen 14:10–17:55",
                    "status": "Acquistato per 2 · 1.030 MXN pagati",
                    "type": "success"
                }
            ],
            "days": [
                {
                    "id": "6-dec30",
                    "dayName": "Giorno 10 (30 Dic)",
                    "title": "Da Oaxaca al Pacifico: check-in a Posada Paloma",
                    "location": "Oaxaca → zona Pochutla → San Agustinillo",
                    "shortDesc": "Bus Oaxaca 09:15 → Pochutla 13:00 acquistato (52 €). Taxi de sitio alla terminal indicato da Posada Paloma; nessuna prenotazione necessaria.",
                    "fullDesc": "<p>Bus <strong>Oaxaca → Pochutla acquistato per il 30 dicembre</strong>: partenza alle <strong>09:15</strong> e arrivo alle <strong>13:00</strong>, spesa <strong>52 € totali</strong>. Il biglietto indica arrivo in <strong>Calle Constitución, Centro, San Pedro Pochutla, Oaxaca, C.P. 70900</strong>; verificare il punto preciso di discesa. <strong>Posada Paloma conferma</strong> che fuori dalla terminal di Pochutla si trovano taxi locali (taxi de sitio) senza prenotazione. I taxi di San Agustinillo non possono effettuare pickup a Pochutla per regole locali. Chiedere il costo prima di salire. Il soggiorno sul Pacifico è già confermato; dettagli e prezzo nel riquadro <strong>Logistica e spostamenti</strong> sotto la mappa, o in <strong>Hotel & costi</strong>.</p><p>Primo pomeriggio di mare e relax dopo i 40 km del trekking nella Sierra Norte. Il 3 gennaio partenza verso Pochutla per i due autobus ADO acquistati fino a Villahermosa; taxi iniziale e collegamento finale per Palenque ancora da organizzare.</p>",
                    "images": [
                        "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Playa_San_Agustinillo.jpg/640px-Playa_San_Agustinillo.jpg"
                    ],
                    "links": [
                        {
                            "text": "🏖️ San Agustinillo · guida locale",
                            "url": "https://mazunte.gob.mx/locations/san-agustinillo/"
                        },
                        {
                            "text": "🚌 Autobus ADO",
                            "url": "https://www.ado.com.mx/"
                        }
                    ],
                    "route": [
                        {
                            "name": "Oaxaca · bus ore 09:15 (terminal da verificare)",
                            "coords": [
                                17.0605,
                                -96.7251
                            ]
                        },
                        {
                            "name": "Pochutla · Calle Constitución, Centro (arrivo ore 13:00; fermata da confermare)",
                            "coords": [
                                15.744,
                                -96.466
                            ]
                        },
                        {
                            "name": "Playa San Agustinillo",
                            "coords": [
                                15.6659,
                                -96.5438
                            ]
                        }
                    ],
                    "imageCredits": [
                        {
                            "author": "Sgroey",
                            "license": "CC BY-SA 4.0",
                            "url": "https://commons.wikimedia.org/wiki/File:Playa%20San%20Agustinillo.jpg",
                            "caption": "Playa San Agustinillo"
                        }
                    ],
                    "operationalNotes": [
                        "Bus Oaxaca → Pochutla acquistato: 30 dicembre 2026, 09:15–13:00, 52 € totali.",
                        "Indirizzo riportato sul biglietto: Calle Constitución, Centro, San Pedro Pochutla, Oaxaca, C.P. 70900. Punto preciso di discesa da verificare.",
                        "Risposta Posada Paloma: all'uscita della terminal di Pochutla ci sono taxi de sitio, senza necessità di prenotare.",
                        "I taxi di San Agustinillo non possono prelevare passeggeri a Pochutla: prendere taxi de sitio locale e accordare prima il prezzo."
                    ]
                },
                {
                    "id": "6-dec31-jan02",
                    "dayName": "Giorni 11–13 (31 Dic – 2 Gen)",
                    "title": "San Agustinillo: Capodanno e tre giorni sul Pacifico",
                    "location": "San Agustinillo · Mazunte · Punta Cometa",
                    "shortDesc": "Tre giorni al Pacifico: relax e Capodanno; facoltative Mazunte, Punta Cometa e La Ventanilla.",
                    "fullDesc": "<p><strong>31 dicembre–2 gennaio:</strong> giornate libere per il mare, Capodanno tranquillo e piccole uscite facoltative a <strong>Mazunte</strong>, al tramonto di <strong>Punta Cometa</strong> (se il sentiero è percorribile) o alle mangrovie di <strong>La Ventanilla</strong> con guida comunitaria.</p><p><strong>2 gennaio:</strong> ultima giornata completa di relax, prima del lungo trasferimento del 3–4 gennaio. Nessuna escursione né ulteriore alloggio prenotati per queste attività.</p>",
                    "images": [
                        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"
                    ],
                    "links": [],
                    "route": [
                        {
                            "name": "Playa San Agustinillo",
                            "coords": [
                                15.6659,
                                -96.5438
                            ]
                        },
                        {
                            "name": "Mazunte",
                            "coords": [
                                15.6648,
                                -96.554
                            ]
                        }
                    ],
                    "operationalNotes": [
                        "Le uscite a Mazunte, Punta Cometa e La Ventanilla sono facoltative e non prenotate.",
                        "Il 3 gennaio inizia il trasferimento lungo per il Chiapas: verificare i bus con anticipo."
                    ]
                }
            ],
            "mapFocus": {
                "coords": [
                    15.6659,
                    -96.5438
                ],
                "zoom": 12
            },
            "overview": {
                "intro": "Arrivo il 30 dicembre via Pochutla con bus acquistato; poi quattro notti al mare tra tramonti e piccoli villaggi costieri.",
                "highlights": [
                    {
                        "icon": "🌊",
                        "title": "San Agustinillo e Capodanno",
                        "detail": "Spiaggia e riposo dopo la Sierra Norte.",
                        "state": "Soggiorno confermato",
                        "dayId": "6-dec31-jan02"
                    },
                    {
                        "icon": "🌅",
                        "title": "Mazunte e Punta Cometa",
                        "detail": "Passeggiata e tramonto, se il sentiero è praticabile.",
                        "state": "Facoltativo",
                        "dayId": "6-dec31-jan02"
                    },
                    {
                        "icon": "🌿",
                        "title": "La Ventanilla",
                        "detail": "Mangrovie e natura con guida comunitaria.",
                        "state": "Facoltativo",
                        "dayId": "6-dec31-jan02"
                    }
                ],
                "tips": [
                    "Le uscite nei dintorni sono opzionali: tenere spazio al relax.",
                    "3 gen: arrivare in anticipo a Pochutla per il bus ADO acquistato delle 14:10; acquistato anche il notturno delle 21:30 per Villahermosa.",
                    "30 dic: Posada Paloma conferma taxi de sitio fuori dalla terminal di Pochutla; nessuna prenotazione richiesta."
                ]
            },
            "startDate": "2026-12-30",
            "endDate": "2027-01-03",
            "venues": [
                {
                    "name": "La Mora Café",
                    "kind": "Brunch e caffè",
                    "where": "San Agustinillo · Avenida Principal",
                    "description": "Colazioni curate, succhi freschi e proposte vegetariane, perfette per mattine lente dopo il trekking.",
                    "tip": "Locale diurno; ricontrollare orari nel periodo di Capodanno.",
                    "url": "https://www.tripadvisor.it/Restaurant_Review-g674764-d7141246-Reviews-La_Mora_Cafe-San_Agustinillo_Southern_Mexico.html"
                },
                {
                    "name": "El Navegante",
                    "kind": "Pesce e cucina della costa",
                    "where": "San Agustinillo",
                    "description": "Cucina di mare e piatti messicani per una cena senza spostamenti lunghi.",
                    "tip": "Recensioni 2026 miste: meglio controllare il menu e decidere sul posto.",
                    "url": "https://www.tripadvisor.it/Restaurant_Review-g674764-d16759104-Reviews-El_Navegante-San_Agustinillo_Southern_Mexico.html"
                },
                {
                    "name": "RestoBar del Fondo",
                    "kind": "Cena tranquilla e cocktail",
                    "where": "San Agustinillo · strada principale",
                    "description": "Pesce, pizza e drink in atmosfera rilassata: un'opzione poco impegnativa per la sera.",
                    "tip": "Per il 31 dicembre verificare disponibilità e possibili menu speciali.",
                    "url": "https://www.google.com/maps/search/?api=1&query=RestoBar%20del%20Fondo%20San%20Agustinillo%20Oaxaca"
                }
            ],
            "heroCredit": {
                "author": "Sgroey",
                "license": "CC BY-SA 4.0",
                "url": "https://commons.wikimedia.org/wiki/File:Playa%20San%20Agustinillo.jpg"
            }
        },
        {
            "id": 3,
            "navTitle": "Chiapas",
            "navSubtitle": "Palenque e foresta tropicale",
            "badge": "3–6 Gen · Dalla costa alla giungla",
            "locationText": "San Agustinillo → Palenque",
            "title": "Palenque: giungla, città maya e cascate",
            "description": "Dal Pacifico verso Palenque via Oaxaca e Villahermosa: prime due corse ADO acquistate e pagate per due persone; ultima tratta Villahermosa → Palenque non acquistata. Check-in serale del 4 gennaio confermato da Los Susurros; taxi disponibili e considerati sicuri dalla struttura fuori dal terminal ADO di Palenque.",
            "images": [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Temple_of_inscription_in_Palenque_Chiapas_02.jpg/640px-Temple_of_inscription_in_Palenque_Chiapas_02.jpg"
            ],
            "links": [
                {
                    "text": "INAH · Toniná (orari e ingressi)",
                    "url": "https://lugares.inah.gob.mx/es/node/5702"
                }
            ],
            "transferPlan": {
                "eyebrow": "3–4 gennaio · ADO acquistati per 2",
                "title": "Dalla costa al Chiapas, via Oaxaca e Villahermosa",
                "subtitle": "San Agustinillo → Pochutla → Oaxaca → Villahermosa → Palenque",
                "cost": "4.032 MXN pagati per le prime due corse; terza acquistata per 2 (352 MXN confermati per un biglietto). Taxi esclusi.",
                "duration": "Pochutla 3 gen ore 14:10 → Palenque 4 gen ore 20:30 · 30 h 20 min, incluse 3 h 35 min a Oaxaca e 7 h 50 min a Villahermosa",
                "legs": [
                    {
                        "day": "3 gen",
                        "time": "Prima delle 14:10",
                        "from": "San Agustinillo",
                        "to": "Pochutla, Calle Constitución (Centro)",
                        "operator": "Taxi/colectivo locale",
                        "duration": "Da verificare",
                        "price": "Da quotare",
                        "note": "Zaino in spalla. Arrivare in anticipo alla fermata indicata e verificare il punto preciso."
                    },
                    {
                        "day": "3 gen",
                        "time": "14:10 → 17:55",
                        "from": "Pochutla, Calle Constitución, Centro",
                        "to": "Oaxaca, 5 de Mayo 900",
                        "operator": "Autobus (vettore da verificare)",
                        "duration": "3 h 45 min",
                        "price": "1.030 MXN pagati per 2",
                        "note": "ADO acquistato e pagato per due il 13/11/2026. Margine a Oaxaca prima del bus successivo: 3 h 35 min."
                    },
                    {
                        "day": "3 → 4 gen",
                        "time": "21:30 → 10:25 (+1)",
                        "from": "Oaxaca, 5 de Mayo 900",
                        "to": "Villahermosa, Av. Francisco Javier Mina 297",
                        "operator": "Autobus notturno (vettore da verificare)",
                        "duration": "12 h 55 min",
                        "price": "3.002 MXN pagati per 2",
                        "note": "ADO acquistato e pagato per due il 13/11/2026; verificare terminal sui biglietti."
                    },
                    {
                        "day": "4 gen",
                        "time": "10:25 → 18:15",
                        "from": "Villahermosa, Av. Francisco Javier Mina 297",
                        "to": "Villahermosa · visita in città",
                        "operator": "Pausa tra le corse, zaino in spalla",
                        "duration": "7 h 50 min di attesa",
                        "price": "Visite, taxi e pasti extra",
                        "note": "Possibile Parque Museo La Venta, laguna e pranzo; verificare aperture, trasporti e ritorno al terminal in anticipo. Nessun deposito bagagli necessario: solo zaini."
                    },
                    {
                        "day": "4 gen",
                        "time": "18:15 → 20:30",
                        "from": "Villahermosa, Av. Francisco Javier Mina 297",
                        "to": "Palenque, Carretera Catazajá–Rancho Nuevo (fermata esatta da confermare)",
                        "operator": "Autobus (vettore da verificare)",
                        "duration": "2 h 15 min",
                        "price": "Biglietti acquistati per 2 · 352 MXN confermati per un passeggero, costo del secondo da verificare",
                        "note": "Terza tratta acquistata per 2, partenza da Villahermosa alle 18:15 del 4 gennaio. Los Susurros conferma check-in serale e indica taxi sicuri fuori dal terminal ADO; verificare l'effettiva fermata di arrivo sul biglietto."
                    }
                ],
                "warning": "Verificare sul biglietto il terminal di arrivo a Palenque. Los Susurros conferma il check-in serale e indica taxi disponibili fuori dal terminal ADO; coincidenze tra corse separate non garantite.",
                "sources": [
                    {
                        "text": "ADO · verifica orari e acquisto",
                        "url": "https://www.ado.com.mx/"
                    }
                ]
            },
            "days": [
                {
                    "id": "3-jan03",
                    "dayName": "Giorno 14 (3 Gen)",
                    "title": "Dal Pacifico a Oaxaca e bus notturno per Villahermosa",
                    "location": "San Agustinillo · Pochutla · Oaxaca · Villahermosa (notturno)",
                    "shortDesc": "Rientro a Pochutla, bus delle 14:10 per Oaxaca e notturno delle 21:30 per Villahermosa: tratte ADO acquistate e pagate per due.",
                    "fullDesc": "<p>Ultime ore a <strong>San Agustinillo</strong>; poi taxi/colectivo per la fermata a <strong>Pochutla, Calle Constitución (Centro)</strong>. L'autobus individuato parte alle <strong>14:10</strong> e arriva a <strong>Oaxaca, Calle 5 de Mayo 900, alle 17:55</strong> (<strong>1.030 MXN pagati per due</strong>). Ripartenza dallo <strong>stesso indirizzo</strong> alle <strong>21:30</strong> per <strong>Villahermosa</strong>, arrivo alle <strong>10:25 del 4 gennaio</strong> (<strong>3.002 MXN pagati per due</strong>). <strong>Entrambi i bus ADO acquistati e pagati, per 4.032 MXN totali.</strong></p><p>Margine di <strong>3 h 35 min a Oaxaca</strong>. In totale viaggio zaino in spalla, senza valigie. Prezzi, operatori e indirizzi esatti vanno verificati sul biglietto prima del pagamento. Per tutti gli orari vedere la scheda <strong>Logistica e spostamenti</strong>.</p>",
                    "images": [],
                    "links": [],
                    "route": [
                        {
                            "name": "San Agustinillo",
                            "coords": [
                                15.667,
                                -96.55
                            ]
                        },
                        {
                            "name": "San Pedro Pochutla",
                            "coords": [
                                15.744,
                                -96.466
                            ]
                        },
                        {
                            "name": "Oaxaca, Centro",
                            "coords": [
                                17.0605,
                                -96.7251
                            ]
                        }
                    ],
                    "operationalNotes": [
                        "Prima tratta ADO acquistata per 2: 3 gen 14:10 Pochutla → 17:55 Oaxaca, 1.030 MXN pagati.",
                        "Seconda tratta ADO acquistata per 2: 3 gen 21:30 Oaxaca → 4 gen 10:25 Villahermosa, 3.002 MXN pagati.",
                        "A Oaxaca sia arrivo sia partenza risultano a Calle 5 de Mayo 900; margine di 3 h 35 min. Verificare terminal reali e possibili ritardi.",
                        "Entrambi i bus ADO acquistati per 2, totale pagato 4.032 MXN; bus finale Villahermosa → Palenque ancora da acquistare."
                    ]
                },
                {
                    "id": "3-jan04",
                    "dayName": "Giorno 15 (4 Gen)",
                    "title": "Villahermosa: una sosta olmeca prima di Palenque?",
                    "location": "Villahermosa · Parque Museo La Venta · Palenque",
                    "shortDesc": "Arrivo 10:25 a Villahermosa: visita La Venta possibile. Bus per Palenque 18:15–20:30 acquistato per due; check-in serale Los Susurros confermato, taxi disponibili fuori dal terminal ADO.",
                    "fullDesc": "<p>Arrivo del bus a <strong>Villahermosa alle 10:25</strong> in <strong>Av. Francisco Javier Mina 297</strong>. Fino alle 18:15 si può trasformare la lunga attesa in una visita, con <strong>Parque Museo La Venta</strong> e una pausa pranzo: verificare apertura del lunedì, spostamenti e tempi di rientro al terminal. Si viaggia soltanto con gli zaini, senza necessità di deposito valigie.</p><p><strong>Trasferimento previsto:</strong> bus Villahermosa <strong>18:15 → Palenque 20:30</strong> (biglietti <strong>acquistati per due</strong>, 352 MXN confermati per un passeggero), poi taxi verso <strong>Los Susurros</strong>. <strong>Check-in serale confermato dalla struttura</strong>: ci aspetteranno anche in caso di arrivo in serata. L'hotel indica che fuori dal terminal ADO di Palenque ci sono taxi sicuri; controllare comunque la fermata effettiva della corsa sul biglietto. <strong>Entrambi i biglietti del bus finale sono acquistati.</strong></p>",
                    "images": [],
                    "links": [],
                    "route": [
                        {
                            "name": "Villahermosa",
                            "coords": [
                                17.989,
                                -92.93
                            ]
                        },
                        {
                            "name": "Palenque",
                            "coords": [
                                17.509,
                                -92.045
                            ]
                        }
                    ],
                    "operationalNotes": [
                        "Il 4 gen Villahermosa 10:25 → bus Palenque 18:15: attesa 7 h 50 min, utilizzabile per Parque Museo La Venta (orario festivo da verificare).",
                        "Palenque arrivo previsto ore 20:30, fermata esatta da verificare sul biglietto. Secondo Los Susurros i taxi fuori dal terminal ADO sono sicuri; durata taxi da confermare.",
                        "Los Susurros ha confermato il check-in serale e indica taxi sicuri fuori dal terminal ADO; verificare il terminal di arrivo sui biglietti acquistati.",
                        "Check-in serale già confermato: non occorre il pernottamento alternativo a Villahermosa."
                    ]
                },
                {
                    "id": "3-jan05",
                    "dayName": "Giorno 16 (5 Gen)",
                    "title": "Palenque: la città maya nascosta nella giungla",
                    "location": "Zona archeologica di Palenque",
                    "shortDesc": "Giornata dedicata al sito UNESCO: Tempio delle Iscrizioni, Palazzo, complessi cerimoniali e sentieri nella foresta.",
                    "fullDesc": "<p>Dopo il lungo trasferimento dei giorni precedenti, dedichiamo la giornata alla <strong>zona archeologica di Palenque</strong>: un'antica città maya avvolta dalla vegetazione del Chiapas. Partiamo presto per evitare le ore più calde e prendiamo tempo per il <strong>Tempio delle Iscrizioni</strong>, il <strong>Palazzo</strong> e gli altri complessi aperti alla visita.</p><p><strong>Orario di riferimento INAH:</strong> 08:00–17:00, ultimo accesso alle 16:00; biglietti presso il Centro de Atención a Visitantes. Verificare tariffe INAH e gli eventuali ingressi aggiuntivi del parco prima della visita. Una guida locale è consigliata se vogliamo approfondire la storia della città.</p><p>Pomeriggio senza corse: possibile museo di sito, se aperto, oppure riposo a Palenque. <strong>Il 6 gennaio è riservato alle Cascadas Roberto Barrios.</strong></p><p>Controllare con la struttura il tragitto fino all'ingresso, senza dare per scontato che sia raggiungibile a piedi.</p>",
                    "images": [
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Temple_of_inscription_in_Palenque_Chiapas_02.jpg/640px-Temple_of_inscription_in_Palenque_Chiapas_02.jpg"
                    ],
                    "links": [
                        {
                            "text": "🏛️ Sito ufficiale INAH · Palenque",
                            "url": "https://lugares.inah.gob.mx/es/node/4853"
                        },
                        {
                            "text": "🏛️ Museo di sito INAH",
                            "url": "https://lugares.inah.gob.mx/es/node/5072"
                        }
                    ],
                    "route": [
                        {
                            "name": "Palenque, centro",
                            "coords": [
                                17.509,
                                -92.045
                            ]
                        },
                        {
                            "name": "Zona archeologica Palenque",
                            "coords": [
                                17.483,
                                -92.047
                            ]
                        }
                    ],
                    "imageCredits": [
                        {
                            "author": "Patytc",
                            "license": "CC BY-SA 4.0",
                            "url": "https://commons.wikimedia.org/wiki/File:Temple%20of%20inscription%20in%20Palenque%20Chiapas%2002.jpg",
                            "caption": "Tempio delle Iscrizioni, Palenque"
                        }
                    ]
                },
                {
                    "id": "3-jan06",
                    "dayName": "Giorno 17 (6 Gen)",
                    "title": "Cascadas Roberto Barrios: acqua turchese e foresta",
                    "location": "Roberto Barrios · Palenque",
                    "shortDesc": "Escursione alle cascate e alle piscine naturali nella giungla, con tempo per fermarsi e fare il bagno dove consentito.",
                    "fullDesc": "<p>Intera giornata alle <strong>Cascadas Roberto Barrios</strong>, un sistema di salti d'acqua e piscine naturali immerso nella vegetazione. È la giornata più acquatica del Chiapas: prendiamoci il tempo per esplorare i diversi livelli, fermarci nelle zone consentite e goderci il paesaggio.</p><p><strong>Trasporto:</strong> minivan/colectivo locale o escursione da Palenque, da organizzare sul posto; calcolare indicativamente circa un'ora per tratta, variabile in base al mezzo e alla strada. Chiedere sempre l'orario dell'ultima corsa di ritorno prima di partire.</p><p>Portare scarpe con buona aderenza, costume, acqua e una sacca impermeabile. Le rocce possono essere scivolose e la balneazione va valutata in base alle condizioni del giorno. Rientro a Palenque in serata e preparazione dei bagagli per il <strong>Tren Maya del 7 gennaio</strong>.</p><p>Organizzare con la struttura il taxi verso la stazione Tren Maya per il 7 gennaio.</p>",
                    "images": [
                        "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Cascada_Roberto_Barrios_13.jpg/640px-Cascada_Roberto_Barrios_13.jpg"
                    ],
                    "links": [
                        {
                            "text": "🗺️ Roberto Barrios · posizione su OpenStreetMap",
                            "url": "https://www.openstreetmap.org/search?query=Cascadas%20Roberto%20Barrios%20Chiapas"
                        }
                    ],
                    "route": [
                        {
                            "name": "Palenque",
                            "coords": [
                                17.509,
                                -92.045
                            ]
                        },
                        {
                            "name": "Cascadas Roberto Barrios",
                            "coords": [
                                17.318,
                                -92.142
                            ]
                        }
                    ],
                    "imageCredits": [
                        {
                            "author": "ZoRrO0880",
                            "license": "CC BY-SA 4.0",
                            "url": "https://commons.wikimedia.org/wiki/File:Cascada%20Roberto%20Barrios%2013.jpg",
                            "caption": "Cascadas Roberto Barrios, Chiapas"
                        }
                    ]
                }
            ],
            "budget": {
                "total": "Tre tratte ADO acquistate per 2: 4.032 MXN pagati per le prime due; terza tratta 352 MXN confermati per un biglietto e importo del secondo da verificare; taxi e visite esclusi",
                "spent": "Tre tratte ADO acquistate per 2: prime due pagate 4.032 MXN, terza del 4 gennaio 18:15 con un biglietto da 352 MXN e secondo importo da verificare; Los Susurros prenotato 4–7 gennaio",
                "items": [
                    {
                        "name": "3–4 gen · Pochutla → Oaxaca → Villahermosa → Palenque",
                        "cost": "4.032 MXN pagati per le prime due tratte (1.030 + 3.002). Villahermosa → Palenque del 4 gennaio acquistato per due: 352 MXN confermati per un biglietto, importo dell'altro da verificare. Totale effettivo incompleto; taxi esclusi."
                    },
                    {
                        "name": "Palenque · ingresso sito e CONANP, 2 stranieri",
                        "cost": "850 MXN tariffe 2026, trasporti/guida esclusi"
                    },
                    {
                        "name": "Roberto Barrios · 6 gen",
                        "cost": "Ingresso 40 MXN/persona, trasporto da quotare"
                    }
                ]
            },
            "reservations": [
                {
                    "name": "Pochutla → Oaxaca · 3 gen 14:10–17:55",
                    "status": "Acquistato per 2 · 1.030 MXN pagati",
                    "type": "success"
                },
                {
                    "name": "Oaxaca → Villahermosa · 3/4 gen 21:30–10:25",
                    "status": "Acquistato per 2 · 3.002 MXN pagati",
                    "type": "success"
                },
                {
                    "name": "Villahermosa → Palenque · 4 gen 18:15–20:30",
                    "status": "Acquistato per 2 · 352 MXN un biglietto, secondo importo da verificare",
                    "type": "success"
                },
                {
                    "name": "Los Susurros · check-in serale del 4 gen e taxi ADO",
                    "status": "Check-in confermato · taxi disponibili fuori dal terminal ADO",
                    "type": "success"
                },
                {
                    "name": "Ingresso zona archeologica Palenque · 5 gen",
                    "status": "Da organizzare",
                    "type": "warning"
                },
                {
                    "name": "Trasporto / visita Roberto Barrios · 6 gen",
                    "status": "Da organizzare",
                    "type": "warning"
                }
            ],
            "mapFocus": {
                "coords": [
                    17.509,
                    -92.045
                ],
                "zoom": 9
            },
            "basecamp": {
                "zone": "Palenque · area strada per le rovine",
                "hotelIdea": "Fuori dal centro: per escursioni e Tren Maya valutare taxi.",
                "why": "",
                "tags": [
                    "🐒 Natura e primati",
                    "🏛️ Sito maya di Palenque",
                    "💧 Roberto Barrios"
                ],
                "transports": [
                    {
                        "icon": "🏛️",
                        "title": "5 gen · rovine maya",
                        "desc": "Organizzare il trasferimento al sito archeologico."
                    },
                    {
                        "icon": "🚆",
                        "title": "7 gen · Tren Maya",
                        "desc": "Organizzare il transfer dall'hotel alla stazione."
                    }
                ]
            },
            "food": "Per colazioni e cene chiedere disponibilità in struttura o organizzare taxi per Palenque: l'hotel è immerso nel verde, non in pieno centro.",
            "researchNotes": [
                {
                    "title": "Toniná · possibilità da valutare, non inserita nel programma",
                    "body": "Il sito archeologico è stato riaperto a marzo 2026, ma dista circa 118 km da Palenque per tratta. Una visita il 6 gennaio sostituirebbe Roberto Barrios: non aggiungerla senza una decisione. Prima verificare condizioni della strada 199, situazione locale, guida/transfer A/R, tempi e costo; nessuna prenotazione."
                }
            ],
            "overview": {
                "intro": "Due esperienze forti: il sito maya nella foresta e le cascate del Chiapas.",
                "highlights": [
                    {
                        "icon": "🏛️",
                        "title": "Zona archeologica di Palenque",
                        "detail": "5 gen · templi maya immersi nella giungla.",
                        "state": "Da visitare",
                        "dayId": "3-jan05"
                    },
                    {
                        "icon": "💦",
                        "title": "Cascadas Roberto Barrios",
                        "detail": "6 gen · piscine naturali e salti d'acqua.",
                        "state": "Da organizzare",
                        "dayId": "3-jan06"
                    }
                ],
                "tips": [
                    "Arrivare presto al sito archeologico e verificare le aree visitabili.",
                    "Toniná resta un'alternativa da valutare, non una tappa aggiunta al 6 gennaio.",
                    "4 gen: sosta a Villahermosa dalle 10:25 alle 18:15, possibile visita a La Venta. Bus finale acquistato per 2; Los Susurros conferma check-in serale e taxi sicuri fuori dal terminal ADO di Palenque."
                ]
            },
            "startDate": "2027-01-03",
            "endDate": "2027-01-07",
            "venues": [
                {
                    "name": "Don Muchos · El Panchán",
                    "kind": "Cena nella giungla e musica",
                    "where": "Carretera Palenque–Ruinas · taxi",
                    "description": "Locale rustico tra gli alberi, con musica dal vivo: piacevole se avete ancora energie dopo le rovine.",
                    "tip": "Concordare un taxi di ritorno, soprattutto di sera.",
                    "url": "https://palenque.gob.mx/restaurantes/"
                },
                {
                    "name": "Restaurante Maya Cañada",
                    "kind": "Cucina chiapaneca tradizionale",
                    "where": "La Cañada · Palenque centro",
                    "description": "Tamales e specialità regionali in una sala verde; buona alternativa alle cene sempre in hotel.",
                    "tip": "Dalla struttura immersa nella giungla serve un taxi.",
                    "url": "https://www.restaurantemayacanada.com/"
                },
                {
                    "name": "Restaurante Bajlum",
                    "kind": "Cucina ispirata alla tradizione maya",
                    "where": "Carretera verso le rovine · taxi",
                    "description": "Un'esperienza gastronomica particolare con ingredienti del territorio e racconti sulla cucina locale.",
                    "tip": "Più costoso; recensioni contrastanti sul valore: chiedere menu e prezzo totale.",
                    "url": "https://www.tripadvisor.com/Restaurant_Review-g249851-d7136276-Reviews-Restaurante_Bajlum-Palenque_Southern_Mexico.html"
                }
            ],
            "heroCredit": {
                "author": "Patytc",
                "license": "CC BY-SA 4.0",
                "url": "https://commons.wikimedia.org/wiki/File:Temple%20of%20inscription%20in%20Palenque%20Chiapas%2002.jpg"
            }
        },
        {
            "id": 4,
            "navTitle": "Bacalar",
            "navSubtitle": "Tren Maya e laguna",
            "badge": "7–10 Gen • Dalla giungla alla Laguna dei Sette Colori",
            "locationText": "Palenque → Escárcega → Bacalar",
            "title": "Il Tren Maya e la laguna dai sette colori",
            "description": "Due giornate per la laguna (8–9 gennaio). Tren Maya del 7 gennaio acquistato; itinerario e orari esatti da riportare dai biglietti. Hotel Aires conferma il check-in a mezzanotte.",
            "images": [
                "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Bacalar_lagoon.jpg/640px-Bacalar_lagoon.jpg"
            ],
            "links": [
                {
                    "text": "🔗 Foto Bacalar CC BY 2.0 · Roberto Bolaños",
                    "url": "https://commons.wikimedia.org/wiki/File:Bacalar_-_Lagoon_of_Colors.jpg"
                }
            ],
            "transferPlan": {
                "eyebrow": "7 gennaio 2027 · Tren Maya acquistato · dettagli biglietto da inserire",
                "title": "Attraverso la penisola con il Tren Maya",
                "subtitle": "Palenque → Escárcega → stazione Bacalar → alloggio",
                "cost": "Biglietto Tren Maya acquistato; importo da registrare. Taxi stazione → Hotel Aires non ancora prenotato.",
                "duration": "Un pomeriggio e una serata di viaggio · possibile arrivo tardi",
                "legs": [
                    {
                        "day": "Gio 7 gen",
                        "time": "Partenza indicativa 14:00",
                        "from": "Palenque",
                        "to": "Escárcega",
                        "operator": "Tren Maya · riferimento ufficiale attuale",
                        "duration": "Circa 2 h 49 min (orario pubblicato)",
                        "price": "Da verificare",
                        "note": "La tabella ufficiale indica Palenque 14:00 → Escárcega 16:49; non è una conferma per il 7/1/2027. Prevedere trasferimento dal centro alla stazione di Palenque."
                    },
                    {
                        "day": "Gio 7 gen",
                        "time": "Coincidenza indicativa 17:09",
                        "from": "Escárcega",
                        "to": "Bacalar",
                        "operator": "Tren Maya · prosecuzione verso Chetumal",
                        "duration": "Arrivo a Bacalar in serata, ora da confermare",
                        "price": "Da verificare",
                        "note": "Il servizio pubblicato prosegue fino a Chetumal (arrivo indicato 21:57), ma Bacalar è una fermata precedente: scendere a Bacalar, evitando il giro inutile via Chetumal. Verificare il biglietto e l'operatività della coincidenza."
                    },
                    {
                        "day": "Gio 7 gen",
                        "time": "Sera",
                        "from": "Stazione Bacalar",
                        "to": "Alloggio a Bacalar",
                        "operator": "Taxi / transfer da organizzare",
                        "duration": "Da verificare",
                        "price": "Da quotare",
                        "note": "Hotel Aires conferma il check-in a mezzanotte e può richiedere un taxi alla stazione: scrivere alla reception WhatsApp +9831124656 almeno 2 giorni prima (entro il 5 gennaio)."
                    }
                ],
                "warning": "Tren Maya del 7 gennaio già acquistato: sostituire gli orari e il percorso indicativi con quelli riportati sul biglietto (verificare eventuale cambio a Escárcega). Hotel Aires conferma check-in a mezzanotte; addebiterà la prima notte sulla carta dopo le 18:00. Taxi dalla stazione richiedibile tramite reception WhatsApp +9831124656, almeno 2 giorni prima (entro 5 gennaio).",
                "sources": [
                    {
                        "text": "Orari ufficiali Tren Maya",
                        "url": "https://www.trenmaya.gob.mx/horarios.php"
                    },
                    {
                        "text": "Mappa e stazioni Tren Maya",
                        "url": "https://www.trenmaya.gob.mx/"
                    }
                ]
            },
            "basecamp": {
                "zone": "Bacalar · centro",
                "hotelIdea": "Hotel in centro con colazione inclusa; nome, date e tariffa nella scheda «Alloggi prenotati».",
                "why": "Non è sul bordo della laguna: per nuotare scegliere punti d'accesso consentiti.",
                "tags": [
                    "💧 Laguna e kayak",
                    "🍳 Colazione inclusa",
                    "✓ Check-in a mezzanotte confermato"
                ],
                "transports": [
                    {
                        "icon": "🚆",
                        "title": "7 gen · Tren Maya → Hotel Aires",
                        "desc": "Taxi dalla stazione richiedibile via WhatsApp alla reception (+9831124656) entro il 5 gennaio. Check-in a mezzanotte autorizzato."
                    },
                    {
                        "icon": "🚆",
                        "title": "10 gen · Bacalar → Playa del Carmen",
                        "desc": "Tren Maya da verificare per il 10/1/2027; taxi al porto, poi traghetto per Cozumel."
                    }
                ]
            },
            "food": "Colazione con vista sulla laguna, cucina del Quintana Roo e due cene senza fretta nel centro di Bacalar.",
            "budget": {
                "total": "Tren Maya acquistato (importo da registrare); taxi e attività in laguna da quotare",
                "spent": "Tren Maya del 7 gennaio acquistato, costo pagato da inserire; nessun tour in laguna confermato",
                "items": [
                    {
                        "name": "Tour collettivo laguna o kayak · 8/9 gennaio",
                        "cost": "Attività facoltativa, preventivo da chiedere"
                    },
                    {
                        "name": "Tren Maya Palenque → Bacalar · 7 gennaio",
                        "cost": "Acquistato · importo da registrare"
                    },
                    {
                        "name": "Bacalar → Playa del Carmen · 10 gennaio",
                        "cost": "Trasporto da scegliere"
                    }
                ]
            },
            "reservations": [
                {
                    "name": "Tren Maya Palenque → Bacalar · 7 gen",
                    "status": "Acquistato · orario e importo da inserire dai biglietti",
                    "type": "success"
                },
                {
                    "name": "Hotel Aires · check-in a mezzanotte",
                    "status": "Confermato · taxi da richiedere entro 5 gennaio",
                    "type": "success"
                },
                {
                    "name": "Bacalar → Playa del Carmen + traghetto Cozumel · 10 gen",
                    "status": "Orari e biglietti da verificare",
                    "type": "warning"
                }
            ],
            "days": [
                {
                    "id": "4-jan07",
                    "dayName": "Giorno 18 (7 Gen)",
                    "title": "Tren Maya: dalle rovine alla Laguna di Bacalar",
                    "location": "Palenque · Escárcega · Bacalar",
                    "shortDesc": "Tren Maya Palenque → Bacalar e taxi serale. Check-in a mezzanotte confermato da Hotel Aires; taxi da richiedere entro il 5 gennaio.",
                    "fullDesc": "<p>Tren Maya <strong>Palenque → Bacalar</strong> del <strong>7 gennaio 2027 acquistato</strong>. I dettagli del biglietto (orari, diretto o cambio a Escárcega e costo) non sono ancora stati riportati sul sito: gli orari illustrati nella logistica sono solo indicativi.</p><p>Per coincidenze, taxi dalla stazione e ingresso tardivo all'Hotel Aires consulta la scheda del trasferimento: <strong>Hotel Aires conferma il check-in a mezzanotte</strong>; la prima notte verrà addebitata alla carta dopo le 18:00. Per il taxi dalla stazione contattare la reception al +9831124656 due giorni prima.</p>",
                    "images": [],
                    "links": [
                        {
                            "text": "🚆 Tren Maya · orari ufficiali (da riconfermare)",
                            "url": "https://www.trenmaya.gob.mx/horarios.php"
                        }
                    ],
                    "route": [
                        {
                            "name": "Stazione Tren Maya Palenque",
                            "coords": [
                                17.51,
                                -92.045
                            ]
                        },
                        {
                            "name": "Escárcega",
                            "coords": [
                                18.608,
                                -90.739
                            ]
                        },
                        {
                            "name": "Bacalar",
                            "coords": [
                                18.676,
                                -88.392
                            ]
                        }
                    ],
                    "operationalNotes": [
                        "Tren Maya acquistato: confermare dagli effettivi biglietti se la corsa è diretta o richiede cambio a Escárcega; non basarsi sugli orari indicativi.",
                        "Hotel Aires conferma il check-in a mezzanotte; avvisare tempestivamente in caso di ritardo oltre mezzanotte.",
                        "Richiedere taxi stazione → Hotel Aires via WhatsApp +9831124656 entro il 5 gennaio, comunicando l'orario del treno acquistato."
                    ]
                },
                {
                    "id": "4-jan08",
                    "dayName": "Giorno 19 (8 Gen)",
                    "title": "Bacalar: il primo giorno sulla laguna",
                    "location": "Bacalar · Laguna dei Sette Colori",
                    "shortDesc": "Kayak nella laguna e pomeriggio di completo relax: acqua dolce, non mare.",
                    "fullDesc": "<p>Giornata completa sulla <strong>Laguna dei Sette Colori</strong>: kayak o breve uscita guidata a basso impatto e balneazione dove consentita. Proteggere gli stromatoliti e rispettare le eventuali chiusure ambientali.</p><p>La base si trova in paese: scegliere un accesso pubblico o un balneario sulla laguna. Il pernottamento non comprende un pontile privato.</p>",
                    "images": [
                        "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Bacalar_lagoon.jpg/640px-Bacalar_lagoon.jpg"
                    ],
                    "links": [
                        {
                            "text": "🗺️ Bacalar su OpenStreetMap",
                            "url": "https://www.openstreetmap.org/search?query=Bacalar%20Quintana%20Roo"
                        }
                    ],
                    "route": [
                        {
                            "name": "Bacalar centro",
                            "coords": [
                                18.677,
                                -88.393
                            ]
                        },
                        {
                            "name": "Laguna di Bacalar",
                            "coords": [
                                18.67,
                                -88.38
                            ]
                        }
                    ],
                    "imageCredits": [
                        {
                            "author": "Yosef Ben Melamed",
                            "license": "CC BY-SA 4.0",
                            "url": "https://commons.wikimedia.org/wiki/File:Bacalar%20lagoon.jpg",
                            "caption": "Laguna di Bacalar"
                        }
                    ]
                },
                {
                    "id": "4-jan09",
                    "dayName": "Giorno 20 (9 Gen)",
                    "title": "Bacalar senza orologio",
                    "location": "Bacalar",
                    "shortDesc": "Seconda giornata piena di laguna: calma, fotografia, tramonto e solo un'eventuale breve uscita in barca.",
                    "fullDesc": "<p>Seconda giornata senza orologio: nuoto, fotografie, kayak o una breve uscita in barca, soltanto se ne avete voglia. Il <strong>10 gennaio</strong> il bus ADO è già acquistato: partenza da Bacalar alle 08:10 e arrivo a Playa del Carmen Alterna alle 12:20; resta il traghetto per Cozumel.</p>",
                    "images": [
                        "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Bacalar_lagoon.jpg/640px-Bacalar_lagoon.jpg"
                    ],
                    "links": [
                        {
                            "text": "🗺️ Laguna Bacalar su OpenStreetMap",
                            "url": "https://www.openstreetmap.org/search?query=Laguna%20de%20Bacalar"
                        }
                    ],
                    "route": [
                        {
                            "name": "Bacalar",
                            "coords": [
                                18.677,
                                -88.393
                            ]
                        },
                        {
                            "name": "Laguna dei Sette Colori",
                            "coords": [
                                18.68,
                                -88.38
                            ]
                        }
                    ],
                    "imageCredits": [
                        {
                            "author": "Yosef Ben Melamed",
                            "license": "CC BY-SA 4.0",
                            "url": "https://commons.wikimedia.org/wiki/File:Bacalar%20lagoon.jpg",
                            "caption": "Laguna di Bacalar"
                        }
                    ]
                }
            ],
            "mapFocus": {
                "coords": [
                    18.677,
                    -88.39
                ],
                "zoom": 9
            },
            "researchNotes": [],
            "hotelSearches": [],
            "overview": {
                "intro": "Due giornate senza fretta sulla Laguna dei Sette Colori, tra acqua e natura.",
                "highlights": [
                    {
                        "icon": "💧",
                        "title": "Laguna dei Sette Colori",
                        "detail": "8 gen · panorama e accessi alla laguna.",
                        "state": "In programma",
                        "dayId": "4-jan08"
                    },
                    {
                        "icon": "🛶",
                        "title": "Kayak o uscita guidata",
                        "detail": "Esperienza sull'acqua a basso impatto.",
                        "state": "Da scegliere",
                        "dayId": "4-jan08"
                    },
                    {
                        "icon": "🌿",
                        "title": "Bacalar senza orologio",
                        "detail": "9 gen · nuoto, riposo o breve giro in barca.",
                        "state": "Giornata flessibile",
                        "dayId": "4-jan09"
                    }
                ],
                "tips": [
                    "L'hotel è in centro, non direttamente sulla laguna: scegliere un accesso consentito.",
                    "Proteggere gli stromatoliti e verificare chiusure ambientali.",
                    "Per il 7 gennaio: Tren Maya acquistato; taxi richiedibile entro il 5 gennaio. Check-in a mezzanotte confermato."
                ]
            },
            "startDate": "2027-01-07",
            "endDate": "2027-01-10",
            "venues": [
                {
                    "name": "El Manatí Bacalar",
                    "kind": "Caffè, brunch e arte",
                    "where": "Centro · Calle 22",
                    "description": "Giardino ombreggiato, piatti leggeri, arte e artigianato: ideale per una pausa lenta.",
                    "tip": "Perfetto di giorno; verificare gli orari aggiornati.",
                    "url": "https://www.google.com/maps/search/?api=1&query=El%20Manati%20Bacalar%20Calle%2022"
                },
                {
                    "name": "Waah Cocina de Origen",
                    "kind": "Cena creativa con sapori locali",
                    "where": "Centro · Avenida 1",
                    "description": "Cucina messicana contemporanea, alternative vegetali e cocktail, per una sera speciale senza resort.",
                    "tip": "Consigliata prenotazione a cena, specialmente nel weekend.",
                    "url": "https://www.tripadvisor.it/Restaurant_Review-g1202648-d19903370-Reviews-Waah-Bacalar_Yucatan_Peninsula.html"
                },
                {
                    "name": "La Playita",
                    "kind": "Mangiare e rilassarsi sulla laguna",
                    "where": "Costera · fronte acqua",
                    "description": "Cucina fusion, cocktail e vista sulla laguna: più una pausa lunga che un semplice pasto.",
                    "tip": "Locale conosciuto e talvolta vivace: andarci di giorno per la vista.",
                    "url": "https://www.laplayitabacalar.com/"
                }
            ],
            "heroCredit": {
                "author": "Yosef Ben Melamed",
                "license": "CC BY-SA 4.0",
                "url": "https://commons.wikimedia.org/wiki/File:Bacalar%20lagoon.jpg"
            }
        },
        {
            "id": 5,
            "navTitle": "Caribe",
            "navSubtitle": "Cozumel e Akumal",
            "badge": "10–16 Gen · Cozumel e Akumal · 17 Gen rientro",
            "locationText": "Bacalar → Playa del Carmen → Cozumel → Akumal → Cancún Aeroporto",
            "title": "Snorkeling a Cozumel e relax ad Akumal",
            "description": "Cozumel e Akumal dal 10 al 16 gennaio: snorkeling notturno prenotato l'11 gennaio alle 19:30; Chichén Itzá e Muyil ancora da prenotare, giornata libera il 15. Il 17 gennaio è il rientro in Italia.",
            "images": [
                "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Cozumel_Beach.jpg/640px-Cozumel_Beach.jpg"
            ],
            "links": [
                {
                    "text": "🔗 Zona archeologica Muyil (INAH)",
                    "url": "https://lugares.inah.gob.mx/es/node/4440"
                },
                {
                    "text": "🚆 Orari ufficiali Tren Maya",
                    "url": "https://www.trenmaya.gob.mx/horarios.php"
                },
                {
                    "text": "⛴️ Traghetti · Winjet",
                    "url": "https://winjet.mx/"
                }
            ],
            "basecamp": {
                "zone": "Cozumel → Akumal Pueblo",
                "hotelIdea": "Prima base sul mare a Cozumel, poi Akumal Pueblo (non fronte spiaggia). Nomi, date e tariffe sono già nella scheda «Alloggi prenotati».",
                "why": "10 gen Cozumel via traghetto, 12 gen trasferimento ad Akumal. I tour del 13 e 14 richiedono conferma del punto di raccolta presso El Ultimo Maya. Il 15 senza escursioni, il 16 aeroporto di Cancún via strada.",
                "tags": [
                    "🌙 Snorkeling notturno · 11 gen 19:30 · prenotato",
                    "🏛️ Chichén Itzá · preventivo",
                    "🌿 Muyil · preventivo",
                    "🏖️ 15 gen · riposo"
                ],
                "transports": [
                    {
                        "icon": "🚆",
                        "title": "10 gen · Bacalar → Cozumel",
                        "desc": "ADO acquistato: Bacalar 08:10 → Playa del Carmen Alterna 12:20 (1.370 MXN per 2). Poi molo e traghetto da acquistare."
                    },
                    {
                        "icon": "⛴️",
                        "title": "12 gen · Cozumel → Akumal",
                        "desc": "Traghetto Cozumel → Playa del Carmen, taxi/transfer per Akumal."
                    },
                    {
                        "icon": "✈️",
                        "title": "16 gen · Akumal → CUN",
                        "desc": "Transfer privato via strada per volo AF651 ore 21:00."
                    }
                ]
            },
            "food": "Ultimi giorni a ritmo lento: pesce fresco, frutta, piccoli locali sul mare e nessuna tabella di marcia.",
            "budget": {
                "total": "ADO Bacalar → Playa del Carmen pagato 1.370 MXN per 2; traghetti, taxi e tour ancora da preventivare (hotel esclusi)",
                "spent": "ADO Bacalar → Playa del Carmen del 10 gennaio acquistato per 2, 1.370 MXN pagati. Snorkeling notturno dell’11 gennaio alle 19:30 prenotato: 600 MXN pagati, 2.000 MXN ancora da saldare (totale 2.600 MXN); traghetti e altri tour da prenotare",
                "items": [
                    {
                        "name": "Night Snorkel Cozumel · 11 gen ore 19:30 · prenotato",
                        "cost": "2.600 MXN totali · 600 MXN pagati, 2.000 MXN da saldare; taxi escluso"
                    },
                    {
                        "name": "Chichén Itzá · 13 gen · tour da Akumal",
                        "cost": "1.300 MXN/persona oppure 75 USD/persona pubblicizzati"
                    },
                    {
                        "name": "Muyil / Sian Ka’an · 14 gen · 2 adulti",
                        "cost": "3.380 MXN/persona Midday + ~225 MXN tassa federale (cooperativa); alternativa da quotare"
                    }
                ]
            },
            "reservations": [
                {
                    "name": "ADO Bacalar → Playa del Carmen Alterna · 10 gen 08:10–12:20",
                    "status": "Acquistato per 2 · 1.370 MXN pagati",
                    "type": "success"
                },
                {
                    "name": "Night Snorkel Cozumel · 11 gen ore 19:30",
                    "status": "Prenotato · 600 MXN pagati, saldo 2.000 MXN",
                    "type": "success"
                },
                {
                    "name": "Traghetto Cozumel → Playa e transfer Akumal · 12 gen",
                    "status": "Da organizzare",
                    "type": "warning"
                },
                {
                    "name": "Tour collettivo Chichén Itzá · 13 gen · 2 operatori da contattare",
                    "status": "Da richiedere prezzo finale e pickup ad Akumal",
                    "type": "warning"
                },
                {
                    "name": "Tour Muyil / Sian Ka’an · 14 gen · 2 operatori da contattare",
                    "status": "Da richiedere preventivo con pickup ad Akumal",
                    "type": "warning"
                },
                {
                    "name": "Transfer Akumal → CUN · 16 gen",
                    "status": "Da organizzare",
                    "type": "warning"
                }
            ],
            "days": [
                {
                    "id": "5-jan10",
                    "dayName": "Giorno 21 (10 Gen)",
                    "title": "Bacalar → Cozumel: traghetto e arrivo sull'isola",
                    "location": "Bacalar → Playa del Carmen → Cozumel",
                    "shortDesc": "Bus ADO Bacalar 08:10 → Playa Alterna 12:20 acquistato per 2 (1.370 MXN). Traghetto per Cozumel ancora da prendere.",
                    "fullDesc": "<p><strong>10 gennaio · ADO acquistato per 2 persone: Bacalar 08:10 → Playa del Carmen Alterna 12:20, 1.370 MXN pagati.</strong> Partenza indicata da Av. 19 o Libramiento, Reg. 4 Mz. 64 Lt. 5 (tra calles 42 e 40); arrivo in Av. 20 Norte con Calle 12 Norte. Dal terminal raggiungere il molo e prendere il traghetto per Cozumel, <strong>ancora da acquistare</strong>; preferire una partenza pomeridiana con margine per eventuali ritardi. Poi taxi per il Coral Princess. Il traghetto può subire variazioni per il vento.</p>",
                    "operationalNotes": [
                        "ADO acquistato per due: Bacalar 08:10 → Playa del Carmen Alterna 12:20; verificare la posizione della fermata a Bacalar indicata sul biglietto.",
                        "Traghetto per Cozumel ancora da acquistare; puntare al pomeriggio con margine dopo l’arrivo ADO delle 12:20. Dal porto di Cozumel taxi per Coral Princess."
                    ],
                    "links": [
                        {
                            "text": "⛴️ Winjet · orari traghetto aggiornati",
                            "url": "https://winjet.mx/horarios/"
                        },
                        {
                            "text": "🚆 Tren Maya · verifica corse",
                            "url": "https://www.trenmaya.gob.mx/horarios.php"
                        }
                    ],
                    "images": [
                        "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Cozumel_Beach.jpg/640px-Cozumel_Beach.jpg"
                    ],
                    "imageCredits": [
                        {
                            "author": "Kushboy",
                            "license": "CC BY-SA 3.0",
                            "url": "https://commons.wikimedia.org/wiki/File:Cozumel%20Beach.jpg",
                            "caption": "Spiaggia sull'isola di Cozumel"
                        }
                    ],
                    "route": [
                        {
                            "name": "Bacalar · partenza indicativa",
                            "coords": [
                                18.677,
                                -88.393
                            ]
                        },
                        {
                            "name": "Playa del Carmen · porto",
                            "coords": [
                                20.62595,
                                -87.0714
                            ]
                        },
                        {
                            "name": "Cozumel · molo traghetti",
                            "coords": [
                                20.51255,
                                -86.95142
                            ]
                        }
                    ],
                    "routeNote": "Punti geografici orientativi: collegamento schematico, non un percorso stradale o il luogo esatto di pickup. Trasporti e fermate sono da verificare."
                },
                {
                    "id": "5-jan11",
                    "dayName": "Giorno 22 (11 Gen)",
                    "title": "Cozumel: mare e snorkeling notturno",
                    "location": "Cozumel · Money Bar",
                    "shortDesc": "Giornata sul mare; snorkeling notturno prenotato alle 19:30 (600 MXN pagati, saldo 2.000 MXN).",
                    "fullDesc": "<p>Giornata di mare e snorkeling dall'hotel, se condizioni e correnti lo consentono. <strong>Snorkeling notturno guidato prenotato per l'11 gennaio alle 19:30</strong> con <a href='https://nightsnorkelcozumel.com/' target='_blank' rel='noopener noreferrer'>Night Snorkel Cozumel</a>. <strong>Costo totale 2.600 MXN: 600 MXN già pagati e 2.000 MXN da saldare.</strong> Verificare sulla conferma il punto di incontro (Money Bar è un riferimento indicativo) e organizzare il taxi serale dal Coral Princess.</p><p>Avvistamenti di fauna notturna non garantiti; verificare le condizioni meteo e concordare il ritorno all'hotel in sicurezza.</p>",
                    "operationalNotes": [
                        "Snorkeling notturno prenotato per 11 gennaio ore 19:30: 600 MXN pagati, 2.000 MXN da saldare; verificare dalla conferma ritrovo, requisiti e politica meteo.",
                        "Organizzare il taxi serale di andata e ritorno dal Coral Princess; nessun avvistamento garantito."
                    ],
                    "links": [
                        {
                            "text": "🌙 Night Snorkel Cozumel · operatore",
                            "url": "https://nightsnorkelcozumel.com/"
                        }
                    ],
                    "images": [
                        "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Palancar_reef.jpg/640px-Palancar_reef.jpg"
                    ],
                    "imageCredits": [
                        {
                            "author": "Johnnie Flashlite",
                            "license": "CC BY-SA 4.0",
                            "url": "https://commons.wikimedia.org/wiki/File:Palancar%20reef.jpg",
                            "caption": "Fondali del reef Palancar, Cozumel: fotografia diurna, non del tour notturno"
                        }
                    ],
                    "route": [
                        {
                            "name": "Cozumel · zona hotelera norte (indicativo)",
                            "coords": [
                                20.52,
                                -86.93
                            ]
                        },
                        {
                            "name": "The Money Bar · punto di riferimento da riconfermare",
                            "coords": [
                                20.45839,
                                -86.98628
                            ]
                        }
                    ],
                    "routeNote": "Punti geografici orientativi: collegamento schematico, non un percorso stradale o il luogo esatto di pickup. Trasporti e fermate sono da verificare."
                },
                {
                    "id": "5-jan12",
                    "dayName": "Giorno 23 (12 Gen)",
                    "title": "Cozumel → Akumal Pueblo: trasferimento alla base finale",
                    "location": "Cozumel → Playa del Carmen → Akumal",
                    "shortDesc": "Traghetto Cozumel–Playa del Carmen e transfer ad Akumal Pueblo; hotel già confermato.",
                    "fullDesc": "<p>Check-out sull'isola e <strong>traghetto per Playa del Carmen</strong>. Poi taxi o transfer per <strong>Akumal Pueblo</strong>, non sulla spiaggia. La sistemazione per le ultime quattro notti è già confermata; si trova vicino ai servizi del pueblo. Organizzare il mezzo dalla fermata o dal porto, senza contare su un pickup automatico.</p>",
                    "operationalNotes": [
                        "Acquistare il traghetto Cozumel → Playa del Carmen solo dopo aver verificato gli orari del giorno e il meteo.",
                        "L'hotel El Ultimo Maya è ad Akumal Pueblo, non sulla spiaggia: prenotare o concordare l'ultimo trasferimento."
                    ],
                    "links": [
                        {
                            "text": "⛴️ Winjet · orari traghetto",
                            "url": "https://winjet.mx/horarios/"
                        }
                    ],
                    "images": [
                        "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Akumal_Beach_-_Mexico_%284303205262%29.jpg/640px-Akumal_Beach_-_Mexico_%284303205262%29.jpg"
                    ],
                    "imageCredits": [
                        {
                            "author": "Serge Melki",
                            "license": "CC BY 2.0",
                            "url": "https://commons.wikimedia.org/wiki/File:Akumal%20Beach%20-%20Mexico%20(4303205262).jpg",
                            "caption": "Baia e spiaggia di Akumal"
                        }
                    ],
                    "route": [
                        {
                            "name": "Cozumel · molo traghetti",
                            "coords": [
                                20.51255,
                                -86.95142
                            ]
                        },
                        {
                            "name": "Playa del Carmen · porto",
                            "coords": [
                                20.62595,
                                -87.0714
                            ]
                        },
                        {
                            "name": "Akumal · località (non pin dell'hotel)",
                            "coords": [
                                20.3988,
                                -87.3173
                            ]
                        }
                    ],
                    "routeNote": "Punti geografici orientativi: collegamento schematico, non un percorso stradale o il luogo esatto di pickup. Trasporti e fermate sono da verificare."
                },
                {
                    "id": "5-jan13",
                    "dayName": "Giorno 24 (13 Gen)",
                    "title": "Chichén Itzá: tour collettivo da Akumal",
                    "location": "Akumal → Chichén Itzá → Akumal",
                    "shortDesc": "Tour guidato di un giorno, senza guidare. Due operatori da contattare; pickup da confermare.",
                    "fullDesc": "<p><strong>13 gennaio: Chichén Itzá.</strong> Escursione guidata collettiva da Akumal <strong>NON prenotata</strong>. Dare priorità ad almeno due ore effettive nel sito archeologico, ingresso e tasse per stranieri inclusi e pickup da <strong>El Ultimo Maya</strong> o punto praticabile. I due operatori, i costi e le domande da inviare sono nel riquadro <strong>«Tour da contattare»</strong>.</p>",
                    "links": [
                        {
                            "text": "🏛️ Chichén Itzá · informazioni INAH",
                            "url": "https://lugares.inah.gob.mx/es/node/4335"
                        }
                    ],
                    "operationalNotes": [
                        "Tour Chichén Itzá NON prenotato: confermare pickup e rientro realmente praticabili a El Ultimo Maya, Akumal Pueblo.",
                        "Richiedere un prezzo per due che specifichi biglietto INAH, quota aggiuntiva statale e tempo reale nel sito; gli orari ordinari INAH sono 08:00–16:00, ultimo accesso alle 15:00."
                    ],
                    "images": [
                        "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/El_Castillo%2C_Chichen_Itza.jpg/640px-El_Castillo%2C_Chichen_Itza.jpg"
                    ],
                    "imageCredits": [
                        {
                            "author": "ZuyuaT",
                            "license": "CC BY-SA 4.0",
                            "url": "https://commons.wikimedia.org/wiki/File:El%20Castillo%2C%20Chichen%20Itza.jpg",
                            "caption": "El Castillo, Chichén Itzá"
                        }
                    ],
                    "route": [
                        {
                            "name": "Akumal · località di partenza",
                            "coords": [
                                20.3988,
                                -87.3173
                            ]
                        },
                        {
                            "name": "Chichén Itzá · zona archeologica",
                            "coords": [
                                20.68274,
                                -88.56865
                            ]
                        }
                    ],
                    "routeNote": "Punti geografici orientativi: collegamento schematico, non un percorso stradale o il luogo esatto di pickup. Trasporti e fermate sono da verificare."
                },
                {
                    "id": "5-jan14",
                    "dayName": "Giorno 25 (14 Gen)",
                    "title": "Muyil e flottazione nei canali di Sian Ka’an",
                    "location": "Akumal → Muyil / Sian Ka’an → Akumal",
                    "shortDesc": "Barca e flottazione: contattare la cooperativa maya e confrontare una soluzione più economica.",
                    "fullDesc": "<p><strong>14 gennaio: Muyil e Sian Ka’an.</strong> Escursione <strong>NON prenotata</strong>: sito maya, barca nelle lagune e flottazione nei canali storici, se tutti inclusi nella formula scelta. Chiedere un transfer fino a <strong>El Ultimo Maya ad Akumal Pueblo</strong>. Costi indicativi e contatti nel riquadro <strong>«Tour da contattare»</strong>. Il 15 resta libero per mare e riposo.</p>",
                    "links": [
                        {
                            "text": "🏛️ Muyil · informazioni INAH",
                            "url": "https://lugares.inah.gob.mx/es/node/4440"
                        }
                    ],
                    "operationalNotes": [
                        "Tour Muyil/Sian Ka'an NON prenotato: verificare prelievo ad Akumal Pueblo, luogo d'imbarco, barca e flottazione comprese.",
                        "Verificare eventuali quote parco separate: l'ingresso alla zona archeologica e la navigazione sono servizi distinti."
                    ],
                    "images": [
                        "https://upload.wikimedia.org/wikipedia/commons/c/c4/Sitio_arqueol%C3%B3gico_de_Muyil.JPG"
                    ],
                    "imageCredits": [
                        {
                            "author": "Pedro Montes Campos",
                            "license": "CC BY-SA 4.0",
                            "url": "https://commons.wikimedia.org/wiki/File:Sitio%20arqueol%C3%B3gico%20de%20Muyil.JPG",
                            "caption": "Sito archeologico di Muyil"
                        }
                    ],
                    "route": [
                        {
                            "name": "Akumal · località di partenza",
                            "coords": [
                                20.3988,
                                -87.3173
                            ]
                        },
                        {
                            "name": "Muyil · sito archeologico",
                            "coords": [
                                20.075913,
                                -87.614022
                            ]
                        }
                    ],
                    "routeNote": "Punti geografici orientativi: collegamento schematico, non un percorso stradale o il luogo esatto di pickup. Trasporti e fermate sono da verificare."
                },
                {
                    "id": "5-jan15",
                    "dayName": "Giorno 26 (15 Gen)",
                    "title": "Akumal: giornata interamente libera",
                    "location": "Akumal · mare e relax",
                    "shortDesc": "Niente tour, niente trasferimenti: giornata di mare e riposo.",
                    "fullDesc": "<p><strong>15 gennaio:</strong> un giorno intero senza escursioni. Da <strong>Akumal Pueblo</strong> raggiungere la baia a piedi lungo il percorso sicuro, oppure con un breve taxi, e godersi la spiaggia. Nessuna nuova attività programmata.</p>",
                    "operationalNotes": [
                        "Giornata totalmente libera, senza escursioni obbligatorie.",
                        "L'alloggio è ad Akumal Pueblo: scegliere sul momento se raggiungere la spiaggia a piedi per un percorso praticabile o in taxi."
                    ],
                    "links": [
                        {
                            "text": "🗺️ Akumal Pueblo · mappa indicativa",
                            "url": "https://www.openstreetmap.org/search?query=Akumal%20Pueblo"
                        }
                    ],
                    "images": [
                        "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Akumal_Beach_-_Mexico_%284303205262%29.jpg/640px-Akumal_Beach_-_Mexico_%284303205262%29.jpg"
                    ],
                    "imageCredits": [
                        {
                            "author": "Serge Melki",
                            "license": "CC BY 2.0",
                            "url": "https://commons.wikimedia.org/wiki/File:Akumal%20Beach%20-%20Mexico%20(4303205262).jpg",
                            "caption": "Baia e spiaggia di Akumal"
                        }
                    ],
                    "route": [
                        {
                            "name": "Akumal Pueblo · riferimento orientativo",
                            "coords": [
                                20.3988,
                                -87.3173
                            ]
                        },
                        {
                            "name": "Baia di Akumal",
                            "coords": [
                                20.39449,
                                -87.3153
                            ]
                        }
                    ],
                    "routeNote": "Punti geografici orientativi: collegamento schematico, non un percorso stradale o il luogo esatto di pickup. Trasporti e fermate sono da verificare."
                },
                {
                    "id": "5-jan16",
                    "dayName": "Giorno 27 (16 Gen)",
                    "title": "Ultime ore ad Akumal e volo da Cancún",
                    "location": "Akumal → Cancún Aeroporto",
                    "shortDesc": "Transfer via strada all'aeroporto CUN, volo AF651 delle 21:00.",
                    "fullDesc": "<p>Check-out da El Ultimo Maya ad Akumal Pueblo, qualche ora di mare se gli orari lo consentono e <strong>transfer su strada direttamente all'aeroporto di Cancún, Terminal 4</strong>. Nessun traghetto il giorno del volo: prevedere comunque ampio margine per traffico e formalità. Volo Air France <strong>AF651 delle 21:00 del 16 gennaio</strong>.</p>",
                    "operationalNotes": [
                        "Volo AF651 da Cancún Terminal 4 alle 21:00, come da itinerario voli: controllare eventuali cambi di operativo.",
                        "Prenotare il trasferimento per l'aeroporto con margine ampio e senza affidarsi a coincidenze con traghetti."
                    ],
                    "route": [
                        {
                            "name": "Akumal · località di partenza",
                            "coords": [
                                20.3988,
                                -87.3173
                            ]
                        },
                        {
                            "name": "Aeroporto di Cancún",
                            "coords": [
                                21.0365,
                                -86.8771
                            ]
                        }
                    ],
                    "routeNote": "Punti geografici orientativi: collegamento schematico, non un percorso stradale o il luogo esatto di pickup. Trasporti e fermate sono da verificare."
                },
                {
                    "id": "5-jan17",
                    "dayName": "Giorno 28 (17 Gen)",
                    "title": "Rientro a Milano Malpensa",
                    "location": "Parigi → Milano",
                    "shortDesc": "Scalo Air France a Parigi e arrivo a MXP.",
                    "fullDesc": "<p>Arrivo indicativo a Parigi CDG alle <strong>12:30</strong>, proseguimento con <strong>AF1730 alle 15:55</strong>, arrivo a <strong>Milano Malpensa alle 17:25</strong> del 17 gennaio. Ricontrollare gli operativi prima della partenza.</p>",
                    "operationalNotes": [
                        "Giornata di viaggio Parigi → Milano, non soggiorno ai Caraibi.",
                        "Ricontrollare voli AF651 e AF1730 e le indicazioni per il transito a CDG."
                    ]
                }
            ],
            "mapFocus": {
                "coords": [
                    20.52,
                    -86.93
                ],
                "zoom": 9
            },
            "researchNotes": [],
            "hotelSearches": [],
            "tourContacts": [
                {
                    "date": "13 gennaio 2027",
                    "destination": "Chichén Itzá",
                    "kind": "Intera giornata · senza auto",
                    "intro": "Da Akumal con tour collettivo: privilegiare trasporto A/R, guida e imposte INAH incluse. Prezzi indicativi dei siti, NON preventivi confermati per la data.",
                    "providers": [
                        {
                            "name": "Chichen Itza Tours · Classic Riviera Maya",
                            "price": "Pubblicizza 75 USD per adulto, ingresso e imposte inclusi (circa 150 USD per due). Tariffe in diverse sezioni del sito non perfettamente coerenti: chiedere preventivo scritto.",
                            "pickup": "Pickup negli hotel della Riviera Maya soggetto a restrizioni: per piccole strutture/appartamenti potrebbe essere un punto di incontro esterno. Chiedere specificamente per El Ultimo Maya ad Akumal Pueblo.",
                            "includes": "Autobus A/R, guida certificata, Chichén Itzá, pranzo buffet, cenote e breve Valladolid.",
                            "caution": "Verificare prezzo finale in MXN per 2 adulti, durata sul sito archeologico, eventuali soste commerciali e costi aggiuntivi (bevande, giubbotto cenote).",
                            "contacts": [
                                {
                                    "label": "Apri tour e richiesta",
                                    "url": "https://chichen-itzatours.com/chichen-itza-tour-from-riviera-maya.html"
                                },
                                {
                                    "label": "Telefono +52 987 112 9491",
                                    "url": "tel:+529871129491"
                                }
                            ]
                        },
                        {
                            "name": "Vive Cancún · Chichén económico Riviera Maya",
                            "price": "1.300 MXN per adulto pubblicizzati, 2.600 MXN per due, con ingresso e tasse dichiarati inclusi: confermare validità il 13/01/2027.",
                            "pickup": "Annuncia partenza dai punti/hotel della Riviera Maya, ma serve conferma ESPLICITA per El Ultimo Maya ad Akumal Pueblo e dell'eventuale supplemento.",
                            "includes": "Trasporto A/R, guida bilingue, ingresso Chichén, buffet, cenote e breve Valladolid.",
                            "caution": "Prevede anche rituale maya e tempo per acquisti/artigianato: chiedere se le soste commerciali sono obbligatorie. Bevande e noleggio giubbotto al cenote esclusi.",
                            "contacts": [
                                {
                                    "label": "Apri offerta",
                                    "url": "https://vivecancun.com/excursion-chichen-itza-economico-riviera-maya.php?s-categoria=reservar"
                                },
                                {
                                    "label": "WhatsApp +52 998 353 1352",
                                    "url": "https://wa.me/529983531352"
                                }
                            ]
                        }
                    ],
                    "questions": "Per 2 adulti il 13/01/2027: pickup e ritorno esattamente a El Ultimo Maya, Avenida Gonzalo Guerrero Manzana 6 Lote 3, Akumal Pueblo, prezzo finale con biglietti e tutte le imposte per stranieri, orari reali, durata della visita guidata, sosta cenote/Valladolid e eventuali soste commerciali."
                },
                {
                    "date": "14 gennaio 2027",
                    "destination": "Muyil / Sian Ka’an",
                    "kind": "Canali maya e flottazione · transfer da Akumal",
                    "intro": "Punto centrale: tour che includa DAVVERO il giro in barca nei canali e la flottazione, con prelievo ad Akumal. Verificare se include la visita al sito archeologico Muyil.",
                    "providers": [
                        {
                            "name": "Community Tours Sian Ka’an · Ancient Canal",
                            "price": "Midday pubblicizzato a 3.380 MXN per adulto (6.760 MXN in due) con transfer Akumal incluso; tassa federale riserva extra circa 225 MXN/persona, oltre a eventuali commissioni.",
                            "pickup": "Il tour Midday delle 10:00 include il transfer A/R da Akumal e Aventuras Akumal; per l'Early 06:00 è previsto un supplemento di 320 MXN/persona. Chiedere se il prelievo raggiunge El Ultimo Maya ad Akumal Pueblo, non solo la costa di Akumal.",
                            "includes": "Cooperativa maya locale, barca sulle lagune, flottazione nel canale antico, guida e pranzo tradizionale.",
                            "caution": "Verificare visita alle rovine di Muyil inclusa o meno, tassa federale aggiornata, eventuali commissioni e prezzo 2027. Il tour Midday occupa buona parte della giornata.",
                            "contacts": [
                                {
                                    "label": "Tour della cooperativa",
                                    "url": "https://siankaantours.com.mx/experiences/ancient-canal-tour-sian-kaan/"
                                },
                                {
                                    "label": "WhatsApp +52 984 114 0750",
                                    "url": "https://wa.me/529841140750"
                                },
                                {
                                    "label": "Email prenotazioni",
                                    "url": "mailto:reservacionesctsk@siankaantours.com.mx"
                                }
                            ]
                        },
                        {
                            "name": "Paseo Tours · Muyil Canals",
                            "price": "100 € per adulto pubblicizzati (200 € per due) per un tour di mezza giornata; prezzo e supplementi per Akumal da confermare.",
                            "pickup": "Il sito elenca hotel a Playa del Carmen, Tulum e Puerto Morelos, NON Akumal: chiedere preventivo di pickup diretto o punto d'incontro alternativo prima di scegliere.",
                            "includes": "Tour canali di Muyil con barca/flottazione secondo il programma del fornitore, guida e rientro tipicamente nel primo pomeriggio.",
                            "caution": "Non considerare incluso il trasporto da Akumal: eventuale taxi può annullare il vantaggio economico. Chiedere se il sito archeologico e le tasse siano inclusi.",
                            "contacts": [
                                {
                                    "label": "Tour e modulo contatti",
                                    "url": "https://www.paseotours.com/en/tour-muyil-canals/"
                                }
                            ]
                        }
                    ],
                    "questions": "Per 2 adulti il 14/01/2027: pickup e rientro a El Ultimo Maya, Avenida Gonzalo Guerrero Manzana 6 Lote 3, Akumal Pueblo, prezzo totale per due CON trasporto, ingressi INAH/CONANP, barca, giubbotti e flottazione; confermare se sono comprese le rovine di Muyil, durata e politiche per maltempo."
                }
            ],
            "overview": {
                "intro": "Cozumel e Akumal dal 10 al 16 gennaio per mare, archeologia e natura; rientro a Milano il 17.",
                "highlights": [
                    {
                        "icon": "🌙",
                        "title": "Snorkeling notturno a Cozumel",
                        "detail": "11 gen ore 19:30 · prenotato · 600 MXN pagati, saldo 2.000 MXN; ritrovo da verificare.",
                        "state": "Prenotato",
                        "dayId": "5-jan11"
                    },
                    {
                        "icon": "🏛️",
                        "title": "Chichén Itzá",
                        "detail": "13 gen · tour collettivo da Akumal.",
                        "state": "Da prenotare",
                        "dayId": "5-jan13"
                    },
                    {
                        "icon": "🌿",
                        "title": "Muyil e Sian Ka’an",
                        "detail": "14 gen · lagune e flottazione nei canali.",
                        "state": "Da prenotare",
                        "dayId": "5-jan14"
                    },
                    {
                        "icon": "🏖️",
                        "title": "Akumal senza programmi",
                        "detail": "15 gen · giornata interamente libera al mare.",
                        "state": "Relax",
                        "dayId": "5-jan15"
                    }
                ],
                "tips": [
                    "Per i tour del 13 e 14 verificare il pickup da El Ultimo Maya, ad Akumal Pueblo.",
                    "Traghetti per Cozumel soggetti al meteo: lasciare margine negli spostamenti.",
                    "Il 15 gennaio resta libero: niente nuove escursioni.",
                    "Il 17 gennaio è solo viaggio di rientro, non una giornata aggiuntiva nei Caraibi."
                ]
            },
            "startDate": "2027-01-10",
            "endDate": "2027-01-17",
            "venues": [
                {
                    "name": "La Choza",
                    "kind": "Cucina messicana casalinga",
                    "where": "Cozumel · San Miguel centro",
                    "description": "Piatti yucatechi e messicani in un posto informale, lontano dai ristoranti dei resort.",
                    "tip": "Dal Coral Princess serve taxi o trasferimento verso il centro.",
                    "url": "https://cozumelmexico.net/la_choza/"
                },
                {
                    "name": "Casa Kinta",
                    "kind": "Cena romantica e vista mare",
                    "where": "Cozumel · malecón",
                    "description": "Bistrot messicano contemporaneo con ingredienti caraibici, perfetto per una cena al tramonto.",
                    "tip": "Nuova apertura 2026: il vecchio Kinta in centro è chiuso; prenotare il tavolo.",
                    "url": "https://casakinta.com/"
                },
                {
                    "name": "La Casa del Pueblo",
                    "kind": "Ceviche e tacos genuini",
                    "where": "Akumal Pueblo",
                    "description": "Piccolo locale di quartiere, con pesce fresco e cucina informale; più vicino alla vostra base dei beach club.",
                    "tip": "Controllare l'orario serale prima di uscire dall'hotel.",
                    "url": "https://www.tripadvisor.com/Restaurant_Review-g499445-d25411468-Reviews-La_Casa_Del_Pueblo-Akumal_Tulum_Yucatan_Peninsula.html"
                },
                {
                    "name": "La Lunita",
                    "kind": "Pranzo vista mare",
                    "where": "Akumal · Half Moon Bay · taxi",
                    "description": "Ceviche e pesce in una cornice più romantica: possibilità per la giornata libera del 15.",
                    "tip": "Non è nel Pueblo: controllare orari, accesso e taxi.",
                    "url": "https://www.akumalmx.com/dining-and-entertainment/2026-eating-guide-the-best-restaurants-in-akumal/"
                }
            ],
            "heroCredit": {
                "author": "Kushboy",
                "license": "CC BY-SA 3.0",
                "url": "https://commons.wikimedia.org/wiki/File:Cozumel%20Beach.jpg"
            }
        }
    ],
    "locations": [
        {
            "areaId": 1,
            "name": "Città del Messico e Teotihuacán",
            "coords": [
                19.4326,
                -99.1332
            ],
            "days": "21–23 Dic"
        },
        {
            "areaId": 2,
            "name": "Oaxaca e Monte Albán",
            "coords": [
                17.0753,
                -96.7237
            ],
            "days": "24–25 Dic; 29 Dic recupero"
        },
        {
            "areaId": 2,
            "name": "San Miguel Amatlán · Caminos Reales",
            "coords": [
                17.27556,
                -96.47167
            ],
            "days": "26 Dic"
        },
        {
            "areaId": 2,
            "name": "Santa Marta Latuvi",
            "coords": [
                17.2625,
                -96.49306
            ],
            "days": "27 Dic"
        },
        {
            "areaId": 2,
            "name": "Benito Juárez · Sierra Norte",
            "coords": [
                17.18667,
                -96.51389
            ],
            "days": "28 Dic"
        },
        {
            "areaId": 6,
            "name": "Playa San Agustinillo · costa del Pacifico",
            "coords": [
                15.6659,
                -96.5438
            ],
            "days": "30 Dic – 3 Gen"
        },
        {
            "areaId": 3,
            "name": "San Agustinillo → Salina Cruz",
            "coords": [
                16.169,
                -95.199
            ],
            "days": "3 Gen · trasferimento"
        },
        {
            "areaId": 3,
            "name": "Villahermosa · cambio bus",
            "coords": [
                17.989,
                -92.93
            ],
            "days": "4 Gen"
        },
        {
            "areaId": 3,
            "name": "Palenque e Roberto Barrios",
            "coords": [
                17.509,
                -92.0458
            ],
            "days": "4–6 Gen"
        },
        {
            "areaId": 4,
            "name": "Escárcega · Tren Maya",
            "coords": [
                18.608,
                -90.739
            ],
            "days": "7 Gen"
        },
        {
            "areaId": 4,
            "name": "Laguna di Bacalar",
            "coords": [
                18.676,
                -88.39
            ],
            "days": "7–10 Gen"
        },
        {
            "areaId": 5,
            "name": "Muyil e Sian Ka'an",
            "coords": [
                20.078,
                -87.615
            ],
            "days": "14 Gen"
        },
        {
            "areaId": 5,
            "name": "Aeroporto di Cancún",
            "coords": [
                21.0365,
                -86.8771
            ],
            "days": "16 Gen, volo 21:00"
        },
        {
            "areaId": 5,
            "name": "Cozumel · Coral Princess prenotato (pin indicativo)",
            "coords": [
                20.52,
                -86.93
            ],
            "days": "10–12 Gen"
        },
        {
            "areaId": 5,
            "name": "Akumal Pueblo · El Ultimo Maya prenotato (pin indicativo)",
            "coords": [
                20.398,
                -87.32
            ],
            "days": "12–16 Gen"
        }
    ]
};

const flightData = {
    // ... [MANTIENI IL TUO OGGETTO flightData INVARIATO] ...
    operator: "Air France",
    travelClass: "Economy",
    outbound: {
        title: "🛫 Andata",
        date: "Dom 20 Dic 2026",
        theme: "emerald",
        leg1: { from: "MXP", fromTime: "12:40", fromTerm: "Terminal 1", to: "CDG", toTime: "14:15", toTerm: "Terminal 2F", duration: "1h 35m", flight: "AF1131 • A318" },
        layover: "⏱ Scalo a Parigi: 1h 35m",
        leg2: { from: "CDG", fromTime: "15:50", fromTerm: "Terminal 2E", to: "MEX", toTime: "20:55", toTerm: "Terminal 1", duration: "12h 05m", flight: "AF174 • A350" }
    },
    inbound: {
        title: "🛬 Ritorno",
        date: "Sab 16 Gen 2027",
        theme: "amber",
        leg1: { from: "CUN", fromTime: "21:00", fromTerm: "Terminal 4", to: "CDG", toTime: "12:30 +1", toTerm: "Term 2E", duration: "9h 30m", flight: "AF651 • B777" },
        layover: "⏱ Scalo a Parigi: 3h 25m",
        leg2: { from: "CDG", fromTime: "15:55", fromTerm: "Terminal 2F", to: "MXP", toTime: "17:25", toTerm: "Terminal 1", duration: "1h 30m", flight: "AF1730 • A220" }
    }
};