// src/components/sections/Hero.tsx
import Link from "next/link";

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Your global education</span>
                <span className="block text-blue-600">made simple</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Everything international students need to succeed abroad - from
                banking and housing to visas and local resources. All in one
                place.
              </p>
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/getting-started"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="/services"
                    className="w-full flex items-center justify-center px-8 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-blue-50 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 600"
            className="w-full h-full max-w-lg"
          >
            {/* World Map Background */}
            <path
              d="M400,100 C550,100 670,220 670,370 C670,520 550,640 400,640 C250,640 130,520 130,370 C130,220 250,100 400,100 Z"
              fill="#e6f2ff"
              stroke="#a3c9ff"
              strokeWidth="2"
            />

            {/* Continental Outlines */}
            <path
              d="M280,200 C270,220 265,250 270,270 C275,290 290,300 300,310 C310,320 330,330 340,320 C350,310 355,290 350,270 C345,250 330,230 320,220 C310,210 290,190 280,200 Z"
              fill="#b3d9ff"
            />
            <path
              d="M370,250 C360,260 355,280 360,300 C365,320 380,330 400,335 C420,340 440,335 450,325 C460,315 465,295 460,275 C455,255 440,240 420,235 C400,230 380,240 370,250 Z"
              fill="#b3d9ff"
            />
            <path
              d="M480,220 C470,240 465,270 480,290 C495,310 520,315 540,305 C560,295 570,275 565,255 C560,235 540,220 520,215 C500,210 490,200 480,220 Z"
              fill="#b3d9ff"
            />

            {/* Students with Books/Devices */}
            {/* Student 1 */}
            <circle cx="250" cy="400" r="30" fill="#4286f4" />
            <circle cx="250" cy="350" r="20" fill="#ffd699" />
            <rect
              x="240"
              y="380"
              width="20"
              height="40"
              fill="#4286f4"
              rx="5"
            />

            {/* Book/Device for Student 1 */}
            <rect
              x="280"
              y="390"
              width="30"
              height="20"
              fill="#ff6b6b"
              rx="2"
            />
            <rect x="280" y="390" width="30" height="2" fill="#ffffff" />
            <rect x="280" y="395" width="30" height="2" fill="#ffffff" />
            <rect x="280" y="400" width="30" height="2" fill="#ffffff" />

            {/* Student 2 */}
            <circle cx="400" cy="420" r="30" fill="#ff9f69" />
            <circle cx="400" cy="370" r="20" fill="#ffd699" />
            <rect
              x="390"
              y="400"
              width="20"
              height="40"
              fill="#ff9f69"
              rx="5"
            />

            {/* Laptop for Student 2 */}
            <rect
              x="370"
              y="390"
              width="60"
              height="40"
              fill="#4d4d4d"
              rx="5"
            />
            <rect
              x="375"
              y="395"
              width="50"
              height="30"
              fill="#f2f2f2"
              rx="2"
            />
            <rect x="385" y="430" width="30" height="5" fill="#4d4d4d" rx="2" />

            {/* Student 3 */}
            <circle cx="550" cy="400" r="30" fill="#7ac142" />
            <circle cx="550" cy="350" r="20" fill="#ffd699" />
            <rect
              x="540"
              y="380"
              width="20"
              height="40"
              fill="#7ac142"
              rx="5"
            />

            {/* Graduation Cap for Student 3 */}
            <rect x="525" y="340" width="50" height="5" fill="#333333" />
            <polygon points="550,330 530,340 570,340" fill="#333333" />
            <circle cx="550" cy="330" r="5" fill="#333333" />

            {/* Flying Paper Airplanes */}
            <polygon
              points="200,200 220,190 210,210"
              fill="#ffffff"
              stroke="#cccccc"
            />
            <polygon
              points="600,220 620,210 610,230"
              fill="#ffffff"
              stroke="#cccccc"
            />
            <polygon
              points="350,180 370,170 360,190"
              fill="#ffffff"
              stroke="#cccccc"
            />
            <polygon
              points="500,190 520,180 510,200"
              fill="#ffffff"
              stroke="#cccccc"
            />

            {/* Connection Lines Between Students */}
            <line
              x1="280"
              y1="370"
              x2="380"
              y2="370"
              stroke="#4286f4"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <line
              x1="420"
              y1="370"
              x2="530"
              y2="370"
              stroke="#4286f4"
              strokeWidth="2"
              strokeDasharray="5,5"
            />

            {/* Globe */}
            <circle
              cx="400"
              cy="200"
              r="50"
              fill="#79c3ff"
              stroke="#4286f4"
              strokeWidth="2"
            />
            <ellipse
              cx="400"
              cy="200"
              rx="50"
              ry="15"
              fill="none"
              stroke="#4286f4"
              strokeWidth="1"
            />
            <line
              x1="350"
              y1="200"
              x2="450"
              y2="200"
              stroke="#4286f4"
              strokeWidth="1"
            />
            <line
              x1="400"
              y1="150"
              x2="400"
              y2="250"
              stroke="#4286f4"
              strokeWidth="1"
            />
            <path
              d="M360,175 Q400,150 440,175"
              fill="none"
              stroke="#4286f4"
              strokeWidth="1"
            />
            <path
              d="M360,225 Q400,250 440,225"
              fill="none"
              stroke="#4286f4"
              strokeWidth="1"
            />

            {/* Decorative Elements */}
            <circle cx="300" cy="480" r="10" fill="#ff6b6b" />
            <circle cx="500" cy="460" r="8" fill="#7ac142" />
            <circle cx="350" cy="500" r="12" fill="#ffc758" />
            <circle cx="450" cy="490" r="7" fill="#4286f4" />
          </svg>
        </div>
      </div>
    </div>
  );
};
