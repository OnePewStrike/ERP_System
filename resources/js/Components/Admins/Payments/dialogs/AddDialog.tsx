"use client";
import { useEffect, FormEventHandler, useState } from "react";

import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import InputError from "@/Components/Custom/InputError";
import InputLabel from "@/Components/Custom/InputLabel";

import { Head, Link, useForm } from "@inertiajs/react";

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
import TextInput from "@/Components/Custom/TextInput";
import ErrorMessage from "@/Components/Custom/Messages/error";

export default function AddDialog() {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        type: "",
        amount: "",
        date: "",
        status: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        try {
            post(route("admin-payments"));

            console.log("Form submitted successfully!");

            setOpen(false);
        } catch (error) {
            console.error("Form submission error:", error);
            console.log("Server errors:", errors);
        }
    };

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
                <form onSubmit={submit}>
                    <div className="grid cols-2 space-y-3">
                        <div className="space-y-1">
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                {error && (
                                    <ErrorMessage className="">
                                        {error}
                                    </ErrorMessage>
                                )}
                                <div>
                                    <InputLabel htmlFor="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        name="email"
                                        value={data.email}
                                        className="block w-full py-3 rounded-md"
                                        autoComplete="email"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.email}
                                        className=""
                                    />
                                </div>
                                <div>
                                    <InputLabel htmlFor="type" value="Type" />
                                    <select
                                        id="type"
                                        name="type"
                                        value={data.type}
                                        onChange={(e) =>
                                            setData("type", e.target.value)
                                        }
                                        className="block w-full py-3 rounded-md border border-slate-300"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Type
                                        </option>
                                        <option value="User">User</option>
                                        <option value="Agent">Agent</option>
                                    </select>
                                    <InputError
                                        message={errors.type}
                                        className=""
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                <div>
                                    <InputLabel
                                        htmlFor="amount"
                                        value="Amount"
                                    />

                                    <TextInput
                                        id="amount"
                                        name="amount"
                                        value={data.amount}
                                        className="block w-full py-3 rounded-md"
                                        autoComplete="amount"
                                        onChange={(e) =>
                                            setData("amount", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.amount}
                                        className=""
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="status"
                                        value="Status"
                                    />
                                    <select
                                        id="status"
                                        name="status"
                                        value={data.status}
                                        onChange={(e) =>
                                            setData("status", e.target.value)
                                        }
                                        className="block w-full py-3 rounded-md border border-slate-300"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Type
                                        </option>
                                        <option value="Paid">Paid</option>
                                        <option value="Processing">
                                            Processing
                                        </option>
                                        <option value="Pending">Pending</option>
                                        <option value="Cancelled">
                                            Cancelled
                                        </option>
                                    </select>
                                    <InputError
                                        message={errors.status}
                                        className=""
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1">
                                <div>
                                    <InputLabel htmlFor="date" value="Date" />

                                    <TextInput
                                        id="date"
                                        name="date"
                                        value={data.date}
                                        className="block w-full py-3 rounded-md"
                                        autoComplete="date"
                                        onChange={(e) =>
                                            setData("date", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.date}
                                        className=""
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
                                className="w-full sm:w-20 bg-gradient-to-b from-green-500 to-blue-700"
                                variant="default"
                                type="submit"
                            >
                                Add
                            </Button>
                        </DialogFooter>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
