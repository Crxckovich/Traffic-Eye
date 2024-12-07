import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
	size?: 'b' | 's';
	children: ReactNode;
}