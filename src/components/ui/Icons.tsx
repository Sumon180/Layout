import React from "react";
import { Icon } from "@iconify/react";

interface IconsProps {
  icon: string;
  className?: string;
  width?: number | string;
  rotate?: number;
  hFlip?: boolean;
  vFlip?: boolean;
}

const Icons: React.FC<IconsProps> = ({
  icon,
  className,
  width,
  rotate,
  hFlip,
  vFlip,
}) => {
  return (
    <>
      <Icon
        width={width}
        rotate={rotate}
        hFlip={hFlip}
        icon={icon}
        className={className}
        vFlip={vFlip}
      />
    </>
  );
};

export default Icons;
