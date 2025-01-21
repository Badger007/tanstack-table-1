
import {table_1} from './component_table_1';
import {dropdown_list} from '../dropdown_filter/dropdown_with_state_added_export_function';

import mockData from './data.json';

console.log(dropdown_list)

function Main(mockData) { 
    return table_1(mockData)  
  };



export default function App() {

  return (
    // <div>{component_1()}</div>

    // <div>{dropdown()}</div>
    <div>
      <div>{dropdown_list()}</div>
    {/* <div>{component_1()}</div>  */}
    <div>
        <Main mockData={mockData}/>
    </div>
    </div>
  )
  
  }