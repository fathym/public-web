// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jbURxL3XuiMBQsLhf7apui
// Component: aLoaIkI4766
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_new_fathym_com.module.css"; // plasmic-import: jbURxL3XuiMBQsLhf7apui/projectcss
import sty from "./PlasmicButton2.module.css"; // plasmic-import: aLoaIkI4766/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: reqCYX4Vc1Lv/icon

export type PlasmicButton2__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  isDisabled: "isDisabled";
  shape: "rounded";
  size: "compact";
  color: "blue" | "red" | "outlineBlue" | "outlineRed" | "clear";
};

export type PlasmicButton2__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  shape?: SingleChoiceArg<"rounded">;
  size?: SingleChoiceArg<"compact">;
  color?: SingleChoiceArg<
    "blue" | "red" | "outlineBlue" | "outlineRed" | "clear"
  >;
};

type VariantPropType = keyof PlasmicButton2__VariantsArgs;
export const PlasmicButton2__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "shape",
  "size",
  "color"
);

export type PlasmicButton2__ArgsType = {
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  link?: string;
};

type ArgPropType = keyof PlasmicButton2__ArgsType;
export const PlasmicButton2__ArgProps = new Array<ArgPropType>(
  "children",
  "startIcon",
  "endIcon",
  "link"
);

export type PlasmicButton2__OverridesType = {
  root?: p.Flex<"button">;
  startIconContainer?: p.Flex<"div">;
  contentContainer?: p.Flex<"div">;
  endIconContainer?: p.Flex<"div">;
};

export interface DefaultButton2Props extends pp.BaseButtonProps {
  shape?: SingleChoiceArg<"rounded">;
  size?: SingleChoiceArg<"compact">;
  color?: SingleChoiceArg<
    "blue" | "red" | "outlineBlue" | "outlineRed" | "clear"
  >;
}

