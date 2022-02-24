// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CycleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CycleIcon(props: CycleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 57 45"}
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
          "M48.836 33.607a.995.995 0 01-1.638 0l-6.989-9.974a1.027 1.027 0 01.82-1.623h4.983c-.007-9.942-8.072-17.996-18.015-17.989a18.002 18.002 0 00-11.35 4.04 2 2 0 11-2.59-3.05c9.397-7.706 23.26-6.335 30.966 3.061a22.003 22.003 0 014.99 13.938h4.993a1.027 1.027 0 01.819 1.623l-6.989 9.974zM8.823 10.435l6.989 9.974a1.027 1.027 0 01-.819 1.623H10.01c.007 9.942 8.072 17.996 18.014 17.99a18.001 18.001 0 0011.351-4.04 2 2 0 112.59 3.05c-9.397 7.706-23.26 6.335-30.966-3.061A22.002 22.002 0 016.01 22.032H1.015a1.027 1.027 0 01-.819-1.622l6.99-9.974a.995.995 0 011.637 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CycleIcon;
/* prettier-ignore-end */
