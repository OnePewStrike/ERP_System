import { useEffect, FormEventHandler, useState } from "react";
import InputError from "@/Components/Custom/InputError";
import InputLabel from "@/Components/Custom/InputLabel";
import PrimaryButton from "@/Components/Custom/PrimaryButton";
import TextInput from "@/Components/Custom/TextInput";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";

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
import { Head, Link, useForm } from "@inertiajs/react";
import Image from "@/Components/Custom/Image";

export default function AddDialog() {
    const [open, setOpen] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        card: "",
        amount: "",
        date: "",
        status: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        try {
            post(route("admin-transactions.store"));

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
                    Add Transaction
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-slate-500">
                        Add New Transaction
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={submit}>
                    <div className="grid cols-2 space-y-3">
                        <div className="space-y-1">
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
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
                                    <InputLabel htmlFor="card" value="Card" />
                                    <select
                                        id="card"
                                        name="card"
                                        value={data.card}
                                        onChange={(e) =>
                                            setData("card", e.target.value)
                                        }
                                        className="block w-full py-3 rounded-md border border-slate-300"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Type
                                        </option>
                                        <option value="Bitcoin">Bitcoin</option>
                                        <option value="Amazon Card">
                                            Amazon Card
                                        </option>
                                        <option value="Steam Card">
                                            Steam Card
                                        </option>
                                        <option value="iTunes Card">
                                            iTunes Card
                                        </option>
                                        <option value="Etherium">
                                            Etherium
                                        </option>
                                        <option value="Uber Card">
                                            Uber Card
                                        </option>
                                    </select>
                                    <InputError
                                        message={errors.card}
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
                                        <option value="Successful">
                                            Successful
                                        </option>
                                        <option value="Processing">
                                            Processing
                                        </option>
                                        <option value="Cancelled">
                                            Cancelled
                                        </option>
                                        <option value="Pending">Pending</option>
                                    </select>
                                    <InputError
                                        message={errors.status}
                                        className=""
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
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
