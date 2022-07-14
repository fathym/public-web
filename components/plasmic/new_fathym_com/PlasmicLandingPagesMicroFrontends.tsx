// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jbURxL3XuiMBQsLhf7apui
// Component: eDgf6ntQo-zf
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
import Button from "../../Button"; // plasmic-import: PDN2xmv-0aRn/component
import ValueProp from "../../ValueProp"; // plasmic-import: w1ZnbKd31u0d/component
import PriceCard from "../../PriceCard"; // plasmic-import: WPq9gUgwYyDn/component
import FathymFooter from "../../FathymFooter"; // plasmic-import: 3jTJ0D37Jf/component

import { useScreenVariants as useScreenVariantsbzFq34BwReL2 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: BzFq34bwReL2/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_new_fathym_com.module.css"; // plasmic-import: jbURxL3XuiMBQsLhf7apui/projectcss
import sty from "./PlasmicLandingPagesMicroFrontends.module.css"; // plasmic-import: eDgf6ntQo-zf/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: lodHYqINbTbi/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: ZuOYCAXGTqWV/icon
import TargetIcon from "./icons/PlasmicIcon__Target"; // plasmic-import: rLVg9ppMbHmc/icon
import FastIcon from "./icons/PlasmicIcon__Fast"; // plasmic-import: R_OTBeuKYlSh/icon
import StrongIcon from "./icons/PlasmicIcon__Strong"; // plasmic-import: xG-_Nh8HQ7l8/icon
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: B6LQdT961rE8/icon

export type PlasmicLandingPagesMicroFrontends__VariantMembers = {};

export type PlasmicLandingPagesMicroFrontends__VariantsArgs = {};
type VariantPropType = keyof PlasmicLandingPagesMicroFrontends__VariantsArgs;
export const PlasmicLandingPagesMicroFrontends__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLandingPagesMicroFrontends__ArgsType = {};
type ArgPropType = keyof PlasmicLandingPagesMicroFrontends__ArgsType;
export const PlasmicLandingPagesMicroFrontends__ArgProps =
  new Array<ArgPropType>();

export type PlasmicLandingPagesMicroFrontends__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  foreground?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  foreground2?: p.Flex<"div">;
  section?: p.Flex<"section">;
  foreground3?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  fathymFooter?: p.Flex<typeof FathymFooter>;
};

export interface DefaultLandingPagesMicroFrontendsProps {}

