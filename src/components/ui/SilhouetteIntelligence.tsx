import {
  RiAiGenerate,
  RiBrainFill,
  RiDashboard3Fill,
  RiSensorFill,
} from "@remixicon/react"
import { Divider } from "../Divider"
import EnvironmentPerformance from "./EnvironmentPerformance"
import { StickerCard } from "./StickerCard"

export function SilhouetteIntelligence() {
  return (
    <section
      aria-labelledby="silhouette-intelligence"
      className="relative mx-auto w-full max-w-6xl overflow-hidden"
    >
      <div>
        <h2
          id="silhouette-intelligence"
          className="relative scroll-my-24 text-lg font-semibold tracking-tight text-gray-500"
        >
          Silhouette Intelligence
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-gray-500" />
        </h2>
        <p className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Transform spaces into responsive environments with unobtrusive
          technology
        </p>
      </div>
      <div className="*:pointer-events-none">
        <EnvironmentPerformance />
      </div>
      <Divider className="mt-0"></Divider>
      <div className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-4 md:grid-rows-1">
        <StickerCard
          Icon={RiSensorFill}
          title="Adaptive Sensing"
          description="Intelligent sensors that intuitively understand space occupancy and usage patterns."
        />
        <StickerCard
          Icon={RiBrainFill}
          title="Contextual Learning"
          description="AI systems that learn preferences and adapt environments without prompting."
        />
        <StickerCard
          Icon={RiAiGenerate}
          title="Ambient Response"
          description="Seamless environmental adjustments that anticipate needs before they arise."
        />
        <StickerCard
          Icon={RiDashboard3Fill}
          title="Invisible Analytics"
          description="Background processing that delivers insights without interface friction."
        />
      </div>
    </section>
  )
}
