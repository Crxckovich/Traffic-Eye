import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 outline-none w-full bg-background px-4 py-5 dark:bg-sidebar items-center rounded-lg border border-input text-sm ring-offset-background transition-all duration-150 focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