function PlasmicLandingPagesMicroFrontends__RenderFunc(props: {
  variants: PlasmicLandingPagesMicroFrontends__VariantsArgs;
  args: PlasmicLandingPagesMicroFrontends__ArgsType;
  overrides: PlasmicLandingPagesMicroFrontends__OverridesType;

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

  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbzFq34BwReL2()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">
          {"Fathym - Micro Frontend Development & Deployments in record time"}
        </title>
        <meta
          key="og:title"
          property="og:title"
          content={
            "Fathym - Micro Frontend Development & Deployments in record time"
          }
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={
            "Fathym - Micro Frontend Development & Deployments in record time"
          }
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__plcEc)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground"}
              data-plasmic-override={overrides.foreground}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yeICk
                )}
              >
                {"Micro Frontend Deployments\nwith Fathym"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yYcOe
                )}
              >
                {"Create, build, and deploy your micro frontends with Fathym"}
              </div>
            </p.Stack>

            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/new_fathym_com/images/image.png",
                fullWidth: 485,
                fullHeight: 400,
                aspectRatio: undefined
              }}
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground2"}
              data-plasmic-override={overrides.foreground2}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground2)}
            >
              <div className={classNames(projectcss.all, sty.columns__izh7R)}>
                <div className={classNames(projectcss.all, sty.column__qvKez)}>
                  <Button
                    className={classNames("__wab_instance", sty.button__rrtQx)}
                    color={"blue" as const}
                    link={"/dashboard/create-project" as const}
                  >
                    {"Get Started for Free"}
                  </Button>
                </div>

                <div className={classNames(projectcss.all, sty.column__hUEeo)}>
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__eLnjF
                    )}
                    component={Link}
                    href={"/docs/guides/micro-frontends/overview" as const}
                    platform={"nextjs"}
                  >
                    {"Learn more >"}
                  </p.PlasmicLink>
                </div>
              </div>
            </p.Stack>
          </p.Stack>

          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground3"}
              data-plasmic-override={overrides.foreground3}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground3)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__f1BS)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__y5Ynj)}>
                  <h2
                    data-plasmic-name={"h2"}
                    data-plasmic-override={overrides.h2}
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2
                    )}
                  >
                    {"Why deploy micro frontends?"}
                  </h2>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___4ISix
                  )}
                >
                  {
                    "With micro frontends, applications are broken apart into a series of feature based projects that are owned by independent teams. These smaller, and more cohesive codebases are then composed into a final delivered product. This allows for team autonomy and focus on specific business needs, making for more scalable feature implementation. The architectural approach is rooted in strong DevOps practices to ensure upgrades, updates, and rewrites can be applied in an incremental way that does not disrupt the entire product or business.\n\nLeverage Fathym for your next micro frontent project."
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__qne9B)}
              >
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__xClfw)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__a6MPj)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__tYbDe
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__c2Xe
                            )}
                          >
                            {
                              "Nulla odio mauris enim parturient adipiscing vestibulum inceptos."
                            }
                          </div>
                        }
                        icon={
                          <HammerIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__wYuIc
                            )}
                            role={"img"}
                          />
                        }
                        title={"Harder"}
                        vertical={true}
                      />
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__whFrn)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__n805B
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__qrzC3
                            )}
                          >
                            {
                              "Consequat scelerisque a eros taciti nisl a sodales."
                            }
                          </div>
                        }
                        icon={
                          <TargetIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__yvYHx
                            )}
                            role={"img"}
                          />
                        }
                        title={"Better"}
                        vertical={true}
                      />
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__a0LiF)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__frToU
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__s4QRc
                            )}
                          >
                            {
                              "Varius ad malesuada ullamcorper cursus scelerisque a a."
                            }
                          </div>
                        }
                        icon={
                          <FastIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___7RkfC
                            )}
                            role={"img"}
                          />
                        }
                        title={"Faster"}
                        vertical={true}
                      />
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__u6XWg)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__k3Z8
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__wNcWw
                            )}
                          >
                            {
                              "Ut eu nam nostra taciti congue adipiscing curabitur."
                            }
                          </div>
                        }
                        icon={
                          <StrongIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__n43So
                            )}
                            role={"img"}
                          />
                        }
                        title={"Stronger"}
                        vertical={true}
                      />
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>

              <div className={classNames(projectcss.all, sty.columns__aWCct)}>
                <div className={classNames(projectcss.all, sty.column__aNdOo)}>
                  <Button
                    className={classNames("__wab_instance", sty.button__bZuTt)}
                    color={"blue" as const}
                    link={"/dashboard/create-project" as const}
                  >
                    {"Get Started for Free"}
                  </Button>
                </div>

                <div className={classNames(projectcss.all, sty.column__czgS1)}>
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__wjk7E
                    )}
                    component={Link}
                    href={"/docs/guides/micro-frontends/overview" as const}
                    platform={"nextjs"}
                  >
                    {"Learn more >"}
                  </p.PlasmicLink>
                </div>
              </div>
            </p.Stack>
          </section>

          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__qf7Hy)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__bldzx)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__w9FsT)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__szHxr)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__d2Hxp
                      )}
                    >
                      {"Pricing plans"}
                    </div>
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pl4Do
                    )}
                  >
                    {
                      "Nascetur nascetur ridiculus scelerisque adipiscing a nascetur varius sed eu a ad semper a est nec litora ante at orci rhoncus a varius auctor aliquam inceptos vestibulum ridiculus."
                    }
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___5Dmj8)}
                >
                  <PriceCard
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__hSVi
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__fgx8M
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__yFj9W
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__hZlOj
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__cOwCv
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />
                      </React.Fragment>
                    }
                    dollars={"0"}
                  />

                  <PriceCard
                    action={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__dnPIr
                        )}
                      >
                        {"Buy Pro"}
                      </div>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__ucoGl
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp___4LsDl
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__q6N8O
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__dNvG1
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__dNgI
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__hBEa
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__g981C
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />
                      </React.Fragment>
                    }
                    dollars={"8"}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__tVRzD
                        )}
                      >
                        {"Pro"}
                      </div>
                    }
                  />

                  <PriceCard
                    action={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__nGkXp
                        )}
                      >
                        {"Buy Team"}
                      </div>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__kgYr
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__wDyn
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__j8GxK
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp___7Z4Lg
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__gBIdI
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp___9KLQw
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__tSlBh
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__mFeo7
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__msfIj
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />
                      </React.Fragment>
                    }
                    dollars={"16"}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__pwClA
                        )}
                      >
                        {"Team"}
                      </div>
                    }
                  />

                  <PriceCard
                    action={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__fZWo
                        )}
                      >
                        {"Contact us"}
                      </div>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__oOclt
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__yuriN
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___9Yqsn
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__oXzu
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__i4Xl4
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__fb8PN
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__viSBo
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__sIdK8
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__x9HxU
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />
                      </React.Fragment>
                    }
                    dollars={"?"}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___2IBr3
                        )}
                      >
                        {"Enterprise"}
                      </div>
                    }
                    primary={true}
                  />
                </p.Stack>
              </p.Stack>
            </p.Stack>
          ) : null}

          <FathymFooter
            data-plasmic-name={"fathymFooter"}
            data-plasmic-override={overrides.fathymFooter}
            className={classNames("__wab_instance", sty.fathymFooter)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "foreground",
    "img",
    "foreground2",
    "section",
    "foreground3",
    "h2",
    "fathymFooter"
  ],
  navbar: ["navbar"],
  foreground: ["foreground"],
  img: ["img"],
  foreground2: ["foreground2"],
  section: ["section", "foreground3", "h2"],
  foreground3: ["foreground3", "h2"],
  h2: ["h2"],
  fathymFooter: ["fathymFooter"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  foreground: "div";
  img: typeof p.PlasmicImg;
  foreground2: "div";
  section: "section";
  foreground3: "div";
  h2: "h2";
  fathymFooter: typeof FathymFooter;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLandingPagesMicroFrontends__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLandingPagesMicroFrontends__VariantsArgs;
    args?: PlasmicLandingPagesMicroFrontends__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLandingPagesMicroFrontends__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLandingPagesMicroFrontends__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicLandingPagesMicroFrontends__ArgProps,
          internalVariantPropNames:
            PlasmicLandingPagesMicroFrontends__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLandingPagesMicroFrontends__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLandingPagesMicroFrontends";
  } else {
    func.displayName = `PlasmicLandingPagesMicroFrontends.${nodeName}`;
  }
  return func;
}

export const PlasmicLandingPagesMicroFrontends = Object.assign(
  // Top-level PlasmicLandingPagesMicroFrontends renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    foreground: makeNodeComponent("foreground"),
    img: makeNodeComponent("img"),
    foreground2: makeNodeComponent("foreground2"),
    section: makeNodeComponent("section"),
    foreground3: makeNodeComponent("foreground3"),
    h2: makeNodeComponent("h2"),
    fathymFooter: makeNodeComponent("fathymFooter"),

    // Metadata about props expected for PlasmicLandingPagesMicroFrontends
    internalVariantProps: PlasmicLandingPagesMicroFrontends__VariantProps,
    internalArgProps: PlasmicLandingPagesMicroFrontends__ArgProps
  }
);

export default PlasmicLandingPagesMicroFrontends;
/* prettier-ignore-end */
