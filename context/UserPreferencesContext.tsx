// context/UserPreferencesContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";

type Country = {
  code: string;
  name: string;
};

type University = {
  id: string;
  name: string;
  country: string;
  city: string;
};

interface UserPreferences {
  originCountry: Country | null;
  destinationCountry: Country | null;
  university: University | null;
  preferredCurrency: string;
  preferredLanguage: string;
  theme: "light" | "dark" | "system";
}

interface UserPreferencesContextType {
  preferences: UserPreferences;
  setOriginCountry: (country: Country | null) => void;
  setDestinationCountry: (country: Country | null) => void;
  setUniversity: (university: University | null) => void;
  setPreferredCurrency: (currency: string) => void;
  setPreferredLanguage: (language: string) => void;
  setTheme: (theme: "light" | "dark" | "system") => void;
  resetPreferences: () => void;
}

const defaultPreferences: UserPreferences = {
  originCountry: null,
  destinationCountry: null,
  university: null,
  preferredCurrency: "USD",
  preferredLanguage: "en",
  theme: "system",
};

const UserPreferencesContext = createContext<
  UserPreferencesContextType | undefined
>(undefined);

export const UserPreferencesProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [storedPreferences, setStoredPreferences] =
    useLocalStorage<UserPreferences>("userPreferences", defaultPreferences);

  const [preferences, setPreferences] =
    useState<UserPreferences>(storedPreferences);

  // Update stored preferences when state changes
  useEffect(() => {
    setStoredPreferences(preferences);
  }, [preferences, setStoredPreferences]);

  const setOriginCountry = (country: Country | null) => {
    setPreferences((prev) => ({ ...prev, originCountry: country }));
  };

  const setDestinationCountry = (country: Country | null) => {
    setPreferences((prev) => ({ ...prev, destinationCountry: country }));
  };

  const setUniversity = (university: University | null) => {
    setPreferences((prev) => ({ ...prev, university }));
  };

  const setPreferredCurrency = (currency: string) => {
    setPreferences((prev) => ({ ...prev, preferredCurrency: currency }));
  };

  const setPreferredLanguage = (language: string) => {
    setPreferences((prev) => ({ ...prev, preferredLanguage: language }));
  };

  const setTheme = (theme: "light" | "dark" | "system") => {
    setPreferences((prev) => ({ ...prev, theme }));
  };

  const resetPreferences = () => {
    setPreferences(defaultPreferences);
  };

  return (
    <UserPreferencesContext.Provider
      value={{
        preferences,
        setOriginCountry,
        setDestinationCountry,
        setUniversity,
        setPreferredCurrency,
        setPreferredLanguage,
        setTheme,
        resetPreferences,
      }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
};

// Hook to use the preferences context
export const useUserPreferences = (): UserPreferencesContextType => {
  const context = useContext(UserPreferencesContext);
  if (context === undefined) {
    throw new Error(
      "useUserPreferences must be used within a UserPreferencesProvider"
    );
  }
  return context;
};

// Example usage in a component:
//
// const ExampleComponent = () => {
//   const {
//     preferences,
//     setOriginCountry,
//     setDestinationCountry
//   } = useUserPreferences();
//
//   return (
//     <div>
//       <p>Origin Country: {preferences.originCountry?.name || 'Not set'}</p>
//       <p>Destination Country: {preferences.destinationCountry?.name || 'Not set'}</p>
//       <button onClick={() => setOriginCountry({ code: 'US', name: 'United States' })}>
//         Set Origin to USA
//       </button>
//     </div>
//   );
// };
//
// Then, in your _app.tsx or layout.tsx:
//
// import { UserPreferencesProvider } from '@/context/UserPreferencesContext';
//
// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <UserPreferencesProvider>
//       <Component {...pageProps} />
//     </UserPreferencesProvider>
//   );
// }
