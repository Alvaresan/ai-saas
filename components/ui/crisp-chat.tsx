"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f15ee044-b211-4ab6-b5a6-1ec99a4eb24e");
  }, []);
  return null;
};
