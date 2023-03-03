'use strict';

const bmiBtn = document.getElementById('bmi-btn');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const underWeight = document.getElementById('underweight');
const normal = document.getElementById('normal');
const overWeight = document.getElementById('overweight');
const obesity = document.getElementById('obesity');


bmiBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  let bmi = (weight.value / ((height.value * height.value) 
  / 10000)).toFixed(2);

  if (bmi < 18.5){
    underWeight.style.background = 'yellow';
  } else if (bmi ===24 || bmi < 25) {
    normal.style.background = 'green';
  } else if (bmi === 25 || bmi < 30){
    overWeight.style.background = 'orange';
  } else if (bmi > 30){
    obesity.style.background = 'red';
  }
  weight.value = '';
  height.value = '';
})