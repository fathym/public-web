// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jbURxL3XuiMBQsLhf7apui
// Component: 5SnsQScnhaLp
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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
import Button from "../../Button"; // plasmic-import: PDN2xmv-0aRn/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_new_fathym_com.module.css"; // plasmic-import: jbURxL3XuiMBQsLhf7apui/projectcss
import sty from "./PlasmicBanner.module.css"; // plasmic-import: 5SnsQScnhaLp/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: lodHYqINbTbi/icon

export type PlasmicBanner__VariantMembers = {};

export type PlasmicBanner__VariantsArgs = {};
type VariantPropType = keyof PlasmicBanner__VariantsArgs;
export const PlasmicBanner__VariantProps = new Array<VariantPropType>();

export type PlasmicBanner__ArgsType = {
  left?: React.ReactNode;
  image?: React.ComponentProps<typeof p.PlasmicImg>["src"];
};

type ArgPropType = keyof PlasmicBanner__ArgsType;
export const PlasmicBanner__ArgProps = new Array<ArgPropType>("left", "image");

export type PlasmicBanner__OverridesType = {
  root?: p.Flex<"div">;
  right?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  gradient?: p.Flex<"div">;
  left?: p.Flex<"div">;
};

export interface DefaultBannerProps {
  left?: React.ReactNode;
  image?: React.ComponentProps<typeof p.PlasmicImg>["src"];
  className?: string;
}

function PlasmicBanner__RenderFunc(props: {
  variants: PlasmicBanner__VariantsArgs;
  args: PlasmicBanner__ArgsType;
  overrides: PlasmicBanner__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          image: {
            src: "/plasmic/new_fathym_com/images/image15.png",
            fullWidth: 1384,
            fullHeight: 1023,
            aspectRatio: undefined
          }
        },
        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"right"}
        data-plasmic-override={overrides.right}
        className={classNames(projectcss.all, sty.right)}
      >
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"100%" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"none" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"100%" as const}
          src={args.image}
        />

        {true ? (
          <div
            data-plasmic-name={"gradient"}
            data-plasmic-override={overrides.gradient}
            className={classNames(projectcss.all, sty.gradient)}
          />
        ) : null}
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"left"}
        data-plasmic-override={overrides.left}
        hasGap={true}
        className={classNames(projectcss.all, sty.left)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__h5T6E
                )}
              >
                {"Sunglasses Collection"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wP2TL
                )}
              >
                {"Get 25% off on selected items"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tPoKu
                )}
              >
                {"Enter some text"}
              </div>

              <Button>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__iu7As
                  )}
                >
                  {"Go to collection ->"}
                </div>
              </Button>
            </React.Fragment>
          ),
          value: args.left
        })}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "right", "img", "gradient", "left"],
  right: ["right", "img", "gradient"],
  img: ["img"],
  gradient: ["gradient"],
  left: ["left"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  right: "div";
  img: typeof p.PlasmicImg;
  gradient: "div";
  left: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBanner__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBanner__VariantsArgs;
    args?: PlasmicBanner__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBanner__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBanner__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicBanner__ArgProps,
          internalVariantPropNames: PlasmicBanner__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicBanner__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBanner";
  } else {
    func.displayName = `PlasmicBanner.${nodeName}`;
  }
  return func;
}

export const PlasmicBanner = Object.assign(
  // Top-level PlasmicBanner renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    right: makeNodeComponent("right"),
    img: makeNodeComponent("img"),
    gradient: makeNodeComponent("gradient"),
    left: makeNodeComponent("left"),

    // Metadata about props expected for PlasmicBanner
    internalVariantProps: PlasmicBanner__VariantProps,
    internalArgProps: PlasmicBanner__ArgProps
  }
);

export default PlasmicBanner;
/* prettier-ignore-end */
