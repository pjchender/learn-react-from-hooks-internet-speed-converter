import React from 'react';

const UnitConverter = ({ handleInputChange, inputValue }) => (
  <div className="converter">
    <div className="flex-1">
      <div className="converter-title">Set</div>
      <input
        type="number"
        onChange={handleInputChange}
        value={inputValue}
        className="input-number"
        min="0"
      />
    </div>
    <span className="angle-icon fa-2x" style={{ marginTop: 30 }}>
      <i className="fas fa-angle-right"></i>
    </span>
    <div className="text-right flex-1">
      <div className="converter-title">Show</div>
      <input
        type="text"
        className="input-number text-right"
        disabled
        value={inputValue / 8}
      />
    </div>
  </div>
);

export default UnitConverter;
