import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function CanvasBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 50, pointerEvents: 'none' }}>
      <Particles
        id="tsparticles"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            color: { value: ["#fbd38d", "#ff99ac", "#ffffff"] },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "out" },
              random: true,
              speed: 0.6,
              straight: false,
            },
            number: { value: 50, density: { enable: true, area: 1000 } },
            opacity: {
              value: 0.6,
              animation: { enable: true, speed: 0.5, minimumValue: 0.1 }
            },
            shape: { type: "circle" },
            size: {
              value: { min: 1, max: 4 },
              animation: { enable: true, speed: 1, minimumValue: 0.5 }
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
