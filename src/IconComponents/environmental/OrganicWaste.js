import React from "react";

const OrganicWaste = props => (
  <svg viewBox="0 0 32 32"   {...props}>
    <path fill="#AAA" d="M31 10s0 17-3 17H13c-3 0-3-17-3-17h21z" />
    <path fill="#BFBFBF" d="M31 5v5H10V5s0-4 4-4h13s4 0 4 4" />
    <path fill="#AAA" d="M14 1v5s0 2 2 2h9s2 0 2-2V1H14z" />
    <path
      fill="#4D5152"
      d="M26.996 2c.506.006 3.004.18 3.004 3v4H11V5.006C11.006 4.504 11.177 2 14 2h12.996M27 1H14c-4 0-4 4-4 4v5h21V5c0-4-4-4-4-4"
    />
    <path
      fill="#4D5152"
      d="M26 2v4c0 .805-.55.988-1 1h-9c-.805 0-.988-.55-1-1V2h11m1-1H14v5s0 2 2 2h9s2 0 2-2V1zm3 9c0 7.826-.957 15.251-2.056 16H13.056c-1.117-.756-2.055-8.035-2.056-16h19m1-1H10v1s0 17 3 17h15c3 0 3-17 3-17V9z"
    />
    <path
      fill="#E88C77"
      d="M13.5 29.5c-1.625 0-2.523-.394-3-.744-.477.351-1.375.744-3 .744-1.326 0-2.661-.848-3.86-2.45l-.91-1.216 1.454.438c.505.151.947.228 1.316.228.936 0 1.488-.43 2.073-.885.72-.551 1.46-1.115 2.927-1.115 1.279 0 2.063.572 2.754 1.076.663.474 1.294.924 2.246.924.369 0 .811-.077 1.316-.229l1.453-.438-.909 1.217c-1.199 1.602-2.534 2.45-3.86 2.45m-3-11c-1.627 0-2.676-.898-3.602-1.691C6.107 16.118 5.4 15.5 4.5 15.5c-.192 0-.395.023-.617.069-.968.179-1.873.742-2.464 1.181l-.964.72.17-1.191C1.067 13.197 2.798 11.5 5.5 11.5c2.694 0 4.287 1.608 5 2.573.713-.965 2.306-2.573 5-2.573 2.701 0 4.433 1.697 4.875 4.778l.171 1.191-.965-.72c-.591-.439-1.495-1.002-2.452-1.178a3.105 3.105 0 0 0-.629-.071c-.9 0-1.607.618-2.356 1.272-.968.83-2.017 1.728-3.644 1.728"
    />
    <path
      fill="#FFE3A6"
      d="M5.52 26.5a.5.5 0 0 1-.416-.779C5.741 24.771 6.5 23.181 6.5 21c0-2.106-1.061-3.655-1.951-4.584a.501.501 0 0 1 .492-.828c.638.173 1.183.62 1.829 1.187.928.81 1.979 1.726 3.63 1.726s2.702-.916 3.629-1.725c.613-.537 1.171-.997 1.821-1.186a.503.503 0 0 1 .568.221.5.5 0 0 1-.066.605c-.891.929-1.952 2.478-1.952 4.584 0 2.181.759 3.771 1.395 4.722a.498.498 0 0 1-.415.779h-.006c-.956-.012-1.602-.481-2.228-.936-.744-.529-1.497-1.065-2.746-1.065-1.458 0-2.23.587-2.91 1.104-.558.439-1.123.884-2.063.896H5.52z"
    />
    <path
      fill="#4D5152"
      d="M15.5 11c-2.11 0-3.59.91-4.54 1.81C10.75 10.48 9.44 7 5.5 7c-.28 0-.5.22-.5.5s.22.5.5.5c3.45 0 4.25 3.18 4.44 4.71A6.49 6.49 0 0 0 5.5 11C2.1 11 .12 13.41.01 17.65c-.01.13-.01.25-.01.38 0 .16 0 .33.02.51.23-.21.58-.521.99-.85.73-.59 1.66-1.22 2.54-1.52.73.6 2.45 2.3 2.45 4.83 0 2.47-1.07 4.16-1.58 4.83-.43-.12-.87-.29-1.29-.48-.58-.26-1.12-.55-1.53-.79.23.53.49 1.051.78 1.54C3.68 28.32 5.45 30 7.5 30c1.46 0 2.4-.3 3-.65.6.351 1.54.65 3 .65 2.05 0 3.82-1.68 5.12-3.9.29-.489.55-1.01.78-1.54-.44.261-.971.54-1.53.78-.43.19-.87.37-1.29.49C16.07 25.16 15 23.47 15 21c0-2.53 1.74-4.24 2.46-4.83.9.29 1.83.94 2.53 1.51.46.37.81.7.99.87.01-.17.02-.34.02-.5v-.02c0-4.47-2-7.03-5.5-7.03m1.46 15.75C15.95 28.1 14.76 29 13.5 29c-2.16 0-2.85-.73-3-.93-.15.2-.84.93-3 .93-1.26 0-2.45-.9-3.46-2.25.5.15 1 .25 1.46.25 1.09 0 1.75-.5 2.38-.99C8.56 25.49 9.2 25 10.5 25c1.1 0 1.76.47 2.46.98.7.5 1.43 1.02 2.54 1.02.46 0 .96-.1 1.46-.25M14 21c0 2.36.85 4.06 1.48 5-.78-.01-1.32-.39-1.94-.84-.76-.54-1.62-1.16-3.04-1.16-1.64 0-2.52.68-3.23 1.22-.56.44-1.01.77-1.75.78.63-.94 1.48-2.64 1.48-5 0-2.28-1.16-3.96-2.09-4.93.55.149 1.06.58 1.63 1.08.94.82 2.12 1.85 3.96 1.85s3.02-1.03 3.96-1.85c.57-.5 1.08-.92 1.63-1.08-.93.97-2.09 2.65-2.09 4.93m3.22-5.92a3.53 3.53 0 0 0-.72-.08c-1.09 0-1.9.71-2.69 1.4-.91.78-1.85 1.6-3.31 1.6s-2.4-.82-3.31-1.6C6.4 15.71 5.59 15 4.5 15c-.24 0-.48.03-.72.08-1.03.19-1.99.77-2.66 1.27C1.46 13.98 2.66 12 5.5 12c3.5 0 5 3 5 3s1.5-3 5-3c2.84 0 4.04 1.98 4.38 4.35-.67-.5-1.63-1.08-2.66-1.27"
    />
  </svg>
);

export default OrganicWaste;
