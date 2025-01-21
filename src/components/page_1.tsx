import {Dropdown_list} from './dropdown_filter/component_dropdown_with_table_as_child.tsx';
import {dummy_murban, dummy_dubai, dummy_wti, dummy_brent} from './table_1/dummy_data_1.tsx';




export default function page_1_table_1() {

    return (
  
      <div>
        <div>
        <Dropdown_list data={[dummy_murban, dummy_dubai, dummy_wti, dummy_brent]} />
        </div>
      </div>
    )
    
    }
  