const zucchine = [
  { type: "Napoletana", weight: 10, length: 4 },
  { type: "Trombetta", weight: 13, length: 16 },
  { type: "Napoletana", weight: 4, length: 23 },
  { type: "Trombetta", weight: 11, length: 6 },
  { type: "Napoletana", weight: 2, length: 17 },
  { type: "Romana", weight: 5, length: 10 },
  { type: "Romana", weight: 7, length: 9 },
  { type: "Trombetta", weight: 3, length: 8 },
  { type: "Calabrese", weight: 6, length: 27 },
  { type: "Calabrese", weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

// Versione con metodo filter

const result = separaZucchine(zucchine);

function separaZucchine(zucchine) {
  const zucchineLunghe = zucchine.filter(function (zucchina) {
    return zucchina.length >= 15;
  });

  const zucchineCorte = zucchine.filter(function (zucchina) {
    return zucchina.length < 15;
  });

  return {
    zucchineLunghe: zucchineLunghe,
    zucchineCorte: zucchineCorte,
  };
}
console.log("Zucchine lunghe:", result.zucchineLunghe);
console.log("Zucchine corte:", result.zucchineCorte);

console.log("=============");

// versione con il ciclo for

const product = lunghezzaZucchine(zucchine);

function lunghezzaZucchine(zucchine) {
  const zucchLunghe = [];
  const zucchCorte = [];

  for (let i = 0; i < zucchine.length; i++) {
    if (zucchine[i].length >= 15) {
      zucchLunghe.push(zucchine[i]);
    } else {
      zucchCorte.push(zucchine[i]);
    }
  }

  return {
    zucchLunghe: zucchLunghe,
    zucchCorte: zucchCorte,
  };
}

console.log("Zucchine lunghe (>= 15 cm):", product.zucchLunghe);
console.log("Zucchine corte (< 15 cm):", product.zucchCorte);


