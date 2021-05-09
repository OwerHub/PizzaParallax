const welcomeText = `
A ParallaxPizza  egy CodeCool-os versenykiírásra készült, a front-end kurzus elvégzése után. Kihasználva, hogy az idő itt nem jelentett pénzt, az  oldal tuljajdnképpen  pár megabájt parasztvakítás. Programozása közben tucatjával jöttek az ötletek, poénok, és a "vajon mi lenne, ha" kezdetű dolgok. A kódban van frontend, backend, weekend, de a program fel van készítve backend néllküli működésre is (nyilván ez esetben nem menti el az adatokat).  A látványelemek nagy részét meg lehetett  csinálni előre megírt könyvtárakkal, de hangsúly itt a tapasztalatszerzésen volt, így jobbára sajátm React , JS és CSS  kódok  futnak. (e sorok írásakor tervben van egy 3rd party feltelepítése a kártyákhoz,de még nem történt meg). A demo-hoz tervben van egy használatra vonatkozó, és egy kissé szakmaibb leírás, ha nem találod, akkor folyamatban. Ha filéket böngészve a beírt kuncsaft- és pizzanevek alapján arra jutsz, nem vagyok teljesen normális, így vasárnap 30+ óra ébrenlét után úgy vélem, nincs alapom vitatkozni Veled. Ha elkészíted a pizzákat, a Hannibal-hoz ne népszámláló máját használd. Büntetik.   `;

const pizzaList = [
  {
    name: "Marharépa",
    topping: ["paradicsomos alap", "sajt", "paradicsomszelet"],
    price: {
      small: 1500,
      medium: 2200,
      big: 3000,
    },
  },

  {
    name: "Sonkás",
    topping: ["paradicsomos alap", "sonka", "sajt", "paradicsomszelet"],
    price: {
      small: 1700,
      medium: 2500,
      big: 3200,
    },
  },

  {
    name: "Sombrero",
    topping: [
      "paradicsomos alap",
      "BBQ-szósz",
      "csirkehús",
      "lilahagyma",
      "kukorica",
      "sajt",
    ],
    price: {
      small: 1500,
      medium: 2200,
      big: 3000,
    },
  },

  {
    name: "Tenger gyümölcse",
    topping: ["paradicsomos alap", "polip", "tintahal", "rák", "kagyló", "sajt"],
    price: {
      small: 1500,
      medium: 2200,
      big: 3000,
    },
  },

  {
    name: "Venus",
    topping: [
      "mustáros-tejfölös alap",
      "bacon",
      "kolbász",
      "póréhagyma",
      "kukorica",
      "sajt",
    ],
    price: {
      small: 1500,
      medium: 2200,
      big: 3000,
    },
  },

  {
    name: "Disznóvágás",
    topping: [
      "paradicsomos alap",
      "bacon",
      "sonka",
      "tarja",
      "hagyma",
      "zölpaprika",
      "füöstölt sajt",
    ],
    price: {
      small: 1500,
      medium: 2200,
      big: 3000,
    },
  },

  {
    name: "Július 4",
    topping: [
      "paradicsomos alap",
      "BBQ-szósz",
      "csirkehús",
      "marhahús",
      "kagyló",
      "füstölt sajt",
    ],
    price: {
      small: 1500,
      medium: 2200,
      big: 3000,
    },
  },

  {
    name: "McDöglesz",
    topping: [
      "paradicsomos-csípős alap",
      "csípős szalámi",
      "darált marhahús",
      "pepperoni",
      "ghost chili,",
      "sajt",
    ],
    price: {
      small: 1500,
      medium: 2200,
      big: 3000,
    },
  },

  {
    name: "Piedone",
    topping: [
      "paradicsomos-csípős alap",
      "hagymás bab",
      "kolbász",
      "pepperoni",
      "füstölt sajt",
    ],
    price: {
      small: 1500,
      medium: 2200,
      big: 3000,
    },
  },

  {
    name: "McDöglesz",
    topping: [
      "paradicsomos-csípős alap",
      "csípős szalámi",
      "darált marhahús",
      "pepperoni",
      "ghost chili,",
      "sajt",
    ],
    price: {
      small: 1500,
      medium: 2200,
      big: 3000,
    },
  },

  {
    name: "Csábító Hús",
    topping: [
      "paradicsomos-csípős alap",
      "sonka",
      "szalámi",
      "bacon",
      "darált csirke",
      "sajt",
    ],
    price: {
      small: 1500,
      medium: 2200,
      big: 3000,
    },
  },

  {
    name: "Hófehérke",
    topping: [
      "Tejfölös-fokhagymás alap",
      "csirkeragu",
      "alma",
      "olívabogyó",
      "sajt",
    ],
    price: {
      small: 1500,
      medium: 2200,
      big: 3000,
    },
  },
];

export { welcomeText, pizzaList };
