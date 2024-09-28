import { Instagram, MapPin, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-600">Bhopal, MP India</span>
            </div>
            <div className="flex items-center space-x-3">
              <MessageCircle className="w-5 h-5 text-gray-600" />
              <a href="https://wa.me/+918319099875" className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">
                +91 8319099875
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/sheh_zaan01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Follow us on Instagram</span>
              </a>
            </div>
            <p className="text-sm text-gray-600">@Sheh_zaan01</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex justify-center">
            <p className="text-sm text-gray-600">&copy; 2024 Shehzaan Interior & Construction Company.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}