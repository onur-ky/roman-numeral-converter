<script setup>
import { reactive } from 'vue'
import toRoman from './utils/toRoman.js'
import { isNumeric } from './utils/validation.js'
var arabic = null;

const numeralMappingReverse = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

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

function isValidArabicInput(input){
  if (!isNumeric(input) && input !== ""){
    error.arabicError = "Input contains non-numeric characters";
    error.arabicErrorClass = "text-danger";
    return false;
  }

  if (Number(input) > 4000000){
    error.arabicError = "Numbers greater than 3999999 can't be expressed in roman numerals";
    error.arabicErrorClass = "text-danger";
    return false;
  }

  if (Number(input) < 0){
    error.arabicError = "Negative numbers can't be expressed in roman numerals";
    error.arabicErrorClass = "text-danger";
    return false;
  }

  error.arabicError = "";
  error.arabicErrorClass = "d-none";
  return true;
}

function handleInputArabic(event){
  const input = event.target.value;
  if (isValidArabicInput(input)){
    const numeral = (input === "") ? null : Number(input);
    if (numeral === 0){
      console.log(input)
      boundNumeralDisplay.roman = "NULLA";
      error.arabicError = "There is no roman numeral for 0. \"NULLA\" is the latin word for zero.";
      error.arabicErrorClass = "text-warning";
    } else {
      boundNumeralDisplay.roman = toRoman(numeral);
    }
  } else {
    boundNumeralDisplay.roman = "";
  }
}

function toArabic(event){
}
</script>

<template>
  <div>
    <input placeholder="Enter Arabic Numerals"
    @input="handleInputArabic">
    <div :class="error.arabicErrorClass">{{error.arabicError}}</div>
    <input placeholder="Enter Roman Numerals" 
    :value="boundNumeralDisplay.roman">
  </div>
</template>

<style scoped>
input{
  font-family: 'Noto Sans', sans-serif;
  height: 200px;
  font-size: 100px;
  background-color: var(--color-background);
  border: none;
  border-bottom: 2px white solid;
  color: white;
}

input:focus{
  background-color: rgb(50, 52, 61);
}
</style>