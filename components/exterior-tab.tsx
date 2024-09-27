import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const exteriorDescription = {
  image: 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/photo_2024-09-27_16-59-35-nZine5QYZacSdOOBIC1LhEpby9sw9n.jpg',
  title: '3D Design Rate',
  titleHindi: '3D डिजाइन दर',
  features: [
    '1 Room design rate - 4,000/-',
    'More than 2 room rate - 3,000/- per room',
    '3D design with 2D dimensions',
    '3 Changes available',
    '50% payment must be in advance',
  ],
  featuresHindi: [
    '1 कमरे का डिजाइन दर - 4,000/-',
    '2 से अधिक कमरों का दर - 3,000/- प्रति कमरा',
    '2D आयामों के साथ 3D डिजाइन',
    '3 परिवर्तन उपलब्ध',
    '50% भुगतान अग्रिम होना चाहिए',
  ]
}

const kitchenImage = 'https://trb9yrhq5p76ro9s.public.blob.vercel-storage.com/photo_2024-09-27_16-45-42-XBGSFM10SFZUpO1Lq93bAEYtGe7Vm6.jpg'

export default function ExteriorTab() {
  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 mb-6">
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
      </CardContent>



      <CardContent className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 mb-6">
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
      </CardContent>
    </Card>
  )
}