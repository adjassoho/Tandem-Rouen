import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost" | "glass";
    size?: "sm" | "md" | "lg" | "icon";
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {

        const variants = {
            primary: "bg-primary hover:bg-gold-accent text-[#1a1a1a] font-bold tracking-wide shadow-[0_0_15px_rgba(242,185,13,0.3)] hover:shadow-[0_0_20px_rgba(242,185,13,0.5)]",
            outline: "bg-transparent border border-white/30 text-white hover:border-primary hover:text-primary",
            ghost: "bg-transparent text-white hover:text-primary",
            glass: "bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20",
        };

        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-12 px-6 text-sm",
            lg: "h-14 px-8 text-base",
            icon: "size-12 p-0 flex items-center justify-center",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-md transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none uppercase",
                    variants[variant],
                    sizes[size],
                    className
                )}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && (
                    <span className="material-symbols-outlined animate-spin text-base">progress_activity</span>
                )}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";
