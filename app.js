function lifeInWeeks(event) {
    event.preventDefault();
    let age = document.getElementById('age-input').value;
    let yearsRemaining = 90 - age;
    let days = yearsRemaining * 365;
    let weeks = yearsRemaining * 52;
    let months = yearsRemaining * 12;

    document.getElementById('result').textContent = `You have ${days} days, ${weeks} weeks, and ${months} months left.`;
  }