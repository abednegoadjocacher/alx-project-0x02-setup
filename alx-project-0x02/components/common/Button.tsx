import React from "react";
import { ButtonProps } from "@/interfaces";
const Button: React.FC<ButtonProps> = ({ title, styles }) => {
    return (
        <button className={`px-6 py-3 bg-green-500 text-white hover:opacity-90 transition-opacity duration-300 ${styles}`}
        >
            {title}
        </button>
    )
}

export default Button;