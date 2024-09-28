import Image from 'next/image'
import { X } from 'lucide-react'

interface ImageModalProps {
  src: string
  onClose: () => void
}

export default function ImageModal({ src, onClose }: ImageModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative max-w-3xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <X className="w-6 h-6" />
        </button>
        <Image
          src={src}
          alt="Full size image"
          width={1200}
          height={800}
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}