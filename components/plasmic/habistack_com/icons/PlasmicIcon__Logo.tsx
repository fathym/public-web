// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoIcon(props: LogoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 600 600"}
      xmlSpace={"preserve"}
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

      <g fill={"currentColor"}>
        <path
          d={
            "M78.1 313.8l.5 4c2.6 23.1 10.7 93.6 92 93.6 27.3 0 50.8-10.1 66.4-28.6 15.2-18 21.5-42.5 17.3-67.2-2.8-16.4-8-29.3-13-41.8-6.9-17.2-13.5-33.4-13.5-60.7 0-22.4 7-74.4 71.6-74.4 64.7 0 71.6 52 71.6 74.4 0 27.2-6.6 43.5-13.5 60.7-5 12.5-10.2 25.4-13 41.8-4.2 24.8 2.1 49.3 17.3 67.2 15.6 18.4 39.1 28.6 66.4 28.6 81.3 0 89.3-70.4 92-93.6l.4-4c2.3-20.5 4.2-20.5 12.1-20.5v-52c-37.4 0-58.9 22.5-63.9 66.8l-.4 3.8c-3.8 33.4-10.2 47.4-40.3 47.4-11.8 0-21.1-3.5-26.6-10.1-5.3-6.2-7.3-15.3-5.7-24.9 1.8-10.8 5.6-20.2 10-31 7.7-19.1 17.3-42.8 17.3-80.1 0-62.9-38.2-126.4-123.7-126.4-85.4 0-123.7 63.5-123.7 126.4 0 37.3 9.6 61.1 17.3 80.1 4.4 10.8 8.1 20.2 10 31 1.6 9.6-.5 18.7-5.7 24.9-5.6 6.6-14.8 10.1-26.6 10.1-30 0-36.4-14-40.3-47.4l-.4-3.8c-4.9-44.3-26.4-66.8-63.9-66.8v52c7.8 0 9.7 0 12 20.5z"
          }
        ></path>

        <path
          d={
            "M290.3 286.6V249l-24.5-8v37.6zm42.6-8V241l-24.5 8v37.6zM518 437.4c-30.1 28.3-69.3 32.5-89.9 32.5-39.4 0-73.9-15.2-97.3-42.9-4.6-5.5-8.8-11.5-12.4-17.7l-7.9-13.9H288l-7.9 13.8c-3.6 6.3-7.7 12.3-12.4 17.7-23.4 27.7-57.9 42.9-97.3 42.9-20.4 0-59.1-4.1-89.1-31.7l-29.8 32.5c41 37.7 92.1 43.3 118.9 43.3 51.4 0 97-19.9 128.8-56 31.8 36.2 77.4 56 128.8 56 27.2 0 79-5.8 120.1-44.4L518 437.4z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default LogoIcon;
/* prettier-ignore-end */
