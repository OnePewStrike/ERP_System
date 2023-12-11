import Image from "@/Components/Custom/Image";
import React from "react";
import { Button } from "@/Components/ui/button";

export default function IntroBanner() {
    return (
        <>
            <Image
                src="/images/bg-img.png"
                className="h-[15em] z-0 absolute top-0 left-0 w-full rounded-md"
                alt="Background Image"
            />
            <div className="h-[15em] z-10 flex items-center justify-between items-center gap-32 p-4 px-24 w-full relative">
                <div className="w-full grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-1 space-y-2">
                        <span className="text-white font-semibold text-2xl">
                            Transactions
                        </span>
                        <p className="text-sm text-white">
                            Hi welcome, this page is the general overview
                            section of the admin panel which you could edit and
                            modify the view of the page to ya’ preferred taste.
                        </p>
                    </div>
                    <Button
                        variant="ghost"
                        className="w-32 text-white bg-gradient-to-b from-green-500 to-blue-700"
                    >
                        Learn More
                    </Button>
                </div>
                <Image
                    src="/images/overview-img.png"
                    alt="Overview Image"
                    width={300}
                />
            </div>
        </>
    );
}
