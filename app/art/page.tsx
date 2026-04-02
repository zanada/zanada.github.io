import { artData } from "../lib/art-imports"
import PixelatedImage from "../ui/components/pixelatedImage"
import ImageGallery from "../ui/components/imageGallery"

export default function Page() {
  return (
    <main className="flex flex-1 gap-8 w-full max-w-7xl flex-col sm:px-10 ">
      <ImageGallery 
        images={artData.sort((a,b) => b.created.getTime() - a.created.getTime())} 
        targetHeight={240} 
        spacing = {10}
      />

      {/*
      <div className="flex flex-row flex-wrap gap-4 sm:gap-2">
        {
          artData.sort((a,b) => b.created.getTime() - a.created.getTime()).map((art, index) => (
            <div className='h-auto sm:min-h-60 sm:max-h-80 sm:h-auto shrink-0  border-amber-600 border' 
              key={index}
              style={{aspectRatio: art.data.width/art.data.height}}
            >
              <PixelatedImage className='h-full w-full object-contain'
                src={art.data}
                alt={art.alt}
                sizes={'(max-width: 500px) 100vw, (max-width: 783px) 33vw, 20vw'}
                preload={index<5}
              />
            </div>
          ))
        }
      </div> */}
    </main>
  )
}