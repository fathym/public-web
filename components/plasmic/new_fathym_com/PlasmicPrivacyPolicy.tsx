// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jbURxL3XuiMBQsLhf7apui
// Component: 8Fxhz1anqdV
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
import Navbar from "../../Navbar"; // plasmic-import: C-c1_GprIs0E/component
import HabistackFooter from "../../HabistackFooter"; // plasmic-import: GpokPUrpKl/component

import { useScreenVariants as useScreenVariantsbzFq34BwReL2 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: BzFq34bwReL2/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_new_fathym_com.module.css"; // plasmic-import: jbURxL3XuiMBQsLhf7apui/projectcss
import sty from "./PlasmicPrivacyPolicy.module.css"; // plasmic-import: 8Fxhz1anqdV/css

export type PlasmicPrivacyPolicy__VariantMembers = {};

export type PlasmicPrivacyPolicy__VariantsArgs = {};
type VariantPropType = keyof PlasmicPrivacyPolicy__VariantsArgs;
export const PlasmicPrivacyPolicy__VariantProps = new Array<VariantPropType>();

export type PlasmicPrivacyPolicy__ArgsType = {};
type ArgPropType = keyof PlasmicPrivacyPolicy__ArgsType;
export const PlasmicPrivacyPolicy__ArgProps = new Array<ArgPropType>();

export type PlasmicPrivacyPolicy__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  mainSection?: p.Flex<"div">;
  pageBanner?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  img?: p.Flex<typeof p.PlasmicImg>;
  mainSection2?: p.Flex<"div">;
  container3?: p.Flex<"div">;
  h3?: p.Flex<"h3">;
  habistackFooter?: p.Flex<typeof HabistackFooter>;
};

export interface DefaultPrivacyPolicyProps {}

