import { PProps } from './P.props';
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({ size = 'b', children, className, ...props }: PProps): JSX.Element => {
	return (
		<p className={cn(styles.b, className, {
			[styles.s]: size == 's'
		})} {...props}>
			{children}
		</p>
	);
};