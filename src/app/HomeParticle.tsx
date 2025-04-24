"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import React, { useEffect, useState } from "react";
import { loadFull } from "tsparticles";

type Props = {};

export default function HomeParticle({}: Props) {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      await loadFull(engine);
      // await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    init && (
      <div className="home-particle">
        <Particles
          id="tsparticles"
          options={{
            // background: {
            //   color: "#00000000",
            // },
            fullScreen: {
              enable: false,
            },

            fpsLimit: 60,
            particles: {
              color: {
                value: "#ffffff46",
              },
              // links: {
              //   color: "#ffffff",
              //   distance: 500,
              //   enable: true,
              //   opacity: 0.1,
              //   width: 1,
              // },
              move: {
                enable: true,
                direction: "top",
                // random: true,

                outModes: {
                  default: "out",
                },

                speed: {
                  max: 2,
                  min: 0.02,
                },

                random: true,
                center: {
                  x: 30,
                  y: -20,
                },
                // path: {
                //   enable: true,
                //   // generator: "zigzag",
                //   generator: "",
                // },

                // straight: true,
                angle: {
                  offset: 2,
                  value: 2,
                },
              },

              number: {
                value: 40,
              },
              opacity: {
                value: {
                  max: 1,
                  min: 0.5,
                },
              },
              stroke: {
                width: 1,
                color: "#ffffff",
              },
              // tilt: {
              //   enable: true,
              //   value: 0,
              //   direction: "random",
              //   random: false,
              // },
              life: {
                count: 4,
              },
              rotate: {
                value: {
                  min: -350,
                  max: 360,
                },

                animation: {
                  enable: true,
                  speed: 15,
                },
                direction: "random",
                random: true,
              },

              size: {
                value: {
                  max: 30,
                  min: 0.1,
                },
              },

              shape: {
                type: "triangle",
                fill: true,
              },
            },
          }}
        ></Particles>
      </div>
    )
  );
}
