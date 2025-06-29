import React from "react";
import Image from "next/image";

const SwapButton = ({
  padding = 2,
  text,
  icon = "icon",
}: {
  padding?: number;
  text?: string;
  icon?: string;
}) => {
  return (
    <button
      className={`pr-${padding} py-2 flex items-center gap-2 border rounded-full`}
    >
      <div className="rounded-full border w-9.5 h-9.5 flex items-center justify-center">
        <Image src={`/icons/${icon}.svg`} alt={icon} width={19} height={19} />
      </div>
      {text}
    </button>
  );
};

export default SwapButton;
