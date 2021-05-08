import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponentHome(props) {
  return (
    <Svg data-name="Layer 1" viewBox="0 0 24 24" {...props}>
      <Path d="M21.8 6.78l-8.12-5.29a3.1 3.1 0 00-3.36 0L2.2 6.78A2.46 2.46 0 001 8.84V23h9v-5.57h4V23h9V8.84a2.46 2.46 0 00-1.2-2.06zM21 21h-5v-5.57H8V21H3V8.84a.49.49 0 01.26-.39l8.12-5.29a1.14 1.14 0 011.18 0l8.12 5.29a.49.49 0 01.26.39z" />
    </Svg>
  )
}

export default SvgComponentHome