function PlasmicButton2__RenderFunc(props: {
  variants: PlasmicButton2__VariantsArgs;
  args: PlasmicButton2__ArgsType;
  overrides: PlasmicButton2__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        {
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootcolor_blue]: hasVariant(variants, "color", "blue"),
          [sty.rootcolor_clear]: hasVariant(variants, "color", "clear"),
          [sty.rootcolor_outlineBlue]: hasVariant(
            variants,
            "color",
            "outlineBlue"
          ),
          [sty.rootcolor_outlineRed]: hasVariant(
            variants,
            "color",
            "outlineRed"
          ),
          [sty.rootcolor_red]: hasVariant(variants, "color", "red"),
          [sty.rootisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
          [sty.rootshape_rounded]: hasVariant(variants, "shape", "rounded"),
          [sty.rootshowEndIcon]: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.rootshowEndIcon_shape_rounded]:
            hasVariant(variants, "showEndIcon", "showEndIcon") &&
            hasVariant(variants, "shape", "rounded"),
          [sty.rootshowEndIcon_size_compact]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showEndIcon", "showEndIcon"),
          [sty.rootshowEndIcon_size_compact_showStartIcon]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showStartIcon", "showStartIcon") &&
            hasVariant(variants, "showEndIcon", "showEndIcon"),
          [sty.rootshowStartIcon]: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          ),
          [sty.rootshowStartIcon_shape_rounded]:
            hasVariant(variants, "shape", "rounded") &&
            hasVariant(variants, "showStartIcon", "showStartIcon"),
          [sty.rootsize_compact]: hasVariant(variants, "size", "compact"),
          [sty.rootsize_compact_shape_rounded]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "shape", "rounded"),
          [sty.rootsize_compact_showStartIcon]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showStartIcon", "showStartIcon")
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      {(
        hasVariant(variants, "showStartIcon", "showStartIcon") ? true : false
      ) ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(projectcss.all, sty.startIconContainer, {
            [sty.startIconContainercolor_blue]: hasVariant(
              variants,
              "color",
              "blue"
            ),
            [sty.startIconContainershowStartIcon]: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            ),
            [sty.startIconContainershowStartIcon_shape_rounded]:
              hasVariant(variants, "shape", "rounded") &&
              hasVariant(variants, "showStartIcon", "showStartIcon")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg__cdi2Z)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolor_blue]: hasVariant(
                variants,
                "color",
                "blue"
              ),
              [sty.slotTargetStartIconcolor_outlineBlue]: hasVariant(
                variants,
                "color",
                "outlineBlue"
              ),
              [sty.slotTargetStartIconcolor_outlineRed]: hasVariant(
                variants,
                "color",
                "outlineRed"
              ),
              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })}
        </div>
      ) : null}

      <div
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames(projectcss.all, sty.contentContainer, {
          [sty.contentContainer___focusVisibleWithin]:
            triggers.focusVisibleWithin_root,
          [sty.contentContainerisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
          [sty.contentContainershape_rounded]: hasVariant(
            variants,
            "shape",
            "rounded"
          ),
          [sty.contentContainershowEndIcon]: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Button",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildren___focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.slotTargetChildrencolor_blue]: hasVariant(
              variants,
              "color",
              "blue"
            ),
            [sty.slotTargetChildrencolor_clear]: hasVariant(
              variants,
              "color",
              "clear"
            ),
            [sty.slotTargetChildrencolor_outlineBlue]: hasVariant(
              variants,
              "color",
              "outlineBlue"
            ),
            [sty.slotTargetChildrencolor_outlineRed]: hasVariant(
              variants,
              "color",
              "outlineRed"
            ),
            [sty.slotTargetChildrencolor_red]: hasVariant(
              variants,
              "color",
              "red"
            ),
            [sty.slotTargetChildrenisDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),
            [sty.slotTargetChildrenshape_rounded]: hasVariant(
              variants,
              "shape",
              "rounded"
            ),
            [sty.slotTargetChildrenshowEndIcon]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            ),
            [sty.slotTargetChildrenshowStartIcon]: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            )
          })
        })}
      </div>

      {(hasVariant(variants, "showEndIcon", "showEndIcon") ? true : false) ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(projectcss.all, sty.endIconContainer, {
            [sty.endIconContainershowEndIcon]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg__r3DLs)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconcolor_outlineBlue]: hasVariant(
                variants,
                "color",
                "outlineBlue"
              ),
              [sty.slotTargetEndIconcolor_outlineRed]: hasVariant(
                variants,
                "color",
                "outlineRed"
              ),
              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              )
            })
          })}
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseButtonProps>(
  props: P,
  ref: pp.ButtonRef
) {
  const b = pp.useButton<P, typeof PlasmicButton2>(
    PlasmicButton2,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },
    ref
  );

  if (b.plasmicProps.overrides.root.as === "a") {
    b.plasmicProps.overrides.root.as = p.PlasmicLink;
    b.plasmicProps.overrides.root.props.component = Link;
    b.plasmicProps.overrides.root.props.platform = "nextjs";
  }
  return b;
}

const PlasmicDescendants = {
  root: ["root", "startIconContainer", "contentContainer", "endIconContainer"],
  startIconContainer: ["startIconContainer"],
  contentContainer: ["contentContainer"],
  endIconContainer: ["endIconContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "button";
  startIconContainer: "div";
  contentContainer: "div";
  endIconContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButton2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton2__VariantsArgs;
    args?: PlasmicButton2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButton2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButton2__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicButton2__ArgProps,
          internalVariantPropNames: PlasmicButton2__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicButton2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton2";
  } else {
    func.displayName = `PlasmicButton2.${nodeName}`;
  }
  return func;
}

export const PlasmicButton2 = Object.assign(
  // Top-level PlasmicButton2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    endIconContainer: makeNodeComponent("endIconContainer"),

    // Metadata about props expected for PlasmicButton2
    internalVariantProps: PlasmicButton2__VariantProps,
    internalArgProps: PlasmicButton2__ArgProps,

    useBehavior
  }
);

export default PlasmicButton2;
/* prettier-ignore-end */
