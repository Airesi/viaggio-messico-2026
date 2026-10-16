// Dati del Viaggio - js/data.js
// Soggiorni Booking confermati; obiettivo viaggio all-inclusive €10.000 per 2 adulti.

const tripData = {
    "general": {
        "dates": "20 Dicembre 2026 – 17 Gennaio 2027 • 29 Giorni",
        "title": "Messico",
        "footerName": "Spedizione Sud Messico (29 Giorni)",
        "footerSeason": "Dicembre - Gennaio",
        "hotelBookings": {
            "source": "Riepilogo Booking 16 ottobre 2026, 8 prenotazioni confermate per 2 adulti. Verificati anche i primi quattro importi: The PM €223, Cazomalli 24–26 dic €199 e 28–30 dic €232, Posada Paloma €266.",
            "totalEuro": 1845,
            "paidStatus": "Prenotazioni confermate NON equivalgono a pagamenti: Coral Princess dichiarato non pagato; El Ultimo Maya e gli altri pagamenti non verificati.",
            "validTotalEuro": 1845,
            "warning": "Totale hotel €1.845 per 8 prenotazioni (23 notti). Escluse le cabañas del trekking Sierra Norte, i trasferimenti, i tour, eventuali altre notti e spese extra. Check-in tardivo all'Hotel Aires ancora da confermare.",
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
                "imprevisti"
            ],
            "confirmedFlightsEuro": null,
            "note": "Il prezzo effettivo dei voli Air France per due persone non è presente nel sito: non calcolare un saldo certo finché manca."
        }
    },
    "areas": [
        {
            "id": 1,
            "navTitle": "Città del Messico",
            "navSubtitle": "CDMX e Teotihuacán",
            "badge": "Giorni 1 - 4 • Capitale",
            "locationText": "Città del Messico",
            "title": "Il Cuore della Capitale",
            "description": "Esplora le rovine precolombiane, il cuore storico e i canali del sud.",
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
                    "fullDesc": "Partenza al mattino presto per esplorare il cuore storico: il <strong>Zócalo</strong>, il <strong>Palacio Nacional</strong> e il <strong>Templo Mayor</strong>. Proseguiremo il percorso artistico al <strong>Museo Vivo del Muralismo</strong>, per poi ammirare la splendida facciata in maiolica della <strong>Casa de los Azulejos</strong>. Sosta panoramica salendo sulla <strong>Torre Latinoamericana</strong> per ammirare la megalopoli dall'alto. Nel primo pomeriggio ci allontaniamo dal cemento per immergerci nel <strong>Bosque de Chapultepec</strong>, un'oasi verde immensa, dove concluderemo la giornata all'incredibile <em>Museo Nacional de Antropología</em>.",
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
                    ]
                },
                {
                    "id": "1-3",
                    "dayName": "Giorno 3 (23 Dic)",
                    "title": "Borghi Colorati, Canali e... Partenza Notturna!",
                    "location": "Coyoacán, Xochimilco & Bus Notturno",
                    "shortDesc": "Atmosfere bohémien, trajineras a Xochimilco e in serata bus notturno ADO per Oaxaca.",
                    "fullDesc": "<p>La giornata inizia a <strong>Coyoacán</strong>, ammirando l'anima coloniale e la <em>Casa Azul</em> di Frida Kahlo. Nel pomeriggio ci spostiamo verso <strong>Xochimilco</strong> per navigare sui canali a bordo di una colorata <em>trajinera</em>.</p><p>Al termine della giornata, recuperiamo i bagagli e ci dirigiamo al <strong>Terminal Taxqueña (Sud CDMX)</strong>. Qui prenderemo il comodo pullman notturno della <em>ADO</em> (si raccomanda la classe GL o Platino per riposare comodamente). Viaggiando di notte cullati dalle curve della Sierra Madre, risparmieremo tempo prezioso, pronti a svegliarci il mattino seguente direttamente a Oaxaca!</p>",
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
                    ]
                }
            ],
            "basecamp": {
                "zone": "Condesa · base per Città del Messico",
                "hotelIdea": "Quartiere comodo per Roma/Condesa; per nome, date e importo dell'alloggio vedi «Alloggi confermati» qui sotto.",
                "why": "Arrivo la sera del 20 dicembre: verificare con la struttura l'orario di accesso. Il 23 recuperare i bagagli e raggiungere il bus notturno per Oaxaca; il pernottamento 23–24 è sul bus, non in un altro hotel.",
                "tags": [
                    "🌳 Condesa e Roma",
                    "🏛️ Musei e siti maya",
                    "🌮 Cucina messicana"
                ],
                "transports": [
                    {
                        "icon": "🚕",
                        "title": "Uber / DiDi",
                        "desc": "Economico e sicuro per Teotihuacán, Aeroporto e Xochimilco."
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
            }
        },
        {
            "id": 2,
            "navTitle": "Oaxaca e Sierra",
            "navSubtitle": "Città e trekking",
            "badge": "24–29 Dic • Oaxaca, Pueblos Mancomunados e Caminos Reales",
            "locationText": "Oaxaca · Monte Albán · Sierra Norte · Oaxaca",
            "title": "Tradizioni zapoteche e trekking nella Sierra Norte",
            "description": "Oaxaca e Jalatlaco prima e dopo il trekking comunitario Caminos Reales (26–28 dicembre, confermato e pagato). Natale dedicato a Hierve el Agua solo se l'apertura viene confermata; il 29 rimane jolly o riposo.",
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
                "total": "Trekking Caminos Reales · 12.917,70 MXN PAGATO; altre esperienze da quotare",
                "spent": "12.917,70 MXN pagati · pacchetto Sierra Norte per 2 persone",
                "items": [
                    {
                        "name": "Caminos Reales 26–28 dic · 3 giorni / 2 persone",
                        "cost": "12.917,70 MXN · PAGATO, transfer/guide/pasti/cabañas inclusi"
                    },
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
                    "name": "Caminos Reales · 26–28 dic · 12.917,70 MXN",
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
                    ]
                },
                {
                    "id": "6-dec26",
                    "dayName": "Giorno 6 (26 Dic)",
                    "title": "Caminos Reales I: Las Minas e Amatlán",
                    "location": "Oaxaca → San Miguel Amatlán · Las Minas",
                    "shortDesc": "08:00 partenza da Oaxaca; 10:00 Las Minas, 12 km in 4 ore, pranzo con trota, sala dei codici e prima notte in cabaña.",
                    "fullDesc": "<p><strong>26 dicembre · Las Minas e San Miguel Amatlán.</strong> Transfer da Oaxaca alle <strong>08:00</strong> (punto di ritrovo da verificare sul voucher), poi trekking di <strong>12 km / circa 4 ore</strong>. Pranzo con trota, visita alla sala dei codici e prima notte nella cabaña doppia di Amatlán.</p><p>Orari e attività completi sono già nella scheda <strong>«Caminos Reales»</strong> in questa sezione; per abbigliamento, checklist e condizioni consulta la <a href='sierra-norte.html'>guida Sierra Norte</a>. Il pacchetto è già pagato.</p>",
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
                    "fullDesc": "<p><strong>27 dicembre · Lachatao → Santa Marta Latuvi.</strong> È la tappa più lunga, <strong>16 km / 5–6 ore</strong> secondo il voucher. Nel pomeriggio laboratorio di <strong>pulque e tepache</strong>, cena e seconda notte nella cabaña di Latuvi.</p><p>Orari dettagliati e inclusioni nella scheda <strong>«Caminos Reales»</strong>. Il programma può variare per meteo e indicazioni della guida locale.</p>",
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
                    "fullDesc": "<p><strong>28 dicembre · Latuvi → Benito Juárez.</strong> Ultima camminata di <strong>12 km</strong> via mirador e ponte sospeso; dopo pranzo, trasferimento organizzato di ritorno a Oaxaca <strong>dalle 16:00</strong>, orario d'arrivo da confermare.</p><p>Totale: <strong>40 km in 3 giorni e 2 notti in cabañas</strong>. La notte del 28 si dorme già all'Hotel Cazomalli, prenotato; il 29 resta libero. Orari completi nella scheda <strong>«Caminos Reales»</strong>.</p>",
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
            "transferPlan": {
                "eyebrow": "CONFERMATO E PAGATO · 26–28 dicembre 2026 · 2 persone",
                "title": "Caminos Reales · 3 giorni / 2 notti · 40 km",
                "subtitle": "San Miguel Amatlán → Santa Marta Latuvi → Benito Juárez · rientro Oaxaca il 28 dicembre",
                "cost": "12.917,70 MXN per 2 persone · già pagato",
                "duration": "26–28 dicembre · 12 + 16 + 12 km · 2 notti in cabañas",
                "legs": [
                    {
                        "day": "Sab 26 dic · Giorno 1",
                        "time": "08:00 → 20:00",
                        "from": "Oaxaca → San Miguel Amatlán",
                        "to": "Las Minas · cabaña Amatlán",
                        "operator": "Sierra Norte · transfer e guida inclusi",
                        "duration": "10:00 trekking 12 km · ~4 ore",
                        "price": "Incluso nel totale PAGATO",
                        "note": "08:00 transfer da Oaxaca; 10:00 sentiero Las Minas (12 km); 14:00 pranzo con trota; 17:00 sala dei codici e antichità; 19:00 cena; 20:00 prima notte in cabaña ad Amatlán."
                    },
                    {
                        "day": "Dom 27 dic · Giorno 2",
                        "time": "08:00 → 20:00",
                        "from": "Lachatao / zona Amatlán",
                        "to": "Santa Marta Latuvi",
                        "operator": "Sierra Norte · trekking Camino Real guidato",
                        "duration": "09:00 trekking 16 km · 5–6 ore",
                        "price": "Incluso nel totale PAGATO",
                        "note": "08:00 colazione; 09:00 Camino Real da Lachatao a Latuvi (16 km); 15:00 pranzo; 16:00 laboratorio di pulque e tepache; 19:00 cena; 20:00 seconda notte in cabaña a Latuvi."
                    },
                    {
                        "day": "Lun 28 dic · Giorno 3",
                        "time": "08:00 → rientro da 16:00",
                        "from": "Santa Marta Latuvi",
                        "to": "Benito Juárez → Oaxaca",
                        "operator": "Sierra Norte · camminata e ritorno inclusi",
                        "duration": "09:00 trekking 12 km · ~4 h 30 min",
                        "price": "Incluso nel totale PAGATO",
                        "note": "08:00 colazione; 09:00 Latuvi → Benito Juárez via mirador e ponte sospeso (12 km); 14:30 pranzo; dalle 16:00 transfer di ritorno a Oaxaca. Ora esatta d'arrivo in città da confermare."
                    }
                ],
                "warning": "Pacchetto per 2 persone <strong>GIÀ PAGATO: 12.917,70 MXN</strong>. Comprende transfer Oaxaca–Sierra–Oaxaca, guide locali in spagnolo, pasti del trekking, due notti in cabañas, attività previste e assicurazione. Verificare <strong>punto di ritrovo, voucher e condizioni meteo</strong> con l'operatore. In quota (2.000–3.100 m) servono scarpe adatte e strati caldi; checklist e condizioni complete nella guida Sierra Norte.",
                "sources": [
                    {
                        "text": "Pacchetto ufficiale Sierra Norte",
                        "url": "https://www.sierranorte.org.mx/#/paquete/25"
                    },
                    {
                        "text": "Contatti e informazioni Expediciones Sierra Norte",
                        "url": "https://www.sierranorte.org.mx/"
                    }
                ]
            }
        },
        {
            "id": 6,
            "navTitle": "Pacifico",
            "navSubtitle": "San Agustinillo",
            "badge": "30 Dic – 3 Gen • San Agustinillo e Capodanno sul Pacifico",
            "locationText": "Costa di Oaxaca · San Agustinillo, Mazunte e Punta Cometa",
            "title": "Il Pacifico: quattro notti senza fretta",
            "description": "30 dicembre–3 gennaio: Capodanno e relax a San Agustinillo, con Mazunte, Punta Cometa e La Ventanilla facoltativi. Il 3 gennaio prosegue il viaggio verso il Chiapas, con collegamenti ancora da confermare.",
            "images": [
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"
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
                    "fullDesc": "<p>Lasciamo Oaxaca e raggiungiamo <strong>San Agustinillo</strong> sulla costa del Pacifico: controllare autobus fino a San Pedro Pochutla e taxi/colectivo per l'ultimo tratto, oppure un transfer diretto. Il soggiorno sul Pacifico è già confermato; dettagli e prezzo nella scheda <strong>Alloggi prenotati</strong>.</p><p>Primo pomeriggio di mare e relax dopo i 40 km del trekking nella Sierra Norte. Il 3 gennaio partenza verso Pochutla per il trasferimento al Chiapas, ancora da organizzare.</p>",
                    "images": [
                        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"
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
                    ]
                }
            ],
            "mapFocus": {
                "coords": [
                    15.6659,
                    -96.5438
                ],
                "zoom": 12
            }
        },
        {
            "id": 3,
            "navTitle": "Chiapas",
            "navSubtitle": "Palenque e foresta tropicale",
            "badge": "3–6 Gen · Dalla costa alla giungla",
            "locationText": "San Agustinillo → Palenque",
            "title": "Palenque: giungla, città maya e cascate",
            "description": "Palenque come base per la visita alle rovine maya del 5 gennaio e alle Cascadas Roberto Barrios del 6. Il 3–4 gennaio trasferimento dalla costa in più autobus non ancora prenotati; il 7 Tren Maya verso Bacalar.",
            "images": [
                "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=600&q=80"
            ],
            "links": [],
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
                "warning": "Corsa AltaMar delle 16:15 e collegamento Villahermosa–Palenque delle 10:30: orari indicativi Rome2Rio, da confermare per il 3–4 gennaio 2027. Verificare la fermata AltaMar a Salina Cruz, il terminal ADO di partenza e l'eventuale spostamento tra terminal a Villahermosa. Coincidenze NON garantite su biglietti separati; nessun biglietto ancora acquistato.",
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
                    "fullDesc": "<p>Ultime ore a <strong>San Agustinillo</strong>, poi taxi/colectivo per <strong>San Pedro Pochutla</strong>. Da qui è candidato l'autobus <strong>AltaMar</strong> verso <strong>Salina Cruz</strong>, seguito da un <strong>ADO notturno</strong> per Villahermosa. <strong>Nessun biglietto prenotato.</strong></p><p>Gli orari indicativi, gli indirizzi dei terminal, i prezzi e gli avvisi sulle coincidenze a biglietti separati sono nella scheda <strong>«Dal Pacifico alla giungla»</strong> appena sopra l'itinerario; verificarli prima di acquistare, senza basarsi su una coincidenza non garantita.</p>",
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
                    ]
                },
                {
                    "id": "3-jan04",
                    "dayName": "Giorno 15 (4 Gen)",
                    "title": "Da Villahermosa a Palenque: arrivo nella giungla",
                    "location": "Villahermosa · Palenque",
                    "shortDesc": "Arrivo indicativo in autobus a Villahermosa, prosecuzione per Palenque e trasferimento alla struttura.",
                    "fullDesc": "<p>Arrivo a <strong>Villahermosa</strong> e prosecuzione in autobus per <strong>Palenque</strong>, secondo l'itinerario candidato descritto in <strong>«Dal Pacifico alla giungla»</strong>. Il percorso include potenzialmente un cambio di terminal e non è ancora prenotato.</p><p>All'arrivo a Palenque, raggiungere la struttura confermata lungo la <strong>Carretera Palenque–Ruinas</strong> con un taxi: chiedere deposito bagagli e check-in. Pomeriggio di riposo dopo il viaggio; il 5 gennaio sito archeologico, il 6 cascate.</p>",
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
                    ]
                },
                {
                    "id": "3-jan05",
                    "dayName": "Giorno 16 (5 Gen)",
                    "title": "Palenque: la città maya nascosta nella giungla",
                    "location": "Zona archeologica di Palenque",
                    "shortDesc": "Giornata dedicata al sito UNESCO: Tempio delle Iscrizioni, Palazzo, complessi cerimoniali e sentieri nella foresta.",
                    "fullDesc": "<p>Dopo il lungo trasferimento dei giorni precedenti, dedichiamo la giornata alla <strong>zona archeologica di Palenque</strong>: un'antica città maya avvolta dalla vegetazione del Chiapas. Partiamo presto per evitare le ore più calde e prendiamo tempo per il <strong>Tempio delle Iscrizioni</strong>, il <strong>Palazzo</strong> e gli altri complessi aperti alla visita.</p><p><strong>Orario di riferimento INAH:</strong> 08:00–17:00, ultimo accesso alle 16:00; biglietti presso il Centro de Atención a Visitantes. Verificare tariffe INAH e gli eventuali ingressi aggiuntivi del parco prima della visita. Una guida locale è consigliata se vogliamo approfondire la storia della città.</p><p>Pomeriggio senza corse: possibile museo di sito, se aperto, oppure riposo a Palenque. <strong>Il 6 gennaio è riservato alle Cascadas Roberto Barrios.</strong></p><p>Controllare con la struttura il tragitto fino all'ingresso, senza dare per scontato che sia raggiungibile a piedi.</p>",
                    "images": [],
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
                    ]
                },
                {
                    "id": "3-jan06",
                    "dayName": "Giorno 17 (6 Gen)",
                    "title": "Cascadas Roberto Barrios: acqua turchese e foresta",
                    "location": "Roberto Barrios · Palenque",
                    "shortDesc": "Escursione alle cascate e alle piscine naturali nella giungla, con tempo per fermarsi e fare il bagno dove consentito.",
                    "fullDesc": "<p>Intera giornata alle <strong>Cascadas Roberto Barrios</strong>, un sistema di salti d'acqua e piscine naturali immerso nella vegetazione. È la giornata più acquatica del Chiapas: prendiamoci il tempo per esplorare i diversi livelli, fermarci nelle zone consentite e goderci il paesaggio.</p><p><strong>Trasporto:</strong> minivan/colectivo locale o escursione da Palenque, da organizzare sul posto; calcolare indicativamente circa un'ora per tratta, variabile in base al mezzo e alla strada. Chiedere sempre l'orario dell'ultima corsa di ritorno prima di partire.</p><p>Portare scarpe con buona aderenza, costume, acqua e una sacca impermeabile. Le rocce possono essere scivolose e la balneazione va valutata in base alle condizioni del giorno. Rientro a Palenque in serata e preparazione dei bagagli per il <strong>Tren Maya del 7 gennaio</strong>.</p><p>Organizzare con la struttura il taxi verso la stazione Tren Maya per il 7 gennaio.</p>",
                    "images": [],
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
            "food": "Per colazioni e cene chiedere disponibilità in struttura o organizzare taxi per Palenque: l'hotel è immerso nel verde, non in pieno centro."
        },
        {
            "id": 4,
            "navTitle": "Bacalar",
            "navSubtitle": "Tren Maya e laguna",
            "badge": "7–10 Gen • Dalla giungla alla Laguna dei Sette Colori",
            "locationText": "Palenque → Escárcega → Bacalar",
            "title": "Il Tren Maya e la laguna dai sette colori",
            "description": "Due giornate piene (8–9 gennaio) sulla Laguna dei Sette Colori: kayak, nuoto nei punti consentiti e riposo. Il 7 arrivo da Palenque con Tren Maya, coincidenze/trasferimento da verificare.",
            "images": [
                "https://live.staticflickr.com/4459/36785406774_ba471186a0_o.jpg"
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
                "warning": "Orari e coincidenze del <strong>Tren Maya NON confermati per il 7 gennaio 2027</strong>: verificare Palenque → Escárcega → Bacalar, fusi orari e taxi dalla stazione. <strong>Check-in tardivo all'Hotel Aires NON ancora autorizzato:</strong> chiedere risposta scritta per l'arrivo dopo le 23:30/mezzanotte anche in caso di ritardi. Se le corse non coincidono, rivedere lo spostamento prima di comprare i biglietti.",
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
                    "links": [],
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
                        "https://live.staticflickr.com/4459/36785406774_ba471186a0_o.jpg"
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
                    ]
                },
                {
                    "id": "4-jan09",
                    "dayName": "Giorno 20 (9 Gen)",
                    "title": "Bacalar senza orologio",
                    "location": "Bacalar",
                    "shortDesc": "Seconda giornata piena di laguna: calma, fotografia, tramonto e solo un'eventuale breve uscita in barca.",
                    "fullDesc": "<p>Seconda giornata senza orologio: nuoto, fotografie, kayak o una breve uscita in barca, soltanto se ne avete voglia. Il <strong>10 gennaio</strong> partire verso Playa del Carmen, poi traghetto per Cozumel; orari e coincidenze da verificare nella tappa Caribe.</p>",
                    "images": [],
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
            "researchNotes": [
                {
                    "title": "Accesso alla laguna",
                    "body": "L'hotel è comodo per il centro, ma non ha accesso diretto/pontile privato. Raggiungere balneari e accessi consentiti; la vista lago dalla terrazza non è garantita."
                }
            ],
            "hotelSearches": []
        },
        {
            "id": 5,
            "navTitle": "Caribe",
            "navSubtitle": "Cozumel e Akumal · hotel prenotati",
            "badge": "10–16 Gen • Cozumel, Chichén Itzá, Muyil e riposo ad Akumal",
            "locationText": "Bacalar → Playa del Carmen → Cozumel → Akumal → Cancún Aeroporto",
            "title": "Snorkeling a Cozumel e relax ad Akumal",
            "description": "Cozumel 10–12 gennaio, poi Akumal Pueblo 12–16. Possibile snorkeling notturno l'11, Chichén Itzá il 13 e canali di Muyil/Sian Ka’an il 14 (tutti NON prenotati). Il 15 gennaio resta libero per la spiaggia.",
            "images": [
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"
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
                    "text": "🌙 Night Snorkel Cozumel",
                    "url": "https://nightsnorkelcozumel.com/"
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
                    "fullDesc": "<p>Partenza da Bacalar e trasferimento verso <strong>Playa del Carmen</strong> (Tren Maya come opzione, orari del 10/1/2027 da verificare); taxi al porto, traghetto per Cozumel e taxi per la <strong>Zona Hotelera Norte</strong>. I traghetti possono essere influenzati dal vento.</p><p>La prenotazione dell'alloggio sull'isola è già confermata: dettagli della camera e dell'importo nel riquadro <strong>Alloggi prenotati</strong>.</p>"
                },
                {
                    "id": "5-jan11",
                    "dayName": "Giorno 22 (11 Gen)",
                    "title": "Cozumel: mare e snorkeling notturno",
                    "location": "Cozumel · Money Bar",
                    "shortDesc": "Giornata sul mare e Night Snorkel Cozumel in serata, ancora da prenotare.",
                    "fullDesc": "<p>Giornata di mare e snorkeling dall'hotel, se condizioni e correnti lo consentono. Al tramonto possibile esperienza di <strong>snorkeling notturno guidato</strong> con <a href='https://nightsnorkelcozumel.com/' target='_blank' rel='noopener noreferrer'>Night Snorkel Cozumel</a>, con ritrovo da verificare al <strong>Money Bar</strong>. Si tratta di un'attività <strong>non ancora prenotata</strong>: verificare disponibilità l'11 gennaio, livello richiesto, meteo e trasporto serale in taxi dal Coral Princess.</p><p>Avvistamenti di fauna notturna non garantiti; programmare il ritorno all'hotel in sicurezza. Se disponibile il 10 e compatibile con il trasferimento, il tour potrebbe essere anticipato, ma non basare il piano su questa ipotesi.</p>"
                },
                {
                    "id": "5-jan12",
                    "dayName": "Giorno 23 (12 Gen)",
                    "title": "Cozumel → Akumal Pueblo: trasferimento alla base finale",
                    "location": "Cozumel → Playa del Carmen → Akumal",
                    "shortDesc": "Traghetto Cozumel–Playa del Carmen e transfer ad Akumal Pueblo; hotel già confermato.",
                    "fullDesc": "<p>Check-out sull'isola e <strong>traghetto per Playa del Carmen</strong>. Poi taxi o transfer per <strong>Akumal Pueblo</strong>, non sulla spiaggia. La sistemazione per le ultime quattro notti è già confermata; si trova vicino ai servizi del pueblo. Organizzare il mezzo dalla fermata o dal porto, senza contare su un pickup automatico.</p>"
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
                            "text": "🏛️ Chichen Itza Tours · preventivo",
                            "url": "https://chichen-itzatours.com/chichen-itza-tour-from-riviera-maya.html"
                        },
                        {
                            "text": "🏛️ Vive Cancún · Chichén económico",
                            "url": "https://vivecancun.com/excursion-chichen-itza-economico-riviera-maya.php?s-categoria=reservar"
                        }
                    ]
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
                            "text": "🌿 Community Tours Sian Ka’an · Ancient Canal",
                            "url": "https://siankaantours.com.mx/experiences/ancient-canal-tour-sian-kaan/"
                        },
                        {
                            "text": "🌿 Paseo Tours · Canali Muyil",
                            "url": "https://www.paseotours.com/en/tour-muyil-canals/"
                        }
                    ]
                },
                {
                    "id": "5-jan15",
                    "dayName": "Giorno 26 (15 Gen)",
                    "title": "Akumal: giornata interamente libera",
                    "location": "Akumal · mare e relax",
                    "shortDesc": "Niente tour, niente trasferimenti: giornata di mare e riposo.",
                    "fullDesc": "<p><strong>15 gennaio:</strong> un giorno intero senza escursioni. Da <strong>Akumal Pueblo</strong> raggiungere la baia a piedi lungo il percorso sicuro, oppure con un breve taxi, e godersi la spiaggia. Nessuna nuova attività programmata.</p>"
                },
                {
                    "id": "5-jan16",
                    "dayName": "Giorno 27 (16 Gen)",
                    "title": "Ultime ore ad Akumal e volo da Cancún",
                    "location": "Akumal → Cancún Aeroporto",
                    "shortDesc": "Transfer via strada all'aeroporto CUN, volo AF651 delle 21:00.",
                    "fullDesc": "<p>Check-out da El Ultimo Maya ad Akumal Pueblo, qualche ora di mare se gli orari lo consentono e <strong>transfer su strada direttamente all'aeroporto di Cancún, Terminal 4</strong>. Nessun traghetto il giorno del volo: prevedere comunque ampio margine per traffico e formalità. Volo Air France <strong>AF651 delle 21:00 del 16 gennaio</strong>.</p>"
                },
                {
                    "id": "5-jan17",
                    "dayName": "Giorno 28 (17 Gen)",
                    "title": "Rientro a Milano Malpensa",
                    "location": "Parigi → Milano",
                    "shortDesc": "Scalo Air France a Parigi e arrivo a MXP.",
                    "fullDesc": "<p>Arrivo indicativo a Parigi CDG alle <strong>12:30</strong>, proseguimento con <strong>AF1730 alle 15:55</strong>, arrivo a <strong>Milano Malpensa alle 17:25</strong> del 17 gennaio. Ricontrollare gli operativi prima della partenza.</p>"
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
                            "url": "https://chichen-itzatours.com/chichen-itza-tour-from-riviera-maya.html",
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
                            "url": "https://vivecancun.com/excursion-chichen-itza-economico-riviera-maya.php?s-categoria=reservar",
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
                            "url": "https://siankaantours.com.mx/experiences/ancient-canal-tour-sian-kaan/",
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
                            "url": "https://www.paseotours.com/en/tour-muyil-canals/",
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
            ]
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