// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jbURxL3XuiMBQsLhf7apui
// Component: WPq9gUgwYyDn
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
import Divider from "../../Divider"; // plasmic-import: jar6THUCtxN0/component
import ValueProp from "../../ValueProp"; // plasmic-import: w1ZnbKd31u0d/component
import Button from "../../Button"; // plasmic-import: PDN2xmv-0aRn/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_new_fathym_com.module.css"; // plasmic-import: jbURxL3XuiMBQsLhf7apui/projectcss
import sty from "./PlasmicPriceCard.module.css"; // plasmic-import: WPq9gUgwYyDn/css

import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: B6LQdT961rE8/icon
import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: lodHYqINbTbi/icon

export type PlasmicPriceCard__VariantMembers = {
  primary: "primary";
  borders: "flatLeft" | "flatRight";
};

export type PlasmicPriceCard__VariantsArgs = {
  primary?: SingleBooleanChoiceArg<"primary">;
  borders?: MultiChoiceArg<"flatLeft" | "flatRight">;
};

type VariantPropType = keyof PlasmicPriceCard__VariantsArgs;
export const PlasmicPriceCard__VariantProps = new Array<VariantPropType>(
  "primary",
  "borders"
);

export type PlasmicPriceCard__ArgsType = {
  label?: React.ReactNode;
  dollars?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPriceCard__ArgsType;
export const PlasmicPriceCard__ArgProps = new Array<ArgPropType>(
  "label",
  "dollars",
  "description",
  "action"
);

export type PlasmicPriceCard__OverridesType = {
  root?: p.Flex<"div">;
  divider?: p.Flex<typeof Divider>;
  button?: p.Flex<typeof Button>;
};

export interface DefaultPriceCardProps {
  label?: React.ReactNode;
  dollars?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  primary?: SingleBooleanChoiceArg<"primary">;
  borders?: MultiChoiceArg<"flatLeft" | "flatRight">;
  className?: string;
}

function PlasmicPriceCard__RenderFunc(props: {
  variants: PlasmicPriceCard__VariantsArgs;
  args: PlasmicPriceCard__ArgsType;
  overrides: PlasmicPriceCard__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

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
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootborders_flatLeft]: hasVariant(
            variants,
            "borders",
            "flatLeft"
          ),
          [sty.rootborders_flatRight]: hasVariant(
            variants,
            "borders",
            "flatRight"
          ),
          [sty.rootprimary]: hasVariant(variants, "primary", "primary")
        }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__yvxQx)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__plYmx)}>
          <div className={classNames(projectcss.all, sty.freeBox___5GRKo)}>
            {p.renderPlasmicSlot({
              defaultContents: "Starter",
              value: args.label,
              className: classNames(sty.slotTargetLabel)
            })}
          </div>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__lkElX)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__vf2Yp)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__weZx
              )}
            >
              {"$"}
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__hcnPg)}>
              {p.renderPlasmicSlot({
                defaultContents: "8",
                value: args.dollars,
                className: classNames(sty.slotTargetDollars)
              })}
            </div>
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___0Werw
            )}
          >
            {"/month"}
          </div>
        </p.Stack>
      </p.Stack>

      <Divider
        data-plasmic-name={"divider"}
        data-plasmic-override={overrides.divider}
        className={classNames("__wab_instance", sty.divider)}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__vHry7)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__yeub)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <ValueProp
                  className={classNames(
                    "__wab_instance",
                    sty.valueProp___5Wp1F
                  )}
                  description={
                    "Vestibulum mollis odio dictum ultrices facilisis molestie vestibulum"
                  }
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__jcAlY)}
                      role={"img"}
                    />
                  }
                />

                <ValueProp
                  className={classNames("__wab_instance", sty.valueProp__lPs2I)}
                  description={"Mus consequat a justo"}
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__bKKiN)}
                      role={"img"}
                    />
                  }
                />
              </React.Fragment>
            ),
            value: args.description
          })}
        </p.Stack>

        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          color={
            hasVariant(variants, "primary", "primary")
              ? ("green" as const)
              : ("white" as const)
          }
          extraSmallShadow={true}
          link={"/dashboard" as const}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tkOLu
                )}
              >
                {"Buy starter"}
              </div>
            ),

            value: args.action
          })}
        </Button>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "divider", "button"],
  divider: ["divider"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  divider: typeof Divider;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPriceCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPriceCard__VariantsArgs;
    args?: PlasmicPriceCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPriceCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPriceCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPriceCard__ArgProps,
      internalVariantPropNames: PlasmicPriceCard__VariantProps
    });

    return PlasmicPriceCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceCard";
  } else {
    func.displayName = `PlasmicPriceCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceCard = Object.assign(
  // Top-level PlasmicPriceCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    divider: makeNodeComponent("divider"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicPriceCard
    internalVariantProps: PlasmicPriceCard__VariantProps,
    internalArgProps: PlasmicPriceCard__ArgProps
  }
);

export default PlasmicPriceCard;
/* prettier-ignore-end */