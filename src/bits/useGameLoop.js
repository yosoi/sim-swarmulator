import { useEffect, useState } from "react";

export default function useGameLoop(fps, onUpdate) {
  const [interval] = useState(1000 / fps);

  useEffect(() => {
    console.log("start");
    const update = setInterval(() => {
      onUpdate();
    }, interval);
    return () => clearInterval(update);
  }, [interval, onUpdate]);
}
