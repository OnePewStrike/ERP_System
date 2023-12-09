import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
    children?: ReactNode;
}

export default function IconButton({
    type = "button",
    className = "",
    disabled,
    children,
    ...props
}: IconButtonProps) {
    return (
        <button
            {...props}
            type={type}
            className={
                "flex items-center justify-center px-4 py-2 bg-ingerit object-cover" +
                className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
