// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RightArrowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RightArrowIcon(props: RightArrowIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 34"}
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
        d={
          "M28.414.586a2 2 0 10-2.828 2.828L37.172 15H2a2 2 0 100 4h35.172L25.586 30.586a2 2 0 102.828 2.828l14.912-14.911c.83-.83.83-2.176 0-3.006L28.414.586z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RightArrowIcon;
/* prettier-ignore-end */
