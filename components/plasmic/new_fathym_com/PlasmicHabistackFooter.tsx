// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jbURxL3XuiMBQsLhf7apui
// Component: GpokPUrpKl
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

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
import Footer from "../../Footer"; // plasmic-import: Q4yy3X_W7vH/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_new_fathym_com.module.css"; // plasmic-import: jbURxL3XuiMBQsLhf7apui/projectcss
import sty from "./PlasmicHabistackFooter.module.css"; // plasmic-import: GpokPUrpKl/css

export type PlasmicHabistackFooter__VariantMembers = {};

export type PlasmicHabistackFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicHabistackFooter__VariantsArgs;
export const PlasmicHabistackFooter__VariantProps =
  new Array<VariantPropType>();

export type PlasmicHabistackFooter__ArgsType = {};
type ArgPropType = keyof PlasmicHabistackFooter__ArgsType;
export const PlasmicHabistackFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicHabistackFooter__OverridesType = {
  root?: p.Flex<typeof Footer>;
};

export interface DefaultHabistackFooterProps {
  className?: string;
}

function PlasmicHabistackFooter__RenderFunc(props: {
  variants: PlasmicHabistackFooter__VariantsArgs;
  args: PlasmicHabistackFooter__ArgsType;
  overrides: PlasmicHabistackFooter__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <Footer
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHabistackFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHabistackFooter__VariantsArgs;
    args?: PlasmicHabistackFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHabistackFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHabistackFooter__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHabistackFooter__ArgProps,
      internalVariantPropNames: PlasmicHabistackFooter__VariantProps
    });

    return PlasmicHabistackFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHabistackFooter";
  } else {
    func.displayName = `PlasmicHabistackFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicHabistackFooter = Object.assign(
  // Top-level PlasmicHabistackFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicHabistackFooter
    internalVariantProps: PlasmicHabistackFooter__VariantProps,
    internalArgProps: PlasmicHabistackFooter__ArgProps
  }
);

export default PlasmicHabistackFooter;
/* prettier-ignore-end */
