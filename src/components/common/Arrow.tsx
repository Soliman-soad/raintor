import React from "react";
import Image from "next/image";

const Arrow = ({
  className,
  width = 24,
  height = 24,
  variant = "arrow",
}: {
  className?: string;
  width?: number;
  height?: number;
  variant?: string;
}) => {
  return (
    <div className={`${className}`}>
      <Image src={`/icons/${variant}.svg`} alt="arrow" width={width} height={height} />
    </div>
  );
};

export default Arrow;
