const goodRealNews = [
  {
    text: "Global oil rates plummet",
    mil: 8,
    ent: 0,
    pol: 5,
    cul: -3,
    eco: 10,
    _id: "RG1",
    article: "Real news article text placeholder",
  },
  {
    text: "Stimulus package announced, markets rally",
    mil: 5,
    ent: 2,
    pol: 3,
    cul: 4,
    eco: 14,
    _id: "RG2",
    article: "Real news article text placeholder",
  },
  {
    text: "Breakthrough in Hydrogen fusion technology",
    mil: 4,
    ent: 0,
    pol: 5,
    cul: 0,
    eco: 10,
    _id: "RG3",
    article: "Real news article text placeholder",
  },
  {
    text: "Miracle drug to cure AIDS developed",
    mil: 0,
    ent: 5,
    pol: 8,
    cul: 5,
    eco: 5,
    _id: "RG4",
    article: "Real news article text placeholder",
  },
  {
    text: "Global literacy rates reach all time high",
    mil: -2,
    ent: 3,
    pol: 8,
    cul: 8,
    eco: 2,
    _id: "RG5",
    article: "Real news article text placeholder",
  },
  {
    text: "Anti-vaxxers outlawed",
    mil: 1,
    ent: 1,
    pol: 4,
    cul: 10,
    eco: 5,
    _id: "RG6",
    article: "Real news article text placeholder",
  },
  {
    text: "China releases 120 politcal prisoners",
    mil: -1,
    ent: 0,
    pol: 8,
    cul: 5,
    eco: 0,
    _id: "RG7",
    article: "Real news article text placeholder",
  },
];

const neutralRealNews = [
  {
    text: "Stalemate at Middle Eastern Front",
    mil: 3,
    ent: 0,
    pol: -5,
    cul: -2,
    eco: -3,
    _id: "RN1",
  },
  {
    text: "Sweden wins global carpenter Olympics",
    mil: 0,
    ent: 2,
    pol: 0,
    cul: 3,
    eco: 0,
    _id: "RN2",
  },
  {
    text: "British Prime Minister meets Brazilian Envoy, talks Trade",
    mil: 0,
    ent: 0,
    pol: 3,
    cul: 2,
    eco: 4,
    _id: "RN3",
  },
  {
    text: "Manchester United wins EFL League 1!!!",
    mil: 0,
    ent: 3,
    pol: 0,
    cul: 2,
    eco: 1,
    _id: "RN4",
  },
  {
    text: "Elections held sucessfully in Brazil",
    mil: 0,
    ent: 0,
    pol: 5,
    cul: 2,
    eco: 3,
    _id: "RN5",
  },
  {
    text: "UN Security Council adds India as permanant member",
    mil: 5,
    ent: 0,
    pol: 5,
    cul: 0,
    eco: 3,
    _id: "RN6",
  },
  {
    text: "Migrant crisis in Europe continues...",
    mil: 5,
    ent: 0,
    pol: -5,
    cul: -10,
    eco: -6,
    _id: "RN7",
  },
  {
    text: "American Weapon manufacturers show record losses, blame the hippies",
    mil: -8,
    ent: 3,
    pol: 3,
    cul: -0,
    eco: -5,
    _id: "RN8",
  },
  {
    text: "Veteran Actor passes away",
    mil: 0,
    ent: -8,
    pol: 0,
    cul: -2,
    eco: 0,
    _id: "RN9",
  },
  {
    text: "Treaty Signed between East and West Korea",
    mil: -5,
    ent: 0,
    pol: 5,
    cul: 2,
    eco: 5,
    _id: "RN10",
  },
];

export function getGoodRealNews() {
  return goodRealNews;
}

export function getNeutralRealNews() {
  return neutralRealNews;
}
