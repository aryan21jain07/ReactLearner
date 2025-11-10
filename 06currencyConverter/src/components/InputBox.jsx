import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-white/70 backdrop-blur-md shadow-lg p-4 rounded-xl text-sm flex justify-between items-center ${className}`}
    >
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/50 mb-1 inline-block">
          {label}
        </label>

        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-2 text-lg"
          type="number"
          placeholder="0"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className="w-1/2 text-right">
        <p className="text-black/50 mb-1">Currency Type</p>

        <select
          className="rounded-lg px-2 py-2 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
