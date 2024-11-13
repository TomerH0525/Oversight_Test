// import React, { useState } from "react";
// import {
//     ColumnDef,
//     useReactTable,
//     getCoreRowModel,
//     getPaginationRowModel,
//     getFilteredRowModel,
//     flexRender,
//     ColumnFiltersState,
//     VisibilityState,
// } from "@tanstack/react-table";
// import {
//     Table,
//     TableHeader,
//     TableRow,
//     TableHead,
//     TableBody,
//     TableCell,
// } from "@/components/ui/table"; // ShadCN components

// interface DataTableProps<TData, TValue> {
//     columns: ColumnDef<TData, TValue>[];
//     data: TData[];
// }

// export function DataTable<TData, TValue>({
//     columns,
//     data,
// }: DataTableProps<TData, TValue>) {
//     const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
//     const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

//     const table = useReactTable({
//         data,
//         columns,
//         getCoreRowModel: getCoreRowModel(),
//         getPaginationRowModel: getPaginationRowModel(),
//         onColumnFiltersChange: setColumnFilters,
//         getFilteredRowModel: getFilteredRowModel(),
//         onColumnVisibilityChange: setColumnVisibility,
//         state: {
//             columnVisibility,
//             columnFilters,
//         },
//     });

//     return (
//         <div className="p-0">

//             {/* Main Table */}
//             <div className="rounded-none shadow-md border border-gray-200">
//                 <Table>
//                     <TableHeader className="bg-black">
//                         {table.getHeaderGroups().map((headerGroup) => (
//                             <TableRow key={headerGroup.id}>
//                                 {headerGroup.headers.map((header) => (
//                                     <TableHead
//                                         key={header.id}
//                                         className="text-white font-medium uppercase text-sm"
//                                     >
//                                         {!header.isPlaceholder &&
//                                             flexRender(
//                                                 header.column.columnDef.header,
//                                                 header.getContext()
//                                             )}
//                                     </TableHead>
//                                 ))}
//                             </TableRow>
//                         ))}
//                     </TableHeader>
//                     <TableBody>
//                         {table.getRowModel().rows.length ? (
//                             table.getRowModel().rows.map((row) => (
//                                 <React.Fragment key={row.id}>
//                                     <TableRow className="bg-gray-50">
//                                         {row.getVisibleCells().map((cell) => (
//                                             <TableCell
//                                                 key={cell.id}
//                                                 className="text-gray-600 text-lg"
//                                             >
//                                                 {flexRender(
//                                                     cell.column.columnDef.cell,
//                                                     cell.getContext()
//                                                 )}
//                                             </TableCell>
//                                         ))}
//                                     </TableRow>

//                                     {/* Nested rows with the same column layout */}
//                                     {row.original.details && (
//                                         row.original.details.map((detail, index) => (
//                                             <TableRow key={index} className="bg-white">
//                                                 {row.getVisibleCells().map((cell, cellIndex) => (
//                                                     <TableCell
//                                                         key={`${cell.id}-${index}`}
//                                                         className="text-gray-600 text-sm"
//                                                     >
//                                                         {/* Render nested data based on the column */}
//                                                         {cellIndex === 1 ? (
//                                                             <div className="flex flex-row gap-2">
//                                                                 <p>{detail.riderRank}</p>
                                                                
//                                                                 <p>{detail.riderName}</p>
//                                                             </div>
//                                                         ) : (
//                                                             <p>{detail[cell.column.id]}</p>
//                                                         )}
//                                                     </TableCell>
//                                                 ))}
//                                             </TableRow>
//                                         ))
//                                     )}
//                                 </React.Fragment>
//                             ))
//                         ) : (
//                             <TableRow>
//                                 <TableCell
//                                     colSpan={columns.length}
//                                     className="h-24 text-center text-gray-500"
//                                 >
//                                     No results.
//                                 </TableCell>
//                             </TableRow>
//                         )}
//                     </TableBody>
//                 </Table>
//             </div>

//             {/* Pagination Component */}
//             <div className="flex items-center justify-end space-x-2 py-4">
//             </div>


//         </div>
//     );
// }