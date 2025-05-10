// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [forCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchCurrency() {
        setIsLoading(true);

        if (!amount) return;

        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${forCurrency}&to=${toCurrency}`
        );

        const data = await res.json();
        const rate = data.rates[toCurrency];
        setResult(rate);
        setIsLoading(false);
      }
      if (forCurrency === toCurrency) return setResult(amount);
      fetchCurrency();
    },
    [amount, toCurrency, forCurrency]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select
        value={forCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="GEL">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="GEL">INR</option>
      </select>
      <p>Converted Amount: {result ? result : "N/A "}</p>
    </div>
  );
}
