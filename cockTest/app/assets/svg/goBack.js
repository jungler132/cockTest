import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../services/config/colors"

function SvgComponent(props) {
  return (
    <Svg
      width={40} 
      height={40}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill={colors.white} d="M17.75 9H12V5.75c0-.66-.795-.999-1.27-.541l-6.5 6.25a.752.752 0 000 1.082l6.5 6.25A.75.75 0 0012 18.25V15h5.75c.689 0 1.25-.561 1.25-1.25v-3.5C19 9.561 18.439 9 17.75 9z" />
      <Path fill={colors.orange} d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z" />
    </Svg>
  )
}

export default SvgComponent
