import { useEffect, FormEventHandler, useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";

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
import TextInput from "@/Components/Custom/TextInput";

interface EditDialogProps {
    name?: string;
    id?: number;
    // handleShowSuccessMessage: () => void;
}

const DeleteDialog: React.FC<EditDialogProps> = ({
    id,
    name,
    // handleShowSuccessMessage,
}) => {
    const [open, setOpen] = useState(false);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        errors,
        reset,
    } = useForm({
        id: id,
        name: name,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        try {
            destroy(route(`manager-transactions.destroy`));

            console.log("Form submitted successfully!");

            setOpen(false);
        } catch (error) {
            console.error("Form submission error:", error);
            console.log("Server errors:", errors);
        }
    };

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
                <form onSubmit={submit}>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-red-500">
                            Delete Transaction
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete this transaction?
                            This action will permanently remove all items and
                            data associated with it.
                        </AlertDialogDescription>

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="block w-full py-3 rounded-md hidden"
                            autoComplete="name"
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />
                    </AlertDialogHeader>
                    <AlertDialogFooter className="mt-3">
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <Button
                            variant="default"
                            type="submit"
                            className="w-full sm:w-20 bg-red-500"
                            disabled={processing}
                        >
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteDialog;
