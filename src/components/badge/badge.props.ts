import { VariantProps } from "class-variance-authority";
import {badgeVariants} from "@/components/badge/badge";


export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}