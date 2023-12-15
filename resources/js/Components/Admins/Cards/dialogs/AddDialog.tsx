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

export default function AddDialog() {
    const [open, setOpen] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        image_path: "",
        flag_path: "",
        color: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        try {
            post(route("admin-cards.store"));

            console.log(
                "check: ",
                data.name,
                data.image_path,
                data.flag_path,
                data.color
            );

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
                    Add Card
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-slate-500">
                        Add New Card
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={submit}>
                    <div className="grid cols-2 space-y-3">
                        <div className="space-y-1">
                            <div className="grid grid-cols-1 gap-2">
                                <div>
                                    <InputLabel htmlFor="name" value="Name" />

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
                                        htmlFor="image_path"
                                        value="Image"
                                    />
                                    <select
                                        id="image_path"
                                        name="image_path"
                                        value={data.image_path}
                                        onChange={(e) =>
                                            setData(
                                                "image_path",
                                                e.target.value
                                            )
                                        }
                                        className="block w-full py-3 rounded-md border border-slate-300"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Card Type
                                        </option>
                                        <option value="/images/cards/amazon.png">
                                            Amazon
                                        </option>
                                        <option value="/images/cards/itunes.png">
                                            iTunes
                                        </option>
                                        <option value="/images/cards/google_play.png">
                                            Google Play
                                        </option>
                                        <option value="/images/cards/steam.png">
                                            Steam
                                        </option>
                                        <option value="/images/cards/others.png">
                                            Other Cards
                                        </option>
                                    </select>
                                    <InputError
                                        message={errors.image_path}
                                        className=""
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="flag_path"
                                        value="Flag"
                                    />
                                    <select
                                        id="flag_path"
                                        name="flag_path"
                                        value={data.flag_path}
                                        onChange={(e) =>
                                            setData("flag_path", e.target.value)
                                        }
                                        className="block w-full py-3 rounded-md border border-slate-300"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Country
                                        </option>
                                        <option value="/images/flags/usa.png">
                                            USA Flag
                                        </option>
                                        <option value="/images/flags/canada.png">
                                            Canada Flag
                                        </option>
                                        <option value="/images/flags/australia.png">
                                            Australia Flag
                                        </option>
                                    </select>
                                    <InputError
                                        message={errors.flag_path}
                                        className=""
                                    />
                                </div>
                                <div>
                                    <InputLabel htmlFor="color" value="Color" />
                                    <select
                                        id="color"
                                        name="color"
                                        value={data.color}
                                        onChange={(e) =>
                                            setData("color", e.target.value)
                                        }
                                        className="block w-full py-3 rounded-md border border-slate-300"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select BG Color
                                        </option>
                                        <option value="bg-gradient-to-b from-blue-300 to-teal-400">
                                            Gradient Blue
                                        </option>
                                        <option value="bg-gradient-to-b from-indigo-500 to-violet-700">
                                            Gradient Indigo
                                        </option>
                                        <option value="bg-slate-700">
                                            Slate
                                        </option>
                                        <option value="bg-white">White</option>
                                    </select>
                                    <InputError
                                        message={errors.color}
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
                                disabled={processing}
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
