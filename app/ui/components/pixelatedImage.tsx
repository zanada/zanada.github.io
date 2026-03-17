'use client'

import ExportedImage, { ExportedImageProps } from 'next-image-export-optimizer';
import clsx from 'clsx';
import { useState } from 'react';

// Extension of image that renders blured image as pixelated and switches to 
// smooth once loaded
export default function PixelatedImage(props:ExportedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  
	return (
		<ExportedImage 
      {...props} 
      className={clsx(props.className,
      {
        '[image-rendering:pixelated]': isLoaded === false,
        '[image-rendering:auto]': isLoaded === true,
      })}
      onLoad={(event):void=>{handleImageLoad(); if(props.onLoad) {props.onLoad(event)}}}
    />
	);
}