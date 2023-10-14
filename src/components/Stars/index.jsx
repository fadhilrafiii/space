import Image from "next/image";
import { memo, useMemo } from "react";

const Stars = () => {
  const starsPosition = useMemo(() => {
    return Array(20).fill(0).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 30
    }))
  }, [])

  return (
    <div className="absolute w-full h-full">
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
        width={pos.size}
        height={pos.size}
      />
      ))}
    </div>
  )
};

export default memo(Stars);