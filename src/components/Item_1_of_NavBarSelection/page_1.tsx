import { Dropdown_list } from "./dropdown_filter/component_dropdown_with_table_as_child.tsx";
// import {
//   dummy_murban,
//   dummy_dubai,
//   dummy_wti,
//   dummy_brent,
// } from "../data_input/dummy_data_1.tsx";

const dummy_murban = Array.from({ length: 50 }, (_, index) => ({
  date: `date ${index + 1}`,
  SoD: (Math.random() * 100).toFixed(2),
  Current: (Math.random() * 100).toFixed(2),
  Spread: (Math.random() * 10).toFixed(2),
}));

const dummy_dubai = Array.from({ length: 50 }, (_, index) => ({
  date: `date ${index + 1}`,
  SoD: (Math.random() * 100).toFixed(2),
  Current: (Math.random() * 100).toFixed(2),
  Spread: (Math.random() * 10).toFixed(2),
}));

const dummy_wti = Array.from({ length: 50 }, (_, index) => ({
  date: `date ${index + 1}`,
  SoD: (Math.random() * 100).toFixed(2),
  Current: (Math.random() * 100).toFixed(2),
  Spread: (Math.random() * 10).toFixed(2),
}));

const dummy_brent = Array.from({ length: 50 }, (_, index) => ({
  date: `date ${index + 1}`,
  SoD: (Math.random() * 100).toFixed(2),
  Current: (Math.random() * 100).toFixed(2),
  Spread: (Math.random() * 10).toFixed(2),
}));


export default function page_1_table_1() {
  return (
    <div>
      <div>
        <Dropdown_list
          data={[dummy_murban, dummy_dubai, dummy_wti, dummy_brent]}
        />
      </div>
    </div>
  );
}


