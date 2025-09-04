// components/ui/button.tsx
import * as React from "react"
import { cn } from "@/lib/utils" // helper to merge classNames (optional)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg"
}

export function Button({ className, size = "md", ...props }: ButtonProps) {
  const sizeClasses =
    size === "sm"
      ? "px-3 py-1 text-sm"
      : size === "lg"
      ? "px-6 py-3 text-lg"
      : "px-4 py-2 text-base"

  return (
    <button
      className={cn(
        "rounded-md font-medium transition-colors",
        sizeClasses,
        className
      )}
      {...props}
    />
  )
}
