import Image from "next/image";
import { memo, useMemo } from "react";
import NoSSR from "../NoSSR";

const Stars = () => {
  const starsPosition = useMemo(() => {
    return Array(80)
      .fill(0)
      .map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 50,
      }));
  }, []);

  return (
    <NoSSR>
      <div className="absolute w-full h-full overflow-hidden">
        {starsPosition.map((pos, idx) => (
          <Image
            key={idx}
            id={`star-${idx + 1}`}
            className="absolute"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
            }}
            src="/images/star.png"
            alt="star"
            width={pos.size / 3}
            height={pos.size}
          />
        ))}
      </div>
    </NoSSR>
  );
};

export default Stars;
