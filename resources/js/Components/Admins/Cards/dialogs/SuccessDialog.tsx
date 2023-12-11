import React, { useState } from "react";

import { Button } from "@/Components/ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";

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

interface EditDialogProps {
    name?: string;
    id?: number;
    // handleShowSuccessMessage: () => void;
}

const formSchema = z.object({
    id: z.number(),
});

export default function BlockDialog() {
    const [open, setOpen] = useState(false);

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button
                    variant="outline"
                    className="justify-start w-full border-0 mt-1 "
                    size="sm"
                >
                    Add Card
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader className="py-8  flex flex-col items-center justify-center text-center">
                    <Image
                        src="/images/block_img.png"
                        alt="Block Image"
                        width={150}
                    />
                    <AlertDialogTitle className="text-purple-500">
                        Card Successfully Added
                    </AlertDialogTitle>
                    <AlertDialogDescription className="w-4/5 text-center">
                        Card has been successfully added to the card list and
                        user can make transactions with this asap!
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="mt-3 flex items-center justify-center">
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <a href="/cards">
                        <Button
                            variant="default"
                            type="submit"
                            className="w-full sm:w-20 bg-gradient-to-b from-pink-500 to-violet-700"
                        >
                            Proceed to Cards
                        </Button>
                    </a>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
