import React, { PropsWithChildren, useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert";
import Image from "@/Components/Custom/Image";

interface InfoMessageProps extends PropsWithChildren {
    className?: string;
}

export default function InfoMessage({ children, className }: InfoMessageProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 10000);

        return () => {
            clearTimeout(timeout);
        };
    }, []); // Run this effect only once on component mount

    return visible ? (
        <Alert
            variant="info"
            className={`flex space-x-4 text-white border-2 border-sky-500 bg-sky-300 mb-3 ${className}`}
        >
            {/* <div className="">
                <Image
                    src="images/circle-info-solid.png"
                    alt="Info"
                    width={16}
                />
            </div> */}
            <div className="text-slate-900">
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>{children}</AlertDescription>
            </div>
        </Alert>
    ) : null;
}
