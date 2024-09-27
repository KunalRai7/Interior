import { Card, CardContent } from "@/components/ui/card"

export default function BathroomTab() {
  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Bathroom Remodeling</h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Create your dream bathroom with our expert remodeling services. 
          We combine functionality with luxury to deliver stunning bathroom spaces.
        </p>
      </CardContent>
    </Card>
  )
}