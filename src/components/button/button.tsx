import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import styles from './button.module.css';
import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import {ButtonProps} from "@/components/button/button.props";

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      default: styles['button--default'],
      destructive: styles['button--destructive'],
      outline: styles['button--outline'],
      secondary: styles['button--secondary'],
      ghost: styles['button--ghost'],
      link: styles['button--link'],
    },
    size: {
      default: styles['button--size-default'],
      sm: styles['button--size-sm'],
      lg: styles['button--size-lg'],
      icon: styles['button--size-icon'],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, arrow = 'none', ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const renderArrow = () => {
      if (arrow === 'right') {
        return (
          <ChevronRight className="arrow" />
        );
      } else if (arrow === 'down') {
        return (
          <ChevronDown className="arrow" />
        );
      }
      return null;
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {props.children}
        {arrow !== 'none' && renderArrow()}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };