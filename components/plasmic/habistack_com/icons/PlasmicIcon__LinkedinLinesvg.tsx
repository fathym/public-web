// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LinkedinLinesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LinkedinLinesvgIcon(props: LinkedinLinesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 3333 3102"}
      shapeRendering={"geometricPrecision"}
      textRendering={"geometricPrecision"}
      imageRendering={"optimizeQuality"}
      fillRule={"evenodd"}
      clipRule={"evenodd"}
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
          "M1204 925h640c26 0 47 21 47 47v196c52-57 118-109 199-151 107-56 240-92 395-92 356 0 569 113 693 299 122 183 155 433 155 715v1114c0 26-21 47-47 47h-667c-26 0-47-21-47-47v-988c0-113-1-243-42-340-37-88-111-152-258-152-154 0-241 55-290 138-52 88-64 211-64 336v1005c0 26-21 47-47 47h-667c-26 0-47-21-47-47V970c0-26 21-47 47-47zm593 94h-546v1988h572v-958c0-140 15-278 77-384 65-111 178-185 371-185 195 0 294 88 345 210 48 114 49 254 49 376v941h573V1940c0-265-30-499-139-663-107-161-295-258-615-258-139 0-257 32-352 82-114 59-194 142-239 222-8 14-23 24-41 24h-9c-26 0-47-21-47-47v-281zM789 393c0 109-44 207-116 279-71 71-170 116-279 116s-207-44-279-116C44 601-1 502-1 393s44-207 116-279C186 43 285-2 394-2s207 44 279 116c71 71 116 170 116 279zM607 605c54-54 88-129 88-212s-34-158-88-212-129-88-212-88-158 34-212 88-88 129-88 212 34 158 88 212 129 88 212 88 158-34 212-88zM48 924h694c26 0 47 21 47 47v2082c0 26-21 47-47 47H48c-26 0-47-21-47-47V971c0-26 21-47 47-47zm647 94H95v1988h600V1018z"
        }
        fillRule={"nonzero"}
      ></path>
    </svg>
  );
}

export default LinkedinLinesvgIcon;
/* prettier-ignore-end */
