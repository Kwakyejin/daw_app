import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HomeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#000"}
      d="m19 9.01 7.917 7.124V28.5H23.75V19h-9.5v9.5h-3.167V16.134L19 9.01Zm0-4.26L3.167 19h4.75v12.667h9.5v-9.5h3.166v9.5h9.5V19h4.75L19 4.75Z"
    />
  </Svg>
);
export default HomeIcon;
