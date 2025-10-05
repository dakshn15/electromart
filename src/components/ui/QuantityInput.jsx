import React from "react";

const QuantityInput = ({ value, onDecrement, onIncrement, min = 1, className = "" }) => {
  return (
    <div className={`flex border border-gray-300 rounded-md overflow-hidden text-sm bg-white max-w-[120px] ${className}`}>
      <button
        className="flex-1 p-2 flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-50 border-r border-gray-300"
        onClick={onDecrement}
        aria-label="Decrease quantity"
        disabled={value <= min}
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /></svg>
      </button>
      <input
        type="text"
        value={value}
        className="flex-1 w-full text-center leading-none p-2 focus:ring-0 border-0 outline-none bg-transparent"
        readOnly
      />
      <button
        className="flex-1 p-2 flex items-center justify-center text-gray-500 hover:bg-gray-100 border-l border-gray-300"
        onClick={onIncrement}
        aria-label="Increase quantity"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
      </button>
    </div>
  );
};

export default QuantityInput;
