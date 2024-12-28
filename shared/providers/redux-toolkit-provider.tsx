import React from "react";
import { store } from "@/configs/store";
import { Provider } from "react-redux";

const ReduxToolkitProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxToolkitProvider;
