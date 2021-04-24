const welcomeText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc magna, facilisis ac dictum in, vehicula et dolor. Sed ullamcorper est vitae pharetra vestibulum. Nunc eu lorem faucibus, suscipit dui at, pretium mauris. Quisque id lacus vitae massa lacinia aliquam tempus porta metus. Aliquam erat volutpat. Nullam molestie a purus ac commodo. Donec id risus elit. Proin vitae orci nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed facilisis magna ornare velit malesuada dapibus. Phasellus porttitor lorem non neque pulvinar mollis. Curabitur sit amet aliquet ante, a facilisis massa. Praesent sollicitudin arcu sed neque venenatis feugiat. Sed in sem malesuada, ultrices mauris vel, dictum felis. Pellentesque scelerisque, odio faucibus suscipit vestibulum, nisl nulla euismod enim, vitae tempus elit lectus non arcu. Etiam posuere purus eu dolor suscipit dictum.
Aliquam id lorem risus. In risus ante, suscipit ac dictum eget, porta vulputate felis. Etiam a risus mattis, dictum justo sollicitudin, pretium augue. Sed sodales sapien dolor, vel rhoncus odio lacinia at. Cras a porta purus. Cras ex quam, tincidunt eget vulputate id, lacinia at ex. Sed auctor sem eget luctus ultricies. Proin libero urna, sagittis in sollicitudin nec, condimentum auctor ante. Morbi nibh mi, tincidunt ac sapien vel, venenatis varius urna. Sed condimentum nibh id lacus tempor mollis ac eu purus. Sed in felis nec mi consectetur aliquam non et felis.
Aenean auctor leo dui, quis suscipit massa condimentum sed. Vestibulum tempor, quam id tristique dictum, ligula ante varius purus, ac ullamcorper dui justo eu. `;

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
