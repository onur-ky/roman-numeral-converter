<script setup>
import { reactive } from 'vue'
import toRoman from './utils/roman.js'
import { validateArabicInput } from './utils/arabic.js'


const error = reactive({
  romanError: "",
  romanErrorClass: "d-none",
  arabicError:"",
  arabicErrorClass : "d-none"
})

const boundNumeralDisplay = reactive({
  roman: null,
  arabic: null
})

function handleInputArabic(event){
  const input = event.target.value;
  const validatedInput = validateArabicInput(input);
  if (validatedInput.isValid){
    const numeral = (input === "") ? null : Number(input);
    if (numeral === 0){
      boundNumeralDisplay.roman = "NULLA";
      error.arabicError = "There is no roman numeral for 0. \"Nulla\" is the latin word for zero.";
      error.arabicErrorClass = "text-warning";
    } else {
      console.log(toRoman(numeral));
      boundNumeralDisplay.roman = toRoman(numeral);
    }
  } else {
    boundNumeralDisplay.roman = "";
    error.arabicError = validatedInput.error;
    error.arabicErrorClass = "text-warning";
  }
}

function isValidRomanInput(input){
  
}

function handleInputRoman(event){
  
}
</script>

<template>
  <div>
    <input placeholder="Enter Arabic Numerals"
    @input="handleInputArabic">
    <div :class="error.arabicErrorClass">{{error.arabicError}}</div>

    <input placeholder="Enter Roman Numerals"
    @input="handleInputRoman"
    :value="boundNumeralDisplay.roman">
  </div>
</template>

<style scoped>
input{
  font-family: 'Noto Sans', sans-serif;
  height: 100px;
  font-size: 60px;
  background-color: var(--color-background);
  border: none;
  border-bottom: 2px white solid;
  color: white;
}

input:focus{
  background-color: rgb(50, 52, 61);
}
</style>