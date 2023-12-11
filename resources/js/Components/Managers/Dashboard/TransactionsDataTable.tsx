"use client";

import * as React from "react";
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/Components/ui/button";
import { Checkbox } from "@/Components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Input } from "@/Components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import Image from "@/Components/Custom/Image";
import { Badge } from "@/Components/ui/badge";

const data: Transactions[] = [
    {
        id: 1,
        name: "United States Bank",
        type: 0,
        value: "$100",
        return: "#18000",
        status: "Completed",
        date: "14/01/2019",
    },
    {
        id: 2,
        name: "Global Finance",
        type: 1,
        value: "$75",
        return: "#15000",
        status: "Failed",
        date: "22/05/2020",
    },
    {
        id: 3,
        name: "International Credit Union",
        type: 1,
        value: "$200",
        return: "#22000",
        status: "In Progress",
        date: "10/09/2021",
    },
    {
        id: 4,
        name: "National Savings",
        type: 0,
        value: "$120",
        return: "#19000",
        status: "Completed",
        date: "05/03/2022",
    },
    {
        id: 5,
        name: "Global Investments",
        type: 1,
        value: "$300",
        return: "#25000",
        status: "Failed",
        date: "18/11/2022",
    },
    {
        id: 6,
        name: "Regional Bank",
        type: 1,
        value: "$50",
        return: "#8000",
        status: "In Progress",
        date: "29/07/2023",
    },
    {
        id: 7,
        name: "City Credit Corp",
        type: 0,
        value: "$180",
        return: "#28000",
        status: "Completed",
        date: "02/04/2019",
    },
    {
        id: 8,
        name: "International Finance Group",
        type: 0,
        value: "$90",
        return: "#12000",
        status: "Failed",
        date: "14/08/2020",
    },
    {
        id: 9,
        name: "Global Trust Bank",
        type: 1,
        value: "$250",
        return: "#20000",
        status: "In Progress",
        date: "07/12/2021",
    },
    {
        id: 10,
        name: "Worldwide Credit Union",
        type: 0,
        value: "$160",
        return: "#21000",
        status: "Completed",
        date: "30/06/2022",
    },
];

export type Transactions = {
    id: number;
    name: string;
    type: number;
    value: string;
    return: string;
    status: string;
    date: string;
};

export const columns: ColumnDef<Transactions>[] = [
    // {
    //     id: "select",
    //     header: ({ table }) => (
    //         <Checkbox
    //             checked={
    //                 table.getIsAllPageRowsSelected() ||
    //                 (table.getIsSomePageRowsSelected() && "indeterminate")
    //             }
    //             onCheckedChange={(value) =>
    //                 table.toggleAllPageRowsSelected(!!value)
    //             }
    //             aria-label="Select all"
    //         />
    //     ),
    //     cell: ({ row }) => (
    //         <Checkbox
    //             checked={row.getIsSelected()}
    //             onCheckedChange={(value) => row.toggleSelected(!!value)}
    //             aria-label="Select row"
    //         />
    //     ),
    //     enableSorting: false,
    //     enableHiding: false,
    // },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="text-sm text-slate-500">{row.getValue("name")}</div>
        ),
    },
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Transaction ID
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="text-sm text-slate-500">{row.getValue("id")}</div>
        ),
    },
    {
        accessorKey: "type",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Type
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const data = row.original;
            const value = data.type ? 1 : 0;
            return (
                <Image
                    src={`${
                        value === 1 ? "/images/credit.png" : "/images/debit.png"
                    }`}
                    alt={`${value === 1 ? "Credit" : "Debit"}`}
                    width={20}
                />
            );
        },
    },
    {
        accessorKey: "value",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Value
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="text-sm text-slate-500">
                {row.getValue("value")}
            </div>
        ),
    },
    {
        accessorKey: "return",
        header: "Return",
        cell: ({ row }) => (
            <div className="text-sm text-slate-500">
                {row.getValue("return")}
            </div>
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const data = row.original;
            const value = data.status;

            if (value === "Completed") {
                return (
                    <Badge className="bg-green-500">
                        {row.getValue("status")}
                    </Badge>
                );
            } else if (value === "In Progress") {
                return (
                    <Badge className="bg-gradient-to-b from-green-500 to-blue-700">
                        {row.getValue("status")}
                    </Badge>
                );
            } else {
                return (
                    <Badge className="bg-red-500">
                        {row.getValue("status")}
                    </Badge>
                );
            }
        },
    },
    // {
    //     id: "actions",
    //     enableHiding: false,
    //     cell: ({ row }) => {
    //         const data = row.original;

    //         return (
    //             <DropdownMenu>
    //                 <DropdownMenuTrigger asChild>
    //                     <Button variant="ghost" className="h-8 w-8 p-0">
    //                         <span className="sr-only">Open menu</span>
    //                         <MoreHorizontal className="h-4 w-4" />
    //                     </Button>
    //                 </DropdownMenuTrigger>
    //                 <DropdownMenuContent align="end">
    //                     <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //                     <EditDialog
    //                         name={data?.name}
    //                         type={data?.type}
    //                         value={data?.value}
    //                         returnData={data?.return}
    //                         status={data?.status}
    //                         date={data?.date}
    //                     />
    //                     <DeleteDialog />
    //                 </DropdownMenuContent>
    //             </DropdownMenu>
    //         );
    //     },
    // },
];

export function TransactionsDataTable() {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <div className="w-full p-4 rounded-md bg-white space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-slate-500">
                    Transactions
                </span>
                {/* <AddDialog /> */}
                {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                    </DropdownMenuContent>
                </DropdownMenu> */}
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
