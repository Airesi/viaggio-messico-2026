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
            "note": "Budget complessivo per 2 persone, tetto €10.000 inclusi tutti i costi. Voli €2.147,36 TOTALI per due (importo confermato, assicurazione di viaggio inclusa; pagamento non verificato); hotel prenotati €1.845 (pagamenti da verificare); trekking Sierra Norte già pagato 12.917,70 MXN. Spese rimanenti stimate: escursioni, trasporti, pasti, attrezzatura, souvenir, valigia extra, imprevisti. L'assicurazione inclusa nei voli non va conteggiata una seconda volta; verificare le coperture per le attività programmate.",
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
            "knownExpensesApproxEuro": 4614.61,
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
                    "label": "ADO, Tren Maya, traghetti e altri mezzi interurbani",
                    "estimateEuro": 520,
                    "minEuro": 350,
                    "maxEuro": 700
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
            "experiencesAllowanceCentralEuro": 1705.39
        },
        "subtitle": "29 giorni tra cultura, foreste, montagne e due oceani"
    },
    "areas": [
        {
            "id": 1,
            "navTitle": "Città del Messico",
            "navSubtitle": "CDMX e Teotihuacán",
            "badge": "Giorni 1 - 4 • Capitale",
            "locationText": "Città del Messico",
            "title": "Il Cuore della Capitale",
            "description": "Teotihuacán e La Gruta il 21 dicembre, poi centro storico, Coyoacán e canali. Trasferimento notturno verso Oaxaca da prenotare.",
            "images": [
                "assets/img/Citta_Del_Messico.png"
            ],
            "links": [],
            "days": [
                {
                    "id": "1-arrival-dec20",
                    "dayName": "Arrivo (20 Dic)",
                    "title": "Arrivo a Città del Messico e trasferimento a Condesa",
                    "location": "Aeroporto MEX · Condesa",
                    "fullDesc": "<p><strong>20 dicembre · arrivo in Messico.</strong> Volo Air France via Parigi; l'operativo riportato nei dettagli voli prevede l'arrivo all'aeroporto MEX, Terminal 1, alle <strong>20:55 locali</strong>. Dopo controlli d'ingresso e ritiro bagagli, transfer autorizzato o taxi/app verso <strong>The PM at Condesa Arts & Boutique Experience</strong>, con prenotazione dal 20 al 23 dicembre.</p><p><strong>Nessuna visita programmata per la sera:</strong> tenere conto dei tempi dell'aeroporto e avvisare l'hotel dell'arrivo serale. Le visite iniziano il 21 dicembre con Teotihuacán e pranzo prenotato a La Gruta.</p>",
                    "operationalNotes": [
                        "Confermare con The PM le modalità di accesso e il check-in in tarda serata.",
                        "Verificare eventuali variazioni dell'operativo del volo e usare un mezzo affidabile dall'aeroporto."
                    ],
                    "images": [],
                    "links": []
                },
                {
                    "id": "1-1",
                    "dayName": "Giorno 1 (21 Dic)",
                    "title": "La Città degli Dei: Teotihuacán",
                    "location": "Teotihuacán (Nord CDMX)",
                    "shortDesc": "Colossali piramidi precolombiane e pranzo all'interno di una grotta vulcanica.",
                    "fullDesc": "<p><strong>Teotihuacán</strong>: percorrere la Calzada de los Muertos, esplorare i complessi della Piramide del Sole e della Piramide della Luna, senza contare sulla possibilità di salire sulle piramidi, soggetta a restrizioni di accesso. Calcolare diverse ore sul sito.</p><p><strong>La Gruta: tavolo prenotato per il 21 dicembre alle 13:00.</strong> Il conto è ancora da pagare. Valutare Uber o un bus per il trasferimento da Città del Messico; la precedente stima Uber di circa €75 non è un preventivo e va confermata (specie per il ritorno). Il biglietto INAH 2026 per visitatori stranieri è <strong>210 MXN a persona</strong>; verificare la tariffa di dicembre 2026.</p>",
                    "images": [
                        "assets/img/Teotihuacan_Piramide_Sole.png"
                    ],
                    "links": [
                        {
                            "text": "🔗 Sito Ufficiale INAH - Teotihuacán",
                            "url": "https://www.inah.gob.mx/zonas/23-zona-arqueologica-de-teotihuacan"
                        },
                        {
                            "text": "🔗 Restaurante La Gruta, prenotato 21 alle 13 p.m.",
                            "url": "https://lagruta.mx/"
                        },
                        {
                            "text": "🔗 Amigo Tour per prenotare guida con Basilica",
                            "url": "https://amigotours.com/tours/mexico/mexico-city/teotihuacan-guadalupe-shrine"
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
                    ]
                },
                {
                    "id": "1-2",
                    "dayName": "Giorno 2 (22 Dic)",
                    "title": "Zócalo, Storia Azteca e il Polmone Verde",
                    "location": "CDMX (Centro e Ovest)",
                    "shortDesc": "Dai resti dell'impero azteco al grande parco cittadino di Chapultepec",
                    "fullDesc": "<p><strong>Giornata culturale intensa, con tappe selezionabili:</strong> partenza al mattino per esplorare il cuore storico: il <strong>Zócalo</strong>, il <strong>Palacio Nacional</strong> e il <strong>Templo Mayor</strong>. Proseguiremo il percorso artistico al <strong>Museo Vivo del Muralismo</strong>, per poi ammirare la splendida facciata in maiolica della <strong>Casa de los Azulejos</strong>. Sosta panoramica salendo sulla <strong>Torre Latinoamericana</strong> per ammirare la megalopoli dall'alto. Nel primo pomeriggio ci allontaniamo dal cemento per immergerci nel <strong>Bosque de Chapultepec</strong>, un'oasi verde immensa, dove concluderemo la giornata all'incredibile <em>Museo Nacional de Antropología</em>.</p><p><strong>Priorità consigliata:</strong> Centro Histórico con Templo Mayor al mattino e Museo di Antropologia nel pomeriggio. Palacio Nacional (accesso da verificare), Museo Vivo del Muralismo, Torre Latinoamericana e Casa de los Azulejos restano fermate facoltative: non puntare a visitarle tutte se si vuole approfondire il museo.</p>",
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
                    "operationalNotes": [
                        "Prima della giornata verificare giorni e orari di apertura dei musei previsti.",
                        "Lasciare almeno qualche ora al Museo Nacional de Antropología, evitando di sovraccaricare il centro storico."
                    ]
                },
                {
                    "id": "1-3",
                    "dayName": "Giorno 3 (23 Dic)",
                    "title": "Borghi Colorati, Canali e... Partenza Notturna!",
                    "location": "Coyoacán, Xochimilco & Bus Notturno",
                    "shortDesc": "Atmosfere bohémien, trajineras a Xochimilco e in serata bus notturno ADO per Oaxaca.",
                    "fullDesc": "<p>La giornata inizia a <strong>Coyoacán</strong>, ammirando l'anima coloniale e visitando, <strong>solo con biglietto acquistato</strong>, la <em>Casa Azul</em> di Frida Kahlo. <strong>Mercoledì 23 dicembre</strong> l'orario ordinario pubblicato dal museo inizia alle <strong>11:00</strong>: la visita va prenotata in una fascia compatibile con il pomeriggio a Xochimilco. Nel pomeriggio ci spostiamo verso <strong>Xochimilco</strong> per navigare sui canali a bordo di una colorata <em>trajinera</em>.</p><p>Al termine della giornata, recuperiamo i bagagli e ci dirigiamo al <strong>Terminal Taxqueña (Sud CDMX)</strong>. Qui vorremmo prendere il pullman notturno <strong>non ancora prenotato</strong> della <em>ADO</em> (si raccomanda la classe GL o Platino per riposare comodamente). Viaggiando di notte cullati dalle curve della Sierra Madre, risparmieremo tempo prezioso, pronti a svegliarci il mattino seguente direttamente a Oaxaca!</p>",
                    "images": [
                        "assets/img/Xochimilco_trajineras.jpg"
                    ],
                    "links": [
                        {
                            "text": "🔗 Museo Frida Kahlo",
                            "url": "https://www.museofridakahlo.org.mx/"
                        },
                        {
                            "text": "🔗 Biglietti Bus ADO (Notturno)",
                            "url": "https://www.ado.com.mx"
                        },
                        {
                            "text": "🎟️ Biglietti ufficiali Casa Azul",
                            "url": "https://boletos.museofridakahlo.org.mx/"
                        },
                        {
                            "text": "🚌 ADO · orari e prenotazioni",
                            "url": "https://www.ado.com.mx/"
                        }
                    ],
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
                            "name": "Casa Azul",
                            "coords": [
                                19.3551,
                                -99.1625
                            ],
                            "image": "https://images.unsplash.com/photo-1596752763297-76eb95c96b75?auto=format&fit=crop&w=400&q=80"
                        },
                        {
                            "name": "Imbarcadero Xochimilco",
                            "coords": [
                                19.2543,
                                -99.1035
                            ],
                            "image": "assets/img/Xochimilco_trajineras.jpg"
                        },
                        {
                            "name": "Terminal Taxqueña (Partenza)",
                            "coords": [
                                19.344,
                                -99.1398
                            ],
                            "image": "https://images.unsplash.com/photo-1605315510619-756188cc5c3b?auto=format&fit=crop&w=400&q=80"
                        }
                    ],
                    "operationalNotes": [
                        "Casa Azul: acquistare online dal canale ufficiale per mercoledì 23 dicembre; orari soggetti a variazioni.",
                        "Bus notturno CDMX → Oaxaca: confermare compagnia, classe, corsa, terminal di partenza e arrivo prima di acquistare.",
                        "Conservare un margine per tornare in hotel, recuperare bagagli e arrivare al terminal."
                    ]
                }
            ],
            "basecamp": {
                "zone": "Condesa · base per Città del Messico",
                "hotelIdea": "Quartiere comodo per Roma/Condesa; per nome, date e importo dell'alloggio vedi «Alloggi confermati» qui sotto.",
                "why": "Arrivo la sera del 20 dicembre: verificare con la struttura l'orario di accesso. Il 23 recuperare i bagagli e raggiungere il bus notturno per Oaxaca; il pernottamento 23–24 è sul bus, non in un altro hotel.",
                "tags": [
                    "🌳 Condesa e Roma",
                    "🏛️ Musei e civiltà preispaniche",
                    "🌮 Cucina messicana"
                ],
                "transports": [
                    {
                        "icon": "🚕",
                        "title": "Uber / DiDi",
                        "desc": "Comodi per le tratte urbane e aeroporto. Per Teotihuacán valutare autobus o tour e pianificare il ritorno; la tariffa taxi varia."
                    },
                    {
                        "icon": "👟",
                        "title": "A Piedi",
                        "desc": "Perfetto per esplorare il Centro Storico (Zócalo) e i quartieri Condesa/Roma."
                    },
                    {
                        "icon": "🚇",
                        "title": "MetroBus",
                        "desc": "Opzionale per muoversi velocemente lungo il Paseo de la Reforma."
                    }
                ]
            },
            "food": "Pranzo preispanico in grotta, tacos al pastor in centro, churros serali ed elotes sui canali.",
            "budget": {
                "total": "Ingressi, trasporti e pasti da definire (albergo nel riepilogo dedicato)",
                "spent": "Pranzo La Gruta prenotato, da pagare",
                "items": [
                    {
                        "name": "Teotihuacán · ingressi 2 stranieri",
                        "cost": "420 MXN tariffa INAH 2026, trasporti esclusi"
                    },
                    {
                        "name": "La Gruta · pranzo del 21 dicembre",
                        "cost": "Prenotato ore 13:00 · conto da pagare"
                    },
                    {
                        "name": "Museo Nacional de Antropología · 2 stranieri",
                        "cost": "420 MXN tariffa INAH 2026"
                    }
                ]
            },
            "reservations": [
                {
                    "name": "Restaurante La Gruta · 21 dic",
                    "status": "Confermato",
                    "type": "success"
                },
                {
                    "name": "ADO CDMX → Oaxaca · notte 23/24 dic",
                    "status": "Da prenotare",
                    "type": "warning"
                }
            ],
            "mapFocus": {
                "coords": [
                    19.35,
                    -99.13
                ],
                "zoom": 10
            },
            "overview": {
                "intro": "Tre giornate tra grandi civiltà, quartieri vivaci e canali della capitale.",
                "highlights": [
                    {
                        "icon": "🏛️",
                        "title": "Teotihuacán e La Gruta",
                        "detail": "21 dic · città archeologica e pranzo alle 13:00.",
                        "state": "Pranzo prenotato",
                        "dayId": "1-1"
                    },
                    {
                        "icon": "🎨",
                        "title": "Centro e grandi musei",
                        "detail": "22 dic · Zócalo, Templo Mayor e Antropologia.",
                        "state": "In programma",
                        "dayId": "1-2"
                    },
                    {
                        "icon": "🚤",
                        "title": "Coyoacán e Xochimilco",
                        "detail": "23 dic · Casa Azul e canali in trajinera.",
                        "state": "In programma",
                        "dayId": "1-3"
                    }
                ],
                "tips": [
                    "Bloccare per tempo l'ingresso alla Casa Azul e verificare gli orari dei musei.",
                    "La sera del 23 c'è il bus notturno per Oaxaca: prevedere margine per bagagli e terminal."
                ]
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
                    "name": "Casa Franca",
                    "kind": "Jazz e cocktail",
                    "where": "Roma Norte",
                    "description": "Jazz e blues dal vivo in una casa dall'atmosfera intima: ideale per una serata di musica insieme.",
                    "tip": "Provare martedì 22 dicembre; verificare cartellone, cover e tavoli vicino ai musicisti.",
                    "url": "https://mexicocity.cdmx.gob.mx/venues/casa-franca/"
                },
                {
                    "name": "Expendio de Maíz Sin Nombre",
                    "kind": "Esperienza gastronomica informale",
                    "where": "Roma Norte",
                    "description": "Degustazione a sorpresa a base di mais e ingredienti del mercato, con cucina a vista e tavoli condivisi.",
                    "tip": "Niente prenotazioni, attesa anche lunga; segnalare esigenze alimentari e portare contanti.",
                    "url": "https://www.google.com/maps/search/?api=1&query=Expendio%20de%20Maiz%20Sin%20Nombre%20Roma%20Norte%20CDMX"
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
            "description": "Oaxaca, Monte Albán e trekking comunitario già pagato (26–28 dicembre). Hierve el Agua da verificare; il 29 resta giorno jolly.",
            "images": [
                "assets/img/Oaxaca_Ciudad.png",
                "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85"
            ],
            "links": [],
            "basecamp": {
                "zone": "Jalatlaco / Oaxaca · Sierra Norte 26–28 dicembre",
                "hotelIdea": "La stessa base a Jalatlaco prima e dopo il trekking: chiedere deposito bagagli per le due notti in cabaña già incluse nel pacchetto Sierra Norte.",
                "why": "Il trekking parte da Oaxaca il 26 alle 08:00, con rientro il 28 nel pomeriggio. Verificare il punto d'incontro del pacchetto; tenere flessibile il 29 dopo 40 km di cammino.",
                "tags": [
                    "🏛️ Oaxaca 24–25 e 29",
                    "🥾 Sierra 26–28",
                    "✅ Trekking pagato"
                ],
                "transports": [
                    {
                        "icon": "🚌",
                        "title": "ADO CDMX → Oaxaca",
                        "desc": "Arrivo notturno il 24, controllare orario e deposito bagagli presso Cazomalli."
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
                    "name": "ADO CDMX → Oaxaca · notte 23/24 dic",
                    "status": "Da prenotare",
                    "type": "warning"
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
                }
            ],
            "days": [
                {
                    "id": "2-1",
                    "dayName": "Giorno 4 (24 Dic)",
                    "title": "Monte Albán nella Vigilia, poi Oaxaca centro",
                    "location": "Monte Albán → Santo Domingo · mercati · centro",
                    "shortDesc": "Visita alla città zapoteca di Monte Albán se l'orario d'arrivo da CDMX lo consente; mercati e centro storico nel pomeriggio, Vigilia in città.",
                    "fullDesc": "<p><strong>Vigilia a Oaxaca.</strong> Arrivo in città dal <strong>bus notturno ADO da Città del Messico</strong>. All'arrivo chiedere deposito bagagli al mattino presso l'hotel già confermato a Jalatlaco, perché l'early check-in non è garantito. Dopo aver lasciato i bagagli, trasferimento a <strong>Monte Albán</strong> per esplorare la città zapoteca: Gran Plaza, terrazze monumentali, panorami sulla valle e, in base ai percorsi aperti, le strutture archeologiche.</p><p><strong>Orario ordinario INAH:</strong> 08:00–17:00, ultimo accesso 16:00; la disponibilità e l'eventuale riduzione di orario per <strong>giovedì 24 dicembre 2026</strong> vanno confermate poco prima della visita. L'ideale è arrivare al mattino e prevedere <strong>circa 3 ore</strong> per il sito; se l'ADO arriva tardi, accorciamo le visite in centro invece di correre.</p><p><strong>Pomeriggio e sera:</strong> Templo de Santo Domingo, mercato 20 de Noviembre, vie del centro e atmosfera della <em>Nochebuena</em>, verificando quali attività siano effettivamente aperte. Cena della Vigilia con prenotazione consigliata. I festeggiamenti religiosi e le calendas possono variare: nessun evento dato per confermato.</p><p><strong>Il 25 dicembre</strong> vorremmo andare a Hierve el Agua soltanto se un operatore conferma l'accesso e il servizio festivo; il trekking Sierra Norte già pagato inizia il <strong>26 dicembre alle 08:00</strong> da Oaxaca.</p>",
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
                            "name": "Terminal ADO Oaxaca",
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
                        "L'arrivo dal bus notturno può comprimere il programma: dare priorità a Monte Albán e poi scegliere quante soste fare in centro."
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
                "https://commons.wikimedia.org/wiki/Special:FilePath/Playa%20San%20Agustinillo.jpg?width=960"
            ],
            "links": [],
            "basecamp": {
                "zone": "San Agustinillo · costa del Pacifico",
                "hotelIdea": "Quattro notti nella stessa struttura, senza cambi durante Capodanno. Dettagli dell'alloggio nella sezione prenotazioni.",
                "why": "Il 30 dicembre arrivo da Oaxaca. Il 3 gennaio raggiungere Pochutla con margine per l'eventuale AltaMar verso Salina Cruz; la coincidenza non è prenotata.",
                "tags": [
                    "🌊 Pacifico",
                    "🌅 Capodanno sul mare",
                    "🌿 La Ventanilla facoltativa"
                ],
                "transports": [
                    {
                        "icon": "🚌",
                        "title": "30 dic · Oaxaca → costa",
                        "desc": "Verificare corsa verso Pochutla e taxi/colectivo per San Agustinillo."
                    },
                    {
                        "icon": "🚶",
                        "title": "31 dic–2 gen · dintorni",
                        "desc": "Mazunte, Punta Cometa e La Ventanilla facoltativi, senza spostare l'alloggio."
                    },
                    {
                        "icon": "🚕",
                        "title": "3 gen · Pochutla",
                        "desc": "Partire con margine per AltaMar 16:15 → Salina Cruz, ancora da confermare."
                    }
                ]
            },
            "food": "Pesce fresco, frutta e specialità locali sul Pacifico. Dopo il trekking priorità a mare, riposo e Capodanno tranquillo a San Agustinillo.",
            "budget": {
                "total": "Trasferimenti e attività costiere da quotare",
                "spent": "Nessuna escursione costiera confermata",
                "items": [
                    {
                        "name": "La Ventanilla · tour comunitario",
                        "cost": "Facoltativo, costo da chiedere"
                    }
                ]
            },
            "reservations": [
                {
                    "name": "Trasferimento Oaxaca → costa · 30 dic",
                    "status": "Da organizzare",
                    "type": "warning"
                },
                {
                    "name": "AltaMar Pochutla → Salina Cruz · 3 gen",
                    "status": "Da verificare",
                    "type": "warning"
                }
            ],
            "days": [
                {
                    "id": "6-dec30",
                    "dayName": "Giorno 10 (30 Dic)",
                    "title": "Da Oaxaca al Pacifico: check-in a Posada Paloma",
                    "location": "Oaxaca → zona Pochutla → San Agustinillo",
                    "shortDesc": "Partenza da Oaxaca, trasferimento a San Agustinillo e inizio del soggiorno al mare.",
                    "fullDesc": "<p>Lasciamo Oaxaca e raggiungiamo <strong>San Agustinillo</strong> sulla costa del Pacifico: controllare autobus fino a San Pedro Pochutla e taxi/colectivo per l'ultimo tratto, oppure un transfer diretto. Il soggiorno sul Pacifico è già confermato; dettagli e prezzo nel riquadro <strong>Logistica e spostamenti</strong> sotto la mappa, o in <strong>Hotel & costi</strong>.</p><p>Primo pomeriggio di mare e relax dopo i 40 km del trekking nella Sierra Norte. Il 3 gennaio partenza verso Pochutla per il trasferimento al Chiapas, ancora da organizzare.</p>",
                    "images": [
                        "https://commons.wikimedia.org/wiki/Special:FilePath/Playa%20San%20Agustinillo.jpg?width=960"
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
                            "name": "Oaxaca de Juárez · punto d'incontro da confermare",
                            "coords": [
                                17.0605,
                                -96.7251
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
                "intro": "Quattro notti a ritmo lento tra oceano, tramonti e piccoli villaggi costieri.",
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
                    "Il 3 gennaio partire verso Pochutla con margine: autobus e coincidenze non sono ancora prenotati."
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
            "description": "Palenque e Roberto Barrios il 5–6 gennaio; autobus dalla costa ancora da verificare. Toniná resta una possibilità alternativa, non programmata.",
            "images": [
                "https://commons.wikimedia.org/wiki/Special:FilePath/Temple%20of%20inscription%20in%20Palenque%20Chiapas%2002.jpg?width=960"
            ],
            "links": [
                {
                    "text": "INAH · Toniná (orari e ingressi)",
                    "url": "https://lugares.inah.gob.mx/es/node/5702"
                }
            ],
            "transferPlan": {
                "eyebrow": "3–4 gennaio 2027 · Itinerario candidato, da prenotare",
                "title": "Dal Pacifico alla giungla, seguendo la costa",
                "subtitle": "San Agustinillo → Pochutla → Salina Cruz → Villahermosa → Palenque",
                "cost": "~135–150 € in due per 3 bus, più trasferimenti locali",
                "duration": "Dal 3 gennaio pomeriggio al 4 gennaio ore 13:00 · ~22 ore complessive",
                "legs": [
                    {
                        "day": "3 gen",
                        "time": "Prima delle 16:15",
                        "from": "San Agustinillo",
                        "to": "San Pedro Pochutla",
                        "operator": "Taxi / colectivo",
                        "duration": "30–45 min indicativi",
                        "price": "Da verificare",
                        "note": "Partire con margine e individuare il punto di salita AltaMar a Pochutla."
                    },
                    {
                        "day": "3 gen",
                        "time": "16:15 → 20:10",
                        "from": "Pochutla",
                        "to": "Salina Cruz",
                        "operator": "AltaMar · diretto (Rome2Rio)",
                        "duration": "3 h 55 min",
                        "price": "13–20 € / persona, indicativi",
                        "note": "Orario mostrato su Rome2Rio per il 3 gennaio; verificare la corsa e il punto esatto d'arrivo. Margine teorico prima dell'ADO: 2 h 50 min."
                    },
                    {
                        "day": "3 → 4 gen",
                        "time": "23:00 → 08:55 (+1)",
                        "from": "Salina Cruz",
                        "to": "Villahermosa",
                        "operator": "ADO · notturno",
                        "duration": "9 h 55 min",
                        "price": "964 MXN / persona; 1.928 MXN in due",
                        "note": "Partenza da Calle Primero de Mayo 32, colonia Espinal (Salina Cruz). Arrivo ad Av. Francisco Javier Mina 297 (Villahermosa). Prezzo e orario mostrati nella ricerca ADO; non prenotato."
                    },
                    {
                        "day": "4 gen",
                        "time": "10:30 → 13:00",
                        "from": "Villahermosa Tabasco Central",
                        "to": "Palenque",
                        "operator": "Autobus · Rome2Rio",
                        "duration": "2 h 30 min",
                        "price": "~7 € / persona, indicativi",
                        "note": "Arrivo alla Central de Autobuses ADO Palenque. Margine teorico dall'ADO notturno: 1 h 35 min. Potrebbe essere necessario spostarsi tra due terminal a Villahermosa."
                    }
                ],
                "warning": "Corsa AltaMar delle 16:15 e collegamento Villahermosa–Palenque delle 10:30: orari indicativi Rome2Rio, da confermare per il 3–4 gennaio 2027. Verificare la fermata AltaMar a Salina Cruz, il terminal ADO di partenza e l'eventuale spostamento tra terminal a Villahermosa. Coincidenze NON garantite su biglietti separati; nessun biglietto ancora acquistato. <strong>Piano B, se una corsa manca o gli orari non coincidono:</strong> prima di pagare cercare un itinerario con meno cambi o una diversa combinazione di orari, confrontando i terminal; se necessario rivedere con anticipo il giorno di trasferimento senza spostare automaticamente le notti già prenotate. Il piano candidato non è una coincidenza garantita.",
                "sources": [
                    {
                        "text": "Controlla gli autobus ADO",
                        "url": "https://www.ado.com.mx/"
                    },
                    {
                        "text": "Confronta su Rome2Rio",
                        "url": "https://www.rome2rio.com/it/"
                    }
                ]
            },
            "days": [
                {
                    "id": "3-jan03",
                    "dayName": "Giorno 14 (3 Gen)",
                    "title": "Da San Agustinillo verso Salina Cruz: la costa di Oaxaca",
                    "location": "San Agustinillo · Pochutla · Salina Cruz",
                    "shortDesc": "Collegamenti indicativi Pochutla → Salina Cruz → Villahermosa; biglietti separati e non prenotati.",
                    "fullDesc": "<p>Ultime ore a <strong>San Agustinillo</strong>, poi taxi/colectivo per <strong>San Pedro Pochutla</strong>. Da qui è candidato l'autobus <strong>AltaMar</strong> verso <strong>Salina Cruz</strong>, seguito da un <strong>ADO notturno</strong> per Villahermosa. <strong>Nessun biglietto prenotato.</strong></p><p>Gli orari indicativi, gli indirizzi dei terminal, i prezzi e gli avvisi sulle coincidenze a biglietti separati sono nella scheda <strong>«Dal Pacifico alla giungla»</strong>, dentro <strong>Logistica e spostamenti</strong> nella colonna sotto la mappa; verificarli prima di acquistare, senza basarsi su una coincidenza non garantita.</p>",
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
                            "name": "Salina Cruz",
                            "coords": [
                                16.169,
                                -95.199
                            ]
                        }
                    ],
                    "operationalNotes": [
                        "I trasferimenti AltaMar e ADO sono ancora proposte: verificare corse del 3 gennaio, terminal e disponibilità.",
                        "Le coincidenze su biglietti separati non sono garantite. Se non funzionano, valutare un'alternativa con meno cambi prima di acquistare, tenendo conto del check-in a Palenque il 4 gennaio."
                    ]
                },
                {
                    "id": "3-jan04",
                    "dayName": "Giorno 15 (4 Gen)",
                    "title": "Da Villahermosa a Palenque: arrivo nella giungla",
                    "location": "Villahermosa · Palenque",
                    "shortDesc": "Arrivo indicativo in autobus a Villahermosa, prosecuzione per Palenque e trasferimento alla struttura.",
                    "fullDesc": "<p>Arrivo a <strong>Villahermosa</strong> e prosecuzione in autobus per <strong>Palenque</strong>, secondo l'itinerario candidato descritto in <strong>«Dal Pacifico alla giungla»</strong>, nella sezione <strong>Logistica e spostamenti</strong> sotto la mappa. Il percorso include potenzialmente un cambio di terminal e non è ancora prenotato.</p><p>All'arrivo a Palenque, raggiungere la struttura confermata lungo la <strong>Carretera Palenque–Ruinas</strong> con un taxi: chiedere deposito bagagli e check-in. Pomeriggio di riposo dopo il viaggio; il 5 gennaio sito archeologico, il 6 cascate.</p>",
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
                        "Verificare se a Villahermosa serve cambiare terminal e quanto tempo occorre.",
                        "Confermare l'ultimo autobus per Palenque e concordare taxi dall'arrivo al Los Susurros."
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
                        "https://commons.wikimedia.org/wiki/Special:FilePath/Temple%20of%20inscription%20in%20Palenque%20Chiapas%2002.jpg?width=960"
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
                        "https://commons.wikimedia.org/wiki/Special:FilePath/Cascada%20Roberto%20Barrios%2013.jpg?width=960"
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
                "total": "Autobus 3–4 gennaio ~135–150 € in due + ingressi e taxi da quotare",
                "spent": "Nessun autobus o tour in Chiapas confermato",
                "items": [
                    {
                        "name": "3–4 gen · tre autobus Pochutla → Palenque",
                        "cost": "~135–150 € in due, tariffe e coincidenze da verificare"
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
                    "name": "AltaMar · 3 gen 16:15",
                    "status": "Da verificare",
                    "type": "warning"
                },
                {
                    "name": "ADO · 3 gen 23:00",
                    "status": "Da prenotare",
                    "type": "warning"
                },
                {
                    "name": "Villahermosa–Palenque · 4 gen 10:30",
                    "status": "Da verificare",
                    "type": "warning"
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
                "hotelIdea": "Sistemazione immersa nel verde, non in centro: prevedere taxi per stazione bus, cascate e fermata del Tren Maya.",
                "why": "L'arrivo il 4 gennaio e il trasferimento per il Tren Maya del 7 richiedono taxi da concordare. Riferimenti dell'alloggio nel riepilogo hotel, autobus nella scheda trasferimento.",
                "tags": [
                    "🐒 Natura e primati",
                    "🏛️ Sito maya di Palenque",
                    "💧 Roberto Barrios"
                ],
                "transports": [
                    {
                        "icon": "🚕",
                        "title": "4 gen · autobus → hotel",
                        "desc": "Arrivo a Palenque indicativamente alle 13:00, concordare eventuale taxi e deposito bagagli prima del check-in."
                    },
                    {
                        "icon": "🏛️",
                        "title": "5 gen · rovine maya",
                        "desc": "Alloggio sulla strada per le rovine; verificare mezzi e tragitto con la struttura."
                    },
                    {
                        "icon": "🚆",
                        "title": "7 gen · Tren Maya",
                        "desc": "Verificare transfer e orario di partenza dalla struttura per la stazione, non necessariamente vicina."
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
                    "Lungo trasferimento il 3–4 gennaio: controllare orari e terminal prima di acquistare i bus."
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
            "description": "Due giornate per la laguna (8–9 gennaio). Il 7 gennaio Tren Maya, collegamenti e check-in tardivo sono ancora da confermare.",
            "images": [
                "https://commons.wikimedia.org/wiki/Special:FilePath/Bacalar%20lagoon.jpg?width=960"
            ],
            "links": [
                {
                    "text": "🔗 Foto Bacalar CC BY 2.0 · Roberto Bolaños",
                    "url": "https://commons.wikimedia.org/wiki/File:Bacalar_-_Lagoon_of_Colors.jpg"
                }
            ],
            "transferPlan": {
                "eyebrow": "7 gennaio 2027 · Biglietti e orari da verificare",
                "title": "Attraverso la penisola con il Tren Maya",
                "subtitle": "Palenque → Escárcega → stazione Bacalar → alloggio",
                "cost": "Treno e trasferimento finale: prezzi da quotare",
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
                        "note": "La stazione ferroviaria è fuori dal centro: concordare il pickup in anticipo e verificare che l'alloggio consenta il check-in serale."
                    }
                ],
                "warning": "Orari e coincidenze del <strong>Tren Maya NON confermati per il 7 gennaio 2027</strong>: verificare Palenque → Escárcega → Bacalar, fusi orari e taxi dalla stazione. <strong>Check-in tardivo all'Hotel Aires NON ancora autorizzato:</strong> chiedere risposta scritta per l'arrivo dopo le 23:30/mezzanotte anche in caso di ritardi. Se le corse non coincidono, rivedere lo spostamento prima di comprare i biglietti. <strong>Criticità specifica:</strong> l'orario ufficiale oggi pubblicato per la corsa 703 (Palenque 14:00 → Escárcega 16:49) e per la 704 (Escárcega 17:09 → Chetumal, passando da Bacalar) lascia <strong>20 minuti teorici</strong> a Escárcega. Non è una coincidenza garantita né una conferma per il 7 gennaio 2027. Chiedere esplicitamente al gestore se la prosecuzione è vendibile come collegamento unico; altrimenti prevedere un piano alternativo prima dell'acquisto.",
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
                "why": "Non è sul bordo della laguna: per nuotare scegliere punti d'accesso consentiti. L'arrivo in Tren Maya del 7 e il check-in tardivo sono da gestire nella scheda trasferimento.",
                "tags": [
                    "💧 Laguna e kayak",
                    "🍳 Colazione inclusa",
                    "⚠️ Arrivo notturno da confermare"
                ],
                "transports": [
                    {
                        "icon": "🚆",
                        "title": "7 gen · Tren Maya → Hotel Aires",
                        "desc": "Orari, taxi e accesso serale da confermare nella scheda trasferimento."
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
                "total": "Tren Maya, taxi e attività in laguna da quotare",
                "spent": "Nessun biglietto ferroviario o tour in laguna confermato",
                "items": [
                    {
                        "name": "Tour collettivo laguna o kayak · 8/9 gennaio",
                        "cost": "Attività facoltativa, preventivo da chiedere"
                    },
                    {
                        "name": "Tren Maya Palenque → Bacalar · 7 gennaio",
                        "cost": "Biglietto da acquistare"
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
                    "status": "Orario 2027 da confermare",
                    "type": "warning"
                },
                {
                    "name": "Hotel Aires · check-in tardivo e taxi stazione",
                    "status": "In attesa di conferma scritta",
                    "type": "warning"
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
                    "shortDesc": "Tren Maya Palenque → Bacalar e taxi serale. Late check-in da confermare con la struttura.",
                    "fullDesc": "<p>Tren Maya <strong>Palenque → Bacalar</strong>, biglietti ancora da acquistare. Gli orari attuali indicano un percorso candidato via Escárcega, ma non garantito per il <strong>7 gennaio 2027</strong>.</p><p>Per coincidenze, taxi dalla stazione e ingresso tardivo all'Hotel Aires consulta la scheda del trasferimento: <strong>non considerare confermato il check-in dopo le 23:30</strong> fino a risposta scritta dell'hotel.</p>",
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
                        "Tren Maya 703/704: coincidenza indicativa di 20 minuti a Escárcega, non confermata per il 7 gennaio.",
                        "Richiedere all'Hotel Aires conferma scritta del check-in tardivo, anche in caso di ritardo del treno.",
                        "Concordare taxi dalla stazione di Bacalar, fuori dal centro; valutare un collegamento alternativo prima di pagare biglietti non modificabili."
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
                        "https://commons.wikimedia.org/wiki/Special:FilePath/Bacalar%20lagoon.jpg?width=960"
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
                    "fullDesc": "<p>Seconda giornata senza orologio: nuoto, fotografie, kayak o una breve uscita in barca, soltanto se ne avete voglia. Il <strong>10 gennaio</strong> partire verso Playa del Carmen, poi traghetto per Cozumel; orari e coincidenze da verificare nella tappa Caribe.</p>",
                    "images": [
                        "https://commons.wikimedia.org/wiki/Special:FilePath/Bacalar%20lagoon.jpg?width=960"
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
                    "Per il 7 gennaio sono ancora da confermare Tren Maya e check-in tardivo."
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
            "description": "Cozumel e Akumal dal 10 al 16 gennaio: snorkeling notturno, Chichén Itzá e Muyil da prenotare, giornata libera il 15. Il 17 gennaio è il rientro in Italia.",
            "images": [
                "https://commons.wikimedia.org/wiki/Special:FilePath/Cozumel%20Beach.jpg?width=960"
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
                    "🌙 Snorkeling notturno proposto",
                    "🏛️ Chichén Itzá · preventivo",
                    "🌿 Muyil · preventivo",
                    "🏖️ 15 gen · riposo"
                ],
                "transports": [
                    {
                        "icon": "🚆",
                        "title": "10 gen · Bacalar → Cozumel",
                        "desc": "Tren Maya verso Playa del Carmen (se compatibile) + taxi porto + traghetto; orari non confermati."
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
                "total": "Tour Cozumel / Chichén Itzá / Muyil + trasferimenti da prenotare (hotel esclusi)",
                "spent": "Nessun tour o trasferimento della tappa confermato",
                "items": [
                    {
                        "name": "Night Snorkel Cozumel · 11 gen · 2 adulti",
                        "cost": "65 USD/persona pubblicizzati; taxi escluso"
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
                    "name": "Treno Bacalar → Playa + traghetto per Cozumel · 10 gen",
                    "status": "Da verificare/prenotare",
                    "type": "warning"
                },
                {
                    "name": "Night Snorkel Cozumel · preferibilmente 11 gen",
                    "status": "Da verificare/prenotare",
                    "type": "warning"
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
                    "shortDesc": "Trasferimento via Playa del Carmen e traghetto per Cozumel; orari e biglietti da verificare.",
                    "fullDesc": "<p>Partenza da Bacalar e trasferimento verso <strong>Playa del Carmen</strong> (Tren Maya come opzione, orari del 10/1/2027 da verificare); taxi al porto, traghetto per Cozumel e taxi per la <strong>Zona Hotelera Norte</strong>. I traghetti possono essere influenzati dal vento.</p><p>La prenotazione dell'alloggio sull'isola è già confermata: dettagli della camera e dell'importo nel pannello <strong>Logistica e spostamenti</strong> sotto la mappa o nel riepilogo <strong>Hotel & costi</strong>..</p>",
                    "operationalNotes": [
                        "Tren Maya o bus Bacalar → Playa del Carmen: verificare corse e terminal reali del 10 gennaio.",
                        "Verificare orari e operatività del traghetto; dal porto di Cozumel serve un taxi fino al Coral Princess."
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
                        "https://commons.wikimedia.org/wiki/Special:FilePath/Cozumel%20Beach.jpg?width=960"
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
                    "shortDesc": "Giornata sul mare e Night Snorkel Cozumel in serata, ancora da prenotare.",
                    "fullDesc": "<p>Giornata di mare e snorkeling dall'hotel, se condizioni e correnti lo consentono. Al tramonto possibile esperienza di <strong>snorkeling notturno guidato</strong> con <a href='https://nightsnorkelcozumel.com/' target='_blank' rel='noopener noreferrer'>Night Snorkel Cozumel</a>, con ritrovo da verificare al <strong>Money Bar</strong>. Si tratta di un'attività <strong>non ancora prenotata</strong>: verificare disponibilità l'11 gennaio, livello richiesto, meteo e trasporto serale in taxi dal Coral Princess.</p><p>Avvistamenti di fauna notturna non garantiti; programmare il ritorno all'hotel in sicurezza. Se disponibile il 10 e compatibile con il trasferimento, il tour potrebbe essere anticipato, ma non basare il piano su questa ipotesi.</p>",
                    "operationalNotes": [
                        "Snorkeling notturno NON prenotato: chiedere all'operatore disponibilità, livello richiesto, luogo/ora d'incontro e politica meteo.",
                        "Organizzare il taxi serale di andata e ritorno dal Coral Princess; nessun avvistamento garantito."
                    ],
                    "links": [
                        {
                            "text": "🌙 Night Snorkel Cozumel · operatore",
                            "url": "https://nightsnorkelcozumel.com/"
                        }
                    ],
                    "images": [
                        "https://commons.wikimedia.org/wiki/Special:FilePath/Palancar%20reef.jpg?width=960"
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
                        "https://commons.wikimedia.org/wiki/Special:FilePath/Akumal%20Beach%20-%20Mexico%20(4303205262).jpg?width=960"
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
                        "https://commons.wikimedia.org/wiki/Special:FilePath/El%20Castillo%2C%20Chichen%20Itza.jpg?width=960"
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
                        "https://commons.wikimedia.org/wiki/Special:FilePath/Sitio%20arqueol%C3%B3gico%20de%20Muyil.JPG?width=960"
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
                        "https://commons.wikimedia.org/wiki/Special:FilePath/Akumal%20Beach%20-%20Mexico%20(4303205262).jpg?width=960"
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
                        "detail": "11 gen · uscita guidata proposta al Money Bar.",
                        "state": "Non prenotato",
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