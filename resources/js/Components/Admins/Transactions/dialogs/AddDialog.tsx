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

const formSchema = z.object({
    email: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    card: z.string().min(2, {
        message: "Card must be at least 2 characters.",
    }),
    amount: z.coerce.number(),
    status: z.string().min(2, {
        message: "Status must be at least 2 characters.",
    }),
    date: z.string().min(2, {
        message: "Date must be at least 2 characters.",
    }),
});

export default function AddDialog() {
    const [open, setOpen] = useState(false);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            card: "",
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
                    Add Transaction
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-slate-500">
                        Add New Transaction
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid cols-2 space-y-3">
                            <div className="space-y-1">
                                {/* <span className="text-xs font-bold">DETAILS</span> */}
                                <div className="space-y-1">
                                    <div className="flex space-x-2">
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
                                            name="card"
                                            render={({ field }) => (
                                                <FormItem className="flex-1">
                                                    <FormLabel className="text-slate-700">
                                                        Product*
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Select>
                                                            <SelectTrigger>
                                                                <SelectValue
                                                                    id="card"
                                                                    placeholder="Enter Product"
                                                                    {...field}
                                                                />
                                                            </SelectTrigger>
                                                            <SelectContent position="popper">
                                                                <SelectItem value="Bitcoin">
                                                                    Bitcoin
                                                                </SelectItem>
                                                                <SelectItem value="Amazon Card">
                                                                    Amazon Card
                                                                </SelectItem>
                                                                <SelectItem value="Steam Card">
                                                                    Steam Card
                                                                </SelectItem>
                                                                <SelectItem value="iTunes Card">
                                                                    iTunes Card
                                                                </SelectItem>
                                                                <SelectItem value="Etherium">
                                                                    Etherium
                                                                </SelectItem>
                                                                <SelectItem value="Uber Card">
                                                                    Uber Card
                                                                </SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="space-y-1">
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
                                                                        placeholder="Enter Status"
                                                                        {...field}
                                                                    />
                                                                </SelectTrigger>
                                                                <SelectContent position="popper">
                                                                    <SelectItem value="Successful">
                                                                        Successful
                                                                    </SelectItem>
                                                                    <SelectItem value="Pending">
                                                                        Pending
                                                                    </SelectItem>
                                                                    <SelectItem value="Processing">
                                                                        Processing
                                                                    </SelectItem>
                                                                    <SelectItem value="Cancelled">
                                                                        Cancelled
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
