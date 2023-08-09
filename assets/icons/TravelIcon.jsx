import * as React from "react";
import Svg, { Path } from "react-native-svg";
const TravelIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#000"}
      d="m27.344 10.656-6.713 16.039-2.09-5.415-.507-1.314-1.298-.507-5.431-2.106 16.04-6.697ZM33.25 4.75 4.75 16.672v1.552l10.83 4.196 4.18 10.83h1.552L33.25 4.75Z"
    />
  </Svg>
);
export default TravelIcon;
