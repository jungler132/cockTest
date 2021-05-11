import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponentFood(props) {
  return (
    <Svg width={25} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
      <Path fill={'white'} d="M118.518 5.621a3.772 3.772 0 00-1.479.256l-14.744 5.846c-1.3.5-2.36 1.791-2.637 3.271l-2.492 13.854h-22.16c-1.111 0-2 .97-2 2.19v10.419c0 1.218.889 2.193 2 2.193H122.37c1.111 0 2.03-.975 2.03-2.193v-10.42c0-1.218-.919-2.19-2.03-2.19h-17.037l1.768-9.66 12.662-4.986c1.766-.669 2.933-2.871 2.636-4.894-.296-2.023-2.014-3.657-3.882-3.686zm-71.94 36.193a40.146 31.886 0 00-21.037 4.284A40.146 31.886 0 009.223 60.34c-2.147 3.428-3.747 7.278-5.051 11.678-.378 1.38.711 2.988 2.025 2.986H55.34l.111.05H84.48l1.48-.646.139.15c.693-.568 1.01-1.634.754-2.54a32.98 32.98 0 00-2.237-5.864A40.146 31.886 0 0065.71 46.068a40.146 31.886 0 00-19.13-4.254zm30.688 5.934v1.145c6.688 5.599 11.683 12.997 14.048 21.664v.033c.8 2.995-.054 5.704-1.865 7.42l-.135.08 1.04 29.176h25.57l.101.11h2.116c1.11 0 2-1.007 2-2.226V47.748H77.266zM10.805 81.041c-2.306 0-4.23 2.654-4.23 5.814 0 3.161 1.924 5.782 4.23 5.782h48.324l22.037.193c2.306.02 4.922-3.103 4.922-6.162 0-3.06-1.925-5.64-4.23-5.627l-13.364.072-.066-.072H10.805zm6.806 14.645c-5.75 0-10.344 3.846-10.748 8.544l-.086.73h6.086l.116-.603c.305-2.132 2.257-3.685 4.634-3.685 2.377 0 4.386 1.555 4.694 3.685l.142.604h9.012l.059-.604c.305-2.132 2.284-3.685 4.662-3.685 2.377 0 4.387 1.555 4.695 3.685l.144.604h9.011l.085-.604c.306-2.132 2.287-3.685 4.664-3.685s4.386 1.555 4.694 3.685l.117.604H68.63l.058-.604c.305-2.132 2.288-3.685 4.666-3.685 2.376 0 4.412 1.555 4.72 3.685l.115.604h6.057l-.06-.73c-.406-4.702-5.08-8.545-10.832-8.545-4.056 0-7.406 1.965-9.245 4.734-1.846-2.772-5.269-4.734-9.328-4.734-4.067 0-7.409 2.013-9.242 4.794-1.84-2.785-5.257-4.794-9.328-4.794-4.055 0-7.43 1.966-9.27 4.734-1.845-2.772-5.27-4.733-9.328-4.734h-.002zm-9.24 12.355c-1.189 0-2.114.383-2.984 1.115-.436.367-.886.837-1.16 1.715-.275.878-.018 2.228.58 2.951l3.998 4.862c.108.131.305.555.783 1.209.478.654 1.622 1.523 2.81 1.523h66.256c1.189 0 2.362-.87 2.84-1.523.478-.654.641-1.078.75-1.21l4.002-4.86c.596-.724.825-2.074.55-2.952-.274-.878-.726-1.348-1.161-1.715-.87-.733-1.765-1.115-2.953-1.115H8.372z" />
    </Svg>
  )
}

export default SvgComponentFood