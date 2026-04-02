"use client";

import { StaticImageData } from "next/image";
import { useMemo, useState, useEffect, useRef } from "react";
//import { useMeasure, useWindowSize } from "react-use";
import PixelatedImage from "./pixelatedImage";
import { useMeasure, useMediaQuery } from "@reactuses/core";
//import { useRaf } from "react-use";

export type GalleryImage = {
	data: StaticImageData
	alt: string
	created: Date
}

export type ImageGalleryProps = {
	images: GalleryImage[]
	targetHeight: number
	spacing?: number
  twBreakpoint?: string
	
}

function convertRemToPixels(rem:number) : number {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export default function ImageGallery({ images, targetHeight, spacing=0, twBreakpoint='sm'}: ImageGalleryProps) {
  // window and container sizing for reactive layout
  const ref = useRef<HTMLDivElement>(null);
  const [rect, stop] = useMeasure(ref);
  //const [ref, {width:rect.width}] = useMeasure<HTMLDivElement>();
  //const {width: windowWidth, height: windowHeight} = useWindowSize();

  const [breakpointPx, setBreakpointPx] = useState(640); // default to sm breakpoint

  useEffect(() => {
    const styles = window.getComputedStyle(document.documentElement);
    const breakpointRem = styles.getPropertyValue(`--breakpoint-${twBreakpoint}`);
    const px = convertRemToPixels(Number(breakpointRem.trim().substring(0, breakpointRem.length-3)));
    setBreakpointPx(px);
  }, [twBreakpoint]);

  const isVertical : boolean = useMediaQuery(`(max-width: ${breakpointPx}px)`, false);

  const rowImages = useMemo(() => {
    if (isVertical || rect.width === 0) return [];

    let rows : {images:GalleryImage[], rowHeight?: number}[] = [{images:[]}];

    images.forEach((image) => {
      // last row is the last row that still has space
      let lastrow : {images:GalleryImage[], rowHeight?:number};
      lastrow = rows[rows.length-1];

      // get space remaining in last row
      let widthtaken : number = 0;
      lastrow.images.forEach((addedImage) => {
        widthtaken += targetHeight * addedImage.data.width / addedImage.data.height;
      });

      // see if current image can't fit
      if (rect.width - spacing*(Math.max(lastrow.images.length-1,0)) - widthtaken < targetHeight * image.data.width / image.data.height) {
        lastrow.rowHeight = targetHeight * (rect.width - spacing*(Math.max(lastrow.images.length-1,0))) / widthtaken; // close row

        // create new row
        rows.push({images:[]});
        lastrow = rows[rows.length-1];
      }
      lastrow.images.push(image);
    });
    rows[rows.length-1].rowHeight = targetHeight;
    return rows;
  }, [rect.width, targetHeight, images]);

  if (isVertical) {
    return (
      <>
        {//<p>width: {rect.width} breakpoint: {breakpointPx} vertical: {isVertical.toString()}</p>
        }
        <div ref={ref} className="flex flex-col gap 2" style={{gap:spacing}}>
          {images.map((image, imageIndex) =>
            <div className='h-auto w-full shrink-0  border-b-blue-600' 
              key={image.data.src}
            >
              <PixelatedImage className='h-full w-full object-contain'
                src={image.data}
                alt={image.alt}
                sizes={'(max-width: 500px) 100vw, (max-width: 783px) 33vw, 20vw'}
                preload={imageIndex<5}
              />
            </div>
          )}
        </div>
      </>
    )
  }

  return (
	<>
	  {//<p>width: {rect.width} breakpoint: {breakpointPx} vertical: {isVertical.toString()}</p>
    }
    <div ref={ref} className="flex flex-col" style={{gap:spacing}}>
		{rowImages.map((row, rowIndex)=> (
			<div key={rowIndex} className='flex flex-row w-full border-amber-600' 
				style={{
					height:row.rowHeight||targetHeight,
					gap:spacing
				}}> 
				{row.images.map((image, imageIndex) =>
					<div className='h-full w-auto shrink-0  border-b-blue-600' 
						key={image.data.src}
					>
						<PixelatedImage className='h-full w-full object-contain'
							src={image.data}
							alt={image.alt}
							sizes={'(max-width: 500px) 100vw, (max-width: 783px) 33vw, 20vw'}
							preload={imageIndex<5}
						/>
					</div>
				)}
			</div>
		))}
    </div>
	</>
  );
};