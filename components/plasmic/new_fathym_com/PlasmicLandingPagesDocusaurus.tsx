// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jbURxL3XuiMBQsLhf7apui
// Component: 4ne7EFpfVxvr
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
import YouTube from "@plasmicpkgs/react-youtube"; // plasmic-import: CHO21V9uYw/codeComponent
import Button from "../../Button"; // plasmic-import: PDN2xmv-0aRn/component
import ValueProp from "../../ValueProp"; // plasmic-import: w1ZnbKd31u0d/component
import PriceCard from "../../PriceCard"; // plasmic-import: WPq9gUgwYyDn/component
import HabistackFooter from "../../HabistackFooter"; // plasmic-import: GpokPUrpKl/component

import { useScreenVariants as useScreenVariantsbzFq34BwReL2 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: BzFq34bwReL2/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_new_fathym_com.module.css"; // plasmic-import: jbURxL3XuiMBQsLhf7apui/projectcss
import sty from "./PlasmicLandingPagesDocusaurus.module.css"; // plasmic-import: 4ne7EFpfVxvr/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: lodHYqINbTbi/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: ZuOYCAXGTqWV/icon
import TargetIcon from "./icons/PlasmicIcon__Target"; // plasmic-import: rLVg9ppMbHmc/icon
import FastIcon from "./icons/PlasmicIcon__Fast"; // plasmic-import: R_OTBeuKYlSh/icon
import StrongIcon from "./icons/PlasmicIcon__Strong"; // plasmic-import: xG-_Nh8HQ7l8/icon
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: B6LQdT961rE8/icon

export type PlasmicLandingPagesDocusaurus__VariantMembers = {};

export type PlasmicLandingPagesDocusaurus__VariantsArgs = {};
type VariantPropType = keyof PlasmicLandingPagesDocusaurus__VariantsArgs;
export const PlasmicLandingPagesDocusaurus__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLandingPagesDocusaurus__ArgsType = {};
type ArgPropType = keyof PlasmicLandingPagesDocusaurus__ArgsType;
export const PlasmicLandingPagesDocusaurus__ArgProps = new Array<ArgPropType>();

export type PlasmicLandingPagesDocusaurus__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  foreground?: p.Flex<"div">;
  youTube?: p.Flex<typeof YouTube>;
  foreground2?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  section?: p.Flex<"section">;
  foreground3?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  habistackFooter?: p.Flex<typeof HabistackFooter>;
};

export interface DefaultLandingPagesDocusaurusProps {}

