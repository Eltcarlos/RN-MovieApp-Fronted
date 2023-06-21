import React, { useRef } from "react";
import AuthNavigation from "./AuthNavigation";
import MainTab from "./tabs/MainTab";
import { useSelector } from "react-redux";

export function RootNavigation() {
  const user = useSelector((store: any) => store.user);
  return <>{user.id !== "" ? <MainTab /> : <AuthNavigation />}</>;
}
