import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppBar } from "components/AppBar";
import { PageLoader } from "components/Loader";
import * as S from "./Layout.styled";

export const Layout: React.FC = () => (
  <S.Container>
    <AppBar />

    <Suspense fallback={<PageLoader />}>
      <Outlet />
    </Suspense>

    <Toaster position="top-center" reverseOrder={false} />
  </S.Container>
);
