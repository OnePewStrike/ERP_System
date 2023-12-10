import { useEffect, FormEventHandler, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/Custom/InputError";
import InputLabel from "@/Components/Custom/InputLabel";
import PrimaryButton from "@/Components/Custom/PrimaryButton";
import TextInput from "@/Components/Custom/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import IconButton from "@/Components/Custom/IconButton";
import { GoEye, GoEyeClosed } from "react-icons/go";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        type: "manager",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const toggleConfirmPasswordVisiblity = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit} className="space-y-2 p-2 rounded-2xl">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="block w-full py-3 rounded-2xl"
                        autoComplete="name"
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full rounded-2xl py-3"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="" />
                </div>
                <div className="">
                    <InputLabel htmlFor="password" value="Password" />

                    <div className="flex rounded-3xl border border-gray-300 overflow-hidden">
                        <TextInput
                            id="password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={data.password}
                            isFocused={false}
                            className="block w-full rounded-3xl py-3 border-0"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />
                        <IconButton onClick={togglePasswordVisibility}>
                            {showPassword ? (
                                <GoEyeClosed size={20} />
                            ) : (
                                <GoEye size={20} />
                            )}
                        </IconButton>
                    </div>

                    <InputError message={errors.password} className="" />
                </div>

                <div className="">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />
                    <div className="flex rounded-3xl border border-gray-300 overflow-hidden">
                        <TextInput
                            id="password_confirmation"
                            type={showConfirmPassword ? "text" : "password"}
                            name="password_confirmation"
                            value={data.password_confirmation}
                            isFocused={false}
                            className="block w-full rounded-3xl py-3 border-0"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                        />

                        <IconButton onClick={toggleConfirmPasswordVisiblity}>
                            {showConfirmPassword ? (
                                <GoEyeClosed size={20} />
                            ) : (
                                <GoEye size={20} />
                            )}
                        </IconButton>
                    </div>
                    <InputError
                        message={errors.password_confirmation}
                        className=""
                    />
                </div>

                <div className="flex items-center justify-end">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-semibold"
                    >
                        Already have an account?
                    </Link>
                </div>

                <div className="">
                    <PrimaryButton
                        className="w-full justify-center bg-gradient-to-b from-green-500 to-blue-700 rounded-3xl py-3"
                        disabled={processing}
                    >
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
