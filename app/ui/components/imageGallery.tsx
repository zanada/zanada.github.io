import { StaticImageData } from "next/image";
import { useMemo } from "react";
import { useMeasure } from "react-use";
import PixelatedImage from "./pixelatedImage";

export type GalleryImage = {
	data: StaticImageData
	alt: string
	created: Date
}

export type ImageGalleryProps = {
	images: GalleryImage[]
	targetHeight: number
	spacing: number
}

export default function ImageGallery({ images, targetHeight, spacing=0 }: ImageGalleryProps) {
  const [ref, {width}] = useMeasure<HTMLDivElement>();

  const rowImages = useMemo(() => {
	let rows : {images:GalleryImage[], rowHeight?: number}[] = [{images:[]}];
	images.forEach((image) => {
		// last row is the last row that still has space
		let lastrow : {images:GalleryImage[], rowHeight?:number};
		// if (rows[rows.length-1].rowHeight !== undefined) {
		// 	// if last row in array is full, add a new row
		// 	rows.push({images:[]});
		// }
		lastrow = rows[rows.length-1];

		// get space remaining in last row
		let widthtaken : number = 0;
		lastrow.images.forEach((addedImage) => {
			widthtaken += targetHeight * addedImage.data.width / addedImage.data.height;
		});

		// see if current image can't fit
		if (width - spacing*(Math.max(lastrow.images.length-1,0)) - widthtaken < targetHeight * image.data.width / image.data.height) {
			lastrow.rowHeight = targetHeight * (width - spacing*(Math.max(lastrow.images.length-1,0))) / widthtaken; // close row

			// create new row
			rows.push({images:[]});
			lastrow = rows[rows.length-1];
		}
		lastrow.images.push(image);
	});
	rows[rows.length-1].rowHeight = targetHeight;
	return rows;
  }, [width, targetHeight, images]);

  return (
	<>
	<p>width: {width}</p>
    <div ref={ref} className="flex flex-col" style={{gap:spacing}}>
		{rowImages.map((row,rowId)=> (
			<div key={rowId} className='flex flex-row w-full border-amber-600' 
				style={{
					height:row.rowHeight||targetHeight,
					gap:spacing
				}}> 
				{row.images.map((image, imageId) =>
					<div className='h-full w-auto shrink-0  border-b-blue-600' 
						key={imageId}
					>
						<PixelatedImage className='h-full w-full object-contain'
							src={image.data}
							alt={image.alt}
							sizes={'(max-width: 500px) 100vw, (max-width: 783px) 33vw, 20vw'}
							preload={imageId<5}
						/>
					</div>
				)}
			</div>
		))}
    </div>
	</>
  );
};