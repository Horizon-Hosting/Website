import Hero from "../components/index/Hero";
import Features from "../components/index/Features";
import Servers from "../components/index/Servers";

export default function Home() {
  return (
      <>
          <section className="w-full snap bg-background-900 h-2/5">
              <Hero/>
          </section>

          <section className="w-full snap bg-background-800 h-2/5">
              <Features/>
          </section>

          <section className="w-full snap bg-background-900 h-2/5">
              <Servers/>
          </section>
      </>
  )
}