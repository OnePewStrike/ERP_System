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
import AddDialog from "./dialogs/AddDialog";
import DeleteDialog from "./dialogs/DeleteDialog";
import EditDialog from "./dialogs/EditDialog";

const data: Transactions[] = [
    {
        id: 1,
        email: "ramonridwan@gmail.com",
        card: "Bitcoin",
        amount: 39000,
        date: "19/08/2018",
        status: "Successful",
    },
    {
        id: 2,
        email: "john.doe@example.com",
        card: "Amazon Card",
        amount: 1500,
        date: "22/05/2020",
        status: "Pending",
    },
    {
        id: 3,
        email: "alice.smith@example.com",
        card: "Steam Card",
        amount: 25000,
        date: "10/11/2019",
        status: "Processing",
    },
    {
        id: 4,
        email: "bob.jones@example.com",
        card: "iTunes Card",
        amount: 5000,
        date: "03/04/2022",
        status: "Cancelled",
    },
    {
        id: 5,
        email: "emma.jackson@example.com",
        card: "Etherium",
        amount: 120000,
        date: "15/09/2021",
        status: "Successful",
    },
    {
        id: 6,
        email: "david.brown@example.com",
        card: "Uber Card",
        amount: 7500,
        date: "28/02/2023",
        status: "Pending",
    },
    {
        id: 7,
        email: "susan.white@example.com",
        card: "Amazon Card",
        amount: 3200,
        date: "07/07/2022",
        status: "Processing",
    },
    {
        id: 8,
        email: "peter.wilson@example.com",
        card: "Steam Card",
        amount: 18000,
        date: "14/12/2020",
        status: "Cancelled",
    },
    {
        id: 9,
        email: "olivia.martin@example.com",
        card: "iTunes Card",
        amount: 4200,
        date: "25/06/2019",
        status: "Successful",
    },
    {
        id: 10,
        email: "william.taylor@example.com",
        card: "Etherium",
        amount: 98000,
        date: "02/03/2022",
        status: "Pending",
    },
];

export type Transactions = {
    id: number;
    email: string;
    card: string;
    amount: number;
    date: string;
    status: string;
};

export const columns: ColumnDef<Transactions>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="text-sm text-slate-500">
                {row.getValue("email")}
            </div>
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
                    Payment ID
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="text-sm text-slate-500">{row.getValue("id")}</div>
        ),
    },
    {
        accessorKey: "card",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Product
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="text-sm text-slate-500">{row.getValue("card")}</div>
        ),
    },
    {
        accessorKey: "amount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Amount
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="text-sm text-slate-500">
                {row.getValue("amount")}
            </div>
        ),
    },
    {
        accessorKey: "date",
        header: "Date",
        cell: ({ row }) => (
            <div className="text-sm text-slate-500">{row.getValue("date")}</div>
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

            if (value === "Successful") {
                return (
                    <Badge className="bg-green-500">
                        {row.getValue("status")}
                    </Badge>
                );
            } else if (value === "Processing") {
                return (
                    <Badge className="bg-gradient-to-b from-green-500 to-blue-700">
                        {row.getValue("status")}
                    </Badge>
                );
            } else if (value === "Pending") {
                return (
                    <Badge className="bg-slate-500">
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
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const data = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <EditDialog
                            email={data?.email}
                            card={data?.card}
                            amount={data?.amount}
                            date={data?.date}
                            status={data?.status}
                        />
                        <DeleteDialog />
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
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
        <div className="w-full">
            <div className="flex justify-between items-center py-4">
                <Input
                    placeholder="Filter Name..."
                    value={
                        (table.getColumn("name")?.getFilterValue() as string) ??
                        ""
                    }
                    onChange={(event) =>
                        table
                            .getColumn("name")
                            ?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <AddDialog />
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
