import './App.css';

// STEP 1：匯入 useState 方法
import { useState } from 'react';

function App() {
  // STEP 2: 定義 state，取得預設值為 0 的 inputValue 和修改該狀態的 setInputValue 方法
  const [inputValue, setInputValue] = useState(0);

  // STEP 3: 定義事件處理器
  const handleInputChange = (e) => {
    // STEP 3-1: 取出使用者輸入的值
    const { value } = e.target;

    // STEP 3-2: 將這個值設定到 state 中
    setInputValue(value);
  };

  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <div className="unit-control">
          <div className="unit">Mbps</div>
          <span className="exchange-icon fa-fw fa-stack">
            <i className="far fa-circle fa-stack-2x"></i>
            <i className="fas fa-exchangne-alt fa-stack-1x"></i>
          </span>
          <div className="unit">MB/s</div>
        </div>
        <div className="converter">
          <div className="flex-1">
            <div className="converter-title">Set</div>
            {/* STEP 4: 把事件處理器綁定進去，並且把 value 帶入 */}
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
            {/* STEP 5: 把使用者輸入的值顯示於畫面上 */}
            <input
              type="text"
              className="input-number text-right"
              disabled
              value={inputValue / 8}
            />
          </div>
        </div>
      </div>
      <div className="card-footer">FAST</div>
    </div>
  );
}

export default App;
