import { MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Marquee from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

// ... existing imports ...

const reviews = [
  {
    name: "राजेश कुमार",
    body: "शेहज़ान इंटीरियर ने मेरे घर को एक सपने में बदल दिया है। उनकी क्रिएटिविटी और प्रोफेशनलिज्म अद्भुत है।",
    img: "https://avatar.vercel.sh/rajesh",
  },
  {
    name: "Priya Sharma",
    body: "I'm absolutely thrilled with the transformation of my office space. Shehzaan Interior's attention to detail is impeccable!",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "अमित पटेल",
    body: "बजट के अनुसार उत्कृष्ट काम। टीम बहुत सहयोगी थी और समय पर प्रोजेक्ट पूरा किया। बहुत खुश हूँ!",
    img: "https://avatar.vercel.sh/amit",
  },
  {
    name: "Neha Gupta",
    body: "The team at Shehzaan Interior is incredibly talented. They turned my outdated kitchen into a modern masterpiece!",
    img: "https://avatar.vercel.sh/neha",
  },
  {
    name: "संजय वर्मा",
    body: "मेरे रेस्तरां का इंटीरियर देखकर ग्राहक दंग रह जाते हैं। शेहज़ान इंटीरियर का बहुत-बहुत धन्यवाद!",
    img: "https://avatar.vercel.sh/sanjay",
  },
  {
    name: "Anita Desai",
    body: "From concept to execution, Shehzaan Interior exceeded all my expectations. Truly a 5-star experience!",
    img: "https://avatar.vercel.sh/anita",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

// ... existing Footer component code ...

export default function Footer() {
  return (
    <footer className="py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto md:max-w-4xl lg:max-w-5xl">
          {/* Review Slider */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">What our customers say:</h3>
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
              <Marquee pauseOnHover className="[--duration:40s]">
                {firstRow.map((review) => (
                  <ReviewCard key={review.name} {...review} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:40s]">
                {secondRow.map((review) => (
                  <ReviewCard key={review.name} {...review} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
          </div>

          {/* CTA Card */}
          <Card className="mb-8 overflow-hidden transition-shadow hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Need assistance? Contact us now!
                <span className="block text-sm font-normal mt-1">मदद चाहिए? अभी संपर्क करें!</span>
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
                <div className="mb-4 sm:mb-0">
                  <p className="text-lg font-semibold">+91 8319099875</p>
                </div>
                <div className="flex space-x-2 w-full sm:w-auto">
                  <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] text-white flex-1 sm:flex-initial">
                    <a href="https://wa.me/+918319099875" className="flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </Button>
                  <Button asChild className="bg-[#E4405F] hover:bg-[#C13584] text-white flex-1 sm:flex-initial">
                    <a href="https://www.instagram.com/sheh_zaan01" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Copyright and Location */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground mb-2 sm:mb-0">&copy; 2024 Shehzaan Interior & Construction Company.</p>
              <Badge variant="secondary" className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Bhopal, MP
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
function ReviewCard({ name, body, img }: { name: string; body: string; img: string }) {
  return (
    <figure
      className={cn(
        "relative w-64 mx-2 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <figcaption className="text-sm font-medium dark:text-white">
          {name}
        </figcaption>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}
