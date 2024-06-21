function calculateInterest() {
  // Get values from the input fields
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const years = parseFloat(document.getElementById("years").value);

  // Check if the values are valid numbers
  if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
    alert("Please enter valid numbers in all fields.");
    return;
  }

  // Calculate the simple interest
  const interest = (principal * rate * years) / 100;
  const totalAmount = principal + interest;

  // Display the results
  document.getElementById(
    "interest"
  ).textContent = `Interest Earned: $${interest.toFixed(2)}`;
  document.getElementById(
    "totalAmount"
  ).textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
}
