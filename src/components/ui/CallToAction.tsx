import Image from "next/image"
import Link from "next/link"
import { Button } from "../Button"

export function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="mx-auto max-w-6xl">
      <div className="grid items-center gap-8 sm:grid-cols-6">
        <div className="sm:col-span-2">
          <h2
            id="cta-title"
            className="scroll-my-60 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl"
          >
            Ready to get started?
          </h2>
          <p className="mt-3 mb-8 text-lg text-gray-600">
            Begin your ambient living journey today or talk to our design
            specialists about your specific environment needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="text-md bg-black px-6 py-3.5 font-medium tracking-wide text-white shadow-sm transition-all duration-300 ease-out hover:bg-gray-900 hover:ring-2 hover:ring-gray-400 focus:ring-2 focus:ring-gray-600 focus:outline-none"
            >
              <Link href="#">Start now</Link>
            </Button>
            <Button asChild className="text-md" variant="secondary">
              <Link href="#">Find nearest showroom</Link>
            </Button>
          </div>
        </div>
        <div className="relative isolate rounded-xl sm:col-span-4 sm:h-full">
          <Image
            aria-hidden
            alt="Farm with vehicles"
            src="/images/sil-bg-2.jpg"
            height={1000}
            width={1000}
            className="absolute inset-0 -z-10 rounded-2xl blur-xl"
          />
          <Image
            alt="Farm with vehicles"
            src="/images/sil-bg-2.jpg"
            height={1000}
            width={1000}
            className="relative z-10 rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default CallToAction
