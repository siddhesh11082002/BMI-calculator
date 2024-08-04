async function calculateBMI() {
  let weight = parseFloat(document.querySelector('#weight').value);
  let height = parseFloat(document.querySelector('#height').value) / 100;

  if (isNaN(weight) || isNaN(height)) {
    document.getElementById('result').innerText = "Please enter valid height and weight.";
    return;
  }

  const bmi = weight / (height * height);
  document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)}.`;

  try {
    let advice = await getAIAdvice(bmi);
    document.getElementById('advice').innerText = `Advice: ${advice}`;
  } catch (error) {
    document.getElementById('advice').innerText = 'Unable to fetch advice at this moment.';
  }
}

// Simulating AI API call to get advice
async function getAIAdvice(bmi) {
  const adviceData = {
    underweight: "You should consider gaining some weight. A balanced diet rich in proteins and healthy fats can help.",
    normal: "You are in a healthy weight range. Maintain a balanced diet and regular exercise.",
    overweight: "You might consider losing some weight. A balanced diet and regular physical activity are recommended.",
    obesity: "It's important to lose weight for your health. Consider consulting with a healthcare provider for personalized advice."
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      if (bmi < 18.5) resolve(adviceData.underweight);
      else if (bmi < 25) resolve(adviceData.normal);
      else if (bmi < 30) resolve(adviceData.overweight);
      else resolve(adviceData.obesity);
    }, 1000);
  });
}
