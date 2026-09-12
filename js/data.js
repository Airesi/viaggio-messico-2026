// Dati del Viaggio - js/data.js

const tripData = {
    general: {
        dates: "21 Dicembre - 15 Gennaio • 25 Giorni",
        title: "Messico",
        footerName: "Spedizione Sud Messico (25 Giorni)",
        footerSeason: "Dicembre - Gennaio"
    },
    areas: [
        {
            id: 1,
            navTitle: "Città del Messico",
            navSubtitle: "CDMX e Teotihuacán",
            badge: "Giorni 1 - 4 • Capitale",
            locationText: "Città del Messico",
            title: "Il Cuore della Capitale",
            description: "Esplora le rovine precolombiane, il cuore storico e i canali del sud.",
            images: ["assets/img/Citta_Del_Messico.png"],
            links: [
                { text: "🔗 Prenotazione Bus ADO", url: "https://www.ado.com.mx" }
            ],
            days: [
                {
                    id: "1-1",
                    dayName: "Giorno 1 (21 Dic)",
                    title: "La Città degli Dei: Teotihuacán",
                    location: "Teotihuacán (Nord CDMX)",
                    shortDesc: "Colossali piramidi precolombiane e pranzo all'interno di una grotta vulcanica.",
                    fullDesc: "<p>Iniziamo la nostra avventura facendo un salto indietro nel tempo di duemila anni. L'esplorazione inizia percorrendo la maestosa <strong>Calzada de los Muertos</strong> di Teotihuacán. Saliremo verso la <strong>Piramide del Sole</strong> per assorbirne l'energia e godremo del miglior panorama dal piazzale della <strong>Piramide della Luna</strong>. Per chiudere in bellezza, il nostro primo pranzo messicano si terrà al <em>Restaurante La Gruta</em>, situato all'interno di una spettacolare caverna vulcanica naturale. Pranzo prenotato alle 13 a La Gruta, consigliato Uber per andare e tornare accordandosi con l'autista per il ritorno dato che c'è poca copertura di rete. Costo indicativo dell'uber 75 euro, costo medio del ristorante 30-40 euro, costo dell'ingresso per gli stranieri 10 euro </p>",
                    images: ["assets/img/Teotihuacan_Piramide_Sole.png"],
                    links: [
                        { text: "🔗 Sito Ufficiale INAH - Teotihuacán", url: "https://www.inah.gob.mx/zonas/23-zona-arqueologica-de-teotihuacan" },
                        { text: "🔗 Restaurante La Gruta, prenotato 21 alle 13 p.m.", url: "https://lagruta.mx/" },
                        { text: "🔗 Amigo Tour per prenotare guida con Basilica", url: "https://amigotours.com/tours/mexico/mexico-city/teotihuacan-guadalupe-shrine" }                        
                    ],
                    route: [
                        { name: "Calzada de los Muertos", coords: [19.6900, -98.8445], image: "https://images.unsplash.com/photo-1605315510619-756188cc5c3b?auto=format&fit=crop&w=400&q=80" },
                        { name: "Piramide del Sole", coords: [19.6925, -98.8439], image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=400&q=80" },
                        { name: "Restaurante La Gruta", coords: [19.6917, -98.8384], image: "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&w=400&q=80" }
                    ]
                },
                {
                    id: "1-2",
                    dayName: "Giorno 2 (22 Dic)",
                    title: "Zócalo, Storia Azteca e il Polmone Verde",
                    location: "CDMX (Centro e Ovest)",
                    shortDesc: "Dai resti dell'impero azteco al grande parco cittadino di Chapultepec",
                    fullDesc: "Partenza al mattino presto per esplorare il cuore storico: il <strong>Zócalo</strong>, il <strong>Palacio Nacional</strong> e il <strong>Templo Mayor</strong>. Proseguiremo il percorso artistico al <strong>Museo Vivo del Muralismo</strong>, per poi ammirare la splendida facciata in maiolica della <strong>Casa de los Azulejos</strong>. Sosta panoramica salendo sulla <strong>Torre Latinoamericana</strong> per ammirare la megalopoli dall'alto. Nel primo pomeriggio ci allontaniamo dal cemento per immergerci nel <strong>Bosque de Chapultepec</strong>, un'oasi verde immensa, dove concluderemo la giornata all'incredibile <em>Museo Nacional de Antropología</em>.",
                    images: ["assets/img/Centro_Historico.png"],
                    links: [
                        { text: "🔗 Info Palacio Nacional", url: "https://www.gob.mx/palacionacional" },
                        { text: "🔗 Info Templo Mayor", url: "https://historia.nationalgeographic.com.es/a/templo-mayor-tenochtitlan-centro-espiritual-mundo-azteca_18891" },
                        { text: "🔗 Mitologia di Tlaloc", url: "https://mitologiedelmondo.it/tlaloc/" },
                        { text: "🔗 Museo Nacional de Antropología", url: "https://www.mna.inah.gob.mx/" }
                    ],
                    route: [
                        { name: "Palacio Nacional", coords: [19.4323, -99.1312], image: "assets/img/Palacio_Nacional.png" },
                        { name: "Templo Mayor", coords: [19.4349, -99.1314], image: "assets/img/Templo_Mayor.png" },
                        { name: "Museo Vivo del Muralismo", coords: [19.4326, -99.1360], image: "assets/img/Museo_Vivo_Muralismo.png" },
                        { name: "Casa de los Azulejos", coords: [19.4335, -99.1396], image: "assets/img/Casa_Azulejos.png" },
                        { name: "Torre Latinoamericana", coords: [19.4339, -99.1406], image: "assets/img/Torre_Latinoamericana.png" },
                        { name: "Bosque de Chapultepec (Museo)", coords: [19.4260, -99.1863], image: "assets/img/Bosque_Chapultepec.png" }
                    ]
                },
                {
                    id: "1-3",
                    dayName: "Giorno 3 (23 Dic)",
                    title: "Borghi Colorati, Canali e... Partenza Notturna!",
                    location: "Coyoacán, Xochimilco & Bus Notturno",
                    shortDesc: "Atmosfere bohémien, trajineras a Xochimilco e in serata bus notturno ADO per Oaxaca.",
                    fullDesc: "<p>La giornata inizia a <strong>Coyoacán</strong>, ammirando l'anima coloniale e la <em>Casa Azul</em> di Frida Kahlo. Nel pomeriggio ci spostiamo verso <strong>Xochimilco</strong> per navigare sui canali a bordo di una colorata <em>trajinera</em>.</p><p>Al termine della giornata, recuperiamo i bagagli e ci dirigiamo al <strong>Terminal Taxqueña (Sud CDMX)</strong>. Qui prenderemo il comodo pullman notturno della <em>ADO</em> (si raccomanda la classe GL o Platino per riposare comodamente). Viaggiando di notte cullati dalle curve della Sierra Madre, risparmieremo tempo prezioso, pronti a svegliarci il mattino seguente direttamente a Oaxaca!</p>",
                    images: ["assets/img/Xochimilco_trajineras.jpg"],
                    links: [
                        { text: "🔗 Museo Frida Kahlo", url: "https://www.museofridakahlo.org.mx/" },
                        { text: "🔗 Biglietti Bus ADO (Notturno)", url: "https://www.ado.com.mx" }
                    ],
                    route: [
                        { name: "Plaza Hidalgo, Coyoacán", coords: [19.3496, -99.1626], image: "https://images.unsplash.com/photo-1587822557480-1a76a5df489c?auto=format&fit=crop&w=400&q=80" },
                        { name: "Casa Azul", coords: [19.3551, -99.1625], image: "https://images.unsplash.com/photo-1596752763297-76eb95c96b75?auto=format&fit=crop&w=400&q=80" },
                        { name: "Imbarcadero Xochimilco", coords: [19.2543, -99.1035], image: "assets/img/Xochimilco_trajineras.jpg" },
                        { name: "Terminal Taxqueña (Partenza)", coords: [19.3440, -99.1398], image: "https://images.unsplash.com/photo-1605315510619-756188cc5c3b?auto=format&fit=crop&w=400&q=80" }
                    ]
                }
            ],
            basecamp: {
                zone: "La Condesa o Roma Norte",
                hotelIdea: "Boutique Hotel o Airbnb vicino Parque México",
                why: "Evita il centro storico. Qui è verde, sicuro, perfetto per cenare a piedi la sera e smaltire il jet-lag in tranquillità.",
                tags: ["🌳 Verde", "🛡️ Super Sicuro", "🌮 Foodie"],
                transports: [
                    { icon: "🚕", title: "Uber / DiDi", desc: "Economico e sicuro per Teotihuacán, Aeroporto e Xochimilco." },
                    { icon: "👟", title: "A Piedi", desc: "Perfetto per esplorare il Centro Storico (Zócalo) e i quartieri Condesa/Roma." },
                    { icon: "🚇", title: "MetroBus", desc: "Opzionale per muoversi velocemente lungo il Paseo de la Reforma." }
                ]
            },
            food: "Pranzo preispanico in grotta, tacos al pastor in centro, churros serali ed elotes sui canali.",
            budget: {
                total: "€ 450",
                spent: "€ 310",
                items: [
                    { name: "Hotel Condesa (4 notti)", cost: "€ 280" },
                    { name: "Volo interno per Oaxaca", cost: "€ 60" },
                    { name: "Ingresso Teotihuacán", cost: "€ 10" }
                ]
            },
            reservations: [
                { name: "Boutique Hotel Condesa", status: "Confermato", type: "success" },
                { name: "Restaurante La Gruta", status: "Confermato", type: "success" },
                { name: "Volo AeroMexico MX-OAX", status: "Da Prenotare", type: "warning" }
            ],
            mapFocus: { coords: [19.35, -99.13], zoom: 10 }
        },
        {
            id: 2,
            navTitle: "Oaxaca",
            navSubtitle: "Tradizione e Cultura",
            badge: "Giorni 4 - 6 • La Culla della Tradizione",
            locationText: "Oaxaca & Dintorni",
            title: "Il Cuore Zapoteco e Gastronomico",
            description: "Esplora la capitale culinaria del Messico, i mercati incredibili, il barocco del centro storico e l'antica capitale zapoteca di Monte Albán.",
            images: ["assets/img/Oaxaca_Ciudad.png"],
            links: [
                { text: "🔗 Oaxaca Street Food Tour", url: "https://oaxacastreetfoodtour.com" },
                { text: "🔗 Terminal ADO Oaxaca", url: "https://www.ado.com.mx" }
            ],
            basecamp: {
                zone: "Centro Storico (Zona Santo Domingo / Zócalo)",
                hotelIdea: "Boutique Hotel in stile coloniale con patio interno (early check-in se possibile)",
                why: "Il centro si gira perfettamente a piedi. Alloggiare qui permette di vivere la magia serale, uscire a cena e raggiungere i mercati in pochi minuti.",
                tags: ["🌮 Capitale Food", "🏛️ Barocco", "🚶‍♂️ Walkable"],
                transports: [
                    { icon: "👟", title: "A Piedi", desc: "La scelta migliore per perdersi tra le vie colorate del centro e i mercati." },
                    { icon: "🚕", title: "Taxi / Colectivo", desc: "Economici per raggiungere i siti archeologici (Monte Albán) e le valli." }
                ]
            },
            food: "La Mecca del cibo messicano: Tlayudas croccanti, i 7 tipi di Mole (specialmente il nero), Memelas e l'immancabile Mezcal.",
            budget: {
                total: "€ 220",
                spent: "€ 0",
                items: [
                    { name: "Bus ADO CDMX - Oaxaca", cost: "€ 45" },
                    { name: "Oaxaca Street Food Tour", cost: "Da definire" },
                    { name: "Hotel Oaxaca (2-3 notti)", cost: "Da definire" }
                ]
            },
            reservations: [
                { name: "Bus ADO Taxqueña - Oaxaca (Notturno)", status: "Da Prenotare", type: "warning" },
                { name: "Oaxaca Street Food Tour", status: "Da Prenotare", type: "warning" }
            ],
            days: [
                {
                    id: "2-1",
                    dayName: "Giorno 4 (24 Dic)",
                    title: "La Vigilia: Street Food, Barocco e Calendas",
                    location: "Oaxaca Centro",
                    shortDesc: "Street Food Tour nei mercati, Jardín Etnobotánico e festeggiamenti natalizi serali allo Zócalo.",
                    fullDesc: "<p>Arrivo mattutino dal viaggio notturno. Iniziamo subito a tuffarci nella gastronomia locale con l'imperdibile <strong>Street Food Tour</strong> tra i banchi del <em>Mercado 20 de Noviembre</em>, assaggiando Tlayudas, memelas e i ricchi mole. A stomaco pieno, ammiriamo il barocco del <strong>Templo de Santo Domingo</strong> e, orari permettendo, ci immergiamo nel vicino <em>Jardín Etnobotánico</em> (ingresso solo guidato).</p><p>Nel pomeriggio riposo in hotel per recuperare le energie. La sera scendiamo in strada verso lo <strong>Zócalo</strong> per goderci la magia della Vigilia (<em>Nochebuena</em>): assisteremo alle colorate sfilate delle <em>Calendas</em> e mangeremo i tradizionali <em>buñuelos</em> dolci serviti su piatti di ceramica che, per buon auspicio, vanno lanciati e rotti per terra!</p>",
                    images: ["https://images.unsplash.com/photo-1608670154625-f761bb22f87a?auto=format&fit=crop&w=400&q=80"],
                    links: [
                        { text: "🔗 Oaxaca Street Food Tour", url: "https://oaxacastreetfoodtour.com" },
                        { text: "🔗 Orari Jardín Etnobotánico", url: "https://jardinoaxaca.mx/" },
                        { text: "🔗 Orari Jardín Etnobotánico", url: "https://montealbanoaxaca.com/es/abrira-monte-alban-en-navidad/"}
                    ],
                    route: [
                        { name: "Terminal ADO Oaxaca", coords: [17.0694, -96.7188], image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=400&q=80" },
                        { name: "Mercato 20 de Noviembre", coords: [17.0583, -96.7251], image: "https://images.unsplash.com/photo-1563889753232-a5d6255146c2?auto=format&fit=crop&w=400&q=80" },
                        { name: "Zócalo di Oaxaca", coords: [17.0605, -96.7253], image: "https://images.unsplash.com/photo-1619441207753-481bf16279eb?auto=format&fit=crop&w=400&q=80" }
                    ]
                },
                {
                    id: "2-2",
                    dayName: "Giorno 5 (25 Dic)",
                    title: "Natale Zapoteco a Monte Albán e Street Art",
                    location: "Monte Albán e Jalatlaco",
                    shortDesc: "Mattinata tra le rovine precolombiane aperte 365 giorni l'anno e pomeriggio rilassato a Jalatlaco.",
                    fullDesc: "<p>Dato che in città molte attività potrebbero essere chiuse o fare orario ridotto, è il momento perfetto per esplorare <strong>Monte Albán</strong> (i siti archeologici non chiudono mai). Arriveremo presto per evitare il sole e ammireremo l'incredibile spianata artificiale costruita sulla collina, cuore dell'antico impero Zapoteco, a soli 20-30 minuti di taxi o navetta dal centro.</p><p>Nel pomeriggio rientriamo in città per passeggiare nel pittoresco <strong>Barrio de Jalatlaco</strong>. È il quartiere più bohémien e antico della città, famoso per le strade acciottolate e i meravigliosi murales. Perfetto per bere un caffè messicano in totale relax celebrando il giorno di Natale.</p>",
                    images: ["https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=400&q=80"],
                    links: [
                        { text: "🔗 Info Monte Albán INAH", url: "https://www.inah.gob.mx/zonas/103-zona-arqueologica-de-monte-alban" }
                    ],
                    route: [
                        { name: "Sito Archeologico Monte Albán", coords: [17.0439, -96.7676], image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=400&q=80" },
                        { name: "Barrio de Jalatlaco", coords: [17.0667, -96.7138], image: "https://images.unsplash.com/photo-1634568800171-cb4be1b898be?auto=format&fit=crop&w=400&q=80" }
                    ]
                },
                {
                    id: "2-3",
                    dayName: "Giorno 6 (26 Dic)",
                    title: "Cascate, Mezcal e Pedalate Notturne",
                    location: "Valle dell'Est & Oaxaca Centro",
                    shortDesc: "Tour fuori porta tra bellezze naturali e rovine, seguito da un festoso tour serale in bicicletta per le strade di Oaxaca.",
                    fullDesc: "<p>Oggi noleggiamo un'auto o partecipiamo a un tour condiviso verso est. Prima tappa: l'incredibile <strong>Árbol del Tule</strong>, un enorme e millenario cipresso di Montezuma dal tronco più largo del mondo. Proseguiamo verso <strong>Mitla</strong>, il secondo sito archeologico più importante, unico per i complessi e affascinanti mosaici geometrici che adornano i suoi palazzi.</p><p>Il pezzo forte naturalistico è <strong>Hierve el Agua</strong>: spettacolari cascate pietrificate affacciate su una gola vertiginosa. Chi vorrà potrà tuffarsi nelle piscine naturali sulfuree in cima. Sulla via del ritorno a Oaxaca, chiudiamo la giornata in un <em>palenque</em> per scoprire come l'agave si trasforma nel pungente <strong>Mezcal artigianale</strong>.</p><p><strong>Serata:</strong> Rientro previsto verso le 17:00 / 18:00. Avremo il tempo per una doccia rigenerante e una cena leggera a base di tacos veloci (verso le 19:00). Alle 20:45 ci faremo trovare sulla spianata del <strong>Templo de Santo Domingo</strong> per noleggiare le biciclette con <em>Mundo Ceiba</em>. Essendo sabato, ci godremo l'ultima notte oaxaqueña pedalando a suon di musica tra le vie illuminate a festa!</p>", images: ["https://images.unsplash.com/photo-1577903792019-90b501d7fa74?auto=format&fit=crop&w=400&q=80"],
                    links: [
                        { text: "🔗 Ecobnb Hierve el Agua", url: "https://ecobnb.it/blog/2021/11/hierve-el-agua-cascate-pietrificate-messico/" },
                        { text: "🔗 Hierve el Agua", url: "https://www.hierveelagua.org/" },
                        { text: "🔗 Mundo Ceiba (Tour in Bici)", url: "https://www.facebook.com/mundoceibaoaxaca/" }
                    ],
                    route: [
                        { name: "Árbol del Tule", coords: [17.0468, -96.6364], image: "https://images.unsplash.com/photo-1628105754593-90b63b9fcebf?auto=format&fit=crop&w=400&q=80" },
                        { name: "Sito Archeologico di Mitla", coords: [16.9234, -96.3598], image: "https://images.unsplash.com/photo-1578330744654-205128ff3a49?auto=format&fit=crop&w=400&q=80" },
                        { name: "Hierve el Agua", coords: [16.8647, -96.2764], image: "https://images.unsplash.com/photo-1577903792019-90b501d7fa74?auto=format&fit=crop&w=400&q=80" },
                        { name: "Ritrovo Bici Mundo Ceiba", coords: [17.0664, -96.7214], image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=400&q=80" }
                    ]
                },
                {
                    id: "2-4",
                    dayName: "Giorno 7 (27 Dic)",
                    title: "Dalle Montagne all'Oceano",
                    location: "Puerto Escondido",
                    shortDesc: "Viaggio panoramico mattutino sulla nuova autostrada e arrivo sulla costa del Pacifico per ceviche e mare.",
                    fullDesc: "<p>Dopo aver ricaricato le batterie la notte precedente, partiamo la mattina (ore 8:00 o 9:00) dal terminal di Oaxaca a bordo di un comodo autobus ADO. Sfrutteremo la nuovissima autostrada, che riduce drasticamente i tempi di percorrenza e regala paesaggi diurni spettacolari mentre attraversiamo la Sierra Sur per scendere verso la costa.</p><p>Arriveremo a <strong>Puerto Escondido</strong> prima di mezzogiorno: freschi e riposati! L'obiettivo del pomeriggio è uno solo: abbandonare le scarpe, sentire la sabbia sotto i piedi in spiagge come <em>Carrizalillo</em> o <em>Zicatela</em>, ordinare un freschissimo <em>ceviche</em> e goderci il primo, maestoso tramonto sulle onde dell'Oceano Pacifico.</p>",
                    images: ["https://images.unsplash.com/photo-1579685651478-f32b13c38cb6?auto=format&fit=crop&w=400&q=80"],
                    links: [
                        { text: "🔗 Biglietti Bus ADO (Oaxaca-Puerto Escondido)", url: "https://www.ado.com.mx" },
                        { text: "🔗 Guida Spiagge Puerto Escondido", url: "https://www.mexicodesconocido.com.mx/puerto-escondido.html" }
                    ],
                    route: [
                        { name: "Terminal ADO Oaxaca", coords: [17.0694, -96.7188], image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=400&q=80" },
                        { name: "Playa Carrizalillo, Puerto Escondido", coords: [15.8643, -97.0764], image: "https://images.unsplash.com/photo-1579685651478-f32b13c38cb6?auto=format&fit=crop&w=400&q=80" }
                    ]
                }
            ],
            mapFocus: { coords: [17.06, -96.72], zoom: 14 }
        },
        {
            id: 3,
            navTitle: "Chiapas",
            navSubtitle: "Montagne e Giungla",
            badge: "Giorni 7 - 10 • Chiapas Selvaggio",
            locationText: "San Cristóbal & Palenque",
            title: "Tra Misticismo e Natura",
            description: "L'atmosfera magica di San Cristóbal de las Casas, i riti di San Juan Chamula, le cascate di Agua Azul e le rovine avvolte dalle radici di Palenque.",
            images: [
                "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=600&q=80"
            ],
            links: [
                { text: "🔗 Tour Comunitari Chiapas", url: "https://www.rutopia.com" }
            ],
            mapFocus: { coords: [16.90, -92.30], zoom: 7 }
        },
        {
            id: 4,
            navTitle: "Campeche",
            navSubtitle: "Biosfera & Golfo",
            badge: "Giorni 11 - 16 • Calakmul & Campeche",
            locationText: "Calakmul & Campeche",
            title: "Le Piramidi Perdute",
            description: "Capodanno mistico nella Riserva della Biosfera di Calakmul tra le scimmie urlatrici e risalita verso la splendida città fortificata di Campeche.",
            images: [
                "https://images.unsplash.com/photo-1608953979462-87063327d896?auto=format&fit=crop&w=600&q=80"
            ],
            logistics: "Noleggio auto consigliato per addentrarsi in sicurezza nella giungla di Calakmul.",
            links: [
                { text: "🔗 Guide Locali Calakmul", url: "https://www.cabalek.com" },
                { text: "🔗 Noleggio Auto Messico", url: "https://www.rentalcars.com" }
            ],
            mapFocus: { coords: [18.80, -90.20], zoom: 7 }
        },
        {
            id: 5,
            navTitle: "Yucatán",
            navSubtitle: "Cenotes e Caraibi",
            badge: "Giorni 17 - 30 • Yucatán & Quintana Roo",
            locationText: "Valladolid, Bacalar & Tulum",
            title: "Yucatán, Cenotes e Relax Caraibico",
            description: "Chichén Itzá all'alba, la coloniale Valladolid, bagni mistici nei cenote sotterranei, la laguna dai sette colori di Bacalar e la conclusione tra le spiagge bianche e le rovine sul mare di Tulum.",
            images: [
                "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
            ],
            links: [
                { text: "🔗 Biglietti Ufficiali INAH", url: "https://www.inah.gob.mx" },
                { text: "🔗 Tour Catamarano Bacalar", url: "https://www.viator.com" }
            ],
            mapFocus: { coords: [20.00, -88.00], zoom: 7 }
        }
    ],
    // Aggiornato il riferimento da "week" ad "areaId"
    locations: [
        { areaId: 1, name: "Città del Messico & Teotihuacán", coords: [19.4326, -99.1332], days: "Giorni 1 - 4" },
        { areaId: 2, name: "Oaxaca & Monte Albán", coords: [17.0753, -96.7237], days: "Giorni 5 - 6" },
        { areaId: 3, name: "San Cristóbal de las Casas", coords: [16.7370, -92.6376], days: "Giorni 7 - 8" },
        { areaId: 3, name: "Palenque & Cascate", coords: [17.5090, -92.0458], days: "Giorni 9 - 10" },
        { areaId: 4, name: "Calakmul (Riserva Biosfera)", coords: [18.1075, -89.8105], days: "Giorni 11 - 12" },
        { areaId: 4, name: "Campeche, Uxmal & Mérida", coords: [20.9674, -89.5926], days: "Giorni 13 - 16" },
        { areaId: 5, name: "Chichén Itzá & Valladolid", coords: [20.6843, -88.5678], days: "Giorni 17 - 18" },
        { areaId: 5, name: "Laguna di Bacalar & Tulum", coords: [18.6796, -88.3900], days: "Giorni 19 - 30" }
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