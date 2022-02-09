import * as React from "react";
import {
  PlasmicTextInput2,
  DefaultTextInput2Props
} from "./plasmic/new_fathym_com/PlasmicTextInput2";
import { TextInputRef } from "@plasmicapp/react-web";

interface TextInput2Props extends DefaultTextInput2Props {}

function TextInput2_(props: TextInput2Props, ref: TextInputRef) {
  const { plasmicProps } = PlasmicTextInput2.useBehavior<TextInput2Props>(
    props,
    ref
  );
  return <PlasmicTextInput2 {...plasmicProps} />;
}

const TextInput2 = React.forwardRef(TextInput2_);

export default Object.assign(TextInput2, {
  __plumeType: "text-input"
});
