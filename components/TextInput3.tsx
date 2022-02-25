import * as React from "react";
import {
  PlasmicTextInput3,
  DefaultTextInput3Props
} from "./plasmic/new_fathym_com/PlasmicTextInput3";
import { TextInputRef } from "@plasmicapp/react-web";

interface TextInput3Props extends DefaultTextInput3Props {}

function TextInput3_(props: TextInput3Props, ref: TextInputRef) {
  const { plasmicProps } = PlasmicTextInput3.useBehavior<TextInput3Props>(
    props,
    ref
  );
  return <PlasmicTextInput3 {...plasmicProps} />;
}

const TextInput3 = React.forwardRef(TextInput3_);

export default Object.assign(TextInput3, {
  __plumeType: "text-input"
});
