"use client";
import React, { useState } from "react";

import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/Components/ui/dialog";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";

import { router } from "@inertiajs/react";
import Image from "@/Components/Custom/Image";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/Components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";

const formSchema = z.object({
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    type: z.string().min(2, {
        message: "Type must be at least 2 characters.",
    }),
    amount: z.coerce.number(),
    date: z.string().min(2, {
        message: "Date must be at least 2 characters.",
    }),
    status: z.string().min(2, {
        message: "Status must be at least 2 characters.",
    }),
});

export default function AddDialog() {
    const [open, setOpen] = useState(false);
    const [date, setDate] = React.useState<Date>();

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            type: "",
            amount: 0,
            date: "",
            status: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
        router.post("", {
            ...values,
        });
        setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    className="bg-gradient-to-b from-green-500 to-blue-700"
                    variant="default"
                >
                    Add Payment
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-slate-500">
                        Add New Payment
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid cols-2 space-y-3">
                            <div className="space-y-1">
                                {/* <span className="text-xs font-bold">DETAILS</span> */}
                                <div className="space-y-1">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="flex-1">
                                                <FormLabel className="text-slate-700">
                                                    Email Address*
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder=""
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex space-x-2">
                                    <FormField
                                        control={form.control}
                                        name="date"
                                        render={({ field }) => (
                                            <FormItem className="flex-1">
                                                <FormLabel className="text-slate-700">
                                                    Date*
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder=""
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="status"
                                        render={({ field }) => (
                                            <FormItem className="flex-1">
                                                <FormLabel className="text-slate-700">
                                                    Status*
                                                </FormLabel>
                                                <FormControl>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue
                                                                id="status"
                                                                placeholder="Select Status"
                                                                {...field}
                                                            />
                                                        </SelectTrigger>
                                                        <SelectContent position="popper">
                                                            <SelectItem value="Paid">
                                                                Paid
                                                            </SelectItem>
                                                            <SelectItem value="Processing">
                                                                Processing
                                                            </SelectItem>
                                                            <SelectItem value="Cancelled">
                                                                Cancelled
                                                            </SelectItem>
                                                            <SelectItem value="Pending">
                                                                Pending
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex space-x-2">
                                    <FormField
                                        control={form.control}
                                        name="amount"
                                        render={({ field }) => (
                                            <FormItem className="flex-1">
                                                <FormLabel className="text-slate-700">
                                                    Amount*
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder=""
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="type"
                                        render={({ field }) => (
                                            <FormItem className="flex-1">
                                                <FormLabel className="text-slate-700">
                                                    Type*
                                                </FormLabel>
                                                <FormControl>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue
                                                                id="status"
                                                                placeholder="Select Type"
                                                                {...field}
                                                            />
                                                        </SelectTrigger>
                                                        <SelectContent position="popper">
                                                            <SelectItem value="User">
                                                                User
                                                            </SelectItem>
                                                            <SelectItem value="Agent">
                                                                Agent
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <DialogClose>
                                    <Button
                                        className="w-full sm:w-20"
                                        variant="outline"
                                        type="button"
                                    >
                                        Cancel
                                    </Button>
                                </DialogClose>
                                <Button
                                    className="w-full sm:w-20 bg-gradient-to-b from-green-500 to-blue-700"
                                    variant="default"
                                    type="submit"
                                >
                                    Add
                                </Button>
                            </DialogFooter>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
