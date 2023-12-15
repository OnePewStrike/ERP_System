import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert";
import Image from "@/Components/Custom/Image";
import { PropsWithChildren, useEffect, useState } from "react";

interface ErrorMessageProps extends PropsWithChildren {
    className?: string;
}

export default function ErrorMessage({
    children,
    className,
}: ErrorMessageProps) {
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
            variant="destructive"
            className={`flex space-x-4 text-white border-2 border-red-500 bg-red-300 mb-3 ${className}`}
        >
            {/* <div className="">
                <Image src="images/ban-solid.png" alt="Info" width={18} />
            </div> */}
            <div className="text-slate-900">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{children}</AlertDescription>
            </div>
        </Alert>
    ) : null;
}
