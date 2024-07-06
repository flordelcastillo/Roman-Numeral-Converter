function convertToRoman(num) {
  let numeroRomano = '';

  const valores = [
      1000, 900, 500, 400,
      100, 90, 50, 40,
      10, 9, 5, 4,
      1
  ];
  const simbolos = [
      "M", "CM", "D", "CD",
      "C", "XC", "L", "XL",
      "X", "IX", "V", "IV",
      "I"
  ];

  for (let i = 0; i < valores.length; i++) {
      while (num >= valores[i]) {
          numeroRomano += simbolos[i];
          num -= valores[i];
      }
  }

  return numeroRomano;
}


convertToRoman(36); //XXXVI
