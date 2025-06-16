import Lottie from "lottie-react";
import ScrollDown from "../../assets/lottie-video/scroll-down-white.json";
import About from "../fragments/About";
import VideoBG from "../../assets/video/sample-bg.mp4";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[285vh] bg-black">
      <div className="fixed w-full h-[100vh] top-0 left-0 z-5 saturate-50">
        <video autoPlay loop muted className="w-full h-[100vh] object-cover">
          <source src={VideoBG} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="lottie-container">
        <div class="animation bg-black/20"></div>
      </div>

      <div className="absolute text-white z-10 top-[50vh] left-[50vw] transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-y-2">
        <h1 className="text-5xl w-80 md:text-7xl md:w-full font-bold tracking-tighter md:text-nowrap">
          Move <span className="text-primary">Beyond</span> Hydration
        </h1>
        <h3 className="text-xl md:text-2xl font-semibold tracking-tighter">
          Power up. Recover strong. Stay hydrated with{" "}
          <span className="text-primary font-[Helvetica_Neue] font-black">
            tenplus
          </span>
          .
        </h3>
      </div>

      <div className="absolute  z-10 top-[88vh] left-[50vw] transform -translate-x-1/2 -translate-y-1/2">
        <Lottie className="w-40" animationData={ScrollDown} loop={true} />
      </div>

      <div className="w-full h-[150vh] relative bg-linear-to-b from-transparent via-white/0 to-neutral-200/90 z-10" />

      <div className="relative w-full h-auto lg:h-[125vh] p-8 bg-neutral-200/90 text-black z-10">
        <div className="container mx-auto">
          <About />
        </div>
      </div>

      <div className="w-full h-[10vh] relative bg-linear-to-t from-neutral-200  to-neutral-200/90 z-10" />
    </section>
  );
}
