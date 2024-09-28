import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

// Updated portfolio images without text
const portfolioImages = [
  { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-28_12-54-38-1oXENyYjU5PXfAaVbZubLgd9kpznTb.jpg', alt: 'Project 1' },
  { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-28_12-54-45-8tF3SHNOfMYk66wBPQs9UT5VKDPiMy.jpg', alt: 'Project 2' },
  { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-28_12-54-48-RXLaYRgAQW5C5f8zBcEjxTQR2FV1rJ.jpg', alt: 'Project 3' },
  { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-28_12-54-54%20-%20Copy-RzHzQlZ4DjmyF6ZiXID65Eej2xfIoe.jpg', alt: 'Project 4' },
  { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-28_12-54-54-PUcPz6lbYC5rKYMNlmmJDq6NYxPVxK.jpg', alt: 'Project 5' },
  { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-28_12-54-57-fz0vEHgtbldByYWgpRWx4EX9bNcmCc.jpg', alt: 'Project 6' },
  { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-28_12-54-59-kJp0F5HXighLiIdncTBPVsZzTrWMTr.jpg', alt: 'Project 7' },
  { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-28_12-55-02-szitpe5IE2e6x97pc1JlZJOUFPXGJz.jpg', alt: 'Project 8' },
  { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-28_12-55-05-EicjPnqCE61UlK2br38ly0NRmljHKp.jpg', alt: 'Project 9' },
  { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-28_12-55-08-r54p2uxE6LLa0sdVquAg7BI9nj5ylN.jpg', alt: 'Project 10' },
]

export default function WorkTab() {
  return (
    <Card className="h-full">
      <CardContent className="p-4 sm:p-6 h-full overflow-y-auto">
        <h2 className="text-xl sm:text-2xl font-extrabold mb-4">
          Our Work
          <span className="block text-lg font-normal mt-1">हमारा काम</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {portfolioImages.map((image, index) => (
            <div 
              key={index} 
              className="transition-transform hover:scale-105"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}