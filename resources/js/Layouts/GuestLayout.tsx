import ApplicationLogo from "@/Components/Custom/ApplicationLogo";
import ApplicationText from "@/Components/Custom/ApplicationText";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="absolute top-5 left-5">
                <Link href="/" className="flex items-center gap-1">
                    <ApplicationLogo />
                    <ApplicationText />
                </Link>
            </div>

            <div className="w-11/12 sm:w-[28em] px-6 py-10 mx-0 bg-white shadow-md rounded-2xl">
                {children}
            </div>
        </div>
    );
}
