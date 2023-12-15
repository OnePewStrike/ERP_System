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
    name: z.string(),
    image_path: z.string(),
    flag_path: z.string(),
    color: z.string(),
});

export default function AddDialog() {
    const [open, setOpen] = useState(false);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            image_path: "",
            flag_path: "",
            color: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            router.post("admin-cards", {
                ...values,
            });
            setOpen(false);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    className="flex justify-start bg-gradient-to-b from-green-500 to-blue-700"
                    variant="default"
                    size="sm"
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
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid cols-2 space-y-3">
                            <div className="space-y-1">
                                {/* <span className="text-xs font-bold">DETAILS</span> */}
                                <div className="space-y-1">
                                    <div className="grid grid-cols-1 gap-2">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem className="flex-1">
                                                    <FormLabel className="text-slate-700">
                                                        Name*
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
                                            name="image_path"
                                            render={({ field }) => (
                                                <FormItem className="flex-1">
                                                    <FormLabel className="text-slate-700">
                                                        Card*
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Select
                                                            onValueChange={
                                                                field.onChange
                                                            }
                                                        >
                                                            <SelectTrigger>
                                                                <SelectValue
                                                                    id="image_path"
                                                                    placeholder="Select Card"
                                                                    {...field}
                                                                />
                                                            </SelectTrigger>
                                                            <SelectContent position="popper">
                                                                <SelectItem value="/images/cards/amazon.png">
                                                                    Amazon
                                                                </SelectItem>
                                                                <SelectItem value="/images/cards/itunes.png">
                                                                    iTunes
                                                                </SelectItem>
                                                                <SelectItem value="/images/cards/google_play.png">
                                                                    Google Play
                                                                </SelectItem>
                                                                <SelectItem value="/images/cards/steam.png">
                                                                    Steam
                                                                </SelectItem>
                                                                <SelectItem value="/images/cards/others.png">
                                                                    Other Cards
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
                                            name="flag_path"
                                            render={({ field }) => (
                                                <FormItem className="flex-1">
                                                    <FormLabel className="text-slate-700">
                                                        Country*
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Select
                                                            onValueChange={
                                                                field.onChange
                                                            }
                                                        >
                                                            <SelectTrigger>
                                                                <SelectValue
                                                                    id="flag_path"
                                                                    placeholder="Select Flag"
                                                                    {...field}
                                                                />
                                                            </SelectTrigger>
                                                            <SelectContent position="popper">
                                                                <SelectItem value="/images/flags/usa.png">
                                                                    USA
                                                                </SelectItem>
                                                                <SelectItem value="/images/flags/canada.png">
                                                                    Canada
                                                                </SelectItem>
                                                                <SelectItem value="/images/flags/australia.png">
                                                                    Australia
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
                                            name="color"
                                            render={({ field }) => (
                                                <FormItem className="flex-1">
                                                    <FormLabel className="text-slate-700">
                                                        Color*
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Select
                                                            onValueChange={
                                                                field.onChange
                                                            }
                                                        >
                                                            <SelectTrigger>
                                                                <SelectValue
                                                                    id="color"
                                                                    placeholder="Select Color"
                                                                    {...field}
                                                                />
                                                            </SelectTrigger>
                                                            <SelectContent position="popper">
                                                                <SelectItem value="bg-gradient-to-b from-blue-300 to-teal-400">
                                                                    Gradient
                                                                    Blue
                                                                </SelectItem>
                                                                <SelectItem value="bg-gradient-to-b from-indigo-500 to-violet-700">
                                                                    Gradient
                                                                    Indigo
                                                                </SelectItem>
                                                                <SelectItem value="bg-slate-700">
                                                                    Slate
                                                                </SelectItem>
                                                                <SelectItem value="bg-white">
                                                                    White
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
