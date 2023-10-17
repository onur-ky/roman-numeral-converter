const numeralMapping = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
    5000: 'V\u{305}',
    10000: 'X\u{305}',
    50000: 'L\u{305}',
    100000: 'C\u{305}',
    500000: 'D\u{305}',
    1000000: 'M\u{305}',
  }

export default function toRoman(numeral){
  let remainder = numeral;
  let romanNumeral = ""
  const orderOfMagnitude = Math.floor(Math.log10(numeral));
  for (let i=orderOfMagnitude; i>=0; i--){
    const quoient = Math.floor(remainder / 10**i);
    remainder = remainder % (10**i);
    console.log(i, remainder, quoient);
    if (quoient <= 3){
      const romanNumeralPart = numeralMapping[10**i].repeat(quoient);
      romanNumeral += romanNumeralPart;
    } else if (quoient <= 5) {
      var romanNumeralPart = `${numeralMapping[i===3 ? 1 : 10**i].repeat(5-quoient)}${i===3 ? "\u{305}" : ""}${numeralMapping[5*(10**i)]}`
      romanNumeral += romanNumeralPart;
      console.log(romanNumeralPart, 10**i);
    } else if (quoient <= 8) {
      const romanNumeralPart = `${numeralMapping[5*(10**i)]}${numeralMapping[10**i].repeat(quoient-5)}`
      romanNumeral += romanNumeralPart;
    } else {
      const romanNumeralPart = `${numeralMapping[i===3 ? 1 : 10**i].repeat(10-quoient)}${i===3 ? "\u{305}" : ""}${numeralMapping[10**(i+1)]}`
      romanNumeral += romanNumeralPart;
    }
    
  }
  console.log(romanNumeral);
  return romanNumeral;
}

function validateRomanInput(input){
  
}