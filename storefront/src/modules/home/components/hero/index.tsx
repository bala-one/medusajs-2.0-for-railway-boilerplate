import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from 'next/image'

const heroImg = '/images/hero.jpg'
const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
      <Image
        src={heroImg}
        alt="Description of the image"
        priority // Add 'priority' for images above the fold
      />
      </div>
    </div>
  )
}

export default Hero
