import React, { FC } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import { wcTheme } from "./theme";
import { SiteLayout } from "./layouts/SiteLayout";
import { Navigator } from "./Navigator";
import "./global.css";

export const App: FC<any> = () => {
  return (
    <ThemeProvider theme={wcTheme}>
      <BrowserRouter>
        <SiteLayout>
          <Navigator />
        </SiteLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
};
