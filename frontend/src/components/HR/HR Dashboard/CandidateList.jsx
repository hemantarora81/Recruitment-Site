import React, { useState } from "react";
import { useReactTable, getCoreRowModel, getPaginationRowModel, flexRender } from "@tanstack/react-table";

const CandidateList = ({ candidatesData }) => {
  const [selectedRows, setSelectedRows] = useState([]);
console.log(candidatesData,"candidatesData")
  // ✅ Define Table Columns
  const columns = [
    {
      accessorKey: "select",
      header: ({ table }) => (
        <input
          type="checkbox"
          checked={selectedRows.length === candidatesData.length}
          onChange={() =>
            setSelectedRows(selectedRows.length === candidatesData.length ? [] : candidatesData.map(c => c.id))
          }
          className="form-checkbox h-5 w-5 text-blue-600"
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={selectedRows.includes(row.original.id)}
          onChange={() =>
            setSelectedRows(selectedRows.includes(row.original.id) ? selectedRows.filter(id => id !== row.original.id) : [...selectedRows, row.original.id])
          }
          className="form-checkbox h-5 w-5 text-blue-600"
        />
      ),
    },
    { accessorKey: "fullName", header: "Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "qualification", header: "Qualification" },
    { accessorKey: "experience", header: "Experience" },
    {
      accessorKey: "resumeFilename",
      header: "Resume",
      cell: ({ row }) => (
        <a href={row.original.resume} target="_blank" className="text-blue-600 hover:underline" download={true} rel="noreferrer">
         { console.log(row,"row")}
          {row.original.resumeFilename}
        </a>
      ),
    },
  ];

  // ✅ React Table Instance
  const table = useReactTable({
    data: candidatesData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* ✅ Toolbar for Accept & Reject */}
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold">Candidates</h2>
        <div>
          <button
            className="px-4 py-2 mr-2 bg-red-500 text-white rounded disabled:opacity-50"
            disabled={selectedRows.length === 0}
          >
            Reject
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
            disabled={selectedRows.length === 0}
          >
            Accept
          </button>
        </div>
      </div>

      {/* ✅ Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="px-4 py-2 border border-gray-200 text-left">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-4 py-2 border border-gray-200">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {table.getState().pagination.pageIndex + 1}</span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CandidateList;
