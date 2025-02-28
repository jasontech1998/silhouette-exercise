"use client"

import { ScrollFadeSection } from "@/components/Fade"
import { CallToAction } from "@/components/ui/CallToAction"
import FeatureDivider from "@/components/ui/FeatureDivider"
import Features from "@/components/ui/Features"
import { Hero } from "@/components/ui/Hero"
import { EnvironmentMap } from "@/components/ui/Map/EnvironmentMap"
import { SilhouetteIntelligence } from "@/components/ui/SilhouetteIntelligence"
import Testimonial from "@/components/ui/Testimonial"

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      <div className="pt-56">
        <Hero />
      </div>

      <ScrollFadeSection className="mt-46 px-4 xl:px-0">
        <Features />
      </ScrollFadeSection>

      <ScrollFadeSection className="mt-32 px-4 xl:px-0" delay={0.1}>
        <Testimonial />
      </ScrollFadeSection>

      <FeatureDivider className="my-16 max-w-6xl" />

      <ScrollFadeSection className="px-4 xl:px-0" delay={0.1}>
        <EnvironmentMap />
      </ScrollFadeSection>

      <FeatureDivider className="my-16 max-w-6xl" />

      <ScrollFadeSection className="mt-12 mb-12 px-4 xl:px-0" delay={0.1}>
        <SilhouetteIntelligence />
      </ScrollFadeSection>

      <FeatureDivider className="my-16 max-w-6xl" />

      <ScrollFadeSection className="mt-10 mb-40 px-4 xl:px-0" delay={0.1}>
        <CallToAction />
      </ScrollFadeSection>
    </main>
  )
}
