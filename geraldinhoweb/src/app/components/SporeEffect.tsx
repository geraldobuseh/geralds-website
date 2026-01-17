"use client";
import { useEffect, useState } from "react";

interface Spark {
  id: number;
  width: number;
  height: number;
  duration: number;
  delay: number;
  angle: number;
  distance: number;
}

export default function SporeEffect() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    // Generate fire sparks with random properties
    const generateSparks = () => {
      const sparkCount = 20;
      const newSparks: Spark[] = [];

      for (let i = 0; i < sparkCount; i++) {
        const baseSize = Math.random() * 1.2 + 3; // 3-7px base
        newSparks.push({
          id: i,
          width: baseSize, // Narrow width for spark shape
          height: baseSize * (Math.random() * 3 + 2), // 2-5x taller for elongated spark
          duration: Math.random() * 2.5 + 1.8, // 1.5-3.5s (faster, more fire-like)
          delay: Math.random() * 0.8, // 0-0.5s delay (continuous sparks)
          angle: Math.random() * 80 + 280, // 250-330 degrees (mostly upward from bottom right)
          distance: Math.random() * 150 + 325, // 100-250px distance (shorter, more contained)
        });
      }

      setSparks(newSparks);
    };

    generateSparks();
  }, []);

  return (
    <div className="fixed bottom-0 left-10 w-15 h-10 pointer-events-none z-15 overflow-visible">
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="absolute animate-sparkDisperse"
          style={{
            width: `${spark.width}px`,
            height: `${spark.height}px`,
            background: `linear-gradient(to top, rgba(108, 173, 223, 0.9) 0%, rgba(108, 173, 223, 0.7) 40%, rgba(108, 173, 223, 0.4) 70%, transparent 100%)`,
            boxShadow: `0 0 ${spark.width * 5}px ${spark.width * 2}px rgba(108, 173, 223, 0.8), 0 0 ${spark.width * 5}px ${spark.width * 2}px rgba(108, 173, 223, 0.6)`,
            borderRadius: "50% 50% 50% 50% / 50% 50% 40% 40%", // Elongated oval shape
            transformOrigin: "50% 100%", // Transform from bottom center
            "--spark-angle": `${spark.angle}deg`,
            "--spark-distance": `${spark.distance}px`,
            "--spark-duration": `${spark.duration}s`,
            "--spark-delay": `${spark.delay}s`,
          } as React.CSSProperties & {
            "--spark-angle": string;
            "--spark-distance": string;
            "--spark-duration": string;
            "--spark-delay": string;
          }}
        />
      ))}
    </div>
  );
}

