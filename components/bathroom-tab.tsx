import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const planningOptions = [
  {
    image: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/photo_2024-09-27_16-18-24-EGOAWLEFwjc78V4JqOJKHlAmcD7M8m.jpg',
    price: '4 Rupees per square feet',
    priceHindi: '4 रुपये प्रति वर्ग फुट',
    title: '1st Plan',
    titleHindi: 'पहली योजना',
    features: [
      '2D planning',
      '3 changes available',
      'Includes Column & beam drawings'
    ],
    featuresHindi: [
      '2डी योजना',
      '3 परिवर्तन उपलब्ध',
      'स्तंभ और बीम चित्र शामिल हैं'
    ]
  },
  {
    image: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/photo_2024-09-27_16-18-28-3hOLPFMbB1vandPae1BcG7ALeSL656.jpg',
    price: '5 Rupees per square feet',
    priceHindi: '5 रुपये प्रति वर्ग फुट',
    title: '2nd Plan',
    titleHindi: 'दूसरी योजना',
    features: [
      '2D planning',
      'Includes Columns and beam drawings',
      'Electrician drawing',
      'Plumbing drawing',
      'Senting drawing',
      'Loha jaal drawing'
    ],
    featuresHindi: [
      '2डी योजना',
      'स्तंभ और बीम चित्र शामिल हैं',
      'इलेक्ट्रीशियन ड्राइंग',
      'प्लंबिंग ड्राइंग',
      'सेंटिंग ड्राइंग',
      'लोहा जाल ड्राइंग'
    ]
  }
]



export default function BathroomTab() {
  return (
    <Card className="h-full">
      <CardContent className="p-4 sm:p-6 h-full overflow-y-auto">
        <h2 className="text-xl sm:text-2xl font-extrabold mb-6">
          Planning Options
          <span className="block text-lg font-normal mt-1">योजना विकल्प</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {planningOptions.map((option, index) => (
            <Card key={index} className="overflow-hidden transition-shadow hover:shadow-lg">
              <div className="relative w-full pt-[100%]">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  className="rotate-image"
                />
              </div>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2">
                  {option.price}
                  <span className="block text-xs mt-1">&nbsp;{option.priceHindi}</span>
                </Badge>
                <h3 className="text-xl font-semibold mb-2">
                  {option.title}
                  <span className="block text-sm font-normal">&nbsp;{option.titleHindi}</span>
                </h3>
                <ul className="text-sm space-y-2 mt-4">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        {feature}
                        <span className="block text-xs mt-1">&nbsp;{option.featuresHindi[featureIndex]}</span>
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