function PlasmicPrivacyPolicy__RenderFunc(props: {
  variants: PlasmicPrivacyPolicy__VariantsArgs;
  args: PlasmicPrivacyPolicy__ArgsType;
  overrides: PlasmicPrivacyPolicy__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbzFq34BwReL2()
  });

  return (
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
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
          <div className={classNames(projectcss.all, sty.freeBox__rbIqS)}>
            <div className={classNames(projectcss.all, sty.freeBox__suzfh)}>
              <Navbar
                data-plasmic-name={"navbar"}
                data-plasmic-override={overrides.navbar}
                className={classNames("__wab_instance", sty.navbar)}
              />
            </div>
          </div>

          <div
            data-plasmic-name={"mainSection"}
            data-plasmic-override={overrides.mainSection}
            className={classNames(projectcss.all, sty.mainSection)}
          >
            <div
              data-plasmic-name={"pageBanner"}
              data-plasmic-override={overrides.pageBanner}
              className={classNames(projectcss.all, sty.pageBanner)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__fUeTo)}>
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"columns"}
                  data-plasmic-override={overrides.columns}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.columns)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__aKi5X)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___3UBEc
                      )}
                    >
                      <h1
                        data-plasmic-name={"h1"}
                        data-plasmic-override={overrides.h1}
                        className={classNames(
                          projectcss.all,
                          projectcss.h1,
                          projectcss.__wab_text,
                          sty.h1
                        )}
                      >
                        {"Privacy Policy"}
                      </h1>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__spvS2
                        )}
                      >
                        {
                          "The Fathym Privacy Policy explains how Fathym handles any customer, client or employee information gathered in its operations."
                        }
                      </div>
                    </p.Stack>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column___272Uj)}
                  >
                    <p.PlasmicImg
                      data-plasmic-name={"img"}
                      data-plasmic-override={overrides.img}
                      alt={""}
                      className={classNames(sty.img)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? ("100%" as const)
                          : ("100%" as const)
                      }
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      loading={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? ("lazy" as const)
                          : ("lazy" as const)
                      }
                      src={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? {
                              src: "/plasmic/new_fathym_com/images/image21.jpeg",
                              fullWidth: 1920,
                              fullHeight: 1280,
                              aspectRatio: undefined
                            }
                          : {
                              src: "/plasmic/new_fathym_com/images/image20.jpeg",
                              fullWidth: 1920,
                              fullHeight: 1280,
                              aspectRatio: undefined
                            }
                      }
                    />
                  </div>
                </p.Stack>
              </div>
            </div>
          </div>

          <div
            data-plasmic-name={"mainSection2"}
            data-plasmic-override={overrides.mainSection2}
            className={classNames(projectcss.all, sty.mainSection2)}
          >
            <div
              data-plasmic-name={"container3"}
              data-plasmic-override={overrides.container3}
              className={classNames(projectcss.all, sty.container3)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__xwZW)}
              >
                <h3
                  data-plasmic-name={"h3"}
                  data-plasmic-override={overrides.h3}
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Professional And\nDedicated Consulting Services..."
                    : "Fathym Privacy Policy"}
                </h3>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dVy
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus tortor pretium ligula, eu malesuada tortor eros dapibus mi. Proin laoreet efficitur suscipit. Donec molestie volutpat euismod. Nulla gravida ligula in eros facilisis, sed dignissim tellus aliquam. Etiam convallis enim nisi, at suscipit tortor pulvinar at. "
                    : "Some Text here "}
                </div>
              </p.Stack>
            </div>
          </div>

          <HabistackFooter
            data-plasmic-name={"habistackFooter"}
            data-plasmic-override={overrides.habistackFooter}
            className={classNames("__wab_instance", sty.habistackFooter)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "mainSection",
    "pageBanner",
    "columns",
    "h1",
    "img",
    "mainSection2",
    "container3",
    "h3",
    "habistackFooter"
  ],
  navbar: ["navbar"],
  mainSection: ["mainSection", "pageBanner", "columns", "h1", "img"],
  pageBanner: ["pageBanner", "columns", "h1", "img"],
  columns: ["columns", "h1", "img"],
  h1: ["h1"],
  img: ["img"],
  mainSection2: ["mainSection2", "container3", "h3"],
  container3: ["container3", "h3"],
  h3: ["h3"],
  habistackFooter: ["habistackFooter"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  mainSection: "div";
  pageBanner: "div";
  columns: "div";
  h1: "h1";
  img: typeof p.PlasmicImg;
  mainSection2: "div";
  container3: "div";
  h3: "h3";
  habistackFooter: typeof HabistackFooter;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPrivacyPolicy__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPrivacyPolicy__VariantsArgs;
    args?: PlasmicPrivacyPolicy__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPrivacyPolicy__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPrivacyPolicy__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPrivacyPolicy__ArgProps,
      internalVariantPropNames: PlasmicPrivacyPolicy__VariantProps
    });

    return PlasmicPrivacyPolicy__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPrivacyPolicy";
  } else {
    func.displayName = `PlasmicPrivacyPolicy.${nodeName}`;
  }
  return func;
}

export const PlasmicPrivacyPolicy = Object.assign(
  // Top-level PlasmicPrivacyPolicy renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    mainSection: makeNodeComponent("mainSection"),
    pageBanner: makeNodeComponent("pageBanner"),
    columns: makeNodeComponent("columns"),
    h1: makeNodeComponent("h1"),
    img: makeNodeComponent("img"),
    mainSection2: makeNodeComponent("mainSection2"),
    container3: makeNodeComponent("container3"),
    h3: makeNodeComponent("h3"),
    habistackFooter: makeNodeComponent("habistackFooter"),

    // Metadata about props expected for PlasmicPrivacyPolicy
    internalVariantProps: PlasmicPrivacyPolicy__VariantProps,
    internalArgProps: PlasmicPrivacyPolicy__ArgProps
  }
);

export default PlasmicPrivacyPolicy;
/* prettier-ignore-end */
