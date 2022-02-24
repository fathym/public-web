// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PencilIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PencilIcon(props: PencilIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 45"}
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
          "M.053 43.064l2.017-6.739a8.003 8.003 0 012.003-3.358L29.721 7.28a.998.998 0 011.41-.001l.002.001 5.579 5.588a1 1 0 010 1.414L11.065 39.968a7.993 7.993 0 01-3.357 2.009l-6.723 2.02a.75.75 0 01-.932-.933zM40.366.875l2.746 2.75a2.993 2.993 0 010 4.228l-3.347 3.35a.994.994 0 01-1.406.002l-.001-.001-5.56-5.569a.998.998 0 010-1.41l3.346-3.35a2.982 2.982 0 014.222 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PencilIcon;
/* prettier-ignore-end */
