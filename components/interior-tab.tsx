import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

const interiorOptions = [
  {
    images: [
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior-1-la1i0urVL8RWQFrdPundPG8o0NW6SB.jpg',
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-29_23-05-42-n7vevMPkCxSJgPPetQYMSSkDXu4Zo3.jpg',
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-29_23-05-45-JDRPc55wUFnerk5uWkVHhNgalNujDI.jpg'
    ],
    price: '6,000/-',
    size: '20ft or under',
    sizeHindi: ' 20 फीट या उससे कम',
    features: [
      '3D view with 2D working dimensions',
      '3 changes available',
      '50% must be in advance',
      'Work duration - 10-12 days'
    ],
    featuresHindi: [
      '3डी व्यू 2डी प्लानिंग के साथ',
      '3 परिवर्तन करवा सकते हैं',
      '50% एडवांस देना अनिवार्य है',
      '10-12 दिन के बीच काम पूरा कर दिया जाएगा'
    ]
  },
  {
    images: [
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior-2-HRwGpHrTiatmSKm89CLd5pW7G6bJ3W.jpg',
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-29_23-08-27-zEZeuqylQA3iMItQYm92M02EKG2KxY.jpg',
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-29_23-08-30-5EAFd4mKTuOt0Ei2283eMMl3SrXFFM.jpg',
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-29_23-08-33-UY13g5A6nLifnZqyulNhRrU9LSXhJj.jpg'
    ],
    price: '8,000/-',
    size: '21ft or above',
    sizeHindi: ' 21 फीट या उससे अधिक',
    features: [
      '3D view with 2D working dimensions',
      '3 changes available',
      '50% must be in advance',
      'Work duration - 15-20 days'
    ],
    featuresHindi: [
      '3डी व्यू 2डी प्लानिंग के साथ',
      '3 परिवर्तन करवा सकते हैं',
      '50% एडवांस देना अनिवार्य है',
      '15-20 दिन के बीच काम पूरा कर दिया जाएगा'
    ]
  },
  {
    images: [
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior-3-3Ek03znNird4rWg7C4ZsyYfn16U0rj.jpg',
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-29_23-09-28-m3AanmBsCXfgFjpzEDvGv6q6uPnXOa.jpg',
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-29_23-09-31-qAHFjtpYmNUVI7edEZvSJzFvsNAqdI.jpg',
      'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-29_23-09-34-1khowpj3psGOQp1DU5aBUIuGodVLpJ.jpg'
    ],
    price: '12,000/-',
    size: 'Corner plot 2 side Elevation',
    sizeHindi: ' कोने का प्लॉट 2 तरफ का एलिवेशन',
    features: [
      '3D view with 2D working dimensions',
      '3 changes available',
      '50% must be in advance',
      'Work duration - 12-15 days'
    ],
    featuresHindi: [
      '3डी व्यू 2डी प्लानिंग के साथ',
      '3 परिवर्तन करवा सकते हैं',
      '50% एडवांस देना अनिवार्य है',
      '12-15 दिन के बीच काम पूरा कर दिया जाएगा'
    ]
  }
]

function ImageCarousel({ images }: { images: string[] }) {
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
      <div className="embla overflow-hidden absolute inset-0" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {images.map((image, imgIndex) => (
            <div key={imgIndex} className="embla__slide flex-[0_0_100%] relative h-full">
              <Image
                src={image}
                alt={`Image ${imgIndex + 1}`}
                fill
                className="object-cover"
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

export default function InteriorTab() {
  return (
    <Card className="h-full">
      <CardContent className="p-4 sm:p-6 h-full overflow-y-auto">
        <h2 className="text-xl sm:text-2xl font-extrabold mb-6">
          Exterior Design
          <span className="block text-lg font-normal mt-1">बाहरी डिजाइन</span>
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {interiorOptions.map((option, index) => (
            <Card key={index} className="overflow-hidden transition-shadow hover:shadow-lg">
              <div className="aspect-[4/3] relative">
                <ImageCarousel images={option.images} />
              </div>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2">
                  {option.size}
                  <span className="block text-xs mt-1">&nbsp;{option.sizeHindi}</span>
                </Badge>
                <h3 className="text-xl font-bold mb-2">{option.price}</h3>
                <ul className="text-sm space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        {feature}
                        <span className="block text-xs mt-1">{option.featuresHindi[featureIndex]}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}