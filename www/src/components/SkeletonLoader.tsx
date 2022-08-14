import { FC } from "react";
import styled, { CSSProperties, keyframes } from "styled-components";

interface SkeletonLoaderProps {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  background?: CSSProperties['background'];
  radius?: CSSProperties['borderRadius'];
  circle?: boolean;
  block?: boolean;
  style?: React.CSSProperties;
}

const progress = keyframes`
  0% {
    left: -500px;
  }
  100% {
    left: 100%;
  }
`;

const Warpper = styled.div`
  line-height: 1;
  display: inline-block;
  overflow: hidden;
  position: relative;
  background: #eff1f6;
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 500px;
    top: 0;
    left: -500px;
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0)
    );
    animation: ${progress} 1.2s ease-in-out infinite;
  }
`;

export const SkeletonLoader: FC<SkeletonLoaderProps> = (props) => {
  const { width, height, background, circle, radius, block, style } = props
  return (
    <Warpper 
    style={{
      width,
      height,
      background,
      borderRadius: circle ? "50%" : radius,
      display: block ? "block" : "inline-block",
      ...style,
    }}
    ></Warpper>
  )
}