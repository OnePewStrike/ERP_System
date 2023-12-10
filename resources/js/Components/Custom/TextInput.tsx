import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    InputHTMLAttributes,
} from "react";

export default forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        isFocused = true,
        ...props
    }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
    ref
) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={`${
                isFocused
                    ? "shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-md rounded-3xl "
                    : "focus:ring-0 focus:border-0 border-0 "
            } ${className}`}
            ref={localRef}
        />
    );
});
