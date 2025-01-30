import {Table_brent_spreads_with_button} from "./page_brent_new.tsx"
import {Two_tables_dated_and_etf_and_button} from "./new_page_brent_and_dated_with_button.tsx"

const MyTables = () => {

  return (
    <div className=" flex h-dvh  py-4 ">

      <div className=" pe-4 ">
        <Table_brent_spreads_with_button />
      </div>
      <div className="border border-grey border-t-0 border-l-1 border-r-0 border-b-0 ps-4 pe-2">
        <div>
          <Two_tables_dated_and_etf_and_button />
        </div>

        </div>
    </div>

  );
};

export default MyTables;
