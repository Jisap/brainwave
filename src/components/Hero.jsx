import React from 'react'
import Section from './Section'
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses                                  // se mostrarán las cruces
      crossesOffset="lg:translate-y-[5.25rem]" // en pantallas grandes se desplaza en y 5.25 rem las cruces (evita el navbar)
      customPaddings                           // Sino están definidos se aplicaran los que estan por defecto en <Section />
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default Hero