document.addEventListener("DOMContentLoaded", function() {
  const principalInput = document.getElementById("principal");
  const interestSlider = document.getElementById("interest");
  const interestDisplay = document.getElementById("interest-display");
  const yearsSelect = document.getElementById("years");
  const calculateButton = document.getElementById("calculate");
  const resultDiv = document.getElementById("result");
  const interestAmount = document.getElementById("interest-amount");

  interestSlider.addEventListener("input", function() {
      interestDisplay.textContent = interestSlider.value + "%";
  });

  calculateButton.addEventListener("click", function() {
      const principal = parseFloat(principalInput.value);
      const interestRate = parseFloat(interestSlider.value);
      const years = parseFloat(yearsSelect.value);

      if (isNaN(principal) || principal <= 0) {
          alert("Enter a positive number for Principal Amount");
      } else {
          const interest = (principal * interestRate * years) / 100;
          interestAmount.textContent = interest.toFixed(2);
          resultDiv.classList.remove("hidden");
      }
  });
});
