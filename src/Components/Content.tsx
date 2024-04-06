import React from "react";
import { usePlatform } from "../Context/Platform";

export const Content = () => {
  const { platform, setPlatform } = usePlatform();

  return (
    <div className="h-32 w-full bg-stone-900 rounded rounded-lg flex items-center justify-center text-stone-200">
      Content
    </div>
  );
};
