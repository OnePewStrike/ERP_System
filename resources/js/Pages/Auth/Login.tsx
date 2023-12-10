import { useEffect, FormEventHandler, useState } from "react";
import Checkbox from "@/Components/Custom/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/Custom/InputError";
import InputLabel from "@/Components/Custom/InputLabel";
import PrimaryButton from "@/Components/Custom/PrimaryButton";
import TextInput from "@/Components/Custom/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import IconButton from "@/Components/Custom/IconButton";
import { GoEye, GoEyeClosed } from "react-icons/go";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-2 p-2 rounded-2xl">
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full rounded-2xl py-3"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
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
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
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

                <div className="flex items-center justify-end">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-semibold"
                        >
                            Forgot your password?
                        </Link>
                    )}
                </div>

                <div className="">
                    <PrimaryButton
                        className="w-full justify-center bg-gradient-to-b from-green-500 to-blue-700 rounded-3xl py-3"
                        disabled={processing}
                    >
                        Sign In
                    </PrimaryButton>
                </div>

                <div className="space-x-1 text-center">
                    <span className="text-sm">Don't have an account?</span>
                    <Link
                        href={route("register")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-semibold"
                    >
                        Register
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
