import { FC } from "react";
import RSkeleton from "react-loading-skeleton";
import { useTheme } from "styled-components";
import { ISkeletonProps } from "./types";

export const Skeleton: FC<ISkeletonProps> = ({
  width,
  height,
  circle,
  className,
  count,
  borderRadius,
}) => {
  const { mode } = useTheme();
  return (
    <RSkeleton
      width={width}
      height={height}
      circle={circle}
      borderRadius={borderRadius}
      className={className}
      count={count}
      baseColor={mode === "light" ? "#0000001c" : "#ffffff21"}
    />
  );
};
