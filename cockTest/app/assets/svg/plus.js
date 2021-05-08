import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgComponentPlus(props) {
  return (
    <Svg 
      width={25} height={25}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-plus-circle"
      {...props}
    >
      <Circle cx={12} cy={12} r={10} />
      <Path  fill={props.color} d="M12 8L12 16" />
      <Path  fill={props.color} d="M8 12L16 12" />
    </Svg>
  )
}

export default SvgComponentPlus
