import React from 'react';
import NextJsImage from 'next/image';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

export const Image = ({ alt = 'image', src, priority, wrapperClassName, ...props }) => {
	return (
		<div className={`${wrapperClassName} relative`}>
			{src && (
				<NextJsImage alt={alt} priority={true} width={3840} height={2160} src={src?.src ? src?.src : src} {...props} style={{ ...props?.style }} />
			)}
			{!src && (
				<div {...props} className={`${props?.className} flex items-center justify-center bg-gray-800`}>
					<InsertPhotoOutlinedIcon className='text-[50px] text-zinc-300' />
				</div>
			)}
			<div className='absolute inset-0 bg-transparent opacity-75'></div>
		</div>
	);
};

export const NativeImage = (props) => {
	return (
		<div className='relative'>
			<img fetchPriority='high' {...props} style={{ ...props?.style }} />
			<div className='absolute inset-0 bg-transparent opacity-75'></div>
		</div>
	);
};
