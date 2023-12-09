import React from "react";

interface ApplicationTextProps {
    className?: string;
}

const ApplicationText: React.FC<ApplicationTextProps> = ({ className }) => {
    return (
        <span
            className={`text-xl font-semibold text-green-700 mt-2 ${className}`}
        >
            GreenSeer
        </span>
    );
};

export default ApplicationText;
