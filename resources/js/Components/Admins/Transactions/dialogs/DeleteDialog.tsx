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

interface EditDialogProps {
    name?: string;
    id?: number;
    // handleShowSuccessMessage: () => void;
}

const formSchema = z.object({
    id: z.number(),
});

const DeleteDialog: React.FC<EditDialogProps> = ({
    id,
    name,
    // handleShowSuccessMessage,
}) => {
    const [open, setOpen] = useState(false);
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: id,
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        router.delete(`admin-transactions/${id}`);
        setOpen(false);

        // handleShowSuccessMessage();
    }

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button
                    variant="outline"
                    className="justify-start w-full border-0 mt-1 "
                    size="sm"
                >
                    Delete
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-red-500">
                                Delete Transaction
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                Are you sure you want to delete this
                                transaction? This action will permanently remove
                                all items and data associated with it.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter className="mt-3">
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <Button
                                variant="default"
                                type="submit"
                                className="w-full sm:w-20 bg-red-500"
                            >
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </form>
                </Form>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteDialog;
