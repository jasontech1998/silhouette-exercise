import { RiArrowRightUpLine } from "@remixicon/react"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"
import AmbientBackground from "./HeroBackground"

export function Hero() {
  return (
    <section aria-label="hero">
      <FadeContainer className="relative flex flex-col items-center justify-center">
        <FadeDiv className="mx-auto">
          <a
            aria-label="View latest update the changelog page"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-full"
          >
            <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-white/5 px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-gray-900 ring-1 shadow-lg shadow-gray-400/20 ring-black/10 filter backdrop-blur-[1px] transition-colors hover:bg-gray-500/[2.5%] focus:outline-hidden sm:text-sm">
              <span className="shrink-0 truncate rounded-full border bg-gray-50 px-2.5 py-1 text-sm text-gray-600 sm:text-xs">
                News
              </span>
              <span className="flex items-center gap-1 truncate">
                <span className="w-full truncate">
                  Atmosphere OS 2.0 Launch
                </span>
                <RiArrowRightUpLine className="size-4 shrink-0 text-gray-700" />
              </span>
            </div>
          </a>
        </FadeDiv>
        <h1 className="mt-8 text-center text-5xl font-semibold tracking-tighter text-gray-900 sm:text-8xl sm:leading-[5.5rem]">
          <FadeSpan>Ambient</FadeSpan> <FadeSpan>Intelligience</FadeSpan>
          <br />
          <FadeSpan>for</FadeSpan> <FadeSpan>every</FadeSpan>{" "}
          <FadeSpan>space</FadeSpan>
        </h1>
        <p className="mt-5 max-w-xl text-center text-base text-balance text-gray-700 sm:mt-8 sm:text-xl">
          <FadeSpan>Revolutionizing environments with AI-powered</FadeSpan>{" "}
          <FadeSpan>sensing, learning, and adaptation</FadeSpan>{" "}
          <FadeSpan>for more intuitive and responsive living.</FadeSpan>
        </p>
        <FadeDiv>
          <a
            className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-md bg-black px-6 py-3.5 font-medium tracking-wide text-white shadow-sm transition-all duration-300 ease-out hover:bg-gray-900 hover:ring-2 hover:ring-gray-400 focus:ring-2 focus:ring-gray-600 focus:outline-none"
            href="#"
          >
            Experience now
          </a>
        </FadeDiv>
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <AmbientBackground />
        </div>
      </FadeContainer>
    </section>
  )
}
