import Image from 'next/image'
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
}

export function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[90vw] sm:max-h-[90vh] p-0">
        <div className="relative w-full h-[80vh]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="rotate-image object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}