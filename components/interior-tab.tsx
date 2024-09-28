import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const interiorOptions = [
  {
    image: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior-1-la1i0urVL8RWQFrdPundPG8o0NW6SB.jpg',
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
    image: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior-2-HRwGpHrTiatmSKm89CLd5pW7G6bJ3W.jpg',
    price: '8,000/-',
    size: '21ft or above',
    sizeHindi: ' 21 फीट या उससे अधिक',
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
    image: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/interior-3-3Ek03znNird4rWg7C4ZsyYfn16U0rj.jpg',
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
      '10-12 दिन के बीच काम पूरा कर दिया जाएगा'
    ]
  }
]

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
              <Image
                src={option.image}
                alt={`Interior design option ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
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