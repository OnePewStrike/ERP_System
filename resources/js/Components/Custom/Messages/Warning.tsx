import React, { PropsWithChildren, useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert";
import Image from "@/Components/Custom/Image";

interface WarningMessageProps extends PropsWithChildren {
    className?: string;
}

export default function WarningMessage({
    children,
    className,
}: WarningMessageProps) {
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
            variant="warning"
            className={`flex space-x-4 text-white border-2 border-orange-500 bg-orange-300 mb-3 ${className}`}
        >
            {/* <div className="">
                <Image
                    src="images/triangle-exclamation-solid.png"
                    alt="Info"
                    width={15}
                />
            </div> */}
            <div className="text-slate-900">
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>{children}</AlertDescription>
            </div>
        </Alert>
    ) : null;
}
