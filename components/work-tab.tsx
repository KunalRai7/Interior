import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

const portfolioImages = {
  interior: [
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_4659.JPG', alt: 'Interior Project 1' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_5169.JPG', alt: 'Interior Project 2' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_5170.JPG', alt: 'Interior Project 3' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_5171.JPG', alt: 'Interior Project 4' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_5172.JPG', alt: 'Interior Project 5' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_5593.JPG', alt: 'Interior Project 6' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_5594.JPG', alt: 'Interior Project 7' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_5595.JPG', alt: 'Interior Project 8' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_5661.JPG', alt: 'Interior Project 9' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_5662.JPG', alt: 'Interior Project 10' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_5663.JPG', alt: 'Interior Project 11' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_5664.JPG', alt: 'Interior Project 12' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_3810.JPG', alt: 'Interior Project 13' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_3811.JPG', alt: 'Interior Project 14' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_3812.JPG', alt: 'Interior Project 15' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_3813.JPG', alt: 'Interior Project 16' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_4165.JPG', alt: 'Interior Project 17' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_4299.JPG', alt: 'Interior Project 18' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_4300.JPG', alt: 'Interior Project 19' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_4302.JPG', alt: 'Interior Project 20' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_4321.JPG', alt: 'Interior Project 21' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_4655.JPG', alt: 'Interior Project 22' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior/IMG_4656.JPG', alt: 'Interior Project 23' },
     ],
  exterior: [
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/ex/IMG_4352.JPG', alt: 'Exterior Project 1' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/ex/IMG_4353.JPG', alt: 'Exterior Project 2' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/ex/IMG_4354.JPG', alt: 'Exterior Project 3' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/ex/IMG_4356.JPG', alt: 'Exterior Project 4' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/ex/IMG_4357.JPG', alt: 'Exterior Project 5' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/ex/IMG_4359.JPG', alt: 'Exterior Project 6' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/ex/IMG_4361.JPG', alt: 'Exterior Project 7' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/ex/IMG_4368.JPG', alt: 'Exterior Project 8' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/ex/IMG_4382.JPG', alt: 'Exterior Project 9' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/ex/IMG_4485.JPG', alt: 'Exterior Project 10' },
    { src: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/ex/IMG_4515.JPG', alt: 'Exterior Project 11' },
  ]
}

function ImageCarousel({ images }: { images: { src: string, alt: string }[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="relative w-full h-full">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((image, imgIndex) => (
            <div key={imgIndex} className="embla__slide flex-[0_0_100%] min-w-0">
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg"
                priority={imgIndex === 0}
                loading={imgIndex === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
        {images.map((_, dotIndex) => (
          <button
            key={dotIndex}
            className={`w-2 h-2 mx-1 rounded-full transition-all duration-200 ${
              dotIndex === selectedIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => scrollTo(dotIndex)}
            aria-label={`Go to slide ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function PortfolioCategory({ title, titleHindi, images }: { title: string, titleHindi: string, images: { src: string, alt: string }[] }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl sm:text-2xl font-extrabold mb-4">
        {title}
        <span className="block text-lg font-normal mt-1">{titleHindi}</span>
      </h3>
      <ImageCarousel images={images} />
    </div>
  )
}

export default function WorkTab() {
  return (
    <Card className="h-full">
      <CardContent className="p-4 sm:p-6 h-full overflow-y-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">
          Our Work
          <span className="block text-xl font-normal mt-1">हमारा काम</span>
        </h2>
        <PortfolioCategory 
          title="Interior Design"
          titleHindi="आंतरिक डिजाइन"
          images={portfolioImages.interior}
        />
        <PortfolioCategory 
          title="Exterior Design"
          titleHindi="बाहरी डिजाइन"
          images={portfolioImages.exterior}
        />
      </CardContent>
    </Card>
  )
}