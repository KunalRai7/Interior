import { Card, CardContent } from "@/components/ui/card"

export default function ExteriorTab() {
  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Interior Design</h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Enhance your property&apos;s curb appeal with our exterior design solutions. 
          From landscaping to facade improvements, we&apos;ll make your home stand out.
        </p>
      </CardContent>
    </Card>
  )
}