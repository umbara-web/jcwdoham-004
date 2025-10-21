'use client';
import clsx from 'clsx';
import React from 'react';
import NextImage from 'next/image';

type ImageProps = {
  src?: string;
  id?: string;
  className?: string;
  alt?: string;
  width: number;
  height: number;
} & Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'width' | 'height' | 'src' | 'alt'
>;

const Image: React.FC<ImageProps> = ({
  src,
  id,
  className = '',
  alt,
  width,
  height,
  ...props
}) => {
  return (
    <NextImage
      src={src || ''}
      alt={alt ?? id ?? ''}
      width={width}
      height={height}
      className={clsx(className)}
      loading='lazy'
      {...props}
    />
  );
};

export default Image;
