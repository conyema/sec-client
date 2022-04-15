const CloseSvg = () => {
  return (
    <svg width="1.5em" height="1.5em" viewBox="0 0 3.145 3.145" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="da" cx="87.879" cy="147.09" r="127.19"
          gradientTransform="matrix(.01075 .00013 -.00001 .00184 1.174 1.45)" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentcolor" stopOpacity="0" offset="0"></stop>
          <stop stopColor="currentcolor" offset="1"></stop>
        </radialGradient>
        <radialGradient id="dc" cx="87.879" cy="147.09" r="127.19"
          gradientTransform="matrix(.00013 -.01075 .00184 .00001 1.837 3.686)" gradientUnits="userSpaceOnUse"
          xlinkHref="#da"></radialGradient>
        <radialGradient id="db" cx="87.879" cy="147.09" r="127.19"
          gradientTransform="matrix(.01075 .00013 -.00001 .00184 1.174 2.463)" gradientUnits="userSpaceOnUse"
          xlinkHref="#da"></radialGradient>
      </defs>
      <g fill="none" strokeLinecap="round" strokeWidth=".518" paintOrder="stroke markers fill">
        <path d="M.263 2.743h3.708" stroke="url(#db)" transform="rotate(45 3.257 1.5)"></path>
        <path d="M2.117 4.597V.889" stroke="url(#dc)" transform="rotate(45 3.257 1.5)"></path>
      </g>
    </svg>
  )
}

export default CloseSvg