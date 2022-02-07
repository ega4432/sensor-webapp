import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isOk, setIsOk] = useState<boolean>(false);
  const [alpha, setAlpha] = useState<number | null>(null);
  const [beta, setBeta] = useState<number | null>(null);
  const [gamma, setGamma] = useState<number | null>(null);

  const requestPermission = () => {
    if (window.DeviceOrientationEvent) {
      console.log(DeviceOrientationEvent.prototype);
      setAlpha(DeviceOrientationEvent.prototype.alpha);
      setBeta(DeviceOrientationEvent.prototype.beta);
      setGamma(DeviceOrientationEvent.prototype.gamma);
      setIsOk(true);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          温度を測定します。
        </p>
        <button
          className="App-link"
          onClick={requestPermission}
        >
          許可する
        </button>
      </header>
      {isOk && (
        <div>
          <ul>
            <li>alpha: {alpha}</li>
            <li>beta: {beta}</li>
            <li>gamman: {gamma}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
