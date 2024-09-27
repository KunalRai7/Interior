import WatermarkedImage from './WatermarkedImage'
import { Card, CardContent } from "@/components/ui/card"

const interiorOptions = [
  {
    image: '/interior-1.jpg',
    price: '6,000/-',
    size: '20ft or under',
    features: [
      '3D view with 2D working dimensions',
      '3 changes available',
      '50% must be in advance',
      'Work duration - 10-12 days'
    ]
  },
  {
    image: '/interior-2.jpg',
    price: '8,000/-',
    size: '30ft or above',
    features: [
      '3D view with 2D working dimensions',
      '3 changes available',
      '50% must be in advance',
      'Work duration - 10-12 days'
    ]
  },
  {
    image: '/interior-3.jpg',
    price: '12,000/-',
    size: 'Corner plot 2 side Elevation',
    features: [
      '3D view with 2D working dimensions',
      '3 changes available',
      '50% must be in advance',
      'Work duration - 12-15 days'
    ]
  }
]

export default function InteriorTab() {
  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Interior Design</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-6">
          Transform your living spaces with our expert interior design services. 
          We create harmonious and functional interiors that reflect your personal style.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {interiorOptions.map((option, index) => (
            <div key={index} className="overflow-hidden">
              <WatermarkedImage
                src={option.image}
                alt={`Interior design option ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{option.price}</h3>
              <p className="text-sm text-muted-foreground mb-2">{option.size}</p>
              <ul className="text-sm space-y-1">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}