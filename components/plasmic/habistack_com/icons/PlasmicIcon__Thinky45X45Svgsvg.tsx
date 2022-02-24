// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Thinky45X45SvgsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Thinky45X45SvgsvgIcon(props: Thinky45X45SvgsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 45 45"}
      version={"1.1"}
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
          "M34 26.43v.26c-.26 2.27-.7 3.22-2.73 3.22a2.28 2.28 0 01-1.81-.69 2.09 2.09 0 01-.46-1.69 10.07 10.07 0 01.68-2.1A13.22 13.22 0 0030.87 20c0-4.27-2.59-8.58-8.39-8.58S14.1 15.73 14.1 20a13.22 13.22 0 001.17 5.43 10 10 0 01.67 2.1 2.08 2.08 0 01-.38 1.69 2.28 2.28 0 01-1.81.69c-2 0-2.47-.95-2.73-3.22v-.26c-.33-3-1.79-4.53-4.33-4.53v3.53c.54 0 .67 0 .82 1.39v.27c.18 1.57.73 6.35 6.24 6.35a5.73 5.73 0 004.5-1.94 5.55 5.55 0 001.17-4.56 12.74 12.74 0 00-.88-2.83 9.8 9.8 0 01-.91-4.11c0-1.52.47-5.05 4.85-5.05s4.86 3.53 4.86 5.05a9.8 9.8 0 01-.91 4.11 13.28 13.28 0 00-.89 2.83 5.59 5.59 0 001.18 4.56 5.73 5.73 0 004.5 1.94c5.51 0 6.06-4.78 6.24-6.35v-.27c.15-1.39.28-1.39.82-1.39V21.9c-2.51 0-3.97 1.53-4.28 4.53z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fill={"currentColor"}
        d={"M20.21 21.89h1.66v2.88h-1.66zm2.89 0h1.66v2.88H23.1z"}
      ></path>

      <path
        d={
          "M45 22.5A22.5 22.5 0 105.7 37.44l.1.09a22.46 22.46 0 0033.55-.15A22.44 22.44 0 0045 22.5zM22.5 42a19.35 19.35 0 01-7.84-1.65 11.27 11.27 0 007.82-3.77 11.25 11.25 0 007.85 3.77A19.34 19.34 0 0122.5 42zm14.7-6.7a9 9 0 01-6 2.11 8.46 8.46 0 01-6.59-2.91 8.1 8.1 0 01-.84-1.2l-.53-.94h-1.52l-.54.93a7.26 7.26 0 01-.84 1.21 8.44 8.44 0 01-6.59 2.91 9.11 9.11 0 01-5.83-2C4.46 32.11 3 27.46 3 22.5a19.51 19.51 0 0139 0c0 4.9-1.54 9.61-4.8 12.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Thinky45X45SvgsvgIcon;
/* prettier-ignore-end */
