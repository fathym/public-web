// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LightningIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LightningIcon(props: LightningIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 48"}
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
          "M31.816 20.175a1.999 1.999 0 01-.32 2.145l-21.984 25a1.999 1.999 0 01-3.376-2.012l6.004-16.309H2.016a2 2 0 01-1.5-3.32L22.5.678a1.999 1.999 0 013.375 2.012l-6.004 16.308h10.125c.785 0 1.498.46 1.82 1.176z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LightningIcon;
/* prettier-ignore-end */
