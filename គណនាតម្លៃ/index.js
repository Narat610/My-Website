    const costInput = document.getElementById("costPrice");
    const percentInput = document.getElementById("percentage");
    const typeSelect = document.getElementById("calculationType");

    // Auto calculate when user types or changes option
    costInput.addEventListener("input", calculate);
    percentInput.addEventListener("input", calculate);
    typeSelect.addEventListener("change", calculate);

    function calculate() {
      const cost = parseFloat(costInput.value);
      const percent = parseFloat(percentInput.value);
      const type = typeSelect.value;
      let result = 0;

      const resultDiv = document.getElementById("resultText");

      if (isNaN(cost) || isNaN(percent)) {
        resultDiv.innerHTML = "❗ សូមបញ្ចូលតម្លៃ និងភាគរយឲ្យត្រឹមត្រូវ។";
        return;
      }

      if (type === "profit") {
        result = cost * (1 + percent / 100);
        resultDiv.innerHTML = `
          🧾 <strong>គណនាចំណេញ</strong><br>
          🔹 តម្លៃដើម: $${cost.toFixed(2)}<br>
          🔹 ចំណេញ: ${percent}%<br>
          ✅ <strong>តម្លៃលក់៖ $${result.toFixed(2)}</strong>
        `;
      } else {
        result = cost * (1 - percent / 100);
        resultDiv.innerHTML = `
          🧾 <strong>គណនាបញ្ចុះតម្លៃ</strong><br>
          🔹 តម្លៃដើម: $${cost.toFixed(2)}<br>
          🔹 បញ្ចុះតម្លៃ: ${percent}%<br>
          ✅ <strong>តម្លៃក្រោយបញ្ចុះ៖ $${result.toFixed(2)}</strong>
        `;
      }
    }