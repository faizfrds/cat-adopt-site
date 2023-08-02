import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps 
    extends React.ButtonHTMLAttributes<HTMLButtonElement>{}


const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button type={type}
        className={twMerge("w-full rounded-full bg-cyan-600 border border-transparent p-3 disabled:cursor-not-allowed disabled:opacity-75 transition text-white font-bold hover:opacity-75", className)}
        disabled={disabled}
        ref={ref}
        {...props}
        >
            {children}
        </button>
    )
})

Button.displayName = "Button";
 
export default Button;