import React, { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    height?: number | string;
    width?: number | string;
    className?: string;
}

export default function Image({
    src,
    alt,
    height,
    width,
    className = "",
    ...props
}: ImageProps) {
    return (
        <img
            src={src}
            alt={alt}
            height={height}
            width={width}
            {...props}
            className={"object-cover" + className}
        />
    );
}
