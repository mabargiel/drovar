export type SeedRealization = {
  title: string;
  slug: string;
  category: string;
  order: number;
  coverImageUrl: string;
  galleryUrls: string[];
  description: {
    fr: string;
    pl: string;
    en: string;
    de: string;
    it: string;
  };
};

export const seedRealizations: SeedRealization[] = [
  // ──────────────────────────────────────────────────────────────────────
  // 1. Tabac les Sylphes — Saint-Brevin-les-Pins (NEW — remote cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac les Sylphes — Saint-Brevin-les-Pins',
    slug: 'tabac-les-sylphes-saint-brevin',
    category: 'tobacco',
    order: 1,
    coverImageUrl:
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/44250-ST-BREVINS-LES-PINS-29.jpeg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/44250-ST-BREVINS-LES-PINS-29.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/44250-ST-BREVINS-LES-PINS-36.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/44250-ST-BREVINS-LES-PINS-10.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/44250-ST-BREVINS-LES-PINS-3.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/44250-ST-BREVINS-LES-PINS-44.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/44250-ST-BREVINS-LES-PINS-51.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/44250-ST-BREVINS-LES-PINS-12.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/44250-ST-BREVINS-LES-PINS-19.jpeg',
    ],
    description: {
      fr: "Le Tabac Presse les Sylphes situé à Saint Brévin les pins (44), petite ville côtière et station balnéaire, a fait l'objet d'un réaménagement complet. Pour ce projet, les équipes MDV Boutique ont effectué une refonte complète de la ligne de caisse pour proposer davantage d'articles à impulsion à la vue des clients. Côté mobilier, les meubles presse et le linéaire tabac ont fait l'objet d'un nouvel habillage. Les pôles vapotage, CBD, cadeaux, vin et boisson à emporter complètent l'ensemble. La réalisation d'un îlot central et d'un coin PMU participe enfin à la création d'un espace convivial et bien distribué.",
      pl: 'Tabac Presse les Sylphes w Saint-Brévin-les-Pins (44), niewielkim nadmorskim kurorcie, przeszedł gruntowną przebudowę. W ramach tego projektu nasz zespół przeprowadził całkowitą modernizację strefy kasowej, eksponując więcej produktów impulsowych w zasięgu wzroku klientów. Meble prasowe oraz regał tytoniowy otrzymały nową obudowę. Całość uzupełniają strefy e-papierosów, CBD, upominków, win oraz napojów na wynos. Centralna wyspa i kącik PMU dopełniają przyjazną i funkcjonalnie rozplanowaną przestrzeń.',
      en: 'The Tabac Presse les Sylphes in Saint-Brévin-les-Pins (44), a small coastal resort town, underwent a complete redesign. For this project, our team carried out a full overhaul of the checkout line to display more impulse-buy items within customers\' sight. On the furniture side, the press displays and the tobacco shelving received a fresh new look. Vaping, CBD, gifts, wine and grab-and-go beverage sections round out the offering. A central island and a dedicated PMU corner complete the creation of a welcoming, well-organised space.',
      de: 'Der Tabac Presse les Sylphes in Saint-Brévin-les-Pins (44), einem kleinen Küstenbadeort, wurde komplett umgestaltet. Im Rahmen dieses Projekts hat unser Team den Kassenbereich vollständig neu konzipiert, um den Kunden mehr Impulsartikel direkt ins Blickfeld zu rücken. Beim Mobiliar erhielten die Presseregale und das Tabakregal eine neue Verkleidung. Bereiche für E-Zigaretten, CBD, Geschenke, Wein und Getränke zum Mitnehmen ergänzen das Angebot. Eine zentrale Insel und eine PMU-Ecke runden die Gestaltung eines einladenden und gut durchdachten Raums ab.',
      it: 'Il Tabac Presse les Sylphes a Saint-Brévin-les-Pins (44), piccola località balneare sulla costa, è stato completamente ristrutturato. Per questo progetto, il nostro team ha riprogettato integralmente la linea casse per offrire ai clienti una maggiore visibilità sugli articoli d\'impulso. Sul fronte degli arredi, i mobili edicola e lo scaffale tabacchi sono stati interamente rinnovati. Le aree dedicate allo svapo, al CBD, ai regali, ai vini e alle bevande da asporto completano l\'insieme. Un\'isola centrale e un angolo PMU contribuiscono infine alla creazione di uno spazio accogliente e ben distribuito.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 2. Tabac Billon — Ploudergat (NEW — remote cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac Billon — Ploudergat',
    slug: 'tabac-billon-ploudergat',
    category: 'tobacco',
    order: 2,
    coverImageUrl:
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29150-PLOUDERGAT-TABAC-BILLON-15.jpeg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29150-PLOUDERGAT-TABAC-BILLON-15.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29150-PLOUDERGAT-TABAC-BILLON-1.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29150-PLOUDERGAT-TABAC-BILLON-19.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29150-PLOUDERGAT-TABAC-BILLON-4.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29150-PLOUDERGAT-TABAC-BILLON-5.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29150-PLOUDERGAT-TABAC-BILLON-6.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29150-PLOUDERGAT-TABAC-BILLON-38.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29150-PLOUDERGAT-TABAC-BILLON-23.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29150-PLOUDERGAT-TABAC-BILLON-24.jpeg',
    ],
    description: {
      fr: "Véritable institution locale à Ploudergat (29), le Bar Tabac Billon se transmet de mère en fille depuis plusieurs générations. Pour ce superbe projet, les propriétaires ont fait confiance aux équipes MDV Boutique. Le point de vente a été entièrement repensé afin d'augmenter la surface commerciale et offrir plus de places assises au comptoir. Par ailleurs, un claustra sépare désormais les parties Bar et Tabac pour plus d'intimité. Toutes les activités Vapotage, CBD, Colis et High Tech ont également été regroupées. L'ensemble de l'établissement baigne dans un puit de lumière, imprégné d'une ambiance cosy, nature et apaisante, accentuée par les jeux de lumières Led RGB personnalisables.",
      pl: 'Bar Tabac Billon w Ploudergat (29), prawdziwa lokalna instytucja przekazywana z matki na córkę od kilku pokoleń, przeszedł gruntowną metamorfozę. Punkt sprzedaży został całkowicie przeprojektowany, aby zwiększyć powierzchnię handlową i zaoferować więcej miejsc siedzących przy barze. Ażurowa ścianka oddziela teraz strefę barową od tytoniowej, zapewniając większą intymność. Wszystkie działy — e-papierosy, CBD, paczki i elektronika — zostały zgrupowane w jednym miejscu. Całe wnętrze skąpane jest w naturalnym świetle, z przytulną i kojącą atmosferą, podkreśloną przez konfigurowalne oświetlenie LED RGB.',
      en: 'A true local institution in Ploudergat (29), Bar Tabac Billon has been passed down from mother to daughter for several generations. For this outstanding project, the owners entrusted our team with the redesign. The retail space was entirely rethought to increase the commercial area and provide more seating at the bar. A decorative screen now separates the bar and tobacco sections for greater privacy. All vaping, CBD, parcel and high-tech activities have been grouped together. The entire establishment is bathed in natural light, with a cosy, nature-inspired and calming atmosphere enhanced by customisable RGB LED lighting.',
      de: 'Das Bar Tabac Billon in Ploudergat (29), eine echte lokale Institution, die seit mehreren Generationen von Mutter zu Tochter weitergegeben wird, wurde komplett umgestaltet. Der Verkaufsraum wurde vollständig neu konzipiert, um die Verkaufsfläche zu vergrößern und mehr Sitzplätze an der Theke zu schaffen. Ein Raumteiler trennt nun den Bar- vom Tabakbereich für mehr Privatsphäre. Alle Bereiche — E-Zigaretten, CBD, Paketdienst und Hightech — wurden zusammengelegt. Das gesamte Etablissement erstrahlt in natürlichem Licht und verströmt eine gemütliche, naturnahe und beruhigende Atmosphäre, die durch individuell einstellbare RGB-LED-Beleuchtung unterstrichen wird.',
      it: 'Vera e propria istituzione locale a Ploudergat (29), il Bar Tabac Billon si tramanda di madre in figlia da diverse generazioni. Per questo splendido progetto, i proprietari hanno affidato la ristrutturazione al nostro team. Il punto vendita è stato interamente ripensato per aumentare la superficie commerciale e offrire più posti a sedere al bancone. Un divisorio separa ora le aree bar e tabaccheria per garantire maggiore intimità. Tutte le attività — svapo, CBD, pacchi e high tech — sono state raggruppate. L\'intero locale è immerso nella luce naturale, con un\'atmosfera accogliente e rilassante, accentuata da illuminazione LED RGB personalizzabile.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 3. Tabac le Bas de Kerf — Quimper (NEW — remote cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac le Bas de Kerf — Quimper',
    slug: 'tabac-bas-de-kerf-quimper',
    category: 'tobacco',
    order: 3,
    coverImageUrl:
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29000-QUIMPER-TABAC-LE-BAS-DE-KERF-1.jpeg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29000-QUIMPER-TABAC-LE-BAS-DE-KERF-1.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29000-QUIMPER-TABAC-LE-BAS-DE-KERF-3.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29000-QUIMPER-TABAC-LE-BAS-DE-KERF-5.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29000-QUIMPER-TABAC-LE-BAS-DE-KERF-6.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29000-QUIMPER-TABAC-LE-BAS-DE-KERF-10.jpeg',
    ],
    description: {
      fr: "Pour ce projet de transformation, le propriétaire du Bar Tabac Le Bas de Kerf à Quimper (29) devait composer avec un espace réduit et repenser la visibilité de son offre. Les équipes MDV Boutique ont relevé le défi en recréant un nouveau linéaire tabac plus lumineux qui apporte un meilleur confort de travail au personnel. De même, des vitrines ont été installées de chaque côté du tabac pour augmenter la visibilité et le nombre d'articles disponibles à la vente. Enfin, la création de pôles distincts (vapotage, CBD, diversification, stockage) permet de présenter une offre claire et lisible aux clients.",
      pl: 'W ramach tej metamorfozy właściciel Bar Tabac Le Bas de Kerf w Quimper (29) musiał zmierzyć się z ograniczoną przestrzenią i poprawić widoczność swojej oferty. Nasz zespół podjął wyzwanie, tworząc nowy, lepiej doświetlony regał tytoniowy, który zapewnia personelowi większy komfort pracy. Po obu stronach strefy tytoniowej zainstalowano witryny, zwiększając widoczność i liczbę produktów dostępnych w sprzedaży. Wydzielenie odrębnych stref (e-papierosy, CBD, produkty dodatkowe, magazyn) pozwala prezentować klientom przejrzystą i czytelną ofertę.',
      en: 'For this transformation project, the owner of Bar Tabac Le Bas de Kerf in Quimper (29) had to work within a limited space and rethink the visibility of his product range. Our team rose to the challenge by creating a new, brighter tobacco shelving unit that provides better working comfort for staff. Display cabinets were installed on either side of the tobacco section to increase visibility and the number of items available for sale. Finally, distinct zones (vaping, CBD, diversification, storage) present customers with a clear and easily navigable offering.',
      de: 'Bei diesem Umbauprojekt musste der Inhaber des Bar Tabac Le Bas de Kerf in Quimper (29) mit begrenztem Platz arbeiten und die Sichtbarkeit seines Angebots überdenken. Unser Team hat die Herausforderung angenommen und ein neues, helleres Tabakregal geschaffen, das dem Personal mehr Arbeitskomfort bietet. Auf beiden Seiten des Tabakbereichs wurden Vitrinen installiert, um die Sichtbarkeit und die Anzahl der zum Verkauf stehenden Artikel zu erhöhen. Die Einrichtung separater Zonen (E-Zigaretten, CBD, Diversifizierung, Lager) ermöglicht eine klare und übersichtliche Präsentation des Angebots.',
      it: 'Per questo progetto di trasformazione, il proprietario del Bar Tabac Le Bas de Kerf a Quimper (29) ha dovuto fare i conti con uno spazio ridotto e ripensare la visibilità della propria offerta. Il nostro team ha raccolto la sfida creando un nuovo scaffale tabacchi più luminoso, che garantisce un maggiore comfort di lavoro al personale. Su entrambi i lati della zona tabacchi sono state installate vetrine per aumentare la visibilità e il numero di articoli esposti. Infine, la creazione di aree distinte (svapo, CBD, diversificazione, magazzino) consente di presentare ai clienti un\'offerta chiara e facilmente leggibile.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 4. Tabac le Tamarinier — Rosporden (NEW — remote cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac le Tamarinier — Rosporden',
    slug: 'tabac-tamarinier-rosporden',
    category: 'tobacco',
    order: 4,
    coverImageUrl:
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29150-ROSPORDEN-TABAC-LE-TAMARINIER-8.jpeg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29150-ROSPORDEN-TABAC-LE-TAMARINIER-8.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29150-ROSPORDEN-TABAC-LE-TAMARINIER-7.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29150-ROSPORDEN-TABAC-LE-TAMARINIER-14.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29150-ROSPORDEN-TABAC-LE-TAMARINIER-15.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/04/29150-ROSPORDEN-TABAC-LE-TAMARINIER-23.jpeg',
    ],
    description: {
      fr: "La propriétaire du Bar Tabac Le Tamarinier à Rosporden (29) a fait appel à MDV Boutique pour repenser les parties Tabac et Bar de son établissement. La ligne de caisse a été repensée en cohérence avec l'espace disponible. De plus, un passage a été créé afin de permettre un accès rapide à la salle et à la terrasse, optimisant ainsi la qualité du service et le confort de travail du personnel. Le nouvel aménagement apporte désormais plus de clarté et de visibilité au linéaire tabac. Enfin des meubles sur-mesure mettent désormais en valeur la vente additionnelle comme le vapotage et le CBD.",
      pl: 'Właścicielka Bar Tabac Le Tamarinier w Rosporden (29) zwróciła się do naszego zespołu, aby na nowo zaprojektować strefy tytoniową i barową lokalu. Linia kasowa została przeprojektowana z uwzględnieniem dostępnej przestrzeni. Utworzono przejście zapewniające szybki dostęp do sali i tarasu, co poprawiło jakość obsługi i komfort pracy personelu. Nowa aranżacja zapewnia większą przejrzystość i widoczność regału tytoniowego. Meble wykonane na zamówienie eksponują teraz sprzedaż dodatkową — e-papierosy i CBD.',
      en: 'The owner of Bar Tabac Le Tamarinier in Rosporden (29) called upon our team to redesign the tobacco and bar sections of her establishment. The checkout line was rethought to suit the available space. A new passage was created to provide quick access to the dining area and terrace, improving both service quality and staff working comfort. The new layout brings greater clarity and visibility to the tobacco shelving. Custom-made furniture now showcases additional sales lines such as vaping and CBD.',
      de: 'Die Inhaberin des Bar Tabac Le Tamarinier in Rosporden (29) beauftragte unser Team mit der Neugestaltung der Tabak- und Barbereiche ihres Lokals. Der Kassenbereich wurde passend zum verfügbaren Raum neu konzipiert. Zudem wurde ein Durchgang geschaffen, der einen schnellen Zugang zum Gastraum und zur Terrasse ermöglicht und so die Servicequalität und den Arbeitskomfort des Personals optimiert. Die neue Raumaufteilung sorgt für mehr Übersichtlichkeit und Sichtbarkeit des Tabakregals. Maßgefertigte Möbel setzen nun Zusatzverkäufe wie E-Zigaretten und CBD wirkungsvoll in Szene.',
      it: 'La proprietaria del Bar Tabac Le Tamarinier a Rosporden (29) si è rivolta al nostro team per ripensare le aree tabaccheria e bar del suo locale. La linea casse è stata riprogettata in coerenza con lo spazio disponibile. È stato inoltre creato un passaggio per consentire un accesso rapido alla sala e alla terrazza, ottimizzando la qualità del servizio e il comfort di lavoro del personale. La nuova disposizione offre maggiore chiarezza e visibilità allo scaffale tabacchi. Mobili su misura valorizzano infine la vendita aggiuntiva, come lo svapo e il CBD.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 5. Tabac de la Bouffarde — Bargemon (NEW — remote cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac de la Bouffarde — Bargemon',
    slug: 'tabac-bouffarde-bargemon',
    category: 'tobacco',
    order: 5,
    coverImageUrl:
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-24-at-18.58.57-2.jpeg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-24-at-18.58.57-2.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-24-at-18.58.58.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-24-at-18.58.57-4.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-24-at-18.58.57-3.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-24-at-18.58.57-6.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-24-at-18.58.57-5.jpeg',
    ],
    description: {
      fr: "Situé dans le Haut Var à Bargemon (83), le Tabac La bouffarde a été entièrement repensé avec l'aide des équipes MDV Boutique. Pour résoudre la problématique d'un espace de circulation encombré, le parcours client a été totalement revu. La nouvelle disposition des meubles rend l'accueil du point de vente plus fluide et accueillante. Une réflexion merchandising a également été menée. L'installation de nouveaux mobiliers permet de mettre en valeur les activités à marge (snacking, confiserie, cadeaux) ainsi que les produits locaux tels que la coutellerie ou encore la parfumerie.",
      pl: 'Tabac La Bouffarde położony w Haut Var, w Bargemon (83), został całkowicie przeprojektowany z pomocą naszego zespołu. Aby rozwiązać problem zatłoczonej przestrzeni komunikacyjnej, ścieżka klienta została gruntownie przemyślana. Nowy układ mebli sprawia, że strefa wejściowa jest bardziej płynna i przyjazna. Przeprowadzono również analizę merchandisingową. Nowe meble pozwalają wyeksponować produkty marżowe (przekąski, słodycze, upominki) oraz artykuły lokalne, takie jak wyroby nożownicze czy perfumy.',
      en: 'Located in the Haut Var region in Bargemon (83), Tabac La Bouffarde was completely redesigned with the help of our team. To address the issue of cluttered circulation space, the customer journey was entirely rethought. The new furniture layout makes the point of sale more welcoming and easier to navigate. A merchandising strategy was also developed. New furniture highlights high-margin activities (snacking, confectionery, gifts) as well as local products such as cutlery and perfumery.',
      de: 'Der im Haut Var gelegene Tabac La Bouffarde in Bargemon (83) wurde mit Unterstützung unseres Teams komplett neu gestaltet. Um das Problem verstopfter Laufwege zu lösen, wurde der Kundenpfad vollständig überarbeitet. Die neue Möbelanordnung macht den Empfangsbereich des Geschäfts flüssiger und einladender. Auch eine Merchandising-Strategie wurde erarbeitet. Neue Möbel setzen margenstarke Bereiche (Snacking, Süßwaren, Geschenke) sowie regionale Produkte wie Messerware und Parfümerie wirkungsvoll in Szene.',
      it: 'Situato nell\'Haut Var a Bargemon (83), il Tabac La Bouffarde è stato interamente ripensato con l\'aiuto del nostro team. Per risolvere il problema di uno spazio di circolazione ingombro, il percorso cliente è stato completamente rivisto. La nuova disposizione dei mobili rende l\'accoglienza del punto vendita più fluida e invitante. È stata inoltre condotta un\'analisi di merchandising. L\'installazione di nuovi arredi permette di valorizzare le attività ad alto margine (snack, dolciumi, regali) e i prodotti locali come la coltelleria e la profumeria.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 6. Tabac de l'Euro — Montpellier (EXISTING — local cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: "Tabac de l'Euro — Montpellier",
    slug: 'tabac-euro-montpellier',
    category: 'tobacco',
    order: 6,
    coverImageUrl:
      '/Users/mateuszbargiel/Projects/Drovar/app/public/assets/realizations/tabac-euro-montpellier.jpg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-16-at-12.37.03-5.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-16-at-12.37.03-9.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-16-at-12.37.03.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-16-at-12.37.03-7.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-16-at-12.37.03-2.jpeg',
    ],
    description: {
      fr: "Pour la rénovation du Tabac de l'euro à Montpellier dans l'Hérault (34), le parcours client a été totalement repensé pour offrir aux clients plus de fluidité et de rapidité. L'installation d'un second terminal FDJ répond à une attente croissante des joueurs et permet de différencier le parcours des clients tabac et des clients jeux (FDJ / PMU). De plus, le nouveau mobilier installé par les équipes MDV Boutique valorise les produits à forte valeur ajoutée. Grâce aux meubles mettant en avant les produits à marge (boissons, vin, confiserie), le regard du client se place stratégiquement, favorisant ainsi l'achat d'impulsion. Complétant cet aménagement optimisé, la vape bénéficie désormais d'un corner dédié et moderne.",
      pl: 'Podczas renowacji Tabac de l\'Euro w Montpellier w departamencie Hérault (34) ścieżka klienta została całkowicie przemyślana, zapewniając większą płynność i szybkość obsługi. Instalacja drugiego terminala FDJ odpowiada na rosnące oczekiwania graczy i pozwala rozdzielić ruch klientów tytoniowych i klientów gier (FDJ / PMU). Nowe meble zainstalowane przez nasz zespół eksponują produkty o wysokiej wartości dodanej. Dzięki meblom prezentującym produkty marżowe (napoje, wino, słodycze) wzrok klienta kieruje się strategicznie, sprzyjając zakupom impulsowym. Strefa e-papierosów zyskała nowoczesny, dedykowany kącik, dopełniający zoptymalizowaną aranżację.',
      en: 'For the renovation of Tabac de l\'Euro in Montpellier, Hérault (34), the customer journey was completely rethought to offer greater fluidity and speed. The installation of a second FDJ lottery terminal meets growing player demand and separates the flow of tobacco and gaming customers (FDJ / PMU). The new furniture installed by our team showcases high-value-added products. Furniture highlighting high-margin items (beverages, wine, confectionery) strategically draws the customer\'s eye, encouraging impulse purchases. Completing this optimised layout, vaping now benefits from a dedicated, modern corner.',
      de: 'Bei der Renovierung des Tabac de l\'Euro in Montpellier, Hérault (34), wurde der Kundenlauf komplett neu gedacht, um mehr Flüssigkeit und Schnelligkeit zu bieten. Die Installation eines zweiten FDJ-Lotterietärminals entspricht der wachsenden Nachfrage der Spieler und trennt den Weg der Tabakkunden von dem der Spielkunden (FDJ / PMU). Die von unserem Team installierten neuen Möbel setzen Produkte mit hoher Wertschöpfung in Szene. Durch Möbel, die margenstarke Produkte (Getränke, Wein, Süßwaren) hervorheben, wird der Blick des Kunden strategisch gelenkt und der Impulskauf gefördert. Als Abrundung dieses optimierten Konzepts verfügt der E-Zigaretten-Bereich nun über eine eigene, moderne Ecke.',
      it: 'Per la ristrutturazione del Tabac de l\'Euro a Montpellier, nell\'Hérault (34), il percorso cliente è stato completamente ripensato per offrire maggiore fluidità e rapidità. L\'installazione di un secondo terminale FDJ risponde alla crescente domanda dei giocatori e permette di differenziare il flusso dei clienti tabacchi da quello dei clienti giochi (FDJ / PMU). I nuovi arredi installati dal nostro team valorizzano i prodotti ad alto valore aggiunto. Grazie ai mobili che mettono in primo piano i prodotti ad alto margine (bevande, vini, dolciumi), lo sguardo del cliente si posiziona strategicamente, favorendo l\'acquisto d\'impulso. A completare questo allestimento ottimizzato, lo svapo beneficia ora di un angolo dedicato e moderno.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 7. Maison de la Presse — Guérande (EXISTING — local cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Maison de la Presse — Guérande',
    slug: 'tabac-maison-presse-guerande',
    category: 'tobacco',
    order: 7,
    coverImageUrl:
      '/Users/mateuszbargiel/Projects/Drovar/app/public/assets/realizations/tabac-maison-presse-guerande.jpg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/03/maison-de-la-presse-Guerande-dpt-44-Mme-Cailleux-18.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/03/maison-de-la-presse-Guerande-dpt-44-Mme-Cailleux-1.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/03/maison-de-la-presse-Guerande-dpt-44-Mme-Cailleux-36.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/03/maison-de-la-presse-Guerande-dpt-44-Mme-Cailleux-24.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2026/03/maison-de-la-presse-Guerande-dpt-44-Mme-Cailleux-23.jpeg',
    ],
    description: {
      fr: "Situé dans le cœur de la ville historique, le Tabac la Maison de la presse à Guérande (44) attendait une seconde jeunesse. Le propriétaire a choisi les équipes de MDV Boutique pour son projet de rénovation dans le respect de l'environnement atypique propre à cette cité de caractère. Les îlots centraux ont été repensés et la lumière de l'établissement retravaillée pour bénéficier d'une luminosité chaleureuse plus cocooning. La création d'une retombée en placo a permis de mettre davantage en valeur l'espace presse. Enfin l'installation de nouveaux mobiliers valorise désormais les articles à marge, à l'instar des activités vape, CBD et cadeaux.",
      pl: 'Tabac la Maison de la Presse w Guérande (44), położony w sercu zabytkowego miasta, czekał na drugie życie. Właściciel wybrał nasz zespół do realizacji projektu renowacji z poszanowaniem wyjątkowego charakteru tego historycznego miejsca. Centralne wyspy zostały przeprojektowane, a oświetlenie lokalu dostosowane, by stworzyć ciepłą, przytulną atmosferę. Zabudowa z płyt gipsowo-kartonowych pozwoliła lepiej wyeksponować strefę prasową. Nowe meble eksponują teraz produkty marżowe — e-papierosy, CBD i upominki.',
      en: 'Located in the heart of the historic town, Tabac la Maison de la Presse in Guérande (44) was awaiting a new lease of life. The owner chose our team for his renovation project, respecting the unique character of this heritage town. The central islands were redesigned and the lighting reworked to create a warm, cocooning ambience. A plasterboard soffit was created to better showcase the press area. New furniture now highlights high-margin items, including vaping, CBD and gift sections.',
      de: 'Der im Herzen der historischen Altstadt gelegene Tabac la Maison de la Presse in Guérande (44) wartete auf eine Verjüngungskur. Der Eigentümer wählte unser Team für sein Renovierungsprojekt, das den einzigartigen Charakter dieser historischen Stadt respektiert. Die zentralen Inseln wurden neu gestaltet und die Beleuchtung überarbeitet, um eine warme, gemütliche Atmosphäre zu schaffen. Eine Gipskarton-Abkofferung setzt den Pressebereich besser in Szene. Neue Möbel heben nun margenstarke Artikel hervor — darunter E-Zigaretten, CBD und Geschenke.',
      it: 'Situato nel cuore della città storica, il Tabac la Maison de la Presse a Guérande (44) attendeva una seconda giovinezza. Il proprietario ha scelto il nostro team per il progetto di ristrutturazione, nel rispetto dell\'ambiente atipico di questa città di carattere. Le isole centrali sono state ripensate e l\'illuminazione del locale è stata rielaborata per creare un\'atmosfera calda e avvolgente. La realizzazione di un controsoffitto in cartongesso ha permesso di valorizzare ulteriormente l\'area edicola. Infine, i nuovi arredi esaltano i prodotti ad alto margine, come lo svapo, il CBD e gli articoli regalo.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 8. Tabac le Bordeaux — Niort (EXISTING — local cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac le Bordeaux — Niort',
    slug: 'tabac-bordeaux-niort',
    category: 'tobacco',
    order: 8,
    coverImageUrl:
      '/Users/mateuszbargiel/Projects/Drovar/app/public/assets/realizations/tabac-bordeaux-niort.png',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/Capture-decran-2025-11-25-091506.png',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/Capture-decran-2025-11-25-093637.png',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/Capture-decran-2025-11-25-095459.png',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/Capture-decran-2025-11-25-095140.png',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/Capture-decran-2025-11-25-095241.png',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/Capture-decran-2025-11-25-095414.png',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/Capture-decran-2025-11-25-093729.png',
    ],
    description: {
      fr: "Pour la rénovation du tabac le Bordeaux à Niort (Deux-Sèvres), le propriétaire a eu la liberté d'effectuer les travaux avec l'artisan de son choix. Il a ensuite fait confiance aux équipes MDV Boutique pour le mobilier et pour l'aménagement de l'espace. Avec une surface réduite, la nouvelle disposition de l'établissement va directement à l'essentiel. En harmonie avec l'installation des nouveaux meubles MDV Boutique, cette dernière met en avant les activités Tabac, Presse ainsi que les produits à marge comme la vape et le CBD. La personnalisation a également été placée au centre de ce projet avec une signalétique spécifique et un ciel de bar personnalisé qui donnent une personnalité unique au point de vente.",
      pl: 'Podczas renowacji Tabac le Bordeaux w Niort (Deux-Sèvres) właściciel miał swobodę przeprowadzenia prac budowlanych z wybranym wykonawcą. Następnie powierzył naszemu zespołowi dobór mebli i aranżację przestrzeni. Przy ograniczonej powierzchni nowy układ lokalu idzie prosto do sedna. W harmonii z nowymi meblami wyeksponowane zostały główne działalności — tytoń, prasa — oraz produkty marżowe, takie jak e-papierosy i CBD. Personalizacja została postawiona w centrum tego projektu — dedykowane oznakowanie i indywidualny sufit barowy nadają punktowi sprzedaży niepowtarzalny charakter.',
      en: 'For the renovation of Tabac le Bordeaux in Niort (Deux-Sèvres), the owner had the freedom to carry out the building work with a contractor of his choice. He then entrusted our team with the furniture and spatial design. With a limited footprint, the new layout goes straight to what matters. In harmony with the new furniture, it highlights the tobacco and press activities as well as high-margin products such as vaping and CBD. Personalisation was also placed at the heart of the project, with bespoke signage and a custom bar ceiling that give the shop a unique identity.',
      de: 'Bei der Renovierung des Tabac le Bordeaux in Niort (Deux-Sèvres) hatte der Inhaber die Freiheit, die Bauarbeiten mit einem Handwerker seiner Wahl durchzuführen. Anschließend vertraute er unserem Team die Möblierung und Raumgestaltung an. Bei begrenzter Fläche kommt die neue Einrichtung direkt auf den Punkt. Im Einklang mit den neuen Möbeln werden die Bereiche Tabak und Presse sowie margenstarke Produkte wie E-Zigaretten und CBD hervorgehoben. Auch die Individualisierung stand im Mittelpunkt dieses Projekts — eine spezifische Beschilderung und eine individuell gestaltete Bardecke verleihen dem Geschäft eine einzigartige Persönlichkeit.',
      it: 'Per la ristrutturazione del Tabac le Bordeaux a Niort (Deux-Sèvres), il proprietario ha avuto la libertà di effettuare i lavori con l\'artigiano di sua scelta. Ha poi affidato al nostro team l\'arredamento e l\'organizzazione dello spazio. Con una superficie ridotta, la nuova disposizione va dritta all\'essenziale. In armonia con i nuovi mobili, mette in risalto le attività tabacchi e edicola, oltre ai prodotti ad alto margine come lo svapo e il CBD. La personalizzazione è stata posta al centro del progetto, con una segnaletica dedicata e un soffitto bar personalizzato che conferiscono al punto vendita un\'identità unica.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 9. Tabac le Khédive — Tonneins (EXISTING — local cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac le Khédive — Tonneins',
    slug: 'tabac-khedive-tonneins',
    category: 'tobacco',
    order: 9,
    coverImageUrl:
      '/Users/mateuszbargiel/Projects/Drovar/app/public/assets/realizations/tabac-khedive-tonneins.jpg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/12/image00013-scaled.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/12/image00021-scaled.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/12/image00029-scaled.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/12/image00024-scaled.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/12/image00016-scaled.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/12/image00012-scaled.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/12/image00003-scaled.jpeg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/12/image00005-scaled.jpeg',
    ],
    description: {
      fr: "La propriétaire du Tabac le Khédive à Tonneins (47) avait une idée précise de l'ambiance décorative à donner à son établissement après son déménagement. Pour donner un style bohème aux formes douces, les équipes MDV Boutique ont fait une proposition aux couleurs naturelles et aux découpes arrondies (portes battantes, îlot central, présentoirs). La personnalisation a été poussée au maximum, jusqu'à la couleur de la signalétique et la pose d'un claustra sur-mesure pour créer une séparation avec la partie boutique. Des luminaires hexagones complètent l'ensemble. Enfin des activités nouvelles (snacking, boissons, produits locaux) sont mises en avant grâce au nouveau mobilier.",
      pl: 'Właścicielka Tabac le Khédive w Tonneins (47) miała precyzyjną wizję atmosfery dekoracyjnej po przeprowadzce lokalu. Aby nadać wnętrzom styl boho o łagodnych formach, nasz zespół zaproponował aranżację w naturalnych kolorach z zaokrąglonymi elementami (drzwi wahadłowe, centralna wyspa, ekspozytory). Personalizacja została doprowadzona do maksimum — od koloru oznakowania po wykonany na zamówienie ażurowy panel oddzielający strefę butikową. Sześciokątne lampy dopełniają całość. Nowe meble eksponują dodatkowe aktywności: przekąski, napoje i produkty regionalne.',
      en: 'The owner of Tabac le Khédive in Tonneins (47) had a precise vision of the decorative atmosphere she wanted for her establishment after relocating. To achieve a bohemian style with soft shapes, our team proposed a design in natural colours with rounded contours (swing doors, central island, display units). Personalisation was taken to the extreme — from the signage colour to a bespoke screen creating a separation with the boutique area. Hexagonal light fixtures complete the look. New furniture highlights additional activities such as snacking, beverages and local products.',
      de: 'Die Inhaberin des Tabac le Khédive in Tonneins (47) hatte nach ihrem Umzug eine klare Vorstellung von der gewünschten Dekorationsatmosphäre. Um einen Bohème-Stil mit weichen Formen zu schaffen, entwarf unser Team ein Konzept in natürlichen Farben mit abgerundeten Konturen (Pendeltüren, zentrale Insel, Displays). Die Individualisierung wurde auf die Spitze getrieben — von der Farbe der Beschilderung bis hin zu einem maßgefertigten Raumteiler zur Abtrennung des Boutique-Bereichs. Sechseckige Leuchten runden das Gesamtbild ab. Neue Möbel setzen zusätzliche Aktivitäten wie Snacking, Getränke und regionale Produkte in Szene.',
      it: 'La proprietaria del Tabac le Khédive a Tonneins (47) aveva un\'idea precisa dell\'atmosfera decorativa da dare al suo locale dopo il trasferimento. Per creare uno stile bohémien dalle forme morbide, il nostro team ha proposto un progetto dai colori naturali e dai profili arrotondati (porte a battente, isola centrale, espositori). La personalizzazione è stata spinta al massimo, dalla scelta del colore della segnaletica all\'installazione di un divisorio su misura per separare l\'area boutique. Lampade esagonali completano l\'insieme. Infine, nuovi arredi valorizzano le attività aggiuntive: snack, bevande e prodotti locali.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 10. Tabac le Balto — Brest (EXISTING — local cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac le Balto — Brest',
    slug: 'tabac-balto-brest',
    category: 'tobacco',
    order: 10,
    coverImageUrl:
      '/Users/mateuszbargiel/Projects/Drovar/app/public/assets/realizations/tabac-balto-brest.jpg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/12/29200-BREST-PHOTO-MDV-LE-BALTO-BREST-1.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/12/29200-BREST-PHOTO-MDV-LE-BALTO-BREST-6.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/12/29200-BREST-PHOTO-MDV-LE-BALTO-BREST-17.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/12/29200-BREST-PHOTO-MDV-LE-BALTO-BREST-20.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/12/29200-BREST-PHOTO-MDV-LE-BALTO-BREST-12.jpg',
    ],
    description: {
      fr: "Après de premiers travaux d'aménagement en 2022, les propriétaires du Tabac le Balto ont confié leur projet de transformation à MDV Boutique. Ils souhaitaient ainsi repenser l'espace, améliorer le confort de travail et trouver des solutions adaptées à leurs différentes problématiques. Les équipes MDV Boutique ont relevé le défi avec un nouveau mobilier incluant de nombreux rangements pour stocker la marchandise et optimiser au maximum la surface de vente. Enfin, une place particulière a été faite pour mettre en valeur les nombreux articles à marge en particulier les activités vape et CBD.",
      pl: 'Po pierwszych pracach aranżacyjnych w 2022 roku właściciele Tabac le Balto powierzyli naszemu zespołowi swój projekt transformacji. Chcieli na nowo przemyśleć przestrzeń, poprawić komfort pracy i znaleźć rozwiązania dopasowane do różnych potrzeb. Nasz zespół podjął wyzwanie, proponując nowe meble z licznymi schowkami do przechowywania towaru i maksymalnego wykorzystania powierzchni sprzedażowej. Szczególne miejsce poświęcono ekspozycji licznych produktów marżowych, zwłaszcza e-papierosów i CBD.',
      en: 'Following initial fitting-out work in 2022, the owners of Tabac le Balto entrusted their transformation project to our team. They wanted to rethink the space, improve working comfort and find solutions tailored to their various needs. Our team rose to the challenge with new furniture featuring ample storage to stock merchandise and maximise the sales area. Special attention was given to showcasing the many high-margin items, particularly the vaping and CBD lines.',
      de: 'Nach ersten Einrichtungsarbeiten im Jahr 2022 vertrauten die Eigentümer des Tabac le Balto ihr Umbauprojekt unserem Team an. Sie wollten den Raum neu denken, den Arbeitskomfort verbessern und passende Lösungen für ihre verschiedenen Anforderungen finden. Unser Team nahm die Herausforderung an und lieferte neue Möbel mit zahlreichen Stauräumen für die Warenaufbewahrung bei maximaler Nutzung der Verkaufsfläche. Besonderes Augenmerk wurde auf die Präsentation der zahlreichen margenstarken Artikel gelegt, insbesondere der E-Zigaretten- und CBD-Bereiche.',
      it: 'Dopo i primi lavori di allestimento nel 2022, i proprietari del Tabac le Balto hanno affidato il loro progetto di trasformazione al nostro team. Desideravano ripensare lo spazio, migliorare il comfort di lavoro e trovare soluzioni adatte alle diverse esigenze. Il nostro team ha raccolto la sfida con nuovi arredi dotati di numerosi vani per lo stoccaggio della merce, ottimizzando al massimo la superficie di vendita. Un\'attenzione particolare è stata dedicata alla valorizzazione dei numerosi articoli ad alto margine, in particolare le attività svapo e CBD.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 11. Tabac le Lorven — Aiguillon (EXISTING — local cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: "Tabac le Lorven — Aiguillon",
    slug: 'tabac-lorven-aiguillon',
    category: 'tobacco',
    order: 11,
    coverImageUrl:
      '/Users/mateuszbargiel/Projects/Drovar/app/public/assets/realizations/tabac-lorven-aiguillon.webp',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/12/Capture-decran-2025-11-25-093729-1.webp',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/Capture-decran-2025-11-25-093637.png',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/Capture-decran-2025-11-25-095459.png',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/Capture-decran-2025-11-25-095140.png',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/Capture-decran-2025-11-25-095241.png',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/Capture-decran-2025-11-25-095414.png',
    ],
    description: {
      fr: "Les propriétaires de ce tabac presse situé en Vendée (85) à l'Aiguillon la presqu'île, se sont lancés dans un projet complet de rénovation. Ce lieu incontournable, en particulier en saison, a été totalement refait du sol au plafond. Le nouveau mobilier a permis de clarifier l'offre en mettant l'accent sur la vape, les souvenirs et la cave à cigares ainsi que sur l'important espace presse désormais parfaitement mis en valeur. La circulation a également été repensée pour accueillir la clientèle dans un espace convivial. Côté extérieur, les équipes MDV Boutique ont assuré l'habillage vitrine, la pose de l'enseigne et de la carotte. Les résultats sont déjà au rendez-vous avec des ventes démultipliées.",
      pl: 'Właściciele tego tabac presse w Vendée (85), w l\'Aiguillon-la-Presqu\'île, podjęli się kompleksowej renowacji. To kultowe miejsce, szczególnie popularne w sezonie, zostało całkowicie odnowione od podłogi po sufit. Nowe meble pozwoliły uporządkować ofertę z naciskiem na e-papierosy, pamiątki i humidor, a także na znaczącą strefę prasową, teraz doskonale wyeksponowaną. Przemodelowano również komunikację, by przyjmować klientów w przyjaznej przestrzeni. Na zewnątrz nasz zespół wykonał oklejenie witryn, montaż szyldu i znaku tabacznego. Rezultaty nie kazały na siebie czekać — sprzedaż znacząco wzrosła.',
      en: 'The owners of this tobacconist-newsagent in Vendée (85) at l\'Aiguillon-la-Presqu\'île embarked on a complete renovation. This essential local destination, especially in season, was totally redone from floor to ceiling. New furniture clarified the product range with emphasis on vaping, souvenirs and the cigar humidor, as well as the substantial press area which is now perfectly showcased. Customer flow was also rethought to welcome visitors into a friendly space. Outside, our team handled the window dressing, signage and the traditional tobacco sign. Results are already impressive with a significant increase in sales.',
      de: 'Die Eigentümer dieses Tabak-Presseshops in der Vendée (85) in l\'Aiguillon-la-Presqu\'île haben sich an eine umfassende Renovierung gewagt. Dieser unverzichtbare Anlaufpunkt — besonders in der Saison — wurde von Grund auf erneuert. Neue Möbel sorgen für eine klare Angebotsstruktur mit Schwerpunkt auf E-Zigaretten, Souvenirs und Zigarren-Humidor sowie dem großzügigen, nun perfekt inszenierten Pressebereich. Auch die Kundenführung wurde neu durchdacht, um die Besucher in einem einladenden Raum zu empfangen. Außen übernahm unser Team die Schaufenstergestaltung, die Beschilderung und das traditionelle Tabakzeichen. Die Ergebnisse sprechen bereits für sich — der Umsatz hat sich vervielfacht.',
      it: 'I proprietari di questa tabaccheria-edicola in Vendée (85), a l\'Aiguillon-la-Presqu\'île, hanno intrapreso un progetto di ristrutturazione completa. Questo luogo imprescindibile, soprattutto in stagione, è stato interamente rifatto dal pavimento al soffitto. I nuovi arredi hanno permesso di chiarire l\'offerta, ponendo l\'accento sullo svapo, i souvenir e l\'humidor per sigari, oltre all\'importante area edicola ora perfettamente valorizzata. La circolazione è stata ripensata per accogliere la clientela in uno spazio conviviale. All\'esterno, il nostro team ha curato l\'allestimento delle vetrine, l\'insegna e il simbolo del tabacco. I risultati sono già evidenti, con vendite moltiplicate.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 12. Tabac de Frontreyne — Gap (EXISTING — local cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac de Frontreyne — Gap',
    slug: 'tabac-frontreyne-gap',
    category: 'tobacco',
    order: 12,
    coverImageUrl:
      '/Users/mateuszbargiel/Projects/Drovar/app/public/assets/realizations/tabac-frontreyne-gap.jpg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/IMG-20251106-WA0021.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/IMG-20251106-WA0013.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/IMG-20251106-WA0015.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/IMG-20251106-WA0023.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/IMG-20251106-WA0028.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/IMG-20251106-WA0035.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/IMG-20251106-WA0016.jpg',
    ],
    description: {
      fr: "Pour la rénovation du Tabac de Fontreyne situé dans la ville de Gap (05), le propriétaire souhaitait moderniser l'agencement de son commerce tout en offrant une expérience client fluide et agréable. Pour ce projet, l'intervention des équipes MDV Boutique a permis d'optimiser l'espace de vente et de valoriser les produits grâce à l'installation d'un nouveau mobilier (linéaire tabac, ligne de caisse, presse, boisson, snacking et même un coin café). Cette transformation répond aux attentes nouvelles des clients (vape, CBD) tout en dynamisant l'activité. Un pari réussi qui permet de renforcer l'attractivité de l'établissement et de fidéliser la clientèle.",
      pl: 'Właściciel Tabac de Fontreyne w Gap (05) chciał zmodernizować wyposażenie swojego sklepu, zapewniając jednocześnie płynne i przyjemne doświadczenie zakupowe. W ramach tego projektu interwencja naszego zespołu pozwoliła zoptymalizować powierzchnię sprzedażową i wyeksponować produkty dzięki instalacji nowych mebli (regał tytoniowy, linia kasowa, prasa, napoje, przekąski, a nawet kącik kawowy). Ta metamorfoza odpowiada na nowe oczekiwania klientów (e-papierosy, CBD), jednocześnie dynamizując działalność. Udany zakład, który wzmacnia atrakcyjność lokalu i buduje lojalność klientów.',
      en: 'For the renovation of Tabac de Fontreyne in the city of Gap (05), the owner wanted to modernise his shop\'s layout while offering a smooth and pleasant customer experience. Our team\'s involvement optimised the sales area and showcased products through the installation of new furniture (tobacco shelving, checkout counter, press, beverages, snacking and even a coffee corner). This transformation meets new customer expectations (vaping, CBD) while boosting business. A successful bet that strengthens the establishment\'s appeal and builds customer loyalty.',
      de: 'Für die Renovierung des Tabac de Fontreyne in Gap (05) wollte der Inhaber die Ladeneinrichtung modernisieren und gleichzeitig ein reibungsloses und angenehmes Kundenerlebnis bieten. Die Mitwirkung unseres Teams ermöglichte es, die Verkaufsfläche zu optimieren und die Produkte durch neue Möbel (Tabakregal, Kassenbereich, Presse, Getränke, Snacking und sogar eine Kaffee-Ecke) optimal zu präsentieren. Diese Transformation entspricht den neuen Kundenerwartungen (E-Zigaretten, CBD) und belebt gleichzeitig das Geschäft. Eine gelungene Wette, die die Attraktivität des Hauses stärkt und die Kundenbindung fördert.',
      it: 'Per la ristrutturazione del Tabac de Fontreyne nella città di Gap (05), il proprietario desiderava modernizzare l\'allestimento del suo negozio offrendo al contempo un\'esperienza cliente fluida e piacevole. L\'intervento del nostro team ha permesso di ottimizzare lo spazio di vendita e di valorizzare i prodotti grazie all\'installazione di nuovi arredi (scaffale tabacchi, linea casse, edicola, bevande, snack e persino un angolo caffè). Questa trasformazione risponde alle nuove aspettative dei clienti (svapo, CBD) dinamizzando al contempo l\'attività. Una scommessa vinta che rafforza l\'attrattività del locale e fidelizza la clientela.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 13. Tabac le Ciclop — Lédignan (EXISTING — local cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac le Ciclop — Lédignan',
    slug: 'tabac-ciclop-ledignan',
    category: 'tobacco',
    order: 13,
    coverImageUrl:
      '/Users/mateuszbargiel/Projects/Drovar/app/public/assets/realizations/tabac-ciclop-ledignan.jpg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/IMG-20251106-WA0043.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/IMG-20251106-WA0048.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/IMG-20251106-WA0049.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/IMG-20251106-WA0050.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/IMG-20251106-WA0046.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/IMG-20251106-WA0047.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/IMG-20251106-WA0051.jpg',
    ],
    description: {
      fr: "Les propriétaires du Ciclop, bar tabac de Lédignan (33), ont profité de leur aménagement dans un nouveau local pour rénover leur point de vente. Longuement réfléchie, la nouvelle installation offre non seulement un meilleur aménagement de l'espace mais également un éventail élargi de produits et de services tels que la vape ou le CBD. Le nouveau mobilier MDV Boutique met désormais en valeur les activités variées de l'établissement (papeterie, carterie, boisson et cadeaux) avec un coin café pour plus de convivialité.",
      pl: 'Właściciele Le Ciclop, bar tabac w Lédignan (33), wykorzystali przeprowadzkę do nowego lokalu, aby odnowić swój punkt sprzedaży. Starannie przemyślana nowa aranżacja oferuje nie tylko lepsze zagospodarowanie przestrzeni, ale również poszerzony wachlarz produktów i usług, takich jak e-papierosy czy CBD. Nowe meble eksponują zróżnicowane aktywności lokalu (artykuły papiernicze, kartki okolicznościowe, napoje i upominki) z kącikiem kawowym dla większej przyjemności.',
      en: 'The owners of Le Ciclop, a bar-tabac in Lédignan (33), took advantage of their move to new premises to renovate their shop. Carefully thought through, the new layout offers not only better use of space but also a wider range of products and services, including vaping and CBD. New furniture now showcases the establishment\'s varied activities (stationery, greeting cards, beverages and gifts) with a coffee corner for added warmth.',
      de: 'Die Eigentümer des Le Ciclop, eines Bar-Tabacs in Lédignan (33), nutzten den Umzug in neue Räumlichkeiten, um ihren Laden zu renovieren. Die sorgfältig durchdachte neue Einrichtung bietet nicht nur eine bessere Raumnutzung, sondern auch ein erweitertes Produkt- und Dienstleistungsangebot, darunter E-Zigaretten und CBD. Neue Möbel setzen die vielfältigen Aktivitäten des Hauses (Papeterie, Grußkarten, Getränke und Geschenke) in Szene — ergänzt durch eine gemütliche Kaffee-Ecke.',
      it: 'I proprietari de Le Ciclop, bar tabacchi di Lédignan (33), hanno approfittato del trasferimento in un nuovo locale per rinnovare il punto vendita. Attentamente studiata, la nuova disposizione offre non solo un migliore utilizzo dello spazio, ma anche una gamma più ampia di prodotti e servizi come lo svapo e il CBD. I nuovi arredi valorizzano le diverse attività del locale (cartoleria, biglietti d\'auguri, bevande e regali) con un angolo caffè per una maggiore convivialità.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 14. La Boutique d'à côté — Fouesnant (EXISTING — local cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: "La Boutique d'à côté — Fouesnant",
    slug: 'tabac-boutique-da-cote-fouesnant',
    category: 'tobacco',
    order: 14,
    coverImageUrl:
      '/Users/mateuszbargiel/Projects/Drovar/app/public/assets/realizations/tabac-boutique-da-cote-fouesnant.jpg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/29170-FOUESNANT-TABAC-LA-BOUTIQUE-DA-COTE-68-1.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/29170-FOUESNANT-TABAC-LA-BOUTIQUE-DA-COTE-9.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/29170-FOUESNANT-TABAC-LA-BOUTIQUE-DA-COTE-63.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/29170-FOUESNANT-TABAC-LA-BOUTIQUE-DA-COTE-59.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/29170-FOUESNANT-TABAC-LA-BOUTIQUE-DA-COTE-2.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/29170-FOUESNANT-TABAC-LA-BOUTIQUE-DA-COTE-72.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/29170-FOUESNANT-TABAC-LA-BOUTIQUE-DA-COTE-75.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/29170-FOUESNANT-TABAC-LA-BOUTIQUE-DA-COTE-85.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/29170-FOUESNANT-TABAC-LA-BOUTIQUE-DA-COTE-88.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/29170-FOUESNANT-TABAC-LA-BOUTIQUE-DA-COTE-96.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/11/29170-FOUESNANT-TABAC-LA-BOUTIQUE-DA-COTE-46.jpg',
    ],
    description: {
      fr: "Pour ce projet d'envergure situé à Fouesnant (29), les équipes MDV Boutiques se sont mobilisées durant une année complète (conception, zonage, rénovation complète). Le Tabac La Boutique d'à côté regroupe en effet 6 activités sur 145m² : Tabac, Presse, FDJ, Librairie, Cadeaux et Déco. Un mobilier sur mesure ultra modulable a été installé pour répondre aux impératifs des articles saisonniers de la boutique. On retrouve également un pôle complet dédié au vapotage, de même que des espaces CBD, pod, cigare et whisky. Un travail approfondi sur la répartition du son ainsi qu'un parcours client spécifique ont été réalisés, faisant de ce point de vente un lieu agréable pour dénicher des produits locaux ou effectuer un achat plaisir. Un plafonnier unique dessiné par notre architecte complète le décor.",
      pl: 'Przy tym ambitnym projekcie w Fouesnant (29) nasz zespół był zaangażowany przez cały rok (koncepcja, strefowanie, kompleksowa renowacja). Tabac La Boutique d\'à côté skupia aż 6 działalności na 145 m²: tytoń, prasa, FDJ, księgarnia, upominki i dekoracja. Zainstalowano ultramodularne meble na zamówienie, dostosowane do wymogów sezonowego asortymentu. Wydzielono pełną strefę e-papierosów, a także przestrzenie na CBD, pody, cygara i whisky. Przeprowadzono pogłębioną pracę nad rozkładem dźwięku oraz zaprojektowano dedykowaną ścieżkę klienta, dzięki czemu lokal stał się przyjemnym miejscem do odkrywania produktów regionalnych i zakupów dla przyjemności. Wyjątkowy plafon zaprojektowany przez naszego architekta dopełnia wystrój.',
      en: 'For this major project in Fouesnant (29), our team was mobilised for a full year (design, zoning, complete renovation). La Boutique d\'à côté brings together 6 activities across 145 m2: tobacco, press, FDJ lottery, bookshop, gifts and home decor. Ultra-modular custom furniture was installed to accommodate the boutique\'s seasonal stock requirements. A complete vaping zone was also created, along with CBD, pod, cigar and whisky areas. Thorough work on sound distribution and a dedicated customer journey make this shop a pleasant place to discover local products or enjoy a treat. A unique ceiling fixture designed by our architect completes the decor.',
      de: 'Für dieses Großprojekt in Fouesnant (29) war unser Team ein ganzes Jahr im Einsatz (Konzeption, Zonierung, Komplettrenovierung). La Boutique d\'à côté vereint 6 Aktivitäten auf 145 m²: Tabak, Presse, FDJ-Lotterie, Buchhandlung, Geschenke und Deko. Ultraflexible Maßmöbel wurden installiert, um den Anforderungen des saisonalen Sortiments gerecht zu werden. Ein kompletter E-Zigaretten-Bereich sowie Zonen für CBD, Pods, Zigarren und Whisky ergänzen das Angebot. Eine sorgfältige Akustikplanung und ein spezieller Kundenparcours machen diesen Laden zu einem angenehmen Ort, um regionale Produkte zu entdecken oder sich etwas zu gönnen. Eine einzigartige, von unserem Architekten entworfene Deckenleuchte rundet die Einrichtung ab.',
      it: 'Per questo progetto di grande portata a Fouesnant (29), il nostro team si è impegnato per un anno intero (progettazione, zonizzazione, ristrutturazione completa). La Boutique d\'à côté riunisce 6 attività su 145 m²: tabacchi, edicola, FDJ, libreria, regali e decorazione. Sono stati installati mobili su misura ultra-modulabili per rispondere alle esigenze degli articoli stagionali. È presente anche un\'area completa dedicata allo svapo, oltre a spazi per CBD, pod, sigari e whisky. Un lavoro approfondito sulla distribuzione del suono e un percorso cliente dedicato rendono questo punto vendita un luogo piacevole per scoprire prodotti locali o concedersi un acquisto di piacere. Un lampadario unico disegnato dal nostro architetto completa l\'arredamento.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 15. Tabac le Molière — Angers (EXISTING — local cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac le Molière — Angers',
    slug: 'tabac-moliere-angers',
    category: 'tobacco',
    order: 15,
    coverImageUrl:
      '/Users/mateuszbargiel/Projects/Drovar/app/public/assets/realizations/tabac-moliere-angers.jpg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/10/LE-MOLIERE-ANGERS-APRES-TRAVAUX-311025-17.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/10/LE-MOLIERE-ANGERS-APRES-TRAVAUX-311025-10.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/10/LE-MOLIERE-ANGERS-APRES-TRAVAUX-311025-16.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/10/LE-MOLIERE-ANGERS-APRES-TRAVAUX-311025-9.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/10/LE-MOLIERE-ANGERS-APRES-TRAVAUX-311025-5.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/10/LE-MOLIERE-ANGERS-APRES-TRAVAUX-311025-2.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/10/IMG-20251031-WA0020.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/10/IMG-20251031-WA0021.jpg',
    ],
    description: {
      fr: "Situé dans la galerie marchande d'Intermarché à Angers, le tabac Le Molière s'inscrit dans la logique d'une refonte visuelle du centre commercial prévue pour 2026. Le réaménagement du point de vente effectué avec les équipes MDV Boutique s'imposait pour plusieurs raisons. Tout d'abord pour moderniser le point de vente et proposer une offre plus diversifiée. Ensuite, pour retrouver de la place afin de faire face au flux important de colis (stockage et réception) qui transitent au quotidien. Le nouveau mobilier a permis de clarifier l'offre commerciale et de gagner en confort de travail. Le travail sur l'éclairage et la pose d'un nouveau sol apportent chaleur et convivialité à ce lieu littéralement transformé !",
      pl: 'Tabac Le Molière, mieszczący się w galerii handlowej Intermarché w Angers, wpisuje się w planowaną na 2026 rok wizualną metamorfozę centrum handlowego. Przebudowa punktu sprzedaży z udziałem naszego zespołu była konieczna z kilku powodów. Po pierwsze, aby zmodernizować lokal i zaproponować bardziej zróżnicowaną ofertę. Po drugie, aby odzyskać przestrzeń potrzebną do obsługi intensywnego przepływu paczek (magazynowanie i odbiór). Nowe meble pozwoliły uporządkować ofertę handlową i poprawić komfort pracy. Prace nad oświetleniem i nowa posadzka wnoszą ciepło i przytulność do tego dosłownie przemienionego miejsca!',
      en: 'Located in the Intermarché shopping arcade in Angers, Tabac Le Molière is part of a broader visual overhaul of the shopping centre planned for 2026. The redesign carried out with our team was necessary for several reasons. Firstly, to modernise the shop and offer a more diversified range. Secondly, to reclaim space for handling the high daily volume of parcels (storage and reception). New furniture clarified the commercial offering and improved working comfort. The lighting work and new flooring bring warmth and friendliness to this truly transformed space!',
      de: 'Der in der Einkaufsgalerie des Intermarché in Angers gelegene Tabac Le Molière fügt sich in die für 2026 geplante visuelle Neugestaltung des Einkaufszentrums ein. Die mit unserem Team durchgeführte Umgestaltung war aus mehreren Gründen notwendig. Zunächst, um den Laden zu modernisieren und ein vielfältigeres Angebot zu schaffen. Dann, um Platz für den hohen täglichen Paketdurchsatz (Lagerung und Empfang) zu gewinnen. Neue Möbel sorgen für ein klareres Handelsangebot und mehr Arbeitskomfort. Die Lichtgestaltung und ein neuer Boden bringen Wärme und Geselligkeit in diesen buchstäblich verwandelten Ort!',
      it: 'Situato nella galleria commerciale dell\'Intermarché di Angers, il Tabac Le Molière si inserisce nella logica di un restyling visivo del centro commerciale previsto per il 2026. Il riallestimento del punto vendita realizzato con il nostro team era necessario per diverse ragioni. Innanzitutto per modernizzare il negozio e proporre un\'offerta più diversificata. Poi per recuperare spazio per gestire l\'importante flusso quotidiano di pacchi (stoccaggio e ricezione). I nuovi arredi hanno chiarito l\'offerta commerciale e migliorato il comfort di lavoro. Il lavoro sull\'illuminazione e la posa di un nuovo pavimento portano calore e convivialità in questo spazio letteralmente trasformato!',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 16. Tabac le Disque Bleu — Saint-Nazaire (NEW — remote cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac le Disque Bleu — Saint-Nazaire',
    slug: 'tabac-disque-bleu-saint-nazaire',
    category: 'tobacco',
    order: 16,
    coverImageUrl:
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/09/44-ST-NAZAIRE-LE-DISQUE-BLEU-22.webp',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/09/44-ST-NAZAIRE-LE-DISQUE-BLEU-22.webp',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/09/44-ST-NAZAIRE-LE-DISQUE-BLEU-5.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/09/44-ST-NAZAIRE-LE-DISQUE-BLEU-27.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/09/44-ST-NAZAIRE-LE-DISQUE-BLEU-28.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/09/44-ST-NAZAIRE-LE-DISQUE-BLEU-34.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/09/44-ST-NAZAIRE-LE-DISQUE-BLEU-32.jpg',
    ],
    description: {
      fr: "Pour la réalisation de ce projet situé à Saint Nazaire, les propriétaires du Bar Tabac le Disque bleu ont fait confiance aux équipes de MDV Boutique. Le travail de nos architectes a permis d'augmenter la surface de vente pour installer des mobiliers dédiés à des activités diversifiées : vapotage, CBD, vitrines cadeaux et high tech. Côté professionnels, le confort n'a pas été oublié. Le linéaire tabac a été agrandi. Une nouvelle réserve a été créée ainsi qu'un bureau et un local technique. Enfin, pour harmoniser les lieux avec le nom et l'identité de l'établissement, les nouveaux meubles ont été assortis aux couleurs du point de vente dans une belle dominante de bleu.",
      pl: 'Właściciele Bar Tabac le Disque Bleu w Saint-Nazaire powierzyli realizację tego projektu naszemu zespołowi. Praca naszych architektów pozwoliła powiększyć powierzchnię sprzedażową i zainstalować meble dedykowane różnym aktywnościom: e-papierosy, CBD, witryny z upominkami i elektroniką. Nie zapomniano o komforcie personelu. Regał tytoniowy został powiększony. Powstał nowy magazyn, biuro i pomieszczenie techniczne. Aby zharmonizować wnętrze z nazwą i tożsamością lokalu, nowe meble dobrano w kolorystyce punktu sprzedaży — w pięknej dominancie niebieskiego.',
      en: 'For this project in Saint-Nazaire, the owners of Bar Tabac le Disque Bleu placed their trust in our team. Our architects\' work made it possible to increase the sales area and install furniture dedicated to diversified activities: vaping, CBD, gift displays and high tech. Staff comfort was not forgotten either. The tobacco shelving was enlarged. A new stockroom, office and utility room were created. Finally, to harmonise the space with the establishment\'s name and identity, the new furniture was matched to the shop\'s colour scheme in a striking dominant blue.',
      de: 'Für dieses Projekt in Saint-Nazaire vertrauten die Eigentümer des Bar Tabac le Disque Bleu unserem Team. Die Arbeit unserer Architekten ermöglichte es, die Verkaufsfläche zu vergrößern und Möbel für diverse Aktivitäten zu installieren: E-Zigaretten, CBD, Geschenkvitrinen und Hightech. Auch der Komfort für das Personal wurde berücksichtigt. Das Tabakregal wurde erweitert. Ein neues Lager, ein Büro und ein Technikraum wurden geschaffen. Um die Räumlichkeiten mit dem Namen und der Identität des Hauses in Einklang zu bringen, wurden die neuen Möbel in den Farben des Geschäfts gehalten — in einem schönen dominanten Blau.',
      it: 'Per la realizzazione di questo progetto a Saint-Nazaire, i proprietari del Bar Tabac le Disque Bleu si sono affidati al nostro team. Il lavoro dei nostri architetti ha permesso di aumentare la superficie di vendita e installare arredi dedicati ad attività diversificate: svapo, CBD, vetrine regalo e high tech. Non è stato dimenticato il comfort dei professionisti. Lo scaffale tabacchi è stato ampliato. Sono stati creati un nuovo magazzino, un ufficio e un locale tecnico. Infine, per armonizzare gli spazi con il nome e l\'identità del locale, i nuovi mobili sono stati coordinati con i colori del punto vendita in una bella dominante di blu.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 17. Tabac le Zinc — Le Rheu (NEW — remote cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac le Zinc — Le Rheu',
    slug: 'tabac-zinc-le-rheu',
    category: 'tobacco',
    order: 17,
    coverImageUrl:
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/07/35650-LE-RHEU-TABAC-LE-ZINC-APRES-TRAVAUX-1.jpg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/07/35650-LE-RHEU-TABAC-LE-ZINC-APRES-TRAVAUX-1.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/07/35650-LE-RHEU-TABAC-LE-ZINC-APRES-TRAVAUX-31.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/07/TABAC-LE-ZINC-LE-RHEU-Complement-photos-5.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/07/35650-LE-RHEU-TABAC-LE-ZINC-APRES-TRAVAUX-3-1.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/07/35650-LE-RHEU-TABAC-LE-ZINC-APRES-TRAVAUX-7-1.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/07/35650-LE-RHEU-TABAC-LE-ZINC-APRES-TRAVAUX-18-1.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/07/35650-LE-RHEU-TABAC-LE-ZINC-APRES-TRAVAUX-19.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/07/TABAC-LE-ZINC-LE-RHEU-Complement-photos-3.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/07/35650-LE-RHEU-TABAC-LE-ZINC-APRES-TRAVAUX-42-1.jpg',
    ],
    description: {
      fr: "Les propriétaires de ce Bar Tabac Snack ont fait confiance à MDV Boutique pour la rénovation complète de leur établissement. Le nouveau mobilier dédié à chaque activité permet de valoriser l'espace CBD, la presse, la vape ou encore les produits du terroir avec un large choix de vins. Derrière la nouvelle ligne de caisse, un linéaire tabac a été installé ainsi qu'un espace réservé au retrait de colis. Des changements en parfaite harmonie avec la décoration intérieure de style industriel, qui rend un vibrant hommage au monde de l'aviation.",
      pl: 'Właściciele tego Bar Tabac Snack powierzyli naszemu zespołowi kompleksową renowację lokalu. Nowe meble dedykowane poszczególnym aktywnościom pozwalają wyeksponować strefę CBD, prasę, e-papierosy oraz produkty regionalne z bogatym wyborem win. Za nową linią kasową zainstalowano regał tytoniowy oraz strefę odbioru paczek. Zmiany te harmonijnie wpisują się w industrialny wystrój wnętrza, oddający hołd światu lotnictwa.',
      en: 'The owners of this Bar Tabac Snack entrusted our team with the complete renovation of their establishment. New furniture dedicated to each activity showcases the CBD area, press, vaping and local products with a wide selection of wines. Behind the new checkout line, a tobacco shelving unit was installed along with a parcel collection point. These changes are in perfect harmony with the industrial-style interior, which pays a vibrant tribute to the world of aviation.',
      de: 'Die Eigentümer dieses Bar Tabac Snack vertrauten unserem Team die Komplettrenovierung ihres Lokals an. Neue, jeder Aktivität gewidmete Möbel setzen den CBD-Bereich, die Presse, E-Zigaretten und regionale Produkte mit einer großen Weinauswahl in Szene. Hinter der neuen Kassenzeile wurden ein Tabakregal und ein Paketabholbereich eingerichtet. Diese Veränderungen fügen sich perfekt in die industrielle Inneneinrichtung ein, die eine lebendige Hommage an die Welt der Luftfahrt darstellt.',
      it: 'I proprietari di questo Bar Tabac Snack hanno affidato al nostro team la ristrutturazione completa del locale. I nuovi arredi dedicati a ciascuna attività permettono di valorizzare l\'area CBD, l\'edicola, lo svapo e i prodotti del territorio con un\'ampia selezione di vini. Dietro la nuova linea casse è stato installato uno scaffale tabacchi e un\'area dedicata al ritiro pacchi. Cambiamenti in perfetta armonia con l\'arredamento in stile industriale, che rende un vibrante omaggio al mondo dell\'aviazione.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 18. Tabac le Café de la Gare — Gourin (NEW — remote cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac le Café de la Gare — Gourin',
    slug: 'tabac-cafe-gare-gourin',
    category: 'tobacco',
    order: 18,
    coverImageUrl:
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/04/56-CAFE-DE-LA-GARE-GOURIN-1.jpg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/04/56-CAFE-DE-LA-GARE-GOURIN-1.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/04/56-CAFE-DE-LA-GARE-GOURIN-5.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/04/56-CAFE-DE-LA-GARE-GOURIN-3.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/04/56-CAFE-DE-LA-GARE-GOURIN-25.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/04/56-CAFE-DE-LA-GARE-GOURIN-15.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/04/56-CAFE-DE-LA-GARE-GOURIN-12.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/04/56-CAFE-DE-LA-GARE-GOURIN-7.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/04/56-CAFE-DE-LA-GARE-GOURIN-10.jpg',
    ],
    description: {
      fr: "Quand le nouveau propriétaire de ce Tabac de Gourin dans le Morbihan (56) a repris l'établissement, il a décidé de le remettre au goût du jour. Pour ce projet, il a fait appel à MDV Boutique qui l'a accompagné dans la mise en place d'un mobilier parfaitement adapté à ses besoins. L'installation d'une nouvelle ligne de caisse et d'un nouveau linéaire tabac complète l'ensemble. Les activités vape, CBD et services sont désormais mises en valeur, facilitant l'accès aux produits et offrant une excellente visibilité de l'offre.",
      pl: 'Gdy nowy właściciel tego lokalu w Gourin, w departamencie Morbihan (56), przejął lokal, postanowił go unowocześnić. Do realizacji projektu zaangażował nasz zespół, który dobrał meble idealnie dopasowane do jego potrzeb. Nowa linia kasowa i nowy regał tytoniowy dopełniają całość. Strefy e-papierosów, CBD i usług są teraz odpowiednio wyeksponowane, co ułatwia dostęp do produktów i zapewnia doskonałą widoczność oferty.',
      en: 'When the new owner of this tobacconist in Gourin, Morbihan (56), took over the business, he decided to bring it up to date. He called upon our team, who guided him in selecting furniture perfectly suited to his needs. A new checkout line and tobacco shelving complete the setup. Vaping, CBD and service areas are now properly showcased, making products easy to access and the offering highly visible.',
      de: 'Als der neue Eigentümer dieses Tabakladens in Gourin, Morbihan (56), das Geschäft übernahm, beschloss er, es zu modernisieren. Er beauftragte unser Team, das ihn bei der Auswahl perfekt auf seine Bedürfnisse abgestimmter Möbel begleitete. Eine neue Kassenzeile und ein neues Tabakregal vervollständigen das Gesamtbild. Die Bereiche E-Zigaretten, CBD und Dienstleistungen sind nun angemessen präsentiert, was den Zugang zu den Produkten erleichtert und eine hervorragende Sichtbarkeit des Angebots gewährleistet.',
      it: 'Quando il nuovo proprietario di questo tabacchi a Gourin, nel Morbihan (56), ha rilevato l\'attività, ha deciso di riportarla al passo con i tempi. Si è rivolto al nostro team, che lo ha accompagnato nella scelta di arredi perfettamente adatti alle sue esigenze. L\'installazione di una nuova linea casse e di un nuovo scaffale tabacchi completa l\'insieme. Le attività svapo, CBD e servizi sono ora valorizzate, facilitando l\'accesso ai prodotti e offrendo un\'eccellente visibilità dell\'offerta.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 19. Tabac le Celtique — Vitré (NEW — remote cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac le Celtique — Vitré',
    slug: 'tabac-celtique-vitre',
    category: 'tobacco',
    order: 19,
    coverImageUrl:
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/04/35500-VITRE-TABAC-LE-CELTIQUE-MME-POULARD-33.jpg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/04/35500-VITRE-TABAC-LE-CELTIQUE-MME-POULARD-33.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/04/35500-VITRE-TABAC-LE-CELTIQUE-MME-POULARD-41.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/04/35500-VITRE-TABAC-LE-CELTIQUE-MME-POULARD-42.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/04/35500-VITRE-TABAC-LE-CELTIQUE-MME-POULARD-8.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/04/35500-VITRE-TABAC-LE-CELTIQUE-MME-POULARD-6.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/04/35500-VITRE-TABAC-LE-CELTIQUE-MME-POULARD-4.jpg',
    ],
    description: {
      fr: "Les propriétaires du tabac-presse le Celtique situé au cœur de Vitré (Ille-et-Vilaine) se sont lancé dans la rénovation totale de leur point de vente. L'objectif affiché était de renforcer leur dynamique commerciale avec le développement d'activités nouvelles et annexes. La vape, le CBD, les cadeaux, les boissons, les cigares ou encore la confiserie ont ainsi trouvé leur place avec l'installation de nouveaux mobiliers MDV Boutique. La presse conserve enfin un espace de choix dans ce lieu agréable qui a indéniablement gagné en clarté, en harmonie et en convivialité.",
      pl: 'Właściciele tabac-presse Le Celtique w sercu Vitré (Ille-et-Vilaine) zdecydowali się na całkowitą renowację swojego punktu sprzedaży. Celem było wzmocnienie dynamiki handlowej poprzez rozwój nowych i uzupełniających aktywności. E-papierosy, CBD, upominki, napoje, cygara i słodycze znalazły swoje miejsce dzięki instalacji nowych mebli. Prasa zachowuje uprzywilejowaną pozycję w tym przyjemnym lokalu, który niewątpliwie zyskał na przejrzystości, harmonii i przytulności.',
      en: 'The owners of the tabac-presse Le Celtique in the heart of Vitré (Ille-et-Vilaine) embarked on a total renovation of their shop. The stated goal was to strengthen their commercial momentum by developing new and complementary activities. Vaping, CBD, gifts, beverages, cigars and confectionery have all found their place thanks to the installation of new furniture. The press section retains a prime spot in this pleasant space that has undeniably gained in clarity, harmony and warmth.',
      de: 'Die Eigentümer des Tabac-Presse Le Celtique im Herzen von Vitré (Ille-et-Vilaine) haben sich an die Totalrenovierung ihres Geschäfts gewagt. Das erklärte Ziel war es, die Geschäftsdynamik durch die Entwicklung neuer und ergänzender Aktivitäten zu stärken. E-Zigaretten, CBD, Geschenke, Getränke, Zigarren und Süßwaren haben dank neuer Möbel ihren Platz gefunden. Die Presse behält einen erstklassigen Platz in diesem angenehmen Raum, der unbestreitbar an Klarheit, Harmonie und Geselligkeit gewonnen hat.',
      it: 'I proprietari del tabac-presse Le Celtique nel cuore di Vitré (Ille-et-Vilaine) hanno intrapreso la ristrutturazione totale del loro punto vendita. L\'obiettivo dichiarato era rafforzare la dinamica commerciale sviluppando attività nuove e complementari. Svapo, CBD, regali, bevande, sigari e dolciumi hanno trovato il loro posto grazie all\'installazione di nuovi arredi. L\'edicola conserva infine uno spazio privilegiato in questo luogo piacevole che ha innegabilmente guadagnato in chiarezza, armonia e convivialità.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 20. Tabac Presse FDJ — Le Pêchereau (NEW — remote cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac Presse FDJ — Le Pêchereau',
    slug: 'tabac-presse-fdj-pechereau',
    category: 'tobacco',
    order: 20,
    coverImageUrl:
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/03/IMG_2816.jpg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/03/IMG_2816.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/03/IMG_2814.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/03/IMG_2813.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/03/IMG_2815.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/03/IMG_2817.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/03/IMG_2825.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/03/IMG_2812.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/03/IMG_2809.jpg',
    ],
    description: {
      fr: "La propriétaire de ce Tabac presse situé au Pêchereau (36) a souhaité moderniser son établissement. Pour développer l'espace vape ainsi que la partie loisirs et services, un élan de fraîcheur était également attendu dans le point de vente afin d'attirer une nouvelle clientèle. MDV Boutique a réalisé la modernisation du point de vente dans l'optique de créer un espace plus chaleureux et accueillant, offrant ainsi une expérience client plus agréable. Les différents pôles créés ont également permis le développement de l'activité produits régionaux et ainsi proposer de nouveaux services à une clientèle fidèle.",
      pl: 'Właścicielka tego Tabac Presse w Le Pêchereau (36) postanowiła zmodernizować swój lokal. Aby rozwinąć strefę e-papierosów oraz część wypoczynkową i usługową, punkt sprzedaży potrzebował również odświeżenia w celu przyciągnięcia nowych klientów. Nasz zespół przeprowadził modernizację z myślą o stworzeniu cieplejszej i bardziej przyjaznej przestrzeni, oferującej klientom przyjemniejsze doświadczenie zakupowe. Wydzielone strefy tematyczne umożliwiły również rozwój sprzedaży produktów regionalnych i wprowadzenie nowych usług dla stałej klienteli.',
      en: 'The owner of this tobacconist-newsagent in Le Pêchereau (36) wanted to modernise her establishment. To develop the vaping area as well as the leisure and services section, a fresh look was also needed to attract new customers. Our team carried out the modernisation with the aim of creating a warmer, more welcoming space that offers a more pleasant customer experience. The various zones created also enabled the development of regional products and new services for loyal customers.',
      de: 'Die Inhaberin dieses Tabak-Pressegeschäfts in Le Pêchereau (36) wollte ihren Laden modernisieren. Um den E-Zigaretten-Bereich sowie den Freizeit- und Servicebereich auszubauen, war auch ein frischer Wind nötig, um neue Kunden anzulocken. Unser Team führte die Modernisierung mit dem Ziel durch, einen wärmeren und einladenderen Raum zu schaffen, der ein angenehmeres Kundenerlebnis bietet. Die verschiedenen geschaffenen Zonen ermöglichten auch die Entwicklung regionaler Produkte und neuer Dienstleistungen für die Stammkundschaft.',
      it: 'La proprietaria di questo Tabac Presse a Le Pêchereau (36) ha desiderato modernizzare il suo locale. Per sviluppare l\'area svapo e la sezione tempo libero e servizi, era necessaria anche una ventata di freschezza per attrarre nuova clientela. Il nostro team ha realizzato la modernizzazione con l\'obiettivo di creare uno spazio più caldo e accogliente, offrendo un\'esperienza cliente più piacevole. Le diverse aree tematiche create hanno permesso anche lo sviluppo dell\'attività di prodotti regionali e di nuovi servizi per la clientela affezionata.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 21. Tabac le Brazza — Privas (NEW — remote cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac le Brazza — Privas',
    slug: 'tabac-brazza-privas',
    category: 'tobacco',
    order: 21,
    coverImageUrl:
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-26-a-16.42.14_5fdb8897-scaled.jpg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-26-a-16.42.14_5fdb8897-scaled.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/IMG-20250226-WA0015-scaled.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/IMG-20250226-WA0011-scaled.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/IMG-20250226-WA0012-scaled.jpg',
    ],
    description: {
      fr: "Pour la propriétaire de ce Tabac presse situé à Privas (07), il était nécessaire de rénover la partie mobilier. Les produits à marge n'étant pas mis en valeur, le développement de la vape impossible et le linéaire tabac inadapté aux ventes actuelles, elle a décidé de faire appel aux services de MDV Boutique. MDV Boutique a ainsi repensé l'implantation du point de vente en proposant dès l'entrée et devant les caisses, l'ensemble des activités à marge (boissons, cadeaux et vape). La nouvelle ligne de caisse met désormais en avant les articles à achats d'impulsion comme la confiserie. De plus, le nouveau linéaire tabac permet d'intégrer les références qui étaient auparavant invisibles des clients.",
      pl: 'Właścicielka tego Tabac Presse w Privas (07) musiała odnowić wyposażenie meblowe. Produkty marżowe nie były odpowiednio wyeksponowane, rozwój e-papierosów był niemożliwy, a regał tytoniowy nie odpowiadał aktualnym potrzebom sprzedażowym. Nasz zespół przeprojektował układ punktu sprzedaży, umieszczając już przy wejściu i przed kasami wszystkie produkty marżowe (napoje, upominki i e-papierosy). Nowa linia kasowa eksponuje artykuły impulsowe, takie jak słodycze. Nowy regał tytoniowy pozwala na prezentację pozycji, które wcześniej były niewidoczne dla klientów.',
      en: 'For the owner of this tobacconist-newsagent in Privas (07), it was essential to renovate the furniture. High-margin products were not being showcased, vaping development was impossible, and the tobacco shelving was ill-suited to current sales patterns. Our team redesigned the shop layout, placing all high-margin activities (beverages, gifts and vaping) right at the entrance and in front of the tills. The new checkout line now highlights impulse-buy items such as confectionery. Additionally, the new tobacco shelving accommodates products that were previously hidden from customers.',
      de: 'Für die Inhaberin dieses Tabak-Pressegeschäfts in Privas (07) war eine Erneuerung der Möbel dringend nötig. Margenstarke Produkte wurden nicht in Szene gesetzt, die E-Zigaretten-Entwicklung war unmöglich und das Tabakregal entsprach nicht den aktuellen Verkaufsbedürfnissen. Unser Team hat die Raumaufteilung des Geschäfts neu konzipiert und alle margenstarken Aktivitäten (Getränke, Geschenke und E-Zigaretten) direkt am Eingang und vor den Kassen platziert. Die neue Kassenzeile rückt nun Impulskaufartikel wie Süßwaren in den Vordergrund. Zudem ermöglicht das neue Tabakregal die Aufnahme von Produkten, die zuvor für die Kunden unsichtbar waren.',
      it: 'Per la proprietaria di questo Tabac Presse a Privas (07) era necessario rinnovare gli arredi. I prodotti ad alto margine non erano valorizzati, lo sviluppo dello svapo era impossibile e lo scaffale tabacchi non era adatto alle vendite attuali. Il nostro team ha ripensato la disposizione del punto vendita, posizionando fin dall\'ingresso e davanti alle casse tutte le attività ad alto margine (bevande, regali e svapo). La nuova linea casse mette ora in evidenza gli articoli d\'impulso come i dolciumi. Inoltre, il nuovo scaffale tabacchi consente di esporre referenze che in precedenza erano invisibili ai clienti.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 22. Tabac le Pélican — Le Croisic (NEW — remote cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac le Pélican — Le Croisic',
    slug: 'tabac-pelican-le-croisic',
    category: 'tobacco',
    order: 22,
    coverImageUrl:
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20250211_153330-scaled.jpg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20250211_153330-scaled.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20250211_153821.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20250211_153918.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20250211_153859-rotated.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20250211_153838.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20250211_153345-scaled.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20250211_153903-rotated.jpg',
    ],
    description: {
      fr: "Bienvenue au Pélican ! Ce Tabac presse du Croisic (44), idéalement situé face au port, a entrepris des travaux de rénovation complets avec les équipes MDV Boutique. Totalement repensé du sol au plafond, Le Pélican a gagné un espace important dédié à la vente d'articles à marge. Pendant la durée des travaux, l'établissement a continué son activité dans un container temporaire installé derrière la boutique pour garder le lien avec ses clients et proposer un service continu. Une réorganisation complète des pôles a permis de gagner en confort de travail et de retrouver une parfaite lisibilité de l'offre. Ce nouvel agencement a également participé au développement des rayons vapotage et CBD, sans oublier une grande vitrine pour les cadeaux et les achats plaisirs. Enfin, une nouvelle ligne de caisse épurée invite désormais à l'achat de confiseries et de nouveautés accessibles à portée de main.",
      pl: 'Witamy w Le Pélican! Ten Tabac Presse w Le Croisic (44), idealnie położony naprzeciwko portu, przeszedł kompleksową renowację z udziałem naszego zespołu. Całkowicie przeprojektowany od podłogi po sufit, Le Pélican zyskał znaczącą przestrzeń dedykowaną sprzedaży produktów marżowych. Podczas prac lokal kontynuował działalność w tymczasowym kontenerze ustawionym za budynkiem, aby utrzymać kontakt z klientami i zapewnić ciągłość obsługi. Kompletna reorganizacja stref poprawiła komfort pracy i przywróciła doskonałą czytelność oferty. Nowa aranżacja przyczyniła się również do rozwoju działów e-papierosów i CBD, a także dużej witryny na upominki i zakupy dla przyjemności. Nowa, minimalistyczna linia kasowa zachęca do zakupu słodyczy i nowości na wyciągnięcie ręki.',
      en: 'Welcome to Le Pélican! This tobacconist-newsagent in Le Croisic (44), ideally located facing the harbour, underwent a complete renovation with our team. Totally reimagined from floor to ceiling, Le Pélican gained significant space dedicated to high-margin products. During the works, the business continued operating from a temporary container installed behind the shop to maintain customer relationships and ensure uninterrupted service. A complete reorganisation of zones improved working comfort and restored perfect readability of the product range. This new layout also boosted the vaping and CBD sections, along with a large display cabinet for gifts and impulse buys. A sleek new checkout line now invites customers to pick up confectionery and novelty items within arm\'s reach.',
      de: 'Willkommen im Le Pélican! Dieser Tabak-Presseladen in Le Croisic (44), ideal gelegen gegenüber dem Hafen, wurde mit unserem Team komplett renoviert. Von Grund auf neu gedacht, hat Le Pélican eine bedeutende Fläche für margenstarke Produkte gewonnen. Während der Bauarbeiten lief der Betrieb in einem temporären Container hinter dem Geschäft weiter, um den Kundenkontakt aufrechtzuerhalten und einen durchgehenden Service zu gewährleisten. Eine komplette Neuorganisation der Zonen verbesserte den Arbeitskomfort und stellte die perfekte Lesbarkeit des Angebots wieder her. Die neue Einrichtung förderte auch die Bereiche E-Zigaretten und CBD sowie eine große Vitrine für Geschenke und Lustk äufe. Eine neue, schlichte Kassenzeile lädt nun zum Griff nach Süßwaren und Neuheiten in Reichweite ein.',
      it: 'Benvenuti al Pélican! Questa tabaccheria-edicola a Le Croisic (44), idealmente situata di fronte al porto, ha intrapreso una ristrutturazione completa con il nostro team. Totalmente ripensato dal pavimento al soffitto, Le Pélican ha guadagnato uno spazio importante dedicato alla vendita di articoli ad alto margine. Durante i lavori, l\'attività è proseguita in un container temporaneo installato dietro il negozio per mantenere il legame con i clienti e garantire un servizio continuativo. Una riorganizzazione completa delle aree ha migliorato il comfort di lavoro e restituito una perfetta leggibilità dell\'offerta. Il nuovo allestimento ha anche favorito lo sviluppo dei reparti svapo e CBD, oltre a una grande vetrina per regali e acquisti di piacere. Infine, una nuova linea casse dal design pulito invita all\'acquisto di dolciumi e novità a portata di mano.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 23. Tabac le Richelieu — Fontaines-sur-Saône (NEW — remote cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac le Richelieu — Fontaines-sur-Saône',
    slug: 'tabac-richelieu-fontaines-sur-saone',
    category: 'tobacco',
    order: 23,
    coverImageUrl:
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20240404_122804095_iOS-scaled.jpg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20240404_122804095_iOS-scaled.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20240404_122813873_iOS-scaled.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20240404_122739940_iOS-scaled.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20240404_122736743_iOS-scaled.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20240404_122733837_iOS-scaled.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20240404_122728561_iOS-scaled.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20240404_122723707_iOS-scaled.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20240404_122810286_iOS-scaled.jpg',
    ],
    description: {
      fr: "Dès sa reprise, le nouveau propriétaire du Tabac le Richelieu à Fontaines-sur-Saône (69) était convaincu de la nécessité de repenser l'agencement de son point de vente. Il souhaitait créer un espace plus accueillant et convivial mais aussi offrir à sa clientèle une expérience d'achat plus moderne et agréable. De plus, il voulait proposer un environement clair et attrayant, afin de gagner de nouveaux clients et de fidéliser les habitués. Il a fait appel à MDV Boutique pour son projet de rénovation : l'installation de nouveaux mobiliers et d'un coin café a été pour lui l'opportunité de moderniser ses équipements et d'optimiser à la fois le confort et l'efficacité de son travail au quotidien. Cette transformation réussie a permis de redonner un nouveau souffle à son commerce et de répondre aux attentes de sa clientèle.",
      pl: 'Od momentu przejęcia lokalu nowy właściciel Tabac le Richelieu w Fontaines-sur-Saône (69) był przekonany o konieczności przeprojektowania aranżacji sklepu. Chciał stworzyć bardziej przytulną i przyjazną przestrzeń, a także zapewnić klientom nowoczesne i przyjemne doświadczenie zakupowe. Zależało mu również na jasnym i atrakcyjnym otoczeniu, które przyciągnie nowych klientów i wzmocni lojalność stałych bywalców. Do projektu renowacji zaangażował nasz zespół — instalacja nowych mebli i kącika kawowego stała się okazją do modernizacji wyposażenia oraz optymalizacji komfortu i efektywności codziennej pracy. Ta udana metamorfoza tchnęła nowe życie w jego działalność i sprostała oczekiwaniom klientów.',
      en: 'From the moment he took over, the new owner of Tabac le Richelieu in Fontaines-sur-Saône (69) was convinced of the need to rethink his shop layout. He wanted to create a more welcoming and friendly space, while also offering customers a more modern and pleasant shopping experience. He also sought a clear, attractive environment to win new customers and retain regulars. He turned to our team for his renovation project: the installation of new furniture and a coffee corner gave him the opportunity to modernise his equipment and optimise both comfort and efficiency in his daily work. This successful transformation breathed new life into his business and met his customers\' expectations.',
      de: 'Von der Übernahme an war der neue Inhaber des Tabac le Richelieu in Fontaines-sur-Saône (69) von der Notwendigkeit überzeugt, die Einrichtung seines Geschäfts neu zu denken. Er wollte einen einladenderen und geselligeren Raum schaffen und seiner Kundschaft ein moderneres und angenehmeres Einkaufserlebnis bieten. Zudem strebte er ein klares und ansprechendes Ambiente an, um neue Kunden zu gewinnen und Stammkunden zu binden. Er wandte sich für sein Renovierungsprojekt an unser Team: Die Installation neuer Möbel und einer Kaffee-Ecke bot ihm die Gelegenheit, seine Ausstattung zu modernisieren und sowohl Komfort als auch Effizienz seiner täglichen Arbeit zu optimieren. Diese gelungene Verwandlung verlieh seinem Geschäft neuen Schwung und erfüllte die Erwartungen seiner Kundschaft.',
      it: 'Fin dal momento del rilevamento, il nuovo proprietario del Tabac le Richelieu a Fontaines-sur-Saône (69) era convinto della necessità di ripensare la disposizione del suo negozio. Desiderava creare uno spazio più accogliente e conviviale, offrendo al contempo alla clientela un\'esperienza d\'acquisto più moderna e piacevole. Voleva inoltre proporre un ambiente chiaro e attraente per conquistare nuovi clienti e fidelizzare gli abituali. Si è rivolto al nostro team per il progetto di ristrutturazione: l\'installazione di nuovi arredi e di un angolo caffè è stata l\'opportunità per modernizzare le attrezzature e ottimizzare comfort ed efficienza nel lavoro quotidiano. Questa trasformazione riuscita ha dato nuova linfa alla sua attività e risposto alle aspettative della clientela.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 24. Tabac le Brazza — Outreau (NEW — remote cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac le Brazza — Outreau',
    slug: 'tabac-brazza-outreau',
    category: 'tobacco',
    order: 24,
    coverImageUrl:
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20250129_100005-scaled.jpg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20250129_100005-scaled.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20250129_095948-scaled.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20250129_094156-scaled.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20250129_101133-scaled.jpg',
    ],
    description: {
      fr: "Décidée à lancer sa propre affaire, la nouvelle propriétaire du Tabac le Brazza à Outreau (62) a opté pour MDV Boutique pour son projet de rénovation. Après quelques mois, elle a voulu modifier ce Bar Tabac Friterie en valorisant les produits à marge dès l'entrée. Par ailleurs, elle souhaitait mettre l'accent sur les produits du vapotage et sur le CBD. Lors de ce nouveau chantier, le sol a été changé et de nouveaux meubles installés. Enfin, l'ancienne cuisine a été enlevée, laissant place à un espace accru pour le confort de ces clients avec de nouvelles tables ainsi qu'une superbe terrasse.",
      pl: 'Nowa właścicielka Tabac le Brazza w Outreau (62), zdecydowana na prowadzenie własnego biznesu, wybrała nasz zespół do realizacji projektu renowacji. Po kilku miesiącach działalności postanowiła przekształcić ten Bar Tabac z frytownią, eksponując produkty marżowe już od wejścia. Chciała również położyć nacisk na e-papierosy i CBD. Podczas tych prac wymieniono podłogę i zainstalowano nowe meble. Dawna kuchnia została usunięta, ustępując miejsca powiększonej strefie komfortu dla klientów z nowymi stolikami oraz pięknym tarasem.',
      en: 'Determined to launch her own business, the new owner of Tabac le Brazza in Outreau (62) chose our team for her renovation project. After a few months, she wanted to transform this bar-tabac-chip shop by showcasing high-margin products right from the entrance. She also wanted to emphasise vaping products and CBD. During this renovation, the flooring was replaced and new furniture installed. The former kitchen was removed, making way for an expanded customer area with new tables and a superb terrace.',
      de: 'Entschlossen, ihr eigenes Geschäft aufzubauen, wählte die neue Inhaberin des Tabac le Brazza in Outreau (62) unser Team für ihr Renovierungsprojekt. Nach einigen Monaten wollte sie dieses Bar-Tabac mit Imbiss umgestalten und margenstarke Produkte direkt am Eingang hervorheben. Außerdem wollte sie den Schwerpunkt auf E-Zigaretten und CBD legen. Bei dieser Renovierung wurde der Boden erneuert und neue Möbel installiert. Die ehemalige Küche wurde entfernt und machte Platz für einen erweiterten Kundenbereich mit neuen Tischen und einer wunderschönen Terrasse.',
      it: 'Decisa a lanciare la propria attività, la nuova proprietaria del Tabac le Brazza a Outreau (62) ha scelto il nostro team per il progetto di ristrutturazione. Dopo alcuni mesi, ha voluto trasformare questo Bar Tabac con friggitoria, valorizzando i prodotti ad alto margine fin dall\'ingresso. Desiderava inoltre puntare sui prodotti dello svapo e sul CBD. Durante i lavori, il pavimento è stato sostituito e sono stati installati nuovi mobili. La vecchia cucina è stata rimossa, lasciando spazio a un\'area più ampia per il comfort dei clienti con nuovi tavoli e una splendida terrazza.',
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // 25. Tabac la Civape — Corbie (NEW — remote cover)
  // ──────────────────────────────────────────────────────────────────────
  {
    title: 'Tabac la Civape — Corbie',
    slug: 'tabac-civape-corbie',
    category: 'tobacco',
    order: 25,
    coverImageUrl:
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20250122_092336-scaled.jpg',
    galleryUrls: [
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20250122_092336-scaled.jpg',
      'https://i0.wp.com/mdv-boutique.com/wp-content/uploads/2025/02/20241128_082442-scaled.jpg',
    ],
    description: {
      fr: "Le propriétaire du Tabac la Civape à Corbie (80) a décidé de relever un défi ambitieux en transformant son bar-tabac en une civette spécialisée dans le vapotage. Après avoir étudié le commerce et analysé le potentiel du marché de la vape, il a pris contact avec MDV Boutique pour l'accompagner dans la concrétisation de son projet. La rénovation de ce bel espace a permis de moderniser le linéaire tabac mais aussi de valoriser les activités Presse, vapotage, CBD et cadeaux. Fort de ce succès, notre client prévoit déjà d'agrandir son espace dans un futur proche !",
      pl: 'Właściciel Tabac la Civape w Corbie (80) podjął ambitne wyzwanie, przekształcając swój bar-tabac w specjalistyczny sklep tytoniowy z naciskiem na e-papierosy. Po przeanalizowaniu rynku i potencjału branży vape skontaktował się z naszym zespołem, aby urzeczywistnić swój projekt. Renowacja tej pięknej przestrzeni pozwoliła zmodernizować regał tytoniowy, a także wyeksponować strefy prasy, e-papierosów, CBD i upominków. Zachęcony sukcesem, nasz klient planuje już powiększenie przestrzeni w niedalekiej przyszłości!',
      en: 'The owner of Tabac la Civape in Corbie (80) took on an ambitious challenge by transforming his bar-tabac into a specialist tobacconist focused on vaping. After studying the market and analysing the vaping sector\'s potential, he contacted our team to help bring his project to life. The renovation of this fine space modernised the tobacco shelving while also showcasing the press, vaping, CBD and gift sections. Buoyed by this success, the client is already planning to expand his space in the near future!',
      de: 'Der Inhaber des Tabac la Civape in Corbie (80) nahm eine ehrgeizige Herausforderung an und verwandelte sein Bar-Tabac in ein auf E-Zigaretten spezialisiertes Fachgeschäft. Nach einer Marktanalyse und Bewertung des Potenzials der E-Zigaretten-Branche wandte er sich an unser Team, um sein Projekt zu verwirklichen. Die Renovierung dieses schönen Raums ermöglichte es, das Tabakregal zu modernisieren und die Bereiche Presse, E-Zigaretten, CBD und Geschenke in Szene zu setzen. Ermutigt durch diesen Erfolg plant der Kunde bereits eine Erweiterung seines Geschäfts in naher Zukunft!',
      it: 'Il proprietario del Tabac la Civape a Corbie (80) ha deciso di raccogliere una sfida ambiziosa, trasformando il suo bar-tabacchi in una civette specializzata nello svapo. Dopo aver studiato il mercato e analizzato il potenziale del settore vaping, ha contattato il nostro team per accompagnarlo nella realizzazione del suo progetto. La ristrutturazione di questo bell\'spazio ha permesso di modernizzare lo scaffale tabacchi e di valorizzare le attività edicola, svapo, CBD e regali. Forte di questo successo, il nostro cliente prevede già di ampliare il suo spazio nel prossimo futuro!',
    },
  },
];
