import React from "react";
import Image from "./Image";

interface ApplicationLogoProps {}

const ApplicationLogo: React.FC<ApplicationLogoProps> = (props) => {
    return (
        <Image src="/images/tree-logo.png" alt="Logo" width={45} {...props} />
    );
};

export default ApplicationLogo;
