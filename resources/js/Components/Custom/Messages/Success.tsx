import React, { PropsWithChildren, useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert";
import Image from "@/Components/Custom/Image";

interface SuccessMessageProps extends PropsWithChildren {
    className?: string;
}

export default function SuccessMessage({
    children,
    className,
}: SuccessMessageProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 10000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return visible ? (
        <Alert
            variant="success"
            className={`flex space-x-4 text-white border-2 border-green-500 bg-green-300 mb-3 ${className}`}
        >
            {/* <div className="">
                <Image src="images/check-solid.png" alt="Info" width={14} />
            </div> */}
            <div className="text-slate-900">
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>{children}</AlertDescription>
            </div>
        </Alert>
    ) : null;
}
