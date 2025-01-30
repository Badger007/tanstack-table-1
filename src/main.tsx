import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// import React, { useState } from 'react';
// import ForgeReconciler, { Text, UserPicker, Textfield, Button, Select } from '@forge/react';

// const App = () => {
//   const [txt, setTxt] = useState('init');

//   const [selectedOption, setSelectedOption] = useState({ label: 'Banana', value: 'b' });
//   const [sct, setSct] = useState('b');

//   const reset = () => {
//     setTxt('');
//     setSct('');
//     setSelectedOption(null);
//   };

//   return (
//     <>
//       <Text>Select: {sct}</Text>
//       <Text>Textfield: {txt}</Text>

//       <Select
//         id="sct"
//         name="sct"
//         isClearable
//         options={[
//           { label: 'Apple', value: 'a' },
//           { label: 'Banana', value: 'b' },
//         ]}
//         value={selectedOption}
//         onChange={ (v) => {
//           if (v === null) { // Click on the clear cross
//             setSelectedOption(null);
//             setSct('');
//           } else if (v.value) {
//             setSelectedOption({ label: v.label, value: v.value });
//             setSct(v.value);
//           }
//         }}
//       />
//       <Textfield
//         id="txt"
//         name="txt"
//         value={txt}
//         onChange={ (e) => setTxt(e.target.value) }
//       />
//       <Button onClick={reset}>Reset</Button>
//     </>
//   );
// };

// ForgeReconciler.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
