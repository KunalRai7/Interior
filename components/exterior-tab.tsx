import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

const exteriorDescription = {
  images: [
    'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/photo_2024-09-27_16-59-35-nZine5QYZacSdOOBIC1LhEpby9sw9n.jpg',
    'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-30_12-22-19-gueC1KstkymuIdX4KpUVscZ0OqDyPT.jpg',
    'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-30_12-22-22-YMetdLkBBpv6NTbXobB3i7bM0Bv4KY.jpg',
    'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-30_12-22-25-KSwuoflN9Go2KnnN9riG3qItPSb2BB.jpg',
  ],
  title: '3D Design Rate',
  titleHindi: '3D डिजाइन रेट',
  features: [
    '1 Room design rate - 4,000/-',
    'More than 2 room rate - 3,000/- per room',
    '3D design with 2D dimensions',
    '3 Changes available',
    '50% payment must be in advance',
  ],
  featuresHindi: [
    '1 कमरे के डिज़ाइन का रेट - 4,000/-',
    '2 से ज्यादा कामरो के डिजाइन का रेट 3,000/- एक रूम',
    '3डी व्यू 2डी प्लानिंग के साथ',
    '3 परिवर्तन करवा सकते हैं',
    '50% एडवांस देना अनिवार्य है',
  ]
}

const kitchenImages = [
  'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/photo_2024-09-27_16-45-42-XBGSFM10SFZUpO1Lq93bAEYtGe7Vm6.jpg',
  'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-30_12-24-34-3cSqO2WIZJU2kqKZft5XVqAOE2hZTV.jpg',
  'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-30_12-24-37-u1cajL7w2XkEpZRFpw8veONc3mSmYV.jpg',
  'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/work/photo_2024-09-30_12-24-40-7jeP9v5ugrxjPcVC2GcziOzzR9AfVm.jpg',
]

const bathroomImage = 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/photo_2024-09-27_17-16-46-UEmQ8GCmRMc12yKSitXUR9NOXUd8GS.jpg'

const bathroomDescription = {
  title: '3D Design Rate',
  titleHindi: '3D डिजाइन रेट',
  features: [
    '3,000/- bathroom design',
    '3 changes available',
    '2D working dimensions',
    '50% must be in advance',
    'Work duration - 5-8 days',
  ],
  featuresHindi: [
    '3,000/- बाथरूम डिजाइन',
    '3 परिवर्तन करवा सकते हैं',
    '2डी कार्य प्रणाली',
    '50% एडवांस देना अनिवार्य है',
    '5-8 दिन के बीच काम पूरा कर दिया जाएगा',
  ]
}

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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

export default function ExteriorTab() {
  return (
    <Card className="h-full">
      <CardContent className="p-4 sm:p-6 h-full overflow-y-auto">
        <div className="space-y-8">
          {/* Interior Design Section */}
          <section>
            <h2 className="text-xl sm:text-2xl font-extrabold mb-4">
              Interior Design
              <span className="block text-lg font-normal mt-1">अंदरूनी डिजाइन</span>
            </h2>
            
            <Card className="overflow-hidden transition-shadow hover:shadow-lg">
              <div className="aspect-[4/3] relative">
                <ImageCarousel images={exteriorDescription.images} />
              </div>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2">
                  {exteriorDescription.title}
                  <span className="block text-xs mt-1">&nbsp;{exteriorDescription.titleHindi}</span>
                </Badge>
                <ul className="text-sm space-y-2 mt-4">
                  {exteriorDescription.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        {feature}
                        <span className="block text-xs mt-1">&nbsp;{exteriorDescription.featuresHindi[featureIndex]}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Kitchen Design Section */}
          <section>
            <h2 className="text-xl sm:text-2xl font-extrabold mb-4">
              Kitchen Design
              <span className="block text-lg font-normal mt-1">किचन डिजाइन</span>
            </h2>
            
            <Card className="overflow-hidden transition-shadow hover:shadow-lg">
              <div className="aspect-[4/3] relative">
                <ImageCarousel images={kitchenImages} />
              </div>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2">
                  {exteriorDescription.title}
                  <span className="block text-xs mt-1">&nbsp;{exteriorDescription.titleHindi}</span>
                </Badge>
                <ul className="text-sm space-y-2 mt-4">
                  {exteriorDescription.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        {feature}
                        <span className="block text-xs mt-1">&nbsp;{exteriorDescription.featuresHindi[featureIndex]}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Bathroom Design Section */}
          <section>
            <h2 className="text-xl sm:text-2xl font-extrabold mb-4">
              Bathroom Design
              <span className="block text-lg font-normal mt-1">बाथरूम डिजाइन</span>
            </h2>
            
            <Card className="overflow-hidden transition-shadow hover:shadow-lg">
              <Image
                src={bathroomImage}
                alt="Bathroom design"
                width={800}
                height={600}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2">
                  {bathroomDescription.title}
                  <span className="block text-xs mt-1">&nbsp;{bathroomDescription.titleHindi}</span>
                </Badge>
                <ul className="text-sm space-y-2 mt-4">
                  {bathroomDescription.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        {feature}
                        <span className="block text-xs mt-1">&nbsp;{bathroomDescription.featuresHindi[featureIndex]}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </CardContent>
    </Card>
  )
}