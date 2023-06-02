import React from "react";
import { ThreeDots } from "react-loader-spinner";

interface IProps {
  width: string;
  height: string;
  color: string;
}

export const Loader: React.FC<IProps> = ({ width, height, color }) => (
  <ThreeDots
    height={height}
    width={width}
    radius="9"
    color={color}
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    visible={true}
  />
);
