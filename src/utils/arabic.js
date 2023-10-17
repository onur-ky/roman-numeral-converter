import { isNumeric } from './validation.js'

export function validateArabicInput(input, error){
    if (!isNumeric(input) && input !== ""){
      return {isValid: false, error: "Input contains non-numeric characters"};
    }
    if (Number(input) > 4000000){
      return {isValid: false, error: "Numbers greater than 3999999 can't be expressed in roman numerals"};
    }
    if (Number(input) < 0){
      return {isValid: false, error: "Negative numbers can't be expressed in roman numerals"};
    }
    return {isValid: true, error: null};
  }