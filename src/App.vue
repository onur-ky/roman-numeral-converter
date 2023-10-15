<script setup>
import { reactive } from 'vue'
var arabic = null;

const numeralMapping = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
}

const numeralMappingReverse = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}


const roman = reactive({
  value: null
});

function toRoman(event){
  const numeral = Number(event.target.value);
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
  roman.value = romanNumeral;
}

function toArabic(event){
  console.log(event.target.value);
  for (const e of event.target.value){
    console.log(e);
  }
}
</script>

<template>
  <div>
    <input placeholder="Enter Arabic Numerals"
    @input="toRoman">
    <input placeholder="Enter Roman Numerals" 
    :value="roman.value"
    @input="toArabic">
  </div>
</template>

<style scoped>

</style>

190
remainder: 1, quoient: 1 = C
remainder: 0, quoient: 9 = C