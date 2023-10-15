const numeralMapping = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  }

function toRomanBelow3999(number){
    let remainder = number;
    let romanNumeral = ""
    const orderOfMagnitude = Math.floor(Math.log10(number));
    for (let i=orderOfMagnitude; i>=0; i--){
      const quoient = Math.floor(remainder / 10**i);
      remainder = remainder % (10**i);
  
      if (quoient <= 3){
        const romanNumeralPart = numeralMapping[10**i].repeat(quoient);
        romanNumeral += romanNumeralPart;
      } else if (quoient <= 5) {
        const romanNumeralPart = `${numeralMapping[10**i].repeat(5-quoient)}${numeralMapping[5*(10**i)]}`
        romanNumeral += romanNumeralPart;
      } else if (quoient <= 8) {
        const romanNumeralPart = `${numeralMapping[5*(10**i)]}${numeralMapping[10**i].repeat(quoient-5)}`
        romanNumeral += romanNumeralPart;
      } else {
        const romanNumeralPart = `${numeralMapping[10**i].repeat(10-quoient)}${numeralMapping[10**(i+1)]}`
        romanNumeral += romanNumeralPart;
      }
    }
    return romanNumeral;
  }

export default function toRoman(numeral){
    if (numeral >= 4000){
      var above3999Part = Math.floor(numeral / 1000);
      var above3999PartRoman = ""
      for (const character of toRomanBelow3999(above3999Part)){
        above3999PartRoman += `${character}\u{305}`
      }
    } else {
      var above3999Part = 0;
      var above3999PartRoman = ""
    }
  
    const below3999Part = numeral - above3999Part*1000;
    const below3999PartRoman = toRomanBelow3999(below3999Part);
    return (above3999PartRoman + below3999PartRoman);
  }