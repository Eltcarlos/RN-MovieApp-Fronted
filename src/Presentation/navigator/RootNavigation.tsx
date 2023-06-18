import React from "react";
import AuthNavigation from "./AuthNavigation";
import AppNavigation from "./AppNavigation";

export function RootNavigation() {
  const auth: boolean = true;
  return <>{auth ? <AppNavigation /> : <AuthNavigation />}</>;
}
