import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const exteriorDescription = {
  image: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/photo_2024-09-27_16-59-35-nZine5QYZacSdOOBIC1LhEpby9sw9n.jpg',
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

const kitchenImage = 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/photo_2024-09-27_16-45-42-XBGSFM10SFZUpO1Lq93bAEYtGe7Vm6.jpg'
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
              <Image
                src={exteriorDescription.image}
                alt="Exterior design"
                width={800}
                height={600}
                className="w-full h-64 object-cover"
              />
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
              <Image
                src={kitchenImage}
                alt="Kitchen design"
                width={800}
                height={600}
                className="w-full h-64 object-cover"
              />
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