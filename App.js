import React from 'react';
import Bmi from './Component/Bmi';
import Bank from './Component/Bank';
import Total from './Component/Total';
import Biner from './Component/Biner';
import Oktal from './Component/Oktal';
import Desi from './Component/Desi';
import Hexa from './Component/Hexa';

function App() {
  return (
    <div>
      <Bmi />
      <Bank />
      <Total />
      <Biner />
      <Oktal />
      <Desi />
      <Hexa />
    </div>
  );
}

export default App;