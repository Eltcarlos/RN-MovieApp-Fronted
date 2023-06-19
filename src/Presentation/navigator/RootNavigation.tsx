import React from "react";
import AuthNavigation from "./AuthNavigation";
import MainTab from "./tabs/MainTab";

export function RootNavigation() {
  const auth: boolean = true;
  return <>{auth ? <MainTab /> : <AuthNavigation />}</>;
}
