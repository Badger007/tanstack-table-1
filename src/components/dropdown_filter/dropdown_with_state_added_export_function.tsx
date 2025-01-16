import React, { useState } from 'react';

import Select from 'react-select';
import {colourOptions} from './data_dropdown';

const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}

  </label>
);

const default_selection = colourOptions[1]

console.log(default_selection)

var hhh = "hhhhhh"

var selected_item = colourOptions[0]

function selected_item_function(e) { 
    // setText(e.target.value);
    console.log("wtf",e.value) 
    return e.value
  };





  export function selected_item_function_EXPORT() { 
    
    
    // function handleChange(e) { 
    //   setText(e.target.value); 
    // } 

    
    
    

    

    return ( 
      <> 
      <div>
        
        <h1>hello there my man: </h1> 

        </div>
      </> 
    ); 
  } 


export default function dropdown_list() {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const [SelectedDropDownValue, setSelectedDropDownValue] = useState(default_selection.value)
    
  function handleClick(e) {
    switch(e.value) {
      case "Brent": 
        setSelectedDropDownValue("Brent");

        break;
      case "Dubai": 
        setSelectedDropDownValue("Dubai");
        break;
      case "Murban": 
        setSelectedDropDownValue("Murban");
        break;
      case "WTI": 
        setSelectedDropDownValue("WTI");
        break;
      default:
        "hello"
      
    }}


  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={default_selection}

        isDisabled={isDisabled}
        isLoading={isLoading}
        // isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={colourOptions}

        onChange={handleClick}
        
      />
      <div>{SelectedDropDownValue}</div>
      {/* <div
        
        style={{
          color: 'hsl(0, 0%, 40%)',
          display: 'inline',
          fontSize: 25,
          width:100,

          fontStyle: 'italic',
          marginTop: '1em',
        }}
      >
        <div>{console.log("what")}</div>
        <Checkbox
          checked={isClearable}
          onChange={() => setIsClearable((state) => !state)}
        // onChange={() => setIsClearable(console.log("why"))}
          
        >
           Clearable
        </Checkbox> 
        <Checkbox
          checked={isSearchable}
          onChange={() => setIsSearchable((state) => !state)}
        >
          Searchable
        </Checkbox>
        <Checkbox
          checked={isDisabled}
          onChange={() => setIsDisabled((state) => !state)}
        >
          Disabled
        </Checkbox>
        <Checkbox
          checked={isLoading}
          onChange={() => setIsLoading((state) => !state)}
        >
          Loading
        </Checkbox>
        <Checkbox checked={isRtl} onChange={() => setIsRtl((state) => !state)}>
        
          RTL
        </Checkbox> 

        
      </div> */}
    </>
  );
};
