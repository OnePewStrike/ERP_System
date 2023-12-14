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
    img_path: z.string().min(2, {
        message: "Image must be at least 2 characters.",
    }),
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    type: z.string().min(2, {
        message: "Type must be at least 2 characters.",
    }),
    currency: z.string().min(2, {
        message: "Currency must be at least 2 characters.",
    }),
});

export default function AddDialog() {
    const [open, setOpen] = useState(false);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            img_path: "",
            name: "",
            type: "",
            currency: "",
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
                    Add User
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-slate-500">
                        Add New User
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
                                        name="img_path"
                                        render={({ field }) => (
                                            <FormItem className="flex-1">
                                                <FormLabel className="text-slate-700">
                                                    File Image
                                                </FormLabel>
                                                <FormControl>
                                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                                        <Input
                                                            id="picture"
                                                            type="file"
                                                            {...field}
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem className="flex-1">
                                                <FormLabel className="text-slate-700">
                                                    Card Name*
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
                                                                id="type"
                                                                placeholder="Select Type*"
                                                                {...field}
                                                            />
                                                        </SelectTrigger>
                                                        <SelectContent position="popper">
                                                            <SelectItem value="bitcoin">
                                                                Bitcoin
                                                            </SelectItem>
                                                            <SelectItem value="amazon">
                                                                Amazon Card
                                                            </SelectItem>
                                                            <SelectItem value="steam">
                                                                Steam Card
                                                            </SelectItem>
                                                            <SelectItem value="itunes">
                                                                iTunes Card
                                                            </SelectItem>
                                                            <SelectItem value="etherium">
                                                                Etherium
                                                            </SelectItem>
                                                            <SelectItem value="uber">
                                                                Uber Card
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
                                        name="currency"
                                        render={({ field }) => (
                                            <FormItem className="flex-1">
                                                <FormLabel className="text-slate-700">
                                                    Currency*
                                                </FormLabel>
                                                <FormControl>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue
                                                                id="currency"
                                                                placeholder="Select Currency"
                                                                {...field}
                                                            />
                                                        </SelectTrigger>
                                                        <SelectContent position="popper">
                                                            <SelectItem value="usd">
                                                                US Dollars (USD)
                                                            </SelectItem>
                                                            <SelectItem value="eur">
                                                                Euro (EUR)
                                                            </SelectItem>
                                                            <SelectItem value="gbp">
                                                                British Pound
                                                                (GBP)
                                                            </SelectItem>
                                                            <SelectItem value="jpy">
                                                                Japanese Yen
                                                                (JPY)
                                                            </SelectItem>
                                                            <SelectItem value="aud">
                                                                Australian
                                                                Dollar (AUD)
                                                            </SelectItem>
                                                            <SelectItem value="cad">
                                                                Canadian Dollar
                                                                (CAD)
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
