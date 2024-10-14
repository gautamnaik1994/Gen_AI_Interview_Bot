import * as React from 'react';

// function IconRobot(props: React.SVGProps<SVGSVGElement>) {
//   return (
{
  /* <svg
  width="776"
  height="782"
  viewBox="0 0 776 782"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx="271" cy="479" r="52" fill="#00AEFF" />
  <circle cx="504" cy="479" r="52" fill="#00AEFF" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M440 52C440 75.8684 423.919 95.9808 402 102.094V148.45C453.354 151.774 493.257 173.135 494.944 199.276C594.143 226.559 673.977 290.779 712.307 373H715C748.689 373 776 400.311 776 434V532C776 565.689 748.689 593 715 593H712.77C661.716 703.683 535.551 782 388 782C240.449 782 114.284 703.683 63.2297 593H61C27.3107 593 0 565.689 0 532V434C0 400.311 27.3106 373 61 373H63.6935C102.023 290.779 181.857 226.559 281.056 199.276C282.732 173.305 322.129 152.052 373 148.517V101.804C351.594 95.3657 336 75.5039 336 52C336 23.2812 359.281 0 388 0C416.719 0 440 23.2812 440 52ZM266 363C200.83 363 148 415.83 148 481C148 546.17 200.83 599 266 599H509C574.17 599 627 546.17 627 481C627 415.83 574.17 363 509 363H266Z"
    fill="#C6C6C6"
  />
</svg>; */
}

//   );
// }

function IconRobotAnimated(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 776 782"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      width="1em"
      className="icon icon-robot mt-1"
      {...props}
    >
      <circle cx="271" cy="479" r="52" fill="#00AEFF">
        <animate
          attributeName="r"
          values="52;52;52;0;52;52;0;52;52;52;52;52"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="504" cy="479" r="52" fill="#00AEFF">
        <animate
          attributeName="r"
          values="52;52;52;0;52;52;0;52;52;52;52;52"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </circle>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M440 52C440 75.8684 423.919 95.9808 402 102.094V148.45C453.354 151.774 493.257 173.135 494.944 199.276C594.143 226.559 673.977 290.779 712.307 373H715C748.689 373 776 400.311 776 434V532C776 565.689 748.689 593 715 593H712.77C661.716 703.683 535.551 782 388 782C240.449 782 114.284 703.683 63.2297 593H61C27.3107 593 0 565.689 0 532V434C0 400.311 27.3107 373 61 373H63.6935C102.023 290.779 181.857 226.559 281.056 199.276C282.732 173.305 322.129 152.052 373 148.517V101.804C351.594 95.3657 336 75.5039 336 52C336 23.2812 359.281 0 388 0C416.719 0 440 23.2812 440 52ZM266 363C200.83 363 148 415.83 148 481C148 546.17 200.83 599 266 599H509C574.17 599 627 546.17 627 481C627 415.83 574.17 363 509 363H266Z"
        fill="#C6C6C6"
      />
    </svg>
  );
}

function IconRobot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 776 782"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      width="1em"
      className="icon icon-robot mt-1"
      {...props}
    >
      <circle cx="271" cy="479" r="52" fill="#00AEFF"></circle>
      <circle cx="504" cy="479" r="52" fill="#00AEFF"></circle>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M440 52C440 75.8684 423.919 95.9808 402 102.094V148.45C453.354 151.774 493.257 173.135 494.944 199.276C594.143 226.559 673.977 290.779 712.307 373H715C748.689 373 776 400.311 776 434V532C776 565.689 748.689 593 715 593H712.77C661.716 703.683 535.551 782 388 782C240.449 782 114.284 703.683 63.2297 593H61C27.3107 593 0 565.689 0 532V434C0 400.311 27.3107 373 61 373H63.6935C102.023 290.779 181.857 226.559 281.056 199.276C282.732 173.305 322.129 152.052 373 148.517V101.804C351.594 95.3657 336 75.5039 336 52C336 23.2812 359.281 0 388 0C416.719 0 440 23.2812 440 52ZM266 363C200.83 363 148 415.83 148 481C148 546.17 200.83 599 266 599H509C574.17 599 627 546.17 627 481C627 415.83 574.17 363 509 363H266Z"
        fill="#C6C6C6"
      />
    </svg>
  );
}

function IconUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 448 512"
      fill="currentColor"
      height="1em"
      width="1em"
      className="icon icon-user mt-1"
      {...props}
    >
      <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3h-91.4z" />
    </svg>
  );
}

function IconSendFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M15.964.686a.5.5 0 00-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 00-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 00.886-.083l6-15zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 00-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178z" />
    </svg>
  );
}

function IconCircleCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      className="icon icon-check"
      {...props}
    >
      <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256zm113-303L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
    </svg>
  );
}

function IconCloseCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      className="icon icon-close"
      {...props}
    >
      <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z" />
    </svg>
  );
}

function IconHelpCircleOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M256 80a176 176 0 10176 176A176 176 0 00256 80z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={28}
        d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296"
      />
      <path d="M270 348 A20 20 0 0 1 250 368 A20 20 0 0 1 230 348 A20 20 0 0 1 270 348 z" />
    </svg>
  );
}

function IconExternalLink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V8.5a.5.5 0 00-1 0V12H3V3h3.5a.5.5 0 000-1H3zm9.854.146a.5.5 0 01.146.351V5.5a.5.5 0 01-1 0V3.707L6.854 8.854a.5.5 0 11-.708-.708L11.293 3H9.5a.5.5 0 010-1h3a.499.499 0 01.354.146z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const MemoizedIconRobot = React.memo(IconRobot);
const MemoizedIconUser = React.memo(IconUser);
const MemoizedIconSendFill = React.memo(IconSendFill);
const MemoizedIconCircleCheck = React.memo(IconCircleCheck);
const MemoizedIconCloseCircle = React.memo(IconCloseCircle);
const MemoizedIconHelpCircleOutline = React.memo(IconHelpCircleOutline);
const MemoizedIconExternalLink = React.memo(IconExternalLink);
const MemoizedIconRobotAnimated = React.memo(IconRobotAnimated);

export {
  MemoizedIconRobot as IconRobot,
  MemoizedIconUser as IconUser,
  MemoizedIconSendFill as IconSendFill,
  MemoizedIconCircleCheck as IconCircleCheck,
  MemoizedIconCloseCircle as IconCloseCircle,
  MemoizedIconHelpCircleOutline as IconHelpCircleOutline,
  MemoizedIconExternalLink as IconExternalLink,
  MemoizedIconRobotAnimated as IconRobotAnimated,
};
