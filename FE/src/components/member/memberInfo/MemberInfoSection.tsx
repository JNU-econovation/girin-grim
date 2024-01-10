export default function MemberInfoSection() {
  return (
    <section className="flex flex-col relative items-center justify-center">
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <svg
          width="350"
          height="593"
          viewBox="0 0 350 593"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M253.074 0.078125L214.102 0.0781231L152.931 74.9226L191.982 74.9226L253.074 0.078125Z"
            fill="#EE8E0F"
          />
          <g filter="url(#filter0_d_0_1)">
            <rect x="10" y="53" width="330" height="520" fill="white" />
            <rect x="10.5" y="53.5" width="329" height="519" stroke="#D9D9D9" />
          </g>
          <mask
            id="mask0_0_1"
            // style="mask-type:alpha"
            maskUnits="userSpaceOnUse"
            x="103"
            y="67"
            width="144"
            height="8"
          >
            <rect x="103" y="67" width="144" height="8" rx="4" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_0_1)">
            <path
              d="M253.074 0.078125L214.102 0.0781231L152.931 74.9226L191.982 74.9226L253.074 0.078125Z"
              fill="#EE8E0F"
            />
          </g>
          <path
            d="M92 0.078125L130.972 0.0781231L192.144 74.9226L153.092 74.9226L92 0.078125Z"
            fill="#FF9A15"
          />
          <path
            d="M11 563C11 557.477 15.4772 553 21 553H329C334.523 553 339 557.477 339 563V573H11V563Z"
            fill="#FF9A15"
          />
          <defs>
            <filter
              id="filter0_d_0_1"
              x="0"
              y="53"
              width="350"
              height="540"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="relative z-50">
        <h1 className="text-color121 text-[1.875rem] font-bold mt-11 z-50 relative">
          마이페이지
        </h1>
        <hr className="w-full" />
      </div>
    </section>
  );
}
