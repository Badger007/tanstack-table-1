// import React, { useState } from 'react';

// import Select from 'react-select';
// import {colourOptions} from './data_dropdown';

// const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
//   <label style={{ marginRight: '1em' }}>
//     <input type="checkbox" {...props} />
//     {children}

//   </label>
// );

// var selected_item = colourOptions[0]

// function selected_item_function(e) { 
//     // setText(e.target.value);
//     console.log("wtf",e.value) 
//     return e.value
//   };

// export default function dropdown_list() {
//   const [isClearable, setIsClearable] = useState(true);
//   const [isSearchable, setIsSearchable] = useState(true);
//   const [isDisabled, setIsDisabled] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isRtl, setIsRtl] = useState(false);


//   return (
//     <>
//       <Select
//         className="basic-single"
//         classNamePrefix="select"
//         defaultValue={colourOptions[1]}

//         isDisabled={isDisabled}
//         isLoading={isLoading}
//         // isClearable={isClearable}
//         isRtl={isRtl}
//         isSearchable={isSearchable}
//         name="color"
//         options={colourOptions}

//         onChange={selected_item = selected_item_function}
        
//       />

//       <div
        
//         style={{
//           color: 'hsl(0, 0%, 40%)',
//           display: 'inline',
//           fontSize: 12,
//           width:100,

//           fontStyle: 'italic',
//           marginTop: '1em',
//         }}
//       >
//         <div>{console.log("what")}</div>
//         <Checkbox
//           checked={isClearable}
//           onChange={() => setIsClearable((state) => !state)}
//         // onChange={() => setIsClearable(console.log("why"))}
          
//         >
//            Clearable
//         </Checkbox> 
//         <Checkbox
//           checked={isSearchable}
//           onChange={() => setIsSearchable((state) => !state)}
//         >
//           Searchable
//         </Checkbox>
//         <Checkbox
//           checked={isDisabled}
//           onChange={() => setIsDisabled((state) => !state)}
//         >
//           Disabled
//         </Checkbox>
//         <Checkbox
//           checked={isLoading}
//           onChange={() => setIsLoading((state) => !state)}
//         >
//           Loading
//         </Checkbox>
//         <Checkbox checked={isRtl} onChange={() => setIsRtl((state) => !state)}>
        
//           RTL
//         </Checkbox> 

        
//       </div>
//     </>
//   );
// };
