// Dati del Viaggio - js/data.js

const tripData = {
    "general": {
        "dates": "20 Dicembre 2026 – 17 Gennaio 2027 • 29 Giorni",
        "title": "Messico",
        "footerName": "Spedizione Sud Messico (29 Giorni)",
        "footerSeason": "Dicembre - Gennaio"
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
                "zone": "La Condesa o Roma Norte",
                "hotelIdea": "Boutique Hotel o Airbnb vicino Parque México",
                "why": "Evita il centro storico. Qui è verde, sicuro, perfetto per cenare a piedi la sera e smaltire il jet-lag in tranquillità.",
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
                "total": "€ 450",
                "spent": "€ 310",
                "items": [
                    {
                        "name": "Hotel Condesa (4 notti)",
                        "cost": "€ 280"
                    },
                    {
                        "name": "Volo interno per Oaxaca",
                        "cost": "€ 60"
                    },
                    {
                        "name": "Ingresso Teotihuacán",
                        "cost": "€ 10"
                    }
                ]
            },
            "reservations": [
                {
                    "name": "Boutique Hotel Condesa",
                    "status": "Confermato",
                    "type": "success"
                },
                {
                    "name": "Restaurante La Gruta",
                    "status": "Confermato",
                    "type": "success"
                },
                {
                    "name": "Volo AeroMexico MX-OAX",
                    "status": "Da Prenotare",
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
            "navTitle": "Oaxaca",
            "navSubtitle": "La città e le valli",
            "badge": "24–26 Dic • Tradizioni, valli e Monte Albán",
            "locationText": "Oaxaca & Dintorni",
            "title": "Il Cuore Zapoteco e Gastronomico",
            "description": "Esplora la capitale culinaria del Messico, i mercati incredibili, il barocco del centro storico e l'antica capitale zapoteca di Monte Albán.",
            "images": [
                "assets/img/Oaxaca_Ciudad.png"
            ],
            "links": [
                {
                    "text": "🔗 Oaxaca Street Food Tour",
                    "url": "https://oaxacastreetfoodtour.com"
                },
                {
                    "text": "🔗 Terminal ADO Oaxaca",
                    "url": "https://www.ado.com.mx"
                }
            ],
            "basecamp": {
                "zone": "Centro Storico (Zona Santo Domingo / Zócalo)",
                "hotelIdea": "Boutique Hotel in stile coloniale con patio interno (early check-in se possibile)",
                "why": "Il centro si gira perfettamente a piedi. Alloggiare qui permette di vivere la magia serale, uscire a cena e raggiungere i mercati in pochi minuti.",
                "tags": [
                    "🌮 Capitale Food",
                    "🏛️ Barocco",
                    "🚶‍♂️ Walkable"
                ],
                "transports": [
                    {
                        "icon": "👟",
                        "title": "A Piedi",
                        "desc": "La scelta migliore per perdersi tra le vie colorate del centro e i mercati."
                    },
                    {
                        "icon": "🚕",
                        "title": "Taxi / Colectivo",
                        "desc": "Economici per raggiungere i siti archeologici (Monte Albán) e le valli."
                    }
                ]
            },
            "food": "La Mecca del cibo messicano: Tlayudas croccanti, i 7 tipi di Mole (specialmente il nero), Memelas e l'immancabile Mezcal.",
            "budget": {
                "total": "€ 220",
                "spent": "€ 0",
                "items": [
                    {
                        "name": "Bus ADO CDMX - Oaxaca",
                        "cost": "€ 45"
                    },
                    {
                        "name": "Oaxaca Street Food Tour",
                        "cost": "Da definire"
                    },
                    {
                        "name": "Hotel Oaxaca (2-3 notti)",
                        "cost": "Da definire"
                    }
                ]
            },
            "reservations": [
                {
                    "name": "Bus ADO Taxqueña - Oaxaca (Notturno)",
                    "status": "Da Prenotare",
                    "type": "warning"
                },
                {
                    "name": "Oaxaca Street Food Tour",
                    "status": "Da Prenotare",
                    "type": "warning"
                }
            ],
            "days": [
                {
                    "id": "2-1",
                    "dayName": "Giorno 4 (24 Dic)",
                    "title": "La Vigilia: Street Food, Barocco e Calendas",
                    "location": "Oaxaca Centro",
                    "shortDesc": "Street Food Tour nei mercati, Jardín Etnobotánico e festeggiamenti natalizi serali allo Zócalo.",
                    "fullDesc": "<p>Arrivo mattutino dal viaggio notturno. Iniziamo subito a tuffarci nella gastronomia locale con l'imperdibile <strong>Street Food Tour</strong> tra i banchi del <em>Mercado 20 de Noviembre</em>, assaggiando Tlayudas, memelas e i ricchi mole. A stomaco pieno, ammiriamo il barocco del <strong>Templo de Santo Domingo</strong> e, orari permettendo, ci immergiamo nel vicino <em>Jardín Etnobotánico</em> (ingresso solo guidato).</p><p>Nel pomeriggio riposo in hotel per recuperare le energie. La sera scendiamo in strada verso lo <strong>Zócalo</strong> per goderci la magia della Vigilia (<em>Nochebuena</em>): assisteremo alle colorate sfilate delle <em>Calendas</em> e mangeremo i tradizionali <em>buñuelos</em> dolci serviti su piatti di ceramica che, per buon auspicio, vanno lanciati e rotti per terra!</p>",
                    "images": [
                        "https://images.unsplash.com/photo-1608670154625-f761bb22f87a?auto=format&fit=crop&w=400&q=80"
                    ],
                    "links": [
                        {
                            "text": "🔗 Oaxaca Street Food Tour",
                            "url": "https://oaxacastreetfoodtour.com"
                        },
                        {
                            "text": "🔗 Orari Jardín Etnobotánico",
                            "url": "https://jardinoaxaca.mx/"
                        },
                        {
                            "text": "🔗 Orari Jardín Etnobotánico",
                            "url": "https://montealbanoaxaca.com/es/abrira-monte-alban-en-navidad/"
                        }
                    ],
                    "route": [
                        {
                            "name": "Terminal ADO Oaxaca",
                            "coords": [
                                17.0694,
                                -96.7188
                            ],
                            "image": "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=400&q=80"
                        },
                        {
                            "name": "Mercato 20 de Noviembre",
                            "coords": [
                                17.0583,
                                -96.7251
                            ],
                            "image": "https://images.unsplash.com/photo-1563889753232-a5d6255146c2?auto=format&fit=crop&w=400&q=80"
                        },
                        {
                            "name": "Zócalo di Oaxaca",
                            "coords": [
                                17.0605,
                                -96.7253
                            ],
                            "image": "https://images.unsplash.com/photo-1619441207753-481bf16279eb?auto=format&fit=crop&w=400&q=80"
                        }
                    ]
                },
                {
                    "id": "2-2",
                    "dayName": "Giorno 5 (25 Dic)",
                    "title": "Natale Zapoteco a Monte Albán e Street Art",
                    "location": "Monte Albán e Jalatlaco",
                    "shortDesc": "Mattinata tra le rovine precolombiane aperte 365 giorni l'anno e pomeriggio rilassato a Jalatlaco.",
                    "fullDesc": "<p>Dato che in città molte attività potrebbero essere chiuse o fare orario ridotto, è il momento perfetto per esplorare <strong>Monte Albán</strong> (i siti archeologici non chiudono mai). Arriveremo presto per evitare il sole e ammireremo l'incredibile spianata artificiale costruita sulla collina, cuore dell'antico impero Zapoteco, a soli 20-30 minuti di taxi o navetta dal centro.</p><p>Nel pomeriggio rientriamo in città per passeggiare nel pittoresco <strong>Barrio de Jalatlaco</strong>. È il quartiere più bohémien e antico della città, famoso per le strade acciottolate e i meravigliosi murales. Perfetto per bere un caffè messicano in totale relax celebrando il giorno di Natale.</p>",
                    "images": [
                        "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=400&q=80"
                    ],
                    "links": [
                        {
                            "text": "🔗 Info Monte Albán INAH",
                            "url": "https://www.inah.gob.mx/zonas/103-zona-arqueologica-de-monte-alban"
                        }
                    ],
                    "route": [
                        {
                            "name": "Sito Archeologico Monte Albán",
                            "coords": [
                                17.0439,
                                -96.7676
                            ],
                            "image": "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=400&q=80"
                        },
                        {
                            "name": "Barrio de Jalatlaco",
                            "coords": [
                                17.0667,
                                -96.7138
                            ],
                            "image": "https://images.unsplash.com/photo-1634568800171-cb4be1b898be?auto=format&fit=crop&w=400&q=80"
                        }
                    ]
                },
                {
                    "id": "2-3",
                    "dayName": "Giorno 6 (26 Dic)",
                    "title": "Cascate, Mezcal e Pedalate Notturne",
                    "location": "Valle dell'Est & Oaxaca Centro",
                    "shortDesc": "Tour fuori porta tra bellezze naturali e rovine, seguito da un festoso tour serale in bicicletta per le strade di Oaxaca.",
                    "fullDesc": "<p>Oggi noleggiamo un'auto o partecipiamo a un tour condiviso verso est. Prima tappa: l'incredibile <strong>Árbol del Tule</strong>, un enorme e millenario cipresso di Montezuma dal tronco più largo del mondo. Proseguiamo verso <strong>Mitla</strong>, il secondo sito archeologico più importante, unico per i complessi e affascinanti mosaici geometrici che adornano i suoi palazzi.</p><p>Il pezzo forte naturalistico è <strong>Hierve el Agua</strong>: spettacolari cascate pietrificate affacciate su una gola vertiginosa. Chi vorrà potrà tuffarsi nelle piscine naturali sulfuree in cima. Sulla via del ritorno a Oaxaca, chiudiamo la giornata in un <em>palenque</em> per scoprire come l'agave si trasforma nel pungente <strong>Mezcal artigianale</strong>.</p><p><strong>Serata:</strong> Rientro previsto verso le 17:00 / 18:00. Avremo il tempo per una doccia rigenerante e una cena leggera a base di tacos veloci (verso le 19:00). Alle 20:45 ci faremo trovare sulla spianata del <strong>Templo de Santo Domingo</strong> per noleggiare le biciclette con <em>Mundo Ceiba</em>. Essendo sabato, ci godremo l'ultima notte oaxaqueña pedalando a suon di musica tra le vie illuminate a festa!</p>",
                    "images": [
                        "https://images.unsplash.com/photo-1577903792019-90b501d7fa74?auto=format&fit=crop&w=400&q=80"
                    ],
                    "links": [
                        {
                            "text": "🔗 Ecobnb Hierve el Agua",
                            "url": "https://ecobnb.it/blog/2021/11/hierve-el-agua-cascate-pietrificate-messico/"
                        },
                        {
                            "text": "🔗 Hierve el Agua",
                            "url": "https://www.hierveelagua.org/"
                        },
                        {
                            "text": "🔗 Mundo Ceiba (Tour in Bici)",
                            "url": "https://www.facebook.com/mundoceibaoaxaca/"
                        }
                    ],
                    "route": [
                        {
                            "name": "Árbol del Tule",
                            "coords": [
                                17.0468,
                                -96.6364
                            ],
                            "image": "https://images.unsplash.com/photo-1628105754593-90b63b9fcebf?auto=format&fit=crop&w=400&q=80"
                        },
                        {
                            "name": "Sito Archeologico di Mitla",
                            "coords": [
                                16.9234,
                                -96.3598
                            ],
                            "image": "https://images.unsplash.com/photo-1578330744654-205128ff3a49?auto=format&fit=crop&w=400&q=80"
                        },
                        {
                            "name": "Hierve el Agua",
                            "coords": [
                                16.8647,
                                -96.2764
                            ],
                            "image": "https://images.unsplash.com/photo-1577903792019-90b501d7fa74?auto=format&fit=crop&w=400&q=80"
                        },
                        {
                            "name": "Ritrovo Bici Mundo Ceiba",
                            "coords": [
                                17.0664,
                                -96.7214
                            ],
                            "image": "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=400&q=80"
                        }
                    ]
                }
            ],
            "mapFocus": {
                "coords": [
                    17.06,
                    -96.72
                ],
                "zoom": 14
            }
        },
        {
            "id": 6,
            "navTitle": "Sierra e Pacifico",
            "navSubtitle": "Trekking, poi mare",
            "badge": "27 Dic – 2 Gen · Caminos Reales e San Agustinillo",
            "locationText": "Sierra Norte · Pueblos Mancomunados · Costa di Oaxaca",
            "title": "40 chilometri fra i villaggi zapotechi, poi l'oceano",
            "description": "Dal 27 al 29 dicembre il trekking comunitario Caminos Reales (3 giorni e 2 notti) tra San Miguel Amatlán, Latuvi e Benito Juárez. Rientro a Oaxaca il 29 e quattro notti a San Agustinillo dal 30 dicembre al 3 gennaio.",
            "images": [
                "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"
            ],
            "links": [
                {
                    "text": "🥾 Pacchetto Caminos Reales · Sierra Norte",
                    "url": "https://www.sierranorte.org.mx/#/paquete/25"
                },
                {
                    "text": "🌲 Operatore Expediciones Sierra Norte",
                    "url": "https://www.sierranorte.org.mx/"
                },
                {
                    "text": "🏖️ San Agustinillo · informazioni locali",
                    "url": "https://mazunte.gob.mx/locations/san-agustinillo/"
                },
                {
                    "text": "🚌 ADO · spostamento verso la costa",
                    "url": "https://www.ado.com.mx/"
                }
            ],
            "transferPlan": {
                "eyebrow": "27–29 dicembre 2026 · Pacchetto scelto, NON ancora prenotato",
                "title": "Caminos Reales · 3 giorni / 2 notti",
                "subtitle": "San Miguel Amatlán → Santa Marta Latuvi → Benito Juárez · 40 km di trekking",
                "cost": "Da 6.459 MXN a persona · da 12.918 MXN in due",
                "duration": "3 giorni · circa 40 km complessivi · difficoltà alta",
                "legs": [
                    {
                        "day": "Dom 27 dic",
                        "time": "~12 km · ~4 ore",
                        "from": "Oaxaca → San Miguel Amatlán",
                        "to": "Las Minas → Amatlán",
                        "operator": "Trasferimento con organizzatore + guida locale",
                        "duration": "~2 ore in auto da Oaxaca, poi trekking",
                        "price": "Nel pacchetto, da riconfermare",
                        "note": "Percorso tra sentieri, resti delle miniere e antiche haciendas; pranzo con trota, sala dei codici e della storia locale, cena e prima notte in cabaña a San Miguel Amatlán."
                    },
                    {
                        "day": "Lun 28 dic",
                        "time": "~16 km · 5–6 ore",
                        "from": "San Miguel Amatlán",
                        "to": "Santa Marta Latuvi",
                        "operator": "Trekking sul Camino Real zapoteco",
                        "duration": "Sentiero storico tra boschi e villaggi",
                        "price": "Nel pacchetto, da riconfermare",
                        "note": "Giornata più lunga del trekking lungo gli antichi collegamenti fra i Pueblos Mancomunados. Pernottamento in cabaña a Latuvi."
                    },
                    {
                        "day": "Mar 29 dic",
                        "time": "~12 km · ~4,5 ore",
                        "from": "Santa Marta Latuvi",
                        "to": "Benito Juárez → Oaxaca",
                        "operator": "Trekking con guida + rientro organizzato",
                        "duration": "Salita verso circa 2.900 m",
                        "price": "Nel pacchetto, da riconfermare",
                        "note": "Ultima tappa verso Benito Juárez, belvedere e ponte sospeso. Ritorno a Oaxaca con il gruppo/organizzatore; notte del 29 dicembre in città, fuori dalle 2 notti in cabaña."
                    }
                ],
                "warning": "Confermare disponibilità del 27–29 dicembre, prezzo definitivo (6.459 MXN è una quota 'da' per persona), punto/orario di partenza e rientro a Oaxaca, inclusioni effettive di trasporto, pasti, cabanas e assicurazione, dimensione del gruppo e lingua della guida. Circa 40 km in 3 giorni, sentieri montani in quota: verificare difficoltà, equipaggiamento, condizioni fisiche e temperature di dicembre. Il pacchetto è stato scelto come proposta, non risulta acquistato.",
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
            },
            "basecamp": {
                "zone": "27–28 dic: cabañas Sierra Norte · 29 dic: Oaxaca · 30 dic–2 gen: San Agustinillo",
                "hotelIdea": "2 notti in cabañas comunitarie incluse nel programma; hotel a Oaxaca il 29; pousada a San Agustinillo per 4 notti",
                "why": "Il 29 si torna a Oaxaca dopo il trekking, senza forzare un trasferimento serale fino al Pacifico. Il 30 si scende al mare per quattro notti di recupero e natura.",
                "tags": [
                    "🥾 40 km / 3 giorni",
                    "🌲 Comunità zapoteche",
                    "🌊 4 notti Pacifico"
                ],
                "transports": [
                    {
                        "icon": "🚐",
                        "title": "27–29 · trasporto Sierra Norte",
                        "desc": "Partenza e ritorno a Oaxaca previsti dall'operatore: da confermare in preventivo."
                    },
                    {
                        "icon": "🚌",
                        "title": "30 dic · Oaxaca → costa",
                        "desc": "Autobus verso Pochutla / costa; ultimo tratto in taxi o colectivo per San Agustinillo."
                    },
                    {
                        "icon": "🛺",
                        "title": "3 gen · San Agustinillo → Pochutla",
                        "desc": "Taxi o colectivo per AltaMar delle 16:15: dettagli nella scheda Chiapas."
                    }
                ]
            },
            "food": "Sapori comunitari in Sierra Norte, cucina di montagna e trota durante il trekking; dal 30 dicembre pesce fresco, caffè e tramonti sul Pacifico.",
            "budget": {
                "total": "Da 12.918 MXN in due · pacchetto, più soggiorni e trasferimenti",
                "spent": "0 € registrati · pacchetto non prenotato",
                "items": [
                    {
                        "name": "Caminos Reales 3D/2N · 2 persone",
                        "cost": "Da 12.918 MXN (6.459 cad.)"
                    },
                    {
                        "name": "Notte Oaxaca · 29 dic",
                        "cost": "Da prenotare"
                    },
                    {
                        "name": "Oaxaca → San Agustinillo · 30 dic",
                        "cost": "Da quotare"
                    },
                    {
                        "name": "Pousada San Agustinillo · 30 dic–3 gen, 4 notti",
                        "cost": "Date da aggiornare"
                    },
                    {
                        "name": "Escursioni costiere / pasti extra",
                        "cost": "Facoltativi"
                    }
                ]
            },
            "reservations": [
                {
                    "name": "Caminos Reales, 27–29 dic (Sierra Norte)",
                    "status": "Scelto · da prenotare",
                    "type": "warning"
                },
                {
                    "name": "Notte a Oaxaca · 29 dic",
                    "status": "Da prenotare",
                    "type": "warning"
                },
                {
                    "name": "Trasferimento Oaxaca → costa · 30 dic",
                    "status": "Da organizzare",
                    "type": "warning"
                },
                {
                    "name": "Pousada San Agustinillo · 30 dic–3 gen",
                    "status": "Prenotazione da modificare",
                    "type": "warning"
                }
            ],
            "days": [
                {
                    "id": "6-dec27",
                    "dayName": "Giorno 7 (27 Dic)",
                    "title": "Caminos Reales I: miniere storiche e Amatlán",
                    "location": "Oaxaca → San Miguel Amatlán · Las Minas",
                    "shortDesc": "Partenza da Oaxaca con l'organizzatore, circa 12 km di trekking fra le miniere e le antiche haciendas; notte in cabaña.",
                    "fullDesc": "<p><strong>Inizia Caminos Reales</strong>, il pacchetto <strong>3 giorni / 2 notti</strong> di Expediciones Sierra Norte nei Pueblos Mancomunados. Ritrovo a Oaxaca (luogo e ora da confermare) e trasferimento organizzato verso <strong>San Miguel Amatlán</strong>, indicativamente <strong>2 ore</strong>.</p><p><strong>Trekking del giorno: circa 12 km / 4 ore</strong>, fra antichi sentieri, miniere e resti delle haciendas. La proposta include la zona de <em>Las Minas</em>, pranzo con trota e visita alla sala dedicata ai codici e alla storia locale. Attività e sequenza vanno riconfermate con la guida.</p><p>Prima notte in <strong>cabaña a San Miguel Amatlán</strong>. Si dorme in montagna: portare indumenti caldi a strati, scarpe da trekking già collaudate, acqua e una piccola borsa per i tre giorni.</p><p><strong>Pacchetto selezionato, non ancora prenotato.</strong> Prezzo pubblicato <strong>da 6.459 MXN per persona</strong> (da 12.918 MXN in due); chiedere conferma per le date 27–29 dicembre e delle inclusioni.</p>",
                    "images": [
                        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85"
                    ],
                    "links": [
                        {
                            "text": "🥾 Programma ufficiale · Caminos Reales",
                            "url": "https://www.sierranorte.org.mx/#/paquete/25"
                        },
                        {
                            "text": "🌲 Turismo Sierra Norte",
                            "url": "https://www.sierranorte.org.mx/"
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
                    "id": "6-dec28",
                    "dayName": "Giorno 8 (28 Dic)",
                    "title": "Caminos Reales II: sul Camino Real da Amatlán a Latuvi",
                    "location": "San Miguel Amatlán → Santa Marta Latuvi",
                    "shortDesc": "Tappa più lunga: circa 16 km / 5–6 ore lungo un antico Camino Real zapoteco; seconda notte in cabaña.",
                    "fullDesc": "<p>La giornata più lunga di <strong>Caminos Reales</strong>: lasciamo San Miguel Amatlán e percorriamo un antico <strong>Camino Real zapoteco</strong> in direzione di <strong>Santa Marta Latuvi</strong>, fra boschi, rilievi e percorsi utilizzati storicamente dalle comunità serrane.</p><p><strong>Circa 16 km / 5–6 ore di cammino</strong>, con guida del programma. Il dislivello e le condizioni del sentiero vanno confermati dall'organizzatore, considerando che siamo in zona montana.</p><p>Arrivo a <strong>Latuvi</strong>, riposo, cena comunitaria secondo il programma e <strong>seconda notte in cabaña</strong>. Questa è una tappa di trekking a tutti gli effetti: nessun trasferimento aggiuntivo al mare o a Oaxaca.</p>",
                    "images": [
                        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85"
                    ],
                    "links": [
                        {
                            "text": "🥾 Pacchetto Caminos Reales",
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
                    "id": "6-dec29",
                    "dayName": "Giorno 9 (29 Dic)",
                    "title": "Caminos Reales III: Benito Juárez e rientro a Oaxaca",
                    "location": "Santa Marta Latuvi → Benito Juárez → Oaxaca",
                    "shortDesc": "Ultimi 12 km verso Benito Juárez (circa 4,5 ore), belvedere e ponte sospeso; rientro con l'organizzatore e notte a Oaxaca.",
                    "fullDesc": "<p>Terzo e ultimo giorno del trekking: <strong>Santa Marta Latuvi → Benito Juárez</strong>, lungo una tappa di circa <strong>12 km / 4 ore e mezza</strong>. Il percorso sale fino alla zona dei <strong>2.900 metri</strong> e termina con i panorami montani, il belvedere e il caratteristico <strong>ponte sospeso</strong>, secondo l'itinerario indicato dall'organizzatore.</p><p>Il trasporto previsto dal pacchetto ci riporta a <strong>Oaxaca de Juárez</strong>; confermare l'orario preciso di rientro al momento della prenotazione.</p><p><strong>Pernottamento a Oaxaca il 29 dicembre</strong> (hotel separato, da prenotare). Dopo circa <strong>40 km di trekking in tre giorni</strong>, evitiamo di aggiungere una lunga corsa fino alla costa la sera stessa: il trasferimento a San Agustinillo è previsto per il 30 dicembre.</p>",
                    "images": [
                        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85"
                    ],
                    "links": [
                        {
                            "text": "🥾 Pacchetto Sierra Norte",
                            "url": "https://www.sierranorte.org.mx/#/paquete/25"
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
                    "id": "6-dec30",
                    "dayName": "Giorno 10 (30 Dic)",
                    "title": "Dalle montagne al Pacifico: San Agustinillo",
                    "location": "Oaxaca → zona Pochutla → San Agustinillo",
                    "shortDesc": "Trasferimento verso il Pacifico, check-in in pousada e prima serata davanti all'oceano.",
                    "fullDesc": "<p>La mattina lasciamo Oaxaca e scendiamo verso la costa del Pacifico per raggiungere <strong>San Agustinillo</strong>, tranquillo paese tra Mazunte e Zipolite. Pianificare una corsa interurbana verso la zona di <strong>San Pedro Pochutla</strong> e l'ultimo tratto in taxi o colectivo, oppure un trasferimento diretto: <strong>orari, percorso e tempi precisi sono ancora da verificare</strong> per il 30 dicembre.</p><p>Arrivo, check-in nella <strong>pousada a San Agustinillo</strong> e pomeriggio senza impegni, ideale per recuperare dal trekking. Prima delle <strong>quattro notti sulla costa</strong>: 30 e 31 dicembre, 1 e 2 gennaio, con partenza il 3.</p><p><strong>Prenotazione alloggio già esistente ma modificabile:</strong> ricordarsi di adeguare le date al nuovo programma <strong>30 dicembre 2026 – 3 gennaio 2027</strong>. Non considerare la modifica già effettuata.</p>",
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
                    "shortDesc": "Mare, relax e piccole escursioni facoltative: Mazunte, Punta Cometa e La Ventanilla senza cambiare alloggio.",
                    "fullDesc": "<p><strong>31 dicembre, 1 e 2 gennaio</strong>: restiamo nella stessa pousada a <strong>San Agustinillo</strong>, senza spostamenti impegnativi. Dopo le tappe di Sierra Norte, la priorità è godersi la costa, i tramonti e il ritmo dei piccoli villaggi del Pacifico.</p><p>Escursioni <strong>solo facoltative</strong>: passeggiata a <strong>Mazunte</strong>, tramonto a <strong>Punta Cometa</strong> se le condizioni del sentiero lo permettono, oppure un'esperienza comunitaria fra mangrovie e fauna a <strong>La Ventanilla</strong>. Per Capodanno scegliamo una serata semplice in zona, senza trasferimenti lontani.</p><p><strong>2 gennaio:</strong> ultime ore di relax e verifica pratica del trasferimento del giorno seguente. Il <strong>3 gennaio</strong> è previsto taxi/colectivo per <strong>Pochutla</strong>, AltaMar delle <strong>16:15</strong> per Salina Cruz e ADO notturno delle <strong>23:00</strong> verso Villahermosa: gli orari e i terminal restano da riconfermare, come dettagliato nella scheda <strong>Chiapas</strong>.</p>",
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
                    17.24,
                    -96.49
                ],
                "zoom": 9
            }
        },
        {
            "id": 3,
            "navTitle": "Chiapas",
            "navSubtitle": "Palenque e foresta tropicale",
            "badge": "3–6 Gen · Dalla costa alla giungla",
            "locationText": "San Agustinillo → Palenque",
            "title": "Palenque: giungla, città maya e cascate",
            "description": "Arrivo dalla costa del Pacifico il 4 gennaio; il 5 esploriamo le rovine maya di Palenque, il 6 le Cascadas Roberto Barrios. Il 7 si prosegue verso Bacalar con il Tren Maya.",
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
                    "fullDesc": "<p><strong>08:55</strong> · Arrivo del bus ADO a <strong>Villahermosa</strong> presso <strong>Av. Francisco Javier Mina 297</strong>, angolo Lino Merino e Lamberto Castellanos Rivera.</p><p><strong>10:30–13:00</strong> · Collegamento diretto <strong>Villahermosa Tabasco Central → Central de Autobuses ADO Palenque</strong> mostrato da Rome2Rio, durata <strong>2 h 30 min</strong> e prezzo indicativo <strong>7 € a persona</strong>. La coincidenza teorica è di <strong>1 h 35 min</strong>, ma <strong>i terminal potrebbero essere differenti</strong>: verificare gli indirizzi e prevedere l'eventuale breve trasferimento.</p><p><strong>13:00</strong> · Arrivo previsto a <strong>Palenque</strong>. Sistemazione e pomeriggio tranquillo dopo il lungo viaggio. <strong>5 gennaio</strong>: rovine di Palenque; <strong>6 gennaio</strong>: Cascadas Roberto Barrios. Successivo collegamento verso il Tren Maya da confermare.</p><p><strong>Budget stimato per due:</strong> circa <strong>135–150 €</strong> per i tre autobus principali, esclusi San Agustinillo–Pochutla e eventuali taxi tra terminal. Prezzi non bloccati e orari da riconfermare.</p>",
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
                    "fullDesc": "<p>Dopo il lungo trasferimento dei giorni precedenti, dedichiamo la giornata alla <strong>zona archeologica di Palenque</strong>: un'antica città maya avvolta dalla vegetazione del Chiapas. Partiamo presto per evitare le ore più calde e prendiamo tempo per il <strong>Tempio delle Iscrizioni</strong>, il <strong>Palazzo</strong> e gli altri complessi aperti alla visita.</p><p><strong>Orario di riferimento INAH:</strong> 08:00–17:00, ultimo accesso alle 16:00; biglietti presso il Centro de Atención a Visitantes. Verificare tariffe INAH e gli eventuali ingressi aggiuntivi del parco prima della visita. Una guida locale è consigliata se vogliamo approfondire la storia della città.</p><p>Pomeriggio senza corse: possibile museo di sito, se aperto, oppure riposo a Palenque. <strong>Il 6 gennaio è riservato alle Cascadas Roberto Barrios.</strong></p>",
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
                    "fullDesc": "<p>Intera giornata alle <strong>Cascadas Roberto Barrios</strong>, un sistema di salti d'acqua e piscine naturali immerso nella vegetazione. È la giornata più acquatica del Chiapas: prendiamoci il tempo per esplorare i diversi livelli, fermarci nelle zone consentite e goderci il paesaggio.</p><p><strong>Trasporto:</strong> minivan/colectivo locale o escursione da Palenque, da organizzare sul posto; calcolare indicativamente circa un'ora per tratta, variabile in base al mezzo e alla strada. Chiedere sempre l'orario dell'ultima corsa di ritorno prima di partire.</p><p>Portare scarpe con buona aderenza, costume, acqua e una sacca impermeabile. Le rocce possono essere scivolose e la balneazione va valutata in base alle condizioni del giorno. Rientro a Palenque in serata e preparazione dei bagagli per il <strong>Tren Maya del 7 gennaio</strong>.</p>",
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
                "total": "135–150 € + trasferimenti locali · 2 persone",
                "spent": "0 € · non prenotato",
                "items": [
                    {
                        "name": "Pochutla → Salina Cruz (AltaMar)",
                        "cost": "26–40 € / 2"
                    },
                    {
                        "name": "Salina Cruz → Villahermosa (ADO)",
                        "cost": "1.928 MXN / 2"
                    },
                    {
                        "name": "Villahermosa → Palenque",
                        "cost": "~14 € / 2"
                    },
                    {
                        "name": "Taxi/colectivo iniziale + cambi terminal",
                        "cost": "Da quotare"
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
            }
        },
        {
            "id": 4,
            "navTitle": "Bacalar",
            "navSubtitle": "Tren Maya e laguna",
            "badge": "7–10 Gen • Dalla giungla alla Laguna dei Sette Colori",
            "locationText": "Palenque → Escárcega → Bacalar",
            "title": "Il Tren Maya e la laguna dai sette colori",
            "description": "Il 7 gennaio attraversiamo la penisola con il Tren Maya fino alla stazione Bacalar. L'8 e il 9 ci prendiamo due giorni per la laguna, prima di risalire verso Muyil il 10 gennaio.",
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
                "zone": "Bacalar · vicinanza alla laguna",
                "hotelIdea": "Pousada/cabaña con accesso alla laguna o pontile, check-in serale il 7 gennaio",
                "why": "Tre notti (7, 8 e 9 gennaio) per rallentare davvero: il 7 è viaggio, l'8 e il 9 sono giornate piene sulla laguna.",
                "tags": [
                    "💧 Laguna, non mare",
                    "🛶 Kayak",
                    "🌿 Ritmo lento"
                ],
                "transports": [
                    {
                        "icon": "🚕",
                        "title": "Transfer stazione → alloggio",
                        "desc": "Organizzare in anticipo per l'arrivo serale del Tren Maya."
                    },
                    {
                        "icon": "🛶",
                        "title": "Kayak / tour locale",
                        "desc": "Per visitare la laguna seguendo le regole ambientali."
                    }
                ]
            },
            "food": "Colazione con vista sulla laguna, cucina del Quintana Roo e due cene senza fretta nel centro di Bacalar.",
            "budget": {
                "total": "Da definire",
                "spent": "€ 0 · non prenotato",
                "items": [
                    {
                        "name": "Tren Maya Palenque → Bacalar (2 persone)",
                        "cost": "Da quotare"
                    },
                    {
                        "name": "Transfer stazione Bacalar → alloggio",
                        "cost": "Da quotare"
                    },
                    {
                        "name": "Alloggio Bacalar · 3 notti (7–9 gen)",
                        "cost": "Da quotare"
                    },
                    {
                        "name": "Kayak / giro in laguna",
                        "cost": "Facoltativo"
                    }
                ]
            },
            "reservations": [
                {
                    "name": "Tren Maya · 7 gen",
                    "status": "Da verificare",
                    "type": "warning"
                },
                {
                    "name": "Alloggio Bacalar · 7–10 gen",
                    "status": "Da prenotare",
                    "type": "warning"
                },
                {
                    "name": "Transfer stazione Bacalar · sera 7 gen",
                    "status": "Da organizzare",
                    "type": "warning"
                }
            ],
            "days": [
                {
                    "id": "4-jan07",
                    "dayName": "Giorno 18 (7 Gen)",
                    "title": "Tren Maya: dalle rovine alla Laguna di Bacalar",
                    "location": "Palenque · Escárcega · Bacalar",
                    "shortDesc": "Trasferimento ferroviario attraverso il sud della penisola, arrivo a Bacalar in serata.",
                    "fullDesc": "<p>Mattinata tranquilla a Palenque e trasferimento verso la <strong>stazione Tren Maya</strong>. La tabella oraria ufficiale attualmente consultabile indica un servizio <strong>Palenque 14:00 → Escárcega 16:49</strong> e prosecuzione <strong>Escárcega 17:09 → Chetumal 21:57</strong>. <strong>Bacalar si trova lungo la linea prima di Chetumal</strong>: vogliamo scendere alla <strong>stazione Bacalar</strong> e raggiungere direttamente la pousada, senza proseguire fino a Chetumal.</p><p><strong>Attenzione:</strong> questi sono orari di riferimento del 2026, non un servizio confermato per <strong>giovedì 7 gennaio 2027</strong>. Verificare disponibilità, arrivo alla stazione Bacalar, possibile coincidenza a Escárcega e gli orari locali, anche per la differenza di fuso orario tra gli stati attraversati.</p><p>L'arrivo è previsto in serata: prenotare <strong>taxi/transfer dalla stazione</strong> e avvisare l'alloggio per il check-in tardivo. Nessuna attività impegnativa prevista all'arrivo.</p>",
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
                    "fullDesc": "<p>Finalmente una giornata senza trasferimenti. Esploriamo la <strong>Laguna dei Sette Colori</strong> in <strong>kayak</strong>, preferibilmente al mattino se le condizioni del vento lo consentono, oppure partecipiamo a una breve escursione organizzata con un operatore rispettoso dell'ecosistema.</p><p>Pomeriggio sul pontile o in un <em>balneario</em> autorizzato, con tempo per il centro di Bacalar. L'obiettivo qui non è collezionare visite: è fermarsi, nuotare dove consentito e godersi i cambi di colore dell'acqua.</p><p><strong>Nota ambientale:</strong> evitare creme e prodotti in acqua dove vietati, rispettare le aree con stromatoliti e seguire le regole di balneazione locali.</p>",
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
                    "fullDesc": "<p>La seconda giornata a Bacalar resta volutamente <strong>leggera</strong>: colazione lenta, passeggiata sul lungolago, kayak o giro in barca solo se ne abbiamo voglia e se il tempo è buono.</p><p>Possiamo valutare un'uscita verso il <strong>Canal de los Piratas</strong> o altri punti visitabili della laguna con guide locali, senza trasformare la giornata in un programma serrato. Nessuna escursione obbligatoria.</p><p>La sera prepariamo il trasferimento del 10 gennaio verso <strong>Muyil</strong>, nella zona di Sian Ka'an.</p>",
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
                },
                {
                    "id": "4-jan10",
                    "dayName": "Giorno 21 (10 Gen)",
                    "title": "Verso Muyil: dalle acque dolci alla foresta maya",
                    "location": "Bacalar → Muyil / area Tulum",
                    "shortDesc": "Partenza verso nord, visita delle rovine di Muyil se l'orario lo consente e notte di passaggio nei dintorni.",
                    "fullDesc": "<p>Lasciamo Bacalar dopo tre notti e risaliamo verso <strong>Muyil</strong>, lungo la direttrice per Tulum, con autobus interurbano e ultimo tratto locale da verificare.</p><p>Se gli orari coincidono, visitiamo già la <strong>zona archeologica di Muyil</strong>, immersa nella vegetazione a ridosso della riserva di Sian Ka'an. Secondo INAH è aperta <strong>08:00–17:00</strong> (ultimo accesso 16:30), ma ricontrollare per gennaio.</p><p><strong>Notte di passaggio 10 gennaio</strong> nell'area Muyil/Tulum sud: posizione esatta da scegliere in base alla facilità di partecipare al tour dei canali l'11 mattina. Se il trasferimento è più lento, spostiamo la visita archeologica alla mattina successiva.</p>",
                    "images": [],
                    "links": [
                        {
                            "text": "🏛️ Orari e accesso Muyil (INAH)",
                            "url": "https://lugares.inah.gob.mx/es/node/4440"
                        },
                        {
                            "text": "🚌 Ricerca autobus ADO",
                            "url": "https://www.ado.com.mx/"
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
                            "name": "Muyil",
                            "coords": [
                                20.078,
                                -87.615
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
            }
        },
        {
            "id": 5,
            "navTitle": "Caribe",
            "navSubtitle": "Sian Ka'an e mare",
            "badge": "11–16 Gen • Si rallenta davvero",
            "locationText": "Muyil / Sian Ka'an → costa caraibica → Cancún",
            "title": "Canali di Sian Ka'an e ultimi giorni di mare",
            "description": "L'11 gennaio esperienza nei canali di Muyil e trasferimento verso una base sul mar dei Caraibi ancora da scegliere. Cinque notti dedicate soprattutto al riposo e partenza da Cancún il 16 gennaio alle 21:00.",
            "images": [
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"
            ],
            "links": [
                {
                    "text": "🔗 Zona archeologica Muyil (INAH)",
                    "url": "https://lugares.inah.gob.mx/es/node/4440"
                },
                {
                    "text": "🔗 Parco Nazionale Isla Contoy (CONANP)",
                    "url": "https://descubreanp.conanp.gob.mx/en/conanp/ANP?suri=72"
                },
                {
                    "text": "🔗 Volo di ritorno · dettagli nel sito",
                    "url": "#"
                }
            ],
            "basecamp": {
                "zone": "Costa caraibica · località finale da scegliere",
                "hotelIdea": "Pousada fronte mare o piccola struttura tranquilla · 5 notti, dall'11 al 16 gennaio",
                "why": "L'obiettivo è terminare il viaggio in mare e relax, non aggiungere lunghi spostamenti. Scegliere una base che consenta il trasferimento a Cancún il 16.",
                "tags": [
                    "🏖️ Mare (non laguna)",
                    "🐠 Snorkeling facoltativo",
                    "🌴 Relax"
                ],
                "transports": [
                    {
                        "icon": "🚕",
                        "title": "Ultimo transfer verso la costa",
                        "desc": "Dal tour Muyil alla base scelta: tempi da pianificare."
                    },
                    {
                        "icon": "✈️",
                        "title": "Rientro da Cancún",
                        "desc": "Volo sabato 16 gennaio, ore 21:00: organizzare la partenza in anticipo."
                    }
                ]
            },
            "food": "Ultimi giorni a ritmo lento: pesce fresco, frutta, piccoli locali sul mare e nessuna tabella di marcia.",
            "budget": {
                "total": "Da definire · dipende dalla località finale",
                "spent": "€ 0 · non prenotato",
                "items": [
                    {
                        "name": "Tour Muyil / flottazione a Sian Ka'an",
                        "cost": "Da quotare"
                    },
                    {
                        "name": "Alloggio al mare · 5 notti (11–15 gen)",
                        "cost": "Da quotare"
                    },
                    {
                        "name": "Trasferimento a aeroporto CUN · 16 gen",
                        "cost": "Da quotare"
                    },
                    {
                        "name": "Isla Contoy (solo se fattibile)",
                        "cost": "Opzionale"
                    }
                ]
            },
            "reservations": [
                {
                    "name": "Tour canali di Muyil / Sian Ka'an",
                    "status": "Da organizzare",
                    "type": "warning"
                },
                {
                    "name": "Base e alloggio mare · 11–16 gen",
                    "status": "Da scegliere",
                    "type": "warning"
                },
                {
                    "name": "Transfer verso aeroporto Cancún",
                    "status": "Da organizzare",
                    "type": "warning"
                }
            ],
            "days": [
                {
                    "id": "5-jan11",
                    "dayName": "Giorno 22 (11 Gen)",
                    "title": "Sian Ka'an: galleggiare nei canali maya, poi il mare",
                    "location": "Muyil · Sian Ka'an → Caribe",
                    "shortDesc": "Tour nella laguna di Muyil e floating nei canali (se condizioni e posti lo permettono), poi trasferimento verso la base sul mare.",
                    "fullDesc": "<p>Dedichiamo la mattina al sistema lagunare di <strong>Muyil / Sian Ka'an</strong>, con escursione guidata in barca e, se consentito, <strong>flottazione nei canali d'acqua dolce</strong> fra le mangrovie. Il tour va prenotato con operatori autorizzati, verificando durata, orario di partenza e condizioni meteo.</p><p>Se non siamo riusciti a visitare le <strong>rovine di Muyil</strong> il 10 gennaio, le inseriamo prima o dopo l'escursione, soltanto se compatibile con gli orari.</p><p>Nel pomeriggio raggiungiamo la <strong>località caraibica definitiva, ancora da scegliere</strong>, e facciamo check-in per cinque notti. Da qui in avanti il viaggio diventa soprattutto mare e relax.</p>",
                    "images": [],
                    "links": [
                        {
                            "text": "🏛️ Muyil · INAH",
                            "url": "https://lugares.inah.gob.mx/es/node/4440"
                        },
                        {
                            "text": "🌿 Riserva Sian Ka'an · CONANP",
                            "url": "https://www.gob.mx/conanp"
                        }
                    ],
                    "route": [
                        {
                            "name": "Muyil / Sian Ka'an",
                            "coords": [
                                20.078,
                                -87.615
                            ]
                        }
                    ]
                },
                {
                    "id": "5-jan12-15",
                    "dayName": "Giorni 23–26 (12–15 Gen)",
                    "title": "Ultimi quattro giorni: piedi nella sabbia",
                    "location": "Costa caraibica · base da scegliere",
                    "shortDesc": "Quattro giorni di vero relax: spiaggia, snorkeling leggero se piace, ottimo cibo e zero cambi di alloggio.",
                    "fullDesc": "<p><strong>Quattro giorni pieni di mare</strong>, senza tour obbligatori né ulteriori spostamenti di base. Alterniamo spiaggia, lettura, nuotate e un po' di snorkeling dove consentito, in funzione del meteo.</p><p><strong>Isla Contoy</strong> rimane <strong>solo un'eventuale escursione di giornata</strong>: è un'area naturale protetta, non una località in cui pernottare, e le uscite in gennaio possono essere annullate per il vento e la chiusura del porto. Non decidiamo l'alloggio finale in funzione di questo tour.</p><p><strong>Importante:</strong> la località precisa sul Caribe è <strong>ancora da scegliere</strong>; il criterio principale è una spiaggia gradevole e poco stress logistico per il volo da Cancún del 16 gennaio.</p>",
                    "images": [],
                    "links": [
                        {
                            "text": "🌿 Isla Contoy · informazioni ufficiali CONANP",
                            "url": "https://descubreanp.conanp.gob.mx/en/conanp/ANP?suri=72"
                        }
                    ],
                    "route": []
                },
                {
                    "id": "5-jan16",
                    "dayName": "Giorno 27 (16 Gen)",
                    "title": "Ultimo bagno e partenza da Cancún",
                    "location": "Costa caraibica → aeroporto CUN",
                    "shortDesc": "Check-out, trasferimento verso l'aeroporto di Cancún e volo Air France alle 21:00.",
                    "fullDesc": "<p>Ultima colazione e, se la distanza dall'aeroporto lo permette, ancora qualche ora di mare prima del check-out. Poi trasferimento verso <strong>Cancún (CUN), Terminal 4</strong>, con ampio margine per traffico, restituzione di eventuali mezzi, check-in e controlli.</p><p><strong>Volo già previsto:</strong> Air France <strong>AF651</strong>, sabato <strong>16 gennaio 2027 alle 21:00</strong>, Cancún → Parigi CDG. Lo scalo e il collegamento verso Milano sono già riportati nella scheda voli del sito.</p><p>Non programmare escursioni lontane in questo giorno: l'orario effettivo di partenza dall'alloggio dipenderà dalla località finale scelta.</p>",
                    "images": [],
                    "links": [
                        {
                            "text": "✈️ Aeroporto internazionale di Cancún",
                            "url": "https://www.cancunairport.com/"
                        }
                    ],
                    "route": [
                        {
                            "name": "Aeroporto di Cancún (CUN)",
                            "coords": [
                                21.0365,
                                -86.8771
                            ]
                        }
                    ]
                },
                {
                    "id": "5-jan17",
                    "dayName": "Giorno 28 (17 Gen)",
                    "title": "Rientro in Italia",
                    "location": "Parigi CDG → Milano MXP",
                    "shortDesc": "Arrivo a Milano Malpensa previsto alle 17:25 dopo lo scalo a Parigi.",
                    "fullDesc": "<p>Arriviamo a <strong>Parigi CDG alle 12:30</strong> e ripartiamo con il collegamento Air France <strong>AF1730</strong> alle <strong>15:55</strong>. Atterraggio previsto a <strong>Milano Malpensa alle 17:25</strong> di domenica <strong>17 gennaio 2027</strong>.</p><p>Fine del viaggio di 29 giorni, dal 20 dicembre al 17 gennaio. Controllare eventuali aggiornamenti degli operativi di volo prima della partenza.</p>",
                    "images": [],
                    "links": [],
                    "route": []
                }
            ],
            "mapFocus": {
                "coords": [
                    20.25,
                    -87.4
                ],
                "zoom": 9
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
            "days": "24–26 Dic"
        },
        {
            "areaId": 6,
            "name": "San Miguel Amatlán · Caminos Reales",
            "coords": [
                17.27556,
                -96.47167
            ],
            "days": "27 Dic"
        },
        {
            "areaId": 6,
            "name": "Santa Marta Latuvi",
            "coords": [
                17.2625,
                -96.49306
            ],
            "days": "28 Dic"
        },
        {
            "areaId": 6,
            "name": "Benito Juárez · Sierra Norte",
            "coords": [
                17.18667,
                -96.51389
            ],
            "days": "29 Dic"
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
            "days": "10–11 Gen"
        },
        {
            "areaId": 5,
            "name": "Costa caraibica · base da scegliere (pin indicativo)",
            "coords": [
                20.34,
                -87.33
            ],
            "days": "11–16 Gen"
        },
        {
            "areaId": 5,
            "name": "Aeroporto di Cancún",
            "coords": [
                21.0365,
                -86.8771
            ],
            "days": "16 Gen, volo 21:00"
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