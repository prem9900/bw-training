import React from "react";

interface Props {
  src: string;
  width?: string;
  height?: string;
}

const Icon = ({ width = "3rem", height = "3rem", ...props }: Props) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src={props.src} width={width} height={height} />
};

export default Icon;
  