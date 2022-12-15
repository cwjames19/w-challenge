import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { DetailsPage } from "./pages/DetailsPage";

export const Navigator: FC<any> = () => {
  return (
    <Routes>
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
};
