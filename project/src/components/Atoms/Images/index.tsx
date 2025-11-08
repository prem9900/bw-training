/* eslint-disable jsx-a11y/alt-text */
import React from "react";


interface Props {
  src: string;
  width?: string;
  height?: string;
}

const Images = ({ width = "3rem", height = "3rem", ...props }: Props) => {
 
  return <img src={props.src} width={width} height={height} />
};

export default Images;
  