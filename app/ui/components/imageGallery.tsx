"use client";

import { StaticImageData } from "next/image";
import { useMemo, useState, useEffect, useRef } from "react";
//import { useMeasure, useWindowSize } from "react-use";
import PixelatedImage from "./pixelatedImage";
import { useElementBounding, useElementSize, useMeasure, useMediaQuery } from "@reactuses/core";
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
}

function convertRemToPixels(rem:number) : number {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export default function ImageGallery({ images, targetHeight, spacing=0}: ImageGalleryProps) {
  // window and container sizing for reactive layout
  const ref = useRef<HTMLDivElement>(null);
  const [containerWidth, height] = useElementSize(ref);
  //const [ref, {width:containerWidth}] = useMeasure<HTMLDivElement>();
  //const {width: windowWidth, height: windowHeight} = useWindowSize();

  const rowImages = useMemo(() => {
    if (containerWidth === 0) return [];

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
      if (containerWidth - spacing*(Math.max(lastrow.images.length,0)) - widthtaken < targetHeight * image.data.width / image.data.height) {
        // close off row with existing images
        if (lastrow.images.length > 0)
          lastrow.rowHeight = targetHeight * (containerWidth - spacing*(Math.max(lastrow.images.length-1,0))) / widthtaken; // close row
        
        // image can't fit in empty row because it would be too wide
        // reduce height instead
        else {
          lastrow.images.push(image);
          lastrow.rowHeight = containerWidth * image.data.height / image.data.width;
        }
        // create new row
        rows.push({images:[]});
        lastrow = rows[rows.length-1];
      }
      lastrow.images.push(image);
    });
    if (rows[rows.length-1].images.length > 0) {
      rows[rows.length-1].rowHeight = targetHeight;
    }
    else { rows.pop(); }
    
    return rows;
  }, [containerWidth, targetHeight]);

  useEffect(()=>{
    let info : string = "Rows: \n";
    rowImages.forEach((row) => {
      info += `images: ${row.images.length} height: ${row.rowHeight}\n`
    })
    console.log(info);
  }, [rowImages])

  return (
	<>
    {// mobile layout
    }
    <div className="flex-col gap 2 flex sm:hidden" style={{gap:spacing}}>
      {images.map((image, imageIndex) =>
        <div className='h-auto w-full shrink-0' 
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

    {// justified desktop layout
    }
    <div ref={ref} className="hidden sm:flex flex-col visible w-full min-h-5 min-w-5" style={{gap:spacing}}>
		{rowImages.map((row, rowIndex)=> (
			<div key={rowIndex} className='flex flex-row w-full' 
				style={{
					height:row.rowHeight||targetHeight,
					gap:spacing
				}}> 
				{row.images.map((image, imageIndex) =>
					<div className='h-full shrink-0' 
            style={{aspectRatio:image.data.width/image.data.height}}
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