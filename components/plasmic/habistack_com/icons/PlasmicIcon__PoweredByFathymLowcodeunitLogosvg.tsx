// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PoweredByFathymLowcodeunitLogosvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function PoweredByFathymLowcodeunitLogosvgIcon(
  props: PoweredByFathymLowcodeunitLogosvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.0"}
      viewBox={"0 0 610 211"}
      preserveAspectRatio={"xMidYMid meet"}
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
    </svg>
  );
}

export default PoweredByFathymLowcodeunitLogosvgIcon;
/* prettier-ignore-end */
