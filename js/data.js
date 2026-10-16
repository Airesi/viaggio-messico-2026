// Dati del Viaggio - js/data.js
// Prenotazioni e importi Booking; prenotato non significa pagato.

const tripData = {
    "general": {
        "dates": "20 Dicembre 2026 – 17 Gennaio 2027 • 29 Giorni",
        "title": "Messico",
        "footerName": "Spedizione Sud Messico (29 Giorni)",
        "footerSeason": "Dicembre - Gennaio",
        "hotelBookings": {
            "source": "Riepilogo Booking aggiornato al 16 ottobre 2026: 7 prenotazioni confermate per due adulti.",
            "totalEuro": 1679,
            "paidStatus": "Prenotazioni confermate, pagamenti distinti: Coral Princess non pagato; Hotel Aires e gli altri senza addebito verificato nelle schermate.",
            "validTotalEuro": 1679,
            "warning": "Hotel Aires Bacalar 7–10 gennaio confermato a €290; Coral Princess Cozumel 10–12 gennaio confermato a €300. Il check-in tardivo ad Aires rimane da confermare con la struttura.",
            "items": [
                {
                    "name": "The PM at Condesa Arts & Boutique Experience",
                    "city": "Città del Messico",
                    "checkin": "2026-12-20",
                    "checkout": "2026-12-23",
                    "totalEuro": 224,
                    "cancellation": "Non rimborsabile",
                    "status": "Confermato",
                    "areaId": 1
                },
                {
                    "name": "Hotel Cazomalli Oaxaca",
                    "city": "Oaxaca",
                    "checkin": "2026-12-24",
                    "checkout": "2026-12-26",
                    "totalEuro": 200,
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
                    "totalEuro": 267,
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
                }
            ]
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
            "links": [
                {
                    "text": "🔗 Prenotazione Bus ADO",
                    "url": "https://www.ado.com.mx"
                }
            ],
            "days": [
                {
                    "id": "1-1",
                    "dayName": "Giorno 1 (21 Dic)",
                    "title": "La Città degli Dei: Teotihuacán",
                    "location": "Teotihuacán (Nord CDMX)",
                    "shortDesc": "Colossali piramidi precolombiane e pranzo all'interno di una grotta vulcanica.",
                    "fullDesc": "<p>Iniziamo la nostra avventura facendo un salto indietro nel tempo di duemila anni. L'esplorazione inizia percorrendo la maestosa <strong>Calzada de los Muertos</strong> di Teotihuacán. Saliremo verso la <strong>Piramide del Sole</strong> per assorbirne l'energia e godremo del miglior panorama dal piazzale della <strong>Piramide della Luna</strong>. Per chiudere in bellezza, il nostro primo pranzo messicano si terrà al <em>Restaurante La Gruta</em>, situato all'interno di una spettacolare caverna vulcanica naturale. Pranzo prenotato alle 13 a La Gruta, consigliato Uber per andare e tornare accordandosi con l'autista per il ritorno dato che c'è poca copertura di rete. Costo indicativo dell'uber 75 euro, costo medio del ristorante 30-40 euro, costo dell'ingresso per gli stranieri 10 euro </p>",
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
                "zone": "Condesa · The PM at Condesa Arts & Boutique Experience",
                "hotelIdea": "The PM at Condesa Arts & Boutique Experience · 20–23 dicembre (3 notti) · Booking confermato, 224 € · non rimborsabile",
                "why": "Arrivo a Città del Messico la sera del 20 dicembre; avvisare l'hotel del possibile check-in tardi dopo il volo. Check-out il 23, poi bus ADO notturno verso Oaxaca: la notte 23–24 si trascorre in autobus.",
                "tags": [
                    "🌳 Verde",
                    "🛡️ Super Sicuro",
                    "🌮 Foodie"
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
                "total": "€ 224 hotel confermato + attività e trasporti",
                "spent": "Pagamento hotel non verificato",
                "items": [
                    {
                        "name": "The PM at Condesa · 20–23 dic · 3 notti · 2 ospiti",
                        "cost": "€ 224 · prenotato"
                    },
                    {
                        "name": "La Gruta · pranzo 21 dic (prenotato)",
                        "cost": "Da pagare"
                    },
                    {
                        "name": "Trasporti/ingressi in CDMX",
                        "cost": "Da definire"
                    }
                ]
            },
            "reservations": [
                {
                    "name": "The PM at Condesa · 20–23 dic · non rimborsabile",
                    "status": "Confermato",
                    "type": "success"
                },
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
            "description": "Due notti all'Hotel Cazomalli (24–26 dic), trekking Caminos Reales PAGATO (26–28 dic, 40 km e due notti in cabañas) e altre due notti al Cazomalli (28–30 dic). Il 29 resta libero per esplorare Oaxaca o recuperare Hierve el Agua.",
            "images": [
                "assets/img/Oaxaca_Ciudad.png",
                "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85"
            ],
            "links": [
                {
                    "text": "🎒 Sierra Norte · guida al trekking e checklist",
                    "url": "sierra-norte.html"
                },
                {
                    "text": "🏛️ Monte Albán · orari ufficiali INAH",
                    "url": "https://lugares.inah.gob.mx/es/node/4351"
                },
                {
                    "text": "🏛️ Mitla · orari INAH",
                    "url": "https://lugares.inah.gob.mx/es/node/4350"
                },
                {
                    "text": "💧 Hierve el Agua · orari indicativi (non festivi)",
                    "url": "https://www.hierveelaguashuttle.com/hierve.html"
                },
                {
                    "text": "🌲 Caminos Reales · prenotazione del 26 dicembre",
                    "url": "https://www.sierranorte.org.mx/#/paquete/25"
                },
                {
                    "text": "🥾 Pacchetto Caminos Reales · Sierra Norte",
                    "url": "https://www.sierranorte.org.mx/#/paquete/25"
                },
                {
                    "text": "🌲 Operatore Expediciones Sierra Norte",
                    "url": "https://www.sierranorte.org.mx/"
                },
                {
                    "text": "🚌 Autobus ADO",
                    "url": "https://www.ado.com.mx/"
                }
            ],
            "basecamp": {
                "zone": "Jalatlaco · Cazomalli (24–26 e 28–30 dic) · Sierra Norte (26–28 dic)",
                "hotelIdea": "Hotel Cazomalli Oaxaca: 24–26 dic (€200) e 28–30 dic (€232), entrambi confermati per 2 persone. Caminos Reales: cabañas ad Amatlán e Latuvi incluse nel pacchetto pagato.",
                "why": "La stessa struttura prima e dopo il trekking facilita la logistica dei bagagli: chiedere al Cazomalli se può custodirli mentre sarete in Sierra Norte. Il trasferimento Sierra Norte parte da Oaxaca il 26 alle 08:00, con rientro dal pomeriggio del 28. Il 29 è flessibile.",
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
                "total": "€ 432 alloggi Booking confermati + 12.917,70 MXN trekking pagato",
                "spent": "12.917,70 MXN · trekking PAGATO; pagamento hotel non verificato",
                "items": [
                    {
                        "name": "Cazomalli Oaxaca · 24–26 dic · 2 notti",
                        "cost": "€ 200 · confermato"
                    },
                    {
                        "name": "Caminos Reales 26–28 dic · 2 persone",
                        "cost": "12.917,70 MXN · PAGATO"
                    },
                    {
                        "name": "Cazomalli Oaxaca · 28–30 dic · 2 notti",
                        "cost": "€ 232 · confermato"
                    },
                    {
                        "name": "ADO da CDMX · 23/24 dic",
                        "cost": "Da prenotare"
                    },
                    {
                        "name": "Monte Albán · 24 dic",
                        "cost": "Ingresso da confermare"
                    },
                    {
                        "name": "Hierve el Agua · 25 oppure 29 dic",
                        "cost": "Apertura e tour da verificare"
                    }
                ]
            },
            "reservations": [
                {
                    "name": "Cazomalli Oaxaca · 24–26 dic · 200 €",
                    "status": "Confermato",
                    "type": "success"
                },
                {
                    "name": "Caminos Reales · 26–28 dic · 12.917,70 MXN",
                    "status": "Pagato",
                    "type": "success"
                },
                {
                    "name": "Cazomalli Oaxaca · 28–30 dic · 232 €",
                    "status": "Confermato",
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
                    "fullDesc": "<p><strong>Vigilia a Oaxaca.</strong> Arrivo in città dal <strong>bus notturno ADO da Città del Messico</strong>. L'alloggio è <strong>Hotel Cazomalli Oaxaca, a Jalatlaco, prenotato dal 24 al 26 dicembre per due persone (€ 200)</strong>: chiedere deposito bagagli al mattino, poiché l'early check-in non è garantito. Dopo aver lasciato i bagagli, trasferimento a <strong>Monte Albán</strong> per esplorare la città zapoteca: Gran Plaza, terrazze monumentali, panorami sulla valle e, in base ai percorsi aperti, le strutture archeologiche.</p><p><strong>Orario ordinario INAH:</strong> 08:00–17:00, ultimo accesso 16:00; la disponibilità e l'eventuale riduzione di orario per <strong>giovedì 24 dicembre 2026</strong> vanno confermate poco prima della visita. L'ideale è arrivare al mattino e prevedere <strong>circa 3 ore</strong> per il sito; se l'ADO arriva tardi, accorciamo le visite in centro invece di correre.</p><p><strong>Pomeriggio e sera:</strong> Templo de Santo Domingo, mercato 20 de Noviembre, vie del centro e atmosfera della <em>Nochebuena</em>, verificando quali attività siano effettivamente aperte. Cena della Vigilia con prenotazione consigliata. I festeggiamenti religiosi e le calendas possono variare: nessun evento dato per confermato.</p><p><strong>Il 25 dicembre</strong> vorremmo andare a Hierve el Agua soltanto se un operatore conferma l'accesso e il servizio festivo; il trekking Sierra Norte già pagato inizia il <strong>26 dicembre alle 08:00</strong> da Oaxaca.</p>",
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
                        },
                        {
                            "text": "🏛️ Monte Albán · piano 24 dicembre",
                            "url": "https://lugares.inah.gob.mx/es/node/4351"
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
                    "fullDesc": "<p><strong>Primo giorno del pacchetto CAMINOS REALES già pagato</strong> (26–28 dicembre, 2 persone, <strong>12.917,70 MXN totali</strong>). <strong>08:00</strong> trasferimento da Oaxaca verso <strong>San Miguel Amatlán</strong>, con punto di incontro da confermare sul voucher/organizzatore.</p><p><strong>10:00</strong> inizio della camminata sul percorso <strong>Las Minas</strong>: <strong>12 km, circa 4 ore</strong>. Alle <strong>14:00</strong> pranzo con trota. <strong>17:00</strong> visita alla sala dei codici e delle antichità; <strong>19:00</strong> cena tipica; <strong>20:00</strong> pernottamento nella <strong>cabaña doppia di San Miguel Amatlán</strong>.</p><p><strong>Incluso nel pacchetto:</strong> transfer di andata e ritorno da Oaxaca, pasti nella Sierra Norte, guide locali, accessi alle comunità, attività indicate e assicurazione. La guida parla spagnolo. Portare scarpe adatte e strati caldi: le comunità si trovano fra 2.000 e 3.100 m.</p>",
                    "images": [
                        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85"
                    ],
                    "links": [
                        {
                            "text": "🎒 Preparazione al trekking · consigli e regole",
                            "url": "sierra-norte.html"
                        },
                        {
                            "text": "🥾 Caminos Reales · pacchetto ufficiale",
                            "url": "https://www.sierranorte.org.mx/#/paquete/25"
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
                    "fullDesc": "<p><strong>Secondo giorno del trekking, domenica 27 dicembre.</strong> <strong>08:00</strong> colazione e <strong>09:00</strong> inizio della camminata sul <strong>Camino Real da Lachatao a Santa Marta Latuvi</strong>, attraverso boschi e antichi sentieri zapotechi: <strong>16 km, 5–6 ore</strong> secondo il voucher.</p><p><strong>15:00</strong> pranzo; <strong>16:00</strong> laboratorio di <strong>pulque e tepache</strong>; <strong>19:00</strong> cena, poi <strong>20:00</strong> sistemazione nella <strong>cabaña doppia di Latuvi</strong> (seconda notte inclusa nel prezzo). Sequenza delle attività dipendente dalle condizioni meteo e dalle disposizioni della guida.</p>",
                    "images": [
                        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85"
                    ],
                    "links": [
                        {
                            "text": "🎒 Preparazione al trekking · consigli e regole",
                            "url": "sierra-norte.html"
                        },
                        {
                            "text": "🥾 Caminos Reales · programma",
                            "url": "https://www.sierranorte.org.mx/#/paquete/25"
                        }
                    ],
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
                    "fullDesc": "<p><strong>Lunedì 28 dicembre:</strong> terzo e ultimo giorno del pacchetto <strong>già pagato</strong>. Alle <strong>08:00</strong> colazione; alle <strong>09:00</strong> partenza per la camminata <strong>Latuvi → Benito Juárez</strong> passando dal <strong>mirador</strong> e dal <strong>ponte sospeso</strong>: <strong>12 km, circa 4 ore e mezza</strong>.</p><p><strong>14:30</strong> pranzo; dalle <strong>16:00</strong> ritorno organizzato verso <strong>Oaxaca de Juárez</strong> (ora esatta di arrivo da verificare). La notte del <strong>28 dicembre si dorme a Oaxaca nell'Hotel Cazomalli, già prenotato dal 28 al 30 dicembre per due persone (€ 232, cancellazione gratuita)</strong>, non nella Sierra: le due notti in cabaña incluse nel voucher sono quelle del 26 e del 27.</p><p><strong>Totale trekking: 40 km in 3 giorni.</strong> Rientro, cena e riposo, senza ulteriori escursioni. Il 29 dicembre resta volutamente libero.</p>",
                    "images": [
                        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85"
                    ],
                    "links": [
                        {
                            "text": "🎒 Preparazione al trekking · consigli e regole",
                            "url": "sierra-norte.html"
                        },
                        {
                            "text": "🥾 Sierra Norte · sito operatore",
                            "url": "https://www.sierranorte.org.mx/"
                        }
                    ],
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
                    "fullDesc": "<p><strong>Il 29 dicembre è una giornata libera a Oaxaca, subito dopo il trekking pagato 26–28.</strong> Se il tour di <strong>Hierve el Agua</strong> non fosse stato disponibile a Natale, questa è la <strong>prima alternativa</strong> per recuperarlo, eventualmente abbinandolo a <strong>Mitla</strong>, all'<strong>Árbol del Tule</strong> o a un palenque di mezcal, ma soltanto se orari e forze lo permettono.</p><p><strong>Alternativa relax:</strong> se siamo riusciti a vedere Hierve el Agua il 25, o siamo stanchi dopo <strong>40 km in tre giorni</strong>, passeggiata per Santo Domingo, mercati, Jalatlaco, pausa gastronomica e serata tranquilla. Nessuna escursione obbligatoria: la mattina del <strong>30 dicembre</strong> scendiamo verso San Agustinillo per quattro notti al Pacifico.</p><p><strong>Logistica:</strong> notte del 28 già a Oaxaca dopo il rientro dal tour; anche la notte del <strong>29</strong> è in città. <strong>Le notti del 28 e 29 dicembre sono già prenotate presso Hotel Cazomalli Oaxaca (€ 232 totali per due, cancellazione gratuita).</strong> Inoltre la prenotazione Booking di Posada Paloma parte per errore dal <strong>29 dicembre</strong>, sovrapponendosi a questa seconda notte a Oaxaca: <strong>richiedere cambio 30 dicembre – 3 gennaio</strong>, senza cambiare l'itinerario.</p>",
                    "images": [
                        "assets/img/Oaxaca_Ciudad.png"
                    ],
                    "links": [
                        {
                            "text": "💧 Hierve el Agua · informazioni di riferimento",
                            "url": "https://www.hierveelaguashuttle.com/hierve.html"
                        },
                        {
                            "text": "🏛️ Mitla · INAH",
                            "url": "https://lugares.inah.gob.mx/es/node/4350"
                        },
                        {
                            "text": "🌲 Pacchetto Sierra Norte",
                            "url": "https://www.sierranorte.org.mx/#/paquete/25"
                        }
                    ],
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
                "warning": "Pacchetto già ACQUISTATO e PAGATO per 2 persone, 12.917,70 MXN, con arrivo 26 dicembre e partenza 28 dicembre. Il programma del voucher conferma: transfer Oaxaca–Sierra Norte–Oaxaca, 2 notti in cabañas (Amatlán 26/12, Latuvi 27/12), pasti in Sierra Norte, guide locali per 3 escursioni, sala dei codici, ponte sospeso, accessi comunitari e assicurazione. Partenza da Oaxaca il 26 alle 08:00; ritorno verso Oaxaca il 28 dalle 16:00. Verificare punto di incontro preciso e modalità di consegna del voucher. Guida solo in spagnolo; clima freddo in quota (2.000–3.100 m), abbigliamento caldo, scarpe da trekking e piccolo zaino. Tour condiviso; programma soggetto a meteo. Il 29 è libero a Oaxaca. LOGISTICA ALLOGGI: Hotel Cazomalli già confermato per 24–26 dicembre (€200) e 28–30 dicembre (€232); Posada Paloma confermata per 30 dicembre–3 gennaio (€267). Le date Booking ora coincidono con l'itinerario. Stato dei pagamenti degli hotel non verificato.",
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
            "description": "Dal 30 dicembre al 3 gennaio soggiorno CONFERMATO a Posada Paloma a San Agustinillo (€267, 4 notti, 2 persone). Riposo dopo la Sierra Norte, Capodanno sul mare e partenza per Pochutla il 3 gennaio per il trasferimento verso Palenque.",
            "images": [
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"
            ],
            "links": [
                {
                    "text": "🏖️ San Agustinillo · informazioni locali",
                    "url": "https://mazunte.gob.mx/locations/san-agustinillo/"
                },
                {
                    "text": "🚌 ADO · spostamento verso la costa",
                    "url": "https://www.ado.com.mx/"
                }
            ],
            "basecamp": {
                "zone": "San Agustinillo · Posada Paloma · 30 dic–3 gen",
                "hotelIdea": "Posada Paloma · 4 notti per 2 adulti · 267 € su Booking · confermata, cancellazione gratuita",
                "why": "Le date Booking ora coincidono con il programma: check-in il 30 dicembre, check-out il 3 gennaio. Il 3 trasferimento verso Pochutla per AltaMar e ADO notturno (scheda Chiapas).",
                "tags": [
                    "🌊 Pacifico",
                    "✅ Posada Paloma confermata",
                    "🌅 Capodanno sulla costa"
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
                "total": "€ 267 · Posada Paloma confermata (4 notti), più trasferimenti",
                "spent": "Pagamento Posada Paloma non verificato",
                "items": [
                    {
                        "name": "Posada Paloma · 30 dic–3 gen · 4 notti / 2 persone",
                        "cost": "€ 267 · confermato"
                    },
                    {
                        "name": "Oaxaca → San Agustinillo · 30 dic",
                        "cost": "Da quotare"
                    },
                    {
                        "name": "Tour La Ventanilla / attività costiere",
                        "cost": "Facoltativi"
                    },
                    {
                        "name": "Pochutla → Palenque · dal 3 gen",
                        "cost": "Vedi sezione Chiapas"
                    }
                ]
            },
            "reservations": [
                {
                    "name": "Posada Paloma · 30 dic–3 gen · € 267",
                    "status": "Confermato",
                    "type": "success"
                },
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
                    "shortDesc": "Partenza da Oaxaca, arrivo a San Agustinillo e check-in a Posada Paloma, confermata 30 dic–3 gen per €267 (2 persone).",
                    "fullDesc": "<p>Il <strong>30 dicembre</strong> lasciamo Oaxaca e raggiungiamo <strong>San Agustinillo</strong> sulla costa del Pacifico. Per il viaggio verifichiamo un autobus verso la zona di San Pedro Pochutla e l'ultimo tratto in taxi/colectivo, oppure un trasferimento diretto; gli orari del 30 dicembre sono ancora da controllare.</p><p><strong>Posada Paloma è confermata su Booking dal 30 dicembre 2026 al 3 gennaio 2027, quattro notti per due adulti, totale €267, cancellazione gratuita.</strong> La prenotazione coincide adesso con le date del programma: nessuna modifica ulteriore richiesta.</p><p>Dopo i 40 km di Sierra Norte, pomeriggio tranquillo e primo tramonto sul mare. La mattina del <strong>3 gennaio</strong> avremo ancora tempo a San Agustinillo prima di partire verso Pochutla per il trasferimento notturno in direzione Palenque.</p>",
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
                    "shortDesc": "Capodanno sul Pacifico con base a Posada Paloma già confermata; Mazunte, Punta Cometa e La Ventanilla facoltativi.",
                    "fullDesc": "<p><strong>31 dicembre, 1 e 2 gennaio</strong>: tre giornate sulla costa, con base sempre a <strong>Posada Paloma, San Agustinillo</strong> (prenotazione confermata <strong>30 dicembre–3 gennaio, €267 totali in due</strong>). Nessun cambio di alloggio e nessuna escursione obbligatoria.</p><p>Se ne abbiamo voglia possiamo visitare <strong>Mazunte</strong>, vedere il tramonto da <strong>Punta Cometa</strong> se il sentiero è praticabile, oppure partecipare a un'escursione locale fra mangrovie e fauna a <strong>La Ventanilla</strong>. Per Capodanno niente spostamenti lunghi: restiamo sul Pacifico.</p><p><strong>2 gennaio:</strong> ultimo giorno pieno al mare e preparazione dei bagagli. Il <strong>3 gennaio</strong>, dopo check-out, taxi o colectivo per <strong>San Pedro Pochutla</strong> in tempo per il collegamento AltaMar indicativo delle <strong>16:15</strong> e la successiva corsa ADO notturna: confermare orari e terminal come spiegato nella scheda Chiapas.</p>",
                    "images": [
                        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"
                    ],
                    "links": [
                        {
                            "text": "🏖️ San Agustinillo · informazioni",
                            "url": "https://mazunte.gob.mx/locations/san-agustinillo/"
                        },
                        {
                            "text": "🚌 ADO · trasferimento 3 gennaio",
                            "url": "https://www.ado.com.mx/"
                        }
                    ],
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
            "description": "Il 4 gennaio arrivo dalla costa del Pacifico e check-in al Los Susurros (4–7 gennaio, 3 notti, €166 per due, prenotazione confermata). Il 5 visitiamo le rovine maya e il 6 le Cascadas Roberto Barrios; il 7 partiamo per Bacalar con il Tren Maya.",
            "images": [
                "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=600&q=80"
            ],
            "links": [
                {
                    "text": "🔗 Bus ADO · biglietti",
                    "url": "https://www.ado.com.mx/"
                },
                {
                    "text": "🔗 Rome2Rio · orari di riferimento",
                    "url": "https://www.rome2rio.com/it/"
                },
                {
                    "text": "🔗 Orari e accesso Palenque (INAH)",
                    "url": "https://lugares.inah.gob.mx/es/node/4853"
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
                    "shortDesc": "AltaMar Pochutla 16:15–20:10; ADO notturno delle 23:00 per Villahermosa.",
                    "fullDesc": "<p>Ultime ore sul Pacifico a <strong>San Agustinillo</strong>. Con taxi o colectivo raggiungiamo <strong>San Pedro Pochutla</strong> (circa 30–45 minuti indicativi), con margine per individuare la fermata dell'autobus.</p><p><strong>16:15–20:10</strong> · <strong>AltaMar diretto Pochutla → Salina Cruz</strong>, 3 h 55 min, circa <strong>13–20 € a persona</strong> secondo Rome2Rio. La strada segue la costa in buona parte: niente ritorno a Oaxaca. <strong>Da verificare</strong> disponibilità effettiva per il 3 gennaio e fermata di arrivo a Salina Cruz.</p><p><strong>23:00</strong> · Partenza <strong>ADO Salina Cruz → Villahermosa</strong>, bus notturno di 9 h 55 min con arrivo alle <strong>08:55 del 4 gennaio</strong>. Tariffa visualizzata su ADO: <strong>964 MXN a persona</strong> (1.928 MXN in due). Punto di partenza indicato: <strong>Calle Primero de Mayo 32, colonia Espinal, Salina Cruz</strong>. Tra gli autobus abbiamo 2 h 50 min sulla carta, ma sono biglietti separati e un ritardo può far perdere la coincidenza.</p><p><strong>Stato: non prenotato.</strong> Confermare orari e terminal prima di acquistare.</p>",
                    "images": [],
                    "links": [
                        {
                            "text": "🚌 Prenota ADO",
                            "url": "https://www.ado.com.mx/"
                        },
                        {
                            "text": "🗺️ Cerca AltaMar su Rome2Rio",
                            "url": "https://www.rome2rio.com/it/"
                        }
                    ],
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
                    "shortDesc": "ADO arriva alle 08:55, bus verso Palenque alle 10:30 e arrivo previsto alle 13:00.",
                    "fullDesc": "<p><strong>08:55</strong> · Arrivo del bus ADO a <strong>Villahermosa</strong> presso <strong>Av. Francisco Javier Mina 297</strong>, angolo Lino Merino e Lamberto Castellanos Rivera.</p><p><strong>10:30–13:00</strong> · Collegamento diretto <strong>Villahermosa Tabasco Central → Central de Autobuses ADO Palenque</strong> mostrato da Rome2Rio, durata <strong>2 h 30 min</strong> e prezzo indicativo <strong>7 € a persona</strong>. La coincidenza teorica è di <strong>1 h 35 min</strong>, ma <strong>i terminal potrebbero essere differenti</strong>: verificare gli indirizzi e prevedere l'eventuale breve trasferimento.</p><p><strong>13:00</strong> · Arrivo previsto a <strong>Palenque</strong> e trasferimento in taxi o altro mezzo da organizzare al <strong>Los Susurros Casa Monkey Rescue and Rehabilitation Sanctuary, sulla Carretera Palenque-Ruinas</strong>. Booking conferma <strong>4–7 gennaio, 3 notti per due persone, €166 e cancellazione gratuita</strong>. Chiedere alla struttura check-in e indicazioni per il transfer; pomeriggio tranquillo dopo il lungo viaggio. <strong>5 gennaio</strong>: rovine di Palenque; <strong>6 gennaio</strong>: Cascadas Roberto Barrios. Successivo collegamento verso il Tren Maya da confermare.</p><p><strong>Budget stimato per due:</strong> circa <strong>135–150 €</strong> per i tre autobus principali, esclusi San Agustinillo–Pochutla e eventuali taxi tra terminal. Prezzi non bloccati e orari da riconfermare.</p>",
                    "images": [],
                    "links": [
                        {
                            "text": "🚌 Autobus ADO",
                            "url": "https://www.ado.com.mx/"
                        },
                        {
                            "text": "🗺️ Rome2Rio",
                            "url": "https://www.rome2rio.com/it/"
                        }
                    ],
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
                    "fullDesc": "<p>Dopo il lungo trasferimento dei giorni precedenti, dedichiamo la giornata alla <strong>zona archeologica di Palenque</strong>: un'antica città maya avvolta dalla vegetazione del Chiapas. Partiamo presto per evitare le ore più calde e prendiamo tempo per il <strong>Tempio delle Iscrizioni</strong>, il <strong>Palazzo</strong> e gli altri complessi aperti alla visita.</p><p><strong>Orario di riferimento INAH:</strong> 08:00–17:00, ultimo accesso alle 16:00; biglietti presso il Centro de Atención a Visitantes. Verificare tariffe INAH e gli eventuali ingressi aggiuntivi del parco prima della visita. Una guida locale è consigliata se vogliamo approfondire la storia della città.</p><p>Pomeriggio senza corse: possibile museo di sito, se aperto, oppure riposo a Palenque. <strong>Il 6 gennaio è riservato alle Cascadas Roberto Barrios.</strong></p><p><strong>Base:</strong> Los Susurros, confermato fino al 7 gennaio. Verificare con la struttura il modo più semplice di raggiungere l'ingresso del sito archeologico, senza dare per scontato che sia raggiungibile a piedi.</p>",
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
                    "fullDesc": "<p>Intera giornata alle <strong>Cascadas Roberto Barrios</strong>, un sistema di salti d'acqua e piscine naturali immerso nella vegetazione. È la giornata più acquatica del Chiapas: prendiamoci il tempo per esplorare i diversi livelli, fermarci nelle zone consentite e goderci il paesaggio.</p><p><strong>Trasporto:</strong> minivan/colectivo locale o escursione da Palenque, da organizzare sul posto; calcolare indicativamente circa un'ora per tratta, variabile in base al mezzo e alla strada. Chiedere sempre l'orario dell'ultima corsa di ritorno prima di partire.</p><p>Portare scarpe con buona aderenza, costume, acqua e una sacca impermeabile. Le rocce possono essere scivolose e la balneazione va valutata in base alle condizioni del giorno. Rientro a Palenque in serata e preparazione dei bagagli per il <strong>Tren Maya del 7 gennaio</strong>.</p><p><strong>Pernottamento:</strong> ultima notte al Los Susurros. Verificare con l'alloggio un taxi per la partenza del Tren Maya il 7 gennaio e le tempistiche per raggiungere la stazione.</p>",
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
                "total": "€ 166 hotel confermato + ~135–150 € autobus indicativi + attività",
                "spent": "Pagamento hotel non verificato; bus ancora non prenotati",
                "items": [
                    {
                        "name": "Los Susurros · 4–7 gen · 3 notti / 2 persone",
                        "cost": "€ 166 · confermato"
                    },
                    {
                        "name": "Pochutla → Salina Cruz (AltaMar)",
                        "cost": "26–40 € / 2 · indicativi"
                    },
                    {
                        "name": "Salina Cruz → Villahermosa (ADO)",
                        "cost": "1.928 MXN / 2 · da prenotare"
                    },
                    {
                        "name": "Villahermosa → Palenque",
                        "cost": "~14 € / 2 · indicativi"
                    },
                    {
                        "name": "Taxi/colectivo + trasferimenti hotel",
                        "cost": "Da quotare"
                    },
                    {
                        "name": "Palenque sito archeologico / Roberto Barrios",
                        "cost": "Da quotare"
                    }
                ]
            },
            "reservations": [
                {
                    "name": "Los Susurros · Palenque · 4–7 gen · € 166",
                    "status": "Confermato",
                    "type": "success"
                },
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
                "zone": "Palenque · strada Palenque-Ruinas",
                "hotelIdea": "Los Susurros Casa Monkey Rescue and Rehabilitation Sanctuary · 4–7 gennaio 2027 · 3 notti per 2 adulti · € 166 su Booking · cancellazione gratuita",
                "why": "Alloggio immerso nella natura lungo la strada per il sito archeologico. Organizzare taxi/transfer dall'arrivo in autobus a Palenque il 4, verso Roberto Barrios il 6 e per la stazione Tren Maya il 7. L'accesso potrebbe richiedere un mezzo: verificare con la struttura.",
                "tags": [
                    "🐒 Santuario di recupero primati",
                    "🌿 Foresta tropicale",
                    "✅ 3 notti confermate"
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
            "description": "7–10 gennaio · Hotel Aires Bacalar CONFERMATO su Booking, 3 notti per due adulti a €290, cancellazione gratuita. Colazione inclusa nella tariffa scelta. Arrivo il 7 con Tren Maya: check-in dopo le 23:30 e taxi dalla stazione ANCORA DA CONFERMARE. Il 10 partenza per Playa del Carmen e traghetto per Cozumel.",
            "images": [
                "https://live.staticflickr.com/4459/36785406774_ba471186a0_o.jpg"
            ],
            "links": [
                {
                    "text": "🔗 Tren Maya · orari ufficiali",
                    "url": "https://www.trenmaya.gob.mx/horarios.php"
                },
                {
                    "text": "🔗 Tren Maya · sito e biglietti",
                    "url": "https://www.trenmaya.gob.mx/"
                },
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
                "warning": "Gli orari riportati sono quelli pubblicati oggi dal Tren Maya, NON confermati per il 7 gennaio 2027. Chiedere la fermata effettiva a Bacalar, l'eventuale cambio a Escárcega, i fusi orari regionali, disponibilità dei biglietti e taxi serale dalla stazione. In caso di corse diverse, potrebbe servire ripianificare il 7 gennaio.",
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
                "zone": "Bacalar · Hotel Aires Bacalar 7–10 gennaio · prenotato",
                "hotelIdea": "Hotel Aires Bacalar, Avenida 3 angolo Calle 26 · €290 per 3 notti / 2 adulti · Booking confermato, pagamento da verificare. Colazione inclusa e Camera Queen con Terrazza nella tariffa selezionata.",
                "why": "Un solo hotel per 3 notti, centrale e vicino ai ristoranti. Non è direttamente sulla laguna e non ha pontile privato. Importantissimo: chiedere conferma SCRITTA del check-in dopo le 23:30/mezzanotte anche in caso di ritardo del Tren Maya e del taxi dalla stazione.",
                "tags": [
                    "✅ Hotel Aires confermato",
                    "🍳 Colazione inclusa",
                    "⚠️ Check-in tardivo da confermare",
                    "🚆 10 gen verso Cozumel"
                ],
                "transports": [
                    {
                        "icon": "🚆",
                        "title": "7 gen · Tren Maya → Hotel Aires",
                        "desc": "Orario del treno da verificare e check-in molto tardi da autorizzare; organizzare taxi dalla stazione."
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
                "total": "€290 · Hotel Aires Bacalar CONFERMATO, 3 notti / 2 adulti + trasporti",
                "spent": "Pagamento Hotel Aires da verificare; prenotazione confermata",
                "items": [
                    {
                        "name": "Hotel Aires Bacalar · 7–10 gen · 3 notti / 2 adulti",
                        "cost": "€290 · confermato, pagamento non verificato, colazione inclusa"
                    },
                    {
                        "name": "Tren Maya Palenque → Bacalar · 7 gen",
                        "cost": "Da prenotare"
                    },
                    {
                        "name": "Taxi stazione Bacalar → Hotel Aires",
                        "cost": "Da organizzare"
                    },
                    {
                        "name": "Kayak / accesso alla laguna",
                        "cost": "Facoltativi"
                    },
                    {
                        "name": "Tren Maya Bacalar → Playa del Carmen e traghetto Cozumel · 10 gen",
                        "cost": "Da verificare"
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
                    "name": "Hotel Aires Bacalar · 7–10 gen, 3 notti",
                    "status": "CONFERMATO · €290 · pagamento non verificato",
                    "type": "success"
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
                    "shortDesc": "Arrivo da Palenque, check-in all'Hotel Aires prenotato a €290; late check-in da confermare.",
                    "fullDesc": "<p>Tren Maya <strong>Palenque → Bacalar</strong> il 7 gennaio, biglietti e orari gennaio 2027 da verificare. Taxi da organizzare dalla stazione fuori paese. <strong>Hotel Aires Bacalar CONFERMATO</strong> dal 7 al 10 gennaio, 3 notti per 2 adulti, <strong>€290</strong>, cancellazione gratuita. Tariffa selezionata con colazione inclusa e Camera Queen con Terrazza (verificare i dettagli definitivi in conferma).</p><p><strong>Nonostante la prenotazione confermata, l'arrivo dopo le 23:30/mezzanotte NON è ancora autorizzato:</strong> attendere risposta scritta dell'hotel e chiedere tolleranza per ritardi del Tren Maya. Stato pagamento non verificato.</p>",
                    "images": [],
                    "links": [
                        {
                            "text": "🚆 Orario ufficiale Tren Maya",
                            "url": "https://www.trenmaya.gob.mx/horarios.php"
                        },
                        {
                            "text": "🚆 Sito Tren Maya",
                            "url": "https://www.trenmaya.gob.mx/"
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
                    ]
                },
                {
                    "id": "4-jan08",
                    "dayName": "Giorno 19 (8 Gen)",
                    "title": "Bacalar: il primo giorno sulla laguna",
                    "location": "Bacalar · Laguna dei Sette Colori",
                    "shortDesc": "Kayak nella laguna e pomeriggio di completo relax: acqua dolce, non mare.",
                    "fullDesc": "<p>Prima giornata sulla <strong>Laguna dei Sette Colori</strong>: kayak, tour ecocompatibile o balneazione nei punti autorizzati, evitando le zone protette degli stromatoliti. <strong>Hotel Aires è in centro, non direttamente sulla laguna</strong>: non dispone di un pontile privato da cui entrare in acqua.</p><p>Colazione inclusa nell'offerta selezionata. L'indicazione vista lago della camera non implica una terrazza proprio sopra l'acqua: verificare la tipologia finale nella prenotazione.</p>",
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
                    "fullDesc": "<p>Seconda giornata intera di laguna e relax, senza cambiare hotel: colazione all'Hotel Aires, accessi autorizzati all'acqua e passeggiata nel centro del paese. L'Hotel Aires è già confermato per tutte e tre le notti.</p><p><strong>10 gennaio:</strong> check-out e trasferimento verso Playa del Carmen (Tren Maya candidato, orari da verificare), taxi al porto e traghetto per Cozumel, dove il Coral Princess è confermato 10–12 gennaio a €300.</p>",
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
                    "title": "Hotel Aires Bacalar · CONFERMATO · €290",
                    "body": "Tre notti, 7–10 gennaio 2027, due adulti, cancellazione gratuita. Colazione e Camera Queen con Terrazza nella tariffa scelta; Booking conferma prenotazione ma non documenta addebiti."
                },
                {
                    "title": "Late check-in: da confermare per iscritto",
                    "body": "Il Tren Maya potrebbe arrivare dopo le 23:30/mezzanotte il 7 gennaio. Serve autorizzazione scritta ad entrare anche con ritardi, e un taxi dalla stazione. Booking confermato non equivale a late check-in approvato."
                },
                {
                    "title": "Accesso laguna",
                    "body": "Hotel Aires si trova in centro a Bacalar, non direttamente sulla laguna; raggiungere balneari o punti di accesso autorizzati. Nessun pontile privato e vista lago della camera da verificare."
                },
                {
                    "title": "Alternative scartate",
                    "body": "Villas Ecotucan, Tuparenda e 7 Cielos erano alternative considerate prima della prenotazione di Hotel Aires, ora non più necessarie."
                }
            ],
            "hotelSearches": []
        },
        {
            "id": 5,
            "navTitle": "Caribe",
            "navSubtitle": "Cozumel e Akumal",
            "badge": "10–16 Gen • Cozumel, Chichén Itzá, Muyil e riposo ad Akumal",
            "locationText": "Bacalar → Playa del Carmen → Cozumel → Akumal → Cancún Aeroporto",
            "title": "Snorkeling a Cozumel e relax ad Akumal",
            "description": "10–12 gennaio: Coral Princess Hotel & Dive Resort a Cozumel CONFERMATO (€300, NON PAGATO). 12–16 gennaio: Akumal, quattro notti DA PRENOTARE. Da Akumal: 13 gennaio tour collettivo a Chichén Itzá, 14 gennaio canali di Muyil/Sian Ka’an, entrambi ANCORA DA CONTATTARE E PRENOTARE; 15 gennaio completamente libero per il mare. Il 16 transfer diretto all’aeroporto di Cancún.",
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
                },
                {
                    "text": "🏛️ Chichen Itza Tours · Classic Riviera Maya",
                    "url": "https://chichen-itzatours.com/chichen-itza-tour-from-riviera-maya.html"
                },
                {
                    "text": "🏛️ Vive Cancún · Chichén económico",
                    "url": "https://vivecancun.com/excursion-chichen-itza-economico-riviera-maya.php?s-categoria=reservar"
                },
                {
                    "text": "🌿 Community Tours Sian Ka’an · Ancient Canal",
                    "url": "https://siankaantours.com.mx/experiences/ancient-canal-tour-sian-kaan/"
                },
                {
                    "text": "🌿 Paseo Tours · Canali di Muyil",
                    "url": "https://www.paseotours.com/en/tour-muyil-canals/"
                }
            ],
            "basecamp": {
                "zone": "Cozumel 10–12 gen (2 notti confermate) · Akumal 12–16 gen (4 notti da cercare)",
                "hotelIdea": "Coral Princess Hotel & Dive Resort · 10–12 gen · King Deluxe Fronte Oceano · €300 CONFERMATO, NON PAGATO, cancellazione gratuita, senza colazione. Akumal 12–16 gen ancora da prenotare.",
                "why": "Il 10 arrivo a Cozumel via Playa del Carmen e traghetto; Coral Princess prenotato a €300. 11 possibile snorkeling notturno; 12 Akumal (hotel da cercare). 13 Chichén Itzá con tour collettivo A/R; 14 Muyil e flottazione canali; 15 GIORNO LIBERO senza altri tour; 16 transfer diretto a Cancún Aeroporto. I tour 13/14 non sono prenotati, attendere preventivi pickup Akumal.",
                "tags": [
                    "✅ Coral Princess prenotato",
                    "🌙 Night snorkeling da prenotare",
                    "🏛️ Chichén Itzá 13 gen · contatti pronti",
                    "🌿 Muyil 14 gen · contatti pronti",
                    "🏖️ 15 gen · mare senza programmi"
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
                "total": "€300 · Coral Princess confermato e NON pagato; Akumal 12–16 da quotare",
                "spent": "€0 pagati per Coral Princess (secondo quanto indicato); prenotazione confermata",
                "items": [
                    {
                        "name": "Coral Princess · 10–12 gen · King Deluxe Fronte Oceano",
                        "cost": "€300 · CONFERMATO, NON pagato, cancellazione gratuita"
                    },
                    {
                        "name": "Akumal · alloggio 12–16 gen, 4 notti per due",
                        "cost": "Da prenotare / quotare"
                    },
                    {
                        "name": "Tren Maya Bacalar → Playa del Carmen + traghetto · 10 gen",
                        "cost": "Da verificare"
                    },
                    {
                        "name": "Night Snorkel Cozumel · 10 o 11 gen",
                        "cost": "Da verificare/prenotare"
                    },
                    {
                        "name": "Traghetto Cozumel → Playa + transfer Akumal · 12 gen",
                        "cost": "Da quotare"
                    },
                    {
                        "name": "Chichén Itzá tour collettivo da Akumal · 13 gen",
                        "cost": "Da quotare per 2: pubblicizzati 1.300 MXN o 75 USD a persona, ingresso incluso, pickup da confermare"
                    },
                    {
                        "name": "Tour comunitario Muyil / Sian Ka’an · 14 gen",
                        "cost": "Da quotare per 2 persone: indicati 3.380 MXN a persona + ingresso; verificare alternativa €100/persona e pickup"
                    },
                    {
                        "name": "Akumal → aeroporto CUN · 16 gen",
                        "cost": "Da prenotare"
                    }
                ]
            },
            "reservations": [
                {
                    "name": "Coral Princess Hotel & Dive Resort · 10–12 gen · King Deluxe Fronte Oceano",
                    "status": "CONFERMATO · NON PAGATO · €300",
                    "type": "success"
                },
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
                    "name": "Hotel Akumal · 12–16 gen, 4 notti",
                    "status": "DA PRENOTARE",
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
                },
                {
                    "name": "15 gennaio · Akumal",
                    "status": "Giornata libera / riposo",
                    "type": "info"
                }
            ],
            "days": [
                {
                    "id": "5-jan10",
                    "dayName": "Giorno 21 (10 Gen)",
                    "title": "Da Bacalar a Cozumel: hotel sul mare confermato",
                    "location": "Bacalar → Playa del Carmen → Cozumel",
                    "shortDesc": "Tren Maya/trasferimento e traghetto da verificare; check-in al Coral Princess prenotato.",
                    "fullDesc": "<p>Partenza da Bacalar con trasferimento verso <strong>Playa del Carmen</strong> (Tren Maya candidato, orari del 10 gennaio da verificare), taxi al porto e traghetto per <strong>Cozumel</strong>; taxi per l'hotel nella Zona Hotelera Norte. Le traversate dipendono dalle condizioni del mare.</p><p><strong>Coral Princess Hotel & Dive Resort CONFERMATO, NON PAGATO</strong>, 10–12 gennaio 2027, due notti per due adulti in <strong>Camera King Deluxe Fronte Oceano</strong>, <strong>€300</strong>, cancellazione gratuita, senza colazione nella tariffa selezionata. Verificare le condizioni specifiche di cancellazione nella conferma.</p>"
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
                    "title": "Da Cozumel ad Akumal: quattro notti da cercare",
                    "location": "Cozumel → Playa del Carmen → Akumal",
                    "shortDesc": "Traghetto verso Playa del Carmen e transfer ad Akumal; hotel 12–16 ancora da scegliere.",
                    "fullDesc": "<p>Check-out dal Coral Princess e traghetto Cozumel → <strong>Playa del Carmen</strong>. Transfer via strada fino alla località di <strong>Akumal / Aventuras Akumal</strong> e check-in per <strong>quattro notti dal 12 al 16 gennaio</strong>, ancora da prenotare. Attenzione all'eventuale vento che potrebbe modificare la navigazione.</p><p><strong>Candidato non confermato:</strong> Aquatech Villas DeRosa Resort. Verificare se l'unità proposta è davvero fronte mare, se il ristorante è operativo, il costo dei taxi e il trasferimento per l'aeroporto.</p>"
                },
                {
                    "id": "5-jan13",
                    "dayName": "Giorno 24 (13 Gen)",
                    "title": "Chichén Itzá: tour collettivo da Akumal",
                    "location": "Akumal → Chichén Itzá → Akumal",
                    "shortDesc": "Tour guidato di un giorno, senza guidare. Due operatori da contattare; pickup da confermare.",
                    "fullDesc": "<p><strong>13 gennaio · Chichén Itzá</strong>: escursione collettiva A/R da Akumal, con trasporto e guida; hotel ad Akumal ancora da scegliere. <strong>NON PRENOTATO</strong>. Chiedere ai due operatori indicati nel riquadro «Tour da contattare» in Caribe un preventivo scritto per <strong>due adulti</strong> che comprenda <strong>pickup presso l'hotel</strong>, ingresso INAH e imposte per stranieri, guida, programma e prezzo finale. Le offerte pubblicizzate partono da circa <strong>1.300 MXN / 75 USD a persona</strong>, ma non sono preventivi per il 13/01/2027.</p><p>Controllare durata effettiva della visita a Chichén Itzá, eventuali soste commerciali e costi esclusi (bevande o giubbotto al cenote). Niente guida privata né auto a noleggio. Dopo la giornata, ritorno alla stessa base ad Akumal. Il <strong>15 gennaio</strong> resta libero.</p>",
                    "links": [
                        {
                            "text": "🏛️ Chichen Itza Tours · Riviera Maya",
                            "url": "https://chichen-itzatours.com/chichen-itza-tour-from-riviera-maya.html"
                        },
                        {
                            "text": "🏛️ Vive Cancún · Chichén económico",
                            "url": "https://vivecancun.com/excursion-chichen-itza-economico-riviera-maya.php?s-categoria=reservar"
                        },
                        {
                            "text": "💬 WhatsApp preventivo Vive Cancún",
                            "url": "https://wa.me/529983531352"
                        }
                    ]
                },
                {
                    "id": "5-jan14",
                    "dayName": "Giorno 25 (14 Gen)",
                    "title": "Muyil e flottazione nei canali di Sian Ka’an",
                    "location": "Akumal → Muyil / Sian Ka’an → Akumal",
                    "shortDesc": "Barca e flottazione: contattare la cooperativa maya e confrontare una soluzione più economica.",
                    "fullDesc": "<p><strong>14 gennaio · Muyil e canali di Sian Ka’an</strong> da Akumal: barca sulle lagune e <strong>flottazione nel canale maya</strong> con guida autorizzata. Tour <strong>NON PRENOTATO</strong>. Contattare la <strong>Community Tours Sian Ka’an</strong>, cooperativa locale: il tour Ancient Canal Midday dichiara transfer incluso da Akumal, tariffa 2026 pubblicata <strong>3.380 MXN/persona</strong> più tassa di conservazione (~225 MXN/persona) ed eventuali commissioni. Chiedere costo finale e se comprende il <strong>sito archeologico di Muyil</strong>.</p><p><strong>Alternativa economica da verificare:</strong> Paseo Tours pubblicizza 100 €/persona per i canali, ma non indica pickup da Akumal: chiedere supplemento e disponibilità prima di scegliere. Sul sito principale del viaggio sono salvati entrambi i contatti e le domande da inviare.</p>",
                    "links": [
                        {
                            "text": "🌿 Community Tours Sian Ka’an · Ancient Canal",
                            "url": "https://siankaantours.com.mx/experiences/ancient-canal-tour-sian-kaan/"
                        },
                        {
                            "text": "💬 WhatsApp cooperativa Muyil",
                            "url": "https://wa.me/529841140750"
                        },
                        {
                            "text": "🌿 Paseo Tours · Muyil Canals",
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
                    "fullDesc": "<p><strong>15 gennaio:</strong> giornata da difendere come <strong>relax totale</strong> ad Akumal, senza spostamenti programmati. Dopo Chichén Itzá e Muyil, niente Isla Contoy né nuove escursioni. Spiaggia, snorkeling semplice vicino all'hotel se lo desiderate, e nessuna sveglia.</p>"
                },
                {
                    "id": "5-jan16",
                    "dayName": "Giorno 27 (16 Gen)",
                    "title": "Ultime ore ad Akumal e volo da Cancún",
                    "location": "Akumal → Cancún Aeroporto",
                    "shortDesc": "Transfer via strada all'aeroporto CUN, volo AF651 delle 21:00.",
                    "fullDesc": "<p>Check-out dal futuro hotel ad Akumal, qualche ora di mare se gli orari lo consentono e <strong>transfer su strada direttamente all'aeroporto di Cancún, Terminal 4</strong>. Nessun traghetto il giorno del volo: prevedere comunque ampio margine per traffico e formalità. Volo Air France <strong>AF651 delle 21:00 del 16 gennaio</strong>.</p>"
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
            "researchNotes": [
                {
                    "title": "Coral Princess · CONFERMATO, NON PAGATO, €300",
                    "body": "Booking conferma 10–12 gennaio 2027 in Camera King Deluxe Fronte Oceano, cancellazione gratuita, importo totale €300; non è un pagamento. Il vecchio dubbio sul prezzo è superato dall'elenco delle prenotazioni. Da prenotare ancora il Night Snorkel Cozumel."
                },
                {
                    "title": "Attività principale a Cozumel",
                    "body": "Night Snorkel Cozumel da prenotare, preferibilmente la sera dell'11 gennaio; partenza locale e condizioni marine da confermare. Coral Princess è sul lato nord, Money Bar è a sud: taxi serale da organizzare."
                },
                {
                    "title": "Akumal · prossima prenotazione",
                    "body": "Ricerca 12–16 gennaio 2027 (4 notti, 2 adulti). Aquatech Villas DeRosa è un candidato, non una prenotazione: controllare camera fronte mare, accesso acqua, colazione/ristorante, taxi per le escursioni e transfer CUN."
                },
                {
                    "title": "Spostamenti reali",
                    "body": "10 gen Bacalar → Playa del Carmen (treno da verificare) + porto + traghetto → Cozumel. 12 gen Cozumel → Playa del Carmen in traghetto + transfer Akumal. 16 gen Akumal → Cancún Aeroporto via strada, senza traghetto."
                },
                {
                    "title": "Alternative precedentemente considerate",
                    "body": "Il precedente piano Tulum 10–13 + zona Cancún 13–16 non è più quello attuale; Villas DeRosa non prenotato; La Villa Mexicana a Xpu-Há scartata per costo e lontananza dalla spiaggia."
                },
                {
                    "title": "13 gennaio · Chichén Itzá da Akumal (non prenotato)",
                    "body": "Chichen Itza Tours Classic Riviera Maya pubblicizza da 75 USD/persona; Vive Cancún Económico da 1.300 MXN/persona. Entrambi da contattare: non è ancora confermato il prelievo al futuro hotel Akumal né il prezzo definitivo 2027. Chiedere ingresso INAH, tasse per stranieri, eventuali soste commerciali."
                },
                {
                    "title": "14 gennaio · Muyil Sian Ka’an (non prenotato)",
                    "body": "Community Tours Sian Ka’an Ancient Canal Midday: pickup area Akumal incluso, costo indicato 3.380 MXN/persona + ~225 MXN/persona tassa federale e commissioni; alternativa Paseo Tours da €100/persona con pickup Akumal NON pubblicizzato, quindi supplemento da chiedere. In entrambi: assicurarsi che flottazione, barca e rovine Muyil siano incluse come desiderato."
                },
                {
                    "title": "15 gennaio · giornata libera protetta",
                    "body": "Isla Contoy eliminata dal programma: giornata di riposo e spiaggia ad Akumal senza escursioni o sveglie. Possibili cambi solo su richiesta."
                }
            ],
            "hotelSearches": [
                {
                    "label": "Akumal · 12–16 gennaio (4 notti)",
                    "ss": "Akumal, Quintana Roo, Messico",
                    "checkin": "2027-01-12",
                    "checkout": "2027-01-16",
                    "note": "Cercare piccoli hotel fronte spiaggia, vera vista mare e transfer per CUN."
                },
                {
                    "label": "Aquatech Villas DeRosa · 4 notti",
                    "ss": "Aquatech Villas DeRosa Resort, Aventuras Akumal",
                    "checkin": "2027-01-12",
                    "checkout": "2027-01-16",
                    "note": "Controllare categoria della camera, cucina, ristorante e costi taxi."
                },
                {
                    "label": "Aventuras Akumal · piccoli alloggi sul mare",
                    "ss": "Aventuras Akumal, Quintana Roo, Messico",
                    "checkin": "2027-01-12",
                    "checkout": "2027-01-16",
                    "note": "Confrontare accesso diretto spiaggia, servizi, cancellazione gratuita."
                }
            ],
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
                            "pickup": "Pickup negli hotel della Riviera Maya soggetto a restrizioni: per piccole strutture/appartamenti potrebbe essere un punto di incontro esterno. Chiedere specificamente per il futuro hotel ad Akumal.",
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
                            "pickup": "Annuncia partenza dai punti/hotel della Riviera Maya, ma serve conferma ESPLICITA per l'alloggio ad Akumal e dell'eventuale supplemento.",
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
                    "questions": "Per 2 adulti il 13/01/2027: pickup e ritorno esattamente al nostro alloggio ad Akumal (nome da comunicare), prezzo finale con biglietti e tutte le imposte per stranieri, orari reali, durata della visita guidata, sosta cenote/Valladolid e eventuali soste commerciali."
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
                            "pickup": "Il tour Midday delle 10:00 include il transfer A/R da Akumal e Aventuras Akumal; per l'Early 06:00 è previsto un supplemento di 320 MXN/persona. Concordare il punto esatto dell'hotel.",
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
                    "questions": "Per 2 adulti il 14/01/2027: pickup e rientro ad Akumal o Aventuras Akumal (hotel da comunicare), prezzo totale per due CON trasporto, ingressi INAH/CONANP, barca, giubbotti e flottazione; confermare se sono comprese le rovine di Muyil, durata e politiche per maltempo."
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
            "name": "Akumal · alloggio ancora da scegliere (pin indicativo)",
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