// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jbURxL3XuiMBQsLhf7apui
// Component: C-c1_GprIs0E
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
import Logo from "../../Logo"; // plasmic-import: mDNIC-FBlOxc/component
import Button from "../../Button"; // plasmic-import: PDN2xmv-0aRn/component

import { useScreenVariants as useScreenVariantsbzFq34BwReL2 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: BzFq34bwReL2/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_new_fathym_com.module.css"; // plasmic-import: jbURxL3XuiMBQsLhf7apui/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: C-c1_GprIs0E/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: lodHYqINbTbi/icon

export type PlasmicNavbar__VariantMembers = {};

export type PlasmicNavbar__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavbar__VariantsArgs;
export const PlasmicNavbar__VariantProps = new Array<VariantPropType>();

export type PlasmicNavbar__ArgsType = {};
type ArgPropType = keyof PlasmicNavbar__ArgsType;
export const PlasmicNavbar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbar__OverridesType = {
  root?: p.Flex<"div">;
  logo?: p.Flex<typeof Logo>;
  docs?: p.Flex<"a"> & Partial<LinkProps>;
  blog?: p.Flex<"a"> & Partial<LinkProps>;
  logIn?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultNavbarProps {
  className?: string;
}

function PlasmicNavbar__RenderFunc(props: {
  variants: PlasmicNavbar__VariantsArgs;
  args: PlasmicNavbar__ArgsType;
  overrides: PlasmicNavbar__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbzFq34BwReL2()
  });

  return (
    true ? (
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
          sty.root
        )}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__frDTk)}
        >
          <Logo
            data-plasmic-name={"logo"}
            data-plasmic-override={overrides.logo}
            className={classNames("__wab_instance", sty.logo)}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__fPaPp
            )}
          >
            {hasVariant(globalVariants, "screen", "mobileOnly")
              ? "Fathym"
              : "fathym"}
          </div>

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__daRol)}
            >
              <p.PlasmicLink
                data-plasmic-name={"docs"}
                data-plasmic-override={overrides.docs}
                className={classNames(projectcss.all, projectcss.a, sty.docs)}
                component={Link}
                href={"/docs" as const}
                platform={"nextjs"}
              >
                <Button color={"link" as const} link={"/docs" as const}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zYnX6
                    )}
                  >
                    {"Docs"}
                  </div>
                </Button>
              </p.PlasmicLink>

              <p.PlasmicLink
                data-plasmic-name={"blog"}
                data-plasmic-override={overrides.blog}
                className={classNames(projectcss.all, projectcss.a, sty.blog)}
                component={Link}
                href={"/blog" as const}
                platform={"nextjs"}
              >
                <Button color={"link" as const} link={"/blog" as const}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__t74Tr
                    )}
                  >
                    {"Blog"}
                  </div>
                </Button>
              </p.PlasmicLink>

              <p.PlasmicLink
                data-plasmic-name={"logIn"}
                data-plasmic-override={overrides.logIn}
                className={classNames(projectcss.all, projectcss.a, sty.logIn)}
                component={Link}
                href={"/dashboard" as const}
                platform={"nextjs"}
              >
                <Button color={"link" as const} link={"/dashboard" as const}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oTm5F
                    )}
                  >
                    {"Log in"}
                  </div>
                </Button>
              </p.PlasmicLink>
            </p.Stack>
          ) : null}

          <Button
            className={classNames("__wab_instance", sty.button__okLvQ)}
            color={"blue" as const}
            link={"/dashboard" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__dsBu3
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "Get started for free"
                : "Get Started for Free"}
            </div>
          </Button>
        </p.Stack>

        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : false) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___60Ge)}
          >
            <Button
              className={classNames("__wab_instance", sty.button__uafY)}
              color={"white" as const}
              link={"/docs" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qzSpX
                )}
              >
                {"Docs"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__zuqBc)}
              color={"white" as const}
              link={"/blog" as const}
            >
              {"Blog"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button___2JzDy)}
              color={"white" as const}
              link={"/dashboard" as const}
            >
              {"Log in"}
            </Button>
          </p.Stack>
        ) : null}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "logo", "docs", "blog", "logIn"],
  logo: ["logo"],
  docs: ["docs"],
  blog: ["blog"],
  logIn: ["logIn"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  logo: typeof Logo;
  docs: "a";
  blog: "a";
  logIn: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbar__VariantsArgs;
    args?: PlasmicNavbar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavbar__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNavbar__ArgProps,
      internalVariantPropNames: PlasmicNavbar__VariantProps
    });

    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),
    docs: makeNodeComponent("docs"),
    blog: makeNodeComponent("blog"),
    logIn: makeNodeComponent("logIn"),

    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
