"use client";

import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function NetworkBg() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <Particles
      className="absolute inset-0"
      options={{
        fullScreen: false, // important
        background: {
          color: "transparent",
        },
        fpsLimit: 60,
        particles: {
          number: { value: 35 },
          color: { value: "#ffffff" },
          opacity: { value: 0.35 },
          size: { value: { min: 1, max: 2 } },
          move: {
            enable: true,
            speed: 0.35,
            outModes: { default: "bounce" },
          },
          links: {
            enable: true,
            distance: 140,
            color: "#ffffff",
            opacity: 0.2,
            width: 1,
          },
        },
        detectRetina: true,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" }, // optional: hover effect
            onClick: { enable: true, mode: "repulse" }, // click effect
          },
          modes: {
            grab: { distance: 120, links: { opacity: 0.3 } },
            repulse: { distance: 100, duration: 0.4 }, // click korle particles repel hoy
          },
        },
      }}
    />
  );
}
