document.getElementById("loan-form").addEventListener("submit", calculateLoan);

function calculateLoan(e) {
  // Vars
  const amount = document.querySelector("#amount").value;
  const interest = document.querySelector("#interest").value;
  const years = document.querySelector("#years").value;

  // Calculate
  // amount in a float
  const principal = parseFloat(amount);
  // Interest in a float
  const calculatedInterest = parseFloat(interest) / 100 / 12;
  // years * 12 because of 12 months in a year
  const calculatedPayments = parseFloat(years) * 12;

  // Monthly Payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  const monthlyPayment = monthly.toFixed(2);

  // Total Interest

  const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

  // Total Payment
  const totalPayment = (monthly * calculatedPayments).toFixed(2);

  console.log(totalInterest, totalPayment);

  // Display Calulations
  document.querySelector("#monthly-payment").value = monthlyPayment;
  document.querySelector("#total-payment").value = totalPayment;
  document.querySelector("#total-interest").value = totalInterest;

  e.preventDefault();
}
