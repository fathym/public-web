// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Linkedin112SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Linkedin112SvgIcon(props: Linkedin112SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      xmlSpace={"preserve"}
      viewBox={"0 0 256 256"}
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
          "M6.11 85.736h52.254v168.076H6.109V85.736zM32.237 2.188c16.701 0 30.274 13.573 30.274 30.302 0 16.712-13.573 30.285-30.274 30.285-16.74 0-30.274-13.573-30.274-30.285 0-16.73 13.533-30.302 30.274-30.302m58.89 83.548h50.107v22.983h.714c6.974-13.22 24.02-27.145 49.426-27.145 52.898 0 62.662 34.8 62.662 80.055v92.183h-52.215v-81.736c0-19.496-.34-44.566-27.146-44.566-27.184 0-31.332 21.25-31.332 43.166v83.136H91.127V85.736z"
        }
        opacity={"1"}
        fill={"none"}
      ></path>
    </svg>
  );
}

export default Linkedin112SvgIcon;
/* prettier-ignore-end */
