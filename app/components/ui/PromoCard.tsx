// src/components/ui/PromoCard.tsx
import Link from "next/link";
import { ReactNode } from "react";

interface CtaButton {
  text: string;
  link: string;
}

interface PromoCardProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: CtaButton;
  secondaryCta?: CtaButton;
  theme?: "default" | "winter" | "spring" | "summer" | "fall";
  icon?: ReactNode;
}

export const PromoCard: React.FC<PromoCardProps> = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  theme = "default",
  icon,
}) => {
  const getThemeStyles = () => {
    switch (theme) {
      case "winter":
        return {
          titleColor: "text-green-800",
          subtitleColor: "text-red-600",
          decorations: (
            <>
              <div className="absolute top-0 right-0">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30,10 Q40,5 50,15 T70,15 Q85,5 90,15 T110,15"
                    stroke="#34532B"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="95" cy="15" r="8" fill="#C13121" />
                  <circle cx="85" cy="25" r="6" fill="#C13121" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10,80 Q20,70 30,80 T50,80 Q65,70 70,80 T90,80"
                    stroke="#34532B"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="15" cy="75" r="6" fill="#C13121" />
                  <circle cx="25" cy="85" r="5" fill="#C13121" />
                </svg>
              </div>
            </>
          ),
          bgColor: "bg-white",
        };
      default:
        return {
          titleColor: "text-gray-900",
          subtitleColor: "text-blue-600",
          decorations: null,
          bgColor: "bg-white",
        };
    }
  };

  const themeStyles = getThemeStyles();

  return (
    <div
      className={`${themeStyles.bgColor} rounded-xl shadow-md overflow-hidden relative`}
    >
      {themeStyles.decorations}

      <div className="md:flex p-6 relative z-10">
        <div className="md:w-3/4 pr-8">
          <div className="flex items-center mb-4">
            {icon && <div className="mr-3">{icon}</div>}
            <h2 className={`text-4xl font-bold ${themeStyles.titleColor}`}>
              {title}
            </h2>
          </div>
          <h3
            className={`text-2xl font-semibold mb-3 ${themeStyles.subtitleColor}`}
          >
            {subtitle}
          </h3>
          <p className="text-gray-600 mb-6">{description}</p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={primaryCta.link}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {primaryCta.text}
            </Link>

            {secondaryCta && (
              <Link
                href={secondaryCta.link}
                // src/components/ui/PromoCard.tsx (continued)
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>

        {theme === "winter" && (
          <div className="md:w-1/4 mt-6 md:mt-0 flex justify-center items-center">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-red-500 h-20 w-20 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 22h14M5 2h14M17 22v-4.172a2 2 0 00-.586-1.414L12 12l-4.414 4.414A2 2 0 007 17.828V22"
                  />
                </svg>
              </div>
              <div className="bg-red-500 h-20 w-20 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="bg-red-500 h-20 w-20 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
