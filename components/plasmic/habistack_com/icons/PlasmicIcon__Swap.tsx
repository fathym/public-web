// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SwapIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SwapIcon(props: SwapIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 49 37"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M37.628 35.822a1.024 1.024 0 01-1.618-.82v-4.98h-4.163a9.985 9.985 0 01-7.798-3.754l-1.595-2.003a2.01 2.01 0 010-2.51 1.993 1.993 0 013.114 0l1.6 2.009a6.005 6.005 0 004.69 2.257h4.152v-4.996a1.024 1.024 0 011.618-.819l9.948 6.989a.997.997 0 010 1.638l-9.948 6.989zm0-20a1.024 1.024 0 01-1.618-.82V10.02h-4.152a5.972 5.972 0 00-4.686 2.252L15.977 26.268a9.952 9.952 0 01-7.809 3.753H2.014a2 2 0 110-4h6.154a5.97 5.97 0 004.686-2.251L24.049 9.773a9.95 9.95 0 017.809-3.754h4.152V1.025a1.024 1.024 0 011.618-.819l9.948 6.989a.997.997 0 010 1.638l-9.948 6.989zM15.984 9.78l1.59 1.995a2 2 0 01-3.116 2.51l-1.604-2.015a5.99 5.99 0 00-4.678-2.251h-6.06A2.072 2.072 0 01.041 8.354 2.002 2.002 0 012.014 6.02h6.154a10.01 10.01 0 017.816 3.762z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SwapIcon;
/* prettier-ignore-end */
