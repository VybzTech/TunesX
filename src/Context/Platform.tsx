import { createContext, useState, useContext } from "react";

const PlatformContext = createContext("");

export const usePlatform = () => useContext(PlatformContext);

export const StatusProvider = ({ children }: any) => {
  const [platform, setPlatform] = useState<string>("");

  return (
    <PlatformContext.Provider value={{ platform, setPlatform }}>
      {children}
    </PlatformContext.Provider>
  );
};

export default PlatformContext;
