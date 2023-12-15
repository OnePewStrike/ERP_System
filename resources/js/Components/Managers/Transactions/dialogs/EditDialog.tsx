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
import Image from "@/Components/Custom/Image";
import { Head, Link, useForm } from "@inertiajs/react";

interface EditDialogProps {
    id: number;
    name: string;
    type: string;
    value: string;
    returnData: string;
    status: string;
    date: string;
}

const EditDialog: React.FC<EditDialogProps> = ({
    id,
    name,
    type,
    value,
    returnData,
    status,
    date,
}) => {
    const [open, setOpen] = useState(false);

    const { data, setData, put, processing, errors, reset } = useForm({
        name: name,
        type: type,
        value: value,
        return: returnData,
        status: status,
        date: date,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        try {
            put(route(`manager-transactions/${id}`), {
                data: {
                    name: name,
                    type: type,
                    value: value,
                    return: returnData,
                    date: date,
                    status: status,
                },
            });

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
                <Button className="w-full justify-start" variant="ghost">
                    Edit Transaction
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-slate-500">
                        Edit Transaction
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={submit}>
                    <div className="grid cols-2 space-y-3">
                        <div className="space-y-1">
                            {/* <span className="text-xs font-bold">DETAILS</span> */}
                            <div className="space-y-1">
                                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                    <div>
                                        <InputLabel
                                            htmlFor="name"
                                            value="Name"
                                        />

                                        <TextInput
                                            id="name"
                                            name="name"
                                            value={data.name}
                                            className="block w-full py-3 rounded-md"
                                            autoComplete="name"
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            required
                                        />

                                        <InputError
                                            message={errors.name}
                                            className=""
                                        />
                                    </div>
                                    <div>
                                        <InputLabel
                                            htmlFor="type"
                                            value="Type"
                                        />
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
                                            <option value="Credit">
                                                Credit
                                            </option>
                                            <option value="Debit">Debit</option>
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
                                            htmlFor="value"
                                            value="Value"
                                        />

                                        <TextInput
                                            id="value"
                                            name="value"
                                            value={data.value}
                                            className="block w-full py-3 rounded-md"
                                            autoComplete="value"
                                            onChange={(e) =>
                                                setData("value", e.target.value)
                                            }
                                            required
                                        />

                                        <InputError
                                            message={errors.value}
                                            className=""
                                        />
                                    </div>
                                    <div>
                                        <InputLabel
                                            htmlFor="return"
                                            value="Return"
                                        />

                                        <TextInput
                                            id="return"
                                            name="return"
                                            value={data.return}
                                            className="block w-full py-3 rounded-md"
                                            autoComplete="return"
                                            onChange={(e) =>
                                                setData(
                                                    "return",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />

                                        <InputError
                                            message={errors.return}
                                            className=""
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
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
                                                setData(
                                                    "status",
                                                    e.target.value
                                                )
                                            }
                                            className="block w-full py-3 rounded-md border border-slate-300"
                                            required
                                        >
                                            <option value="" disabled>
                                                Select Status
                                            </option>
                                            <option value="Completed">
                                                Completed
                                            </option>
                                            <option value="In Progress">
                                                In Progress
                                            </option>
                                            <option value="Failed">
                                                Failed
                                            </option>
                                        </select>
                                        <InputError
                                            message={errors.status}
                                            className=""
                                        />
                                    </div>
                                    <div>
                                        <InputLabel
                                            htmlFor="date"
                                            value="Date"
                                        />

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
                                disabled={processing}
                            >
                                Update
                            </Button>
                        </DialogFooter>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditDialog;
