import React, { useState } from "react";
import { downloadCSV } from "../helpers/functions.tsx";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

import { Table_template } from "./table_template.tsx";

const MyTables = () => {
  const [brentData, setBrentData] = useState(
    Array.from({ length: 10 }, (_, index) => ({
      spread: `Spread ${index + 1}`,
      eod: (Math.random() * 100).toFixed(2),
      current: (Math.random() * 100).toFixed(2),
      change: (Math.random() * 10).toFixed(2),
    }))
  );

  const columnsBrent = [
    { accessorKey: "spread", header: "Spread" },
    { accessorKey: "eod", header: "EOD" },
    {
      accessorKey: "current",
      header: "Current",
      cell: ({ row, getValue }) => {
        const [currentValue, setCurrentValue] = useState(getValue());
        return (
          <input
            type="number"
            step="0.01"
            value={currentValue}
            onChange={(e) => {
              const newValue = e.target.value;
              setCurrentValue(newValue);
              // Update the brentData state with the new value
              setBrentData((prevData) =>
                prevData.map((item, idx) =>
                  idx === row.index ? { ...item, current: newValue } : item
                )
              );
            }}
            style={{ width: "60%", textAlign: "center" }}
          />
        );
      },
    },
    { accessorKey: "change", header: "Change" },
  ];

  const brentTable = useReactTable({
    data: brentData,
    columns: columnsBrent,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      {Table_template(brentTable, "Brent F2B Spreads")}
      <div className="py-5">
        <button
          className="px-8 py-2 bg-blue-500 text-white rounded w-50"
          onClick={() => downloadCSV(brentData, "brent spreads")}
        >
          Update Values
        </button>
      </div>
    </div>
  );
};

export default MyTables;