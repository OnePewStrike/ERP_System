import InputError from "@/Components/Custom/InputError";
import InputLabel from "@/Components/Custom/InputLabel";
import PrimaryButton from "@/Components/Custom/PrimaryButton";
import TextInput from "@/Components/Custom/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FormEventHandler } from "react";
import { PageProps } from "@/types";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import Image from "@/Components/Custom/Image";

export default function UpdateBillingInformation({
    className = "",
}: {
    className?: string;
}) {
    // const user = usePage<PageProps>().props.auth.user;

    // const { data, setData, patch, errors, processing, recentlySuccessful } =
    //     useForm({
    //         name: user.name,
    //         email: user.email,
    //     });

    // const submit: FormEventHandler = (e) => {
    //     e.preventDefault();

    //     patch(route("profile.update"));
    // };
    return (
        <section className={className}>
            <form className="space-y-6 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <header className="text-left w-full">
                                <h2 className="block text-lg font-medium text-gray-900">
                                    Billing Information
                                </h2>

                                <p className="block mt-1 text-sm text-gray-600">
                                    Fill in the bank information into which you
                                    would want your transaction return and
                                    bonuses.
                                </p>
                            </header>
                        </AccordionTrigger>
                        <AccordionContent className="space-y-3">
                            <div className="">
                                <Image src="/images/card.png" alt="card" />
                            </div>
                            <div className="flex items-center gap-4">
                                <PrimaryButton className="mt-4 bg-gradient-to-b from-green-500 to-blue-700">
                                    Save
                                </PrimaryButton>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </form>
        </section>
    );
}
