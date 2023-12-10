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
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    type: z.coerce.number(),
    value: z.string().min(2, {
        message: "Value must be at least 2 characters.",
    }),
    return: z.string().min(2, {
        message: "Return must be at least 2 characters.",
    }),
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
            name: "",
            type: 0,
            value: "",
            return: "",
            status: "",
            date: "",
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
                    <DialogTitle>Add New Transaction</DialogTitle>
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
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem className="flex-2">
                                                    <FormLabel>Name*</FormLabel>
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
                                    className="w-full sm:w-20"
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
