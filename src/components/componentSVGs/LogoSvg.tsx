type LogoSVGProps = {
  width: number | string;
  height: number | string;
  fill: string;
};

function SvgComponent(props: LogoSVGProps) {
  const { width, height, fill } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 71"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="a"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width="currentWidth"
        height="currentHeight"
      >
        <path d="M70 0H0v71h70V0z" fill="white" />
      </mask>
      <g mask="url(#a)" fill={fill}>
        <path d="M47.492 67.693a34.992 34.992 0 0017.942-15.458 35.033 35.033 0 003.994-23.355A35.032 35.032 0 0057.644 8.33 34.974 34.974 0 0035.479.002a34.963 34.963 0 00-22.386 7.711A35.012 35.012 0 00.744 27.928a35.04 35.04 0 003.347 23.457 34.987 34.987 0 0017.506 15.948l1.768-4.269A30.366 30.366 0 018.168 49.22a30.396 30.396 0 017.813-37.904 30.323 30.323 0 0119.43-6.692 30.357 30.357 0 0129.465 25.064 30.385 30.385 0 01-19.04 33.691l1.649 4.315h.007z" />
        <path d="M60.243 24.991l-.04-1.603-1.602-.01a27.466 27.466 0 00-7.896 1.11 27.477 27.477 0 00-7.11 3.238c-1.218-7.615-6.105-12.658-7.254-13.749l-1.16-1.104L34.041 14a27.4 27.4 0 00-4.796 6.372 27.633 27.633 0 00-2.696 7.103c-.023.105-.047.208-.067.314a27.404 27.404 0 00-7.205-3.3 27.662 27.662 0 00-7.896-1.111l-1.602.01-.04 1.603c-.05 1.922.116 11.865 8.13 18.696 5.333 4.543 11.33 5.38 14.431 5.476h.056l1.484-.053v9.755l-5.184 5.188a3.306 3.306 0 10-1.39 6.306 3.306 3.306 0 003.013-4.656l3.56-3.565v2.46a3.297 3.297 0 00-2.143 3.095 3.304 3.304 0 106.607 0 3.303 3.303 0 00-2.15-3.098v-2.46l3.488 3.492a3.304 3.304 0 106.284 1.425 3.306 3.306 0 00-3.304-3.307c-.47 0-.912.096-1.315.274l-4.674-4.675-.48-.483V49.11l1.474.053h.056c3.099-.096 9.098-.933 14.427-5.476 8.012-6.828 8.18-16.771 8.134-18.696zm-40.23 16.176c-5.55-4.728-6.709-11.229-6.927-14.433a24.154 24.154 0 0111.355 3.674c.637.396 1.202.83 1.704 1.276.077 2.407.641 4.325.975 5.45l.08.27c1.027 3.535 2.748 6.33 4.45 8.416-2.812-.195-7.473-1.101-11.636-4.653zm17.349-6.325l-.133.245a23.44 23.44 0 00-2.24 5.786 23.303 23.303 0 00-2.236-5.786l-.136-.252c-.558-1.025-1.506-2.774-3.148-4.527.04-.668.136-1.368.3-2.096a24.316 24.316 0 015.439-10.634c1.866 2.143 5.041 6.643 5.335 12.698-1.662 1.765-2.62 3.53-3.181 4.566zm12.606 6.325c-4.06 3.462-8.596 4.411-11.424 4.636 2.101-2.575 4.784-6.944 5.257-12.852.032-.437.056-.87.066-1.297.495-.436 1.05-.856 1.671-1.246a24.152 24.152 0 0111.358-3.674c-.22 3.204-1.384 9.708-6.928 14.433z" />
      </g>
    </svg>
  );
}

export default SvgComponent;
