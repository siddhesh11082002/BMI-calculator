function calculateBMI(){
  let weight = parseFloat(document.querySelector('#weight').value);
  let height = parseFloat(document.querySelector('#height').value)/100;

  if(isNaN(weight) || isNaN(height)){
    document.getElementById('result').innerText = "please enter valid height and weight";
    return
  }
  const bmi = weight / (height * height);
  document.getElementById('result').innerText = `your BMI is ${bmi.toFixed(2)}.`;
  
}