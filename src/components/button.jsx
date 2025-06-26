'use client';
import { Button } from '@/components/mui';
import styles from '@/styles/components.module.css';

const CustomButton = (props) => {
	const { background, color, ...buttonProps } = props;
	return (
		<Button
			{...buttonProps}
			style={{ '--background-color': props?.background, '--text-color': props?.color }}
			className={`${styles.button} font-[300] normal-case ${props?.className}`}>
			{props?.children}
		</Button>
	);
};

export default CustomButton;
