import React from "react";
import { HomeStore } from "./page/home-store";

export const store = {
  homeStore: new HomeStore()
};

export type Store = typeof store;
export const StoreContext = React.createContext(store);
