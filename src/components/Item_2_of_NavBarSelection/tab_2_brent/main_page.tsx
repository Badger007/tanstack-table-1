import { Table_dubai_efs_with_button } from "./table_dubai_efs.tsx";
import { Table_dubai_f2b_spreads_with_button } from "./table_dubai_f2b_spreads.tsx";
import { Table_platts_oman_with_button } from "./table_platts_oman.tsx";
import { Table_dme_oman_with_button } from "./table_dme_oman.tsx";

const MyTables = () => {
  return (
    <div className="flex h-dvh py-4">
      <div className="pe-4">
        <div className="mb-4"> 
          <Table_dubai_efs_with_button />
        </div>
        <div className="mb-4"> 
          <Table_dubai_f2b_spreads_with_button />
        </div>
      </div>
      <div className="pe-4"></div>
      <div className="border border-grey border-t-0 border-l-1 border-r-0 border-b-0 ps-4 pe-2">
        <div className="mb-4"> 
          <Table_platts_oman_with_button />
        </div>
        <div className="mb-4"> 
          <Table_dme_oman_with_button />
        </div>
      </div>
    </div>
  );
};

export default MyTables;
