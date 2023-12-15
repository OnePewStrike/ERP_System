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
        message: "Email must be at least 2 characters.",
    }),
    type: z.string(),
    amount: z.string(),
    date: z.string().min(2, {
        message: "Date must be at least 2 characters.",
    }),
    status: z.string(),
});

export default function AddDialog() {
    const [open, setOpen] = useState(false);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            type: "",
            amount: "",
            date: "",
            status: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        router.post("admin-payments", {
            ...values,
        });
        setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    className="flex justify-start bg-gradient-to-b from-green-500 to-blue-700"
                    variant="default"
                    size="sm"
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
                                    <div className="flex space-x-2">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem className="flex-1">
                                                    <FormLabel className="text-slate-700">
                                                        Email*
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
                                            name="type"
                                            render={({ field }) => (
                                                <FormItem className="flex-1">
                                                    <FormLabel className="text-slate-700">
                                                        Type*
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Select
                                                            onValueChange={
                                                                field.onChange
                                                            }
                                                        >
                                                            <SelectTrigger>
                                                                <SelectValue
                                                                    id="type"
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
                                                            <Select
                                                                onValueChange={
                                                                    field.onChange
                                                                }
                                                            >
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
