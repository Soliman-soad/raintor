import React from "react";
import Arrow from "./Arrow";

const FeatureHeader = ({
  variant = "white",
  title,
  position = "start",
}: {
  variant: "white" | "black";
  title: string;
  position: "start" | "end";
}) => {
  return (
    <div className={`flex items-center ${position === "start" ? "justify-start" : "justify-end"}`}>
      <Arrow
        variant={variant === "white" ? "white-arrow" : "arrow"}
        className={`border rounded-full inline-flex w-10 h-10 items-center justify-center ${variant === "white" ? "-rotate-90" : "rotate-90"}`}
        width={12}
        height={12}
      />
      <h4 className="border rounded-full px-4 py-2 inline-block">{title}</h4>
    </div>
  );
};

export default FeatureHeader;
