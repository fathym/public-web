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
import FathymFooter from "../../FathymFooter"; // plasmic-import: 3jTJ0D37Jf/component

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
  fathymFooter?: p.Flex<typeof FathymFooter>;
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
                    : "Fathym is committed to protecting your privacy. \n\nThis Fathym, Inc. (“Fathym”) privacy policy (this “Privacy Policy”) describes our practices with regard to the personal information that Fathym collects, uses, shares and secures through any of Fathym’s products (our “Products”), any websites designated by Fathym (collectively, the “Site”), the mobile and other online applications provided by and on behalf of Fathym (each, an “Application”) and the services provided through the Fathym Products, Site and Applications (together, the “Fathym Platform”). By using any part of the Fathym Platform you consent to the collection and use of your Personal Information by Fathym as described in this Privacy Policy. \n\nCollection. “Personal Information” refers to information that is connected to your name and may include things such as your email address, mailing address or telephone number. We may collect Personal Information about you directly from you when you voluntarily provide it to us through the Fathym Platform, including, without limitation, through registering for an account, making online purchases, requesting support, requesting information or materials (whitepapers), applying for employment, communicating with Fathym or using Fathym products or services. \n\n“Sensitive Personal Information” refers to Personal Information regarding more sensitive issues, including, without limitation, credit card/banking information or your precise geolocation information. We may also collect Personal Information about you automatically when you interact with the Fathym Platform. For example, Fathym and our third party service providers may use “cookies,” “web beacons” and other automated tracking technology to monitor and collect Information regarding how you access, use, and interact with the Fathym Platform. \n\n“Cookies” are commonly used small files that are stored on your computer or mobile device to help identify you as a unique user of the Fathym Platform. Cookies store information about visitors’ preferences, to record user-specific information on which pages the site visitor accesses or visits, and to personalize or customize our web page content based upon visitors’ browser type or other information that the visitor sends via their browser. If you do not want your information to be stored by cookies, you can manage your cookie preferences by using the options and tools made available to you by either your web browser or Fathym. Please remember that required cookies will remain and cannot be turned off. Please also understand that choosing to reject cookies may reduce the performance and functionality of our websites. \n\n“Web beacons” (also known as “single–pixel” or “clear” GIFs) include electronic images embedded in the Fathym Platform that allow us to recognize when you visit that area of the Fathym Platform. \n\nWeb Server Logs. The information inside the log files includes internet protocol addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages and possibly the number of clicks. This information is used to analyze trends, administer the site, track user’s movement around the Site and gather demographic information. \n\nUse. Fathym may use the Personal Information we collect about you for a variety of purposes, including, without limitation, operating the Fathym Platform and providing services through the Fathym Platform; customizing and improving the Fathym Platform for you; providing maintenance, support and customer service for the Fathym Platform; providing notices and announcements to you relating to Fathym, the Fathym Platform or your Personal Information; providing offers for products, services or other offerings that we feel may be of interest to you; contacting you for direct marketing purposes; developing additional products and services; and research and analysis. Certain of your Personal Information may include Sensitive Personal Information, including, without limitation, when you provide us with certain banking or financial information, allow us to obtain and use your precise geolocation, or choose to share other Sensitive Personal Information with us or other users. Fathym will use any Sensitive Personal Information about you that we receive through the Fathym Platform solely in accordance with this Privacy Policy as you may request through the Fathym Platform. Fathym is not responsible for monitoring the Sensitive Personal Information you choose to exchange with other users or third parties through the Fathym Platform or for the use of that information by those other users or third parties. \n\nSharing. Fathym may share your Personal Information with companies that are affiliated with us, that we own or control, that own or control us or that are under common ownership or control with us. Fathym may also share your Personal Information with third parties who advertise their products and services on the Fathym Platform or other third parties who would like to send you information about their products and services. For example, Fathym may offer a discount or contest in conjunction with a co-sponsor that may have special offers or promotions that might be of interest to you. In such a case, your Personal Information may be shared with the co-sponsor and their use of your Personal Information is governed by their privacy policy. There may be instances when Fathym may disclose Personal Information without providing you with a choice in order to protect the legal rights of Fathym, other affiliated companies or their employees, agents and contractors; to protect the safety and security of other users; to protect against fraud or for risk management purposes; or to comply with the law or legal process. In addition, if Fathym sells all or part of its business or makes a sale or transfer of assets or is otherwise involved in a merger or business transfer, Fathym may transfer your Personal Information to a third party as part of that transaction. \n\nSecurity. Fathym uses reasonable measures to help prevent Personal Information from becoming disclosed to individuals who are not described in this Privacy Policy. While Fathym attempts to protect the information in our possession, no security system is perfect and Fathym cannot promise that information about you will remain secure in all circumstances. \n\nAdvertising. Fathym may participate in behavioral-based advertising. This means that a third party may use technology (i.e., a cookie) to collect information about your use of the Fathym Platform so that they can provide advertising about products and services tailored to your interest. That advertising may appear through the Fathym Platform, on the Site or on other websites. Our advertisers may also retarget you with advertisements about Fathym while you are visiting other websites on the Internet. In each case, the advertisements may make use of Personal Information collected about you through the Fathym Platform to attempt to tailor the advertisements to your interests. \n\nAccess and Choice. You may log in to your account and make changes to certain information, such as your password, contact information, general preferences and personalization settings. Additionally, Fathym has implemented the following procedure that you may use to access, correct or delete your Personal Information or choose how your Personal Information is used: \n\n1. If you would like to know the types of information that Fathym collects from users of its Fathym Platform, please email Fathym at the email address listed below under the “Communication” Section. \n\n2. If you would like to know whether Fathym has collected Personal Information about you please send us the activities and services that you participated in on the Fathym Platform that requested Personal Information. After reviewing the relevant databases, Fathym will confirm whether Fathym has collected such information about you and provide a list of your Personal Information that we have on file. \n\n3. If your Personal Information is incorrect, you may correct the Personal Information by sending a written request for correction to Fathym at the address listed below under the “Communication” Section. Your request must include (1) all of the incorrect Personal Information that you wish to change, (2) the corrected Personal Information, and (3) your signature authorizing such changes. Fathym will then correct the Personal Information in our database and send a written confirmation to you. \n\n4. If you wish to stop receiving email marketing communications from Fathym, please use the unsubscribe link at the bottom of each email communication or send a written opt-out request to the email address listed below under the “Communication” Section. \n\n5. Some web browsers and devices permit you to broadcast a preference that you not be “tracked” online. At this time Fathym does not modify your experience based upon whether such a signal is broadcast. \n\nGDPR. Where the EU General Data Protection Regulation 2016/679 (“GDPR”) or similar legal requirements apply to the processing of your Personal Information, especially when you access the website from a country in the European Economic Area (“EEA”), you have the following rights, subject to some limitations: the right to access your Personal Information, the right to rectify the Personal Information we hold about you, the right to erase your Personal Information, the right to restrict our use of your Personal Information, the right to object to our use of your Personal Information, the right to receive your Personal Information in a usable electronic format and transmit it to a third party (also known as the right of data portability), the right to lodge a complaint with your local data protection authority, and the right to withdraw any consent you have given to uses of your Personal Information (however, the withdrawal of consent will not affect the lawfulness of processing based on consent before its withdrawal). If you would like to exercise any of these rights, you may do so via the process described under the “Access and Choice” Section. \n\nAdditional Information. This Privacy Policy may not apply to open source project websites sponsored by Fathym; please refer to the privacy policy on those websites for more information about applicable privacy practices. This Privacy Policy does not apply to websites or applications offered by other companies or individuals, including, without limitation, third party products and services, that may be displayed on the Site. Fathym encourages you to read the privacy policy of any third party website or applications before transmitting any personal information. If you enter into a separate contractual relationship with Fathym which requires, or contemplates, collecting, using, sharing or securing information about you in a manner that is different than that which is described in this Privacy Policy, the terms of that agreement will apply. The Fathym Platform is intended for general audience and we do not knowingly collect personal information from anyone under the age of 13. \n\nNotice to California Residents: Under California Civil Code sections 1798.83-1798.84, California residents who have an established business relationship with Fathym are entitled to ask Fathym for a notice describing what categories of personal customer information we share with third parties for their direct marketing purposes. This notice will identify the categories of information shared with and will include a list of the third parties with which it is shared, along with their names and addresses. If you are a California resident and would like a copy of this notice, please submit a written request to Fathym at the address listed below under the “Communication” Section. \n\nChanges and Updates. Fathym reserves the right, at any time, to modify this Privacy Policy. Should we update, amend or make any changes to our Privacy Policy, those changes will be posted here. You should review this Privacy Policy periodically so that you keep up to date on Fathym’s most current policies and practices. Fathym will note the effective date of the latest version of our Privacy Policy at the end of this Privacy Policy. \n\nCommunication. If you have questions or concerns regarding how Fathym collects, uses, shares or secures your Personal Information or any other privacy or security issue, please contact: \n\nFathym, Inc. \n\nAttn: Legal (Privacy Concerns)1201 6 Ave W Ste 100 A337, Bradenton, FL 34205 \n\nBy email: legal@fathym.com \n\nIf Fathym needs, or is required, to contact you concerning any event that involves information about you, we may do so by email, telephone or mail. \n\nThis Privacy Policy was last updated on May 15, 2022. "}
                </div>
              </p.Stack>
            </div>
          </div>

          <FathymFooter
            data-plasmic-name={"fathymFooter"}
            data-plasmic-override={overrides.fathymFooter}
            className={classNames("__wab_instance", sty.fathymFooter)}
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
    "fathymFooter"
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
  fathymFooter: ["fathymFooter"]
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
  fathymFooter: typeof FathymFooter;
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
    fathymFooter: makeNodeComponent("fathymFooter"),

    // Metadata about props expected for PlasmicPrivacyPolicy
    internalVariantProps: PlasmicPrivacyPolicy__VariantProps,
    internalArgProps: PlasmicPrivacyPolicy__ArgProps
  }
);

export default PlasmicPrivacyPolicy;
/* prettier-ignore-end */
