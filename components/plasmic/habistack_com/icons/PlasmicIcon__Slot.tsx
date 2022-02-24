// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SlotIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SlotIcon(props: SlotIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
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
        d={"M24 30a6 6 0 100-12 6 6 0 000 12z"}
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0s24 10.745 24 24zm-4 0c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SlotIcon;
/* prettier-ignore-end */