function PlasmicLandingPagesDocusaurus__RenderFunc(props: {
  variants: PlasmicLandingPagesDocusaurus__VariantsArgs;
  args: PlasmicLandingPagesDocusaurus__ArgsType;
  overrides: PlasmicLandingPagesDocusaurus__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbzFq34BwReL2()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">
          {"Fathym - Docusaurus Development & Deployments in record time"}
        </title>
        <meta
          key="og:title"
          property="og:title"
          content={
            "Fathym - Docusaurus Development & Deployments in record time"
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
            className={classNames(projectcss.all, sty.freeBox__juo5K)}
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
                  sty.text__x8Hux
                )}
              >
                {"Docusaurus Deployments\nwith Fathym"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gFodg
                )}
              >
                {
                  "Create, build, and deploy your next Docusaurus app with Fathym"
                }
              </div>
            </p.Stack>

            <YouTube
              data-plasmic-name={"youTube"}
              data-plasmic-override={overrides.youTube}
              className={classNames("__wab_instance", sty.youTube)}
              videoId={"bmFvFF9A348" as const}
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground2"}
              data-plasmic-override={overrides.foreground2}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground2)}
            >
              <div className={classNames(projectcss.all, sty.columns__mBz5S)}>
                <div className={classNames(projectcss.all, sty.column__uk4G)}>
                  <Button
                    className={classNames("__wab_instance", sty.button___0Hti8)}
                    color={"blue" as const}
                    link={
                      "/dashboard/create-project/recipe/docusaurus" as const
                    }
                  >
                    {"Get Started for Free"}
                  </Button>
                </div>

                <div className={classNames(projectcss.all, sty.column__tBpB)}>
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__dtGgT
                    )}
                    component={Link}
                    href={
                      "/docs/guides/deploying/site-builders/docusaurus-sites" as const
                    }
                    platform={"nextjs"}
                  >
                    {"Learn more >"}
                  </p.PlasmicLink>
                </div>
              </div>
            </p.Stack>

            <div className={classNames(projectcss.all, sty.columns__bSu4Y)}>
              <div className={classNames(projectcss.all, sty.column__vD4E)}>
                <div className={classNames(projectcss.all, sty.freeBox__h6EXx)}>
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
                    {"Do it Yourself"}
                  </h1>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nrefh
                    )}
                  >
                    {
                      "Get started now following the simple Docusaurus deployment guide, have Docusaurus hosted on your domain in minutes."
                    }
                  </div>
                </div>

                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__viDjX
                  )}
                  component={Link}
                  href={
                    "/docs/guides/deploying/site-builders/docusaurus-sites" as const
                  }
                  platform={"nextjs"}
                >
                  {"Read Documentation >"}
                </p.PlasmicLink>
              </div>
            </div>
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
                className={classNames(projectcss.all, sty.freeBox___4Xskx)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__mZi2O)}>
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
                    {"Why deploy Docusaurus?"}
                  </h2>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jtnEs
                  )}
                >
                  {
                    "Build optimized websites quickly, focus on your content.\n\nSave time and focus on your project's documentation. Simply write docs and blog posts with Markdown/MDX and Docusaurus will publish a set of static HTML files ready to serve. You can even embed JSX components into your Markdown thanks to MDX.\n\nExtend or customize your project's layout by reusing React. Docusaurus can be extended while reusing the same header and footer."
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__cNkme)}
              >
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__eJjqp)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__gFiAs)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__vyNSf
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__zxvWg
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
                              sty.svg__e8DCa
                            )}
                            role={"img"}
                          />
                        }
                        title={"Harder"}
                        vertical={true}
                      />
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column___0D4Y)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp___9WtAj
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__b0PK5
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
                              sty.svg__lgbXr
                            )}
                            role={"img"}
                          />
                        }
                        title={"Better"}
                        vertical={true}
                      />
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__nRJoU)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__swdGi
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__rHvIk
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
                              sty.svg__dsYhC
                            )}
                            role={"img"}
                          />
                        }
                        title={"Faster"}
                        vertical={true}
                      />
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__sPaj6)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__xi2Ss
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__dn1Lv
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
                              sty.svg__uUChK
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

              <div className={classNames(projectcss.all, sty.freeBox__wDpf2)}>
                <Button
                  className={classNames("__wab_instance", sty.button__fFlzm)}
                  color={"blue" as const}
                  link={"/dashboard/create-project/recipe/docusaurus" as const}
                >
                  {"Get Started for Free"}
                </Button>

                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__oAlp0
                  )}
                  component={Link}
                  href={
                    "/docs/guides/deploying/site-builders/docusaurus-sites" as const
                  }
                  platform={"nextjs"}
                >
                  {"Learn more >"}
                </p.PlasmicLink>
              </div>

              {true ? (
                <div className={classNames(projectcss.all, sty.columns__vv9Ak)}>
                  <div
                    className={classNames(projectcss.all, sty.column___3Fori)}
                  />

                  <div
                    className={classNames(projectcss.all, sty.column__cku9H)}
                  />
                </div>
              ) : null}
            </p.Stack>
          </section>

          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__hgMy7)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__izYqR)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__bG5Nb)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__fjw86)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__neJll
                      )}
                    >
                      {"Pricing plans"}
                    </div>
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kZsh1
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
                  className={classNames(projectcss.all, sty.freeBox__vzGmi)}
                >
                  <PriceCard
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__oCzO
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__qdhY
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__yvumm
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__zz2Vp
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__dJjs1
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
                          sty.text__vtIkM
                        )}
                      >
                        {"Buy Pro"}
                      </div>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__ssvWt
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__qmVg2
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__o0JF9
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__c7PzD
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__eewn6
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__mqi4T
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__dq4Yk
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
                          sty.text__yIFqq
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
                          sty.text___8XpRg
                        )}
                      >
                        {"Buy Team"}
                      </div>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__pb4Q
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__nIKqZ
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__dgAVo
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__gmpF7
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__n09CS
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__qVaIy
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___4HP95
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__yr03Q
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__mdEr
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
                          sty.text__ccXfL
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
                          sty.text__yAhv
                        )}
                      >
                        {"Contact us"}
                      </div>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__erPb0
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__ebuuo
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__jy75T
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__lfuk
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___7Qq5Q
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__mRBza
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__bnh1I
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__jw8Zg
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___6UWbx
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
                          sty.text__lrYrh
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

          <HabistackFooter
            data-plasmic-name={"habistackFooter"}
            data-plasmic-override={overrides.habistackFooter}
            className={classNames("__wab_instance", sty.habistackFooter)}
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
    "youTube",
    "foreground2",
    "h1",
    "section",
    "foreground3",
    "h2",
    "habistackFooter"
  ],
  navbar: ["navbar"],
  foreground: ["foreground"],
  youTube: ["youTube"],
  foreground2: ["foreground2"],
  h1: ["h1"],
  section: ["section", "foreground3", "h2"],
  foreground3: ["foreground3", "h2"],
  h2: ["h2"],
  habistackFooter: ["habistackFooter"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  foreground: "div";
  youTube: typeof YouTube;
  foreground2: "div";
  h1: "h1";
  section: "section";
  foreground3: "div";
  h2: "h2";
  habistackFooter: typeof HabistackFooter;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLandingPagesDocusaurus__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLandingPagesDocusaurus__VariantsArgs;
    args?: PlasmicLandingPagesDocusaurus__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLandingPagesDocusaurus__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLandingPagesDocusaurus__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicLandingPagesDocusaurus__ArgProps,
      internalVariantPropNames: PlasmicLandingPagesDocusaurus__VariantProps
    });

    return PlasmicLandingPagesDocusaurus__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLandingPagesDocusaurus";
  } else {
    func.displayName = `PlasmicLandingPagesDocusaurus.${nodeName}`;
  }
  return func;
}

export const PlasmicLandingPagesDocusaurus = Object.assign(
  // Top-level PlasmicLandingPagesDocusaurus renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    foreground: makeNodeComponent("foreground"),
    youTube: makeNodeComponent("youTube"),
    foreground2: makeNodeComponent("foreground2"),
    h1: makeNodeComponent("h1"),
    section: makeNodeComponent("section"),
    foreground3: makeNodeComponent("foreground3"),
    h2: makeNodeComponent("h2"),
    habistackFooter: makeNodeComponent("habistackFooter"),

    // Metadata about props expected for PlasmicLandingPagesDocusaurus
    internalVariantProps: PlasmicLandingPagesDocusaurus__VariantProps,
    internalArgProps: PlasmicLandingPagesDocusaurus__ArgProps
  }
);

export default PlasmicLandingPagesDocusaurus;
/* prettier-ignore-end */
