export const StudyGlobalHeroSVG: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 600"
      className="w-full h-full max-w-full"
    >
      {/* <!-- Background with subtle gradient --> */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>

        {/* <!-- Subtle glow effect --> */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* <!-- Background rectangle --> */}
      <rect width="100%" height="100%" fill="url(#bgGradient)" />

      {/* <!-- Central globe --> */}
      <circle
        cx="450"
        cy="300"
        r="160"
        fill="#f0f9ff"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeDasharray="2,2"
      />

      {/* <!-- Equator line --> */}
      <ellipse
        cx="450"
        cy="300"
        rx="160"
        ry="160"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* <!-- Meridian lines --> */}
      <path
        d="M450,140 A160,60 0 0,1 450,460 A160,60 0 0,1 450,140"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="1"
        opacity="0.4"
        transform="rotate(30 450 300)"
      />
      <path
        d="M450,140 A160,60 0 0,1 450,460 A160,60 0 0,1 450,140"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="1"
        opacity="0.4"
        transform="rotate(-30 450 300)"
      />

      {/* <!-- Simplified continents --> */}
      <path
        d="M380,220 Q420,200 450,230 Q480,260 520,240"
        fill="none"
        stroke="#10b981"
        strokeWidth="6"
        opacity="0.7"
      />
      <path
        d="M410,300 Q440,280 470,310"
        fill="none"
        stroke="#ef4444"
        strokeWidth="6"
        opacity="0.7"
      />
      <path
        d="M370,350 Q410,330 450,350 Q490,370 530,350"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="6"
        opacity="0.7"
      />

      {/* <!-- Platform name --> */}
      <text
        x="450"
        y="302"
        textAnchor="middle"
        fill="#1e40af"
        fontWeight="bold"
        fontSize="24"
      >
        StudyGlobal
      </text>
      <text x="450" y="330" textAnchor="middle" fill="#1e40af" fontSize="14">
        International Education Platform
      </text>

      {/* <!-- Four main service categories with icons --> */}
      {/* <!-- Banking --> */}
      <g transform="translate(230, 180)">
        <circle
          cx="0"
          cy="0"
          r="60"
          fill="rgba(16,185,129,0.1)"
          stroke="#10b981"
          strokeWidth="2"
        />

        {/* <!-- Bank icon --> */}
        <rect
          x="-20"
          y="-5"
          width="40"
          height="25"
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
        />
        <path
          d="M-25,-5 L0,-20 L25,-5"
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
        />
        <line
          x1="-15"
          y1="-5"
          x2="-15"
          y2="20"
          stroke="#10b981"
          strokeWidth="2"
        />
        <line x1="0" y1="-5" x2="0" y2="20" stroke="#10b981" strokeWidth="2" />
        <line
          x1="15"
          y1="-5"
          x2="15"
          y2="20"
          stroke="#10b981"
          strokeWidth="2"
        />
        <rect x="-25" y="20" width="50" height="5" fill="#10b981" />

        <text
          x="0"
          y="40"
          textAnchor="middle"
          fill="#10b981"
          fontWeight="bold"
          fontSize="14"
        >
          Banking
        </text>

        {/* <!-- Connection to center --> */}
        <line
          x1="0"
          y1="0"
          x2="220"
          y2="120"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeDasharray="4,4"
          opacity="0.6"
        />
      </g>

      {/* <!-- Visa --> */}
      <g transform="translate(670, 180)">
        <circle
          cx="0"
          cy="0"
          r="60"
          fill="rgba(239,68,68,0.1)"
          stroke="#ef4444"
          strokeWidth="2"
        />

        {/* <!-- Passport icon --> */}
        <rect
          x="-20"
          y="-25"
          width="40"
          height="50"
          rx="3"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
        />
        <circle
          cx="0"
          cy="-10"
          r="8"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
        />
        <path d="M-13,10 L13,10" stroke="#ef4444" strokeWidth="2" />
        <path d="M-13,17 L7,17" stroke="#ef4444" strokeWidth="2" />

        <text
          x="0"
          y="40"
          textAnchor="middle"
          fill="#ef4444"
          fontWeight="bold"
          fontSize="14"
        >
          Visa & Immigration
        </text>

        {/* <!-- Connection to center --> */}
        <line
          x1="0"
          y1="0"
          x2="-220"
          y2="120"
          stroke="#ef4444"
          strokeWidth="1.5"
          strokeDasharray="4,4"
          opacity="0.6"
        />
      </g>

      {/* <!-- Housing --> */}
      <g transform="translate(230, 420)">
        <circle
          cx="0"
          cy="0"
          r="60"
          fill="rgba(245,158,11,0.1)"
          stroke="#f59e0b"
          strokeWidth="2"
        />

        {/* <!-- House icon --> */}
        <path
          d="M-25,10 L-25,-5 L0,-25 L25,-5 L25,10 Z"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
        />
        <rect
          x="-10"
          y="-5"
          width="20"
          height="15"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
        />

        <text
          x="0"
          y="40"
          textAnchor="middle"
          fill="#f59e0b"
          fontWeight="bold"
          fontSize="14"
        >
          Housing
        </text>

        {/* <!-- Connection to center --> */}
        <line
          x1="0"
          y1="0"
          x2="220"
          y2="-120"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeDasharray="4,4"
          opacity="0.6"
        />
      </g>

      {/* <!-- Insurance --> */}
      <g transform="translate(670, 420)">
        <circle
          cx="0"
          cy="0"
          r="60"
          fill="rgba(99,102,241,0.1)"
          stroke="#6366f1"
          strokeWidth="2"
        />

        {/* <!-- Shield icon --> */}
        <path
          d="M0,-25 C-20,-20 -20,0 -20,15 C-20,25 -10,25 0,15 C10,25 20,25 20,15 C20,0 20,-20 0,-25 Z"
          fill="none"
          stroke="#6366f1"
          strokeWidth="2"
        />

        <text
          x="0"
          y="40"
          textAnchor="middle"
          fill="#6366f1"
          fontWeight="bold"
          fontSize="14"
        >
          Insurance
        </text>

        {/* <!-- Connection to center --> */}
        <line
          x1="0"
          y1="0"
          x2="-220"
          y2="-120"
          stroke="#6366f1"
          strokeWidth="1.5"
          strokeDasharray="4,4"
          opacity="0.6"
        />
      </g>

      {/* <!-- Student figures around the globe --> */}
      {/* <!-- Student 1 --> */}
      <g transform="translate(380, 150)">
        <circle cx="0" cy="-8" r="8" fill="#475569" />
        <path
          d="M0,0 L0,15 M-10,5 L10,5 M-5,30 L0,15 L5,30"
          stroke="#475569"
          strokeWidth="2"
        />
      </g>

      {/* <!-- Student 2 --> */}
      <g transform="translate(530, 170)">
        <circle cx="0" cy="-8" r="8" fill="#475569" />
        <path
          d="M0,0 L0,15 M-10,5 L10,5 M-5,30 L0,15 L5,30"
          stroke="#475569"
          strokeWidth="2"
        />
      </g>

      {/* <!-- Student 3 --> */}
      <g transform="translate(370, 420)">
        <circle cx="0" cy="-8" r="8" fill="#475569" />
        <path
          d="M0,0 L0,15 M-10,5 L10,5 M-5,30 L0,15 L5,30"
          stroke="#475569"
          strokeWidth="2"
        />
      </g>

      <g transform="translate(530, 450)">
        <circle cx="0" cy="-8" r="8" fill="#475569" />
        <path
          d="M0,0 L0,15 M-10,5 L10,5 M-5,30 L0,15 L5,30"
          stroke="#475569"
          strokeWidth="2"
        />
      </g>

      <text
        x="450"
        y="550"
        textAnchor="middle"
        fontSize="18"
        fill="#334155"
        fontWeight="bold"
      >
        Your Global Education Made Simple
      </text>
    </svg>
  );
};
