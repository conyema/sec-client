const MenuSvg = () => {

  return (
    <svg width="2em" height="2em" viewBox="0 0 4.233 3.464" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="c" cx="87.879" cy="147.09" r="127.19"
          gradientTransform="matrix(.01075 .00013 -.00001 .00184 83.549 106.97)" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentcolor" stopOpacity="0" offset="0"></stop>
          <stop stopColor="currentcolor" offset="1"></stop>
        </radialGradient>
        <radialGradient id="b" cx="87.879" cy="84.429" r="98.75"
          gradientTransform="matrix(.00888 .00026 -.00003 .0021 83.714 105.57)" gradientUnits="userSpaceOnUse"
          xlinkHref="#a"></radialGradient>
        <radialGradient id="d" cx="87.879" cy="209.74" r="98.75"
          gradientTransform="matrix(.01114 .00018 -.00002 .00224 83.516 108.23)" gradientUnits="userSpaceOnUse"
          xlinkHref="#a"></radialGradient>
        <linearGradient id="a">
          <stop stopColor="currentcolor" stopOpacity="0" offset="0"></stop>
          <stop stopColor="currentcolor" offset="1"></stop>
        </linearGradient>
      </defs>
      <g fill="none" strokeLinecap="round" strokeWidth=".518" paintOrder="stroke markers fill">
        <path d="M83.101 105.78h2.78" stroke="url(#b)" transform="translate(-82.375 -105.52)"></path>
        <path d="M82.638 107.25h3.708" stroke="url(#c)" transform="translate(-82.375 -105.52)"></path>
        <path d="M83.101 108.72h2.78" stroke="url(#d)" transform="translate(-82.375 -105.52)"></path>
      </g>
    </svg>
  )
}

export default MenuSvg